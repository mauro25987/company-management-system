import app from './app.ts'
import { env } from './config/env.ts'

const port = env.port

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
