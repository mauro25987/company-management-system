import { Router } from 'express'
import * as userController from '../controllers/user.controller.ts'

const router = Router()

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/:id', userController.modifyUser)
router.delete('/:id', userController.deleteUser)

export default router
