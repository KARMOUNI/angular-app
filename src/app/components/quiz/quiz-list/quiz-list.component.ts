import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../../services/quiz.service";
import { Quiz } from "../models/quiz.model"; // Ensure to import the Quiz model

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css'
})

export class QuizListComponent implements OnInit {
  QuizList: Quiz[] = []; // Use the specific type for Quizs

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loadQuizs(); // Adjusted method name for clarity
  }

  loadQuizs(): void {
    this.quizService.getAllQuiz().subscribe({
      next: (data: Quiz[]) => {
        this.QuizList = data.sort((a, b) => a.quizId - b.quizId); // Sort by quizId in ascending order
        console.log(this.QuizList); // Log the sorted quizs
      },
      error: (err) => {
        console.error('Error fetching quizs:', err); // Enhanced error message
      }
    });
  }
/*
  deleteQuiz(quizId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette quiz?')) {
      this.quizService.deleteQuiz(quizId).subscribe({
        next: () => {
          // Remove the deleted quiz from the QuizList
          this.QuizList = this.QuizList.filter(q => q.quizId !== quizId);
          console.log(`Quiz with ID ${quizId} deleted successfully.`);
        },
        error: (err) => {
          console.error('Error deleting quiz:', err);
        }
      });
    }
  }*/
}
