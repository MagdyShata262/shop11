import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ShopActions from './shop.actions';
import * as ShopFeature from './shop.reducer';

@Injectable()
export class ShopEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopActions.initShop),
      switchMap(() => of(ShopActions.loadShopSuccess({ shop: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(ShopActions.loadShopFailure({ error }));
      })
    )
  );
}
