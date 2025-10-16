import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@mydata-access/data-access';
import * as ProductsActions from '../+state/products.actions';
import * as ProductsSelectors from '../+state/products.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'products-list-products-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  private store = inject(Store);

  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor() {
    this.products$ = this.store.select(ProductsSelectors.selectAllProducts);
    this.loading$ = this.store.select(ProductsSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelectors.selectProductsError);
  }
  ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
    console.log('ProductsListComponent initialized');
  }

  onAddToCart(product: Product): void {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product);
  }

  onProductClick(productId: number): void {
    // Navigation will be handled by router link in template
  }
}
