import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/reduxHooks';
import { ProductsSelector } from '@/features/products/productsSlice';
import type { ProductsType } from '@/features/products/productsSlice';

const useProducts = () => {
  const fetchedProducts = useAppSelector(ProductsSelector);

  const [products, setProducts] = useState<Array<ProductsType>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(fetchedProducts.loading);
    setProducts(fetchedProducts.products);
    setError(fetchedProducts.error);
  }, [fetchedProducts]);

  return { products, loading, error };
};

export default useProducts;
