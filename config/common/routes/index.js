// Vendors
import { lazy } from 'react'

// Components

// Pages
import Home from 'pages/Home'

// Lazy Components
const PageOne = lazy(() => import('pages/PageOne'))
const PageTwo = lazy(() => import('pages/PageTwo'))
const Products = lazy(() => import('pages/Products'))
const Product = lazy(() => import('pages/Product'))
const NotFound = lazy(() => import('pages/NotFound'))

const { ROOT_URL } = APP

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
    component: PageOne
  },
  {
    name: 'PageTwo',
    path: `${ROOT_URL}two`,
    component: PageTwo
  },
  {
    name: 'Products',
    path: `${ROOT_URL}products`,
    component: Products,
    exact: true
  },
  {
    name: 'Product',
    path: `${ROOT_URL}products/:id`,
    component: Product
  },
  {
    name: 'NotFound',
    path: `*`,
    component: NotFound
  }
]

export default routes
