// Vendors
import { Link } from 'react-router-dom'

// Assets
import logoGrupoZap from 'assets/images/logo-grupo-zap.png'

// Components
import Image from 'components/Image'

// Styles
import css from './styles.scss'

// E2E Data
const {
  E2E: { HEADER }
} = APP

const Header = () => {
  return (
    <header className={css.header} data-id={HEADER}>
      <ul className={css.list}>
        <li className={css.linkGrupoZap}>
          <Link to="/">
            <Image src={logoGrupoZap.src} alt="Logo Grupo ZAP" />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
