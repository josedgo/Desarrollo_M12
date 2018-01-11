webpackJsonp([26],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionNotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        selector: 'page-configuracion-notificaciones',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\configuracion-notificaciones\configuracion-notificaciones.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n    <ion-title>\n\n      Configuración\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <div id="titulo" class="show-list-numbers-and-dots">\n\n      <strong>\n\n        Configuración de Notificaciones\n\n      </strong>\n\n  </div>\n\n  <form id="configuracion-form">\n\n    <ion-item id="notificaciones-toggle">\n\n      <ion-label>\n\n        Notificaciones\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="true"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="noletin-toggle">\n\n      <ion-label>\n\n        Boletín Semanal\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="true"></ion-toggle>\n\n    </ion-item>\n\n    <div id="mensaje" class="show-list-numbers-and-dots">\n\n        <strong>\n\n          Acepto recibir notificaciones a mi correo electrónico\n\n        </strong>\n\n    </div>\n\n    <ion-item id="videos-toggle">\n\n      <ion-label>\n\n        Videos Recomendados\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="subscripciones-toggle">\n\n      <ion-label>\n\n        Videos de Subscripciones\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="etiquetados-toggle">\n\n      <ion-label>\n\n        Videos Etiquetados\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item id="estadisticas-toggle">\n\n      <ion-label>\n\n        Estadísticas de Usuario\n\n      </ion-label>\n\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\configuracion-notificaciones\configuracion-notificaciones.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ConfiguracionNotificacionesPage);

//# sourceMappingURL=configuracion-notificaciones.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicioProvider = (function () {
    function ServicioProvider(http) {
        this.http = http;
        console.log('Hello ServicioProvider Provider');
    }
    ServicioProvider.prototype.postRequest = function (datos) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = { "id": 1, "listaFiltros": datos };
        console.log(postParams);
        alert("");
        return new Promise(function (resolve, reject) {
            alert("enviado filtros...");
            _this.http.post("http://localhost:8080/WS_mejorado_war_exploded//guardarFiltrosDeUsuario", postParams, options)
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error); // Error getting the data
            });
        });
    };
    ServicioProvider.prototype.getData = function () {
        this.http.get('https://api.myjson.com/bins/mcjcb')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    return ServicioProvider;
}());
ServicioProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], ServicioProvider);

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNewListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(45);
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
    function CreateNewListPage(events, navCtrl, api, navParams, alertCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.api = api;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CreateNewListPage.prototype.guardarListaNueva = function () {
        var _this = this;
        this.api.geta('playlist/createPlaylist?id_usu=' + 4 + '&lis_rep_nombre=' + this.nombreLista + '&lis_rep_descripcion=' + this.descripcionLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.events.publish('reloadPlaylists');
                _this.navCtrl.pop();
            }
            else if (data.json() == false) {
            }
        }, function (error) {
            console.error(error);
        });
    };
    CreateNewListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateNewListPage');
    };
    return CreateNewListPage;
}());
CreateNewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-create-new-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\create-new-list\create-new-list.html"*/'<!--\n\n  Generated template for the CreateNewListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-row>\n\n        <ion-col col-9 class="nopadding">\n\n          Crear Lista Nueva\n\n        </ion-col>\n\n        <!-- <ion-col col-3 class="nopadding" align="right"> \n\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n          <ion-icon style="margin-left:15px;" ios="ios-trash" md="md-trash"></ion-icon>\n\n        </ion-col>-->\n\n\n\n      </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nombre</ion-label>\n\n        <ion-input type="text" [(ngModel)]="nombreLista"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descripción</ion-label>\n\n        <ion-input type="text" [(ngModel)]="descripcionLista"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n    </ion-list>\n\n  </div>\n\n  <br>\n\n  <br>\n\n\n\n\n\n\n\n  <button class="botonCrearLista" color="secondary" ion-button (click)="guardarListaNueva()"> GUARDAR </button>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\create-new-list\create-new-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], CreateNewListPage);

