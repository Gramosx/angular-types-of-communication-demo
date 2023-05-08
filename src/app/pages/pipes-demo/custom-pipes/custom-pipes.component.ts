import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss'],
})
export class CustomPipesComponent implements OnInit {
  memory: number = 0;

  ngOnInit() {
    const memoryInfo = window.navigator['hardwareConcurrency'] || 0;
    this.memory = Number((memoryInfo / 1024).toFixed(2));
  }
}
