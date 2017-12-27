webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DATABASE_NAME = 'db.data';
var ModifierPage = (function () {
    function ModifierPage(navCtrl, navParams, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.jeux = [];
        this.createDataBaseFile();
        this.id1 = navParams.get("id");
    }
    ModifierPage.prototype.createDataBaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_NAME,
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            console.log("DB Creer");
            _this.upJeux(_this.id1);
        })
            .catch(function (e) { return console.log(e); });
    };
    ModifierPage.prototype.upJeux = function (id) {
        var _this = this;
        this.jeux = [];
        this.db.executeSql('SELECT * FROM `Jeux` WHERE id = ?', [id])
            .then(function (data) {
            if (data == null) {
                return;
            }
            console.log(data);
            if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.jeux.push({ id: data.rows.item(i).id, Nom: data.rows.item(i).Nom, Categorie: data.rows.item(i).Categorie, Editeur: data.rows.item(i).Editeur, Image: data.rows.item(i).Image, Date: data.rows.item(i).Date, Note: data.rows.item(i).Note, Prix: data.rows.item(i).Prix });
                    }
                }
            }
        });
    };
    ModifierPage.prototype.updateJeux = function () {
        var _this = this;
        this.db.executeSql('UPDATE `Jeux` SET Nom = "' + this.Nom + '", Categorie = "' + this.Categorie + '", Editeur = "' + this.Editeur + '", Image = "' + this.Image + '", Date = "' + this.Date + '",  Note = ' + this.Note + ', Prix = ' + this.Prix + ' WHERE id = ' + this.id1, {})
            .then(function () {
            console.log('Jeu Updated');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        })
            .catch(function (e) { return console.log(e); });
    };
    ModifierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifier',template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\pages\modifier\modifier.html"*/`<ion-header>\n\n    <ion-navbar color="light">\n\n      <ion-title>Modifier un jeu</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <h1>Permet de modifier les données de façon structurées</h1>\n\n    <ion-list>\n\n      <div *ngFor="let jeu of jeux">\n\n        <ion-item>\n\n          <ion-label fixed>Nom</ion-label>\n\n          <ion-input type="text" [(ngModel)]="Nom" value="{{jeu.Nom}}"></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label stacked>Categorie</ion-label>\n\n          <ion-input type="text" [(ngModel)]="Categorie" value="{{jeu.Categorie}}"></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-label stacked>Editeur</ion-label>\n\n          <ion-input type="text" [(ngModel)]="Editeur" value="{{jeu.Editeur}}"></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label stacked>Image</ion-label>\n\n          <ion-input [(ngModel)]="Image" type="text" value="{{jeu.Image}}"></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label stacked>Date</ion-label>\n\n          <ion-input [(ngModel)]="Date" type="text" value="{{jeu.Date}}"></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label stacked>Note</ion-label>\n\n          <ion-input [(ngModel)]="Note" type="text" value="{{jeu.Note}}"></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-label stacked>Prix</ion-label>\n\n          <ion-input [(ngModel)]="Prix" type="text" value="{{jeu.Prix}}"></ion-input>\n\n        </ion-item>\n\n\n\n      </div>\n\n    </ion-list>\n\n  \n\n    <button ion-button full color="light" (tap)="updateJeux()">Update my game !!</button>\n\n\n\n  </ion-content>`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\pages\modifier\modifier.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], ModifierPage);
    return ModifierPage;
}());

