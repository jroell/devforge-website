import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { machineId } = body

    if (!machineId || typeof machineId !== 'string') {
      return NextResponse.json({ error: 'Invalid machineId' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'DevForge AI — Lifetime License',
              description: 'One-time payment. Lifetime updates. 30+ developer tools.',
            },
            unit_amount: 999,
          },
          quantity: 1,
        },
      ],
      metadata: { machineId },
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/#pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
