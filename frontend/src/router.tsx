import { createBrowserRouter } from 'react-router'
import App from './App'
import Layout from './components/Layout'
import {
  AboutPage,
  DashboardPage,
  LoginPage,
  LogoutPage,
  ProfilePage,
  ProfilesPage,
} from './pages/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: App },
      { path: 'auth/login', Component: LoginPage },
      { path: 'auth/logout', Component: LogoutPage },
      { path: 'dashboard', Component: DashboardPage },
      { path: 'user/profile', Component: ProfilePage },
      { path: 'profiles', Component: ProfilesPage },
      { path: 'about', Component: AboutPage },
    ],
  },
])
