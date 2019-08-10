import css from './styles.scss'

const Img = () => (
  <div className={css.imageWrapper}>
    <img className={css.image} src="" alt="" />
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
      <Img />
      <Img />
      <Img />
      <Img />
    </div>
  )
}

export default LazyLoad
