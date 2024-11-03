import { Component } from '@angular/core';
import {QuestionService} from "../../../services/question.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrl: './question-update.component.css'
})
export class QuestionUpdateComponent {
  myForm!: FormGroup;
  questionId!: number;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
      private questionService: QuestionService
  ) {}

  ngOnInit(): void {

      // Get the question ID from the route
      this.questionId = Number(this.route.snapshot.paramMap.get('id'));

      // Initialize the form
      this.myForm = this.fb.group({
          questionText: ['', Validators.required],
          options: ['', Validators.required],
          correctAnswer: ['', Validators.required],
          category: ['', Validators.required],
          level: ['', Validators.required]
      });

      // Load the question data into the form
      this.questionService.getQuestionById(this.questionId).subscribe(question => {
          this.myForm.patchValue({
              questionText: question.questionText,
              options: question.options.join('\n'),  // Convert array to text
              correctAnswer: question.correctAnswer,
              category: question.category,
              level: question.level
          });
      });
  }

    onSubmit(): void {
        if (this.myForm.valid) {
            const updatedQuestion: any = {
                id: this.questionId,
                questionText: this.myForm.value.questionText,
                options: this.myForm.value.options.split('\n'),  // Convert text to array
                correctAnswer: this.myForm.value.correctAnswer,
                category: this.myForm.value.category,
                level: this.myForm.value.level
            };

            this.questionService.updateQuestion(this.questionId, updatedQuestion).subscribe(
                response => {
                    console.log('Question updated successfully:', response);
                    this.router.navigate(['app/list/question']); // Navigate back to questions list or show success message
                },
                error => {
                    console.error('Error updating question:', error);
                }
            );
        }
    }

}
