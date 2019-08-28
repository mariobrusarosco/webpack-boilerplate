// Vendors
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { pathOr, isEmpty } from 'ramda'
// Styles
import css from './styles.scss'

// Assets
import logoLosPollos from 'assets/images/logo-los-pollos.jpg'
import logoCarWash from 'assets/images/logo-car-wash.png'

// Components
import Image from 'components/Image'

// E2E Data
const {
  BUSINESS: { WALTER },
  E2E: { HOME }
} = APP

const Home = () => {
  // Store - Redux
  const example = useSelector(({ example }) => example)

  // State
  const [currentItem, setCurrentItem] = useState({})
  // LifeCycle
  useEffect(() => {
    const ID = 0
    const item = example['all'][ID]

    setCurrentItem(item)
  }, [])

  if (isEmpty(currentItem)) {
    return null
  }

  return (
    <section className={css.home} data-id={HOME}>
      <div className={css.wrapper}>
        <div className={css.infoBox}>
          <p>Welcome to Albuquerque</p>
        </div>

        <ul className={css.list}>
          <li className={css.linkOne}>
            <Link to="/los-pollos-hermanos">
              <Image alt="Los Pollos Hermanos" src={logoLosPollos.src} />
              {/* Los Pollos Hermanos */}
            </Link>
          </li>
          <li className={css.linkTwo}>
            <Link to="/car-wash">
              <Image alt="Car Wash" src={logoCarWash.src} />
              {/* Car Wash */}
            </Link>
          </li>
          <li className={css.linkOne}>
            <Link to={`/member/${WALTER}`}>
              <Image alt="Walter White" />
              {/* Walter White */}
            </Link>
          </li>
          <li className={css.linkOne}>
            <Link to={`/member/${'all'}`}>
              <Image alt="Jesse" />
              {/* Jesse Pinkman */}
            </Link>
          </li>
          <li className={css.linkTwo}>
            <Link to={`/product/${currentItem.id}`}>
              <Image alt="Logo Two" />
              {/* Specific Product */}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home
