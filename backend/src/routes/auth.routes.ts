import { Router } from 'express'
import * as authController from '../controllers/auth.controller.ts'
import { authMiddleware } from '../middlewares/auth.middleware.ts'

const router = Router()

router.post('/login', authController.login)
router.post('/logout', authMiddleware, authController.logout)
router.post('/register', authController.register)

export default router
