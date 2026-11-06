export interface PublicUser {
  id: string
  email: string
}

export interface User extends PublicUser {
  password_hash: string
}

export type UserResult = PublicUser | undefined

export type UserResultWithPw = User | undefined

export type Users = PublicUser[]
