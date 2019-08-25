// Vendors
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// Actions
import { fetchSomeData, setAppAsLoaded, setAppCriticalError } from 'actions'

// Components
import AppLoader from 'components/Loaders/AppLoader'

const AppBootrap = () => {
  const dispatch = useDispatch()

  const bootsrapApplication = async () => {
    try {
      const result = await dispatch(fetchSomeData())

      console.log('result', result)
    } catch (e) {
      const { message, stack } = e

      dispatch(setAppCriticalError({
        // error: {
          message,
          stack
        // }
      }))
    } finally {
      // dispatch(setAppAsLoaded())
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
