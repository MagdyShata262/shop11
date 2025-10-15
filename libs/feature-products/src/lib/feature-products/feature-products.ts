import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'feature-products-feature-products',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './feature-products.html',
  styleUrl: './feature-products.scss',
})
export class FeatureProducts {}
