import { FC } from "react"
import Clothes from '@/assets/clothes.jpg'
import Electronics from '@/assets/electronics.jpg'

interface CardProps {
  children: React.ReactNode,
  backgroundColour: string,
  flexDirection: 'row' | 'col'
}

const FeatureCard: FC<CardProps> = ({ children, backgroundColour, flexDirection }) => {
  const flexClassName = flexDirection === 'col' ? 'flex-col' : 'flex-row'

  return (
    <div className={`${flexClassName} ${backgroundColour} justify-center items-center h-full text-black flex gap-7 rounded-xl`}>
      {children}
    </div>
  )
}

const FeatureCardFirst = () => (
  <article className='flex flex-col justify-center items-center h-full px-4 py-12 text-black gap-y-7 bg-[#c8a938] rounded-xl'>
    <div className='flex flex-col items-center gap-y-1'>
      <h2 className='text-2xl font-semibold uppercase'> Newest clothes </h2>
      <h3 className='text-5xl font-semibold uppercase'> Big sale </h3>
    </div>
    <img src={Clothes} className='max-h-80' alt='some clothes' />
  </article>
)

const FeatureCardSecond = () => (
  <article className='flex flex-row justify-between items-center h-full p-4 text-white bg-[#fb8787] rounded-xl'>
    <img src={Electronics} className='max-h-80' alt='some electronics' />
    <div className='flex flex-col justify-center gap-y-7'>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl uppercase'> Latest tech </h2>
        <h2 className='text-3xl uppercase'> Super sale </h2>
      </div>
      <button className='self-center p-3 text-xl font-semibold uppercase bg-black rounded-md'> Shop now </button>
    </div>
  </article>
)

const FeaturedProducts = () => {
  return (
    <div className='flex flex-col gap-8 py-8 mx-auto w-container'>
      <h2 className='text-3xl font-semibold uppercase'> Featured products </h2>
      <div className='grid grid-flow-col grid-cols-2 grid-rows-2 auto-rows-fr gap-9'>
        <div className='row-span-2'>
          <FeatureCardFirst />
        </div>
        <div className='row-span-1'> <FeatureCardSecond /> </div>
        <div className='row-span-1'> <FeatureCardSecond /> </div>
      </div>
    </div>
  )
}

export default FeaturedProducts