import { Question } from './questions.model';

export interface QuestionChanged {
  question: Question;
  isCorrect: boolean;
  sectionIndex: number;
  response: string;
}
