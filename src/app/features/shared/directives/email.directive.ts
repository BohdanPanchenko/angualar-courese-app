import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',

  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  @Input('parameter') parameter!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const isEmptyField = !control.value;

    const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const isEmailFormatValid = emailRegexp.test(control.value);

    const valid = isEmailFormatValid && !isEmptyField;

    const errorMessage = isEmptyField
      ? 'Email is required'
      : !isEmailFormatValid
      ? 'Invalid email'
      : '';

    return valid ? null : { invalidEmail: true, message: errorMessage };
  }
}
