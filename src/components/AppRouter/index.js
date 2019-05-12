// Vendors
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import PageOne from 'pages/PageOne'
import PageTwo from 'pages/PageTwo'

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/one" exact component={PageOne} />
    <Route path="/two" exact component={PageTwo} />
  </BrowserRouter>
)

export default AppRouter
