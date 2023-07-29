import { DependentQuestion, Question } from './questions.model';

export interface QuestionChanged {
  question: Question | DependentQuestion;
  isCorrect: boolean;
  sectionIndex: number;
  response: string;
}