//# sourceMappingURL=create-new-list.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/M12_ModeracionContenido/acceso-config-contenido/acceso-config-contenido.module": [
		765,
		25
	],
	"../pages/M12_ModeracionContenido/config-contenido/config-contenido.module": [
		766,
		15
	],
	"../pages/Modulo 2/canal/canal.module": [
		767,
		14
	],
	"../pages/Modulo 2/estadistica/estadistica.module": [
		768,
		13
	],
	"../pages/Modulo 2/inicio/inicio.module": [
		769,
		12
	],
	"../pages/Modulo 2/listas/listas.module": [
		770,
		11
	],
	"../pages/Modulo 2/menu/menu.module": [
		771,
		0
	],
	"../pages/Modulo 2/suscripciones/suscripciones.module": [
		772,
		10
	],
	"../pages/Modulo 2/tabs/tabs.module": [
		773,
		9
	],
	"../pages/Modulo 2/tendencias/tendencias.module": [
		774,
		8
	],
	"../pages/Modulo 2/usuario/usuario.module": [
		775,
		7
	],
	"../pages/Modulo 8/channels/channels.module": [
		776,
		24
	],
	"../pages/Modulo3/cargar-video/cargar-video.module": [
		777,
		6
	],
	"../pages/Modulo3/infovideo/infovideo.module": [
		778,
		5
	],
	"../pages/Modulo3/listarmisvideos/listarmisvideos.module": [
		779,
		4
	],
	"../pages/Modulo3/mis-videos/mis-videos.module": [
		780,
		3
	],
	"../pages/configuracion-contenido/configuracion-contenido.module": [
		763,
		2
	],
	"../pages/configuracion-notificaciones/configuracion-notificaciones.module": [
		764,
		23
	],
	"../pages/notificaciones/notificaciones.module": [
		781,
		22
	],
	"../pages/playlist/add-list/add-list.module": [
		782,
		21
	],
	"../pages/playlist/create-new-list/create-new-list.module": [
		783,
		20
	],
	"../pages/playlist/edit-list/edit-list.module": [
		784,
		19
	],
	"../pages/playlist/playlist.module": [
		785,
		1
	],
	"../pages/playlist/pop-over-listas-reproduccion/pop-over-listas-reproduccion.module": [
		786,
		18
	],
	"../pages/playlist/view-list/view-list.module": [
		787,
		17
	],
	"../pages/reproductor/reproductor.module": [
		788,
		16
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
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccesoConfigContenidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__ = __webpack_require__(142);
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
 * Generated class for the AccesoConfigContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccesoConfigContenidoPage = (function () {
    function AccesoConfigContenidoPage(navCtrl, navParams, s) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.s = s;
        this.id = 1;
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
        selector: 'page-acceso-config-contenido',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\M12_ModeracionContenido\acceso-config-contenido\acceso-config-contenido.html"*/'<ion-header >\n\n  <ion-navbar color="primary"  >\n\n\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title align="center">Acceso a Mod. de Contenido</ion-title> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<br>\n\n  <p>Para acceder a Moderación de Contenido, es necesario comprobar que usted es el usuario de esta cuenta. Por favor, ingrese la contraseña para continuar.</p>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label fixed>Contraseña:</ion-label>\n\n      <ion-input type="password" maxlength="50"[(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n    <button ion-button color="verde2" full (click)="continuar()">Continuar</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\M12_ModeracionContenido\acceso-config-contenido\acceso-config-contenido.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */]])
], AccesoConfigContenidoPage);

//# sourceMappingURL=acceso-config-contenido.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(45);
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
        selector: 'page-notificaciones',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\notificaciones\notificaciones.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Notificaciones\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1">\n\n  <button id="notificaciones-button1" ion-button color="light" block icon-right style="text-align:left;" on-click="goToConfiguracionNotificaciones()">\n\n    Configuración\n\n    <ion-icon name="settings"></ion-icon>\n\n  </button>\n\n  <ion-list id="notificaciones-list3">\n\n    <ion-item color="none" id="notificaciones-list-item10">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="notificaciones-list-item11">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="notificaciones-list-item12">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="notificaciones-list-item13">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\notificaciones\notificaciones.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]])
], NotificacionesPage);

