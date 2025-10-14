import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';

import * as ShopActions from './shop.actions';
import { ShopEffects } from './shop.effects';
import { ShopFacade } from './shop.facade';
import { ShopEntity } from './shop.models';
import {
  SHOP_FEATURE_KEY,
  ShopState,
  initialShopState,
  shopReducer,
} from './shop.reducer';
import * as ShopSelectors from './shop.selectors';

interface TestSchema {
  shop: ShopState;
}

describe('ShopFacade', () => {
  let facade: ShopFacade;
  let store: Store<TestSchema>;
  const createShopEntity = (id: string, name = ''): ShopEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SHOP_FEATURE_KEY, shopReducer),
          EffectsModule.forFeature([ShopEffects]),
        ],
        providers: [ShopFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ShopFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await firstValueFrom(facade.allShop$);
      let isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await firstValueFrom(facade.allShop$);
      isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadShopSuccess` to manually update list
     */
    it('allShop$ should return the loaded list; and loaded flag == true', async () => {
      let list = await firstValueFrom(facade.allShop$);
      let isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ShopActions.loadShopSuccess({
          shop: [createShopEntity('AAA'), createShopEntity('BBB')],
        })
      );

      list = await firstValueFrom(facade.allShop$);
      isLoaded = await firstValueFrom(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
