import { OptionBase } from "./option-base";

/**
 * Modela una opción en la cual el niño debe juntar una palabra con una imagen.
 */
export class MatchPicOption extends OptionBase {
    pictureFileA!: string | undefined;
    pictureFileB!: string | undefined;
    answer!: string | undefined;
}
