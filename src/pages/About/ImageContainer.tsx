import { FC } from 'react'

import convertToTitleCase from '@/helpers/convertToTitleCase'

interface ContainerProps {
  image: string
  caption: string
}

const ImageContainer: FC<ContainerProps> = ({ image, caption }) => (
  <section className="proper-border group relative mx-auto w-52 justify-self-center overflow-hidden rounded-lg duration-500 hover:cursor-pointer md:w-fit">
    <img src={image} alt={caption} className="w-full" loading="eager" />
    <p className="absolute -bottom-11 left-0 hidden w-full pb-4 pt-16 text-center font-bold text-white opacity-0 duration-500 ease-in-out fluid-text-lg group-hover:bottom-0 group-hover:bg-gradient-to-b group-hover:from-black/0 group-hover:to-black/60 group-hover:opacity-100 md:block md:pt-24 lg:fluid-text-xl">
      {convertToTitleCase(caption)}
    </p>
    <p className="my-2 block text-center font-bold fluid-text-lg md:hidden">{convertToTitleCase(caption)}</p>
  </section>
)

export default ImageContainer
