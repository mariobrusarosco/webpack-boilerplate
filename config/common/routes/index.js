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
    name: 'Los Pollos Hermanos',
    path: `${ROOT_URL}los-pollos-hermanos`,
    component: lazy(() => import('pages/LosPollos'))
  },
  {
    name: 'Car Wash',
    path: `${ROOT_URL}car-wash`,
    component: lazy(() => import('pages/CarWash'))
  },
  {
    name: 'Member',
    path: `${ROOT_URL}member/:id`,
    component: lazy(() => import('pages/Member'))
  },
  {
    name: 'Product',
    path: `${ROOT_URL}product/:id`,
    component: lazy(() => import('pages/Product'))
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
