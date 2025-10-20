import { Route } from '@angular/router';
import { FeatureProducts } from './feature-products/feature-products';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productsFeature } from './+state/products.reducer'; // تأكد من استيراد productsFeature
import { ProductsEffects } from './+state/products.effects';
import { ProductsListComponent } from './products-list/products-list.component';
import ProductDetailsComponent from './product-details/product-details.component';

export const featureProductsRoutes: Route[] = [
  {
    path: '',
    component: FeatureProducts,
    providers: [
      provideState(productsFeature), // هنا نمرر كائن الميزة مباشرة
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