//# sourceMappingURL=modifier.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajout_ajout__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panier_panier__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__ajout_ajout__["a" /* AjoutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__panier_panier__["a" /* PanierPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\pages\tabs\tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Ajout" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Panier" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DATABASE_NAME = 'db.data';
var AjoutPage = (function () {
    function AjoutPage(navCtrl, sqlite, toastCtrl) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.jeux = [];
        this.createDataBaseFile();
    }
    AjoutPage.prototype.createDataBaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_NAME,
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            console.log("DB Creer");
            _this.createTable();
        })
            .catch(function (e) { return console.log(e); });
    };
    AjoutPage.prototype.createTable = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Jeux` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `Nom` TEXT, `Categorie` INTEGER, `Editeur` TEXT, `Image` TEXT, `Date` TEXT, `Note` INTEGER, `Prix` INTEGER, `Console` INTEGER NOT NULL, `Vente` INTEGER, `Panier` INTEGER, FOREIGN KEY(`Categorie`) REFERENCES `Categorie`(`idCategorie`) )', {})
            .then(function () {
            console.log("Table JEUX Creee");
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS `Categorie` ( `idCategorie` INTEGER NOT NULL, `nomCategorie` TEXT, PRIMARY KEY(`idCategorie`) )', {})
                .then(function () { return console.log('Table Categorie Creee'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    AjoutPage.prototype.addJeux = function () {
        var _this = this;
        console.log('INSERT INTO `Jeux` (`Nom`, `Categorie`, `Editeur`, `Image`, `Date`, `Note`, `Prix`,`Console`, `Vente`, `Panier`) VALUES ("' + this.Nom + '","' + this.Categorie + '", "' + this.Editeur + '", "' + this.Image + '", "' + this.Date + '", "' + this.Note + '", "' + this.Prix + '",1,0,0)');
        this.db.executeSql('INSERT INTO `Jeux` (`Nom`, `Categorie`, `Editeur`, `Image`, `Date`, `Note`, `Prix`,`Console`, `Vente`, `Panier`) VALUES ("' + this.Nom + '","' + this.Categorie + '", "' + this.Editeur + '", "' + this.Image + '", "' + this.Date + '", "' + this.Note + '", "' + this.Prix + '",1,0,0)', {})
            .then(function () {
            console.log('Jeux insere');
            _this.ajoutToast();
        })
            .catch(function (e) { return console.log(e); });
    };
    AjoutPage.prototype.ajoutToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Votre Jeu a été ajouté à la BDD',
            duration: 5000,
            position: 'top',
            cssClass: "toast_color"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AjoutPage.prototype.retrieveJeux = function () {
        var _this = this;
        this.jeux = [];
        this.db.executeSql('SELECT * FROM `Jeux`', {})
            .then(function (data) {
            if (data == null) {
                return;
            }
            if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.jeux.push(data.rows.item(i).Nom);
                    }
                }
            }
        });
    };
    AjoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajout',template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\pages\ajout\ajout.html"*/`<ion-header>\n    <ion-navbar color="light">\n      <ion-title>\n        Ajouter\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <h2>Ajouter un Jeu</h2>\n    <div class="hr"> </div><br>\n  \n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Nom</ion-label>\n        <ion-input type="text" [(ngModel)]="Nom"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label fixed>Categorie</ion-label>\n        <ion-input [(ngModel)]="Categorie" type="text"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label fixed>Editeur</ion-label>\n        <ion-input [(ngModel)]="Editeur" type="text"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label fixed>Image</ion-label>\n        <ion-input [(ngModel)]="Image" type="text"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label fixed>Date</ion-label>\n        <ion-input [(ngModel)]="Date" type="text"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label fixed>Note</ion-label>\n        <ion-input [(ngModel)]="Note" type="text"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label fixed>Prix</ion-label>\n        <ion-input [(ngModel)]="Prix" type="text"></ion-input>\n      </ion-item>\n  \n    </ion-list>\n  \n    <button ion-button full color="light" (tap)="addJeux()">Save my game !!</button>\n  \n  </ion-content>`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\pages\ajout\ajout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], AjoutPage);
    return AjoutPage;
}());

//# sourceMappingURL=ajout.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATABASE_NAME = 'db.data';
var PanierPage = (function () {
    function PanierPage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.jeux = [];
        this.createDataBaseFile();
    }
    PanierPage.prototype.createDataBaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_NAME,
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            console.log("DB Creer");
            _this.PanierJeux();
        })
            .catch(function (e) { return console.log(e); });
    };
    PanierPage.prototype.createTable = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Jeux` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `Nom` TEXT, `Categorie` INTEGER, `Editeur` TEXT, `Image` TEXT, `Date` TEXT, `Note` INTEGER, `Prix` INTEGER, `Console` INTEGER NOT NULL, `Vente` INTEGER, `Panier` INTEGER, FOREIGN KEY(`Categorie`) REFERENCES `Categorie`(`idCategorie`) )', {})
            .then(function () {
            console.log("Table JEUX Creee");
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS `Categorie` ( `idCategorie` INTEGER NOT NULL, `nomCategorie` TEXT, PRIMARY KEY(`idCategorie`) )', {})
                .then(function () { return _this.PanierJeux(); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    PanierPage.prototype.PanierJeux = function () {
        var _this = this;
        this.jeux = [];
        this.db.executeSql('SELECT * FROM `Jeux` WHERE Panier = 1', {})
            .then(function (data) {
            if (data == null) {
                return;
            }
            if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.jeux.push({ id: data.rows.item(i).id, Nom: data.rows.item(i).Nom, Categorie: data.rows.item(i).Categorie, Editeur: data.rows.item(i).Editeur, Image: data.rows.item(i).Image, Prix: data.rows.item(i).Prix });
                    }
                }
            }
        });
    };
    PanierPage.prototype.deletePanier = function (id) {
        var _this = this;
        console.log(id);
        this.db.executeSql('UPDATE `Jeux` SET Panier = 0 WHERE id=?', [id])
            .then(function (res) {
            console.log(res);
            _this.PanierJeux();
        })
            .catch(function (e) { return console.log(e); });
    };
    PanierPage.prototype.ionViewWillEnter = function () {
        this.PanierJeux();
    };
    PanierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-panier',template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\pages\panier\panier.html"*/`<ion-header>\n\n  <ion-navbar color="light">\n\n    <ion-title>\n\n      Panier\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngFor="let jeu of jeux" >\n\n    <ion-card>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <img class="images" src="assets/{{jeu.Image}}"/>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <div class="card-title"><b>{{ jeu.Nom }}</b></div>\n\n              <div class="card-stitle"><b>{{ jeu.Categorie }}</b></div>\n\n              <div class="card-stitles"><u>Prix</u><b> : {{ jeu.Prix }} € </b></div>\n\n              <div class="open">\n\n                <button ion-button full color="light" (click)="openFichePage(jeu.id)">\n\n                  <ion-icon name="book"></ion-icon>                 \n\n                </button>\n\n                <button ion-button full color="danger" (click)="deletePanier(jeu.id)">\n\n                  <ion-icon name="trash"></ion-icon>                 \n\n                </button>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\pages\panier\panier.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], PanierPage);
    return PanierPage;
}());

