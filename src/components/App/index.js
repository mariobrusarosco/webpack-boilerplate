// React Hot Loader
import { hot } from 'react-hot-loader/root'
// Components
import AppRouter from 'components/AppRouter'

class App extends Component {
  render() {
    return <AppRouter />
  }
}

export default hot(App)
