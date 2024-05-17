import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from '../services/board.service';
import { IBoardModel } from '../model/board';
import { BoardCardComponent } from '../card/board-card.component';
import { ActivatedRoute } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-display',
  standalone: true,
  imports: [
    CommonModule,
    BoardCardComponent,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './board-display.component.html',
  styleUrls: ['./board-display.component.css']
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
      this.fetchBoardById(Number(this.boardId)); // Convert the boardId to number before fetching
    });
  }

  fetchBoardById(id: number): void {
    this.boardService.getBoardById(id).subscribe(
      (board: IBoardModel) => {
        this.board = board;
        this.error = null;
      },
      (error: any) => {
        this.board = null;
        this.error = 'Failed to fetch board: ' + error.message;
      }
    );
  }
}
