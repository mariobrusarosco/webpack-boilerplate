// Vendors
import { pathOr } from 'ramda'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import classnames from 'classnames'

// Styles
import css from './styles.scss'

// Components
import Image from 'components/Image'
import Info from 'components/Property/Info'
import BusinessType from 'components/Property/BusinessType'
import Gallery from 'components/Property/Gallery'

// Utils
import parsePropertyData from 'utils/parsePropertyData'
import toCurrency from 'utils/formatters/currency'

const Property = ({ match, history }) => {
  // Redux / Store
  const allProperties = useSelector(({ Properties }) => Properties.all)
  // State
  const [currentProperty, setCurrentProperty] = useState(null)
  const [currentImage, setImage] = useState('')

  // LifeCycle
  useEffect(() => {
    const ID = pathOr('', ['params', 'id'], match)
    const property = allProperties.find(property => property.id === ID)
    const validatedProperty = parsePropertyData(property)

    console.log({ property })
    console.log({ validatedProperty })

    setCurrentProperty(validatedProperty)
    setImage(property.images[0])
  }, [])

  // Props Destructuring
  const {
    businessType = '',
    price,
    rentalTotalPrice,
    monthlyCondoFee,
    yearlyIptu
  } = pathOr({}, ['pricingInfos'], currentProperty)
  const { city, neighborhood } = pathOr({}, ['address'], currentProperty)

  // Internal Components
  const GoBackBtn = () => (
    <button className={css.backButton} onClick={history.goBack}>
      voltar
    </button>
  )

  const ContactBtn = () => (
    <button className={css.contactButton} onClick={() => history.push('/contato')}>
      Entrar em Contato
    </button>
  )

  const ImageArea = () => (
    <div className={css.imageArea}>
      <Image src={currentImage} />
    </div>
  )

  if (!currentProperty) return null

  return (
    <section data-id="" className={classnames([css.propertyPage], 'property-page')}>
      <div className={css.wrapper}>
        <GoBackBtn />
        <BusinessType business={businessType} cssModifiers={css.businessType} />
        <ImageArea />
        <Gallery images={currentProperty.images} onThumbnailClick={setImage} />

        <div className={css.infoArea}>
          <ul className={css.infoList}>
            <Info label="tamanho" formatterFunction={toCurrency}>
              currentProperty.usableAreas
            </Info>
            <Info label="tamanho" content={currentProperty.usableAreas} suffix="/m2" />
            <Info label="quartos" content={currentProperty.bedrooms} />
            <Info label="banheiros" content={currentProperty.bathrooms} />
            <Info label="cidade" content={city} />
            <Info label="bairro" content={neighborhood} />
            <Info label="vagas" content={currentProperty.parkingSpaces} />

            {businessType.toLowerCase() === 'sale' ? (
              <>
                <Info
                  label="valor"
                  content={price}
                  formatter={toCurrency}
                  suffix="/ano"
                />
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
          </ul>
        </div>

        <ContactBtn />
      </div>
    </section>
  )
}

export default Property
