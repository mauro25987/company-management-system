import express, { type Express } from 'express'
import './config/database.ts'
import authRoutes from './routes/auth.routes.ts'
import rootRoutes from './routes/root.routes.ts'

const app: Express = express()

app.use(express.json())
app.use(rootRoutes)
app.use('/api/v1/auth', authRoutes)

export default app
