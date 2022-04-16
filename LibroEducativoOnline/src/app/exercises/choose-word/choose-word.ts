/**
 * Define el modelo de datos para el ejercicio de elección de palabra.
 */
export interface IChooseWordModel {
    text: string | undefined;
    word: string | undefined;
    pictureFile: string | undefined;
}

/**
 * Implementa el modelo de datos para el ejercicio de elección de palabra.
 */
export class ChooseWordModel implements IChooseWordModel {
    text!: string | undefined;
    word!: string | undefined;
    pictureFile!: string | undefined;

    constructor(data?: IChooseWordModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }

    init(_data?: any): void {
        if (_data) {
            this.text = _data['text'];
            this.word = _data['word'];
            this.pictureFile = _data['pictureFile'];
        }
    }

    static fromJS(data: any): ChooseWordModel {
        data = typeof data === 'object' ? data : {};
        let result = new ChooseWordModel();
        result.init(data);
        return result;
    }

    get words() : string[] {
        if (this.text) {
            const words = this.text.split(' ');
            return words;
        }
        return [];
    }
}