//# sourceMappingURL=notificaciones.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelsPage = (function () {
    function ChannelsPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.buscarQuery = '';
        this.color = 'primary';
        this.estadoSus = 'Suscrito';
        this.suscrito = true;
        this.idUser = 1;
        this.prue();
        //  this.cargarUsuarios(); //---------------------------probando
    }
    // pendiente arreglar el metodo buscar lun 18/ dic/2017
    // realizacion de busqueda mediante arreglos
    ChannelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChannelsPage');
        this.prue();
        this.cargarUsuarios();
    };
    /**
     *  metodo que carga a lista de usuarios suscritos
     *
     */
    ChannelsPage.prototype.prue = function () {
        var _this = this;
        this.estadoSus = 'Suscrito';
        this.mostrarSuscripciones = true;
        this.mostrarUsuarios = false;
        this.api.geta('Suscripcion/GetSuscripcion?id=' + this.idUser)
            .subscribe(function (data) {
            _this.listaSuscripcion = data.json();
            console.log(_this.listaSuscripcion);
        }, function (error) {
            console.error(error);
        });
    };
    ChannelsPage.prototype.borrar = function (idSuscriptor) {
        this.api.deleteSus('Suscripcion/UpdateSuscripcion?idLogueado=' + this.idUser + '&idSuscriptor=' + idSuscriptor)
            .subscribe(function (data) {
        }, function (error) {
            console.error(error);
        });
    };
    //---------------------------- 4/ 01/2018 -----------
    ChannelsPage.prototype.cargarUsuarios = function () {
        var _this = this;
        this.mostrarSuscripciones = true;
        this.mostrarUsuarios = false;
        this.api.geta('Suscripcion/GetUsuarios')
            .subscribe(function (data) {
            _this.listaUsuarios = data.json();
            console.log(_this.listaUsuarios);
        }, function (error) {
            console.error(error);
        });
        this.estadoSus = 'Suscrito';
    };
    //---------------------------------------------------------------
    /**
     * @author Modulo 08
     * @param refresher :
     *  8/ene/2018
     */
    ChannelsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
            _this.prue();
        }, 1500);
    };
    //-------------------------------------------------------------------------------------------------
    // pendiente por arreglar
    ChannelsPage.prototype.getItems1 = function (ev) {
        this.estadoSus = 'Suscribirse';
        //Reset items back to all of the items
        // this.initializeItems();
        this.mostrarSuscripciones = false;
        this.mostrarUsuarios = true;
        this.items = this.listaUsuarios;
        // this.prue();
        var i;
        console.log('hola');
        console.log(this.listaUsuarios);
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item._name_user.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.listaUsuarios = this.items;
            console.log('chao ');
            console.log(this.listaUsuarios);
        }
        else {
            this.cargarUsuarios();
        }
    };
    //------------------------------------------------------------------------------------------------
    // Realizacion del mensaje de confirmacion 19/dic/2017
    //showConfirm(usuarioSelected : any,idx : number){
    /**
     *
     * @param nombreSelected
     * @param idSuscriptor
     */
    ChannelsPage.prototype.showConfirm = function (nombreSelected, idSuscriptor, idx) {
        var _this = this;
        // if(this.items[idx].flag)
        // {
        var confirm = this.alertCtrl.create({
            title: 'Cancelar suscripcion ?',
            message: 'Deseas cancelar la suscripcion a ' + nombreSelected,
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('presiono no');
                        // console.log(idx);
                        //this.items[idx].color = 'primary';
                        _this.estadoSus = 'Suscrito';
                        //this.items[idx].estado = this.estadoSus
                    }
                },
                {
                    text: 'Eliminar Suscripcion',
                    handler: function () {
                        _this.borrar(idSuscriptor);
                        console.log('presiono si suscripcion cancelada');
                        _this.listaSuscripcion.splice(idx, 1);
                        // console.log(idx);
                        // this.items[idx].color = 'claro';
                        //this.estadoSus = 'Suscribirse';
                        // this.items[idx].estado = this.estadoSus;
                    }
                }
            ]
        });
        confirm.present();
        console.log(idx);
    };
    //--------------------------------------------------------------------------
    /**
     *
     * @param nombreSelected
     * @param idSuscriptor
     * @param idx
     */
    ChannelsPage.prototype.showAlert = function (nombreSelected, idSuscriptor, idx) {
        var alert = this.alertCtrl.create({
            title: 'Suscripcion Realizada! ',
            subTitle: 'Usted se ha suscrito al canal de ' + nombreSelected + '. Presione OK para Continuar',
            buttons: ['OK']
        });
        this.suscribirUsuario(this.idUser, idSuscriptor);
        this.listaUsuarios.splice(idx, 1); //elimina el usuario de la lista
        alert.present();
    };
    // ---------------------------------------------------------------------------
    /**
     * Pendiente cambiar get por put o post ---------------******** en la ws tambn
     * @param usuarioLogueado
     * @param usuarioCanal
     */
    ChannelsPage.prototype.suscribirUsuario = function (usuarioLogueado, usuarioCanal) {
        this.api.geta('Suscripcion/SetSuscripcion?idLogueado=' + usuarioLogueado + '&idSuscriptor=' + usuarioCanal)
            .subscribe(function (data) {
        }, function (error) {
            console.error(error);
        });
    };
    return ChannelsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ChannelsPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('NAV'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
], ChannelsPage.prototype, "nav", void 0);
ChannelsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-channels',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo 8\channels\channels.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n      <ion-buttons class= \'centrado-porcentual\'  >\n\n          <button  >\n\n        <ion-icon name="videocam" color="primary"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Nombre del usuario a buscar " (ionInput)="getItems1($event)"></ion-searchbar> <!--> Creacion</!-->\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Deslice para Actualizar"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Actualizando...">\n\n    </ion-refresher-content>\n\n</ion-refresher>\n\n  <ion-list *ngIf= "mostrarSuscripciones">\n\n        <ion-item *ngFor="let item of listaSuscripcion ; let i = index " >\n\n            <ion-avatar item-start > \n\n                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa">\n\n            </ion-avatar>\n\n            <h2> {{ item._name_user }} </h2>\n\n             <!-->    <p>Suscritos {{item.suscritos}}  this.items[i].suscritos</p></-->\n\n            <button ion-button color= {{item.color}} item-right (click)="showConfirm(item._name_user, item._id_user, i )" > {{ estadoSus }}</button>  \n\n        </ion-item>            \n\n  </ion-list>\n\n \n\n  <ion-list *ngIf= "mostrarUsuarios">\n\n    <ion-item  *ngFor="let item of listaUsuarios ; let ix = index  " >\n\n        <ion-avatar item-start > \n\n            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa">\n\n        </ion-avatar>\n\n        <h2> {{ item._name_user }} </h2>\n\n        <!-->    <p>Suscritos {{item.suscritos}}  this.items[i].suscritos</p></-->\n\n        <button ion-button color= {{item.color}} item-right (click)="showAlert(item._name_user, item._id_user, ix )" > {{ estadoSus }}</button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo 8\channels\channels.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]])
], ChannelsPage);

