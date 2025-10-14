import { createAction, props } from '@ngrx/store';
import { ShopEntity } from './shop.models';

export const initShop = createAction('[Shop Page] Init');

export const loadShopSuccess = createAction(
  '[Shop/API] Load Shop Success',
  props<{ shop: ShopEntity[] }>()
);

export const loadShopFailure = createAction(
  '[Shop/API] Load Shop Failure',
  props<{ error: any }>()
);
