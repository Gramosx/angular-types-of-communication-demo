import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  arr: any[] = [];
  user: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // let obj = {
    //   username: 'admin',
    //   password: 'admin',
    // };
    // this.http.post('http://localhost:3000/api/login', obj).subscribe(
    //   (res: any) => {
    //     localStorage.setItem('heet', res.token);
    //     // Check for user obj
    //     this.user = res.user;
    //     this.getUsers(); //To Get all the Users
    //   },
    //   (err) => {}
    // );
    this.login();
  }

  getUsers() {
    this.http.get('http://localhost:3000/api/users').subscribe((res: any) => {
      this.arr = res;
    });
  }

  login() {
    let obj = {
      username: 'admin',
      password: 'admin',
    };
    this.http.post('http://localhost:3000/api/login', obj).subscribe(
      (res: any) => {
        localStorage.setItem('heet', res.token);
        // Check for user obj
        this.user = res.user;
        this.getUsers(); //To Get all the Users
      },
      (err) => {}
    );
  }

  logout() {
    localStorage.removeItem('heet');
    this.user = undefined;
  }
}
