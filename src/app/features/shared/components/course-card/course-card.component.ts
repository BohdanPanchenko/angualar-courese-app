import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Course } from '../../interfaces/course.interface';
import { ButtonComponent } from '../button/button.component';
import { CommonService } from '../../common.service';
import { DurationPipe } from '../../pipes/duration.pipe';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  // constructor(private commonService: CommonService) {}

  @Input() courseCard!: Course;
  @Input() isEditable!: boolean;

  // getCourseDuration(duration: number): string {
  //   return this.commonService.getCourseDuration(duration);
  // }
}
