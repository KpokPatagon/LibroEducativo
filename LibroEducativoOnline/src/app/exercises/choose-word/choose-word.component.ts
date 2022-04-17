import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChooseWordModel } from './choose-word';

@Component({
    selector: 'app-choose-word',
    templateUrl: './choose-word.component.html',
    styles: [
        `span.selectable-word { cursor: pointer; } span.selectable-word:hover { color: #00F; }`
    ]
})
export class ChooseWordComponent implements OnInit {

    statement: SafeHtml = '';
    consignas: ChooseWordModel[] = [];
    selections: any = {};

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.statement = this.sanitizer.bypassSecurityTrustHtml(`
            <p>Escuchamos.</p>
            <p>Miro. Busco la palabra <strong>MAMÁ</strong> y la toco.</p>
        `);

        this.consignas = [
            new ChooseWordModel({
                text: 'LA MAMÁ JUEGA CON EL BEBE.',
                word: 'MAMÁ',
                pictureFile: '/assets/LaMamaJuegaConElBebe.png'
            }),
            new ChooseWordModel({
                text: 'LA NENA Y SU MAMÁ PASEAN.',
                word: 'MAMÁ',
                pictureFile: '/assets/LaNenaYSuMamaPasean.png'
            }),
            new ChooseWordModel({
                text: 'EL NENE CONVERSA CON SU MAMÁ',
                word: 'MAMÁ',
                pictureFile: '/assets/ElNeneConversaConSuMama.png'
            }),
        ];
    }

    highlight(consignaIndex: number, wordIndex: number): string {
        if (this.selections[`${consignaIndex}:${wordIndex}`]) {
            return this.selections[`${consignaIndex}:${wordIndex}`];
        }
        return '';
    }

    wordSelected(consignaIndex: number, wordIndex: number): void {
        const consigna = this.consignas[consignaIndex];
        const word = consigna.words[wordIndex];
        const valid = word.toLowerCase() === consigna.word?.toLowerCase();
        this.selections[`${consignaIndex}:${wordIndex}`] = valid ? 'text-success' : 'text-danger';
    }
}
