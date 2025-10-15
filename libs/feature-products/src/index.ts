import * as ProductsActions from './lib/+state/products.actions';

import * as ProductsFeature from './lib/+state/products.reducer';

import * as ProductsSelectors from './lib/+state/products.selectors';

export * from './lib/+state/products.models';

export { ProductsActions, ProductsFeature, ProductsSelectors };
export * from './lib/lib.routes';

export * from './lib/feature-products/feature-products';
export * from './lib/products-list/products-list.component';
export * from './lib/product-details/product-details.component';

export * from './lib/lib.routes';
