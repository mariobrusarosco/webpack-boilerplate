// Vendors
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      All Products
      <ul>
        <li>
          <Link to="/products/one">Product</Link>
        </li>
        <li>
          <Link to="/products/two">Product</Link>
        </li>
      </ul>
    </div>
  )
}

export default Products
