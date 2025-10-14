import { ShopEntity } from './shop.models';
import {
  shopAdapter,
  ShopPartialState,
  initialShopState,
} from './shop.reducer';
import * as ShopSelectors from './shop.selectors';

describe('Shop Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getShopId = (it: ShopEntity) => it.id;
  const createShopEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ShopEntity);

  let state: ShopPartialState;

  beforeEach(() => {
    state = {
      shop: shopAdapter.setAll(
        [
          createShopEntity('PRODUCT-AAA'),
          createShopEntity('PRODUCT-BBB'),
          createShopEntity('PRODUCT-CCC'),
        ],
        {
          ...initialShopState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Shop Selectors', () => {
    it('selectAllShop() should return the list of Shop', () => {
      const results = ShopSelectors.selectAllShop(state);
      const selId = getShopId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ShopSelectors.selectEntity(state) as ShopEntity;
      const selId = getShopId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectShopLoaded() should return the current "loaded" status', () => {
      const result = ShopSelectors.selectShopLoaded(state);

      expect(result).toBe(true);
    });

    it('selectShopError() should return the current "error" state', () => {
      const result = ShopSelectors.selectShopError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
