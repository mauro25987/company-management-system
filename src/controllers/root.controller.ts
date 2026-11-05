import type { Request, Response } from 'express'

export function root(req: Request, res: Response) {
  return res.json({ message: 'Hola Mundo' })
}
