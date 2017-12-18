import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ServicioProvider } from '../../../providers/servicio/servicio';

/**
 * Generated class for the ConfigContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config-contenido',
  templateUrl: 'config-contenido.html',
})
export class ConfigContenidoPage {

    filtrosIndividuales: boolean;
    estructurasFiltros: boolean;
    contenidoReggaeton: boolean;
    contenidoTerrorismo: boolean;
    contenidoTerror: boolean;
    contenidoSexo: boolean;
    contenidoPornografico: boolean;
    contenidoSangriento: boolean;
    controlParental: boolean;
    violencia: boolean;
    perfilAdulto: boolean;
  
    constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    }
  
    //Método de habilitar/deshabilitar Todas los Filtros
    public cambiarFiltrosIndividuales() {
      console.log("filtrosIndividuales cambiado a: "+this.filtrosIndividuales); 
    }
    
    //Métodos de los Checkbox de Estructuras
    public cambiarContenidoReggaeton() {
      console.log("contenidoReggaeton cambiado a: "+this.contenidoReggaeton); 
    }
    public cambiarContenidoTerrorismo() {
      console.log("contenidoTerrorismo cambiado a: "+this.contenidoTerrorismo); 
    }
    public cambiarContenidoTerror() {
      console.log("contenidoTerror cambiado a: "+this.contenidoTerror); 
    }
    public cambiarContenidoSexo() {
      console.log("contenidoSexo cambiado a: "+this.contenidoSexo); 
    }
    public cambiarContenidoPornografico() {
      console.log("contenidoPornografico cambiado a: "+this.contenidoPornografico); 
    }
    public cambiarContenidoSangriento() {
      console.log("contenidoSangriento cambiado a: "+this.contenidoSangriento); 
    }
  
    //Método de habilitar/deshabilitar Todas las Estructuras
    public cambiarEstructurasFiltros() {
      console.log("estructurasFiltros cambiado a: "+this.estructurasFiltros); 
    }
  
    //Métodos de los Checkbox de Estructuras
    public cambiarControlParental() {
      console.log("controlParental cambiado a: "+this.controlParental); 
    }
    public cambiarViolencia() {
      console.log("violencia cambiado a: "+this.violencia); 
    }
    public cambiarPerfilAdulto() {
      console.log("perfilAdulto cambiado a: "+this.perfilAdulto); 
    }  
  
    //Método de Guardar Configuración
    public guardarConfiguracion() {
      this.postRequest();
      console.log("Se ejecutó Guardar Configuración... "); 
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
  
  }
  


