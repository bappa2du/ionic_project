import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserListProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserListProvider {

  constructor(public http: Http) {
    console.log('Hello UserListProvider Provider');
  }

  getRemoteData(){
  	this.http.get('https://api.punkapi.com/v2/beers').subscribe(data =>{
  		console.log(data);
  	});
  }

}
