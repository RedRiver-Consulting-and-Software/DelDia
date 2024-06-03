import { Component, Output, EventEmitter } from '@angular/core';
import { IBoardModel } from '../model/board';

@Component({
  selector: 'app-new-board',
  standalone: true,
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent {
  @Output() boardCreated = new EventEmitter<IBoardModel>();

  createNewBoard() {
    const newBoard: IBoardModel = {
      id: Date.now(),
      title: `New Board ${Date.now()}`,
      description: '',
      lists: []
    };
    this.boardCreated.emit(newBoard);
  }
}