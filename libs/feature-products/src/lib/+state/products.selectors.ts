import { createSelector } from '@ngrx/store';
import { productsFeature } from './products.reducer';
import { Product } from '@mydata-access/data-access';

// استخدام الـ selectors من الـ feature
export const {
  selectProductsState,
  selectProducts,
  selectSelectedProduct,
  selectLoading,
  selectError,
  selectLoaded,
} = productsFeature;

// Selectors إضافية
export const selectAllProducts = selectProducts;

export const selectProductsLoading = selectLoading;

export const selectProductsError = selectError;

export const selectProductsLoaded = selectLoaded;

// Select product by ID
export const selectProductById = (id: number) =>
  createSelector(selectAllProducts, (products) =>
    products.find((product) => product.id === id)
  );

// Select products by category
export const selectProductsByCategory = (category: string) =>
  createSelector(selectAllProducts, (products) =>
    products.filter((product) => product.category === category)
  );
