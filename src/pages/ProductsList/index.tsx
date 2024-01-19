import { useState, useEffect } from 'react'

import FadeInContainer from '@/components/layouts/FadeInContainer'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'
import ProductGrid from '@/components/misc/ProductGrid'
import type { ProductsType } from '@/features/products/productsSlice'
import convertToTitleCase from '@/helpers/convertToTitleCase'
import useCategories from '@/hooks/useCategories'
import useProducts from '@/hooks/useProducts'

const Index = () => {
  const productsResponse = useProducts()
  const { products: allProducts } = productsResponse
  const { categories, error, loading } = useCategories()

  const [currentProducts, setCurrentProducts] = useState<ProductsType[]>([])

  // Keep track of the selected tab.
  const [activeTab, setActiveTab] = useState<string>('All')

  // Append an 'all' option to the categories array
  const categoryList = ['All', ...categories]

  const handleClick = (categoryName: string) => {
    setActiveTab(categoryName)
  }

  useEffect(() => {
    setCurrentProducts(() =>
      activeTab === 'All' ? allProducts : allProducts.filter((product) => product.category === activeTab),
    )
  }, [activeTab, allProducts])

  // If active - blue text and border. If not, normal colours according to theme.
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

  const gridProps = {
    ...productsResponse,
    products: currentProducts || [],
  }

  // The data is considered loading if the length of array is more than 1 - since 'All' is always in the array
  return (
    <FadeInContainer>
      <PageLayout>
        <PageTitle> Our Products </PageTitle>
        <main className="space-y-4 py-10">
          {error && <span> Error fetching categories. </span>}
          {loading && <span> Loading categories data.... </span>}
          {categoryList.length > 1 && (
            <>
              <ul className="flex w-full flex-row flex-wrap justify-center gap-y-4">{tabs}</ul>
              <ProductGrid productsState={gridProps} />
            </>
          )}
        </main>
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
