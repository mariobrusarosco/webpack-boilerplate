// Components
import PropertyCard from 'components/PropertyCard'

const PropertyList = ({ properties }) => {
  if (!properties) return null

  const renderProperties = () => {
    return (
      <ul>
        {properties.map((property, i) => {
          return <PropertyCard data={property} key={i} />
        })}
      </ul>
    )
  }

  return renderProperties()
}

export default PropertyList
