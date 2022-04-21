import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChooseSentenceConsigna, ChooseSentenceModel, ChooseSentenceSentence } from './exercises/choose-sentence/choose-sentence';
import { HiddenWordsModel, HiddenWordsConsigna } from './exercises/hidden-words/hidden-words';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent implements OnInit {
    title = 'LibroEducativoOnline';

    hiddenWords0: HiddenWordsModel = new HiddenWordsModel();
    hiddenWords1: HiddenWordsModel = new HiddenWordsModel();
    chooseSentence0: ChooseSentenceModel = new ChooseSentenceModel();

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.hiddenWords0 = new HiddenWordsModel({
            statement: this.sanitizer.bypassSecurityTrustHtml(`
                <p>Leo. Busco palabras escondidas.</p>
                <p>Escribo las que encontré.</p>
            `),
            consignas: [
                new HiddenWordsConsigna({ word: 'PEPINO', answers: ['PINO'] }),
                new HiddenWordsConsigna({ word: 'MEDIODIA', answers: ['MEDIO', 'DIA'] }),
                new HiddenWordsConsigna({ word: 'SOLDADO', answers: ['SOL', 'DADO'] }),
                new HiddenWordsConsigna({ word: 'ANIMAL', answers: ['MAL'] }),
            ]
        });
        this.hiddenWords1 = new HiddenWordsModel({
            statement: this.sanitizer.bypassSecurityTrustHtml(`
                <p>¿Cómo indicamos que algo es chiquito?</p>
                <p>Leo. Escribo.</p>
            `),
            consignas: [
                new HiddenWordsConsigna({ word: 'NENE', answers: ['NENITO'] }),
                new HiddenWordsConsigna({ word: 'ANIMAL', answers: ['ANIMALITO'] }),
                new HiddenWordsConsigna({ word: 'ESPINA', answers: ['ESPINITA'] }),
                new HiddenWordsConsigna({ word: 'NENA', answers: ['NENITA'] }),
            ]
        });

        this.chooseSentence0 = new ChooseSentenceModel({
            statement: this.sanitizer.bypassSecurityTrustHtml(`
                <p>Leo.</p>
                <p>Marco la oración que va con el dibujo.</p>
            `),
            consigna: new ChooseSentenceConsigna({
                pictureFile: '/assets/ElNeneEstaSaltando.png',
                answer: 'b',
                sentences: [
                    new ChooseSentenceSentence({
                        sentence: 'El nene está sentado.',
                        controlValue: 'a'
                    }),
                    new ChooseSentenceSentence({
                        sentence: 'El nene está saltando.',
                        controlValue: 'b'
                    }),
                ]
            })
        });
    }
}
