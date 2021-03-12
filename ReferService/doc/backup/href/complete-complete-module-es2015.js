(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complete-complete-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete/complete.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complete/complete.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/your-info\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>page2</ion-title>\n  </ion-toolbar>\n</ion-header-->\n\n<ion-content>  \n  <ion-grid id=\"complate-grid\">\n      <ion-row>\n      <ion-col size=\"12\" style=\"padding: 0; height:35rem;\">\n        <div class=\"img_header\" style=\"margin:0; padding:0;\">     \n          <img id=\"imgFrame\" [src]=\"formHeaderUrl\" class=\"img_cover\">\n          <span class=\"titleTxt\">Referral Sent!</span>\n        </div>\n        <div class=\"msg-box\">\n          <ion-label position=\"stacked\" class=\"label\">The request has been sent successfully. You will receive an email shortly with confirmation details!</ion-label>\n          <!-- <div class=\"danger\" style=\"margin-top: 1em;\">\n            Data: {{ referalText }}\n          </div> -->\n        </div>        \n        \n        <!-- <ion-button strong routerLink=\"/more\" class=\"ion-float-right\"  style=\"margin-right: 5px;\">More...</ion-button> -->\n        <ion-button strong routerLink=\"/home\" [queryParams]=\"{withHeader:hasHeader}\" class=\"ion-float-right\"  style=\"margin-right: 5px;\">New Referral</ion-button>\n    </ion-col>\n    </ion-row>\n    </ion-grid> \n      \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/complete/complete-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/complete/complete-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CompletePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletePageRoutingModule", function() { return CompletePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _complete_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complete.page */ "./src/app/complete/complete.page.ts");




const routes = [
    {
        path: '',
        component: _complete_page__WEBPACK_IMPORTED_MODULE_3__["CompletePage"]
    }
];
let CompletePageRoutingModule = class CompletePageRoutingModule {
};
CompletePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompletePageRoutingModule);



/***/ }),

/***/ "./src/app/complete/complete.module.ts":
/*!*********************************************!*\
  !*** ./src/app/complete/complete.module.ts ***!
  \*********************************************/
/*! exports provided: CompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletePageModule", function() { return CompletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _complete_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complete-routing.module */ "./src/app/complete/complete-routing.module.ts");
/* harmony import */ var _complete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complete.page */ "./src/app/complete/complete.page.ts");







let CompletePageModule = class CompletePageModule {
};
CompletePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _complete_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompletePageRoutingModule"]
        ],
        declarations: [_complete_page__WEBPACK_IMPORTED_MODULE_6__["CompletePage"]]
    })
], CompletePageModule);



/***/ }),

