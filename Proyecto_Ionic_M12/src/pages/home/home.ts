import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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

  constructor(public navCtrl: NavController) {
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
    console.log("Se ejecutó Guardar Configuración... "); 
  }  


}
