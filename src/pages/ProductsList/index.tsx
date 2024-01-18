import useProducts from '@/hooks/useProducts'
import ProductGrid from '@/components/misc/ProductGrid'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'
import useCategories from '@/hooks/useCategories'
import convertToTitleCase from '@/helpers/convertToTitleCase'
import { useState } from 'react'

const Index = () => {
  const productsResponse = useProducts()
  const { data, error, loading } = useCategories()

  // Append an 'all' option to the categories array
  const categoryList = ['All', ...data]

  const [activeTab, setActiveTab] = useState<string>('All')

  const handleClick = (categoryName: string) => {
    setActiveTab(categoryName)
  }

  const tabs = categoryList.map((category, index) => (
    <li
      className={`flex w-36 justify-center whitespace-nowrap border-b-2 bg-gray-100 p-4 text-black duration-500 hover:cursor-pointer hover:brightness-90 dark:bg-slate-950  dark:hover:brightness-110 lg:w-44 ${
        activeTab === category
          ? 'border-blue-500 text-blue-600 dark:text-blue-500'
          : 'border-transparent text-black hover:border-white dark:text-white'
      }`}
      key={index}
      onClick={() => handleClick(category)}
    >
      {convertToTitleCase(category)}
    </li>
  ))

  // The data is considered loading if the length of array is more than 1 - since 'All' is always in the array
  return (
    <PageLayout>
      <PageTitle> Our Products </PageTitle>
      <main className="space-y-4 py-10">
        {error && <span> Error fetching categories. </span>}
        {loading && <span> Loading categories data.... </span>}
        {categoryList.length > 1 && (
          <>
            <ul className="flex w-full flex-row flex-wrap justify-center">{tabs}</ul>
            <ProductGrid productsState={productsResponse} />
          </>
        )}
      </main>
    </PageLayout>
  )
}

export default Index
