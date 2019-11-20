// Vendors
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
      <Route
        render={({ location }) => (
          <>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="route-motion"
                timeout={350}
                appear
              >
                <div>
                  <AppLayout>
                    <Suspense fallback={<RoutesLoader />}>
                      <Switch location={location}>
                        {routes.map(({ Component, ...props }, i) => (
                          <Route
                            location={location}
                            component={Component}
                            {...props}
                            key={i}
                          />
                        ))}
                      </Switch>
                    </Suspense>
                  </AppLayout>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </>
        )}
      />
    </BrowserRouter>
  )
}

const AppRouter = () => {
  return <RouterStructure />
}

export default AppRouter
