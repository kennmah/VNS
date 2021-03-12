(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2-page2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page2/page2.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page2/page2.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/your-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>page2</ion-title>\n  </ion-toolbar>\n</ion-header-->\n\n<ion-content >    \n<ion-grid id=\"content\" #ionc >\n    <ion-row>\n    <ion-col size=\"12\" style=\"padding: 0\">\n      <form #phyForm=\"ngForm\" autocomplete=\"off\">\n      <!-- <div ngModelGroup=\"PhyContact\" #contact=\"ngModelGroup\"> -->\n      <div class=\"img_header\" style=\"margin:0; padding:0;\">     \n        <img id=\"imgFrame\" [src]=\"formHeaderUrl\" class=\"img_cover\">\n        <span class=\"titleTxt\">Physican's Contact Information</span>\n      </div>\n      <div>\n        <ion-label position=\"stacked\" class=\"label\">First Name *</ion-label>\n        <ion-input required placeholder=\"First Name\" name=\"phy_first_name\" \n        [ngModel]=\"physicianDetails?.phy_first_name\" autofocus clearInput inputmode=\"text\" \n        class=\"medium shortTxt\"  autocomplete=\"chrome-off\"></ion-input>\n      </div>        \n      <div>\n        <ion-label position=\"stacked\" class=\"label\">Last Name *</ion-label>\n        <ion-input name=\"phy_last_name\" [ngModel]=\"physicianDetails?.phy_last_name\" required  \n          placeholder=\"Last Name\" value=\"Mah\" clearInput inputmode=\"text\" \n          class=\"medium shortTxt\" autocomplete=\"chrome-off\"></ion-input>\n      </div>\n      <div>\n        <ion-label position=\"stacked\" class=\"label\">Phone *</ion-label>\n        <ion-input \n          name=\"phy_phone\" \n          #phyPhone\n          [ngModel]=\"physicianDetails?.phy_phone\" \n          required \n          pattern=\"[0-9]{3}-[0-9]{3}-[0-9]{4}\" \n          type=\"tel\" \n          inputmode=\"tel\" \n          clearInput  \n          placeholder=\"000-000-0000\"\n          class=\"medium exShortTxt\" \n          autocomplete=\"chrome-off\"\n          (ionBlur)=\"formatPhone(phyPhone)\">\n        </ion-input>\n      </div>\n      <div>\n        <ion-label position=\"stacked\" class=\"label\">Email *</ion-label>\n        <ion-input \n          name=\"phy_email\" \n          [ngModel]=\"physicianDetails?.phy_email\" \n          required \n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n          type=\"email\" \n          placeholder=\"name@email.com\" \n          clearInput \n          inputmode='email' \n          autocomplete=\"chrome-off\"\n          class=\"medium\">\n        </ion-input>\n      </div>\n      <div>\n        <ion-checkbox [ngModel]=\"physicianDetails?.save_info\" name=\"save_info\" style=\"margin-right: 2px;\"></ion-checkbox>\n        <ion-label>Do not save my contact information in my local device. I will enter my info manually!</ion-label>\n      </div>\n      <!--\n      <ion-buttons style=\"border: 1px solid red;\">\n        <ion-button >\n          <ion-icon name=\"briefcase-outline\"></ion-icon>\n        </ion-button>\n        <ion-button strong href=\"/page3\" class=\"ion-float-right\">Continue</ion-button>\n      </ion-buttons> -->\n      <ion-button [disabled]=\"phyForm.invalid\" strong routerLink=\"/page3\" [queryParams]=\"{withHeader:hasHeader}\" class=\"ion-float-right\" style=\"margin-right: 5px;\" (click)=\"save(phyForm)\">Continue</ion-button>\n    </form>\n  </ion-col>\n  </ion-row>\n  </ion-grid> \n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/page2/page2-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/page2/page2-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Page2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageRoutingModule", function() { return Page2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page2.page */ "./src/app/page2/page2.page.ts");




const routes = [
    {
        path: '',
        component: _page2_page__WEBPACK_IMPORTED_MODULE_3__["Page2Page"]
    }
];
let Page2PageRoutingModule = class Page2PageRoutingModule {
};
Page2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Page2PageRoutingModule);



