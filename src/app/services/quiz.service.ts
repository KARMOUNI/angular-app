import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:8085';

  constructor(private http: HttpClient) {}

  getQuizById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/quiz/${id}`);
  }

  createQuiz(name: string, category: string, noOfQuestions: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/quiz/${name}/${category}/${noOfQuestions}`, {});
  }

  submitQuiz(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/quizzes/submit/${id}`, {});
  }
}