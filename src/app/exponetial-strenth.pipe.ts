import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponetialStrenth'
})
export class ExponetialStrenthPipe implements PipeTransform {

  transform(value: number, expo: number): number {
    return value * (isNaN(expo) ? 1 : expo);
  }

}

//  2 | exponetialStrenth : 2
// 2 * 1
