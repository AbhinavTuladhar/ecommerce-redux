import FadeInContainer from '@/components/layouts/FadeInContainer'
import AllProducts from './AllProducts'
import FeaturedProducts from './FeaturedProducts'
import Hero from './Hero'

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
