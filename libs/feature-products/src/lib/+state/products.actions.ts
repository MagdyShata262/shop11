import { createAction, props } from '@ngrx/store';
import { Product } from './products.models';

// Load Products
export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

// Load Single Product
export const loadProduct = createAction(
  '[Products] Load Product',
  props<{ id: number }>()
);
export const loadProductSuccess = createAction(
  '[Products] Load Product Success',
  props<{ product: Product }>()
);
export const loadProductFailure = createAction(
  '[Products] Load Product Failure',
  props<{ error: string }>()
);

// Create Product
export const createProduct = createAction(
  '[Products] Create Product',
  props<{ product: Omit<Product, 'id'> }>()
);
export const createProductSuccess = createAction(
  '[Products] Create Product Success',
  props<{ product: Product }>()
);
export const createProductFailure = createAction(
  '[Products] Create Product Failure',
  props<{ error: string }>()
);

// Update Product
export const updateProduct = createAction(
  '[Products] Update Product',
  props<{ id: number; product: Partial<Product> }>()
);
export const updateProductSuccess = createAction(
  '[Products] Update Product Success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  '[Products] Update Product Failure',
  props<{ error: string }>()
);

// Delete Product
export const deleteProduct = createAction(
  '[Products] Delete Product',
  props<{ id: number }>()
);
export const deleteProductSuccess = createAction(
  '[Products] Delete Product Success',
  props<{ id: number }>()
);
export const deleteProductFailure = createAction(
  '[Products] Delete Product Failure',
  props<{ error: string }>()
);

// Clear selected product
export const clearSelectedProduct = createAction(
  '[Products] Clear Selected Product'
);
