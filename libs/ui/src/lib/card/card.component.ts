import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ContentChild,
  Output,
  TemplateRef,
  EventEmitter,
} from '@angular/core';
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category?: string;
  rating?: number;
  discount?: number;
  inStock?: boolean;
}
@Component({
  selector: 'ui-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  // @Input() product?: Product;
  @Input() buttonText = 'Add to Cart';
  @Input() showActions = true;
  @Input() customClass = '';

  @Output() addToCart = new EventEmitter<Product>();
  @Output() quickView = new EventEmitter<Product>();
  @Output() addToWishlist = new EventEmitter<Product>();

  @ContentChild('customContent') customContent?: TemplateRef<any>;

  calculateOriginalPrice(): string {
    if (!this.product?.discount) return '';
    const originalPrice =
      (this.product.price * 100) / (100 - this.product.discount);
    return originalPrice.toFixed(2);
  }

  product: Product = {
    id: '1',
    name: 'Apple AirPods',
    price: 95.0,
    description:
      'With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.',
    imageUrl:
      'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80',
    category: 'Electronics',
    rating: 4.5,
    discount: 10,
    inStock: true,
  };
}
