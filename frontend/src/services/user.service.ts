export const getUsers = async () => {
  const response = await fetch('http://localhost:3000/api/v1/users')

  if (!response.ok) throw new Error('Error al obtener usuarios')  

  return response.json()
}
