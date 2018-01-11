webpackJsonp([5],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfovideoPageModule", function() { return InfovideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infovideo__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfovideoPageModule = (function () {
    function InfovideoPageModule() {
    }
    return InfovideoPageModule;
}());
InfovideoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__infovideo__["a" /* InfovideoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infovideo__["a" /* InfovideoPage */]),
        ],
    })
], InfovideoPageModule);

//# sourceMappingURL=infovideo.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfovideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(388);
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
 * Generated class for the InfovideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfovideoPage = (function () {
    function InfovideoPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.image = null;
    }
    InfovideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfovideoPage');
    };
    InfovideoPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    return InfovideoPage;
}());
InfovideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-infovideo',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo3\infovideo\infovideo.html"*/'<!--\n\n  Generated template for the InfovideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="morado2">\n\n    <ion-title>infovideo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-img width="100%" height="57%" src="https://img-9gag-fun.9cache.com/photo/aKDy7Bg_700b_v1.jpg"></ion-img>\n\n  <ion-list>\n\n    \n\n      <ion-item>\n\n        <ion-label stacked>Titulo</ion-label>\n\n        <ion-input type="text" placeholder="Vaquero"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label stacked>Descripcion</ion-label>\n\n        <ion-input type="text" placeholder="Este es un video blabla"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n          <ion-label stacked>Tags</ion-label>\n\n          <ion-input type="text" placeholder="#vaquero #loco"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n          <ion-label>Categoria</ion-label>\n\n          <ion-select [(ngModel)]="categories1" multiple="false">\n\n            <ion-option value="c1">Categoria 1</ion-option>\n\n            <ion-option value="c2">Categoria 2</ion-option>\n\n            <ion-option value="c3">Categoria 3</ion-option>\n\n            <ion-option value="c4">Categoria 4</ion-option>\n\n            <ion-option value="c5">Categoria 5</ion-option>\n\n            <ion-option value="c6">Categoria 6</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block (click)="getPicture()">Toma una foto</button>\n\n    <img [src]="image" *ngIf="image" />\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo3\infovideo\infovideo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
], InfovideoPage);

//# sourceMappingURL=infovideo.js.map

/***/ })

});
//# sourceMappingURL=5.js.map