import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Section } from './models/section.model';
import { Question } from './models/questions.model';
import { QUESTIONS, SECTIONS } from 'db-data';
import { QuestionChanged } from './models/questionChanged.model';
import { Answer } from './models/answers.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  sections: Section[] = [];
  questions: Question[] = [];
  expandedIndex: number = 0;
  answers: Answer[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sections = SECTIONS.result.sections;
    this.questions = QUESTIONS.result.questions;
  }

  toggleExpanded(index: number) {
    if (index == this.expandedIndex) {
      this.expandedIndex = -1;
    } else {
      this.expandedIndex = index;
    }
  }

  onQuestionUpdated(selectedOption: QuestionChanged) {
    let index = this.answers.findIndex(
      (q) => q.id === selectedOption.question.id
    );
    if (index >= 0) {
      this.answers[index].response = selectedOption.response;
    } else {
      this.answers?.push({
        id: selectedOption.question.id,
        response: selectedOption.response,
        section: selectedOption.sectionIndex,
      });

      const sectionsCopy = [...this.sections];
      sectionsCopy[selectedOption.sectionIndex].answeredQuestions = this.answers
        .filter((c) => c.section == selectedOption.sectionIndex)
        .length.toString();

      this.sections = sectionsCopy;
    }
  }
}
