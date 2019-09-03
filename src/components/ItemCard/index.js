// Vendors
import { Link } from 'react-router-dom'
// Vendors
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
  FadeTransition
} from 'react-transition-group'

// Styles
import css from './styles.scss'

// Components
// import Image from 'components/Image'
import LazyImage from 'components/LazyImage'
import Info from 'components/SpecificComponent/Info'

// Utils
import toCurrency from 'utils/formatters/currency'

const ItemCard = ({ data }) => {
  // Props
  const { id, albumId, title, url } = data

  // Internal Components
  const Features = () => {
    return (
      <>
        <Info label="id" content={id} />
        <Info label="album" content={albumId} formatter={toCurrency} suffix="/mês" />
        <Info label="title" content={title} />
      </>
    )
  }

  const MoreDetails = () => (
    <Link to={`/product/${id}`} className={css.moreDetails}>
      <span>mais detalhes</span>
    </Link>
  )

  return (
    //   <CSSTransition
    //     in
    //     appear
    //     timeout={200}
    //     onExit={() => console.log('exit')}
    //     classNames="card-motion"
    //   >
    <li className={css.card}>
      <div className={css.imageArea}>
        <LazyImage src={url} alt={`${title}`} />
      </div>
    </li>
    // </CSSTransition>
  )
}

const ItemCard2 = ({ data }) => {
  // Props
  const { urls } = data

  // Internal Components

  return (
    <CSSTransition
      in
      appear
      timeout={200}
      onExit={() => console.log('exit')}
      classNames="card-motion"
    >
      <li className={css.card}>
        <div className={css.imageArea}>
          <LazyImage
            src={urls.small}
            // alt={`${title}`}
          />
        </div>
      </li>
    </CSSTransition>
  )
}

export default ItemCard2
