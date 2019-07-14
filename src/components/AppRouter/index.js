// Vendors
import { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Routes Data
import routes from 'configPath/common/routes'

// Components
import Header from 'components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Suspense fallback={<div>...Loading...</div>}>
      <Switch>
        {routes.map((props, i) => (
          <Route {...props} key={i} />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
)

/* Notes
 -> if you want an exact mactch...also ignoring which may come after '/one', like ignore /one/test' ....
 you must use 'strict':

  -- <Route exact strict path="/one" component={PageTwo} />
  -- /mario/one         x
  -- /one               ok
  -- /one/test          x
  -- /mario/one/brusa   x


  <Route exact path="/one" render={() => {
      return <p>asdasdasdasdasd</p>
    }} />
  -- It's another way to render a component
*/
export default AppRouter
