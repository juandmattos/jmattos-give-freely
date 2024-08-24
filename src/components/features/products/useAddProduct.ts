import { toast } from 'react-hot-toast'
import { useQueryClient, useMutation } from '@tanstack/react-query'

import { addProduct as addProductApi } from '../../../services/apiProducts'

export const useAddProducts = () => {
  const queryClient = useQueryClient()
  const { mutate: addProduct } = useMutation({
    mutationFn: addProductApi,
    onSuccess: () => {
      toast.success('Product added successfully!')
      queryClient.invalidateQueries({
        queryKey: ['products'],
      })
    },
    onError: (err) => toast.error(err.message),
  })

  return { addProduct }
}
