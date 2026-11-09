import type { Request, Response } from 'express'
import * as userService from '../services/user.service.ts'

export function getUsers(req: Request, res: Response) {
  try {
    const result = userService.getUsersInfo()
    return res.status(200).json({ message: result })
  } catch (error) {
    return res
      .status(401)
      .json({ error: error instanceof Error ? error.message : 'Error desconido' })
  }
}

export function getUser(req: Request<{ id: string }>, res: Response) {
  try {
    const user = userService.getUserInfo(req.params.id)
    return res.status(200).json({ message: user })
  } catch (error) {
    return res
      .status(401)
      .json({ error: error instanceof Error ? error.message : 'Error desconocido' })
  }
}
export function modifyUser(req: Request, res: Response) {}
export function deleteUser(req: Request, res: Response) {}
