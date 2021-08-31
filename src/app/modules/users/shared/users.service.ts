import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserCreateAccount } from './interfaces/user-create';
import { ILogin } from './interfaces/user-login';
import { IUserLoginResponse } from './interfaces/user-login-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }


  createSession(user: ILogin): Observable<IUserLoginResponse> {
    return this.http.post<IUserLoginResponse>(`${this.url}/sessions`, user);
  }

  createAccount(user: IUserCreateAccount): Observable<IUserLoginResponse> {
    return this.http.post<IUserLoginResponse>(`${this.url}/users`, user);
  }

}
