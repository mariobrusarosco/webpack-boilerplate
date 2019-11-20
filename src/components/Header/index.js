// Vendors
import { NavLink } from 'react-router-dom'

// Styles
import css from './styles.scss'

// Routes
import { routesAsObject } from 'configPath/common/routes'

const { Battle } = routesAsObject

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <div className={css.logo}>
          <NavLink to={`${Battle.path}`}>
            <span>battle</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
