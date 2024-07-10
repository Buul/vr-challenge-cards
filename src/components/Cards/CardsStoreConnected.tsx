import React, { FC, useEffect } from 'react';
import { uniqueId } from 'lodash';
import { Toast, toast } from 'vr-challenge-ds';

import { getProducts } from '@/flux/modules/products/actions';
import { Product } from '@/flux/modules/products/types';
import { useProducts } from '@/hook/selectors/productsHooks';
import { useAppDispatch } from '@/hook/store';
import { RequestStatus } from '@/models/iRequest';
import { getStoreProducts, setProducts } from '@/services/products';

import Card from '../Card/Card';
import { SkeletonCards } from '../Skeleton';

import * as Styled from './Cards.styled';

const CardsStoreConnected: FC = () => {
  const dispatch = useAppDispatch();
  const { data: productsData, status } = useProducts();

  useEffect(() => {
    dispatch(getProducts.request());
  }, []);

  const handleClickBuy = (product: Product) => {
    const storeProduct = getStoreProducts();
    let newProductList: Product[] = [];
    if (storeProduct) {
      newProductList = JSON.parse(storeProduct) as Product[];
    }
    newProductList.push(product);
    setProducts(newProductList);
    toast('Produto adicionado ao carrinho');
  };

  return (
    <Styled.Wrapper data-testid="cards">
      {status === RequestStatus.fetching && <SkeletonCards />}
      {productsData?.products.map(product => (
        <Card product={product} key={uniqueId()} onClickBuy={handleClickBuy} />
      ))}
      <Toast variant="success" id="success" />
    </Styled.Wrapper>
  );
};

export default CardsStoreConnected;
