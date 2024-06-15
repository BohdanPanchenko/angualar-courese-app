import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  getCourseDuration(hours: number): string {
    const minutes: number = hours / 60;
    const formattedMinutes = minutes.toFixed(2).toString().replace('.', ':');
    return formattedMinutes;
  }

  constructor() {}
}
