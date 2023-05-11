import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.scss'],
})
export class SubjectDemoComponent implements OnInit {
  component = ['Component 1', 'Component 2'];
  url = 'https://angular-5bdd9-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient, private userSerivce: UserService) {}

  ngOnInit(): void {
    this.userSerivce.getUsers().subscribe((res) => {
      console.log(res);
    },(err)=>{
      console.log(err)
    });
  }

  addUser() {
    // It should Create a Randon User
    let obj = {
      name: 'Tony Stark',
      role: 'Super Hero',
      age: 38,
      isAvenger: true,
    };

    this.http.post(this.url + '/user.json', obj).subscribe((_) => {
      console.log('updated Data ', _);
    });
  }

  deleteUser() {
    this.http
      .delete(this.url + '/user/-NV3Ur-qXLmh5kbkoBJn.json')
      .subscribe((res) => {
        console.log(res);
      });
  }
}

export interface IInput {
  [k: string]: IUser;
}
export interface IUser {
  name: string;
  age: number;
  isAvenger: boolean;
  role: string;
}
