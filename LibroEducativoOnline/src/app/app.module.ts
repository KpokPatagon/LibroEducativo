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
import { ChooseSentenceComponent } from './exercises/choose-sentence/choose-sentence.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoosePictureComponent,
    ChooseWordComponent,
    MatchPictureComponent,
    WriteWordComponent,
    HiddenWordsComponent,
    ChooseSentenceComponent,
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
