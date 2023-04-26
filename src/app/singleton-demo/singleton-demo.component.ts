import { Component } from '@angular/core';

@Component({
  selector: 'app-singleton-demo',
  templateUrl: './singleton-demo.component.html',
  styleUrls: ['./singleton-demo.component.scss'],
})
export class SingletonDemoComponent {
  showRefreshButton = false;
  selectedColor = 'bg-green-400';
  colors = [
    'bg-green-400',
    'bg-sky-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-orange-400',
  ];
}
