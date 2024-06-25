import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { SecondaryHeaderComponent } from '../../components/secondary-header/secondary-header.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [HeaderComponent, CardComponent, SecondaryHeaderComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css',
})
export class PortfolioPageComponent {}
