webpackJsonp([20],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionNotificacionesPage; });
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


var ConfiguracionNotificacionesPage = (function () {
    function ConfiguracionNotificacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfiguracionNotificacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracionNotificacionesPage');
    };
    return ConfiguracionNotificacionesPage;
}());
ConfiguracionNotificacionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-configuracion-notificaciones',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\configuracion-notificaciones\configuracion-notificaciones.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n    <ion-title>\n\n      Configuración\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <div id="titulo" class="show-list-numbers-and-dots">\n\n      <strong>\n\n        Configuración de Notificaciones\n\n      </strong>\n\n  </div>\n\n  <form id="configuracion-form">\n\n    <ion-item id="notificaciones-toggle">\n\n      <ion-label>\n\n        Notificaciones\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="true"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="noletin-toggle">\n\n      <ion-label>\n\n        Boletín Semanal\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="true"></ion-toggle>\n\n    </ion-item>\n\n    <div id="mensaje" class="show-list-numbers-and-dots">\n\n        <strong>\n\n          Acepto recibir notificaciones a mi correo electrónico\n\n        </strong>\n\n    </div>\n\n    <ion-item id="videos-toggle">\n\n      <ion-label>\n\n        Videos Recomendados\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="subscripciones-toggle">\n\n      <ion-label>\n\n        Videos de Subscripciones\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="etiquetados-toggle">\n\n      <ion-label>\n\n        Videos Etiquetados\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="estadisticas-toggle">\n\n      <ion-label>\n\n        Estadísticas de Usuario\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\configuracion-notificaciones\configuracion-notificaciones.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ConfiguracionNotificacionesPage);

//# sourceMappingURL=configuracion-notificaciones.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewListPage; });
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
 * Generated class for the CreateNewListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateNewListPage = (function () {
    function CreateNewListPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CreateNewListPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Lista Creada!',
            buttons: ['OK']
        });
        alert.present();
    };
    CreateNewListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewListPage');
    };
    return CreateNewListPage;
}());
CreateNewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-create-new-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\create-new-list\create-new-list.html"*/'<!--\n\n  Generated template for the CreateNewListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-row>\n\n        <ion-col col-9 class="nopadding">\n\n          Crear Lista Nueva\n\n        </ion-col>\n\n        <!-- <ion-col col-3 class="nopadding" align="right"> \n\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n          <ion-icon style="margin-left:15px;" ios="ios-trash" md="md-trash"></ion-icon>\n\n        </ion-col>-->\n\n\n\n      </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nombre</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descripción</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      \n\n      <br>\n\n      <br>\n\n\n\n      <ion-item>\n\n        <ion-label>Privada</ion-label>\n\n        <ion-checkbox></ion-checkbox>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n  <br>\n\n  <br>\n\n\n\n\n\n\n\n  <button class="botonCrearLista" color="secondary" ion-button (click)="showAlert()"> GUARDAR </button>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\create-new-list\create-new-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CreateNewListPage);

//# sourceMappingURL=create-new-list.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListPage; });
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
 * Generated class for the EditListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditListPage = (function () {
    function EditListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditListPage');
    };
    return EditListPage;
}());
EditListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\edit-list\edit-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n        <ion-row>\n\n            <ion-col col-10 class="nopadding">\n\n                Editar lista numero 1\n\n   \n\n            </ion-col>\n\n            <ion-col col-2 class="nopadding" align="right">\n\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nombre de la Lista</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Descripcion</ion-label>\n\n      <ion-textarea></ion-textarea>\n\n    </ion-item>\n\n    <br>\n\n    <br>\n\n    <ion-item>\n\n      <ion-label>Lista Privada</ion-label>\n\n      <ion-checkbox color="red" checked="false"></ion-checkbox>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n      <button class="botonGuardarEditado" ion-button color="light">GUARDAR</button>\n\n\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\edit-list\edit-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EditListPage);

