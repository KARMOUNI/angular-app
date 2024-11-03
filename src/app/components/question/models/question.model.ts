// question.model.ts
export interface Question {
  questionId: number; // or whatever type your IDs are
  questionText: string;
  options: string[];
  category: string;
  level: string;
  correctAnswer?: string; // Optional if needed
}
