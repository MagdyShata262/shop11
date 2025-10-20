// +state/products.models.ts
import { EntityState } from '@ngrx/entity';

export interface ProductsState extends EntityState<Product> {
  selectedId: number | null;
  loading: boolean;
  error: string | null;
}
export interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  loaded: boolean;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
