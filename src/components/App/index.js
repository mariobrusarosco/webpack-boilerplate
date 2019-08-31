// React Hot Loader
import { hot } from 'react-hot-loader/root'
// Components
import AppRouter from 'components/AppRouter'

// Utils
import lazyload from 'utils/lazyload'

lazyload()

const App = () => {
  return <AppRouter />
}

export default hot(App)
