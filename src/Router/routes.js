import {createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Feed } from '../pages/Feed'
import { Register } from '../pages/Register'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: '/feed',
    element: <Feed/>
  },{
    path: '/register',
    element: <Register/>
  }
])