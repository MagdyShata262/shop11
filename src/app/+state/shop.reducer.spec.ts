import { Action } from '@ngrx/store';

import * as ShopActions from './shop.actions';
import { ShopEntity } from './shop.models';
import { ShopState, initialShopState, shopReducer } from './shop.reducer';

describe('Shop Reducer', () => {
  const createShopEntity = (id: string, name = ''): ShopEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Shop actions', () => {
    it('loadShopSuccess should return the list of known Shop', () => {
      const shop = [
        createShopEntity('PRODUCT-AAA'),
        createShopEntity('PRODUCT-zzz'),
      ];
      const action = ShopActions.loadShopSuccess({ shop });

      const result: ShopState = shopReducer(initialShopState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = shopReducer(initialShopState, action);

      expect(result).toBe(initialShopState);
    });
  });
});
