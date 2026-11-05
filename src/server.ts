import app from './app.ts'
import { env } from './config/env.ts'

const port = env.port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
