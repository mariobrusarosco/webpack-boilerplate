// Vendors
import { memo } from 'react'
import classnames from 'classnames'

// Styles
import css from './styles.scss'

// Utils
import history from 'utils/app-history'

const GoBack = memo(({ customClass, buttonText = 'back' }) => {
  const handleGoBack = () => history.goBack()

  return (
    <button
      className={classnames([css.btn], [customClass], 'button go-back')}
      onClick={handleGoBack}
    >
      {buttonText}
    </button>
  )
})

export default GoBack
