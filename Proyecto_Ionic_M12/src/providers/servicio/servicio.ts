import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioProvider {

  constructor(public http: Http) {
    console.log('Hello ServicioProvider Provider');
  }

  getData(){
    this.http.get('https://api.myjson.com/bins/mcjcb')
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
    
  }
}
