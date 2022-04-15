import { OptionBase } from "./option-base";

/**
 * Modela una opción que el niño puede seleccionar para dar una respuesta.
 */
export class ChooseOption extends OptionBase {
    showText: boolean = false;
    isRightAnswer: boolean = false;
}
