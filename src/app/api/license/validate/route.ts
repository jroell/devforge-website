import { sql } from '@/lib/db'
import { signLicensePayload } from '@/lib/hmac'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { machineId } = body

    if (!machineId || typeof machineId !== 'string') {
      return NextResponse.json({ error: 'Invalid machineId' }, { status: 400 })
    }

    const result = await sql`
      SELECT status, trial_end, licensed_at FROM licenses
      WHERE machine_id = ${machineId}
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'License not found' }, { status: 404 })
    }

    const row = result.rows[0]

    let status: 'trial' | 'expired' | 'licensed'
    if (row.licensed_at) {
      status = 'licensed'
    } else if (new Date(row.trial_end) > new Date()) {
      status = 'trial'
    } else {
      status = 'expired'
      if (row.status === 'trial') {
        await sql`
          UPDATE licenses SET status = 'expired', updated_at = NOW()
          WHERE machine_id = ${machineId}
        `
      }
    }

    // Clock drift check
    const clientTimestamp = body.clientTimestamp
    if (clientTimestamp && Math.abs(Date.now() - clientTimestamp) > 24 * 60 * 60 * 1000) {
      return NextResponse.json(
        { error: 'Clock drift detected. Please sync your system clock.' },
        { status: 403 }
      )
    }

    const payload = signLicensePayload(
      status,
      machineId,
      status === 'licensed' ? null : row.trial_end
    )
    return NextResponse.json(payload)
  } catch (error) {
    console.error('License validate error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
