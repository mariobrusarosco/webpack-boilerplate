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
    name: 'Page One',
    path: `${ROOT_URL}one`,
    component: lazy(() => import('pages/PageOne'))
  },
  {
    name: 'Page Two',
    path: `${ROOT_URL}two`,
    component: lazy(() => import('pages/PageTwo'))
  },
  {
    name: 'Products',
    path: `${ROOT_URL}products`,
    component: lazy(() => import('pages/Products'))
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
