import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorSubjectService {
  private colorSubject = new BehaviorSubject<string>('bg-black');

  get color$() {
    return this.colorSubject.asObservable();
  }
  constructor() {}

  setColor(color: string) {
    this.colorSubject.next(color);
  }
}
