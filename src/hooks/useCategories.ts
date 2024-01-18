import { useState, useEffect } from 'react'
import { CategoriesAPI } from '@/services/categoriesAPI'

const useCategories = () => {
  const [data, setData] = useState<string[]>([])
  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await CategoriesAPI.getCategories()
        setData(response)
        setError(undefined)
      } catch (error) {
        setError('Failed to fetch categories.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, error, loading }
}

export default useCategories