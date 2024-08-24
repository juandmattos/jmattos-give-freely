import { Link } from 'react-router-dom'
import { Product } from '@/types/products/productTypes'

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <li
      key={product.id}
      className='border-b p-2 text-lg font-bold text-primary hover:text-secondary'
    >
      <Link to={`/products/${product.id}`}>
        {product.name} - ${product.price}
      </Link>
    </li>
  )
}

export default ProductItem
