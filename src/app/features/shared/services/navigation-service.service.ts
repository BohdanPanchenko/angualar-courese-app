import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavigationDataService } from './navigation-data-service.service';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private courseInfo = new BehaviorSubject<any>(null);
  currentData = this.courseInfo.asObservable(); // Наблюдаемый объект, на который могут подписываться компоненты
  count: any;
  constructor(
    private navigationDataService: NavigationDataService,
    private router: Router
  ) {}

  private currentRoute = new BehaviorSubject<string>('login');
  currentPage_ = this.courseInfo.asObservable();
  currentPage = 'courses';

  authRoutes = ['login', 'registration'];
  authRoute = false;

  changeAuthRoute() {
    const authRoute = this.authRoutes[Number(!this.authRoute)];
  }

  pages = [
    'courses',
    'registration',
    'login',
    'courseInfo',
    'createCourse',
    'editCourse',
  ];
  private _targetCourseId!: number;

  set targetCourseId(id: number) {
    this._targetCourseId = id;
  }

  goToLoginPage(): void {
    const targetPage = 'login';
    this.currentPage = targetPage;

    this.router.navigate(['/auth', targetPage]);
  }

  goToRegistrationPage(): void {
    const targetPage = 'registration';
    this.currentPage = targetPage;

    this.router.navigate(['/auth', targetPage]);
  }
  goToCoursesPage(): void {
    const targetPage = 'courses';
    this.currentPage = targetPage;
    this.router.navigate(['/courses']);
  }
  goToCourseInfoPage(): void {
    const stringId = this._targetCourseId.toString();
    this.currentPage = 'courseInfo';
    this.router.navigate(['/courses', stringId]);
  }
  goToEditCoursePage() {
    console.log('editPage');
    const stringId = this._targetCourseId.toString();
    this.currentPage = 'editPage';
    this.router.navigate(['/courses/edit', stringId]);
  }
  goToCreateCoursePage() {
    console.log('createPage');
    // const stringId = this.targetCourseId.toString();
    this.currentPage = 'createPage';
    this.router.navigate(['/courses/add']);
  }
  navigateTo(path: string): void {
    console.log(path);
    // if (path === this.currentPage) return;
    switch (path) {
      case 'login':
        this.goToLoginPage();
        return;
      case 'registration':
        this.goToRegistrationPage();
        return;
      case 'courses':
        this.goToCoursesPage();
        return;
      case 'courseInfo':
        this.goToCourseInfoPage();
        return;
      case 'editCourse':
        this.goToEditCoursePage();
        return;
      case 'createCourse':
        this.goToCreateCoursePage();
    }
  }
  setCourseInfo(data: Course): void {
    this.courseInfo.next(data); // Изменение данных и уведомление всех подписчиков
  }
}
