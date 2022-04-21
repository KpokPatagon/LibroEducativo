import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HiddenWordsModel } from './hidden-words';
import { hiddenWordsMatchAnswer } from './hidden-words-validation';

@Component({
    selector: 'app-hidden-words',
    templateUrl: './hidden-words.component.html',
    styles: []
})
export class HiddenWordsComponent implements OnInit {
    @Input() model: HiddenWordsModel = new HiddenWordsModel();

    form: FormGroup = new FormGroup({});
    ngOnInit(): void {
        for (let i = 0, l = this.model.consignas.length; i < l; i++) {
            this.form.addControl(`fc${i}`, new FormControl('', [hiddenWordsMatchAnswer(this.model.consignas[i])]));
        }
    }
}
