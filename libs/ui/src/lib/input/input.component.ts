import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class InputComponent {

}
