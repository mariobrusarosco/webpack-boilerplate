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

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import LosPollos from 'pages/LosPollos'

// const Home = () => <div className="home">HOme</div>
// const NotFound = () => <div className="not-found">not found</div>
// const LosPollos = () => <div className="los-pollos">los pollos</div>

const RouterStructure = () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <>
            <Header />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="route-motion"
                timeout={300}
                appear
              >
                <div>
                  <AppLayout>
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/los-pollos-hermanos" component={LosPollos} />
                      <Route path="*" component={NotFound} />
                    </Switch>
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

const RouterStructure2 = () => {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<RoutesLoader />}>
  <Switch>
    {routes.map(({ path, Component }, i) => (
      <Route exact path={path} key={i}>
        {({ match }) => {
          console.log(match)
          return (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component match={match} />
              </div>
            </CSSTransition>
          )
        }}
      </Route>
    ))}
  </Switch>
  </Suspense> */}
    </BrowserRouter>
  )
}

const AppRouter = () => {
  const appIsLoaded = useSelector(({ app }) => app.appIsLoaded)

  return !appIsLoaded ? <AppBootstrap /> : <RouterStructure />
}

export default AppRouter