/***/ }),

/***/ "./src/app/page2/page2.module.ts":
/*!***************************************!*\
  !*** ./src/app/page2/page2.module.ts ***!
  \***************************************/
/*! exports provided: Page2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageModule", function() { return Page2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _page2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2-routing.module */ "./src/app/page2/page2-routing.module.ts");
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page2.page */ "./src/app/page2/page2.page.ts");







let Page2PageModule = class Page2PageModule {
};
Page2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Page2PageRoutingModule"]
        ],
        declarations: [_page2_page__WEBPACK_IMPORTED_MODULE_6__["Page2Page"]]
    })
], Page2PageModule);



/***/ }),

/***/ "./src/app/page2/page2.page.scss":
/*!***************************************!*\
  !*** ./src/app/page2/page2.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  display: none;\n}\n\nion-grid {\n  opacity: 1;\n  padding: 0;\n  background-color: var(--ion-color-light);\n}\n\nion-grid div {\n  padding: 0;\n  margin: 0 5px 20px 5px;\n}\n\n.label {\n  font-size: 1.2rem;\n  line-height: 1;\n  font-family: \"myriad-pro\", \"Arial\";\n  font-weight: 400;\n  margin: 0px;\n}\n\n.btn {\n  border-radius: 4px;\n  font-weight: 600;\n}\n\n@media (min-width: 768px) {\n  ion-content {\n    --background: none;\n  }\n\n  ion-grid {\n    border: 2px dotted #005eab;\n    position: absolute;\n    top: 10px;\n    left: 25%;\n    width: 50%;\n  }\n\n  .exShortTxt {\n    width: 15rem;\n  }\n\n  .shortTxt {\n    width: 25rem;\n  }\n\n  .longTxt {\n    width: 50rem;\n  }\n}\n\ndiv.img_header {\n  position: relative;\n  margin: 0;\n  clear: left;\n  text-align: center;\n  /* Add This*/\n}\n\n.img_cover {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n.titleTxt {\n  font-size: 30px;\n  font-weight: 600;\n  font-style: italic;\n  display: block;\n  margin: 20px 0 20px 0;\n}\n\nion-input.ng-touched.ng-invalid,\ninput.ng-touched.ng-invalid,\nion-select.ng-touched.ng-invalid {\n  border: 2px solid red;\n}\n\n.medium {\n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: var(--ion-color-light);\n  padding: 7px 12px;\n  margin-top: 5px;\n  color: var(--ion-color-dark);\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTIvRDpcXFdvcmtzcGFjZV9JSlxcSFJlZmVyYWxcXEgtUmVmZXJhbC9zcmNcXGFwcFxccGFnZTJcXHBhZ2UyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZTIvcGFnZTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBO0VBQ0k7SUFDSSxrQkFBQTtFQ0ROOztFREdFO0lBQ0ksMEJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0FOOztFREdFO0lBQ0ksWUFBQTtFQ0FOOztFREVFO0lBQ0ksWUFBQTtFQ0NOOztFRENFO0lBQ0ksWUFBQTtFQ0VOO0FBQ0Y7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBSUEsa0JBQUE7RUFBa0IsWUFBQTtBQ0R0Qjs7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREtFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNGTjs7QURNQTs7O0VBSUkscUJBQUE7QUNKSjs7QURNQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZTIvcGFnZTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHsgICBcclxuICAgIG9wYWNpdHk6IDE7ICBcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG5pb24tZ3JpZCBkaXYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCA1cHggMjBweCA1cHg7XHJcbn1cclxuXHJcblxyXG4ubGFiZWwgIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LWZhbWlseTogXCJteXJpYWQtcHJvXCIsIFwiQXJpYWxcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7ICAgIFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5idG4geyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGlvbi1jb250ZW50IHsgICAgICAgIFxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICB9XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggZG90dGVkICMwMDVlYWI7ICAgICAgICBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4U2hvcnRUeHQge1xyXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuICAgIC5zaG9ydFR4dCB7XHJcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgfVxyXG4gICAgLmxvbmdUeHQge1xyXG4gICAgICAgIHdpZHRoOiA1MHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuZGl2LmltZ19oZWFkZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGNsZWFyOmxlZnQ7XHJcbiAgICAvL2hlaWdodDphdXRvO1xyXG4gICAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgICAvL3otaW5kZXg6IDA7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsvKiBBZGQgVGhpcyovICAgICAgIFxyXG59XHJcblxyXG4uaW1nX2NvdmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlVHh0IHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XHJcbiAgfVxyXG5cclxuXHJcbmlvbi1pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsIFxyXG4gaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkLFxyXG4gaW9uLXNlbGVjdC5uZy10b3VjaGVkLm5nLWludmFsaWQgXHJcbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuLm1lZGl1bSB7ICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgcGFkZGluZzogN3B4IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iLCJpb24taGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWdyaWQge1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5pb24tZ3JpZCBkaXYge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgNXB4IDIwcHggNXB4O1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIm15cmlhZC1wcm9cIiwgXCJBcmlhbFwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIH1cblxuICBpb24tZ3JpZCB7XG4gICAgYm9yZGVyOiAycHggZG90dGVkICMwMDVlYWI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5leFNob3J0VHh0IHtcbiAgICB3aWR0aDogMTVyZW07XG4gIH1cblxuICAuc2hvcnRUeHQge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxuXG4gIC5sb25nVHh0IHtcbiAgICB3aWR0aDogNTByZW07XG4gIH1cbn1cbmRpdi5pbWdfaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGNsZWFyOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIEFkZCBUaGlzKi9cbn1cblxuLmltZ19jb3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlVHh0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG59XG5cbmlvbi1pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG5pb24tc2VsZWN0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLm1lZGl1bSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/page2/page2.page.ts":
/*!*************************************!*\
  !*** ./src/app/page2/page2.page.ts ***!
  \*************************************/
/*! exports provided: Page2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Page", function() { return Page2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");





let Page2Page = class Page2Page {
    constructor(activatedRoute, router, message) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = message;
        this.storageKey = "PhysicianContact";
        this.formHeaderUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contextRoot + '/assets/form-header.png';
        console.log("0. in first page constructor");
    }
    ngOnInit() {
        console.log("2. on init is called");
        this.physicianDetails = JSON.parse(localStorage.getItem(this.storageKey));
        // query string withHeader (yes/no)
        this.hasHeader = this.activatedRoute.snapshot.queryParams['withHeader'];
        let content = document.getElementById("content");
        if (this.hasHeader && "YES" === this.hasHeader.toUpperCase()) {
            content.style.top = "250px";
            console.log("header: " + this.hasHeader, "keeping headers on");
        }
        else {
            document.body.style.background = 'none';
            content.style.top = "10px";
        }
    }
    save(form) {
        this.physicianDetails = form.value;
        if (form.value.save_info === true) {
            console.log("not save to local storage");
            localStorage.setItem(this.storageKey, "{\"save_info\": true}");
        }
        else {
            localStorage.setItem(this.storageKey, JSON.stringify(this.physicianDetails));
        }
        sessionStorage.setItem(this.storageKey, JSON.stringify(this.physicianDetails));
        this.message.changeMessage(JSON.stringify(this.physicianDetails));
    }
    get firstName() {
        return "this.physicianDetails['phy_first_name']";
    }
    formatPhone(phone) {
        let cleaned = ('' + phone.value).replace(/\D/g, '');
        //console.log("remove non-numeric chars", cleaned)
        if (cleaned.length === 10) {
            let formatedStr = cleaned.substr(0, 3) + "-" + cleaned.substr(3, 3) + "-" + cleaned.substr(6, 4);
            //console.log("formated as: ", formatedStr);
            phone.value = formatedStr;
        }
        else {
            //phone.value = '(000) 000-0000'
            //phone.control.setErrors({ 'incorrect': true});    
        }
        //let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    }
};
Page2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
Page2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page2/page2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page2.page.scss */ "./src/app/page2/page2.page.scss")).default]
    })
], Page2Page);



/***/ })

}]);
//# sourceMappingURL=page2-page2-module-es2015.js.map