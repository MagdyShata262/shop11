import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

import { Product } from '@mydata-access/data-access';
import * as ProductsActions from '../+state/products.actions';
import * as ProductsSelectors from '../+state/products.selectors';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'products-list-products-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
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
    console.log('Add to cart:', product);
    // TODO: Implement add to cart functionality
  }

  onProductClick(productId: number): void {
    console.log('Product clicked:', productId);
    // TODO: Implement navigation to product details
  }

  reloadProducts(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }

  // دوال مساعدة للخصومات والمخزون (افتراضية)
  isInStock(product: Product): boolean {
    // FakeStore API لا يوفر حالة المخزون، لذا نستخدم منطق افتراضي
    // يمكن تغيير هذا المنطق حسب احتياجاتك
    return product.rating.count > 10; // إذا كان لديه أكثر من 10 تقييمات، نعتبره متوفراً
  }

  hasDiscount(product: Product): boolean {
    // FakeStore API لا يوفر خصومات، لذا نستخدم منطق افتراضي
    // يمكن تغيير هذا المنطق حسب احتياجاتك
    return product.price > 50; // إذا كان السعر أكثر من 50، نعرض خصم
  }

  getDiscountPercentage(product: Product): number {
    // توليد نسبة خصم بناءً على السعر
    if (product.price > 100) return 20;
    if (product.price > 50) return 15;
    return 10;
  }

  getDiscountedPrice(product: Product): number {
    const discount = this.getDiscountPercentage(product);
    return product.price * (1 - discount / 100);
  }

  // دوال جديدة لحساب الإحصائيات
  getInStockCount(products: Product[]): number {
    return products.filter((product) => this.isInStock(product)).length;
  }

  getDiscountCount(products: Product[]): number {
    return products.filter((product) => this.hasDiscount(product)).length;
  }
}
