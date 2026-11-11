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

export interface UserPayload extends Omit<PublicUser, 'email'> {}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload
    }
  }
}
