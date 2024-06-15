import { Component, Input } from '@angular/core';
import { courses } from '../shared/mocks/mocks';
import { Course } from '../shared/interfaces/course.interface';
import { NavigationDataService } from '../shared/services/navigation-data-service.service';
import { Route, Router } from '@angular/router';
import { NavigationService } from '../shared/services/navigation-service.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Array<Course> = courses;
  isEmpty: boolean = courses.length <= 0;

  @Input() updatePage!: Function;

  constructor(
    private navigationDataService: NavigationDataService,
    private navigationService: NavigationService,
    private router: Router
  ) {}

  // navigateToAuth() {
  //   const authType = 'login';
  //   this.navigationDataService.changeData(authType);
  //   this.router.navigate(['/auth', authType]);
  // }
  goToCreateCourse() {
    this.navigationService.navigateTo('createCourse');
  }
  showCourse(idx: number): void {
    console.log('show course with index ', idx);
    const pageToGo = 'courseInfo';

    const courseToShow: Course = this.courses[idx];
    const idToShow = courseToShow.id;

    this.navigationService.setCourseInfo(courseToShow);

    this.navigationService.targetCourseId = idToShow;
    this.navigationService.navigateTo(pageToGo);

    // this.router.navigate(['/courses', idToShow]);
  }

  editCourse(idx: number): void {
    const pageToGo = 'editCourse';
    console.log('Edit course with index ', idx);
    const courseToEdit: Course = this.courses[idx];
    const idToEdit = courseToEdit.id;

    this.navigationService.setCourseInfo(courseToEdit);
    this.navigationService.targetCourseId = idToEdit;

    this.navigationService.navigateTo(pageToGo);
  }

  deleteCourse(idx: number): void {
    console.log('delete course with index ', idx);
    this.courses.splice(idx, 1);

    if (this.courses.length <= 0) this.isEmpty = true;
  }
}
