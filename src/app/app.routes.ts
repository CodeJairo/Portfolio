import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/portfolio-page/portfolio-page.component').then(
        (m) => m.PortfolioPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
