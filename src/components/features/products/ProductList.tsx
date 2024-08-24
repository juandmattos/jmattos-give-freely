import { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '@/components/ui/Spinner'
import { useProducts } from './useProducts'
import ProductItem from './ProductItem'
import Pagination from '../../ui/Pagination'
import { PRODUCTS_PER_PAGE } from '@/constants'

const ProductList = () => {
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { products, isLoadingProducts, error, total } = useProducts(
    currentPage,
    PRODUCTS_PER_PAGE
  )

  if (isLoadingProducts) return <Spinner />
  if (error) return <div>Error fetching products!</div>
  if (!products || products?.length === 0)
    return (
      <div>
        No products found! Try adding one{' '}
        <Link to='/products-add'>
          <span className=' text-primary hover:font-bold hover:text-secondary'>
            here
          </span>
        </Link>
        .
      </div>
    )

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  const totalPages = Math.ceil((total || 0) / PRODUCTS_PER_PAGE)

  return (
    <div>
      <h1 className='mb-4 text-2xl'>Product List</h1>
      <input
        type='text'
        placeholder='Search products'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='mb-4 w-full rounded border p-2'
      />
      {filteredProducts?.length === 0 ? (
        <div>
          No products were found by that name. Try searching for something else!
        </div>
      ) : (
        <ul>
          {filteredProducts?.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default ProductList
