import Hero from './Hero'
import FeaturedProducts from './FeaturedProducts'
import AllProducts from './AllProducts'
import FadeInContainer from '@/components/layouts/FadeInContainer'

const index = () => {
  return (
    <FadeInContainer>
      <Hero />
      <FeaturedProducts />
      <AllProducts />
      <div className="progress fixed left-0 top-0 h-2 w-screen origin-left" />
    </FadeInContainer>
  )
}

export default index
