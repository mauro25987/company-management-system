import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { type Express } from 'express'
import './config/database.ts'
import { authMiddleware } from './middlewares/auth.middleware.ts'
import authRoutes from './routes/auth.routes.ts'
import rootRoutes from './routes/root.routes.ts'
import userRoutes from './routes/user.routes.ts'

const app: Express = express()

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(rootRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', authMiddleware, userRoutes)

export default app