//# sourceMappingURL=channels.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_new_list_create_new_list__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(45);
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
    function AddListPage(api, navCtrl, navParams, alertCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ListasDeReproduccion = [];
        this.ListasDeReproduccion = this.navParams.get('listasAdd');
        console.log(this.ListasDeReproduccion);
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
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_new_list_create_new_list__["a" /* CreateNewListPage */]);
    };
    AddListPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle
        });
        alert.present();
    };
    AddListPage.prototype.addVideoToList = function (idLista) {
        var _this = this;
        console.log("video agregado a esta lista", idLista);
        this.api.geta('playlist/addVideoToPlaylist?vid_id=' + 1
            + '&?lis_rep_id=' + idLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.navCtrl.pop();
            }
            else if (data.json() == false) {
                _this.presentAlert("Ups", "El video no pudo ser agregado a la lista");
            }
        }, function (error) {
            console.error(error);
        });
    };
    return AddListPage;
}());
AddListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\add-list\add-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      <ion-row>\n\n        <ion-col col-10 class="nopadding">\n\n          Agregar a lista\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let lista of ListasDeReproduccion" >\n\n      <ion-grid >\n\n        <ion-row>\n\n            <ion-row >\n\n              <div class="ellipsis">\n\n                <ion-icon name="list" padding-right="30dpx"></ion-icon>\n\n                <span class="List-title-soft">{{lista.nombre}}</span>\n\n              </div>\n\n            </ion-row>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n \n\n    <div class="ellipsis" padding-left="100dpx" padding-top="15dpx" (click)="goToCreateNewList()">\n\n      <ion-icon class="custom-icon" name="add" padding-right="20dpx" ></ion-icon>\n\n      <span class="List-title">Crear Lista</span>\n\n    </div>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\add-list\add-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddListPage);

//# sourceMappingURL=add-list.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__ = __webpack_require__(45);
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
    function ViewListPage(alertCtrl, api, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.VideosDeLista = [];
        this.VideosDeLista = this.navParams.get('VideosDeLista');
        this.NombreLista = this.navParams.get('NombreLista');
        this.idLista = this.navParams.get('IdLista');
        console.log(this.VideosDeLista, this.VideosDeLista);
    }
    ViewListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewListPage');
    };
    ViewListPage.prototype.goToEditList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__["a" /* EditListPage */]);
    };
    ViewListPage.prototype.presentAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle
        });
        alert.present();
    };
    ViewListPage.prototype.presentConfirm = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        console.log('delete clicked');
                        _this.confirmdeleteVideo();
                    }
                }
            ]
        });
        alert.present();
    };
    ViewListPage.prototype.getAllVideos = function () {
        var _this = this;
        this.api.geta('playlist/getVideosFromPlaylist?lis_rep_id=' + this.idLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.VideosDeLista = data.json();
            }
        }, function (error) {
            console.error(error);
        });
    };
    ViewListPage.prototype.confirmdeleteVideo = function () {
        var _this = this;
        this.api.geta('playlist/deleteVideoFromPlaylist?vid_id=' + this.idVideo
            + '&?lis_rep_id=' + this.idLista).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                _this.getAllVideos();
            }
            else if (data.json() == false) {
                _this.presentAlert("Ups", "El video no pudo ser agregado a la lista");
            }
        }, function (error) {
            console.error(error);
        });
    };
    ViewListPage.prototype.deleteVideo = function (idVideo) {
        console.log(idVideo);
        this.idVideo = idVideo;
        this.presentConfirm("Hey", "Estas seguro de querer eliminar este video?");
    };
    return ViewListPage;
}());
ViewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-view-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\view-list\view-list.html"*/'<!--\n\n  Generated template for the ViewListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n          <ion-row>\n\n              <ion-col col-9 class="nopadding">\n\n                  {{ NombreLista }}\n\n     \n\n              </ion-col>\n\n              <ion-col col-3 class="nopadding" align="right">\n\n                  <ion-icon (click)="goToEditList()"  ios="ios-create" md="md-create"></ion-icon>\n\n                  <ion-icon style="margin-left:15px;" ios="ios-trash" md="md-trash"></ion-icon>\n\n              </ion-col>\n\n              \n\n            </ion-row>\n\n      </ion-title>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h2 class="TituloLista">{{ NombreLista }}</h2>\n\n\n\n    <ion-list >\n\n        <ion-item *ngFor="let video of VideosDeLista" >\n\n          <ion-thumbnail item-start id="List-img">\n\n            <img [src]="video.imagen">\n\n          </ion-thumbnail>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10 class="nopadding" >\n\n                <ion-row >\n\n                  <div class="ellipsis">\n\n                    <span class="List-title">{{video.nombre}}</span>\n\n                  </div>\n\n    \n\n                </ion-row>\n\n                <ion-row>\n\n                  <span class="List-amount">{{video.visitas}} plays</span>\n\n                </ion-row>\n\n               <!-- <ion-row>\n\n                  <span class="List-duration">{{video.duration}}</span>\n\n                </ion-row> -->\n\n              </ion-col>\n\n              <ion-col (click)="deleteVideo(video.id)" col-2 class="nopadding" align="right">\n\n                <ion-icon class="f15 color-grey"  ios="ios-trash" md="md-trash"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-item>\n\n    \n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\view-list\view-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__app_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ViewListPage);

