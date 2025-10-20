import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap } from 'rxjs';

import { Product } from '@mydata-access/data-access';
import * as ProductsActions from '../+state/products.actions';
import * as ProductsSelectors from '../+state/products.selectors';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'products-list-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export default class ProductDetailsComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);

  product$: Observable<Product | undefined>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor() {
    // حالة التحميل والخطأ
    this.loading$ = this.store.select(ProductsSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelectors.selectProductsError);

    // جلب المنتج بناءً على الـ id من المسار
    this.product$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      filter((id) => id !== null),
      switchMap((id) =>
        this.store.select(ProductsSelectors.selectProductById(+id))
      )
    );
  }

  ngOnInit(): void {
    // تأكد من تحميل المنتجات إذا لم تكن محملة بعد
    this.store.dispatch(ProductsActions.loadProducts());
  }

  // --- منطق مكرر من ProductsListComponent (يمكنك نقله لخدمة لاحقًا) ---
  isInStock(product: Product): boolean {
    return product.rating.count > 10;
  }

  hasDiscount(product: Product): boolean {
    return product.price > 50;
  }

  getDiscountPercentage(product: Product): number {
    if (product.price > 100) return 20;
    if (product.price > 50) return 15;
    return 10;
  }

  getDiscountedPrice(product: Product): number {
    const discount = this.getDiscountPercentage(product);
    return product.price * (1 - discount / 100);
  }

  onAddToCart(product: Product): void {
    console.log('Add to cart:', product);
    // TODO: Implement add to cart
  }
  reloadProducts(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }
  goBack(): void {
    window.history.back();
  }
}
