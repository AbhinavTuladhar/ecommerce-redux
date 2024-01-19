import { Fragment } from 'react'
import PageLayout from '@/components/layouts/PageLayout'
import PageTitle from '@/components/misc/PageTitle'
import useCategories from '@/hooks/useCategories'
import ImageContainer from './ImageContainer'
import FadeInContainer from '@/components/layouts/FadeInContainer'

const Index = () => {
  const { data: categoryData, error, loading } = useCategories()

  const imageList = [
    'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg',
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
    'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
  ]

  // Pair-up the categories with their respective images.
  const imageContainerData = Array.from({ length: imageList.length }, (_, index) => ({
    image: imageList[index] || '',
    caption: categoryData[index] || '',
  }))

  return (
    <FadeInContainer>
      <PageLayout>
        <PageTitle>About Us</PageTitle>
        <main className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[3fr,_1fr]">
          <div className="space-y-8 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum possimus exercitationem
              cupiditate illum aliquid laudantium culpa! Ut, illum maxime? Magnam deserunt reiciendis asperiores iste,
              placeat obcaecati quod numquam eius. Soluta beatae ratione aut esse totam quam explicabo dolor, labore
              delectus amet vero et praesentium. Architecto asperiores voluptatem voluptatibus voluptate necessitatibus
              amet, quia nulla officiis veniam ut vel dolorum rem! Quasi aut architecto quis dignissimos magnam
              doloribus officia ducimus possimus ex pariatur voluptatum, assumenda sed animi aperiam incidunt natus
              aliquid cum repudiandae porro facilis. Odio non ex reprehenderit facere dicta. Alias impedit possimus,
              error corrupti nesciunt totam, tenetur quasi necessitatibus at, animi delectus. Impedit consectetur ab
              soluta nobis? Quidem similique, nisi obcaecati aspernatur quam accusamus tenetur perspiciatis deserunt
              sequi veritatis! Expedita, minima commodi? Expedita asperiores necessitatibus possimus impedit debitis
              magni, reiciendis placeat neque tempora soluta molestiae dolores provident. Voluptas quae officiis ipsa
              voluptates repudiandae vero magni aliquid distinctio soluta sunt!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veniam minus ratione, officiis neque
              sequi! Dignissimos, illum quidem similique sequi impedit praesentium enim sunt aspernatur ex? Sed quam
              nobis et. Sed autem eum, repellendus voluptatem et sequi vero quia at eaque cum suscipit voluptatibus
              velit delectus, ab ipsum dolorum maiores iste porro? Veritatis voluptas autem ea, nulla soluta libero
              quidem! Quisquam, rem. Libero amet maiores modi obcaecati vitae repellendus molestias possimus dicta et.
              Enim earum temporibus sint veritatis! Aliquid expedita necessitatibus optio et obcaecati commodi officia
              culpa quisquam illo! Numquam. Aut obcaecati exercitationem odio iusto corrupti voluptatem nesciunt
              excepturi quas, accusantium molestiae? Officia delectus tempore aliquam ut dolore, eum mollitia harum
              nesciunt quo totam officiis magnam ex ipsa, deleniti veniam? Quisquam soluta eum cupiditate sed accusamus
              aspernatur consequuntur odio eos sint debitis id iste, voluptatibus dolor molestias officiis voluptas
              numquam ducimus delectus. Id accusamus aspernatur corporis. Molestias necessitatibus fugiat quidem.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold fluid-text-xl"> Our categories </h2>
            {error && <span> Error fetching categories</span>}
            {loading && <span> Loading categories... </span>}
            {categoryData.length > 0 &&
              imageContainerData.map((item, index) => (
                <Fragment key={index}>
                  <ImageContainer image={item.image} caption={item.caption} />
                </Fragment>
              ))}
          </div>
        </main>
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
