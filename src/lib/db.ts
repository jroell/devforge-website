import { sql } from '@vercel/postgres'

export { sql }

export interface License {
  id: string
  machine_id: string
  status: 'trial' | 'expired' | 'licensed'
  trial_start: string
  trial_end: string
  licensed_at: string | null
  stripe_session: string | null
  email: string | null
  created_at: string
  updated_at: string
}
