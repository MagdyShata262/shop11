import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHOP_FEATURE_KEY, ShopState, shopAdapter } from './shop.reducer';

// Lookup the 'Shop' feature state managed by NgRx
export const selectShopState =
  createFeatureSelector<ShopState>(SHOP_FEATURE_KEY);

const { selectAll, selectEntities } = shopAdapter.getSelectors();

export const selectShopLoaded = createSelector(
  selectShopState,
  (state: ShopState) => state.loaded
);

export const selectShopError = createSelector(
  selectShopState,
  (state: ShopState) => state.error
);

export const selectAllShop = createSelector(
  selectShopState,
  (state: ShopState) => selectAll(state)
);

export const selectShopEntities = createSelector(
  selectShopState,
  (state: ShopState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectShopState,
  (state: ShopState) => state.selectedId
);

export const selectEntity = createSelector(
  selectShopEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
