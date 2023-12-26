import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:7139/'; 

  constructor(private http: HttpClient) { }

  //métodos para receitas 

  getRecipes(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/recipes`);
  }

  searchRecipes(term: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/recipes/search?term=${term}`);

    //métodos para users
  }
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/users`);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/users/${userId}`);
  }

  updateUser(userId: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}api/users/${userId}`, user);
  }

}
