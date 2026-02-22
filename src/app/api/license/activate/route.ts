import { sql } from '@/lib/db'
import { signLicensePayload } from '@/lib/hmac'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { machineId } = body

    if (!machineId || typeof machineId !== 'string' || machineId.length < 16) {
      return NextResponse.json({ error: 'Invalid machineId' }, { status: 400 })
    }

    // Check if machine already has a license
    const existing = await sql`
      SELECT status, trial_end, licensed_at FROM licenses
      WHERE machine_id = ${machineId}
    `

    if (existing.rows.length > 0) {
      const row = existing.rows[0]
      const status = row.licensed_at
        ? 'licensed'
        : new Date(row.trial_end) > new Date()
          ? 'trial'
          : 'expired'

      const payload = signLicensePayload(
        status as 'trial' | 'expired' | 'licensed',
        machineId,
        row.licensed_at ? null : row.trial_end
      )
      return NextResponse.json(payload)
    }

    // Create new trial
    const result = await sql`
      INSERT INTO licenses (machine_id)
      VALUES (${machineId})
      RETURNING trial_end
    `

    const trialEnd = result.rows[0].trial_end
    const payload = signLicensePayload('trial', machineId, trialEnd)
    return NextResponse.json(payload, { status: 201 })
  } catch (error) {
    console.error('License activate error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
