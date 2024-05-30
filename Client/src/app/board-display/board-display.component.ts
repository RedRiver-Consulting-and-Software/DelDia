import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from '../services/board.service';
import { IBoardModel, IListModel, ICardModel } from '../model/board';
import { ActivatedRoute } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDragHandle
} from '@angular/cdk/drag-drop';
import { SvgComponent } from "../components/svgs.component";

@Component({
    selector: 'app-board-display',
    standalone: true,
    templateUrl: './board-display.component.html',
    styleUrls: ['./board-display.component.css'],
    imports: [
        CommonModule,
        CdkDropList,
        CdkDrag,
        CdkDragHandle,
        SvgComponent
    ]
})
export class BoardDisplayComponent implements OnInit {
  board: IBoardModel | null = null;
  error: string | null = null;
  boardId: string = '';

  constructor(private boardService: BoardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardId = String(params['id']);
      console.log(this.boardId);

      this.fetchBoardById(Number(this.boardId));
    });
  }

  //Fetch
  private fetchBoardById(id: number): void {
    this.boardService.getBoardById(id).subscribe({
      next: (board: IBoardModel) => {
        this.board = board;
        this.error = null;
      },
      error: (error) => {
        this.board = null;
        this.error = 'Failed to fetch board: ' + error.message;
      }
    }
    );
  }

  /**
  [
    {
      "id": 1, //Group-1
      "title": "List One",
      "boardId": 5,
      "cards": [ //items
        {
          "id": 1, //name
          "title": "First Card",
          "description": "This is the first Card.",
          "listId": 1
        },
        {
          "id": 2, //name
          "title": "Second Card",
          "description": "This is the second Card.",
          "listId": 1
        }
      ]
    },
    {
      "id": 2, //Group-2
      "title": "List Two",
      "boardId": 5,
      "cards": [ //items
        {
          "id": 3, //name
          "title": "Third Card",
          "description": "This is the third Card.",
          "listId": 2
        }
      ]
    }
  ]
*/

  //Test

  dropGroup(event: CdkDragDrop<IListModel[]>) {
    moveItemInArray(this.board!.lists, event.previousIndex, event.currentIndex);
    console.log('Moved the list');
  }

  dropCard(event: CdkDragDrop< ICardModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('Moved in same list');
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log('Moved in another list');
    }
  }

  getConnectedList(): string[] {
    return this.board!.lists.map(list => `list-${list.id}`);
  }

}
