import { sql } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ machineId: string }> }
) {
  try {
    const { machineId } = await params

    const result = await sql`
      SELECT status, trial_end, licensed_at FROM licenses
      WHERE machine_id = ${machineId}
    `

    if (result.rows.length === 0) {
      return NextResponse.json({ status: 'not_found' }, { status: 404 })
    }

    const row = result.rows[0]
    let status: string
    if (row.licensed_at) {
      status = 'licensed'
    } else if (new Date(row.trial_end) > new Date()) {
      status = 'trial'
    } else {
      status = 'expired'
    }

    return NextResponse.json({ status })
  } catch (error) {
    console.error('License status error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
