import { Router } from 'express'
import * as rootController from '../controllers/root.controller.ts'

const router = Router()

router.get('/', rootController.root)

export default router
