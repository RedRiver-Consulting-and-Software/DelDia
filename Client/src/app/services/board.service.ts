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

  getAllBoards(): Observable<IBoardModel[]> {
    return this.http.get<IBoardModel[]>('http://localhost:5233/api/Boards')
      .pipe(
        catchError(this.handleError)
      );
  }

  getBoardSummaries(): Observable<BoardSummary[]> {
    return this.http.get<BoardSummary[]>('http://localhost:5233/api/Boards/Summary');
  }

  getBoardById(id: number): Observable<IBoardModel> {
    return this.http.get<IBoardModel>(`http://localhost:5233/api/Boards/${id}`)
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
