import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
