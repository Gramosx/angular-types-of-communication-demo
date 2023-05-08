import { Component } from '@angular/core';

@Component({
  selector: 'app-chaining-pipes',
  templateUrl: './chaining-pipes.component.html',
  styleUrls: ['./chaining-pipes.component.scss'],
})
export class ChainingPipesComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
