// Vendors
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      All Products
      <ul>
        <li>
          <Link to="/product/1">Product</Link>
        </li>
        <li>
          <Link to="/products/2">Product</Link>
        </li>
      </ul>
    </div>
  )
}

export default Products
