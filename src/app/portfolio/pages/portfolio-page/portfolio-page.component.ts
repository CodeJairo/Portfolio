import { Component } from '@angular/core';
import { MainCardComponent } from '../../components/main-card/main-card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SecondaryCardComponent } from '../../components/secondary-card/secondary-card.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [MainCardComponent, HeaderComponent, SecondaryCardComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css',
})
export class PortfolioPageComponent {}
