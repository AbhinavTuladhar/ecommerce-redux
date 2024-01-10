import Clothes from '@/assets/clothes.jpg'
import Electronics from '@/assets/electronics.jpg'
import Furniture from '@/assets/furniture-cropped.jpg'
import React from 'react'

const FeatureCardFirst = () => (
  <article className='flex flex-col justify-center items-center h-full px-4 py-4 lg:py-12 text-black gap-y-7 bg-[#c8a938] rounded-xl'>
    <div className='flex flex-col items-center gap-y-1'>
      <h2 className='text-2xl font-semibold uppercase'> Newest clothes </h2>
      <h3 className='text-5xl font-semibold uppercase'> Big sale </h3>
    </div>
    <img src={Clothes} className='w-full max-h-80 max-w-80' alt='some clothes' />
  </article>
)

const FeatureCardSecond = () => (
  <article className='flex flex-col py-4 lg:py-0 lg:flex-row justify-between items-center h-full px-4 text-white bg-[#fb8787] rounded-xl'>
    <img src={Electronics} className='w-full h-auto max-w-80' alt='some electronics' />
    <div className='flex flex-col justify-center gap-y-7'>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl uppercase'> Latest tech </h2>
        <h2 className='text-3xl uppercase'> Super sale </h2>
      </div>
      <button className='self-center p-3 text-xl font-semibold uppercase duration-500 bg-black rounded-md hover:bg-gray-800 hover:cursor-pointer active:scale-95'>
        Shop now
      </button>
    </div>
  </article>
)

const FeatureCardThird = () => (
  <article className='flex flex-col py-4 lg:py-0 lg:flex-row justify-between items-center h-full px-4 bg-[#ff9564] rounded-xl'>
    <div className='flex flex-col items-center gap-1'>
      <div className='grid w-48 h-24 font-semibold text-black'>
        <span className='flex items-center justify-center h-full col-start-1 row-start-1 text-4xl font-bold'> 20% </span>

        <fieldset role='presentation' className='col-start-1 row-start-1 -rotate-180 border border-transparent border-t-black w-inherit h-inherit'>
          <legend className='ml-2 font-semibold uppercase rotate-180'> Discount </legend>
        </fieldset>

        <fieldset role='presentation' className='col-start-1 row-start-1 border border-transparent w-inherit h-inherit border-t-black '>
          <legend className='ml-2 font-semibold uppercase'> Upto </legend>
        </fieldset>
      </div>
      <h3 className='text-sm uppercase'> Enjoy your new sofa </h3>
    </div>
    <img src={Furniture} className='w-full max-h-60 max-w-96' alt='a bunch of furniture' />
  </article>
)

const FeaturedProducts: React.FC = () => {
  return (
    <div className='flex flex-col gap-8 py-8 mx-auto w-container'>
      <h2 className='text-3xl font-semibold uppercase'> Featured products </h2>
      <div className='flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 gap-9'>
        <div className='row-span-1 lg:row-span-2'>
          <FeatureCardFirst />
        </div>
        <div className='row-span-1'>
          <FeatureCardSecond />
        </div>
        <div className='row-span-1'>
          <FeatureCardThird />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts