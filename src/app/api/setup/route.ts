import { sql } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS licenses (
        id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        machine_id    VARCHAR(64) UNIQUE NOT NULL,
        status        VARCHAR(20) NOT NULL DEFAULT 'trial',
        trial_start   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        trial_end     TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '7 days'),
        licensed_at   TIMESTAMPTZ,
        stripe_session VARCHAR(255),
        email         VARCHAR(255),
        created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `
    await sql`CREATE INDEX IF NOT EXISTS idx_licenses_machine_id ON licenses(machine_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_licenses_stripe_session ON licenses(stripe_session)`
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
