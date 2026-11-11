import type React from 'react'
import { useNavigate } from 'react-router'
import { login } from '../services/auth.service'

function LoginPage() {
  const navigate = useNavigate()
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const email = String(formData.get('email'))
    const password = String(formData.get('password'))

    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Ingresar Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Ingresar Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginPage
