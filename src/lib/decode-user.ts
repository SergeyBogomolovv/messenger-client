import * as jwt from 'jsonwebtoken'
import { JwtPayload } from '@/types/jwt-payload'

export const decodeUser = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload
}
