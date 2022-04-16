import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoosePictureComponent } from './exercises/choose-picture/choose-picture.component';
import { ChooseWordComponent } from './exercises/choose-word/choose-word.component';
import { WriteWordComponent } from './exercises/write-word/write-word.component';
import { MatchPicComponent } from './exercises/match-pic/match-pic.component';
import { HiddenWordsComponent } from './exercises/hidden-words/hidden-words.component';
import { MatchGroupComponent } from './exercises/match-group/match-group.component';
import { MatchWordsComponent } from './exercises/match-words/match-words.component';
import { SentenceCompletionComponent } from './exercises/sentence-completion/sentence-completion.component';
import { WriteOptionComponent } from './exercises/write-option/write-option.component';
import { ChooseSyllableComponent } from './exercises/choose-syllable/choose-syllable.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoosePictureComponent,
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
