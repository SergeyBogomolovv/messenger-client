export interface JwtPayload {
  id: string
  logo: string | null
  name: string
  username: string
  email: string
  verified: string | null
  provider: string[]
}
