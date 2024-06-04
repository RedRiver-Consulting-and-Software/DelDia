import { Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace/workspace.component';
import { BoardDisplayComponent } from './board-display/board-display.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewBoardComponent } from './new-board/new-board.component';

export const routes: Routes = [
    {
      path: '',
      component: WorkspaceComponent,
      data: { title: 'DelDia - Home' },
    },
    {
      path: 'board/:id',
      pathMatch: 'full',
      component: BoardDisplayComponent,
      data: { title: 'Board - Title' }
    },
    {
      path: '**',
      title: 'Page Not Found',
      component: NotFoundComponent,
      data: { title: 'Page Not Found' }
    }
  ];
