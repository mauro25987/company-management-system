import type { Request, Response } from 'express'

export function root(req: Request, res: Response) {
  return res.json({ message: 'Hola Mundo' })
}

export function health(req: Request, res: Response) {
  return res.json({ message: { status: 'ok', uptime: process.uptime() } })
}
