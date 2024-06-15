import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationDataService } from '../shared/services/navigation-data-service.service';
import { NavigationService } from '../shared/services/navigation-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',

  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  // userIsLoggedIn: boolean = false;
  // @Input() goTo!: Function;
  // @Input() authType!: string;

  courseId!: string;
  authType!: string;

  authTypes: string[] = ['login', 'registration'];

  subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.authType = this.navigationService.currentPage;
  }
  navigateTo(path: string) {
    console.log(path);
    const authType = this.authTypes.find((page) => page !== path);
    authType ? this.navigationService.navigateTo(path) : undefined;
  }
}
