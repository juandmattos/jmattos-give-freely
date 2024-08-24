import { useForm, SubmitHandler } from 'react-hook-form'
import { FormData } from '@/types/products/productTypes'
import { useAddProducts } from './useAddProduct'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'

const AddProduct = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()
  const { addProduct } = useAddProducts()

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    addProduct(data, {
      onSuccess: () => {
        reset()
        navigate('/')
      },
    })
  }

  return (
    <div>
      <h1 className='mb-4 text-2xl'>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='block'>Name:</label>
          <input
            {...register('name', { required: 'Product name is required' })}
            className={`w-full rounded border p-2 ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <span className='text-red-500'>{errors.name.message}</span>
          )}
        </div>
        <div className='mb-4'>
          <label className='block'>Price:</label>
          <input
            type='number'
            {...register('price', {
              required: 'Price is required',
              valueAsNumber: true,
              min: { value: 0.01, message: 'Price must be at least $0.01' },
            })}
            className={`w-full rounded border p-2 ${
              errors.price ? 'border-red-500' : ''
            }`}
          />
          {errors.price && (
            <span className='text-red-500'>{errors.price.message}</span>
          )}
        </div>
        <div className='mb-4'>
          <label className='block'>Description:</label>
          <textarea
            {...register('description', {
              required: 'Description is required',
            })}
            className={`w-full rounded border p-2 ${
              errors.description ? 'border-red-500' : ''
            }`}
          />
          {errors.description && (
            <span className='text-red-500'>{errors.description.message}</span>
          )}
        </div>
        <div className='max-w-[150px]'>
          <Button type='submit'>Add Product</Button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
