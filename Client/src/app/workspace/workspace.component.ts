import { Component, OnInit } from '@angular/core';
import { IBoardModel } from '../model/board';
import { BoardService } from '../services/board.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgComponent } from '../components/svgs.component';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent implements OnInit {

  pageTitle: string = 'Workspace';
  pageHeader: string = 'Choose a board or make a new one';
  boardHeader: string = 'Boards';

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
