import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoosePictureComponent } from './exercises/choose-picture/choose-picture.component';
import { ChooseWordComponent } from './exercises/choose-word/choose-word.component';
import { WriteWordComponent } from './exercises/write-word/write-word.component';
import { MatchPictureComponent } from './exercises/match-picture/match-picture.component';
import { HiddenWordsComponent } from './exercises/hidden-words/hidden-words.component';
import { MatchGroupComponent } from './exercises/match-group/match-group.component';
import { MatchWordsComponent } from './exercises/match-words/match-words.component';
import { SentenceCompletionComponent } from './exercises/sentence-completion/sentence-completion.component';
import { WriteOptionComponent } from './exercises/write-option/write-option.component';
import { ChooseSyllableComponent } from './exercises/choose-syllable/choose-syllable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChoosePictureComponent,
    ChooseWordComponent,
    WriteWordComponent,
    MatchPictureComponent,
    HiddenWordsComponent,
    MatchGroupComponent,
    MatchWordsComponent,
    SentenceCompletionComponent,
    WriteOptionComponent,
    ChooseSyllableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
