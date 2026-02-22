import crypto from 'crypto'

const HMAC_SECRET = process.env.HMAC_SECRET!

export interface SignedLicensePayload {
  status: 'trial' | 'expired' | 'licensed'
  machineId: string
  expiresAt: string | null
  timestamp: number
  signature: string
}

export function signLicensePayload(
  status: 'trial' | 'expired' | 'licensed',
  machineId: string,
  expiresAt: string | null
): SignedLicensePayload {
  const timestamp = Date.now()
  const data = `${status}:${machineId}:${expiresAt ?? 'null'}:${timestamp}`
  const signature = crypto
    .createHmac('sha256', HMAC_SECRET)
    .update(data)
    .digest('hex')

  return { status, machineId, expiresAt, timestamp, signature }
}
