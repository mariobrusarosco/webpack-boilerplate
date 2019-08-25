// Utils
import history from 'utils/app-history'
import { memo } from 'react'

const GoBack = memo(() => {
  return (
    <button className="go-back" onClick={() => history.goBack()}>back</button>
  )
})

export default GoBack
