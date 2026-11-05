import { db } from '../config/database.ts'
import type { UserResult } from '../types/user.ts'

export function createUser(id: string, email: string, password: string) {
  const user = db.prepare(
    'INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?) RETURNING id, email'
  )
  return user.get(id, email, password)
}

export function findUserByEmail(email: string): UserResult {
  const user = db.prepare('SELECT * FROM users WHERE email = ?')
  return user.get(email) as UserResult
}

export function showUsers() {
  const users = db.prepare('SELECT * FROM users')
  return users.all()
}
