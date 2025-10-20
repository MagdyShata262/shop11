import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

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
  // Dependency Injection
  private store = inject(Store);
  private router = inject(Router);

  // Observables
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  // Favorite products set
  favoriteProducts: Set<number> = new Set();

  constructor() {
    // Initialize observables in constructor
    this.products$ = this.store.select(ProductsSelectors.selectAllProducts);
    this.loading$ = this.store.select(ProductsSelectors.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelectors.selectProductsError);
  }

  ngOnInit(): void {
    // Load products on component initialization
    this.store.dispatch(ProductsActions.loadProducts());
    console.log('ProductsListComponent initialized');

    // For debugging - subscribe to see actual data
    this.products$.subscribe((products) => {
      console.log('Products loaded:', products);
    });
  }

  /**
   * Add product to cart
   */
  onAddToCart(product: Product): void {
    console.log('Add to cart:', product);
    // TODO: Implement add to cart functionality
    // You can dispatch an action here if you have cart state management
  }

  /**
   * Reload products list
   */
  reloadProducts(): void {
    this.store.dispatch(ProductsActions.loadProducts());
    console.log('Reloading products...');
  }

  /**
   * Navigate to product details
   */
  onProductClick(productId: number): void {
    this.router.navigate(['/products', productId]);
  }

  /**
   * Toggle favorite product
   */
  toggleFavorite(product: Product): void {
    if (this.favoriteProducts.has(product.id)) {
      this.favoriteProducts.delete(product.id);
    } else {
      this.favoriteProducts.add(product.id);
    }
  }

  /**
   * Check if product is favorite
   */
  isFavorite(product: Product): boolean {
    return this.favoriteProducts.has(product.id);
  }

  // Helper methods for stock and discount (based on FakeStore API limitations)

  /**
   * Check if product is in stock
   * Since FakeStore API doesn't provide stock status, we use rating count as proxy
   */
  isInStock(product: Product): boolean {
    return product.rating.count > 10; // Consider in stock if more than 10 ratings
  }

  /**
   * Check if product has discount
   * Custom logic since FakeStore API doesn't provide discounts
   */
  hasDiscount(product: Product): boolean {
    return product.price > 50; // Discount for products over $50
  }

  /**
   * Calculate discount percentage based on price
   */
  getDiscountPercentage(product: Product): number {
    if (product.price > 100) return 20;
    if (product.price > 50) return 15;
    return 10;
  }

  /**
   * Calculate discounted price
   */
  getDiscountedPrice(product: Product): number {
    const discount = this.getDiscountPercentage(product);
    return product.price * (1 - discount / 100);
  }

  // Statistics methods

  /**
   * Count products in stock
   */
  getInStockCount(products: Product[]): number {
    return products.filter((product) => this.isInStock(product)).length;
  }

  /**
   * Count products with discount
   */
  getDiscountCount(products: Product[]): number {
    return products.filter((product) => this.hasDiscount(product)).length;
  }

  /**
   * Get total products value
   */
  getTotalValue(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }

  /**
   * Get average product price
   */
  getAveragePrice(products: Product[]): number {
    if (products.length === 0) return 0;
    const total = products.reduce((sum, product) => sum + product.price, 0);
    return total / products.length;
  }
}
