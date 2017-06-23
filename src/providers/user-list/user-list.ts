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
  	private url = "https://api.github.com/users";
  	constructor(public http: Http) {
  		//console.log('Hello UserListProvider Provider');
  	}

  	getRemoteData(){
  		// this.http.get('assets/data.json').map(res=>res.json()).subscribe(data =>{
  			// 	console.log(data);
  			// });
  			return this.http.get(this.url).map(res=>res.json());
  		}

  	}
