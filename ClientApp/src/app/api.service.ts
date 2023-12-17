import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7139/'; 

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipes`);
  }

  searchRecipes(term: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipes/search?term=${term}`);
  }
}
