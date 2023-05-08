import { Component } from '@angular/core';

@Component({
  selector: 'app-parameterized-pipes',
  templateUrl: './parameterized-pipes.component.html',
  styleUrls: ['./parameterized-pipes.component.scss'],
})
export class ParameterizedPipesComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
