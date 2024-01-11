import SectionCardTitle from '@/components/misc/SectionCardTitle';
import findTotalItems from '@/helpers/findTotalItems';
import findTotalAmount from '@/helpers/findTotalAmount';
import { useAppSelector } from '@/hooks/reduxHooks';
import { CartSelector } from '@/features/cart/cartSlice';

const OrderSummary = () => {
  const cart = useAppSelector(CartSelector);

  const totalItems = findTotalItems(cart);
  const totalPrice = findTotalAmount(cart);

  const tableData = [
    { label: `Products (${totalItems})`, value: `$${totalPrice.toFixed(2)}` },
    { label: 'Shipping', value: '$30' },
    // { label: 'Total amount', value: `$${(totalPrice + 30).toFixed(2)}` }
  ];

  return (
    <section className="border border-gray-300 dark:border-white">
      <SectionCardTitle>Order Summary</SectionCardTitle>
      <div className="mx-auto flex w-11/12 flex-col gap-y-4 pb-4 pt-6">
        <div className="flex flex-col gap-y-2">
          {tableData.map((row, index) => (
            <div className="flex w-full justify-between" key={index}>
              <span> {row.label} </span>
              <span> {row.value} </span>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-between font-bold">
          <span> Total amount </span>
          <span> {`$${(totalPrice + 30).toFixed(2)}`} </span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
