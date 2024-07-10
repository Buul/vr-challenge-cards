import { Product } from '@/flux/modules/products/types';

export type CardStyledProps = {
  onClickBuy: (product: Product) => void;
  product: Product;
};

export type CardProps = CardStyledProps;
