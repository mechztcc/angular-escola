import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponsible } from './interfaces/responsible';

@Injectable({
  providedIn: 'root'
})
export class ResponsiblesService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient ) { }

  createResponsible(responsible: IResponsible): Observable<any> {
    return this.http.post<any>(`${this.url}/responsibles`, responsible);
  }
}
