import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: false,
})
export class DurationPipe implements PipeTransform {
  transform(value: any): string | boolean {
    if (!Number.isInteger(value) || value < 0) return false;

    const minutesPerHour = 60;
    let hours = Math.floor(value / minutesPerHour); // 0
    const divisionRemainder = minutesPerHour - value;
    let minutes =
      value < 60
        ? minutesPerHour -
          (divisionRemainder === 0 ? value + minutesPerHour : divisionRemainder)
        : value % minutesPerHour;
    minutes = Math.abs(minutes);
    return this.formatTimeDuration(hours, minutes);
  }
  private formatTimeDuration(hours: number, minutes: number): string {
    const formattedHours = hours > 9 ? hours : '0' + hours;
    const formattedMinutes = minutes > 9 ? minutes : '0' + minutes;

    return `${formattedHours}:${formattedMinutes}`;
  }
}
