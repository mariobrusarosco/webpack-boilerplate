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
    name: 'PageOne',
    path: `${ROOT_URL}one`,
    component: lazy(() => import('pages/PageOne'))
  },
  {
    name: 'PageTwo',
    path: `${ROOT_URL}two`,
    component: lazy(() => import('pages/PageTwo'))
  },
  {
    name: 'Products',
    path: `${ROOT_URL}products`,
    component: lazy(() => import('pages/Products')),
    exact: true
  },
  {
    name: 'Product',
    path: `${ROOT_URL}products/:id`,
    component: lazy(() => import('pages/Product'))
  },
  {
    name: 'NotFound',
    path: `*`,
    component: lazy(() => import('pages/NotFound'))
  }
]

export default routes
