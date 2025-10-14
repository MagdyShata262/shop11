import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ShopActions from './shop.actions';
import { ShopEntity } from './shop.models';

export const SHOP_FEATURE_KEY = 'shop';

export interface ShopState extends EntityState<ShopEntity> {
  selectedId?: string | number; // which Shop record has been selected
  loaded: boolean; // has the Shop list been loaded
  error?: string | null; // last known error (if any)
}

export interface ShopPartialState {
  readonly [SHOP_FEATURE_KEY]: ShopState;
}

export const shopAdapter: EntityAdapter<ShopEntity> =
  createEntityAdapter<ShopEntity>();

export const initialShopState: ShopState = shopAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialShopState,
  on(ShopActions.initShop, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ShopActions.loadShopSuccess, (state, { shop }) =>
    shopAdapter.setAll(shop, { ...state, loaded: true })
  ),
  on(ShopActions.loadShopFailure, (state, { error }) => ({ ...state, error }))
);

export function shopReducer(state: ShopState | undefined, action: Action) {
  return reducer(state, action);
}
