import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'api-quiz'; // Set your base URL

  constructor(private http: HttpClient) {}

  getAllQuiz(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`); // Make the GET request
  }


  getQuizById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addQuiz(quiz: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new`, quiz , { responseType: 'text' });
  }

  getQuestionOFQuizById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/questionofquiz/${id}`);
  }

  createQuiz(name: string, category: string, noOfQuestions: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/quiz/${name}/${category}/${noOfQuestions}`, {});
  }

  submitQuiz(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/quizzes/submit/${id}`, {});
  }
}