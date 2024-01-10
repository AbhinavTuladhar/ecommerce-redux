import HeroImage from '@/assets/ecommerce marketing.jpg'

const Hero = () => {
  return (
    <section className='flex items-center text-white bg-main-green min-h-96'>
      <div className='grid content-center min-h-full grid-cols-1 py-4 mx-auto place-content-center place-items-center md:grid-cols-hero gap-x-20 gap-y-10 w-container'>
        <div className='flex flex-col items-center justify-center h-full text-center md:text-left gap-y-8'>
          <h1 className='text-6xl font-bold tracking-wider text-center uppercase md:text-left'>
            Elevate Your Lifestyle
          </h1>
          <p>
            Discover elegance, innovation, and style: unveiling exquisite jewelry, cutting-edge electronics, and fashion forward clothing for your unique lifestyle.
          </p>
          <button className='self-center px-4 py-3 text-2xl font-semibold uppercase bg-white rounded-md md:self-start text-main-green'>
            Learn more
          </button>
        </div>
        <img src={HeroImage} alt='computers' />
      </div>
    </section>
  )
}

export default Hero