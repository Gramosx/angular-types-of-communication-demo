import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleton-demo',
  templateUrl: './singleton-demo.component.html',
  styleUrls: ['./singleton-demo.component.scss'],
})
export class SingletonDemoComponent implements OnInit {
  showRefreshButton = false;
  selectedColor = 'bg-green-400';
  token = 'skdrjgbwofijksndlkjfbweoib';

  colors = [
    'bg-green-400',
    'bg-sky-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-orange-400',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
