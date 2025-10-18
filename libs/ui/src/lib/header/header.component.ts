import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
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
  @Input() userImage =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
  @Input() logoUrl =
    'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500';
  @Input() companyName = 'Your Company';
  @Input() showNotifications = true;

  isMobileMenuOpen = false;
  isProfileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  // إغلاق القوائم عند النقر خارجها
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.relative.ml-3') && this.isProfileMenuOpen) {
      this.isProfileMenuOpen = false;
    }

    if (
      !target.closest('.absolute.inset-y-0.left-0') &&
      this.isMobileMenuOpen
    ) {
      this.isMobileMenuOpen = false;
    }
  }
}
