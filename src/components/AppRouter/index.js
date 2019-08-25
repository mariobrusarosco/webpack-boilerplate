// Vendors
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Routes Data
import routes from 'configPath/common/routes'

// Components
import Header from 'components/Header'
import AppBootstrap from 'components/AppBootstrap'
import AppLayout from 'components/AppLayout'
import RoutesLoader from 'components/Loaders/RoutesLoader'

const RouterStructure = () => {
  return (
    <BrowserRouter>
      <Header />

      <AppLayout>
        <Suspense fallback={<RoutesLoader />}>
          <Switch>
            {routes.map((props, i) => (
              <Route {...props} key={i} />
            ))}
          </Switch>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  )
}

const AppRouter = () => {
  const appIsLoaded = useSelector(({ App }) => App.appIsLoaded)

  return true ? <AppBootstrap /> : <RouterStructure />
}

export default AppRouter
