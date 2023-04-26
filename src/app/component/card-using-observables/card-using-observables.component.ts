import { Component, Input } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { ColorSubjectService } from 'src/app/core/color-subject.service';

@Component({
  selector: 'app-card-using-observables',
  templateUrl: './card-using-observables.component.html',
  styleUrls: ['./card-using-observables.component.scss'],
})
export class CardUsingObservablesComponent {
  colors = [
    'bg-green-400',
    'bg-sky-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-orange-400',
  ];

  selectedColor = '';
  showRefreshButton = false;
  subscription: Subscription | undefined;
  @Input() title: string = '';
  constructor(private colorService: ColorSubjectService) {}

  ngOnInit(): void {}

  setColor(color: string) {
    this.colorService.setColor(color);
  }
  subscribe() {
    this.subscription = this.colorService.color$.subscribe((color) => {
      this.selectedColor = color;
      console.log('I am ' + this.title);
    });
  }
  unsubscribe() {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
  }
}
