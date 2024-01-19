import HeroImage from '@/assets/ecommerce marketing.jpg'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const Hero = () => {
  const staggerDuration = 0.4

  const motionVariant: Variants = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
        duration: 0.8,
        type: 'spring',
      },
    },
  }

  return (
    <section className="flex min-h-96 items-center overflow-hidden bg-lightmode-green text-white dark:bg-darkmode-green">
      <div className="mx-auto grid min-h-full w-container grid-cols-1 place-content-center place-items-center content-center gap-x-20 gap-y-10 py-2 md:grid-cols-hero md:py-6 lg:py-10">
        <motion.div
          variants={motionVariant}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="flex h-full flex-col items-center justify-center gap-y-8 text-center md:text-left"
        >
          <motion.h1
            variants={motionVariant}
            className="text-center font-bold uppercase tracking-wider fluid-text-6xl md:text-left"
          >
            Elevate Your Lifestyle
          </motion.h1>
          <motion.p variants={motionVariant}>
            Discover elegance, innovation, and style: unveiling exquisite jewelry, cutting-edge electronics, and fashion
            forward clothing for your unique lifestyle.
          </motion.p>
          <motion.div variants={motionVariant} className="self-center md:self-start">
            <NavLink to="/about">
              <button className="md rounded-md bg-white px-4 py-3 font-semibold uppercase text-darkmode-green fluid-text-2xl">
                Learn more
              </button>
            </NavLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', delay: staggerDuration * 3 }}
        >
          <img src={HeroImage} alt="computers" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
