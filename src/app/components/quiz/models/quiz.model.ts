// question.model.ts
export interface Quiz {
  quizId: number; // or whatever type your IDs are
  quizName: string;
  category: string;
  noOfQuestions: number;
}