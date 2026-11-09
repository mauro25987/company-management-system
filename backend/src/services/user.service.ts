import { findUserById, showUsers } from '../repositories/user.repository.ts'

export function getUsersInfo() {
  const users = showUsers()
  if (users) {
    const result = users.map(user => {
      const { id, email } = user
      return { id, email }
    })
    return result
  } else {
    return { message: 'no hay usuarios' }
  }
}

export function getUserInfo(id: string) {
  const user = findUserById(id)
  if (!user) throw new Error('Usuario no existe')
  return user
}
