webpackJsonp([8],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendenciasPageModule", function() { return TendenciasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tendencias__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TendenciasPageModule = (function () {
    function TendenciasPageModule() {
    }
    return TendenciasPageModule;
}());
TendenciasPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tendencias__["a" /* TendenciasPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tendencias__["a" /* TendenciasPage */]),
        ],
    })
], TendenciasPageModule);

//# sourceMappingURL=tendencias.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TendenciasPage; });
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
 * Generated class for the TendenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TendenciasPage = (function () {
    function TendenciasPage(navCtrl, navParams, alertCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.data = [{
                id: 1,
                nombre: 'Kryptonite: Superman odia esto',
                usuario: 'Barbara Fernández',
                fecha: 'Noviembre 5, 2017',
                imagen: 'assets/imgs/kryptonite.png',
                visitas: 8
            }, {
                id: 2,
                nombre: 'Cantando sobre piedras',
                usuario: 'José Dos Ramos',
                fecha: 'Noviembre 6, 2017',
                imagen: 'assets/imgs/likeastone.png',
                visitas: 8
            }, {
                id: 3,
                nombre: 'Hombre con pelo largo ',
                usuario: 'María Estefania Pérez',
                fecha: 'Noviembre 7, 2017',
                imagen: 'assets/imgs/reptilia.png',
                visitas: 8
            }, {
                id: 4,
                nombre: 'Ondas de sonido',
                usuario: 'Barbara Fernández',
                fecha: 'Noviembre 8, 2017',
                imagen: 'assets/imgs/doiwannaknow.png',
                visitas: 8
            }, {
                id: 5,
                nombre: 'Cazador cantando',
                usuario: 'José Dos Ramos',
                fecha: 'Noviembre 9, 2017',
                imagen: 'assets/imgs/africa.png',
                visitas: 8
            }, {
                id: 6,
                nombre: 'Hombre con pasamontañas',
                usuario: 'María Estefania Pérez',
                fecha: 'Noviembre 10, 2017',
                imagen: 'assets/imgs/shapeofyou.png',
                visitas: 8
            }];
        //data: any[];
        this.buscarQuery = '';
        this.errorMessage = '';
        this.initializeItems();
    }
    //Metodo para llenar el listado de videos
    TendenciasPage.prototype.ngOnInit = function () {
        /*this.subscription = this.api.getVideos('Home/MasVistos')
            .subscribe(data => this.data = data,
            error => this.errorMessage = error);
        this.errorMessage = '';*/
    };
    TendenciasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TendenciasPage');
    };
    TendenciasPage.prototype.initializeItems = function () {
        {
            this.items = [{
                    nombre: 'Marty',
                    suscritos: '133',
                    color: this.color,
                    estado: 'Suscrito',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
                },
                {
                    nombre: 'Martin',
                    suscritos: '133',
                    color: this.color,
                    estado: 'Suscrito',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
                }];
        }
    };
    TendenciasPage.prototype.getItems = function (ev) {
        //Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val + " value");
        if (val === undefined) {
            console.log("valor vacio");
            this.data = [{
                    id: 1,
                    nombre: 'Kryptonite: Superman odia esto',
                    usuario: 'Barbara Fernández',
                    fecha: 'Noviembre 5, 2017',
                    imagen: 'assets/imgs/kryptonite.png',
                    visitas: 8
                }, {
                    id: 2,
                    nombre: 'Cantando sobre piedras',
                    usuario: 'José Dos Ramos',
                    fecha: 'Noviembre 6, 2017',
                    imagen: 'assets/imgs/likeastone.png',
                    visitas: 8
                }, {
                    id: 3,
                    nombre: 'Hombre con pelo largo ',
                    usuario: 'María Estefania Pérez',
                    fecha: 'Noviembre 7, 2017',
                    imagen: 'assets/imgs/reptilia.png',
                    visitas: 8
                }, {
                    id: 4,
                    nombre: 'Ondas de sonido',
                    usuario: 'Barbara Fernández',
                    fecha: 'Noviembre 8, 2017',
                    imagen: 'assets/imgs/doiwannaknow.png',
                    visitas: 8
                }, {
                    id: 5,
                    nombre: 'Cazador cantando',
                    usuario: 'José Dos Ramos',
                    fecha: 'Noviembre 9, 2017',
                    imagen: 'assets/imgs/africa.png',
                    visitas: 8
                }, {
                    id: 6,
                    nombre: 'Hombre con pasamontañas',
                    usuario: 'María Estefania Pérez',
                    fecha: 'Noviembre 10, 2017',
                    imagen: 'assets/imgs/shapeofyou.png',
                    visitas: 8
                }];
            //this.subscription = this.api.getVideos('Home/cargarTodo')              //LLAMADA DE PRUEBAS
            //                    .subscribe(data => this.data = data,
            //                    error => this.errorMessage = error);
            //                    this.errorMessage = '';
        }
        else if (val != '') {
            this.data = [{
                    id: 1,
                    nombre: '3 Doors Down - Kryptonite',
                    usuario: 'Barbara Fernández',
                    fecha: 'Noviembre 5, 2017',
                    imagen: 'assets/imgs/kryptonite.png',
                    visitas: 8
                }];
            //this.subscription = this.api.getVideos('Home/cargarTodo')              //LLAMADA DE PRUEBAS
            //                    .subscribe(data => this.data = data,
            //                    error => this.errorMessage = error);
            //                    this.errorMessage = '';
        }
        else if ((val == '')) {
            console.log("valor vacio");
            this.data = [{
                    id: 1,
                    nombre: 'Kryptonite: Superman odia esto',
                    usuario: 'Barbara Fernández',
                    fecha: 'Noviembre 5, 2017',
                    imagen: 'assets/imgs/kryptonite.png',
                    visitas: 8
                }, {
                    id: 2,
                    nombre: 'Cantando sobre piedras',
                    usuario: 'José Dos Ramos',
                    fecha: 'Noviembre 6, 2017',
                    imagen: 'assets/imgs/likeastone.png',
                    visitas: 8
                }, {
                    id: 3,
                    nombre: 'Hombre con pelo largo ',
                    usuario: 'María Estefania Pérez',
                    fecha: 'Noviembre 7, 2017',
                    imagen: 'assets/imgs/reptilia.png',
                    visitas: 8
                }, {
                    id: 4,
                    nombre: 'Ondas de sonido',
                    usuario: 'Barbara Fernández',
                    fecha: 'Noviembre 8, 2017',
                    imagen: 'assets/imgs/doiwannaknow.png',
                    visitas: 8
                }, {
                    id: 5,
                    nombre: 'Cazador cantando',
                    usuario: 'José Dos Ramos',
                    fecha: 'Noviembre 9, 2017',
                    imagen: 'assets/imgs/africa.png',
                    visitas: 8
                }, {
                    id: 6,
                    nombre: 'Hombre con pasamontañas',
                    usuario: 'María Estefania Pérez',
                    fecha: 'Noviembre 10, 2017',
                    imagen: 'assets/imgs/shapeofyou.png',
                    visitas: 8
                }];
            //this.subscription = this.api.getVideos('Home/cargarTodo')              //LLAMADA DE PRUEBAS
            //                    .subscribe(data => this.data = data,
            //                    error => this.errorMessage = error);
            //                    this.errorMessage = '';
        }
    };
    return TendenciasPage;
}());
TendenciasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tendencias',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo 2\tendencias\tendencias.html"*/'<div ng-app="myApp" ng-controller="myCtrl" style="height:inherit"> \n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n      <ion-title>\n\n        <ion-icon name="logo-youtube"> ViUCAB</ion-icon>\n\n        \n\n        <ion-buttons class= \'centrado-porcentual\'  >\n\n            <button  >\n\n          <ion-icon name="videocam" color="primary"></ion-icon>   \n\n        </button>\n\n        </ion-buttons>   \n\n      \n\n      </ion-title>\n\n      \n\n    </ion-navbar>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>  \n\n  </ion-header>\n\n   \n\n  <ion-content padding>\n\n    \n\n      <ion-card *ngFor="let item of data">\n\n         \n\n          <ion-item> \n\n            <ion-buttons class= \'centrado-porcentual2\'  >\n\n                <button class="boton">\n\n              <ion-icon name="add" ></ion-icon>   \n\n            </button>\n\n            </ion-buttons>   \n\n            <ion-avatar item-start>\n\n            <img src="assets/imgs/defaultavatar.png">\n\n            </ion-avatar>\n\n    \n\n            <h2>{{item.usuario}}</h2> <!--Nombre de usuario-->\n\n            <p>{{item.fecha}}</p> <!--fecha-->\n\n            \n\n          </ion-item>\n\n        \n\n          <img src={{item.imagen}}>\n\n        \n\n          <ion-card-content>\n\n            <p style="font-size:large">{{item.nombre}}</p> <!--Titulo del video-->\n\n          </ion-card-content>\n\n        \n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button icon-left clear small>\n\n                <ion-icon name="eye"></ion-icon>\n\n                <div>{{item.visitas}} vista/s</div>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        \n\n        </ion-card>\n\n      \n\n      \n\n    \n\n         \n\n    </ion-content>\n\n    \n\n</div>'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo 2\tendencias\tendencias.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__app_rest_api_service__["a" /* RestApiService */]])
], TendenciasPage);

//# sourceMappingURL=tendencias.js.map

/***/ })

});
//# sourceMappingURL=8.js.map