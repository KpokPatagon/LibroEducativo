import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChoosePictureComponent } from './exercises/choose-picture/choose-picture.component';
import { ChooseWordComponent } from './exercises/choose-word/choose-word.component';
import { MatchPictureComponent } from './exercises/match-picture/match-picture.component';
import { WriteWordComponent } from './exercises/write-word/write-word.component';


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
    MatchPictureComponent,
    WriteWordComponent,

    HiddenWordsComponent,
    MatchGroupComponent,
    MatchWordsComponent,
    SentenceCompletionComponent,
    WriteOptionComponent,
    ChooseSyllableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
