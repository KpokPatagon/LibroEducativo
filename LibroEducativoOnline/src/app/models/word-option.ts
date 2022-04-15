import { OptionBase } from "./option-base";

/**
 * Modela una opción en la que el niño debe seleccionar una palabra.
 */
export class WordOption extends OptionBase {
    word!: string | undefined;
}
