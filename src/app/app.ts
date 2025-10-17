import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@myui/ui';
import { FooterComponent } from '@myui/ui';



@Component({
  imports: [RouterModule, CommonModule,HeaderComponent,FooterComponent ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @Input() title = 'shop';
  
}
