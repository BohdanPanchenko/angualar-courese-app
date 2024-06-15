import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserAuthForm } from '../../interfaces/user-auth-form.interface';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { EmailValidatorDirective } from '../../directives/email.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { DynamicValidatorDirective } from '../../directives/dynamicvalidator.directive';

@Component({
  selector: 'app-user-auth-form',
  templateUrl: './user-auth-form.component.html',
  styleUrl: './user-auth-form.component.scss',
})
export class UserAuthFormComponent {
  @Input() formTitle!: string;
  @Input() fields!: UserAuthForm[];

  @ViewChild('form') myForm!: NgForm;

  verifyField(fieldName: string): boolean {
    const validatorErrorName: string | null = this.getBooleanPropertyName(
      this.myForm?.controls[fieldName]?.errors
    );

    if (validatorErrorName === null) return false;
    const isValidField: boolean =
      this.myForm?.controls[fieldName]?.errors?.[validatorErrorName];

    return isValidField;
  }

  getBooleanPropertyName(obj: { [key: string]: any } | null): string | null {
    for (let prop in obj) {
      if (typeof obj[prop] === 'boolean') {
        return prop;
      }
    }
    return null;
  }

  getErrorMessage(fieldName: string): string | null {
    const validatorErrorName: string | null = null;
    const error = this.myForm?.controls[fieldName]?.errors;

    const errorName = error?.['message'];
    return errorName;
  }
}
