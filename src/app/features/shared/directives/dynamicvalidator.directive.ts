import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { EmailValidatorDirective } from './email.directive';
import { UserNameValidatorDirective } from './name.directive';

@Directive({
  selector: '[appDynamicvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DynamicValidatorDirective),
      multi: true,
    },
  ],
})
export class DynamicValidatorDirective implements Validator {
  @Input('validatorName') validatorName!: string;

  validate(control: AbstractControl) {
    if (this.validatorName === 'email')
      return new EmailValidatorDirective().validate(control);
    else if (this.validatorName === 'username') {
      return new UserNameValidatorDirective().validate(control);
    } else if (this.validatorName === 'password')
      return control.value
        ? null
        : { invalidUserName: true, message: 'Password is required' };

    return null;
  }
}
