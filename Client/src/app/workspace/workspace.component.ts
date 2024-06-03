import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { IBoardModel } from '../model/board';
import { BoardService } from '../services/board.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgComponent } from '../components/svgs.component';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardModalComponent } from '../new-board-modal/new-board-modal.component';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgComponent, NewBoardModalComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent implements OnInit {

  pageTitle: string = 'Workspace';
  pageHeader: string = 'Choose a board or make a new one';
  boardHeader: string = 'Boards';

  errorMessage: string = '';
  boardData: IBoardModel[] = [];

  title: string | undefined;
  description?: string | undefined;

  constructor(private boardService: BoardService, public dialog: MatDialog) { }

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

  //Create Board Modal
  openModal(): void {
    const dialogRef = this.dialog.open(NewBoardModalComponent, {
      data: { title: this.title, description: this.description },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed:', result);
        this.createBoard(result);
      } else {
        console.log('Dialog was closed without creating a board');
      }
    });
  }

  createBoard(data: IBoardModel): void {
    this.boardService.createBoard(data).subscribe({
      next: (data: IBoardModel) => {
        console.log('POST request successful:', data);
        this.fetchBoards();
/*         this.boardCreated.emit(); */
      },
      error: (error) => {
        this.errorMessage = 'An error has ocurred';
        console.error(error);
      }
    })
}
}
