import { jwtVerify, SignJWT } from 'jose'
import type { PublicUser } from '../types/user.ts'
import { env } from '../config/env.ts'

export function createToken(user: PublicUser) {
  return new SignJWT({ email: user.email })
    .setProtectedHeader({ alg: env.jwtAlg })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime(env.jwtExpiresIn)
    .sign(env.jwtSecret)
}
export function verifyToken(token: string) {
  return jwtVerify(token, env.jwtSecret)
}
