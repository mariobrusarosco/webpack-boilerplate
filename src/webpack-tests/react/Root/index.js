import { hot } from 'react-hot-loader'

// Own Styles
import styles from './app.scss'

// Other Components and/or Assets
import ted from '../../../images/ted.png'
import Counter from '../Counter'

const Root = () => (
  <div>
    <h1 className={styles.title}>React Components</h1>
    <img className={styles.img} src={ted} alt="TED" />
    <Counter />
  </div>
)

export default hot(module)(Root)
