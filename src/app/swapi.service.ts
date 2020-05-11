import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './swapi.model';

@Injectable({
  providedIn: 'root'
  })
export class SwapiService {
baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

getPeople(url: string): Promise<People> {
return this.http.get<People>(url)
.toPromise();
}
}