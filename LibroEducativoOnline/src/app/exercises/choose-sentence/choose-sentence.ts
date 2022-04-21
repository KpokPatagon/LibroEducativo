import { SafeHtml } from "@angular/platform-browser";

export interface IChooseSentenceSentence {
    sentence: string;
    controlValue: string;
}

export interface IChooseSentenceConsigna {
    pictureFile: string;
    answer: string;
    sentences: IChooseSentenceSentence[];
}

export interface IChooseSentenceModel {
    statement: SafeHtml;
    consigna: IChooseSentenceConsigna;
}

export class ChooseSentenceSentence implements IChooseSentenceSentence {
    sentence!: string;
    controlValue!: string;

    constructor(data?: IChooseSentenceSentence) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}

export class ChooseSentenceConsigna implements IChooseSentenceConsigna {
    pictureFile!: string;
    answer!: string;
    sentences!: IChooseSentenceSentence[];

    constructor(data?: IChooseSentenceConsigna) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}

export class ChooseSentenceModel implements IChooseSentenceModel {
    statement!: SafeHtml;
    consigna!: IChooseSentenceConsigna;

    constructor(data?: IChooseSentenceModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}
