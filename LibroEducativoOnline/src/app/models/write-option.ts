import { OptionBase } from "./option-base";

/**
 * Modela una opción en la cual el niño debe escribir una respuesta.
 */
export class WriteOption extends OptionBase {
    answer!: string | undefined;
}
