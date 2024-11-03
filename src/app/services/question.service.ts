import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes the service available throughout the application
})

export class QuestionService {
  private apiUrl = 'http://localhost:4200/api-question'; // Set your base URL

  constructor(private http: HttpClient) {}

  getAllQuestion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`); // Make the GET request
  }


  getQuestionById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addQuestion(question: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/new`, question);
  }

  updateQuestion(id: number, question: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, question);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
