import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChooseComponent } from './choose/choose.component';
import { ChooseWordComponent } from './choose-word/choose-word.component';
import { WriteWordComponent } from './write-word/write-word.component';
import { MatchPicComponent } from './match-pic/match-pic.component';
import { HiddenWordsComponent } from './hidden-words/hidden-words.component';
import { MatchGroupComponent } from './match-group/match-group.component';
import { MatchWordsComponent } from './match-words/match-words.component';
import { SentenceCompletionComponent } from './sentence-completion/sentence-completion.component';
import { WriteOptionComponent } from './write-option/write-option.component';
import { ChooseSyllableComponent } from './choose-syllable/choose-syllable.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseComponent,
    ChooseWordComponent,
    WriteWordComponent,
    MatchPicComponent,
    HiddenWordsComponent,
    MatchGroupComponent,
    MatchWordsComponent,
    SentenceCompletionComponent,
    WriteOptionComponent,
    ChooseSyllableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
