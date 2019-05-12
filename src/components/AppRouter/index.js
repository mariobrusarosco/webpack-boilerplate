// Vendors
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from 'components/Header'
// Lazy Components
const PageOne = lazy(() => import('pages/PageOne'))
const PageTwo = lazy(() => import('pages/PageTwo'))

const AppRouter = () => (
  <Suspense fallback={<div>...Loading...</div>}>
    <BrowserRouter>
      <Header />
      <Route path="/one" exact component={PageOne} />
      <Route path="/two" exact component={PageTwo} />
    </BrowserRouter>
  </Suspense>
)

export default AppRouter
