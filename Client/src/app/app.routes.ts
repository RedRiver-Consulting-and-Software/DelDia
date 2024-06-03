import { Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace/workspace.component';
import { BoardDisplayComponent } from './board-display/board-display.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewBoardComponent } from './new-board/new-board.component'; // Import NewBoardComponent

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
      component: NotFoundComponent },
      {
        path: 'board/:id',
        pathMatch: 'full',
        component: BoardDisplayComponent,
        data: { title: 'Board - Title' }
      },
      {
        path: 'new-board',
        pathMatch: 'full',
        component: NewBoardComponent, // Include NewBoardComponent in the routes
        data: { title: 'Create New Board' }
      },
  ];
