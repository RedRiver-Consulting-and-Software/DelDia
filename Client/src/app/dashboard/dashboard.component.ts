import { Component, OnInit } from '@angular/core';
import { IBoardModel } from '../model/board';
import { BoardService } from '../services/board.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  pageHeader: string = 'Choose a board or make a new one';

  errorMessage: string = '';
  boardData: IBoardModel[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.fetchBoards();
  }

  private fetchBoards(): void {
    this.boardService.getAllBoards()
    .subscribe({
      next: (data: any) => {
        console.log(data);
        this.boardData = data;
      },
      error: (error) => {
        this.errorMessage = 'An error has ocurred';
        console.error(error);
      }
    });
  }
}
