import type { Request, Response } from 'express'
import * as authService from '../services/auth.service.ts'

export async function login(req: Request, res: Response) {
  try {
    const token = await authService.login(req.body.email, req.body.password)
    return res
      .cookie('access_token', token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60,
      })
      .status(200)
      .json({ message: 'Login succesull' })
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
