// Vendors
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { pathOr, isEmpty } from 'ramda'
// Styles
import css from './styles.scss'

// Components
import Image from 'components/Image'

// E2E Data
const {
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
    const item = example[ID]
    // const item = allProperties.find(property => property.id === ID)

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
              <Image alt="Los Pollos Hermanos" />
              Los Pollos Hermanos
            </Link>
          </li>
          <li className={css.linkTwo}>
            <Link to="/car-wash">
              <Image alt="Car Wash" />
              Car Wash
            </Link>
          </li>
          <li className={css.linkOne}>
            <Link to="/member/walter-white">
              <Image alt="Walter White" />
              Walter White
            </Link>
          </li>
          <li className={css.linkOne}>
            <Link to="/member/jesse">
              <Image alt="Jesse" />
              Jesse Pinkman
            </Link>
          </li>
          <li className={css.linkTwo}>
            <Link to={`/product/${currentItem.id}`}>
              <Image alt="Logo Two" />
              Specific Product
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home
