export const login = async (email: string, password: string) => {
  const response = await fetch('http://localhost:3000/api/v1/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) throw new Error('Error al intentar loguearse')

  return response.json()
}

export const logout = async () => {
  const response = await fetch('http://localhost:3000/api/v1/auth/logout', {
    method: 'POST',
  })

  if (!response.ok) throw new Error('Error al intentar desloguearse')

  return response.json()
}
