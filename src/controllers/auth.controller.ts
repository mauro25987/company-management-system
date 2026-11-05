import type { Request, Response } from 'express'
import * as authService from '../services/auth.service.ts'

export async function login(req: Request, res: Response) {
  try {
    const result = await authService.login(req.body.email, req.body.password)
    return res.status(200).json({ token: result })
  } catch (error) {
    return res
      .status(401)
      .json({ error: error instanceof Error ? error.message : 'Error desconocido' })
  }
}

export async function register(req: Request, res: Response) {
  try {
    const result = await authService.register(req.body.email, req.body.password)
    return res.status(201).json({ message: 'Usuario registrado correctamente', user: result })
  } catch (error) {
    return res
      .status(401)
      .json({ error: error instanceof Error ? error.message : 'Error desconocido' })
  }
}
