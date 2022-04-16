/**
 * Define el modelo de datos para el ejercicio de elección de imagen.
 */
export interface IChoosePictureModel {
    pictureFile: string | undefined;
    isRightAnswer: boolean | undefined;
}

/**
 * Implementa el modelo de datos para el ejercicio de elección de imagen.
 */
export class ChoosePictureModel implements IChoosePictureModel {
    pictureFile!: string | undefined;
    isRightAnswer!: boolean | undefined;

    constructor(data?: IChoosePictureModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}
