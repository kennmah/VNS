(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-more-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-tabs>\n  <div class=\"img_frame\"> \n    <h1>{{ first }}</h1>\n    <img id=\"imgFrame\" src=\"../assets/additional/feature.png\" [title]=\"first\">\n\n  </div>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"Guideline\" (click) = \"getLink(0)\">\n      <ion-label>Guideline</ion-label>\n      <ion-icon name=\"book-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"Tools\" (click) = \"getLink(1)\">\n      <ion-label>Tools</ion-label>\n      <ion-icon name=\"briefcase-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"Refer\" (click) = \"getLink(2)\">\n      <ion-label>Refer</ion-label>\n      <ion-icon name=\"clipboard-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs-->\n\n<ion-content>\n  <div class=\"img_frame\">     \n    <img id=\"imgFrame\" [src]=\"selectedLink\" class=\"img_cover\">\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons class=\"footer-center\">\n      <ion-button (click)=\"setInx(0)\">\n        <ion-icon name=\"book-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"setInx(1)\" style=\"margin-left: 40%;\">\n        <ion-icon name=\"briefcase-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"setInx(2)\" class=\"ion-float-right\">\n        <ion-icon name=\"clipboard-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n   \n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/more/more-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/more/more-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageRoutingModule", function() { return MorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more.page */ "./src/app/more/more.page.ts");




const routes = [
    {
        path: '',
        component: _more_page__WEBPACK_IMPORTED_MODULE_3__["MorePage"]
    }
];
let MorePageRoutingModule = class MorePageRoutingModule {
};
MorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MorePageRoutingModule);



/***/ }),

/***/ "./src/app/more/more.module.ts":
/*!*************************************!*\
  !*** ./src/app/more/more.module.ts ***!
  \*************************************/
/*! exports provided: MorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _more_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-routing.module */ "./src/app/more/more-routing.module.ts");
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more.page */ "./src/app/more/more.page.ts");







let MorePageModule = class MorePageModule {
};
MorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _more_routing_module__WEBPACK_IMPORTED_MODULE_5__["MorePageRoutingModule"]
        ],
        declarations: [_more_page__WEBPACK_IMPORTED_MODULE_6__["MorePage"]]
    })
], MorePageModule);



/***/ }),

/***/ "./src/app/more/more.page.scss":
/*!*************************************!*\
  !*** ./src/app/more/more.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img_frame {\n  position: relative;\n  margin: 0 auto;\n  clear: left;\n  height: 100%;\n  z-index: 0;\n  text-align: center;\n  /* Add This*/\n  border: 1px solid red;\n}\n\n.img_cover {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n}\n\n.footer-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 25%;\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS9EOlxcV29ya3NwYWNlX0lKXFxIUmVmZXJhbFxcSC1SZWZlcmFsL3NyY1xcYXBwXFxtb3JlXFxtb3JlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9yZS9tb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQWtCLFlBQUE7RUFDbEIscUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vcmUvbW9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX2ZyYW1lIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGNsZWFyOmxlZnQ7XHJcbiAgICAvL2hlaWdodDphdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyOy8qIEFkZCBUaGlzKi8gICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmltZ19jb3ZlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLy93aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5mb290ZXItY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59IiwiLmltZ19mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNsZWFyOiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQWRkIFRoaXMqL1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5pbWdfY292ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9vdGVyLWNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/more/more.page.ts":
/*!***********************************!*\
  !*** ./src/app/more/more.page.ts ***!
  \***********************************/
/*! exports provided: MorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePage", function() { return MorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let MorePage = class MorePage {
    constructor() {
        this.first = "Kenneth-Mah";
        this.links = ['/assets/additional/feature.png', '/assets/additional/guideline.png', '/assets/additional/tools.png'];
    }
    ngOnInit() {
        this.setInx(0);
    }
    setInx(index) {
        console.log(index);
        this.selectedLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contextRoot + this.links[index];
    }
};
MorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./more.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/more/more.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./more.page.scss */ "./src/app/more/more.page.scss")).default]
    })
], MorePage);



/***/ })

}]);
//# sourceMappingURL=more-more-module-es2015.js.map