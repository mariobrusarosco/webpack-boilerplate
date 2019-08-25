// Styles
import css from './styles.scss'

const Image = ({ alt, src }) => {
  return (
    <picture className={css.picture}>
      <img className={css.image} alt={alt} src={src} />
    </picture>
  )
}

export default Image
