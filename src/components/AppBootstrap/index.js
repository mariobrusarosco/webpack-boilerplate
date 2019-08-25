// Vendors
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// Actions
import { fetchProperties, setAppAsLoaded, setAppCriticalError } from 'actions'

// Components
import AppLoader from 'components/Loaders/AppLoader'

const AppBootrap = () => {
  const dispatch = useDispatch()

  const bootsrapApplication = async () => {
    try {
      await dispatch(fetchProperties())
    } catch (fetchError) {
      dispatch(setAppCriticalError(fetchError))
    } finally {
      dispatch(setAppAsLoaded())
    }
  }

  useEffect(() => {
    // bootsrapApplication()
  }, [])

  return (
    <div className="app-bootstrap">
      <AppLoader />
    </div>
  )
}

export default AppBootrap