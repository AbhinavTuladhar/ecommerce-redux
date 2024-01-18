import { FC, Fragment } from 'react'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'
import useCategories from '@/hooks/useCategories'
import convertToTitleCase from '@/helpers/convertToTitleCase'

interface ContainerProps {
  image: string
  caption: string
}

const ImageContainer: FC<ContainerProps> = ({ image, caption }) => (
  <section className="proper-border group relative mx-auto w-52 justify-self-center overflow-hidden rounded-lg duration-500 hover:cursor-pointer md:w-fit">
    <img src={image} alt={caption} className="w-full" />
    <p className="absolute -bottom-11 left-0 hidden w-full pb-4 pt-16 text-center font-bold text-white opacity-0 duration-500 ease-in-out fluid-text-xl group-hover:bottom-0 group-hover:bg-gradient-to-b group-hover:from-black/0 group-hover:to-black/60 group-hover:opacity-100 lg:block lg:pt-24">
      {convertToTitleCase(caption)}
    </p>
    <p className="my-2 block text-center font-bold fluid-text-lg lg:hidden">{convertToTitleCase(caption)}</p>
  </section>
)

const Index = () => {
  const { data, error, loading } = useCategories()

  const imageList = [
    'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
    'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
  ]

  const imageContainerData = Array.from({ length: imageList.length }, (_, index) => ({
    image: imageList[index] || '',
    caption: data[index] || '',
  }))

  return (
    <PageLayout>
      <PageTitle>About Us</PageTitle>
      <main className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[3fr,_1fr]">
        <div className="space-y-8 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum possimus exercitationem
            cupiditate illum aliquid laudantium culpa! Ut, illum maxime? Magnam deserunt reiciendis asperiores iste,
            placeat obcaecati quod numquam eius. Soluta beatae ratione aut esse totam quam explicabo dolor, labore
            delectus amet vero et praesentium. Architecto asperiores voluptatem voluptatibus voluptate necessitatibus
            amet, quia nulla officiis veniam ut vel dolorum rem! Quasi aut architecto quis dignissimos magnam doloribus
            officia ducimus possimus ex pariatur voluptatum, assumenda sed animi aperiam incidunt natus aliquid cum
            repudiandae porro facilis. Odio non ex reprehenderit facere dicta. Alias impedit possimus, error corrupti
            nesciunt totam, tenetur quasi necessitatibus at, animi delectus. Impedit consectetur ab soluta nobis? Quidem
            similique, nisi obcaecati aspernatur quam accusamus tenetur perspiciatis deserunt sequi veritatis! Expedita,
            minima commodi? Expedita asperiores necessitatibus possimus impedit debitis magni, reiciendis placeat neque
            tempora soluta molestiae dolores provident. Voluptas quae officiis ipsa voluptates repudiandae vero magni
            aliquid distinctio soluta sunt!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veniam minus ratione, officiis neque
            sequi! Dignissimos, illum quidem similique sequi impedit praesentium enim sunt aspernatur ex? Sed quam nobis
            et. Sed autem eum, repellendus voluptatem et sequi vero quia at eaque cum suscipit voluptatibus velit
            delectus, ab ipsum dolorum maiores iste porro? Veritatis voluptas autem ea, nulla soluta libero quidem!
            Quisquam, rem. Libero amet maiores modi obcaecati vitae repellendus molestias possimus dicta et. Enim earum
            temporibus sint veritatis! Aliquid expedita necessitatibus optio et obcaecati commodi officia culpa quisquam
            illo! Numquam. Aut obcaecati exercitationem odio iusto corrupti voluptatem nesciunt excepturi quas,
            accusantium molestiae? Officia delectus tempore aliquam ut dolore, eum mollitia harum nesciunt quo totam
            officiis magnam ex ipsa, deleniti veniam? Quisquam soluta eum cupiditate sed accusamus aspernatur
            consequuntur odio eos sint debitis id iste, voluptatibus dolor molestias officiis voluptas numquam ducimus
            delectus. Id accusamus aspernatur corporis. Molestias necessitatibus fugiat quidem.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold fluid-text-xl"> Our categories </h2>
          {error && <span> Error fetching categories</span>}
          {loading && <span> Loading categories... </span>}
          {imageContainerData.map((item, index) => (
            <Fragment key={index}>
              <ImageContainer image={item.image} caption={item.caption} />
            </Fragment>
          ))}
        </div>
      </main>
    </PageLayout>
  )
}

export default Index
