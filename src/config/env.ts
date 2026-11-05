export const env = {
  jwtSecret: new TextEncoder().encode(process.env.JWT_SECRET ?? 'secret'),
  jwtExpiresIn: process.env.JWT_EXPIRE_IN ?? '15m',
  jwtAlg: 'HS256' as const,
  saltRounds: Number(process.env.SALT_ROUNDS ?? 10),
  port: process.env.PORT ?? 3000,
}
