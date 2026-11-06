import { Router } from 'express'
import * as rootController from '../controllers/root.controller.ts'

const router = Router()

router.get('/', rootController.root)
router.get('/health', rootController.health)

export default router
