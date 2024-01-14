import Hero from './Hero'
import FeaturedProducts from './FeaturedProducts'
import AllProducts from './AllProducts'

const index = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AllProducts />
      <div className="progress fixed left-0 top-0 h-2 w-screen origin-left" />
    </>
  )
}

export default index
