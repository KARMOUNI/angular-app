import { Component } from '@angular/core';
import {QuestionService} from "../../../services/question.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css'
})
export class QuestionFormComponent {
  myForm!: FormGroup;

  constructor(
      private fb: FormBuilder,
      private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    // Initialize the form with validation rules
    this.myForm = this.fb.group({
      questionText: ['', Validators.required],
      options: ['', Validators.required],
      correctAnswer: ['', Validators.required],
      category: ['', Validators.required],
      level: ['', Validators.required]
    });
  }

    onSubmit(): void {
        if (this.myForm.valid) {
            // Prepare the question data in the expected format
            const question: any = {
                questionText: this.myForm.value.questionText,
                options: this.myForm.value.options.split('\n'), // Splitting textarea input into an array
                correctAnswer: this.myForm.value.correctAnswer,
                category: this.myForm.value.category,
                level: this.myForm.value.level
            };

            // Call the service to add the question
            this.questionService.addQuestion(question).subscribe(
                response => {
                    console.log('Question added successfully:', response);
                    this.myForm.reset(); // Optionally reset the form after submission
                },
                error => {
                    console.error('Error adding question:', error);
                }
            );
        }
    }

}
