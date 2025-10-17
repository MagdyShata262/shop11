import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'ui-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() variant: 'default' | 'outline' | 'elevated' | 'flat' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() hoverEffect = false;

  @ContentChild('footer', { read: TemplateRef })
  footerTemplate?: TemplateRef<any>;

  get cardClasses(): string {
    return [
      'card',
      this.variant,
      this.size,
      `padding-${this.padding}`,
      this.hoverEffect ? 'card-hover' : '',
    ]
      .join(' ')
      .trim();
  }

  get showFooter(): boolean {
    return !!this.footerTemplate;
  }
}
