// import { CommonModule } from '@angular/common';
// import { ChangeDetectionStrategy, Component } from '@angular/core';

// @Component({
//   selector: 'ui-button',
//   imports: [CommonModule],
//   standalone: true,
//   templateUrl: './button.component.html',
//   styleUrl: './button.component.scss',
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class ButtonComponent {

// }
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'], // ملاحظة: styleUrls (جمع)
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = 'Click me';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
}