import { Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace/workspace.component';
import { BoardDisplayComponent } from './board-display/board-display.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
      path: '',
      title: 'DelDia - Home',
      component: WorkspaceComponent,
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
