import { Route } from '@angular/router';

import { featureProductsRoutes } from '@myfeature-products/feature-products';
export const appRoutes: Route[] = [

      {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
    {
    path: 'products',
    loadChildren: () => 
      import('@myfeature-products/feature-products').then(m => m.FeatureProducts)
  },
];
