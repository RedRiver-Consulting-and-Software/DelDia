/* import { Component } from '@angular/core';

@Component({
  selector: 'app-new-board-modal',
  standalone: true,
  imports: [],
  templateUrl: './new-board-modal.component.html',
  styleUrl: './new-board-modal.component.css'
})
export class NewBoardModalComponent {

} */
import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-new-board-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './new-board-modal.component.html',
  styleUrl: './new-board-modal.component.css',
})
export class NewBoardModalComponent {
  constructor(
    public dialogRef: MatDialogRef<NewBoardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
