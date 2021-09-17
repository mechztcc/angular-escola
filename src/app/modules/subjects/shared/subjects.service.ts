import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubject } from './interfaces/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {


  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  createSubject(subject: ISubject): Observable<ISubject> {
    return this.http.post<ISubject>(`${this.url}/subjects`, subject);
  }

  showSubject(id: number): Observable<ISubject> {
    return this.http.get<ISubject>(`${this.url}/subjects/${id}`);
  }

  listAllBySchool(id: number): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(`${this.url}/subjects/school/${id}`);
  }
}
