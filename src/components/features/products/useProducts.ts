import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/services/apiProducts'

export const useProducts = (page: number, limit: number) => {
  const {
    isLoading: isLoadingProducts,
    data,
    error,
  } = useQuery({
    queryKey: ['products', page, limit],
    queryFn: () => fetchProducts(page, limit),
  })

  return {
    isLoadingProducts,
    products: data?.products,
    total: data?.total,
    error,
  }
}
