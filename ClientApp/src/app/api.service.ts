import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
=======
>>>>>>> b16d9b5772c3dadf1d89a583eb19b9ee45cc503e

@Injectable({
  providedIn: 'root'
})
export class ApiService {
<<<<<<< HEAD
  private apiUrl = 'https://localhost:7139/'; 

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipes`);
  }

  searchRecipes(term: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipes/search?term=${term}`);
  }
=======

  constructor() { }
>>>>>>> b16d9b5772c3dadf1d89a583eb19b9ee45cc503e
}
