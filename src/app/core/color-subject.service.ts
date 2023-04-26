import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorSubjectService {
  private colorSubject = new Subject<string>();

  get color$() {
    return this.colorSubject.asObservable();
  }
  constructor() {}

  setColor(color: string) {
    this.colorSubject.next(color);
  }
}
