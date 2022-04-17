/**
 * Define el modelo para el ejercicio: escribir el nombre del objeto.
 */
export interface IWriteWordModel {
    pictureFile: string | undefined;
    answer: string | undefined;
}

/**
 * Implementa el modelo para el ejercicio: escribir el nombre del objeto.
 */
export class WriteWordModel implements IWriteWordModel {
    pictureFile!: string | undefined;
    answer!: string | undefined;

    constructor(data?: IWriteWordModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}
