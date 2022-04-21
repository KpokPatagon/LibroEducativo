import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { IChooseSentenceConsigna } from "./choose-sentence";

export function chooseSentenceValidator(consigna: IChooseSentenceConsigna, controlValue: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = consigna.answer === controlValue;
        return valid ? null : { wrongAnser: { value: controlValue } };
    }
}
