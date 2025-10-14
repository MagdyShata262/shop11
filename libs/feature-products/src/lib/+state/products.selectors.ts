import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsFeatureKey, ProductsState } from './products.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectAllProducts = createSelector(
  selectProductsState,
  (state) => state.products
);

export const selectSelectedProduct = createSelector(
  selectProductsState,
  (state) => state.selectedProduct
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state) => state.error
);

export const selectProductById = (id: number) =>
  createSelector(selectAllProducts, (products) =>
    products.find((product) => product.id === id)
  );
