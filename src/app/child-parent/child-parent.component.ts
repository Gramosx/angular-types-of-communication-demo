import { Component } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.scss'],
})
export class ChildParentComponent {
  selectedColor = 'bg-green-400';
  colors = [
    'bg-green-400',
    'bg-sky-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-orange-400',
  ];
  setColorFromChild(color: string) {
    this.selectedColor = color;
  }
}
