import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { R } from './backend';
import { Observable } from 'rxjs';

export type User = {
  _id: string,
  email: string,
  session: string,
  topics: Array<string>,
  points: number
}

export type UserRes = {
  user: Object
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  U(): Observable<UserRes> {
    let token = document.cookie
    return this.http.get<UserRes>(R(`account/${token}`))
    
  }
}
