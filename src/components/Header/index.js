// Vendors
import { Link } from 'react-router-dom'

// Assets
import logo from 'assets/images/logo.svg'

// Components
import Image from 'components/Image'

// Styles
import css from './styles.scss'

// Constants
const { APP_NAME } = APP

// E2E Data
const {
  E2E: { HEADER }
} = APP

const Header = () => {
  return (
    <header className={css.header} data-id={HEADER}>
      <div className={css.wrapper}>
        <div className={css.logo}>
          <Link to="/">
            <Image src={logo} alt={`Logo ${APP_NAME}`} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
