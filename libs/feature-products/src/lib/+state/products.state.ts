// +state/products.models.ts

import { Product } from './products.models';

export interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  loaded: boolean;
}

export const initialProductsState: ProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  loaded: false,
};
