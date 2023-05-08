import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gbToMb',
})
export class GbToMbPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    return value * 1024;
  }
}
