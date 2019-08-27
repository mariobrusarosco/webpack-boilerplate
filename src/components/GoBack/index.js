// Vendors
import { memo } from 'react'
import classnames from 'classnames'
// Utils
import history from 'utils/app-history'

const GoBack = memo(({ customClass }) => {
  return (
    <button className="button go-back" onClick={() => history.goBack()}>
      back
    </button>
  )
})

export default GoBack
