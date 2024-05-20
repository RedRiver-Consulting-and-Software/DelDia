import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  constructor(private http: HttpClient) {}

  getSvg(iconName: string): Observable<string> {
    return this.http.get(`assets/svg/${iconName}.svg`, { responseType: 'text' });
  }
}
