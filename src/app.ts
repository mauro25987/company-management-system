import express, { type Express } from 'express'
import './config/database.ts'
import authRoutes from './routes/auth.routes.ts'
import rootRoutes from './routes/root.routes.ts'
import userRoutes from './routes/user.routes.ts'

const app: Express = express()

app.use(express.json())
app.use(rootRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)

export default app
