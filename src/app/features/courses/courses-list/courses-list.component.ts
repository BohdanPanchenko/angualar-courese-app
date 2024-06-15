import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  @Input() courses!: Array<Course>;
  @Input() isEditable!: boolean;
  // add NgInit method

  @Output() clickOnShow = new EventEmitter<number>();
  @Output() clickOnEdit = new EventEmitter<number>();
  @Output() clickOnDelete = new EventEmitter<number>();

  showCourse(idx: number): void {
    this.clickOnShow.emit(idx);
  }

  editCourse(idx: number): void {
    this.clickOnEdit.emit(idx);
  }

  deleteCourse(idx: number): void {
    this.clickOnDelete.emit(idx);
  }
}

// Course list​
// Requirements

// Should have @Input for courses. (Use the names for the input courses).
// Should have @Input for determining if courses are editable. (Use the names for the input editable).
// Should use Course Card components.
// Should have @Output for "show course" action. So course list component should delegate this action to upper component. (Use the names for the output showCourse).
// Should have @Output for "edit course" action. So course list component should delegate this action to upper component. (Use the names for the output editCourse).
// Should have @Output for "delete course" action. So course list component should delegate this action to upper component. (Use the names for the output deleteCourse).
