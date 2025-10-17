
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-footer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() companyName = 'Shop';
  @Input() currentYear = new Date().getFullYear();
  @Input() variant: 'default' | 'minimal' | 'detailed' = 'default';
  @Input() showSocialLinks = true;
  @Input() showNewsletter = false;
  additionalClasses: any;

  get footerClasses(): string {
    const classes = [
      'footer',
      this.variant,
      this.additionalClasses
    ];

    return classes.filter(c => c && c.trim() !== '').join(' ').trim();
  }
}