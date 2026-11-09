import { createUser, findUserByEmail, getUserAndPw } from '../repositories/user.repository.ts'
import { createToken } from '../utils/jwt.ts'
import { createId, hashPassword, verifyPassword } from '../utils/password.ts'

export async function login(email: string, password: string) {
  const user = getUserAndPw(email)
  if (!user) throw new Error('Correo no existe')

  const passwordValid = await verifyPassword(password, user.password_hash)
  if (!passwordValid) throw new Error('Password erronea')

  return await createToken(user)
}

export async function register(email: string, password: string) {
  const user = findUserByEmail(email)
  if (user) throw new Error('Usuario ya existe')

  const passwordHash = await hashPassword(password)
  const id = createId()

  return createUser(id, email, passwordHash)
}
