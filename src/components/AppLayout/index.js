// Vendors
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { withRouter } from 'react-router'

import css from './styles.scss'

const AppLayout = ({ children, history }) => {
  const appCriticalError = useSelector(({ app }) => app.appCriticalError)

  useEffect(() => {
    if (appCriticalError.status) {
      history.push('/ops')
    }
  }, [])

  return <main className={css.appLayout}>{children}</main>
}

export default withRouter(AppLayout)
