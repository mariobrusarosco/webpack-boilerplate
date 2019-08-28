// Vendors
import { pathOr } from 'ramda'
import { Link } from 'react-router-dom'

// Styles
import css from './styles.scss'

// Components
// import Image from 'components/Image'
import LazyImage from 'components/LazyImage'
import Info from 'components/Property/Info'

// Utils
import toCurrency from 'utils/formatters/currency'

const PropertyCard = ({ data }) => {
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
    <li className={css.card}>
      <div className={css.imageArea}>
        <LazyImage src={url} alt={`${title}`} />
      </div>

      <ul className={css.infoArea}>
        <Features />
        <MoreDetails />
      </ul>
    </li>
  )
}

export default PropertyCard
