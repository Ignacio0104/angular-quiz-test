import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SectionComponent, QuestionComponent],
  imports: [BrowserModule, CdkAccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
