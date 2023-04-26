import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  public universalSelectedColor = 'bg-orange-400';

  constructor() {}
}
