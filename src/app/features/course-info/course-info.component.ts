import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { Course } from '../shared/interfaces/course.interface';
import { CommonService } from '../shared/common.service';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { CustomDatePipe } from '../shared/pipes/custom-date.pipe';
import { NavigationDataService } from '../shared/services/navigation-data-service.service';
import { NavigationService } from '../shared/services/navigation-service.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.scss',
})
export class CourseInfoComponent {
  router: any;
  constructor(
    private commonService: CommonService,
    private navigationDataService: NavigationDataService,
    private navigationService: NavigationService
  ) {}
  // @Input() courseInfo!: Course;
  courseInfo!: Course;
  subscription!: Subscription;
  @Input() updatePage!: Function;

  returnBack() {
    this.navigationService.navigateTo('courses');
  }

  ngOnInit(): void {
    this.subscription = this.navigationService.currentData
      .pipe(map((course) => course))
      .subscribe((course) => {
        this.courseInfo = course;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
