import { SafeHtml } from "@angular/platform-browser";
import { OptionGroup } from "./option-group";

/**
 * Modela la configuración de un ejercicio.
 */
export class Exercise {
    statement!: SafeHtml | undefined;
    icon!: SafeHtml | undefined;
    audioFile!: string | undefined;
    pictureFile!: string | undefined;
    validAnswerMessage!: string | undefined;
    invalidAnswerMessage!: string | undefined;
    optionGroups!: OptionGroup[];
}
