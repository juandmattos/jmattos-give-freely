import { Product } from '../types/products/productTypes'
const API_URL = 'http://localhost:5005/products'

export const fetchProducts = async (
  page = 1,
  limit = 5
): Promise<{ products: Product[]; total: number }> => {
  const response = await fetch(`${API_URL}/?_page=${page}&_per_page=${limit}`)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  const { data: products, items: total } = await response.json()

  return { products, total }
}

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }
  return response.json()
}

export const addProduct = async (product: Product): Promise<void> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
  if (!response.ok) {
    throw new Error('Failed to add product')
  }
}
