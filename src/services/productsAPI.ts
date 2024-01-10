import BASE_URL from './base'
import type { ProductsType } from '@/features/products/productsSlice'

export const ProductsAPI = {
  getProducts: async () => {
    try {
      const url = `${BASE_URL}/products`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data: Array<ProductsType> = await response.json()
      return data
    } catch (error) {
      console.error('Error when getting product information', error)
      throw error
    }
  }
}