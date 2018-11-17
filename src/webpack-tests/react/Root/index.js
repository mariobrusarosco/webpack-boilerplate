import { hot } from 'react-hot-loader'

// Own Styles
import styles from './app.scss'

// Other Components and/or Assets
import ted from '../../../images/ted.png'
import Counter from '../Counter'
import markdown from '../../../../readme.md'

const Root = () => (
  <div>
    <h1 className={styles.title}>React Components</h1>
    <p>Via require ()</p>
    <img className={styles.img} src={require('../../../images/ted.png')} alt="TED" />
    <p>Via import</p>
    <img className={styles.img} src={ted} alt="TED" />
    <Counter />
    <h2>Markdown</h2>
    <div dangerouslySetInnerHTML={{ __html: markdown }} /> 
  </div>
)

export default hot(module)(Root)
