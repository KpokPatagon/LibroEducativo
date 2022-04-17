import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WriteWordModel } from './write-word';
import { writtenResponseMatchAnswer } from './write-word-validation';

@Component({
    selector: 'app-write-word',
    templateUrl: './write-word.component.html',
    styles: []
})
export class WriteWordComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    statement: SafeHtml = '';
    consignas: WriteWordModel[] = [];

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.statement = this.sanitizer.bypassSecurityTrustHtml(`
            <p>Decimos los nombres de estas cosas.</p>
            <p>Escribo cada nombre donde va.</p>
        `);

        this.consignas = [
            new WriteWordModel({
                pictureFile: '/assets/Puma.png',
                answer: 'Puma'
            }),
            new WriteWordModel({
                pictureFile: '/assets/PastaDental.png',
                answer: 'Pasta dental'
            }),
            new WriteWordModel({
                pictureFile: '/assets/Pie.png',
                answer: 'Pie'
            }),
            new WriteWordModel({
                pictureFile: '/assets/Mapa.png',
                answer: 'Mapa'
            }),
        ];

        for (let i = 0, l = this.consignas.length; i < l; i++) {
            this.form.addControl(`fc${i}`, new FormControl('', [writtenResponseMatchAnswer(this.consignas[i])]));
        }
    }
}
