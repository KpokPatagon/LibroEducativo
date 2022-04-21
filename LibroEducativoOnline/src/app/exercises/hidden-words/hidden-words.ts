import { SafeHtml } from "@angular/platform-browser";

/**
 * Define el modelo para el ejercicio de encontrar la palabra oculta.
 */

export interface IHiddenWordsModel {
    statement: SafeHtml | undefined;
    consignas: IHiddenWordsConsigna[] | undefined;
}

export interface IHiddenWordsConsigna {
    word: string | undefined;
    answers: string[] | undefined;
}

/**
 * Implementa el modelo para el ejercicio de encontrar la palabra oculta.
 */
export class HiddenWordsModel implements IHiddenWordsModel {
    statement: SafeHtml = '';
    consignas: IHiddenWordsConsigna[] = [];

    constructor(data?: IHiddenWordsModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}

export class HiddenWordsConsigna implements IHiddenWordsConsigna {
    word!: string | undefined;
    answers!: string[] | undefined;

    constructor(data?: IHiddenWordsConsigna) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}
