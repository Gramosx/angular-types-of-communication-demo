import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent {
  @Input() color: string | undefined;
  @Output() newColorEvent = new EventEmitter<string>();
  colors = [
    'bg-green-400',
    'bg-sky-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-orange-400',
  ];

  selectedColor(color: string) {
    this.newColorEvent.emit(color);
  }
}
