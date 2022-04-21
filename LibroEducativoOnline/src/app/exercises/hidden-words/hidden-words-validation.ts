import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { HiddenWordsConsigna } from "./hidden-words";

/** Valida que el control tenga el valor requerido */
export function hiddenWordsMatchAnswer(consigna: HiddenWordsConsigna): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = !!consigna.answers?.find(x => x.toLowerCase() === control.value.toLowerCase());
        return valid ? null : { wrongAnswer: { value: control.valid } };
    }
}
