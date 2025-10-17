import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-header',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() logo = '🛍️ Shop';
  @Input() companyName = 'متجر';
  @Input() navigationItems: NavigationItem[] = [
    { label: 'الرئيسية', path: '/' },
    { label: 'المنتجات', path: '/products' },
    { label: 'العروض', path: '/offers' },
    { label: 'اتصل بنا', path: '/contact' },
  ];
  @Input() user: { name: string; avatar?: string } | null = null;
  @Input() cartItemsCount = 0;
  @Input() variant: 'default' | 'transparent' | 'sticky' = 'default';
  @Input() showSearch = true;
  @Input() showCart = true;
  @Input() showUserMenu = true;

  @Output() navigationClick = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() cartClick = new EventEmitter<void>();
  @Output() userMenuClick = new EventEmitter<void>();
  @Output() loginClick = new EventEmitter<void>();

  isMobileMenuOpen = false;
  searchQuery = '';

  onNavigationClick(path: string): void {
    this.navigationClick.emit(path);
    this.isMobileMenuOpen = false;
  }

  onSearchChange(query: string): void {
    this.searchQuery = query;
    this.searchChange.emit(query);
  }

  onCartClick(): void {
    this.cartClick.emit();
  }

  onUserMenuClick(): void {
    this.userMenuClick.emit();
  }

  onLoginClick(): void {
    this.loginClick.emit();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  get headerClasses(): string {
    return `header ${this.variant}`;
  }
}

export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}
