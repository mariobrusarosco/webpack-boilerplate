// Components
import ItemCard from 'components/ItemCard'

const ItemsList = ({ items }) => {
  if (!items) return null

  const renderItems = () => {
    return (
      <ul>
        {items.map((item, i) => {
          return <ItemCard data={item} key={i} />
        })}
      </ul>
    )
  }

  return renderItems()
}

export default ItemsList
