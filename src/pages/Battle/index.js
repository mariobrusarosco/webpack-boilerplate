// Vendors
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

// Actions
import { setAppCriticalError } from 'actions'

// Components
import GoBack from 'components/GoBack'

// Api Helpers
import githubApi from 'api/github'

// Assets

// Styles
import css from './styles.scss'

const Battle = () => {
  // Redux
  const dispatch = useDispatch()

  // State
  const [userA, setUserA] = useState()
  const [userB, setUserB] = useState()

  // LifeCycle
  useEffect(() => {
    const getUsers = async (userA, userB) => {
      try {
        const res = await Promise.all([
          githubApi.get(`/users/${userA}`),
          githubApi.get(`/users/${userB}`)
        ])

        setUserA(res[0])
        setUserB(res[1])
      } catch (e) {
        console.warn(e)
        dispatch(setAppCriticalError({ error: e }))
      }
    }

    getUsers('mariobrusarosco', 'mariobrusarosco')
  }, [])

  return (
    <section className={css.page}>
      <div className={css.wrapper}>
        <h2>Battle</h2>

        <GoBack />
      </div>
    </section>
  )
}

export default Battle
