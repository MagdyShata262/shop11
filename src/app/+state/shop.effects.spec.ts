import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ShopActions from './shop.actions';
import { ShopEffects } from './shop.effects';

describe('ShopEffects', () => {
  let actions: Observable<Action>;
  let effects: ShopEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ShopEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ShopEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ShopActions.initShop() });

      const expected = hot('-a-|', {
        a: ShopActions.loadShopSuccess({ shop: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
