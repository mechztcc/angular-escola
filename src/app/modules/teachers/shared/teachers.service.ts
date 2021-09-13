import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeacher } from './interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {


  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  listAllByUserId(): Observable<ITeacher[]> {
    return this.http.get<ITeacher[]>(`${this.url}/teachers`);
  }
}