//# sourceMappingURL=edit-list.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Modulo 2/canal/canal.module": [
		758,
		9
	],
	"../pages/Modulo 2/estadistica/estadistica.module": [
		759,
		8
	],
	"../pages/Modulo 2/inicio/inicio.module": [
		760,
		7
	],
	"../pages/Modulo 2/listas/listas.module": [
		761,
		6
	],
	"../pages/Modulo 2/menu/menu.module": [
		762,
		5
	],
	"../pages/Modulo 2/suscripciones/suscripciones.module": [
		763,
		4
	],
	"../pages/Modulo 2/tabs/tabs.module": [
		764,
		3
	],
	"../pages/Modulo 2/tendencias/tendencias.module": [
		765,
		2
	],
	"../pages/Modulo 2/usuario/usuario.module": [
		766,
		1
	],
	"../pages/Modulo 8/channels/channels.module": [
		767,
		19
	],
	"../pages/Módulo 12 -ModeracionContenido/acceso-config-contenido/acceso-config-contenido.module": [
		756,
		18
	],
	"../pages/Módulo 12 -ModeracionContenido/config-contenido/config-contenido.module": [
		757,
		17
	],
	"../pages/configuracion-notificaciones/configuracion-notificaciones.module": [
		755,
		16
	],
	"../pages/notificaciones/notificaciones.module": [
		768,
		15
	],
	"../pages/playlist/add-list/add-list.module": [
		769,
		14
	],
	"../pages/playlist/create-new-list/create-new-list.module": [
		770,
		13
	],
	"../pages/playlist/edit-list/edit-list.module": [
		771,
		12
	],
	"../pages/playlist/playlist.module": [
		772,
		0
	],
	"../pages/playlist/pop-over-listas-reproduccion/pop-over-listas-reproduccion.module": [
		773,
		11
	],
	"../pages/playlist/view-list/view-list.module": [
		774,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccesoConfigContenidoPage; });
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


//import { ServicioProvider } from '../../../providers/servicio/servicio';
/**
 * Generated class for the AccesoConfigContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccesoConfigContenidoPage = (function () {
    function AccesoConfigContenidoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = 1;
        /* , public s: ServicioProvider*/
    }
    AccesoConfigContenidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccesoConfigContenidoPage');
    };
    AccesoConfigContenidoPage.prototype.continuar = function () {
        console.log('Contraseña: ' + this.password);
        /*this.s.getData();*/
        this.navCtrl.push('ConfigContenidoPage');
    };
    return AccesoConfigContenidoPage;
}());
AccesoConfigContenidoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-acceso-config-contenido',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\Módulo 12 -ModeracionContenido\acceso-config-contenido\acceso-config-contenido.html"*/'<ion-header >\n  <ion-navbar color="moradoViUCAB"  >\n\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title align="center">Acceso a Mod. de Contenido</ion-title> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<br>\n  <p>Para acceder a <strong>Moderación de Contenido</strong>, es necesario comprobar que usted es el usuario de esta cuenta. Por favor, ingrese la contraseña para continuar.</p>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Contraseña:</ion-label>\n      <ion-input type="password" maxlength="50"[(ngModel)]="password"></ion-input>\n    </ion-item>\n    <button ion-button color="verdeViUCAB" full (click)="continuar()">Continuar</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\Módulo 12 -ModeracionContenido\acceso-config-contenido\acceso-config-contenido.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], AccesoConfigContenidoPage);

