import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { BoardDisplayComponent } from './board-display/board-display.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
      path: '',
      title: 'DelDia - Home',
      component: DashboardComponent,
    },
    {
      path: 'data',
      title: 'Demo API - Data',
      component: DataDisplayComponent
    },
    {
      path: 'board/:id',
      title: 'Board - Title',
      component: BoardDisplayComponent
    },
    {
      path: '**',
      title: 'Page Not Found',
      component: NotFoundComponent }
];
