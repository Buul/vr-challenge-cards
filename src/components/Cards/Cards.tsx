import React, { FC } from 'react';
import { uniqueId } from 'lodash';
import { Toast } from 'vr-challenge-ds';

import Card from '../Card/Card';
import { SkeletonCards } from '../Skeleton';

import * as Styled from './Cards.styled';
import { CardsProps, RequestStatus } from './Cards.types';

export const CardsComponent: FC<CardsProps> = ({
  status,
  products,
  onClickBuy,
}) => (
  <Styled.Wrapper data-testid="cards">
    {status === RequestStatus.fetching && <SkeletonCards />}
    {products.map(product => (
      <Card product={product} key={uniqueId()} onClickBuy={onClickBuy} />
    ))}
    <Toast variant="success" id="success" />
  </Styled.Wrapper>
);
export default CardsComponent;
