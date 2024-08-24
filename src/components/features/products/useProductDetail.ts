import { useQuery } from '@tanstack/react-query'
import { fetchProductById } from '@/services/apiProducts'

export const useProductDetail = (productId: string) => {
  const {
    isLoading: isLoadingProduct,
    data: product,
    error,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
  })

  return { isLoadingProduct, product, error }
}
