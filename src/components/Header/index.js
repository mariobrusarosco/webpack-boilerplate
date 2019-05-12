// Vendors
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/one">Page One</Link></li>
        <li><Link to="/two">Page Two</Link></li>
      </ul>
    </header>
  )
}

export default Header
