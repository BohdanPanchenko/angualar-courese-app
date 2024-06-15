import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavigationService } from '../../services/navigation-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() updatePage!: Function;
  userName: string = 'Harry Potter';
  isLoggedIn = false;
  constructor(private navigationService: NavigationService) {}

  goHomePage() {
    console.log('go to courses');
    // if (this.isLoggedIn) this.navigationService.navigateTo('courses');
    this.navigationService.navigateTo('courses');
  }
}
