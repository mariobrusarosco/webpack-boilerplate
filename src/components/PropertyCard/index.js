// Vendors
import { pathOr } from 'ramda'
import { Link } from 'react-router-dom'

// Styles
import css from './styles.scss'

// Components
import Image from 'components/Image'
import LazyImage from 'components/LazyImage'
import BusinessType from 'components/Property/BusinessType'
import Info from 'components/Property/Info'

// Utils
import toCurrency from 'utils/formatters/currency'
import parsePropertyData from 'utils/parsePropertyData'

const PropertyCard = ({ data }) => {
  // Props Destructuring
  const propertyID = pathOr('', ['id'], data)
  const validatedProperty = parsePropertyData(data)
  const {
    businessType = '',
    price,
    rentalTotalPrice,
    monthlyCondoFee,
    yearlyIptu
  } = pathOr({}, ['pricingInfos'], validatedProperty)

  const { city, neighborhood } = pathOr({}, ['address'], validatedProperty)
  const images = pathOr([], ['images'], validatedProperty)
  const thumbnail = images[0]

  // Internal Components
  const Features = () => {
    return (
      <>
        <Info label="tamanho" content={`${validatedProperty.usableAreas}/m2`} />
        <Info label="banheiros" content={validatedProperty.bathrooms} />
        <Info label="quartos" content={validatedProperty.bedrooms} />
        <Info label="vagas" content={validatedProperty.parkingSpaces} />
      </>
    )
  }

  const LocationAndPrice = () => {
    return (
      <>
        <Info label="cidade" content={city} />
        <Info label="bairro" content={neighborhood} />
        {businessType.toLowerCase() === 'sale' ? (
          <>
            <Info label="valor" content={price} formatter={toCurrency} />
            <Info
              label="iptu"
              content={yearlyIptu}
              formatter={toCurrency}
              suffix="/ano"
            />
          </>
        ) : (
          <>
            <Info
              label="valor"
              content={rentalTotalPrice}
              formatter={toCurrency}
              suffix="/mês"
            />
            <Info
              label="condomínio"
              content={monthlyCondoFee}
              formatter={toCurrency}
              suffix="/mês"
            />
          </>
        )}
      </>
    )
  }

  const MoreDetails = () => (
    <Link to={`/imovel/${propertyID}`} className={css.moreDetails}>
      <span>mais detalhes</span>
    </Link>
  )

  return (
    <li className={css.card}>
      <div className={css.imageArea}>
        <LazyImage src={thumbnail} alt={`Imóvel em ${city || neighborhood}`} />
      </div>

      <ul className={css.infoArea}>
        <BusinessType business={businessType} />
        <Features />
        <LocationAndPrice />
        <MoreDetails />
      </ul>
    </li>
  )
}

export default PropertyCard
