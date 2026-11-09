import type { UserProps } from '../types/user'

export function User({ user }: UserProps) {
  return <div>User {user.email}</div>
}
