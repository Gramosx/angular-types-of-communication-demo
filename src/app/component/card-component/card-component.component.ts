import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent {
  @Input() color: string | undefined;
}
