import HeroImage from '@/assets/ecommerce marketing.jpg'

const Hero = () => {
  return (
    <section className="flex min-h-96 items-center bg-lightmode-green text-white dark:bg-darkmode-green">
      <div className="mx-auto grid min-h-full w-container grid-cols-1 place-content-center place-items-center content-center gap-x-20 gap-y-10 py-4 md:grid-cols-hero">
        <div className="flex h-full flex-col items-center justify-center gap-y-8 text-center md:text-left">
          <h1 className="text-center font-bold uppercase tracking-wider fluid-text-6xl md:text-left">
            Elevate Your Lifestyle
          </h1>
          <p>
            Discover elegance, innovation, and style: unveiling exquisite jewelry, cutting-edge electronics, and fashion
            forward clothing for your unique lifestyle.
          </p>
          <button className="self-center rounded-md bg-white px-4 py-3 font-semibold uppercase text-darkmode-green fluid-text-2xl md:self-start">
            Learn more
          </button>
        </div>
        <img src={HeroImage} alt="computers" />
      </div>
    </section>
  )
}

export default Hero