//# sourceMappingURL=view-list.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverListasReproduccionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__ = __webpack_require__(86);
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
    function PopOverListasReproduccionPage(events, navCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Lista = this.navParams.get('listapopover');
        console.log("Mi lista aqui:", this.Lista);
    }
    PopOverListasReproduccionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopOverListasReproduccionPage');
    };
    PopOverListasReproduccionPage.prototype.goToEditList = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_list_edit_list__["a" /* EditListPage */], { ListaEdit: this.Lista });
    };
    PopOverListasReproduccionPage.prototype.goToDeleteList = function () {
        this.navCtrl.pop();
        setTimeout(function () {
        }, 1000);
        this.events.publish('deletePlaylist', { id: this.Lista.idLista });
    };
    return PopOverListasReproduccionPage;
}());
PopOverListasReproduccionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pop-over-listas-reproduccion',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\pop-over-listas-reproduccion\pop-over-listas-reproduccion.html"*/'<ion-list >\n\n        <ion-item (click)="goToEditList()">\n\n      <ion-grid>\n\n        <ion-row > \n\n          <ion-col col-4 class="nopadding">\n\n              <ion-icon class="f21 color-blue" ios="ios-create" md="md-create"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-8 class="nopadding" align="right">\n\n              Editar lista \n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    \n\n    </ion-item>\n\n    <ion-item (click)="goToDeleteList()">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4 class="nopadding">\n\n                <ion-icon class="f21 color-blue" ios="ios-trash" md="md-trash"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-8 class="nopadding" align="right">\n\n                Eliminar lista \n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      \n\n      </ion-item>\n\n    \n\n  </ion-list>'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\pop-over-listas-reproduccion\pop-over-listas-reproduccion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PopOverListasReproduccionPage);

