export interface UserPublic {
  id: string
  email: string
}

export type UserProps = { user: UserPublic }
