import Clothes from '@/assets/clothes.jpg'
import Electronics from '@/assets/electronics.jpg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'

const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.4,
      ease: 'easeOut',
    },
  },
}

const FeatureCardFirst = () => (
  <article className="flex h-full flex-col items-center justify-between gap-y-7 rounded-xl bg-[#c8a938] px-4 py-4 text-black lg:flex-col lg:justify-center lg:py-12">
    <div className="flex flex-col items-center gap-y-1">
      <h2 className="font-semibold uppercase fluid-text-2xl"> Newest clothes </h2>
      <h3 className="font-semibold uppercase fluid-text-5xl"> Big sale </h3>
    </div>
    <div>
      <img src={Clothes} className="w-full max-w-64" alt="some clothes" />
    </div>
  </article>
)

const FeatureCardSecond = () => (
  <article className="flex h-full w-full flex-col items-center justify-between rounded-xl bg-[#fb8787] px-4 py-4 text-white sm:flex-row lg:flex-row lg:py-0">
    <div>
      <img src={Electronics} className="w-full max-w-64" alt="some electronics" />
    </div>
    <div className="flex flex-col justify-center gap-y-7">
      <div className="flex flex-col gap-y-2">
        <h2 className="uppercase fluid-text-xl"> Latest tech </h2>
        <h2 className="uppercase fluid-text-2xl"> Super sale </h2>
      </div>
      <NavLink to="/products" className="self-center">
        <button className="rounded-md bg-black p-3 font-semibold uppercase duration-500 fluid-text-lg hover:cursor-pointer hover:bg-slate-800 active:scale-95">
          Shop now
        </button>
      </NavLink>
    </div>
  </article>
)

const FeatureCardThird = () => {
  // For distributing the characters evenly in parent container using justify between
  const customString = 'Enjoy your new phone'
  const characterArray = customString.split('').map((letter) => (letter === ' ' ? ' ' : letter))

  return (
    <article className="flex h-full flex-col items-center justify-between rounded-xl bg-[#ff9564] px-4 py-4 text-black sm:flex-row lg:flex-row lg:justify-between lg:py-0">
      <div className="flex flex-col items-center gap-1">
        <div className="grid h-32 w-48 font-semibold text-black">
          <span className="col-start-1 row-start-1 flex h-full items-center justify-center font-bold fluid-text-4xl">
            {' '}
            20%{' '}
          </span>

          <fieldset
            role="presentation"
            className="col-start-1 row-start-1 h-inherit w-inherit -rotate-180 border border-transparent border-t-black"
          >
            <legend className="ml-2 rotate-180 font-semibold uppercase fluid-text-lg"> Discount </legend>
          </fieldset>

          <fieldset
            role="presentation"
            className="col-start-1 row-start-1 h-inherit w-inherit border border-transparent border-t-black "
          >
            <legend className="ml-2 font-semibold uppercase fluid-text-lg"> Upto </legend>
          </fieldset>
        </div>
        <h3 className="flex w-full flex-row justify-between text-sm uppercase">
          {characterArray.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h3>
      </div>
      <div>
        <img src={Electronics} className="w-full max-w-80" alt="a bunch of furniture" />
      </div>
    </article>
  )
}

const FeaturedProducts: React.FC = () => {
  return (
    <div className="mx-auto flex w-container max-w-full flex-col gap-8 py-8">
      <motion.h2
        variants={fadeInVariant}
        initial="hidden"
        animate="show"
        className="font-semibold uppercase fluid-text-3xl"
      >
        Featured products
      </motion.h2>
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-full grid-cols-1 gap-9 sm:w-[32rem] lg:w-full lg:grid-flow-col lg:grid-cols-featured-grid lg:grid-rows-2"
      >
        <motion.div
          variants={fadeInVariant}
          viewport={{ once: true, amount: 0.1 }}
          className="row-span-1 lg:row-span-2"
        >
          <FeatureCardFirst />
        </motion.div>
        <motion.div variants={fadeInVariant} viewport={{ once: true, amount: 0.1 }} className="row-span-1">
          <FeatureCardSecond />
        </motion.div>
        <motion.div variants={fadeInVariant} viewport={{ once: true, amount: 0.1 }} className="row-span-1">
          <FeatureCardThird />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FeaturedProducts
