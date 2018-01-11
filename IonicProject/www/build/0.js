webpackJsonp([0],{

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

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

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modulo3_listarmisvideos_listarmisvideos__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notificaciones_notificaciones__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuracion_notificaciones_configuracion_notificaciones__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__M12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Modulo_8_channels_channels__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Modificado por Modulo 10


//Fin Modificado por Modulo 10


var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Inicio', pageName: 'TabsPage', tabComponent: 'InicioPage', index: 0, icon: 'home' },
            //Aqui van los links de las paginas principales de los demas grupos
            //{ title: 'Configuración de usuario', pageName: 'UsuarioPage', icon: 'contact' },
            { title: 'Mis videos', pageName: 'ListarmisvideosPage', icon: 'play' },
            { title: 'Mis listas', pageName: 'PlaylistPage', icon: 'star-half' },
            { title: 'Estadísticas', pageName: 'EstadisticaPage', icon: 'stats' }
        ];
        this.MyChannelSubmenu = false;
        this.SettingsSubmenu = false;
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'secondary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'secondary';
        }
        return;
    };
    MenuPage.prototype.MyChannelItemHandler = function () {
        this.MyChannelSubmenu = !this.MyChannelSubmenu;
        this.SettingsSubmenu = false;
    };
    MenuPage.prototype.SettingsItemHandler = function () {
        this.SettingsSubmenu = !this.SettingsSubmenu;
        this.MyChannelSubmenu = false;
    };
    //Modificado por Modulo 3
    MenuPage.prototype.openMisVideos = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__Modulo3_listarmisvideos_listarmisvideos__["a" /* ListarmisvideosPage */]);
        this.MyChannelItemHandler();
    };
    //Fin modificado por Modulo 3
    //Modificado por Módulo 12 (06/12/2017)
    MenuPage.prototype.openAccesoModContenido = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__M12_ModeracionContenido_acceso_config_contenido_acceso_config_contenido__["a" /* AccesoConfigContenidoPage */]);
        this.MyChannelItemHandler();
    };
    //Fin de Modificación por Módulo 12 (06/12/2017)
    //Modificado por Modulo 10
    MenuPage.prototype.openNotificaciones = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__notificaciones_notificaciones__["a" /* NotificacionesPage */]);
    };
    MenuPage.prototype.openConNotificaciones = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__configuracion_notificaciones_configuracion_notificaciones__["a" /* ConfiguracionNotificacionesPage */]);
    };
    //Fin Modificado por Modulo 10
    MenuPage.prototype.openSuscripciones = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__Modulo_8_channels_channels__["a" /* ChannelsPage */]); // llama a la pagina
        // this.nav.setRoot(pagina);// llama a la pagina
        this.MyChannelItemHandler(); //oculta el submenu
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo 2\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n      <ion-navbar color="morado2">\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n      <ion-list id="sidenav">\n\n          <!-- other menu items will go here -->\n\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" >\n\n                <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n                {{ p.title }}\n\n            </button>\n\n            <button ion-item (click)="MyChannelItemHandler()"> <ion-icon item-start name="contact" color="isActive(this)"></ion-icon> Mi canal</button>\n\n            <button ion-item menuClose submenu-item *ngIf="MyChannelSubmenu" (click)="openMisVideos()">Mis Videos</button>\n\n            <!--> Activacion de la pagina de suscripciones mediante el boton , abriendo la pagina de Channels, @Autor: Modulo 8, sabado 25/nov/2017</-->\n\n            <button ion-item menuClose submenu-item *ngIf="MyChannelSubmenu" (click)="openSuscripciones()">Suscripciones</button>\n\n            <!-- VERSION ORIGINAL <ion-item submenu-item *ngIf="MyChannelSubmenu" (click)="MyChannelItemHandler()">Suscripciones</ion-item><-->\n\n            <button ion-item submenu-item menuClose *ngIf="MyChannelSubmenu" (click)="openNotificaciones()">Notificaciones</button>\n\n            <button ion-item (click)="SettingsItemHandler()"> <ion-icon item-start name="settings"></ion-icon> Configuración de usuario</button>\n\n            <ion-item submenu-item *ngIf="SettingsSubmenu" (click)="SettingsItemHandler()">Configuración de perfil de usuario</ion-item>\n\n            <button ion-item submenu-item menuClose *ngIf="SettingsSubmenu" (click)="openAccesoModContenido()">Configuración de filtros</button> \n\n            <button ion-item submenu-item menuClose *ngIf="SettingsSubmenu" (click)="openConNotificaciones()">Configuración de Notificaciones</button>\n\n          <!-- other menu items will go here -->\n\n          </ion-list>\n\n    <ion-list>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>\n\n'/*ion-inline-end:"C:\Users\jdavi\Desktop\RepoFinal\IonicProject\src\pages\Modulo 2\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=0.js.map