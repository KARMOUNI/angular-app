import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../../../services/question.service";
import { Question } from "../models/question.model"; // Ensure to import the Question model

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'] // Fixed the property name from 'styleUrl' to 'styleUrls'
})
export class QuestionListComponent implements OnInit {
  QuestionsList: Question[] = []; // Use the specific type for Questions

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.loadQuestions(); // Adjusted method name for clarity
  }

  loadQuestions(): void {
    this.questionService.getAllQuestion().subscribe({
      next: (data: Question[]) => {
        this.QuestionsList = data.sort((a, b) => a.questionId - b.questionId); // Sort by questionId in ascending order
        console.log(this.QuestionsList); // Log the sorted questions
      },
      error: (err) => {
        console.error('Error fetching questions:', err); // Enhanced error message
      }
    });
  }

  deleteQuestion(questionId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette question?')) {
      this.questionService.deleteQuestion(questionId).subscribe({
        next: () => {
          // Remove the deleted question from the QuestionsList
          this.QuestionsList = this.QuestionsList.filter(q => q.questionId !== questionId);
          console.log(`Question with ID ${questionId} deleted successfully.`);
        },
        error: (err) => {
          console.error('Error deleting question:', err);
        }
      });
    }
  }
}
