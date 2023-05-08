import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss'],
})
export class CustomPipesComponent implements OnInit {
  memory: number = 0;

  ngOnInit() {
    const navigatorInfo: any = window.navigator;

    this.memory = Number(navigatorInfo['deviceMemory']) || 0;
  }
}
