import {createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/login',
    element: <Login/>
  }
])