webpackJsonp([4],{

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarmisvideosPageModule", function() { return ListarmisvideosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listarmisvideos__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListarmisvideosPageModule = (function () {
    function ListarmisvideosPageModule() {
    }
    return ListarmisvideosPageModule;
}());
ListarmisvideosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__listarmisvideos__["a" /* ListarmisvideosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listarmisvideos__["a" /* ListarmisvideosPage */]),
        ],
    })
], ListarmisvideosPageModule);

//# sourceMappingURL=listarmisvideos.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarmisvideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(385);
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
 * Generated class for the ListarmisvideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListarmisvideosPage = (function () {
    function ListarmisvideosPage(navCtrl, toastCtrl, navParams, http, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    ListarmisvideosPage.prototype.ngOnInit = function () {
        this.initializeItems();
    };
    ListarmisvideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListarmisvideosPage');
    };
    ListarmisvideosPage.prototype.initializeItems = function () {
        {
            this.items = [{
                    id: '0',
                    nombre: 'Marty',
                    suscritos: '133',
                    color: this.color,
                    estado: 'Suscrito',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
                },
                {
                    id: '1',
                    nombre: 'Martin',
                    suscritos: '133',
                    color: this.color,
                    estado: 'Suscrito',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK0JpMddFw6P1hVBdjiQQuw7MpFnGza014TUmxfGfy4B9uYpa'
                }];
        }
    };
    ListarmisvideosPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: this.idVideo1,
                    role: 'destructive',
                    handler: function () {
                        //Llamada al ws para eliminar el videin
                        console.log(_this.idVideo1 + ' clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ListarmisvideosPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 15000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return ListarmisvideosPage;
}());
ListarmisvideosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-listarmisvideos',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo3\listarmisvideos\listarmisvideos.html"*/'<!--\n\n  Generated template for the ListarmisvideosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="morado2">\n\n    <ion-title>Mis Videos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngFor="let item of items; let i = index">\n\n  \n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/marty-avatar.png">\n\n      </ion-avatar>\n\n      \n\n      <ion-input (ngModel)="idVideo" value={{i}}></ion-input>\n\n      <h2>{{item.usuario}}</h2>\n\n      <!--Nombre de usuario-->\n\n      <p>{{item.fecha}}</p>\n\n      <!--fecha-->\n\n  \n\n    </ion-item>\n\n  \n\n    <img src="assets/imgs/advance-card-bttf.png">\n\n  \n\n    <ion-card-content>\n\n      <p>{{item.nombre}}</p>\n\n      <!--Titulo del video-->\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="eye"></ion-icon>\n\n          <div>{{item.visitas}} visita/as</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col align="right">\n\n        <button ion-button icon-only clear small (click)="presentActionSheet()">\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo3\listarmisvideos\listarmisvideos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ListarmisvideosPage);

//# sourceMappingURL=listarmisvideos.js.map

/***/ })

});
//# sourceMappingURL=4.js.map