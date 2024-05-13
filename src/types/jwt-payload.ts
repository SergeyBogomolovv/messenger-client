export interface JwtPayload {
  id: string
  username: string
  email: string
  verified: string | null
  providers: string[]
}
