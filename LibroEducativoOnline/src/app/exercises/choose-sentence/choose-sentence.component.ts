import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChooseSentenceModel } from './choose-sentence';
import { chooseSentenceValidator } from './choose-sentence-validation';

@Component({
    selector: 'app-choose-sentence',
    templateUrl: './choose-sentence.component.html',
    styles: []
})
export class ChooseSentenceComponent implements OnInit {
    @Input() model: ChooseSentenceModel = new ChooseSentenceModel();

    form: FormGroup = new FormGroup({});
    constructor() { }

    ngOnInit(): void {
        for (let i = 0, l = this.model.consigna.sentences.length; i < l; i++) {
            this.form.addControl(`fc${i}`, new FormControl('', [
                chooseSentenceValidator(this.model.consigna, this.model.consigna.sentences[i].controlValue)
            ]));
        }
    }
}
