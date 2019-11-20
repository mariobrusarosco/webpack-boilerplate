// Api Helpers
import githubApi from 'api/github'

// Styles
import css from './styles.scss'
// Vendors
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const UserSelection = ({ onUserFethed }) => {
  // Redux
  const dispatch = useDispatch()

  const [firstUser, setFirstUser] = useState('matheuspoleza')
  const [secondUser, setSecondUser] = useState('mariobrusarosco')

  const onStartBattle = async () => {
    try {
      const res = await Promise.all([
        Promise.all([
          githubApi.get(`/users/${firstUser}`),
          githubApi.get(`/users/${firstUser}/repos`)
        ]),
        Promise.all([
          githubApi.get(`/users/${secondUser}`),
          githubApi.get(`/users/${firstUser}/repos`)
        ])
      ])

      const users = res.map(data => {
        const { name, avatar_url, followers, public_repos } = data[0].data
        const stars = data[1].data.reduce((total, item) => {
          return total + item.stargazers_count
        }, 0)

        return {
          name,
          photo: avatar_url,
          followers,
          repos: public_repos,
          stars
        }
      })

      onUserFethed(users)

      setFirstUser('')
      setSecondUser('')
    } catch (e) {
      console.warn(e)
      dispatch(setAppCriticalError({ error: e }))
    }
  }

  return (
    <div className={css.inputBox}>
      <h2 className={css.title}>Type two Users</h2>
      <div className={css.inputWrapper}>
        <input
          type="text"
          value={firstUser}
          className={css.input}
          onChange={e => setFirstUser(e.target.value)}
        />
        <input
          type="text"
          value={secondUser}
          className={css.input}
          onChange={e => setSecondUser(e.target.value)}
        />
      </div>
      <button className={css.startBtn} onClick={onStartBattle}>
        Start Battle
      </button>
    </div>
  )
}

export default UserSelection
