// Vendors
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { pathOr, isEmpty } from 'ramda'
// Styles
import css from './styles.scss'

// Components
import Image from 'components/Image'
import GoBack from 'components/GoBack'

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

  console.log(HOME)

  return (
    <section className={css.home} data-id={HOME}>
      <div className={css.wrapper}>
        <div className={css.infoBox}>
          <p>Home Information goes here</p>
        </div>

        <ul className={css.list}>
          <li className={css.linkOne}>
            <Link to="/one">
              <Image alt="Logo One" />
              Page One
            </Link>
          </li>
          <li className={css.linkTwo}>
            <Link to="/two">
              <Image alt="Logo Two" />
              Page Two
            </Link>
          </li>
          <li className={css.linkOne}>
            <Link to="/products">
              <Image alt="Logo One" />
              Products
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