//# sourceMappingURL=panier.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifier_modifier__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DATABASE_NAME = 'db.data';
var FichePage = (function () {
    function FichePage(navCtrl, toastCtrl, navParams, sqlite) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.jeux = [];
        this.createDataBaseFile();
        this.id1 = navParams.get("id");
    }
    FichePage.prototype.createDataBaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_NAME,
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            console.log("DB Creer");
            _this.afficheUnJeux(_this.id1);
        })
            .catch(function (e) { return console.log(e); });
    };
    FichePage.prototype.afficheUnJeux = function (id) {
        var _this = this;
        this.jeux = [];
        this.db.executeSql('SELECT * FROM `Jeux` WHERE id = ?', [id])
            .then(function (data) {
            if (data == null) {
                return;
            }
            console.log(data);
            if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.jeux.push({ id: data.rows.item(i).id, Nom: data.rows.item(i).Nom, Categorie: data.rows.item(i).Categorie, Editeur: data.rows.item(i).Editeur, Image: data.rows.item(i).Image, Date: data.rows.item(i).Date, Note: data.rows.item(i).Note, Prix: data.rows.item(i).Prix });
                    }
                }
            }
        });
    };
    FichePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Votre Jeu a été ajouté à votre Panier',
            duration: 5000,
            position: 'top',
            cssClass: "toast_color"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FichePage.prototype.openModifierPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modifier_modifier__["a" /* ModifierPage */], { id: id });
    };
    FichePage.prototype.ajoutPanier = function (id) {
        var _this = this;
        this.db.executeSql('UPDATE `Jeux` SET Panier = 1 WHERE id = ' + id, {})
            .then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            _this.presentToast();
        })
            .catch(function (e) { return console.log(e); });
    };
    FichePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fiche',template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\pages\fiche\fiche.html"*/`<ion-header>\n  <ion-navbar color="light">\n    <ion-title>Fiche</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngFor="let jeu of jeux" >\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3></ion-col>\n          <ion-col col-6>\n            <img class="images" src="assets/{{jeu.Image}}"/>\n          </ion-col>\n          <ion-col col-3></ion-col>\n        </ion-row><br>\n        <ion-row><br>\n          <ion-col col-3></ion-col>\n          <ion-col col-6>\n            <div class="card-title"><b> {{ jeu.Nom }}</b></div><br><hr>\n            <div class="card-stitle"><u>Categorie</u><b> : {{ jeu.Categorie }}</b></div><br>\n            <div class="card-stitle"><u>Editeur</u><b> : {{ jeu.Editeur }}</b></div><br>\n            <div class="card-stitle"><u>Date</u><b> : {{ jeu.Date }}</b></div><br>\n            <div class="card-stitle"><u>Note</u><b> : {{ jeu.Note }} / 20 </b></div><br>\n            <div class="card-stitle"><u>Prix</u><b> : {{ jeu.Prix }} € </b></div><br>\n            <div class="open">\n              <button ion-button full color="light" (click)="openModifierPage(jeu.id)">\n                <ion-icon name="paper"></ion-icon>                 \n              </button>\n              <button ion-button full color="secondary" (click)="ajoutPanier(jeu.id)">\n                <ion-icon name="cart"></ion-icon>                 \n              </button>\n            </div>\n            </ion-col>\n          <ion-col col-3></ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  \n</ion-content>\n`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\pages\fiche\fiche.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], FichePage);
    return FichePage;
}());

