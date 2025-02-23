import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { R } from './backend';

export type Question = {
  _id: string,
  topic: string,
  math_question_text: string,
  math_question_image_url: string,
  math_question_answer: number
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }


  Q(topic: string): Observable<Object> {
    return this.http.get(R(`problem/${topic}`), {responseType: 'json'})
  }
}
