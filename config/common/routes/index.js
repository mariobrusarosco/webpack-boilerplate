// Vendors
import { lazy } from 'react'

// Configuration
const { ROOT_URL } = APP

// Pages
import Home from 'pages/Home'

const routes = [
  {
    name: 'Home',
    path: `${ROOT_URL}`,
    Component: Home,
    exact: true
  },
  {
    name: 'Los Pollos Hermanos',
    path: `${ROOT_URL}los-pollos-hermanos`,
    Component: lazy(() => import('pages/LosPollos'))
  },
  {
    name: 'Car Wash',
    path: `${ROOT_URL}car-wash`,
    Component: lazy(() => import('pages/CarWash'))
  },
  {
    name: 'Member',
    path: `${ROOT_URL}member/:id`,
    Component: lazy(() => import('pages/Member'))
  },
  {
    name: 'Product',
    path: `${ROOT_URL}product/:id`,
    Component: lazy(() => import('pages/Product'))
  },
  {
    name: 'Login',
    path: `${ROOT_URL}login`,
    Component: lazy(() => import('pages/Login'))
  },
  {
    name: 'Ops',
    path: `${ROOT_URL}ops`,
    Component: lazy(() => import('pages/AppError'))
  },
  {
    name: 'NotFound',
    path: `*`,
    Component: lazy(() => import('pages/NotFound'))
  }
]

export default routes
