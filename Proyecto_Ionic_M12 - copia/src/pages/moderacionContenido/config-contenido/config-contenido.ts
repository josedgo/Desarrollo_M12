import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioProvider } from '../../../providers/servicio/servicio';

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

  filtrosIndividuales: boolean=false;
  estructurasFiltros: boolean = false;
  contenidoReggaeton: boolean = false;
  contenidoTerrorismo: boolean =false;
  contenidoTerror: boolean = false;
  contenidoSexo: boolean = false;
  contenidoPornografico: boolean = false;
  contenidoSangriento: boolean = false;
  controlParental: boolean=false;
  violencia: boolean = false;
  perfilAdulto: boolean=false;
  variable:boolean=false;


    reggae ={id:1,tipo:'filtro-simple',descripcion:'reggeton',valor:this.contenidoReggaeton};
    terrorismo ={id:2,tipo:'filtro-simple',descripcion:'terrorismo',valor:this.contenidoTerrorismo};
    terror ={id:3,tipo:'filtro-simple',descripcion:'terror',valor:this.contenidoTerror};
    sexo ={id:4,tipo:'filtro-simple',descripcion:'sexo',valor:this.contenidoSexo};
    porno ={id:5,tipo:'filtro-simple',descripcion:'porno',valor:this.contenidoPornografico};
    sangriento ={id:6,tipo:'filtro-simple',descripcion:'sangriento',valor:this.contenidoSangriento};
    parental ={id:7,tipo:'estructura',descripcion:'control - parental',valor:this.controlParental};
    violenciaa ={id:8,tipo:'estructura',descripcion:'Violencia',valor:this.violencia};
    perfil ={id:9,tipo:'estructura',descripcion:'perfil cx',valor:this.perfilAdulto};
    filtros =[];


    constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, public servicio:ServicioProvider) {

    }




    public guardarConfiguracion() {
     // this.guardarConfig();
      //console.log("Se ejecutó Guardar Configuración... ");
    this.filtros= [this.reggae,this.terrorismo,this.terror,this.sexo,this.porno,this.sangriento,this.parental,this.violenciaa,this.perfil];
    console.log(this.filtros);
    this.guardarConfig();
    }

    guardarConfig() {
        this.servicio.postRequest(this.filtros).then((result) => {
          console.log(result);
        }, (err) =>{
          console.log(err);
        });
    }

  }



