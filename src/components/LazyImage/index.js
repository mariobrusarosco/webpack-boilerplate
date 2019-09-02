// Vendors
import { useEffect } from 'react'

// Styles
import css from './styles.scss'
// Utils
import lazyloadSupport from 'utils/lazyload/support'

const { native } = lazyloadSupport

const Img = ({ src, alt }) => {
  useEffect(() => {
    document.dispatchEvent(new Event('updateLazyLoadWatcher'))
  }, [src])

  return (
    <picture className={css.picture}>
      <img
        className={css.image}
        alt={alt}
        src={native ? src : ''}
        loading={native ? 'lazy' : undefined}
        data-src={!native ? src : ''}
      />
    </picture>
  )
}

export default Img
