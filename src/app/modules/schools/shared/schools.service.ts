import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClassroomsOfSchool } from './interfaces/classrooms-of-school';
import { ICreateScholl } from './interfaces/create-school';
import { IUserSchools } from './interfaces/user-schools';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  listAllByUserId(): Observable<IUserSchools> {
    return this.http.get<IUserSchools>(`${this.url}/users/schools`);
  }

  creteSchool(school: ICreateScholl): Observable<any> {
    return this.http.post<any>(`${this.url}/schools`, school);
  }

  listAllClassrooms(schoolId: number): Observable<IClassroomsOfSchool> {
    return this.http.get<IClassroomsOfSchool>(`${this.url}/schools/${schoolId}`);
  }
}
