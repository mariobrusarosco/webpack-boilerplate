// Vendors
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

// Actions
import { setAppCriticalError } from 'actions'

// Components
import UserSelection from 'components/UserSelection'
import BattleComparasion from 'components/BattleComparation'
import AppLoader from 'components/Loaders/AppLoader'

// Api Helpers
import githubApi from 'api/github'

// Assets

// Styles
import css from './styles.scss'

const Battle = () => {
  const [githubUsers, setGithubUsers] = useState([])

  return (
    <section className={css.page}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Battle</h2>
        <UserSelection onUserFethed={setGithubUsers} />
        {!githubUsers ? <AppLoader /> : <BattleComparasion githubUsers={githubUsers} />}
      </div>
    </section>
  )
}

export default Battle
