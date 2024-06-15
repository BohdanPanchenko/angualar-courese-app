import { Directive, ElementRef, TemplateRef, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appUserNameValidator]',

  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UserNameValidatorDirective),
      multi: true,
    },
  ],
})
export class UserNameValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control.value);
    const isEmptyField = !control.value;
    const minLength = 6;
    const validLengthNAme = control.value?.length >= minLength;
    const valid = validLengthNAme && !isEmptyField;

    const errorMessage = isEmptyField
      ? 'Name is required'
      : !validLengthNAme
      ? 'At least 6 characters required'
      : '';

    return valid ? null : { invalidName: true, message: errorMessage };
    // return isValid ? null : { invalidEmail: true };
  }
}
