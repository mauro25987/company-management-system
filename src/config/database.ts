import { DatabaseSync } from 'node:sqlite'

export const db = new DatabaseSync('data/app.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  )
`)