//# sourceMappingURL=fiche.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ajout_ajout__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modifier_modifier__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_fiche_fiche__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_panier_panier__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_firebase_service_firebase_service__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_database_database__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_sqlite_porter__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebaseConfig = {
    apiKey: "AIzaSyAYjPxtmhS6ZIKSHezVEogNHOM8O5Uep08",
    authDomain: "megagame-9e45b.firebaseapp.com",
    databaseURL: "https://megagame-9e45b.firebaseio.com",
    projectId: "megagame-9e45b",
    storageBucket: "",
    messagingSenderId: "83466894837"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_fiche_fiche__["a" /* FichePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modifier_modifier__["a" /* ModifierPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_panier_panier__["a" /* PanierPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_ajout_ajout__["a" /* AjoutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_fiche_fiche__["a" /* FichePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modifier_modifier__["a" /* ModifierPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_panier_panier__["a" /* PanierPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\pages\contact\contact.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseServiceProvider = (function () {
    function FirebaseServiceProvider(afd) {
        this.afd = afd;
    }
    FirebaseServiceProvider.prototype.getJeux = function () {
        return this.afd.list('/Jeux');
    };
    FirebaseServiceProvider.prototype.addJeux = function (name) {
        this.afd.list('/Jeux/').push(name);
    };
    FirebaseServiceProvider.prototype.removeJeux = function (id) {
        this.afd.list('/Jeux/').remove(id);
    };
    FirebaseServiceProvider.prototype.getId = function () {
        var fred;
        fred = this.afd.list('/Jeux', {
            query: {
                orderByChild: 'id',
                equalTo: '22'
            }
        });
        /*this.afd.list('/users', { preserveSnapshot: true})
        .subscribe(snapshots=>{
            snapshots.forEach(snapshot => {
              if(snapshot.key == 0){
                console.log(snapshot.key, snapshot.val());
              }
            });
        })*/
        return fred;
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseProvider = (function () {
    function DatabaseProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        if (this.isOpen) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]();
            this.storage.create({
                name: "data.db",
                location: "default"
            }).then(function (db) {
                _this.db = db;
                db.executeSql("CREATE TABLE IF NOT EXISTS Categorie ( idConsole INTEGER PRIMARY KEY NOT NULL, nomCategorie TEXT )", []);
                _this.isOpen = true;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    DatabaseProvider.prototype.CreateJeux = function (idCategorie, nomCategorie) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "INSERT INTO Categorie  (idCategorie, nomCategorie) VALUES (?, ?)";
            _this.db.executeSql(sql, [idCategorie, nomCategorie]).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.GetAllJeux = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sql = "SELECT * FROM Categorie";
            _this.db.executeSql(sql, []).then(function (data) {
                var arrayJeux = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayJeux.push({
                            idCategorie: data.rows.item(i).idCategorie,
                            nomCategorie: data.rows.item(i).nomCategorie
                        });
                    }
                }
                resolve(arrayJeux);
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifier_modifier__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fiche_fiche__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DATABASE_NAME = 'db.data';
var HomePage = (function () {
    function HomePage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.jeux = [];
        this.createDataBaseFile();
    }
    HomePage.prototype.createDataBaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_NAME,
            location: 'default'
        })
            .then(function (db) {
            _this.db = db;
            console.log("DB Creer");
            _this.createTable();
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.createTable = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Jeux` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `Nom` TEXT, `Categorie` INTEGER, `Editeur` TEXT, `Image` TEXT, `Date` TEXT, `Note` INTEGER, `Prix` INTEGER, `Console` INTEGER NOT NULL, `Vente` INTEGER, `Panier` INTEGER, FOREIGN KEY(`Categorie`) REFERENCES `Categorie`(`idCategorie`) )', {})
            .then(function () {
            console.log("Table JEUX Creee");
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS `Categorie` ( `idCategorie` INTEGER NOT NULL, `nomCategorie` TEXT, PRIMARY KEY(`idCategorie`) )', {})
                .then(function () { return _this.retrieveJeux(); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.retrieveJeux = function () {
        var _this = this;
        this.jeux = [];
        this.db.executeSql('SELECT * FROM `Jeux`', {})
            .then(function (data) {
            if (data == null) {
                return;
            }
            if (data.rows) {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.jeux.push({ id: data.rows.item(i).id, Nom: data.rows.item(i).Nom, Categorie: data.rows.item(i).Categorie, Editeur: data.rows.item(i).Editeur, Image: data.rows.item(i).Image, Panier: data.rows.item(i).Panier });
                    }
                }
            }
        });
    };
    HomePage.prototype.openModifierPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modifier_modifier__["a" /* ModifierPage */], {
            id: id
        });
    };
    HomePage.prototype.deleteJeux = function (id) {
        var _this = this;
        console.log(id);
        this.db.executeSql('DELETE FROM Jeux WHERE id=?', [id])
            .then(function (res) {
            console.log(res);
            _this.retrieveJeux();
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.openFichePage = function (id) {
        console.log("fiiiche:" + id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fiche_fiche__["a" /* FichePage */], {
            id: id
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.retrieveJeux();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Fred\MegaGame\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar color="light">\n    <ion-title>Jeux</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list >\n    <ion-item>\n      <ion-label fixed>Recherche</ion-label>\n      <ion-input type="text" [(ngModel)]="newJeux"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <!-- <div>\n      <ion-card>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n                <img class="images" src="assets/img/jaquette/fifa18_ps4.png"/>\n              </ion-col>\n              <ion-col col-6>\n                <div class="card-title"><u><b>Fifa 18</b></u></div>\n                <div class="card-stitle"><b>Sport</b></div>\n                <div class="card-stitle"><b>2017-09-29</b></div>\n                <div class="open">\n                  <button ion-button full color="light" (click)="openFichePage(jeu.id)">\n                    <ion-icon name="book"></ion-icon>                 \n                  </button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-card>\n    </div> -->\n\n  <div *ngFor="let jeu of jeux" >\n    <ion-card>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <img class="images" src="assets/{{jeu.Image}}"/>\n            </ion-col>\n            <ion-col col-6>\n              <div class="card-title"><b>{{ jeu.Nom }}</b></div>\n              <div class="card-stitle"><b>{{ jeu.Categorie }}</b></div>\n              <div class="card-stitle"><b>{{ jeu.Date }}</b></div>\n              <div class="open">\n                <button ion-button full color="light" (click)="openFichePage(jeu.id)">\n                  <ion-icon name="book"></ion-icon>                 \n                </button>\n                <button ion-button full color="danger" (click)="deleteJeux(jeu.id)">\n                  <ion-icon name="trash"></ion-icon>                 \n                </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>`/*ion-inline-end:"C:\Users\Fred\MegaGame\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map