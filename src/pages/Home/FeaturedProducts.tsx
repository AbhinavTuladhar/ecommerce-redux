import Clothes from '@/assets/clothes.jpg'
import Electronics from '@/assets/electronics.jpg'
import Furniture from '@/assets/furniture-cropped.jpg'
import React from 'react'

const FeatureCardFirst = () => (
  <article className="flex h-full flex-col items-center justify-center gap-y-7 rounded-xl bg-[#c8a938] px-4 py-4 text-black lg:py-12">
    <div className="flex flex-col items-center gap-y-1">
      <h2 className="font-semibold uppercase fluid-text-2xl"> Newest clothes </h2>
      <h3 className="font-semibold uppercase fluid-text-5xl"> Big sale </h3>
    </div>
    <img src={Clothes} className="max-h-80 w-full max-w-80" alt="some clothes" />
  </article>
)

const FeatureCardSecond = () => (
  <article className="flex h-full flex-col items-center justify-between rounded-xl bg-[#fb8787] px-4 py-4 text-white lg:flex-row lg:py-0">
    <img src={Electronics} className="h-auto w-full max-w-80" alt="some electronics" />
    <div className="flex flex-col justify-center gap-y-7">
      <div className="flex flex-col gap-y-2">
        <h2 className="uppercase fluid-text-2xl"> Latest tech </h2>
        <h2 className="uppercase fluid-text-3xl"> Super sale </h2>
      </div>
      <button className="self-center rounded-md bg-black p-3 font-semibold uppercase duration-500 fluid-text-xl hover:cursor-pointer hover:bg-gray-800 active:scale-95">
        Shop now
      </button>
    </div>
  </article>
)

const FeatureCardThird = () => (
  <article className="flex h-full flex-col items-center justify-between rounded-xl bg-[#ff9564] px-4 py-4 lg:flex-row lg:py-0">
    <div className="flex flex-col items-center gap-1">
      <div className="grid h-24 w-48 font-semibold text-black">
        <span className="col-start-1 row-start-1 flex h-full items-center justify-center font-bold fluid-text-4xl">
          {' '}
          20%{' '}
        </span>

        <fieldset
          role="presentation"
          className="col-start-1 row-start-1 h-inherit w-inherit -rotate-180 border border-transparent border-t-black"
        >
          <legend className="ml-2 rotate-180 font-semibold uppercase"> Discount </legend>
        </fieldset>

        <fieldset
          role="presentation"
          className="col-start-1 row-start-1 h-inherit w-inherit border border-transparent border-t-black "
        >
          <legend className="ml-2 font-semibold uppercase"> Upto </legend>
        </fieldset>
      </div>
      <h3 className="text-sm uppercase"> Enjoy your new sofa </h3>
    </div>
    <img src={Furniture} className="max-h-60 w-full max-w-96" alt="a bunch of furniture" />
  </article>
)

const FeaturedProducts: React.FC = () => {
  return (
    <div className="mx-auto flex w-container flex-col gap-8 py-8">
      <h2 className="font-semibold uppercase fluid-text-3xl"> Featured products </h2>
      <div className="flex flex-col gap-9 lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2">
        <div className="row-span-1 lg:row-span-2">
          <FeatureCardFirst />
        </div>
        <div className="row-span-1">
          <FeatureCardSecond />
        </div>
        <div className="row-span-1">
          <FeatureCardThird />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
