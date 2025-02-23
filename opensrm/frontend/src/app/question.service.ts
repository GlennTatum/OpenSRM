import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { R } from './backend';

export type QuestionRes = {
  question: Object
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }


  Q(topic: string): Observable<QuestionRes> {
    return this.http.get<QuestionRes>(R(`problem/${topic}`))
  }
}