/***/ "./src/app/complete/complete.page.scss":
/*!*********************************************!*\
  !*** ./src/app/complete/complete.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  ion-content {\n    --background: none;\n  }\n\n  ion-grid {\n    border: 2px dotted #005eab;\n    position: absolute;\n    top: 10px;\n    left: 25%;\n    width: 50%;\n  }\n\n  ion-input.phoneTxt {\n    width: 15rem;\n  }\n\n  ion-input.shortTxt {\n    width: 25rem;\n  }\n\n  ion-input.longTxt {\n    width: 50rem;\n  }\n}\n\nion-grid {\n  opacity: 1;\n  padding: 0;\n  height: auto;\n}\n\nion-grid div {\n  padding: 0;\n  margin: 0 5px 20px 5px;\n}\n\n.medium {\n  max-width: 100% !important;\n  background-color: #f2f2f2;\n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: #F2F2F2;\n  padding: 7px 12px;\n  margin-top: 5px;\n  outline: none;\n}\n\n.label {\n  font-size: 1.2rem;\n  line-height: 1;\n  font-family: \"myriad-pro\", \"Arial\";\n  font-weight: 400;\n  margin: 0px;\n}\n\n.btn {\n  border-radius: 4px;\n  font-weight: 600;\n}\n\ndiv.img_header {\n  position: relative;\n  margin: 0;\n  clear: left;\n  text-align: center;\n  /* Add This*/\n}\n\n.img_cover {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\n.titleTxt {\n  font-size: 30px;\n  font-weight: 600;\n  font-style: italic;\n  display: block;\n  margin: 20px 0 20px 0;\n}\n\n.msg-box {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGUvRDpcXFdvcmtzcGFjZV9JSlxcSFJlZmVyYWxcXEgtUmVmZXJhbC9zcmNcXGFwcFxcY29tcGxldGVcXGNvbXBsZXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcGxldGUvY29tcGxldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREdBO0VBQ0k7SUFDSSxrQkFBQTtFQ0FOOztFREVFO0lBQ0ksMEJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQ0NOOztFREVFO0lBQ0ksWUFBQTtFQ0NOOztFRENFO0lBQ0ksWUFBQTtFQ0VOOztFREFFO0lBQ0ksWUFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBSUEsa0JBQUE7RUFBa0IsWUFBQTtBQ0R0Qjs7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREtFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNGTjs7QURLQztFQUNHLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZXRlL2NvbXBsZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBpb24tY29udGVudCB7ICAgICAgICBcclxuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgfVxyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRvdHRlZCAjMDA1ZWFiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMjUlO1xyXG4gICAgICAgIHdpZHRoOjUwJTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQucGhvbmVUeHQge1xyXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dC5zaG9ydFR4dCB7XHJcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0LmxvbmdUeHQge1xyXG4gICAgICAgIHdpZHRoOiA1MHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWdyaWQgeyAgIFxyXG4gICAgb3BhY2l0eTogMTsgICAgXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pb24tZ3JpZCBkaXYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCA1cHggMjBweCA1cHg7XHJcbn1cclxuXHJcbi5tZWRpdW0ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XHJcbiAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxhYmVsICB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibXlyaWFkLXByb1wiLCBcIkFyaWFsXCI7XHJcbiAgICBmb250LXdlaWdodDogNDAwOyAgICBcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uYnRuIHsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5kaXYuaW1nX2hlYWRlciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgY2xlYXI6bGVmdDtcclxuICAgIC8vaGVpZ2h0OmF1dG87XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICAgIC8vei1pbmRleDogMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyOy8qIEFkZCBUaGlzKi8gICAgICAgXHJcbn1cclxuXHJcbi5pbWdfY292ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudGl0bGVUeHQge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcclxuICB9XHJcblxyXG4gLm1zZy1ib3gge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iLCJpb24taGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIH1cblxuICBpb24tZ3JpZCB7XG4gICAgYm9yZGVyOiAycHggZG90dGVkICMwMDVlYWI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAyNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIGlvbi1pbnB1dC5waG9uZVR4dCB7XG4gICAgd2lkdGg6IDE1cmVtO1xuICB9XG5cbiAgaW9uLWlucHV0LnNob3J0VHh0IHtcbiAgICB3aWR0aDogMjVyZW07XG4gIH1cblxuICBpb24taW5wdXQubG9uZ1R4dCB7XG4gICAgd2lkdGg6IDUwcmVtO1xuICB9XG59XG5pb24tZ3JpZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWdyaWQgZGl2IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDVweCAyMHB4IDVweDtcbn1cblxuLm1lZGl1bSB7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBwYWRkaW5nOiA3cHggMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIm15cmlhZC1wcm9cIiwgXCJBcmlhbFwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZGl2LmltZ19oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgY2xlYXI6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQWRkIFRoaXMqL1xufVxuXG4uaW1nX2NvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGVUeHQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxuLm1zZy1ib3gge1xuICBoZWlnaHQ6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/complete/complete.page.ts":
/*!*******************************************!*\
  !*** ./src/app/complete/complete.page.ts ***!
  \*******************************************/
/*! exports provided: CompletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletePage", function() { return CompletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let CompletePage = class CompletePage {
    constructor(data, activatedRoute) {
        this.data = data;
        this.activatedRoute = activatedRoute;
        this.formHeaderUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contextRoot + '/assets/form-header.png';
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.referalText = message);
        this.hasHeader = this.activatedRoute.snapshot.queryParams['withHeader'];
        let content = document.getElementById("complate-grid");
        if (this.hasHeader && "YES" === this.hasHeader.toUpperCase()) {
            content.style.top = "250px";
            console.log("page3 header: " + this.hasHeader, "keeping headers on");
        }
        else {
            document.body.style.background = 'none';
            content.style.top = "10px";
        }
        console.log("Done. Referal data is: " + this.referalText);
        console.log("2. on init is called");
    }
    ngOnChanges(changes) {
        console.log("1. on change is called");
    }
    // ngOnInit(): void {
    // console.log("2. on init is called");
    // }
    ngDoCheck() {
        console.log("3. do check is called");
    }
    ngAfterContentInit() {
        console.log("4. after content init called");
    }
    ngAfterContentChecked() {
        console.log("5. after content check called");
    }
    ngAfterViewInit() {
        console.log('6. after view init called');
    }
    ngAfterViewChecked() {
        console.log('7. after view init checked');
    }
    ngOnDestroy() {
        console.log('8. on destroy called');
    }
};
CompletePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CompletePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-complete',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./complete.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/complete/complete.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./complete.page.scss */ "./src/app/complete/complete.page.scss")).default]
    })
], CompletePage);



/***/ })

}]);
//# sourceMappingURL=complete-complete-module-es2015.js.map