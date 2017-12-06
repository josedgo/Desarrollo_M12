webpackJsonp([17],{

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigContenidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    function ConfigContenidoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //Método de habilitar/deshabilitar Todas los Filtros
    ConfigContenidoPage.prototype.cambiarFiltrosIndividuales = function () {
        console.log("filtrosIndividuales cambiado a: " + this.filtrosIndividuales);
    };
    //Métodos de los Checkbox de Estructuras
    ConfigContenidoPage.prototype.cambiarContenidoReggaeton = function () {
        console.log("contenidoReggaeton cambiado a: " + this.contenidoReggaeton);
    };
    ConfigContenidoPage.prototype.cambiarContenidoTerrorismo = function () {
        console.log("contenidoTerrorismo cambiado a: " + this.contenidoTerrorismo);
    };
    ConfigContenidoPage.prototype.cambiarContenidoTerror = function () {
        console.log("contenidoTerror cambiado a: " + this.contenidoTerror);
    };
    ConfigContenidoPage.prototype.cambiarContenidoSexo = function () {
        console.log("contenidoSexo cambiado a: " + this.contenidoSexo);
    };
    ConfigContenidoPage.prototype.cambiarContenidoPornografico = function () {
        console.log("contenidoPornografico cambiado a: " + this.contenidoPornografico);
    };
    ConfigContenidoPage.prototype.cambiarContenidoSangriento = function () {
        console.log("contenidoSangriento cambiado a: " + this.contenidoSangriento);
    };
    //Método de habilitar/deshabilitar Todas las Estructuras
    ConfigContenidoPage.prototype.cambiarEstructurasFiltros = function () {
        console.log("estructurasFiltros cambiado a: " + this.estructurasFiltros);
    };
    //Métodos de los Checkbox de Estructuras
    ConfigContenidoPage.prototype.cambiarControlParental = function () {
        console.log("controlParental cambiado a: " + this.controlParental);
    };
    ConfigContenidoPage.prototype.cambiarViolencia = function () {
        console.log("violencia cambiado a: " + this.violencia);
    };
    ConfigContenidoPage.prototype.cambiarPerfilAdulto = function () {
        console.log("perfilAdulto cambiado a: " + this.perfilAdulto);
    };
    //Método de Guardar Configuración
    ConfigContenidoPage.prototype.guardarConfiguracion = function () {
        console.log("Se ejecutó Guardar Configuración... ");
    };
    return ConfigContenidoPage;
}());
ConfigContenidoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-config-contenido',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\Módulo 12 -ModeracionContenido\config-contenido\config-contenido.html"*/'<ion-header >\n    <ion-navbar color="moradoViUCAB" align="center" >\n      <ion-title>\n        Moderación de Contenido\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  <p>En esta sección podrá bloquear el contenido que no desea ver, las visualizaciones se ajustarán al modelado establecido.</p>\n  <ion-item-group>\n    <ion-item-divider color="light">\n        <ion-label><strong>Filtros Individuales</strong></ion-label>\n        <ion-toggle [(ngModel)]="filtrosIndividuales" (ionChange)="cambiarFiltrosIndividuales()"></ion-toggle>\n      </ion-item-divider>\n      <ion-item>\n        <ion-label>Contenido Musical - Reggaetón</ion-label>\n        <ion-checkbox [(ngModel)]="contenidoReggaeton" (ionChange)="cambiarContenidoReggaeton()"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contenido de Terrorismo</ion-label>\n        <ion-checkbox [(ngModel)]="contenidoTerrorismo" (ionChange)="cambiarContenidoTerrorismo()"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contenido de Terror</ion-label>\n        <ion-checkbox [(ngModel)]="contenidoTerror" (ionChange)="cambiarContenidoTerror()"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contenido de Sexo</ion-label>\n        <ion-checkbox [(ngModel)]="contenidoSexo" (ionChange)="cambiarContenidoSexo()"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contenido Pornográfico</ion-label>\n        <ion-checkbox [(ngModel)]="contenidoPornografico" (ionChange)="cambiarContenidoPornografico()"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contenido Sangriento</ion-label>\n        <ion-checkbox [(ngModel)]="contenidoSangriento" (ionChange)="cambiarContenidoSangriento()"></ion-checkbox>\n      </ion-item>\n    </ion-item-group>\n    <hr><br>\n    <ion-item-group>\n      <ion-item-divider color="light">\n          <ion-label><strong>Estructuras de Filtros</strong></ion-label>\n          <ion-toggle [(ngModel)]="estructurasFiltros" (ionChange)="cambiarEstructurasFiltros()"></ion-toggle>\n      </ion-item-divider>\n      <p>En esta sección se ponen a su disposición estructuras con filtros agrupados para mayor comodidad.</p>\n        <ion-item>\n          <ion-label>Control Parental</ion-label>\n          <ion-checkbox [(ngModel)]="controlParental" (ionChange)="cambiarControlParental()"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label>Violencia</ion-label>\n          <ion-checkbox [(ngModel)]="violencia" (ionChange)="cambiarViolencia()"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label>Perfil de Adulto</ion-label>\n          <ion-checkbox [(ngModel)]="perfilAdulto" (ionChange)="cambiarPerfilAdulto()"></ion-checkbox>\n        </ion-item>\n    </ion-item-group>\n    <hr>\n  </ion-content>\n  \n  <ion-footer padding>\n    <button ion-button color="verdeViUCAB" full (click)="guardarConfiguracion()">Guardar</button>\n  </ion-footer>'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\Módulo 12 -ModeracionContenido\config-contenido\config-contenido.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ConfigContenidoPage);

//# sourceMappingURL=config-contenido.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigContenidoPageModule", function() { return ConfigContenidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_contenido__ = __webpack_require__(385);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config_contenido__["a" /* ConfigContenidoPage */]),
        ],
    })
], ConfigContenidoPageModule);

//# sourceMappingURL=config-contenido.module.js.map

/***/ })

});
//# sourceMappingURL=17.js.map