var _a, _b;
//# sourceMappingURL=acceso-config-contenido.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificacionesPage = (function () {
    function NotificacionesPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    NotificacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacionesPage');
    };
    NotificacionesPage.prototype.goToConfiguracionNotificaciones = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */]);
    };
    return NotificacionesPage;
}());
NotificacionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notificaciones',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\notificaciones\notificaciones.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Notificaciones\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1">\n\n  <button id="notificaciones-button1" ion-button color="light" block icon-right style="text-align:left;" on-click="goToConfiguracionNotificaciones()">\n\n    Configuración\n\n    <ion-icon name="settings"></ion-icon>\n\n  </button>\n\n  <ion-list id="notificaciones-list3">\n\n    <ion-item color="none" id="notificaciones-list-item10">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="notificaciones-list-item11">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="notificaciones-list-item12">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="notificaciones-list-item13">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\notificaciones\notificaciones.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]])
], NotificacionesPage);

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsPage; });
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
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChannelsPage = (function () {
    function ChannelsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.buscarQuery = '';
        this.initializeItems();
    }
    // realizacion de busqueda mediante arreglos
    ChannelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChannelsPage');
    };
    ChannelsPage.prototype.initializeItems = function () {
        // this.items = [
        this.items = [
            {
                nombre: 'Jesus Yepes',
                suscritos: '12',
                color: this.color,
                estado: 'Suscrito',
                img: 'data:image/jpeg;base64,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'
            },
            {
                nombre: 'Andy Gomez',
                suscritos: '133',
                color: this.color,
                estado: 'Suscrito',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
            },
            {
                nombre: 'Johan de Freitas',
                suscritos: '11212',
                color: this.color,
                estado: 'Suscrito',
                img: 'https://www.lapatilla.com/site/wp-content/uploads/2017/08/Meme.x43795.jpg'
            },
        ];
    };
    ChannelsPage.prototype.getItems = function (ev) {
        //Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    // Realizacion del mensaje de confirmacion
    ChannelsPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Cancelar suscripcion ?',
            message: 'Esta seguro de cancelar la suscripcion ',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () { console.log('presiono si'); }
                },
                {
                    text: 'Cancelar Suscripcion',
                    handler: function () { console.log('presiono no'); }
                }
            ]
        });
        confirm.present();
        this.estadoNombre = 'Suscrito';
    };
    ChannelsPage.prototype.activarColor = function (color) {
        return color;
    };
    return ChannelsPage;
}());
ChannelsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-channels',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\Modulo 8\channels\channels.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n      <ion-buttons class= \'centrado-porcentual\'  >\n\n          <button  >\n\n        <ion-icon name="videocam" color="primary"></ion-icon>   \n\n      </button>\n\n      </ion-buttons>   \n\n    \n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar> <!--> Creacion</!-->\n\n</ion-header>\n\n\n\n \n\n<ion-content padding>\n\n\n\n\n\n    <ion-list>\n\n      \n\n        <ion-item *ngFor="let item of items" >\n\n            <ion-avatar item-start >\n\n                <img [src]="item.img">\n\n            </ion-avatar>\n\n            <h2> {{ item.nombre }} </h2>\n\n            <p>Suscritos {{item.suscritos}}</p>\n\n            <button ion-button color= {{item.color}} item-right (click)="showConfirm()" > {{item.estado}}</button>\n\n\n\n        </ion-item>\n\n     </ion-list>\n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\Modulo 8\channels\channels.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ChannelsPage);

//# sourceMappingURL=channels.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_list_create_new_list__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AddListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddListPage = (function () {
    function AddListPage(navCtrl, navParams /*  , public alertCtrl: AlertController*/) {
        this.navCtrl = navCtrl;
        this.navParams = navParams; /*  , public alertCtrl: AlertController*/
        this.ListasDeReproduccion = [
            { title: 'Lista numero 1', amount: '13', duration: '30:00 min', img: 'https://www.lapatilla.com/site/wp-content/uploads/2017/08/Meme.x43795.jpg' },
            { title: 'Lista numero 2', amount: '3', duration: '3:00 min', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXnCR_ZKLXop4kwMfaIDLOxcPqco1zROOTIoEyCSP5LtBuXho' },
            { title: 'Lista numero 3', amount: '1', duration: '39:05 min', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXnCR_ZKLXop4kwMfaIDLOxcPqco1zROOTIoEyCSP5LtBuXho' },
        ];
    }
    AddListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddListPage');
    };
    /*  showAddListPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Crear Lista',
        message: "Introduzca datos de la Lista a crear",
        inputs: [
          {
            name: 'title',
            placeholder: 'Titulo'
          },
          {
            name: 'description',
            placeholder: 'Descripcion'
          }
        ],
  
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }*/
    AddListPage.prototype.goToCreateNewList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_new_list_create_new_list__["a" /* CreateNewListPage */]);
    };
    return AddListPage;
}());
AddListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\add-list\add-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-row>\n\n        <ion-col col-10 class="nopadding">\n\n          Agregar Lista de Reproduccion\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let lista of ListasDeReproduccion" >\n\n      <ion-grid>\n\n        <ion-row>\n\n            <ion-row >\n\n              <div class="ellipsis">\n\n                <ion-icon name="list" padding-right="30dpx"></ion-icon>\n\n                <span class="List-title-soft">{{lista.title}}</span>\n\n              </div>\n\n            </ion-row>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n    <hr>\n\n    <div class="ellipsis" padding-left="100dpx" padding-top="15dpx" (click)="goToCreateNewList()">\n\n      <ion-icon class="custom-icon" name="add" padding-right="20dpx" ></ion-icon>\n\n      <span class="List-title">Crear Lista</span>\n\n    </div>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\add-list\add-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] /*  , public alertCtrl: AlertController*/])
], AddListPage);

