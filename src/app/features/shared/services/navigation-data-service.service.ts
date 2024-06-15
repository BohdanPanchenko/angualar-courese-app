import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationDataService {
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable(); // Наблюдаемый объект, на который могут подписываться компоненты
  count = 0;
  changeData(data: any) {
    this.count++;
    // console.log(this.count);
    // console.log(data);
    this.dataSource.next(data); // Изменение данных и уведомление всех подписчиков
  }
}
