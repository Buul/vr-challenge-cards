import React, { FC } from 'react';
import { uniqueId } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault } from 'vr-challenge-ds';

import Card from '../Card/Card';

import * as Styled from './Cards.styled';
import { CardsProps } from './Cards.types';

export const CardsComponent: FC<CardsProps> = ({ products, onClickBuy }) => (
  <ThemeProvider theme={ThemeDefault}>
    <Styled.Wrapper data-testid="cards">
      {products.map(product => (
        <Card product={product} key={uniqueId()} onClickBuy={onClickBuy} />
      ))}
    </Styled.Wrapper>
  </ThemeProvider>
);
export default CardsComponent;
