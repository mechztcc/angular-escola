import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClassroom } from './interfaces/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  listAllByUserId(): Observable<IClassroom[]> {
    return this.http.get<IClassroom[]>(`${this.url}/classrooms`);
  }
}
