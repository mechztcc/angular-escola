import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  createSession(): Observable<any> {
    return this.http.get<any>(`${this.url}/`);
  }

}
