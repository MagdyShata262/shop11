import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '@myfeature-products/feature-products';

@Component({
  imports: [RouterModule, CommonModule, ProductsListComponent],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shop';
}
