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
);
CREATE INDEX IF NOT EXISTS idx_licenses_machine_id ON licenses(machine_id);
CREATE INDEX IF NOT EXISTS idx_licenses_stripe_session ON licenses(stripe_session);
