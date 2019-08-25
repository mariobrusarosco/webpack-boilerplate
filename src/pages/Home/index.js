// Vendors
import { Link } from 'react-router-dom'

// Styles
import css from './styles.scss'

// Assets
import logoViva from 'assets/images/logo.svg'
import logoZap from 'assets/images/logo.svg'

// Components
import Image from 'components/Image'

// E2E Data
const {
  E2E: { HOME }
} = APP

const Home = () => {
  return (
    <section className={css.home} data-id={HOME}>
      <div className={css.wrapper}>
        <div className={css.infoBox}>
          <p>Escolha entre Viva Real e Zap para filtrar seus imóveis por portal.</p>
        </div>

        <ul className={css.list}>
          <li className={css.linkViva}>
            <Link to="/viva">
              <Image src={logoViva.src} alt="Logo Viva Real" />
            </Link>
          </li>
          <li className={css.linkZap}>
            <Link to="/zap">
              <Image src={logoZap.src} alt="Logo Zap" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home
