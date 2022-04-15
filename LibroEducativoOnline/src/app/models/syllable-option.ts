import { OptionBase } from "./option-base";

/**
 * Modela una opción en la cual el niño debe seleccionar sílabas.
 */
export class SyllableOption extends OptionBase {
    syllables!: string[] | undefined;
    methods!: string | undefined;
    answer!: string | undefined;
}
