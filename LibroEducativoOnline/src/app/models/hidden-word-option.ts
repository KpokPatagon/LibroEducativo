import { OptionBase } from "./option-base";

/**
 * Modela una opción en la cual el niño debe escribir una o más palabras escondidas.
 */
export class HiddenWordOption extends OptionBase {
    words!: string[] | undefined;
}
