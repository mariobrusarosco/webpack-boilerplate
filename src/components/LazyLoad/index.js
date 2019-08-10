// Images
import src from 'assets/images/breaking-bad.jpg'
// Styles
import css from './styles.scss'
// Components

const Img = () => (
  <div className={`${css.imageWrapper} lazy`}>
    <img data-lazy className={css.image} data-src={src} alt="Breaking Bad" />
  </div>
)

const LazyLoad = () => {
  return (
    <div className={css.container}>
      <Img />
      <Img />
      <Img />
      <Img />
      <Img />
      <Img />
      <Img />
      <Img />
    </div>
  )
}

export default LazyLoad
