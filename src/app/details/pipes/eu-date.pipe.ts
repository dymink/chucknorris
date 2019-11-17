import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euDate'
})
export class EuDatePipe implements PipeTransform {
  transform(value: any): any {
    const day = value.substring(8, 10);
    const month = value.substring(5, 7);
    const year = value.substring(0, 4);
    const time = value.substring(11, 19);
    return `${day}.${month}.${year} ${time} `;
  }
}