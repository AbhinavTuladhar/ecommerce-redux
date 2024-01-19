import BASE_URL from './base'

export const CategoriesAPI = {
  getCategories: async () => {
    try {
      const url = `${BASE_URL}/products/categories`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data: string[] = await response.json()
      return data
    } catch (error) {
      console.error('Error when getting category information.')
      throw error
    }
  },
}
