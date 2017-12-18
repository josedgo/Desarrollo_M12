import { Http, Headers, RequestOptions } from '@angular/http';
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
  
 
    postRequest() {
      var headers = new Headers();
      //headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
   
      let postParams = {"id":1,"listaFiltros":[{"id":7,"tipo":"filtro","descripcion":"Contenido Musical - Reggaeton"}
      ]};
      
      this.http.post("http://localhost:8080/proyectoM12_war_exploded/Configuracion/guardarFiltrosDeUsuario", postParams, options)
        .subscribe(data => {
          console.log(data['_body']);
         }, error => {
          console.log(error);// Error getting the data
        });
    }
  


  getData(){
    this.http.get('https://api.myjson.com/bins/mcjcb')
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
    
  }
}
