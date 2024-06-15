import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',

  // imports: [FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() textValue!: string;
  @Input() iconName!: 'edit' | 'remove';
  @Input() type: string = 'button';
  @Input() isDisabled: boolean | null = false;

  faTrashCan: IconDefinition = faTrashCan;
  faPencil: IconDefinition = faPencil;

  getButtonClassName(): string {
    return this.textValue ? 'button_text-content' : 'button_icon-content';
  }
}
