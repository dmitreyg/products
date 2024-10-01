import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password });
  }

  logout(): void {
    localStorage.removeItem('authToken');
    //clear user object
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
    //populate user object
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

}

