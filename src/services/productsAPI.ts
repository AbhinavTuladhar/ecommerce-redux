import BASE_URL from './base'
import type { ProductsType } from '@/features/products/productsSlice'

export const ProductsAPI = {
  get: async function () {
    try {
      const url = `${BASE_URL}/products`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data: ProductsType = await response.json()
      return data
    } catch (error) {
      console.error('Error when getting product information', error)
      throw error
    }
  }
}