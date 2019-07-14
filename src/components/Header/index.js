// Vendors
import { Link } from 'react-router-dom'

// Styles
import styles from './styles.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/one">Page One</Link>
        </li>
        <li>
          <Link to="/two">Page Two</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
