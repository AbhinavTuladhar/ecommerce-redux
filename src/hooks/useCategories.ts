import { useEffect, useState } from 'react'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CategoriesSelector } from '@/features/categories/categoriesSlice'

const useCategories = () => {
  const fetchedCategories = useAppSelector(CategoriesSelector)

  const [categories, setCategories] = useState<Array<string>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    setLoading(fetchedCategories.loading)
    setCategories(fetchedCategories.categories)
    setError(fetchedCategories.error)
  }, [fetchedCategories])

  return { categories, loading, error }
}

export default useCategories
