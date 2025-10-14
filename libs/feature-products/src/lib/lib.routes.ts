import { Route } from '@angular/router';
import { FeatureProducts } from './feature-products/feature-products';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromProducts from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';

export const featureProductsRoutes: Route[] = [
  {
    path: '',
    component: FeatureProducts,
    providers: [
      provideState(
        fromProducts.PRODUCTS_FEATURE_KEY,
        fromProducts.productsReducer
      ),
      provideEffects(ProductsEffects),
    ],
  },
];
