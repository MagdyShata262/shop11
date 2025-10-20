import { createFeature, createReducer, on } from '@ngrx/store';
import { Product } from '@mydata-access/data-access';
import * as ProductsActions from './products.actions';

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

export const productsFeature = createFeature({
  name: 'products',
  reducer: createReducer(
    initialProductsState,
    // Load Products
    on(
      ProductsActions.loadProducts,
      (state): ProductsState => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      ProductsActions.loadProductsSuccess,
      (state, { products }): ProductsState => ({
        ...state,
        products,
        loading: false,
        loaded: true,
        error: null,
      })
    ),
    on(
      ProductsActions.loadProductsFailure,
      (state, { error }): ProductsState => ({
        ...state,
        loading: false,
        error,
      })
    ),

    // Load Single Product
    on(
      ProductsActions.loadProduct,
      (state): ProductsState => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      ProductsActions.loadProductSuccess,
      (state, { product }): ProductsState => ({
        ...state,
        selectedProduct: product,
        loading: false,
        error: null,
      })
    ),
    on(
      ProductsActions.loadProductFailure,
      (state, { error }): ProductsState => ({
        ...state,
        loading: false,
        error,
      })
    ),

    // Create Product
    on(
      ProductsActions.createProduct,
      (state): ProductsState => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      ProductsActions.createProductSuccess,
      (state, { product }): ProductsState => ({
        ...state,
        products: [...state.products, product],
        loading: false,
        error: null,
      })
    ),
    on(
      ProductsActions.createProductFailure,
      (state, { error }): ProductsState => ({
        ...state,
        loading: false,
        error,
      })
    ),

    // Update Product
    on(
      ProductsActions.updateProduct,
      (state): ProductsState => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      ProductsActions.updateProductSuccess,
      (state, { product }): ProductsState => ({
        ...state,
        products: state.products.map((p) =>
          p.id === product.id ? product : p
        ),
        selectedProduct:
          state.selectedProduct?.id === product.id
            ? product
            : state.selectedProduct,
        loading: false,
        error: null,
      })
    ),
    on(
      ProductsActions.updateProductFailure,
      (state, { error }): ProductsState => ({
        ...state,
        loading: false,
        error,
      })
    ),

    // Delete Product
    on(
      ProductsActions.deleteProduct,
      (state): ProductsState => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      ProductsActions.deleteProductSuccess,
      (state, { id }): ProductsState => ({
        ...state,
        products: state.products.filter((p) => p.id !== id),
        selectedProduct:
          state.selectedProduct?.id === id ? null : state.selectedProduct,
        loading: false,
        error: null,
      })
    ),
    on(
      ProductsActions.deleteProductFailure,
      (state, { error }): ProductsState => ({
        ...state,
        loading: false,
        error,
      })
    ),

    // Clear Selected Product
    on(
      ProductsActions.clearSelectedProduct,
      (state): ProductsState => ({
        ...state,
        selectedProduct: null,
      })
    )
  ),
});

// Export the feature key for backward compatibility
export const productsFeatureKey = productsFeature.name;
export const productsReducer = productsFeature.reducer;

// Selectors
export const {
  selectProductsState,
  selectProducts,
  selectSelectedProduct,
  selectLoading,
  selectError,
  selectLoaded,
} = productsFeature;
