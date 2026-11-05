export interface PublicUser {
  id: string
  email: string
}

export interface User extends PublicUser {
  password_hash: string
}

export type UserResult = User | undefined
