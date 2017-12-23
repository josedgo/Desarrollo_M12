import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    contenidoViolencia: boolean;
    contenidoTerrorismo: boolean;
    contenidoDiscrim: boolean;
    contenidoSexo: boolean;
    contenidoReligion: boolean;
    contenidoSangriento: boolean;
    contenidoMaqui:boolean;
    contenidoPolitica: boolean;
    controlParental: boolean;
    violencia: boolean;
    perfilAdulto: boolean;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
  
    //Método de habilitar/deshabilitar Todas los Filtros
    public cambiarFiltrosIndividuales() {
      console.log("filtrosIndividuales cambiado a: "+this.filtrosIndividuales); 
    }
    
    //Métodos de los Checkbox de Estructuras
    public cambiarContenidoViolencia() {
      console.log("contenidoViolencia cambiado a: "+this.contenidoViolencia); 
    }
    public cambiarContenidoTerrorismo() {
      console.log("contenidoTerrorismo cambiado a: "+this.contenidoTerrorismo); 
    }
    public cambiarContenidoDiscrim() {
      console.log("contenidoDiscrim cambiado a: "+this.contenidoDiscrim); 
    }
    public cambiarContenidoSexo() {
      console.log("contenidoSexo cambiado a: "+this.contenidoSexo); 
    }
    public cambiarContenidoReligion() {
      console.log("contenidoReligion cambiado a: "+this.contenidoReligion); 
    }
    public cambiarContenidoSangriento() {
      console.log("contenidoSangriento cambiado a: "+this.contenidoSangriento); 
    }
      public cambiarContenidoPolitica() {
      console.log("contenidoPolitica cambiado a: "+this.contenidoPolitica); 
    }
      public cambiarContenidoMaqui() {
      console.log("contenidoMaqui cambiado a: "+this.contenidoMaqui); 
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
      console.log("Se ejecutó Guardar Configuración... "); 
    }  
  
  
  }
  


