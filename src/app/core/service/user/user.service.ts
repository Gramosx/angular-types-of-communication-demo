import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env = 'https://angular-5bdd9-default-rtdb.firebaseio.com';
  private userUrl: string = this.env + '/user';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    // { "ABC" : {}, "CDA":{} }
    // [ "ABC","CDA" ]
    return this.httpClient
      .get<IInput>(this.userUrl + '.json', {
        headers: {
          Authorization: 'Token',
        },
      })
      .pipe(
        map((value) => {
          console.log(value);
          let val = Object.keys(value);
          console.log('Output', val);

          return val;
        }),
        switchMap((val) => {
          return this.httpClient.get('/getItems/' + val[0],{
            params:{
              
            }
          });
        })
      );
  }
}

export interface IInput {
  [k: string]: any;
}