//# sourceMappingURL=add-list.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewListPage; });
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
 * Generated class for the ViewListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewListPage = (function () {
    function ViewListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ListaDeVideos = [
            { title: 'Video numero 1', plays: '133', duration: '30:00 min', img: 'https://birdinflight.imgix.net/wp-content/uploads/2016/07/cassius-interactive-music-video_cover.jpg?auto=format&q=80&fit=crop&crop=faces&w=632' },
            { title: 'Video numero 2', plays: '32', duration: '3:00 min', img: 'http://assets7.capitalxtra.com/2017/42/krept-and-konan-ask-flipz-video-1508500206-list-handheld-0.png' },
            { title: 'Video numero 3', plays: '12', duration: '39:05 min', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESg8T4eeKccQZTSsGLyFT7DZzWASx8TXiJzRLVtoxojdWB-Rb' },
        ];
    }
    ViewListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewListPage');
    };
    return ViewListPage;
}());
ViewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-view-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\view-list\view-list.html"*/'<!--\n\n  Generated template for the ViewListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n          <ion-row>\n\n              <ion-col col-9 class="nopadding">\n\n                  Lista numero 1\n\n     \n\n              </ion-col>\n\n              <ion-col col-3 class="nopadding" align="right">\n\n                  <ion-icon  ios="ios-create" md="md-create"></ion-icon>\n\n                  <ion-icon style="margin-left:15px;" ios="ios-trash" md="md-trash"></ion-icon>\n\n              </ion-col>\n\n              \n\n            </ion-row>\n\n      </ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h2 class="TituloLista">Nombre de la lista</h2>\n\n\n\n    <ion-list >\n\n        <ion-item *ngFor="let video of ListaDeVideos" >\n\n          <ion-thumbnail item-start id="List-img">\n\n            <img [src]="video.img">\n\n          </ion-thumbnail>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10 class="nopadding" >\n\n                <ion-row >\n\n                  <div class="ellipsis">\n\n                    <span class="List-title">{{video.title}}</span>\n\n                  </div>\n\n    \n\n                </ion-row>\n\n                <ion-row>\n\n                  <span class="List-amount">{{video.plays}} plays</span>\n\n                </ion-row>\n\n                <ion-row>\n\n                  <span class="List-duration">{{video.duration}}</span>\n\n                </ion-row>\n\n              </ion-col>\n\n              <ion-col col-2 class="nopadding" align="right">\n\n                <ion-icon class="f15 color-grey"  ios="ios-trash" md="md-trash"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-item>\n\n    \n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\view-list\view-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ViewListPage);

//# sourceMappingURL=view-list.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverListasReproduccionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__ = __webpack_require__(137);
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
 * Generated class for the PopOverListasReproduccionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopOverListasReproduccionPage = (function () {
    function PopOverListasReproduccionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopOverListasReproduccionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopOverListasReproduccionPage');
    };
    PopOverListasReproduccionPage.prototype.goToEditList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__["a" /* EditListPage */]);
    };
    return PopOverListasReproduccionPage;
}());
PopOverListasReproduccionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pop-over-listas-reproduccion',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\pop-over-listas-reproduccion\pop-over-listas-reproduccion.html"*/'<ion-list >\n\n    <ion-item (click)="goToEditList()">\n\n      <ion-grid>\n\n        <ion-row > \n\n          <ion-col col-4 class="nopadding">\n\n              <ion-icon class="f21 color-blue" ios="ios-create" md="md-create"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-8 class="nopadding" align="right">\n\n              Editar lista \n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    \n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4 class="nopadding">\n\n                <ion-icon class="f21 color-blue" ios="ios-trash" md="md-trash"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-8 class="nopadding" align="right">\n\n                Eliminar lista \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      \n\n      </ion-item>\n\n    \n\n  </ion-list>'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\pages\playlist\pop-over-listas-reproduccion\pop-over-listas-reproduccion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PopOverListasReproduccionPage);

//# sourceMappingURL=pop-over-listas-reproduccion.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_playlist_edit_list_edit_list__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_playlist_view_list_view_list__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_playlist_create_new_list_create_new_list__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_playlist_add_list_add_list__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notificaciones_notificaciones__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Modulo_8_channels_channels__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_M_dulo_12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//Modificado Grupo 10



//Fin Modificado
//Modificado Grupo 8

//Fin modificado
//Modificado por Grupo 12

