import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss'],
})
export class PipesDemoComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  name = 'heet';
  trainees = [
    { name: 'Rohit', age: 18 },
    { name: 'Heet', age: 18 },
  ];
}
