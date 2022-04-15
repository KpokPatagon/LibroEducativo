import { OptionBase } from "./option-base";

/**
 * Modela una opción en la que el niño debe juntar dos palabras.
 */
export class MatchOption extends OptionBase {
    answer!: string | undefined;
}