//Fin modificación
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_playlist_edit_list_edit_list__["a" /* EditListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__["a" /* PopOverListasReproduccionPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_playlist_view_list_view_list__["a" /* ViewListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_playlist_add_list_add_list__["a" /* AddListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_playlist_create_new_list_create_new_list__["a" /* CreateNewListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_Modulo_8_channels_channels__["a" /* ChannelsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_M_dulo_12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__["a" /* AccesoConfigContenidoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/configuracion-notificaciones/configuracion-notificaciones.module#ConfiguracionNotificacionesPageModule', name: 'ConfiguracionNotificacionesPage', segment: 'configuracion-notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Módulo 12 -ModeracionContenido/acceso-config-contenido/acceso-config-contenido.module#AccesoConfigContenidoPageModule', name: 'AccesoConfigContenidoPage', segment: 'acceso-config-contenido', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Módulo 12 -ModeracionContenido/config-contenido/config-contenido.module#ConfigContenidoPageModule', name: 'ConfigContenidoPage', segment: 'config-contenido', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/canal/canal.module#CanalPageModule', name: 'CanalPage', segment: 'canal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/estadistica/estadistica.module#EstadisticaPageModule', name: 'EstadisticaPage', segment: 'estadistica', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/listas/listas.module#ListasPageModule', name: 'ListasPage', segment: 'listas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/suscripciones/suscripciones.module#SuscripcionesPageModule', name: 'SuscripcionesPage', segment: 'suscripciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/tendencias/tendencias.module#TendenciasPageModule', name: 'TendenciasPage', segment: 'tendencias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 2/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo 8/channels/channels.module#ChannelsPageModule', name: 'ChannelsPage', segment: 'channels', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notificaciones/notificaciones.module#NotificacionesPageModule', name: 'NotificacionesPage', segment: 'notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/add-list/add-list.module#AddListPageModule', name: 'AddListPage', segment: 'add-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/create-new-list/create-new-list.module#CreateNewListPageModule', name: 'CreateNewListPage', segment: 'create-new-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/edit-list/edit-list.module#EditListPageModule', name: 'EditListPage', segment: 'edit-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/playlist.module#PlaylistPageModule', name: 'PlaylistPage', segment: 'playlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/pop-over-listas-reproduccion/pop-over-listas-reproduccion.module#PopOverListasReproduccionPageModule', name: 'PopOverListasReproduccionPage', segment: 'pop-over-listas-reproduccion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/view-list/view-list.module#ViewListPageModule', name: 'ViewListPage', segment: 'view-list', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_playlist_edit_list_edit_list__["a" /* EditListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__["a" /* PopOverListasReproduccionPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_playlist_view_list_view_list__["a" /* ViewListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_playlist_add_list_add_list__["a" /* AddListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_playlist_create_new_list_create_new_list__["a" /* CreateNewListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_Modulo_8_channels_channels__["a" /* ChannelsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_M_dulo_12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__["a" /* AccesoConfigContenidoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 195,
	"./af.js": 195,
	"./ar": 196,
	"./ar-dz": 197,
	"./ar-dz.js": 197,
	"./ar-kw": 198,
	"./ar-kw.js": 198,
	"./ar-ly": 199,
	"./ar-ly.js": 199,
	"./ar-ma": 200,
	"./ar-ma.js": 200,
	"./ar-sa": 201,
	"./ar-sa.js": 201,
	"./ar-tn": 202,
	"./ar-tn.js": 202,
	"./ar.js": 196,
	"./az": 203,
	"./az.js": 203,
	"./be": 204,
	"./be.js": 204,
	"./bg": 205,
	"./bg.js": 205,
	"./bn": 206,
	"./bn.js": 206,
	"./bo": 207,
	"./bo.js": 207,
	"./br": 208,
	"./br.js": 208,
	"./bs": 209,
	"./bs.js": 209,
	"./ca": 210,
	"./ca.js": 210,
	"./cs": 211,
	"./cs.js": 211,
	"./cv": 212,
	"./cv.js": 212,
	"./cy": 213,
	"./cy.js": 213,
	"./da": 214,
	"./da.js": 214,
	"./de": 215,
	"./de-at": 216,
	"./de-at.js": 216,
	"./de-ch": 217,
	"./de-ch.js": 217,
	"./de.js": 215,
	"./dv": 218,
	"./dv.js": 218,
	"./el": 219,
	"./el.js": 219,
	"./en-au": 220,
	"./en-au.js": 220,
	"./en-ca": 221,
	"./en-ca.js": 221,
	"./en-gb": 222,
	"./en-gb.js": 222,
	"./en-ie": 223,
	"./en-ie.js": 223,
	"./en-nz": 224,
	"./en-nz.js": 224,
	"./eo": 225,
	"./eo.js": 225,
	"./es": 226,
	"./es-do": 227,
	"./es-do.js": 227,
	"./es.js": 226,
	"./et": 228,
	"./et.js": 228,
	"./eu": 229,
	"./eu.js": 229,
	"./fa": 230,
	"./fa.js": 230,
	"./fi": 231,
	"./fi.js": 231,
	"./fo": 232,
	"./fo.js": 232,
	"./fr": 233,
	"./fr-ca": 234,
	"./fr-ca.js": 234,
	"./fr-ch": 235,
	"./fr-ch.js": 235,
	"./fr.js": 233,
	"./fy": 236,
	"./fy.js": 236,
	"./gd": 237,
	"./gd.js": 237,
	"./gl": 238,
	"./gl.js": 238,
	"./gom-latn": 239,
	"./gom-latn.js": 239,
	"./he": 240,
	"./he.js": 240,
	"./hi": 241,
	"./hi.js": 241,
	"./hr": 242,
	"./hr.js": 242,
	"./hu": 243,
	"./hu.js": 243,
	"./hy-am": 244,
	"./hy-am.js": 244,
	"./id": 245,
	"./id.js": 245,
	"./is": 246,
	"./is.js": 246,
	"./it": 247,
	"./it.js": 247,
	"./ja": 248,
	"./ja.js": 248,
	"./jv": 249,
	"./jv.js": 249,
	"./ka": 250,
	"./ka.js": 250,
	"./kk": 251,
	"./kk.js": 251,
	"./km": 252,
	"./km.js": 252,
	"./kn": 253,
	"./kn.js": 253,
	"./ko": 254,
	"./ko.js": 254,
	"./ky": 255,
	"./ky.js": 255,
	"./lb": 256,
	"./lb.js": 256,
	"./lo": 257,
	"./lo.js": 257,
	"./lt": 258,
	"./lt.js": 258,
	"./lv": 259,
	"./lv.js": 259,
	"./me": 260,
	"./me.js": 260,
	"./mi": 261,
	"./mi.js": 261,
	"./mk": 262,
	"./mk.js": 262,
	"./ml": 263,
	"./ml.js": 263,
	"./mr": 264,
	"./mr.js": 264,
	"./ms": 265,
	"./ms-my": 266,
	"./ms-my.js": 266,
	"./ms.js": 265,
	"./my": 267,
	"./my.js": 267,
	"./nb": 268,
	"./nb.js": 268,
	"./ne": 269,
	"./ne.js": 269,
	"./nl": 270,
	"./nl-be": 271,
	"./nl-be.js": 271,
	"./nl.js": 270,
	"./nn": 272,
	"./nn.js": 272,
	"./pa-in": 273,
	"./pa-in.js": 273,
	"./pl": 274,
	"./pl.js": 274,
	"./pt": 275,
	"./pt-br": 276,
	"./pt-br.js": 276,
	"./pt.js": 275,
	"./ro": 277,
	"./ro.js": 277,
	"./ru": 278,
	"./ru.js": 278,
	"./sd": 279,
	"./sd.js": 279,
	"./se": 280,
	"./se.js": 280,
	"./si": 281,
	"./si.js": 281,
	"./sk": 282,
	"./sk.js": 282,
	"./sl": 283,
	"./sl.js": 283,
	"./sq": 284,
	"./sq.js": 284,
	"./sr": 285,
	"./sr-cyrl": 286,
	"./sr-cyrl.js": 286,
	"./sr.js": 285,
	"./ss": 287,
	"./ss.js": 287,
	"./sv": 288,
	"./sv.js": 288,
	"./sw": 289,
	"./sw.js": 289,
	"./ta": 290,
	"./ta.js": 290,
	"./te": 291,
	"./te.js": 291,
	"./tet": 292,
	"./tet.js": 292,
	"./th": 293,
	"./th.js": 293,
	"./tl-ph": 294,
	"./tl-ph.js": 294,
	"./tlh": 295,
	"./tlh.js": 295,
	"./tr": 296,
	"./tr.js": 296,
	"./tzl": 297,
	"./tzl.js": 297,
	"./tzm": 298,
	"./tzm-latn": 299,
	"./tzm-latn.js": 299,
	"./tzm.js": 298,
	"./uk": 300,
	"./uk.js": 300,
	"./ur": 301,
	"./ur.js": 301,
	"./uz": 302,
	"./uz-latn": 303,
	"./uz-latn.js": 303,
	"./uz.js": 302,
	"./vi": 304,
	"./vi.js": 304,
	"./x-pseudo": 305,
	"./x-pseudo.js": 305,
	"./yo": 306,
	"./yo.js": 306,
	"./zh-cn": 307,
	"./zh-cn.js": 307,
	"./zh-hk": 308,
	"./zh-hk.js": 308,
	"./zh-tw": 309,
	"./zh-tw.js": 309
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 442;

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(335);
//Clase que se encarga de enviar las solicitudes al servidor Rest Java
//En periodo de prueba, no se ha validado que funciona, pero es la estructura basica. 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Direccion del servidor donde esta la BDD
var URL = 'http://localhost:8080/viucab';
var RestApiService = (function () {
    function RestApiService(http) {
        this.http = http;
    }
    //Metodo GET: /direccion
    //Accede al metodo que se encuentra en direccion y devuelve la respuesta
    RestApiService.prototype.getTodo = function (direccion) {
        console.log(URL + '/' + direccion);
        return this.http
            .get(URL + '/' + direccion)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    //Metodo GET: /direccion/id_objeto
    //Accede al metodo que se encuentra en direccion, enviando un id y devuelve la respuesta
    RestApiService.prototype.getUno = function (direccion, idObjeto) {
        return this.http
            .get(URL + '/' + direccion + '/' + idObjeto)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo GET: /direccion + (param)
    //Accede al metodo que se encuentra en direccion, enviando parametros y devuelve la respuesta
    RestApiService.prototype.getTodoParam = function (direccion, param) {
        return this.http
            .get(URL + '/' + direccion, param)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    //Metodo GET: /direccion + (param)
    //Accede al metodo que se encuentra en direccion, enviando un id y parametros y devuelve la respuesta
    RestApiService.prototype.getUnoParam = function (direccion, idObjeto, param) {
        return this.http
            .get(URL + '/' + direccion + '/' + idObjeto, param)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    //Metodo POST: /direccion
    //Actualiza o envia datos mas parametros a una direccion
    RestApiService.prototype.postTodo = function (direccion, datos, param) {
        return this.http
            .post(URL + '/' + direccion, datos, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo POST: /direccion/id_objeto
    //Actualiza el objeto id en una direccion. Es necesario el enviar el dato nuevo y los parametros
    RestApiService.prototype.postUno = function (direccion, idObjeto, dato, param) {
        return this.http
            .post(URL + '/' + direccion + "/" + idObjeto, dato, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo PUT: /direccion
    //Agrega en una direccion, envia los datos y el parametro
    RestApiService.prototype.putTodo = function (direccion, datos, param) {
        return this.http
            .put(URL + '/' + direccion, datos, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo PUT: /direccion/id_objeto
    //Agrega el objeto id en una direccion, envia los datos y el parametro
    RestApiService.prototype.putUno = function (direccion, idObjeto, dato, param) {
        return this.http
            .put(URL + '/' + direccion + '/' + idObjeto, dato, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo DELETE: /direccion
    //Elimina en una direccion, enviando parametros
    RestApiService.prototype.deleteTodo = function (direccion, param) {
        return this.http
            .delete(URL + '/' + direccion, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo DELETE: /direccion/id_objeto
    //Elimina un objeto en una direccion, es necesario el id y los parametros
    RestApiService.prototype.deleteUno = function (direccion, idObjeto, param) {
        return this.http
            .delete(URL + '/' + direccion + "/" + idObjeto, param)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Metodo DELETE: /direccion
    //Elimina varios objetos en una direccion, es necesario la lista de objetos a eliminar y los parametros
    RestApiService.prototype.deleteVarios = function (direccion, dato, param) {
        return this.http
            .delete(URL + '/' + direccion, dato)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    //Manejo de erorres
    RestApiService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
    };
    return RestApiService;
}());
RestApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], RestApiService);

//# sourceMappingURL=rest-api.service.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'MenuPage'; /// por cambiar a MenuPages
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\jdavi\Desktop\IonicProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\IonicProject\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map