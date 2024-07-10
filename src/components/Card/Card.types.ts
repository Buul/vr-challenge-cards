import { Product } from '../Cards/Cards.types';

export type CardStyledProps = {
  onClickBuy: (product: Product) => void;
  product: Product;
};

export type CardProps = CardStyledProps;
