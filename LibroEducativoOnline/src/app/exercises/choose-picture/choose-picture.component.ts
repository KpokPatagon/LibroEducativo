import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChoosePictureModel } from './choose-picture';

@Component({
    selector: 'app-choose',
    templateUrl: './choose-picture.component.html',
    styles: [
        `span.selectable-picture { cursor: pointer; }`
    ]
})
export class ChoosePictureComponent implements OnInit {

    statement: SafeHtml = '';
    consignas: ChoosePictureModel[] = [];
    selections: any = {};

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.statement = this.sanitizer.bypassSecurityTrustHtml(`
            <p>Decimos los nombres de las cosas.</p>
            <p>Toco las que llevan <strong>Ma</strong>.
        `);

        this.consignas = [
            new ChoosePictureModel({
                pictureFile: '/assets/Luna.png',
                isRightAnswer: false,
            }),
            new ChoosePictureModel({
                pictureFile: '/assets/Aji.png',
                isRightAnswer: false,
            }),
            new ChoosePictureModel({
                pictureFile: '/assets/Avion.png',
                isRightAnswer: false,
            }),
            new ChoosePictureModel({
                pictureFile: '/assets/Mariposa.png',
                isRightAnswer: true,
            }),
            new ChoosePictureModel({
                pictureFile: '/assets/Cama.png',
                isRightAnswer: true,
            }),
            new ChoosePictureModel({
                pictureFile: '/assets/MaquinaDeEscribir.png',
                isRightAnswer: true,
            }),
        ];
    }

    isInvalid(index: number): boolean {
        if (this.selections[`opt${index}`] !== undefined && !this.selections[`opt${index}`]) {
            return true;
        }
        return false;
    }

    isValid(index: number): boolean {
        if (this.selections[`opt${index}`] !== undefined && this.selections[`opt${index}`]) {
            return true;
        }
        return false;
    }

    pictureSelected(index: number): void {
        const selection = this.consignas[index];
        this.selections[`opt${index}`] = selection.isRightAnswer;
    }
}
