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
    component: Home,
    exact: true
  },
  {
    name: 'VivaReal',
    path: `${ROOT_URL}viva`,
    component: lazy(() => import('pages/VivaReal'))
  },
  {
    name: 'Zap',
    path: `${ROOT_URL}zap`,
    component: lazy(() => import('pages/Zap'))
  },
  {
    name: 'Property',
    path: `${ROOT_URL}imovel/:id`,
    component: lazy(() => import('pages/Property'))
  },
  {
    name: 'Ops',
    path: `${ROOT_URL}ops`,
    component: lazy(() => import('pages/AppError'))
  },
  {
    name: 'NotFound',
    path: `*`,
    component: lazy(() => import('pages/NotFound'))
  }
]

export default routes
