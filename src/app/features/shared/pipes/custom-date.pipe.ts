import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(date: Date): string {
    const monthShift = 1;

    const day = date.getDate();
    const month = date.getMonth() + monthShift;
    const year = date.getFullYear();
    return this.formatDate(day, month, year);
  }

  private formatDate(day: number, month: number, year: number): string {
    const formattedDay = day > 9 ? day : '0' + day;
    const formattedMonth = month > 9 ? month : '0' + month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  }
}
