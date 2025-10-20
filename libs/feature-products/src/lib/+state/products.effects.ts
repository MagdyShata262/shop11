import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ProductsActions from './products.actions';
import { ProductsServiceService } from '@mydata-access/data-access';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productsService = inject(ProductsServiceService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => ProductsActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProduct),
      mergeMap(({ id }) =>
        this.productsService.getProduct(id).pipe(
          map((product) => ProductsActions.loadProductSuccess({ product })),
          catchError((error) =>
            of(ProductsActions.loadProductFailure({ error: error.message }))
          )
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      mergeMap(({ product }) =>
        this.productsService.createProduct(product).pipe(
          map((newProduct) =>
            ProductsActions.createProductSuccess({ product: newProduct })
          ),
          catchError((error) =>
            of(ProductsActions.createProductFailure({ error: error.message }))
          )
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      mergeMap(({ id, product }) =>
        this.productsService.updateProduct(id, product).pipe(
          map((updatedProduct) =>
            ProductsActions.updateProductSuccess({ product: updatedProduct })
          ),
          catchError((error) =>
            of(ProductsActions.updateProductFailure({ error: error.message }))
          )
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      mergeMap(({ id }) =>
        this.productsService.deleteProduct(id).pipe(
          map(() => ProductsActions.deleteProductSuccess({ id })),
          catchError((error) =>
            of(ProductsActions.deleteProductFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
