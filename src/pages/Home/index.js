// Vendors
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Styles
import css from './styles.scss'

const Home = () => {
  // Store - Redux
  const example = useSelector(({ example }) => example || {})

  // LifeCycle
  useEffect(() => {}, [])

  return (
    <section className={css.home}>
      <div className={css.wrapper}>
        <div className={css.infoBox}>
          <h1>Home</h1>

          <Link to="/battle">
            <span>Go To Battle Page</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
