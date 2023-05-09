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

  ngOnInit(): void {
    let url =
      'https://angular-5bdd9-default-rtdb.firebaseio.com/user/-NV-BqZKzmJtY6X4GDfz.json';
    let body = {
      email: 'Heet',
      pass: 132,
    };
    this.http
      .delete(url, {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      })
      .subscribe((x: any) => {
        console.log(x);

        // localStorage.setItem('Gram', JSON.stringify(x));
      });
  }
}
