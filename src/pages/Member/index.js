const Product = ({ match }) => {
  return <div>Product id: {match.params.id}</div>
}

export default Product
