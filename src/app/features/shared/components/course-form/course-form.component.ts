import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { DurationPipe } from '../../pipes/duration.pipe';
import { NavigationService } from '../../services/navigation-service.service';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
  host: { class: 'course-form-container' },
})
export class CourseFormComponent {
  isFormSubmitted: boolean = false;
  authorsList: string[] = ['Sam Smith', 'Tony Robbins'];
  courseAuthors: string[] = [];
  myForm = new FormGroup({
    title: new FormControl('', [Validators.minLength(2), Validators.required]),
    description: new FormControl('', [
      Validators.minLength(2),
      Validators.required,
    ]),
    duration: new FormControl(null, [Validators.min(0), Validators.required]),
    authorName: new FormControl<string>('', [
      (name: AbstractControl) => {
        if (!name.value) return null;
        let nameSpacesRemoved = name.value.replace(' ', '');
        const validName = /^[a-zA-Z0-9]+$/.test(nameSpacesRemoved);
        return validName
          ? null
          : { InvalidName: true, message: 'Only latin letters and numbers' };
      },
    ]),
    authors: new FormArray<FormControl>([], [Validators.required]),
  });
  title!: string;

  constructor(private navigationService: NavigationService) {
    this.title = this.getFormTitle();
  }
  getFormTitle(): string {
    return this.navigationService.currentPage === 'createCourse'
      ? 'Create Page'
      : 'Course Edit';
  }
  goBackHome(): void {
    this.navigationService.goToCoursesPage();
  }

  addAuthor(author: string): void {
    if (this.courseAuthors.includes(author)) return;

    let newAuthor = new FormControl(author);
    this.myForm.controls.authors.push(newAuthor);
    this.courseAuthors.push(author);
  }
  removeAuthor(author: string): void {
    const authors = this.myForm.controls.authors.controls;
    const idxToRemove = authors.findIndex((el) => el.value === author);

    const indexToRemove = this.courseAuthors.indexOf(author);

    if (idxToRemove === -1) return;
    this.myForm.controls.authors.controls.splice(idxToRemove, 1);
    this.courseAuthors.splice(idxToRemove, 1);
  }

  createAuthor(): void {
    const authorName = this.myForm.controls.authorName;
    if (this.authorsList.includes(String(authorName.value))) return;

    if (!authorName.errors && authorName.value) {
      this.authorsList.push(authorName.value);
      authorName.setValue('');
    }
  }

  get authors(): FormArray {
    return this.myForm.get('authors') as FormArray;
  }
  get durationField(): FormControl {
    return this.myForm.get('duration') as FormControl;
  }

  disableUpDownArrows(event: KeyboardEvent): void {
    console.log(new DurationPipe().transform(34));
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }
}
