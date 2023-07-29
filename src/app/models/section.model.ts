export interface Section {
  result: Result;
}

export interface Result {
  sections: Section[];
}

export interface Section {
  sectionOccurrenceId: string;
  status: string;
  issueStatus: IssueStatus;
  name: string;
  description: any;
  numberLevel: string;
  totalQuestions: string;
  answeredQuestions: string;
}

export interface IssueStatus {
  hardStopCount: number;
  issueCount: number;
  remidiatedCount: number;
  skippedCount: number;
}
