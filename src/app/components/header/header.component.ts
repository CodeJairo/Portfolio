import { Component } from '@angular/core';
import { SwitchToggleComponent } from '../switch-toggle/switch-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SwitchToggleComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
