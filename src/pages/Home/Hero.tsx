import HeroImage from '@/assets/ecommerce marketing.jpg'

const Hero = () => {
  return (
    <div className='flex items-center bg-main-green min-h-96'>
      <div className='grid content-center min-h-full py-4 mx-auto place-content-center place-items-center grid-cols-hero gap-x-40 w-container'>
        <div className='flex flex-col justify-center h-full gap-y-8'>
          <h1 className='text-4xl font-bold tracking-wider uppercase'>
            Elevate Your Lifestyle
          </h1>
          <p>
            Discover fashion trends, unleash tech marvels, step into comfort with footwear, and elevate your space with chic furniture.
          </p>
          <button className='self-start px-4 py-3 text-2xl font-semibold uppercase bg-white rounded-md text-main-green'>
            Learn more
          </button>
        </div>
        {/* <p> Test </p> */}
        <img src={HeroImage} alt='computers' />
      </div>
    </div>
  )
}

export default Hero