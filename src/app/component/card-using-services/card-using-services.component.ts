import { Component } from '@angular/core';
import { ColorService } from 'src/app/core/color.service';

@Component({
  selector: 'app-card-using-services',
  templateUrl: './card-using-services.component.html',
  styleUrls: ['./card-using-services.component.scss'],
})
export class CardUsingServicesComponent {
  colors = [
    'bg-green-400',
    'bg-sky-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-orange-400',
  ];

  selectedColor = '';

  constructor(private colorService: ColorService) {
    this.selectedColor = this.colorService.universalSelectedColor;
  }

  refreshColor() {
    this.selectedColor = this.colorService.universalSelectedColor;
  }

  setColor(color: string) {
    this.colorService.universalSelectedColor = color;
    this.selectedColor = color;
    // this.refreshColor();
  }
}
