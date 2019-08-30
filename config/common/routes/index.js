// Vendors
import { lazy } from 'react'

// Configuration
const { ROOT_URL } = APP

// Pages
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import LosPollos from 'pages/LosPollos'

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
    Component: LosPollos
  },
  // {
  //   name: 'Car Wash',
  //   path: `${ROOT_URL}car-wash`,
  //   Component: 'pages/CarWash'
  // },
  // {
  //   name: 'Member',
  //   path: `${ROOT_URL}member/:id`,
  //   Component: 'pages/Member'
  // },
  // {
  //   name: 'Product',
  //   path: `${ROOT_URL}product/:id`,
  //   Component: 'pages/Product'
  // },
  // {
  //   name: 'Ops',
  //   path: `${ROOT_URL}ops`,
  //   Component: 'pages/AppError'
  // },
  {
    name: 'NotFound',
    path: `*`,
    Component: NotFound
  }
]

export default routes
