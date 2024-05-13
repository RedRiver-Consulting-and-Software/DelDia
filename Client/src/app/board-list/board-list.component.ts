import { Component } from '@angular/core';
import { BoardCardComponent } from '../board-card/board-card.component';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [BoardCardComponent],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent {

}
