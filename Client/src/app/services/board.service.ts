import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//MODELS
import { IBoardModel } from '../model/board';

export interface BoardSummary {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  //GET - All Boards, list and cards
  getAllBoards(): Observable<IBoardModel[]> {
    return this.http.get<IBoardModel[]>('http://localhost:5233/api/Boards')
      .pipe(
        catchError(this.handleError)
      );
  }

  //GET - Get board summary (id & title)
  getBoardSummaries(): Observable<BoardSummary[]> {
    return this.http.get<BoardSummary[]>('http://localhost:5233/api/Boards/Summary');
  }

  //GET - Get board with id
  getBoardById(id: number): Observable<IBoardModel> {
    return this.http.get<IBoardModel>(`http://localhost:5233/api/Boards/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  //POST - Create a new board
  createBoard(boardData: any): Observable<IBoardModel> {
    return this.http.post<IBoardModel>('http://localhost:5233/api/Boards', boardData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage = 'Unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage))
  }

}