//# sourceMappingURL=pop-over-listas-reproduccion.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReproductorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(45);
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
 * Generated class for the ListasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReproductorPage = ReproductorPage_1 = (function () {
    //    public video =                //PRUEBA CON DATOS ESTATICOS
    //    {
    //        title: 'Subiendo a Galipan',
    //        url: 'http://localhost:2018/video.mp4',
    //        visitas: '58',
    //        likes: '23',
    //        dislikes: '54',
    //        owner: 'Cher',
    //        imgowner: '../../assets/imgs/advance-card-bttf.png',
    //        subscripciones: '100',
    //        relacionados: [
    //            {
    //                id: '34',
    //                urlimg: 'http://localhost:2018/foto.jpeg',
    //                nombre: 'La Bebe de Erbin junto a la gorda del Negro',
    //                canal: 'meruvzla4wd'
    //            },
    //            {
    //                id: '34',
    //                urlimg: 'http://localhost:2018/foto.jpeg',
    //                nombre: 'La Bebe de Erbin junto a la gorda del Negro',
    //                canal: 'meruvzla4wd'
    //            },
    //            {
    //                id: '34',
    //                urlimg: 'http://localhost:2018/foto.jpeg',
    //                nombre: 'La Bebe de Erbin junto a la gorda del Negro',
    //                canal: 'meruvzla4wd'
    //            }
    //        ],
    //        comentarios: [
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            },
    //            {
    //                iduser: '25',
    //                correo: 'aledavid21@gmail.com'
    //                urlimg: 'http://localhost:2018/foto2.jpg',
    //                nombre: 'Coquetos',
    //                idcomentario: '1'
    //                comentario: 'The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.'
    //            }
    //        ],
    //        listas: [
    //            {
    //                id: '25',
    //                nombre: 'Lista rustica'
    //            },
    //            {
    //                id: '25',
    //                nombre: 'Lista rustica'
    //            },
    //            {
    //                id: '25',
    //                nombre: 'Lista rustica'
    //            }
    //        ]
    //    };
    function ReproductorPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.comentario = '';
        this.path = 'Modulo2';
        this.usuario = 'erbintune@gmail.com';
        //    public response: any[];
        this.color = 'black';
    }
    ReproductorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getReproduccion(this.path + '/addVisita?idvideo=' + this.navParams.data).subscribe();
        this.api.getReproduccion(this.path + '/getVideoInfo?idvideo=' + this.navParams.data).subscribe(function (data) {
            _this.video = data.json();
        }, function (error) {
            console.error(error);
        });
        if (this.usuario) {
            this.api.getReproduccion(this.path + '/getIfLike?idvideo=' + this.navParams.data + '&usuario=' + this.usuario).subscribe(function (data) {
                if (data.json().result != '0') {
                    _this.color = 'primary';
                }
            });
        }
    };
    ReproductorPage.prototype.openVideo = function (id) {
        this.navCtrl.setRoot(ReproductorPage_1, id);
    };
    ReproductorPage.prototype.sentComment = function () {
        var _this = this;
        this.api.getReproduccion(this.path + '/addComentario?idvideo=' + this.navParams.data + '&usuario=' + this.usuario + '&comentario=' + this.comentario).subscribe(function (data) {
            if (data.json().result != '0') {
                _this.showAlert('Comentario agregado exitosamente!');
                _this.openVideo(_this.navParams.data);
            }
            else {
                _this.showAlert('Hubo un error enviando tu comentario :(. Intentelo de nuevo');
            }
        });
    };
    ReproductorPage.prototype.showAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    ReproductorPage.prototype.updateLike = function () {
        this.api.getReproduccion(this.path + '/updateLike?idvideo=' + this.navParams.data + '&usuario=' + this.usuario).subscribe();
        this.openVideo(this.navParams.data);
    };
    ReproductorPage.prototype.deleteComentario = function (idcom, com) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Seguro que desea eliminar este comentario?',
            message: com,
            buttons: [
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.api.getReproduccion(_this.path + '/deleteComentario?idcomentario=' + idcom).subscribe(function (data) {
                            if (data.json().result == '0') {
                                _this.showAlert('Comentario eliminado exitosamente!');
                                _this.openVideo(_this.navParams.data);
                            }
                            else {
                                _this.showAlert('Hubo un error intentando eliminar su comentario :(. Intentelo de nuevo');
                            }
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    return ReproductorPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
], ReproductorPage.prototype, "nav", void 0);
ReproductorPage = ReproductorPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reproductor',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\reproductor\reproductor.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons start>\n\n            <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="video">\n\n\n\n    <ion-list>\n\n        <ion-item> \n\n            <ion-row>\n\n                <video  width="100%"  src="{{video.url}}" controls  height="250" ></video>\n\n                <h4>\n\n                    {{video.title}} <br>\n\n\n\n                </h4> \n\n            </ion-row>\n\n            <ion-row>\n\n                <p>\n\n                    {{video.visitas}} visitas\n\n\n\n                </p> \n\n            </ion-row>\n\n            <ion-row *ngIf="usuario">\n\n                <ion-col text-center col-6 (click)="updateLike()">\n\n                    <ion-icon name="thumbs-up" color="{{color}}"></ion-icon><br> \n\n                    {{video.likes}}\n\n                </ion-col>\n\n                <ion-col text-center col-6 > \n\n                         <ion-icon name="add"></ion-icon><br>\n\n                    <p style="white-space: normal; color: black">\n\n\n\n                        Añadir a lista\n\n                    </p>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngIf="!usuario">\n\n                <ion-col text-center col-12 >\n\n                    {{video.likes}} &nbsp;\n\n                    <ion-icon name="thumbs-up" color="{{color}}"></ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="{{video.imgowner}}">\n\n            </ion-avatar>\n\n            <h2>{{video.owner}}</h2>\n\n            <p>{{video.subscripciones}} Subscripciones</p>\n\n        </ion-item>\n\n\n\n        <ion-item-divider   color="light">Videos Relacionados</ion-item-divider>\n\n\n\n        <ion-item *ngFor="let relacion of video.relacionados" (click)="openVideo(relacion.id)">\n\n            \n\n                <ion-thumbnail item-start>\n\n                    <img src="{{relacion.urlimg}}">\n\n                </ion-thumbnail>\n\n                <h2>{{relacion.nombre}}</h2>\n\n                <p>{{relacion.canal}}</p>\n\n         \n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n\n\n    <ion-list>\n\n        <ion-item-divider color="light">Comentarios</ion-item-divider>\n\n\n\n        <ion-item *ngFor="let comentario of video.comentarios">\n\n            <ion-avatar item-start>\n\n                <img src="{{comentario.urlimg}}">\n\n            </ion-avatar>\n\n            <div>\n\n\n\n                <h2 style="white-space: normal">{{comentario.nombre}}</h2>\n\n                <p style="white-space: normal; padding-left: 5px; font-size: 11px">\n\n                    {{comentario.comentario}}\n\n                </p>\n\n            </div>\n\n             <ion-icon name="trash" item-end color="danger" *ngIf="comentario.correo==usuario"  (click)="deleteComentario(comentario.idcomentario, comentario.comentario)"></ion-icon>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n        <ion-list-header>\n\n            <h5>Escribir Comentario</h5>\n\n\n\n            <button ion-button clear item-end (click)="sentComment()">\n\n                    <ion-icon name="add"></ion-icon>Enviar\n\n            </button>\n\n        </ion-list-header>\n\n        <ion-item>\n\n            <ion-label fixed>Comentario:</ion-label>\n\n            <ion-input type="text" value="" [value]="comentario" [(ngModel)]="comentario"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\reproductor\reproductor.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]])
], ReproductorPage);

