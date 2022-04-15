import { OptionGroup } from "./option-group";

/**
 * Modela la configuración de un ejercicio.
 */
export class Exercise {
    statement!: string | undefined;
    icon!: string | undefined;
    audioFile!: string | undefined;
    pictureFile!: string | undefined;
    validAnswerMessage!: string | undefined;
    invalidAnswerMessage!: string | undefined;
    optionGroups!: OptionGroup[];
}
