import { compare, hash } from 'bcrypt'
import { randomUUID } from 'node:crypto'
import { env } from '../config/env.ts'

export function verifyPassword(password: string, passwordHash: string): Promise<boolean> {
  return compare(password, passwordHash)
}

export function hashPassword(password: string): Promise<string> {
  return hash(password, env.saltRounds)
}

export function createId() {
  return randomUUID()
}
