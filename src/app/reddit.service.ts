import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from './interfaces/results';
import { Data } from './interfaces/results';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  apiUrl: string = 'https://www.reddit.com/r/aww/.json';
  constructor(private http: HttpClient) {}
  getData(): any {
    return this.http.get(this.apiUrl);
  }
}
