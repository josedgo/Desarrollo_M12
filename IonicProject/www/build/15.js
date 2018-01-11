webpackJsonp([15],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigContenidoPageModule", function() { return ConfigContenidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_contenido__ = __webpack_require__(791);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigContenidoPageModule = (function () {
    function ConfigContenidoPageModule() {
    }
    return ConfigContenidoPageModule;
}());
ConfigContenidoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__config_contenido__["a" /* ConfigContenidoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config_contenido__["a" /* ConfigContenidoPage */]),
        ],
    })
], ConfigContenidoPageModule);

//# sourceMappingURL=config-contenido.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigContenidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConfigContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigContenidoPage = (function () {
    function ConfigContenidoPage(navCtrl, navParams, http, servicio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.servicio = servicio;
        this.filtrosIndividuales = false;
        this.estructurasFiltros = false;
        this.contenidoReggaeton = false;
        this.contenidoTerrorismo = false;
        this.contenidoTerror = false;
        this.contenidoSexo = false;
        this.contenidoPornografico = false;
        this.contenidoSangriento = false;
        this.controlParental = false;
        this.violencia = false;
        this.perfilAdulto = false;
        this.variable = false;
        this.discrimina = false;
        this.religio = false;
        this.politicab = false;
        this.maqui = false;
        this.infa = false;
        this.reggae = { id: 1, tipo: "filtro-simple", descripcion: "Contenido Musical - Reggaeton", valor: this.contenidoReggaeton };
        this.terrorismo = { id: 2, tipo: "filtro-simple", descripcion: "Contenido Terrorismo", valor: this.contenidoTerrorismo };
        this.terror = { id: 3, tipo: "filtro-simple", descripcion: "Contenido Terror", valor: this.contenidoTerror };
        this.sexo = { id: 4, tipo: "filtro-simple", descripcion: "Contenido Sexo", valor: this.contenidoSexo };
        this.porno = { id: 5, tipo: "filtro-simple", descripcion: "Contenido Pornografico", valor: this.contenidoPornografico };
        this.sangriento = { id: 6, tipo: "filtro-simple", descripcion: "Contenido Sangriento", valor: this.contenidoSangriento };
        this.parental = { id: 7, tipo: "estructura", descripcion: "Control Parental", valor: this.controlParental };
        this.violenciaa = { id: 8, tipo: "filtro-simple", descripcion: "Violencia", valor: this.violencia };
        this.perfil = { id: 9, tipo: "estructura", descripcion: "Perfil", valor: this.perfilAdulto };
        this.discriminacion = { id: 10, tipo: "filtro-simple", descripcion: "discriminacion", valor: this.discrimina };
        this.politica = { id: 11, tipo: "filtro-simple", descripcion: "politica", valor: this.politicab };
        this.infantil = { id: 12, tipo: "estructura", descripcion: "perfil infantil", valor: this.infa };
        this.maquillaje = { id: 13, tipo: "filtro-simple", descripcion: "maquillaje", valor: this.maqui };
        this.filtros = [];
    }
    ConfigContenidoPage.prototype.guardarConfiguracion = function () {
        // this.guardarConfig();
        //console.log("Se ejecutó Guardar Configuración... ");
        this.filtros = [this.reggae, this.terrorismo, this.terror, this.sexo, this.porno, this.sangriento, this.parental, this.violenciaa, this.perfil,
            this.discriminacion, this.maquillaje, this.politica, this.infantil];
        console.log(this.filtros);
        this.guardarConfig();
    };
    ConfigContenidoPage.prototype.guardarConfig = function () {
        this.servicio.postRequest(this.filtros).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log(err);
        });
    };
    return ConfigContenidoPage;
}());
ConfigContenidoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-config-contenido',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\M12_ModeracionContenido\config-contenido\config-contenido.html"*/'<ion-header >\n\n  <ion-navbar color="primary" align="center" >\n\n    <ion-title>\n\n      Moderación de Contenido\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit) = "guardarConfiguracion()">\n\n    <p align="center">IMPORTANTE: </p>\n\n    <p align="justify">  En esta sección podrá bloquear el contenido que no desea ver, las visualizaciones se ajustarán a los parámetros establecidos.</p>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">\n\n        <ion-label>Filtros Individuales </ion-label>\n\n        <ion-toggle [(ngModel)]="filtrosIndividuales"  [ngModelOptions]="{standalone: true}"></ion-toggle>\n\n        <ion-icon ios="ios-add" md="md-add"></ion-icon>\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>Musica Reggaeton</ion-label>\n\n        <ion-checkbox [(ngModel)]="reggae.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Terrorismo</ion-label>\n\n        <ion-checkbox [(ngModel)]="terrorismo.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Terror</ion-label>\n\n        <ion-checkbox [(ngModel)]="terror.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Violencia</ion-label>\n\n        <ion-checkbox [(ngModel)]="violenciaa.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n      <ion-label>Sexo</ion-label>\n\n      <ion-checkbox [(ngModel)]="sexo.valor" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n    </ion-item>\n\n      <ion-item>\n\n        <ion-label>Pornografia</ion-label>\n\n        <ion-checkbox [(ngModel)]="porno.valor" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Gore y Cont. Sangriento</ion-label>\n\n        <ion-checkbox [(ngModel)]="sangriento.valor" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Discriminación</ion-label>\n\n        <ion-checkbox [(ngModel)]="discriminacion.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Política</ion-label>\n\n        <ion-checkbox [(ngModel)]="politica.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Maquillaje y Tutoriales</ion-label>\n\n        <ion-checkbox [(ngModel)]="maquillaje.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    <hr><br>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">\n\n        <ion-label>Estructuras Especiales</ion-label>\n\n        <ion-toggle [(ngModel)]="estructurasFiltros"  [ngModelOptions]="{standalone: true}" ></ion-toggle>\n\n      </ion-item-divider>\n\n      <!--<p align="justify">En esta sección se ponen a su disposición estructuras con filtros agrupados para mayor comodidad.</p>-->\n\n      <ion-item>\n\n        <ion-label>Control Parental</ion-label>\n\n        <ion-checkbox [(ngModel)]="parental.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Perfil Infantil</ion-label>\n\n        <ion-checkbox [(ngModel)]="infantil.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n        <ion-icon ios="ios-alert" md="md-alert"></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Perfil de Adulto</ion-label>\n\n        <ion-checkbox [(ngModel)]="perfil.valor"  [ngModelOptions]="{standalone: true}"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    <hr>\n\n      <button ion-button color="verde2" type="submit">Guardar</button>\n\n  </form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\M12_ModeracionContenido\config-contenido\config-contenido.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */]])
], ConfigContenidoPage);

//# sourceMappingURL=config-contenido.js.map

/***/ })

});
//# sourceMappingURL=15.js.map