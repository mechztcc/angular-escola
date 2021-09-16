import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  listAllByUserId(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/students`);
  }

  createStudent(student: Student): Observable<any> {
    return this.http.post<any>(`${this.url}/students`, student);
  }
}
