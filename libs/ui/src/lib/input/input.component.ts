import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';
  @Input() label?: string;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() readonly = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'default' | 'outline' | 'filled' = 'default';
  @Input() status: 'default' | 'error' | 'success' | 'warning' = 'default';
  @Input() helperText?: string;
  @Input() prefixIcon?: string;
  @Input() suffixIcon?: string;
  @Input() showPasswordToggle = false;
  @Input() id?: string;

  value = '';
  isPasswordVisible = false;
  inputId = '';

  private onChange: (value: string) => void = () => { /* empty */ };
  private onTouched: () => void = () => { /* empty */ };

  ngOnInit() {
    // Generate unique ID if not provided
    this.inputId = this.id || `ui-input-${Math.random().toString(36).substring(2, 9)}`;
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  togglePasswordVisibility(): void {
    if (this.type === 'password' && this.showPasswordToggle) {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.type = this.isPasswordVisible ? 'text' : 'password';
    }
  }

  get inputClasses(): string {
    const classes = [
      'input',
      this.size,
      this.variant,
      this.status,
      this.disabled ? 'disabled' : '',
      this.prefixIcon ? 'has-prefix' : '',
      this.suffixIcon || (this.type === 'password' && this.showPasswordToggle) ? 'has-suffix' : ''
    ];

    return classes.filter(c => c && c.trim() !== '').join(' ').trim();
  }

  get helperTextClasses(): string {
    return `helper-text ${this.status}`;
  }
}