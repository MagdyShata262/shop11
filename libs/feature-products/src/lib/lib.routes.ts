import { Route } from '@angular/router';
import { FeatureProducts } from './feature-products/feature-products';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromProducts from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import { ProductsListComponent } from './products-list/products-list.component';
import ProductDetailsComponent from './product-details/product-details.component';

export const featureProductsRoutes: Route[] = [
  {
    path: '',
    component: FeatureProducts,
    providers: [
      provideState(
        fromProducts.productsFeatureKey,
        fromProducts.productsReducer
      ),
      provideEffects(ProductsEffects),
    ],
    children: [
      {
        path: '',
        component: ProductsListComponent,
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
      },
    ],
  },
];
