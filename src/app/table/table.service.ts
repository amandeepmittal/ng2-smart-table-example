import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:4000';
  getData() {
    return this.http.get(`${this.url}/employees`);
  }
}
