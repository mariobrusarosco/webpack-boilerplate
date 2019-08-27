// Vendors
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// Actions
import {
  fetchSomeData,
  evaluateSomeData,
  setAppAsLoaded,
  setAppCriticalError
} from 'actions'

// Components
import AppLoader from 'components/Loaders/AppLoader'

const AppBootrap = () => {
  const dispatch = useDispatch()

  const bootsrapApplication = async () => {
    try {
      const data = await dispatch(fetchSomeData())
      await dispatch(evaluateSomeData(data))
    } catch (e) {
      console.warn(e)
      dispatch(setAppCriticalError({ error: e }))
    } finally {
      dispatch(setAppAsLoaded())
    }
  }

  useEffect(() => {
    bootsrapApplication()
  }, [])

  return (
    <div className="app-bootstrap">
      <AppLoader />
    </div>
  )
}

export default AppBootrap
