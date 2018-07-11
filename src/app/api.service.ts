import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get20Fighters () {
    return this.http.get('http://localhost:3000/fighters?_limit=20');
  }
}
