// Vendors
import { useEffect } from 'react'

// Styles
import css from './styles.scss'

// Utils
import lazyloadSupport from 'utils/lazyload/support'
const { native } = lazyloadSupport

// Components
import Pulse from 'components/Loaders/Pulse'

const Img = ({ src, alt }) => {
  useEffect(() => {
    document.dispatchEvent(new Event('updateLazyLoadWatcher'))
  }, [src])

  const target = `${src}&h=150&w=90`

  return (
    <div className={css.ratio}>
      <picture className={css.picture}>
        <img
          className={css.image}
          alt={alt}
          src={native ? target : ''}
          loading={native ? 'lazy' : undefined}
          data-src={!native ? target : ''}
        />
      </picture>
      <div className={css.pulseWrapper}>
        <Pulse />
      </div>
    </div>
  )
}

export default Img
