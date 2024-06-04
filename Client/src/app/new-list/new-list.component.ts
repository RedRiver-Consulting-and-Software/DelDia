// src/app/new-list/new-list.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { NewListModel } from '../model/board';
import { SvgComponent } from '../components/svgs.component';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {
  @Output() listCreated = new EventEmitter<NewListModel>(); // Update the type

  createNewList() {
    console.log('New list created!');
    const newListData: NewListModel = {
      id: 123, // Example ID
      title: 'New List Title' // Example title
    };
    this.listCreated.emit(newListData); // Emit event with new list data
  }
}
