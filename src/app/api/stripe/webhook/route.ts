import { stripe } from '@/lib/stripe'
import { sql } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const machineId = session.metadata?.machineId
    const email = session.customer_details?.email

    if (machineId) {
      await sql`
        UPDATE licenses
        SET status = 'licensed',
            licensed_at = NOW(),
            stripe_session = ${session.id},
            email = ${email ?? null},
            updated_at = NOW()
        WHERE machine_id = ${machineId}
      `
    }
  }

  return NextResponse.json({ received: true })
}
