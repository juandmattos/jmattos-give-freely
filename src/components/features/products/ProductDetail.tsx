import { useParams, Link } from 'react-router-dom'
import { useProductDetail } from './useProductDetail'
import Spinner from '@/components/ui/Spinner'

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>()
  const { product, isLoadingProduct, error } = useProductDetail(productId || '')

  if (isLoadingProduct) return <Spinner />
  if (error) return <div>Error fetching product details</div>

  return (
    <div>
      <h1 className='mb-4 text-2xl'>Product Detail</h1>
      <p>
        <strong>Name:</strong> {product?.name}
      </p>
      <p>
        <strong>Price:</strong> ${product?.price}
      </p>
      <p>
        <strong>Description:</strong> {product?.description}
      </p>
      <div className='mt-4'>
        <Link to='/'>
          <span className='text-primary hover:text-secondary'>
            Back to home
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ProductDetail
