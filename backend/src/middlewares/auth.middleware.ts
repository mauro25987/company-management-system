import type { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.ts'

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.access_token

  try {
    if (!token) return res.status(401).json({ error: 'No autenticado' })

    const { payload } = await verifyToken(token)
    if (!payload.sub) return res.status(401).json({ error: 'Token invalido' })
    req.user = { id: payload.sub }

    return next()
  } catch (error) {
    return res
      .status(401)
      .json({ error: error instanceof Error ? error.message : 'Token Invalido' })
  }
}
