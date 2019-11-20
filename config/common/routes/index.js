// Vendors
import { pathOr, omit } from 'ramda'
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
    name: 'Battle',
    path: `${ROOT_URL}battle`,
    Component: lazy(() => import('pages/Battle'))
  },
  {
    name: 'AppError',
    path: `${ROOT_URL}ops`,
    Component: lazy(() => import('pages/AppError'))
  },
  {
    name: 'NotFound',
    path: `*`,
    Component: lazy(() => import('pages/NotFound'))
  }
]

export const routesAsObject = routes.reduce((acc, route) => {
  const routeName = pathOr('_', ['name'], route)
  const routeProps = omit(['name'], route)

  return { ...acc, [routeName]: { ...routeProps } }
}, {})

export default routes
