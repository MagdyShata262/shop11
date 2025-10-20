import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  private readonly apiUrl = 'https://fakestoreapi.com'; // ✅ إزالة المسافة الزائدة
  private readonly http = inject(HttpClient);

  /**
   * جلب جميع المنتجات
   */
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.apiUrl}/products`)
      .pipe(catchError(this.handleError));
  }

  /**
   * جلب منتج حسب المعرّف
   */
  getProduct(id: number): Observable<Product> {
    return this.http
      .get<Product>(`${this.apiUrl}/products/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * إنشاء منتج جديد
   */
  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http
      .post<Product>(`${this.apiUrl}/products`, product)
      .pipe(catchError(this.handleError));
  }

  /**
   * تحديث منتج موجود
   */
  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    return this.http
      .put<Product>(`${this.apiUrl}/products/${id}`, product)
      .pipe(catchError(this.handleError));
  }

  /**
   * حذف منتج
   */
  deleteProduct(id: number): Observable<Product> {
    return this.http
      .delete<Product>(`${this.apiUrl}/products/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * معالجة الأخطاء الشائعة
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // خطأ من جانب العميل
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // خطأ من جانب الخادم
      errorMessage = `Server Error: ${error.status} - ${error.message}`;
    }
    console.error('ProductsService Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
