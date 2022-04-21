import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { WriteWordModel } from "./write-word";

/** Valida que el control tenga el valor requerido */
export function writtenResponseMatchAnswer(consigna: WriteWordModel): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = consigna.answer?.toLowerCase() === control.value?.toLowerCase();
        return valid ? null : { wrongAnswer: { value: control.value } };
    };
}
