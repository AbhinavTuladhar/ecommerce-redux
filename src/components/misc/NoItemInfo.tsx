import NavigateBackButton from '@/components/misc/NavigateBackButton'

const NoItemInfo = () => (
  <section className="my-4 flex h-full flex-1 flex-col items-center justify-center gap-y-4 rounded-xl bg-lightmode-green px-4 py-20 text-center text-white dark:bg-darkmode-green">
    <h2 className="font-bold fluid-text-4xl">
      <span> Your cart is empty! </span>
      <span className="whitespace-nowrap"> {`>:-(`}</span>
    </h2>
    <NavigateBackButton>Continue shopping</NavigateBackButton>
  </section>
)

export default NoItemInfo