var ReproductorPage_1;
//# sourceMappingURL=reproductor.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(404);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_playlist_edit_list_edit_list__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_playlist_view_list_view_list__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_playlist_create_new_list_create_new_list__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_playlist_add_list_add_list__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_notificaciones_notificaciones__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Modulo_8_channels_channels__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reproductor_reproductor__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_M12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_servicio_servicio__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//Fin Modificado
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
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_playlist_edit_list_edit_list__["a" /* EditListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__["a" /* PopOverListasReproduccionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_playlist_view_list_view_list__["a" /* ViewListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_playlist_add_list_add_list__["a" /* AddListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_playlist_create_new_list_create_new_list__["a" /* CreateNewListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_Modulo_8_channels_channels__["a" /* ChannelsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_reproductor_reproductor__["a" /* ReproductorPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_M12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__["a" /* AccesoConfigContenidoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/configuracion-contenido/configuracion-contenido.module#ConfiguracionContenidoPageModule', name: 'ConfiguracionContenidoPage', segment: 'configuracion-contenido', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/configuracion-notificaciones/configuracion-notificaciones.module#ConfiguracionNotificacionesPageModule', name: 'ConfiguracionNotificacionesPage', segment: 'configuracion-notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M12_ModeracionContenido/acceso-config-contenido/acceso-config-contenido.module#AccesoConfigContenidoPageModule', name: 'AccesoConfigContenidoPage', segment: 'acceso-config-contenido', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/M12_ModeracionContenido/config-contenido/config-contenido.module#ConfigContenidoPageModule', name: 'ConfigContenidoPage', segment: 'config-contenido', priority: 'low', defaultHistory: [] },
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
                    { loadChildren: '../pages/Modulo3/cargar-video/cargar-video.module#CargarVideoPageModule', name: 'CargarVideoPage', segment: 'cargar-video', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/infovideo/infovideo.module#InfovideoPageModule', name: 'InfovideoPage', segment: 'infovideo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/listarmisvideos/listarmisvideos.module#ListarmisvideosPageModule', name: 'ListarmisvideosPage', segment: 'listarmisvideos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/Modulo3/mis-videos/mis-videos.module#MisVideosPageModule', name: 'MisVideosPage', segment: 'mis-videos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notificaciones/notificaciones.module#NotificacionesPageModule', name: 'NotificacionesPage', segment: 'notificaciones', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/add-list/add-list.module#AddListPageModule', name: 'AddListPage', segment: 'add-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/create-new-list/create-new-list.module#CreateNewListPageModule', name: 'CreateNewListPage', segment: 'create-new-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/edit-list/edit-list.module#EditListPageModule', name: 'EditListPage', segment: 'edit-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/playlist.module#PlaylistPageModule', name: 'PlaylistPage', segment: 'playlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/pop-over-listas-reproduccion/pop-over-listas-reproduccion.module#PopOverListasReproduccionPageModule', name: 'PopOverListasReproduccionPage', segment: 'pop-over-listas-reproduccion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/playlist/view-list/view-list.module#ViewListPageModule', name: 'ViewListPage', segment: 'view-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reproductor/reproductor.module#InicioPageModule', name: 'ReproductorPage', segment: 'reproductor', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_playlist_edit_list_edit_list__["a" /* EditListPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_playlist_pop_over_listas_reproduccion_pop_over_listas_reproduccion__["a" /* PopOverListasReproduccionPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_playlist_view_list_view_list__["a" /* ViewListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_playlist_add_list_add_list__["a" /* AddListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_playlist_create_new_list_create_new_list__["a" /* CreateNewListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_notificaciones_notificaciones__["a" /* NotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_Modulo_8_channels_channels__["a" /* ChannelsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_reproductor_reproductor__["a" /* ReproductorPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_M12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__["a" /* AccesoConfigContenidoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_25__providers_servicio_servicio__["a" /* ServicioProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Clase que se encarga de enviar las solicitudes al servidor Rest Java
//En periodo de prueba, no se ha validado que funciona, pero es la estructura basica.




//Direccion del servidor donde esta la BDD
var URL = 'http://192.168.1.116:8080/viucab';
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
    //Metodo para obtener todos los videos
    RestApiService.prototype.getVideos = function (direccion) {
        return this.http.get(URL + '/' + direccion)
            .map(function (data) { return data.json(); })
            .do(function (data) { return console.log("get Videos from json: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    RestApiService.prototype.geta = function (direccion) {
        return this.http
            .get(URL + '/' + direccion);
    };
    RestApiService.prototype.getReproduccion = function (direccion) {
        return this.http
            .get(URL + '/' + direccion);
    };
    /////////////////
    //Metodo DELETE: /direccion
    //Elimina en una direccion
    RestApiService.prototype.deleteSus = function (direccion) {
        return this.http
            .get(URL + '/' + direccion)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    RestApiService.prototype.m12prueba = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("http://localhost:8080/viucab/Moderacion/prueba")
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error); // Error getting the data
            });
        });
    };
    return RestApiService;
}());
RestApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], RestApiService);

//# sourceMappingURL=rest-api.service.js.map

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 227,
	"./af.js": 227,
	"./ar": 228,
	"./ar-dz": 229,
	"./ar-dz.js": 229,
	"./ar-kw": 230,
	"./ar-kw.js": 230,
	"./ar-ly": 231,
	"./ar-ly.js": 231,
	"./ar-ma": 232,
	"./ar-ma.js": 232,
	"./ar-sa": 233,
	"./ar-sa.js": 233,
	"./ar-tn": 234,
	"./ar-tn.js": 234,
	"./ar.js": 228,
	"./az": 235,
	"./az.js": 235,
	"./be": 236,
	"./be.js": 236,
	"./bg": 237,
	"./bg.js": 237,
	"./bn": 238,
	"./bn.js": 238,
	"./bo": 239,
	"./bo.js": 239,
	"./br": 240,
	"./br.js": 240,
	"./bs": 241,
	"./bs.js": 241,
	"./ca": 242,
	"./ca.js": 242,
	"./cs": 243,
	"./cs.js": 243,
	"./cv": 244,
	"./cv.js": 244,
	"./cy": 245,
	"./cy.js": 245,
	"./da": 246,
	"./da.js": 246,
	"./de": 247,
	"./de-at": 248,
	"./de-at.js": 248,
	"./de-ch": 249,
	"./de-ch.js": 249,
	"./de.js": 247,
	"./dv": 250,
	"./dv.js": 250,
	"./el": 251,
	"./el.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-nz": 256,
	"./en-nz.js": 256,
	"./eo": 257,
	"./eo.js": 257,
	"./es": 258,
	"./es-do": 259,
	"./es-do.js": 259,
	"./es.js": 258,
	"./et": 260,
	"./et.js": 260,
	"./eu": 261,
	"./eu.js": 261,
	"./fa": 262,
	"./fa.js": 262,
	"./fi": 263,
	"./fi.js": 263,
	"./fo": 264,
	"./fo.js": 264,
	"./fr": 265,
	"./fr-ca": 266,
	"./fr-ca.js": 266,
	"./fr-ch": 267,
	"./fr-ch.js": 267,
	"./fr.js": 265,
	"./fy": 268,
	"./fy.js": 268,
	"./gd": 269,
	"./gd.js": 269,
	"./gl": 270,
	"./gl.js": 270,
	"./gom-latn": 271,
	"./gom-latn.js": 271,
	"./he": 272,
	"./he.js": 272,
	"./hi": 273,
	"./hi.js": 273,
	"./hr": 274,
	"./hr.js": 274,
	"./hu": 275,
	"./hu.js": 275,
	"./hy-am": 276,
	"./hy-am.js": 276,
	"./id": 277,
	"./id.js": 277,
	"./is": 278,
	"./is.js": 278,
	"./it": 279,
	"./it.js": 279,
	"./ja": 280,
	"./ja.js": 280,
	"./jv": 281,
	"./jv.js": 281,
	"./ka": 282,
	"./ka.js": 282,
	"./kk": 283,
	"./kk.js": 283,
	"./km": 284,
	"./km.js": 284,
	"./kn": 285,
	"./kn.js": 285,
	"./ko": 286,
	"./ko.js": 286,
	"./ky": 287,
	"./ky.js": 287,
	"./lb": 288,
	"./lb.js": 288,
	"./lo": 289,
	"./lo.js": 289,
	"./lt": 290,
	"./lt.js": 290,
	"./lv": 291,
	"./lv.js": 291,
	"./me": 292,
	"./me.js": 292,
	"./mi": 293,
	"./mi.js": 293,
	"./mk": 294,
	"./mk.js": 294,
	"./ml": 295,
	"./ml.js": 295,
	"./mr": 296,
	"./mr.js": 296,
	"./ms": 297,
	"./ms-my": 298,
	"./ms-my.js": 298,
	"./ms.js": 297,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./uk": 332,
	"./uk.js": 332,
	"./ur": 333,
	"./ur.js": 333,
	"./uz": 334,
	"./uz-latn": 335,
	"./uz-latn.js": 335,
	"./uz.js": 334,
	"./vi": 336,
	"./vi.js": 336,
	"./x-pseudo": 337,
	"./x-pseudo.js": 337,
	"./yo": 338,
	"./yo.js": 338,
	"./zh-cn": 339,
	"./zh-cn.js": 339,
	"./zh-hk": 340,
	"./zh-hk.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
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
webpackContext.id = 722;

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(382);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__ = __webpack_require__(45);
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
    function EditListPage(navCtrl, navParams, api, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.Lista = this.navParams.get('ListaEdit');
        console.log(this.Lista);
        this.nombreLista = this.Lista.nombre;
        this.descripcionLista = this.Lista.descripcion;
    }
    EditListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditListPage');
    };
    /*
      presentAlert(title,subTitle) {
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle
        });
        alert.present();
      }*/
    EditListPage.prototype.guardarLista = function () {
        var _this = this;
        this.api.geta('playlist/editPlaylist?lis_rep_id=' + this.Lista.idLista + '&lis_rep_nombre=' + this.nombreLista +
            '&lis_rep_descripcion=' + this.descripcionLista + '&list_rep_img=' + this.Lista.urlImg).subscribe(function (data) {
            console.log(data.json());
            if (data.json() == true) {
                // this.presentAlert("Exito","Lista editada");
                _this.events.publish('reloadPlaylists');
                _this.navCtrl.pop();
            }
        }, function (error) {
            console.error(error);
        });
    };
    return EditListPage;
}());
EditListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit-list',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\edit-list\edit-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n        <ion-row>\n\n            <ion-col col-10 class="nopadding">\n\n                Editar {{Lista.nombre}}\n\n   \n\n            </ion-col>\n\n            <ion-col col-2 class="nopadding" align="right">\n\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nombre de la Lista</ion-label>\n\n      <ion-input type="text" [(ngModel)]="nombreLista"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Descripcion</ion-label>\n\n      <ion-textarea [(ngModel)]="descripcionLista"></ion-textarea>\n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n\n\n\n\n      <button (click)="guardarLista()" class="botonGuardarEditado" ion-button color="light">GUARDAR</button>\n\n\n\n  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\playlist\edit-list\edit-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], EditListPage);

//# sourceMappingURL=edit-list.js.map

/***/ })

},[399]);
//# sourceMappingURL=main.js.map