import { useEffect } from 'react'

import FadeInContainer from '@/components/layouts/FadeInContainer'
import PageLayout from '@/components/layouts/PageLayout'
import NavigateBackButton from '@/components/misc/NavigateBackButton'
import { clearCart } from '@/features/cart/cartSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'

const Index = () => {
  const cartDispatch = useAppDispatch()

  // Clear the cart i the user visits the page.
  // Wrapped in useEffect because of the following warning:
  // Cannot update a component (`NavBar`) while rendering a different component (`Index`).
  useEffect(() => {
    cartDispatch(clearCart())
  }, [cartDispatch])

  return (
    <FadeInContainer className="flex flex-col">
      <PageLayout>
        <div className="flex flex-1 flex-col items-center justify-center gap-y-6 py-20 text-center">
          <h2 className="font-bold fluid-text-4xl">Thank you for shopping with us!</h2>
          <NavigateBackButton>Shop more?</NavigateBackButton>
        </div>
      </PageLayout>
    </FadeInContainer>
  )
}

export default Index
