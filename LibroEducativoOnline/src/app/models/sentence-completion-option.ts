import { OptionBase } from "./option-base";

/**
 * Modela una opción en la cual el niño debe completar una oración.
 */
export class SentenceCompletionOption extends OptionBase {
    sentence!: string | undefined;
    hints!: string[] | undefined;
    answer!: string | undefined;
}
