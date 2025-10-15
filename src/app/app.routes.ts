import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@myfeature-products/feature-products').then(
        (m) => m.featureProductsRoutes
      ),
  },
];
