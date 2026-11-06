import { db } from '../config/database.ts'
import type { UserResult, UserResultWithPw, Users } from '../types/user.ts'

export function createUser(id: string, email: string, password: string) {
  const user = db.prepare(
    'INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?) RETURNING id, email'
  )
  return user.get(id, email, password)
}

export function findUserByEmail(id: string): UserResult {
  const user = db.prepare('SELECT id, email FROM users WHERE id = ?')
  return user.get(id) as UserResult
}

export function getUserAndPw(email: string): UserResultWithPw {
  const user = db.prepare('SELECT id, email, password_hash FROM users WHERE email = ?')
  return user.get(email) as UserResultWithPw
}

export function showUsers(): Users {
  const users = db.prepare('SELECT id, email FROM users')
  return users.all() as unknown as Users
}
