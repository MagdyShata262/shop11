import { createReducer, on } from '@ngrx/store';
import { Product } from '@mydata-access/data-access';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,

  // Load Products
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),

  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Load Single Product
  on(ProductsActions.loadProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ProductsActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    selectedProduct: product,
    loading: false,
  })),

  on(ProductsActions.loadProductFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Add Product
  on(ProductsActions.addProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ProductsActions.addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    loading: false,
  })),

  on(ProductsActions.addProductFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Update Product
  on(ProductsActions.updateProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ProductsActions.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((p) => (p.id === product.id ? product : p)),
    selectedProduct:
      state.selectedProduct?.id === product.id
        ? product
        : state.selectedProduct,
    loading: false,
  })),

  on(ProductsActions.updateProductFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Delete Product
  on(ProductsActions.deleteProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ProductsActions.deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== id),
    selectedProduct:
      state.selectedProduct?.id === id ? null : state.selectedProduct,
    loading: false,
  })),

  on(ProductsActions.deleteProductFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
