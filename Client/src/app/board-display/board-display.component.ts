import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BoardListComponent } from '../board-list/board-list.component';

@Component({
  selector: 'app-board-display',
  standalone: true,
  imports: [CommonModule, BoardListComponent],
  templateUrl: './board-display.component.html',
  styleUrl: './board-display.component.css'
})
export class BoardDisplayComponent {
  //Get Route Id
  route: ActivatedRoute = inject(ActivatedRoute);
  boardId: string = '';
  constructor() {
      this.boardId = String(this.route.snapshot.params['id']);
  }

}
