import React, { FC } from 'react';
import { Button, Typography } from 'vr-challenge-ds';

import * as Styled from './Card.styled';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({ onClickBuy, product }) => (
  <Styled.Wrapper onClick={() => onClickBuy(product)}>
    <Styled.CardContent>
      <img src={product.images[0]} alt="imagem do produto" />
      <Typography variant="title" align="center" spacing="sm">
        {product.title}
      </Typography>
      <Typography variant="secondary" align="center">
        {product.description}
      </Typography>
    </Styled.CardContent>
    <Styled.CardAction>
      <Typography variant="value">
        {product.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Typography>
      <Button>compras</Button>
    </Styled.CardAction>
  </Styled.Wrapper>
);

export default Card;
