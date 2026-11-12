import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <header>
        <button>Login</button>
        <button>Logout</button>
      </header>
      <main>
        <p>Pagina Principal</p>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
