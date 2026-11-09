import { useEffect, useState } from 'react'
import { User } from './components/User'
import { getUsers } from './services/user.service'
import type { UserPublic } from './types/user'

function App() {
  const [users, setUsers] = useState<UserPublic[]>([])

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await getUsers()
        setUsers(response.message)
      } catch (error) {
        console.error(error)
      }
    }
    loadUsers()
  }, [])

  return (
    <>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </>
  )
}

export default App
