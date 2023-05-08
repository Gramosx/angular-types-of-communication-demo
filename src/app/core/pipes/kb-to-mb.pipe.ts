import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kbToMb',
})
export class KbToMbPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    return Math.round((value / 1024) * 100) / 100;
  }
}
