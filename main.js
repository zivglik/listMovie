(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_movies_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movies/movies-list/movies-list.component */ "./src/app/components/movies/movies-list/movies-list.component.ts");





var routes = [
    { path: 'movies', component: _components_movies_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"] },
    { path: '**', component: _components_movies_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'HeroloMovies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _helpers_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/pipes */ "./src/app/helpers/pipes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_movies_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movies/movie-item/movie-item.component */ "./src/app/components/movies/movie-item/movie-item.component.ts");
/* harmony import */ var _components_movies_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/movies/movies-list/movies-list.component */ "./src/app/components/movies/movies-list/movies-list.component.ts");
/* harmony import */ var _components_movies_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movies/popup-delete/popup-delete.component */ "./src/app/components/movies/popup-delete/popup-delete.component.ts");
/* harmony import */ var _components_movies_popup_add_edit_popup_add_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/movies/popup-add-edit/popup-add-edit.component */ "./src/app/components/movies/popup-add-edit/popup-add-edit.component.ts");










//Component 



//Component popups


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_movies_movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_11__["MovieItemComponent"],
                _components_movies_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_12__["MoviesListComponent"],
                _components_movies_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_13__["PopupDeleteComponent"],
                _components_movies_popup_add_edit_popup_add_edit_component__WEBPACK_IMPORTED_MODULE_14__["PopupAddEditComponent"],
                _helpers_pipes__WEBPACK_IMPORTED_MODULE_9__["TitleFormatPipe"]
            ],
            entryComponents: [_components_movies_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_13__["PopupDeleteComponent"], _components_movies_popup_add_edit_popup_add_edit_component__WEBPACK_IMPORTED_MODULE_14__["PopupAddEditComponent"]],
            imports: [
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/movies/movie-item/movie-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/movies/movie-item/movie-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n    <figure class=\"movieBox\" id=\"({{movie.imdbID}})\">\n        \n        <h2>{{movie.Title | TitleFormat}}</h2>\n            <img src=\"{{movie.Poster}}\"   />\n          \n    \n              <div class=\"buttons-actions\">\n                \n                <a class=\"btn solid\" href=\"#\" (click)=\"SelectedDeleteMovie()\" aria-label=\"Delete\">\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </a>\n\n                <a class=\"btn solid\" href=\"#navigation-main\" (click)=\"SelectedEditMovie()\" aria-label=\"Skip to main navigation\">\n                  <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </a>\n         \n              </div>\n\n                    \n            <figcaption>\n              \n              <h3>\n                <div>{{movie.Year}}, {{movie.Runtime}}</div>\n                <div>{{movie.Genre}}</div>\n              </h3>\n              \n              <h4>{{movie.Director}}</h4>\n            </figcaption>\n            <a class=\"bgs\" href=\"#\"></a>\n          </figure>\n"

/***/ }),

/***/ "./src/app/components/movies/movie-item/movie-item.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/movies/movie-item/movie-item.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movieBox {\n  font-family: 'Montserrat', Arial, sans-serif;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  margin: 10px;\n  min-width: 200px;\n  max-width: 250px;\n  width: 100%;\n  color: #fff;\n  text-align: left;\n  font-size: 15px;\n  background: #000;\n  height: 350px; }\n  .movieBox h4, .movieBox h3 {\n    box-sizing: border-box;\n    transition: all 0.4s ease;\n    margin: 0;\n    font-size: 1.1em;\n    font-weight: normal;\n    opacity: 0; }\n  .movieBox h4 {\n    font-size: .8em;\n    text-transform: uppercase; }\n  .movieBox img {\n    max-width: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    vertical-align: top; }\n  .movieBox figcaption {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    padding: 15px 20px; }\n  .movieBox a.bgs {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1; }\n  .movieBox:hover img {\n    zoom: 1;\n    filter: alpha(opacity=20);\n    -webkit-opacity: 0.2;\n    opacity: 0.2; }\n  .movieBox h2 {\n    opacity: 0.8;\n    background-color: #fff;\n    color: #000;\n    font-size: 13px;\n    padding: 5px;\n    margin: 10px;\n    position: absolute;\n    font-weight: 900; }\n  .movieBox:hover h4 {\n    opacity: 1;\n    transition-delay: 0.35s; }\n  .movieBox:hover h3 {\n    opacity: 1;\n    transition-delay: 0.3s;\n    padding-bottom: 10px; }\n  .movieBox .buttons-actions {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    position: absolute;\n    z-index: 2;\n    right: 3px;\n    bottom: 3px; }\n  .movieBox .buttons-actions .btn {\n      margin: 5px;\n      opacity: 1; }\n  .movieBox .buttons-actions .btn.solid {\n        background-color: #fff;\n        color: #000;\n        padding: 0px 3px 0px 3px;\n        opacity: 0.6;\n        background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWUtaXRlbS9DOlxcUHJvamVjdHNcXEhlcm9sb01vdmllTGlzdFxcSGVyb2xvTW92aWVzVjRcXEhlcm9sb01vdmllcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW92aWVzXFxtb3ZpZS1pdGVtXFxtb3ZpZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNkNBQTRDO0VBQzVDLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGNBQWEsRUE4R2hCO0VBM0hEO0lBbUJNLHVCQUFzQjtJQUV0QiwwQkFBeUI7SUFFekIsVUFBUztJQUNULGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsV0FBVSxFQUNYO0VBM0JMO0lBOEJNLGdCQUFlO0lBQ2YsMEJBQXlCLEVBQzFCO0VBaENMO0lBbUNNLGdCQUFlO0lBQ2Ysb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUMzQixvQkFBbUIsRUFDcEI7RUF0Q0w7SUF5Q00sbUJBQWtCO0lBQ2xCLFFBQU87SUFDUCxVQUFTO0lBQ1QsbUJBQWtCLEVBQ25CO0VBN0NMO0lBZ0RNLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sVUFBUztJQUNULFFBQU87SUFDUCxTQUFRO0lBQ1IsV0FBVSxFQUNYO0VBdERMO0lBMERJLFFBQU87SUFDUCwwQkFBeUI7SUFDekIscUJBQW9CO0lBQ3BCLGFBQVksRUFDYjtFQTlESDtJQWtFSSxhQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLFlBQVc7SUFDWCxnQkFBZTtJQUNmLGFBQVk7SUFDWixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGlCQUFnQixFQUNqQjtFQTFFSDtJQThFSSxXQUFVO0lBRVYsd0JBQXVCLEVBQ3hCO0VBakZIO0lBc0ZFLFdBQVU7SUFFVix1QkFBc0I7SUFDdEIscUJBQW9CLEVBQ25CO0VBMUZIO0lBOEZJLGNBQWE7SUFDYixnQkFBZTtJQUNmLHdCQUF1QjtJQUV2QixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFdBQVU7SUFDVixZQUFXLEVBbUJkO0VBeEhEO01BMEdLLFlBQVc7TUFDWCxXQUFVLEVBWVo7RUF2SEg7UUErR08sdUJBQXNCO1FBQ3RCLFlBQVc7UUFDWCx5QkFBd0I7UUFHdkIsYUFBWTtRQUNaLHdCQUF1QixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllLWl0ZW0vbW92aWUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm1vdmllQm94IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuXHJcblxyXG4gICAgaDQsaDNcclxuICAgICB7XHJcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZ2NhcHRpb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEuYmdzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICY6aG92ZXIgaW1nLFxyXG4gIHtcclxuICAgIHpvb206IDE7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xyXG4gICAgLXdlYmtpdC1vcGFjaXR5OiAwLjI7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG5cclxuXHJcbiAgaDJ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciBoNCxcclxuICB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xyXG4gIH1cclxuXHJcblxyXG4gICY6aG92ZXIgaDMsXHJcbiB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5idXR0b25zLWFjdGlvbnNcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHJpZ2h0OiAzcHg7XHJcbiAgICBib3R0b206IDNweDtcclxuXHJcbiAgXHJcblxyXG4gIC5idG57XHJcbiAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgJi5zb2xpZFxyXG4gICAgIHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgIHBhZGRpbmc6IDBweCAzcHggMHB4IDNweDtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbn0vL2VuZCBtb3ZpZUJveFxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/movies/movie-item/movie-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/movies/movie-item/movie-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/movie */ "./src/app/models/movie.ts");



var MovieItemComponent = /** @class */ (function () {
    function MovieItemComponent() {
        this.onSelectedDeleteMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectedEditMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MovieItemComponent.prototype.ngOnInit = function () {
    };
    MovieItemComponent.prototype.SelectedDeleteMovie = function () {
        this.onSelectedDeleteMovie.emit(this.movie);
    };
    MovieItemComponent.prototype.SelectedEditMovie = function () {
        this.onSelectedEditMovie.emit(this.movie);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MovieItemComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieItemComponent.prototype, "onSelectedDeleteMovie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieItemComponent.prototype, "onSelectedEditMovie", void 0);
    MovieItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-movie-item]',
            template: __webpack_require__(/*! ./movie-item.component.html */ "./src/app/components/movies/movie-item/movie-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-item.component.scss */ "./src/app/components/movies/movie-item/movie-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "./src/app/components/movies/movies-list/movies-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/movies/movies-list/movies-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button type=\"button\" class=\"btn btn-secondary addnew\" data-dismiss=\"modal\"  (click)=\"onSelectedAddMovie()\">\n    <i class=\"fa fa-film\"></i> <span > Add New Movie</span>\n</button>\n<div class=\"movies-list\">\n    <div app-movie-item \n         *ngFor=\"let item of movieslist\" \n         [movie]=\"item\" \n         (onSelectedDeleteMovie)=\"onSelectedDeleteMovie($event)\" \n         (onSelectedEditMovie)=\"onSelectedEditMovie($event)\" \n         class=\"movie-item\">\n\n    </div>\n</div>\n\n\n\n\n\n\nN"

/***/ }),

/***/ "./src/app/components/movies/movies-list/movies-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/movies/movies-list/movies-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movies-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.addnew {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 50%;\n  left: 0;\n  z-index: 1;\n  opacity: 0.8;\n  font-weight: 500;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLWxpc3QvQzpcXFByb2plY3RzXFxIZXJvbG9Nb3ZpZUxpc3RcXEhlcm9sb01vdmllc1Y0XFxIZXJvbG9Nb3ZpZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vdmllc1xcbW92aWVzLWxpc3RcXG1vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBYTtFQUNiLGdCQUFlO0VBQ2Ysd0JBQXVCLEVBRTFCOztBQUVEO0VBRVEsa0NBQXlCO1VBQXpCLDBCQUF5QjtFQUN6Qiw4QkFBNkI7RUFDN0IsK0JBQThCO0VBQzlCLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsU0FBUTtFQUNSLFFBQU87RUFDUCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllcy1saXN0XHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgXHJcbn1cclxuXHJcbi5hZGRuZXdcclxuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/movies/movies-list/movies-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/movies/movies-list/movies-list.component.ts ***!
  \************************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/movie */ "./src/app/models/movie.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup-delete/popup-delete.component */ "./src/app/components/movies/popup-delete/popup-delete.component.ts");
/* harmony import */ var _popup_add_edit_popup_add_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup-add-edit/popup-add-edit.component */ "./src/app/components/movies/popup-add-edit/popup-add-edit.component.ts");







var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(moviesService, BsModalService) {
        this.moviesService = moviesService;
        this.BsModalService = BsModalService;
        this.movieslist = [];
        this.itemSelectDelete = "";
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        this.getListMovies();
    };
    MoviesListComponent.prototype.getItemsForIds = function (movies) {
        var _this = this;
        this.moviesService
            .getItems(movies)
            .subscribe(function (item) {
            _this.movieslist.push(item);
        });
    };
    MoviesListComponent.prototype.getListMovies = function () {
        var _this = this;
        //if(localStorage.getItem("listmovies"))
        //{
        // this.movieslist = JSON.parse(localStorage.getItem("listmovies"))["Search"];
        //}
        // else
        //{
        this.moviesService.getListMovies().subscribe(function (res) {
            _this.movies = res;
            _this.getItemsForIds(_this.movies);
        }, function (err) { });
        //}
    };
    MoviesListComponent.prototype.onSelectedDeleteMovie = function (movie) {
        var initialState = {
            itemSelectDelete: this.itemSelectDelete,
            Title: movie.Title
        };
        this.modalRef = this.BsModalService.show(_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_5__["PopupDeleteComponent"], { initialState: initialState });
    };
    MoviesListComponent.prototype.onSelectedEditMovie = function (movie) {
        this.itemSelectEdit = movie;
        var initialState = {
            movie: movie,
            Action: "Edit"
        };
        this.modalRef = this.BsModalService.show(_popup_add_edit_popup_add_edit_component__WEBPACK_IMPORTED_MODULE_6__["PopupAddEditComponent"], { initialState: initialState });
    };
    MoviesListComponent.prototype.onSelectedAddMovie = function () {
        var movie = { Title: "", Year: 0, imdbID: "", Type: "", Poster: "", Runtime: 0, Genre: "", Director: "" };
        var initialState = {
            movie: movie,
            Action: "Add"
        };
        this.modalRef = this.BsModalService.show(_popup_add_edit_popup_add_edit_component__WEBPACK_IMPORTED_MODULE_6__["PopupAddEditComponent"], { initialState: initialState });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MoviesListComponent.prototype, "movie", void 0);
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/components/movies/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/components/movies/movies-list/movies-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/components/movies/popup-add-edit/popup-add-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/movies/popup-add-edit/popup-add-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"movieForm\" (ngSubmit)=\"onSubmitActionEditMovie()\">\n<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{Action}} Movie</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closePopupEditMovie()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    \n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n\n     <input type=\"hidden\" formControlName=\"imdbID\" class=\"form-control\"  />\n  \n      <div class=\"form-group\">\n          <label>Title:</label>\n          <input type=\"text\" formControlName=\"Title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid':   movieForm.controls['Title']?.touched && (movieForm.hasError('existvalid', 'Title')|| movieForm.hasError('required', 'Title'))}\" />\n          <div *ngIf=\"movieForm.hasError('required', 'Title')\" class=\"invalid-feedback\">Title is required</div>\n          <div *ngIf=\"movieForm.hasError('existvalid', 'Title')\" class=\"invalid-feedback\">movie title is exist</div>\n      </div>\n   \n \n      <div class=\"form-group\">\n          <label>Year:</label>\n          <input type=\"text\" formControlName=\"Year\" class=\"form-control\" [ngClass]=\"{ 'is-invalid':movieForm.controls['Year']?.touched &&  movieForm.hasError('datevalid', 'Year') }\" />\n          <div *ngIf=\"movieForm.controls['Year']?.touched && movieForm.hasError('datevalid', 'Year')\" class=\"invalid-feedback\">\n            *Year is not valid\n          </div>\n      </div>\n\n \n      <div class=\"form-group\">\n          <label>Type:</label>\n          <input type=\"text\" formControlName=\"Type\" class=\"form-control\" [ngClass]=\"{ 'is-invalid':movieForm.controls['Type']?.touched &&   movieForm.get('Type').errors }\" />\n          <div *ngIf=\"movieForm.controls['Type']?.touched &&  movieForm.hasError('required', 'Type')\" class=\"invalid-feedback\">\n              <div >Type is required</div>\n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Poster:</label>\n          <input type=\"text\" formControlName=\"Poster\" class=\"form-control\" [ngClass]=\"{ 'is-invalid':movieForm.controls['Poster']?.touched &&  movieForm.get('Poster').errors  }\" />\n          <div *ngIf=\"movieForm.controls['Poster']?.touched &&  movieForm.hasError('required', 'Poster')\" class=\"invalid-feedback\">\n              <div >Poster is required</div>\n          </div>\n      </div>\n  \n      <div class=\"form-group\">\n          <label>Runtime:</label>\n          <input type=\"text\" formControlName=\"Runtime\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': movieForm.controls['Runtime']?.touched && movieForm.get('Runtime').errors  }\" />\n          <div *ngIf=\"movieForm.controls['Runtime']?.touched && movieForm.hasError('required', 'Runtime')\" class=\"invalid-feedback\">\n              <div>Runtime is required</div>\n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Genre:</label>\n          <input type=\"text\" formControlName=\"Genre\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': movieForm.controls['Genre']?.touched &&  movieForm.get('Genre').errors }\" />\n          <div *ngIf=\"movieForm.controls['Genre']?.touched &&  movieForm.hasError('required', 'Genre')\" class=\"invalid-feedback\">\n              <div>Genre is required</div>\n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Directorre:</label>\n          <input type=\"text\" formControlName=\"Director\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': movieForm.controls['Director']?.touched &&  movieForm.get('Director').errors  }\" />\n          <div *ngIf=\"movieForm.controls['Director']?.touched &&   movieForm.hasError('required', 'Director')\" class=\"invalid-feedback\">\n              <div>Director is required</div>\n          </div>\n      </div>\n</div>\n</div>\n</div>\n\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"  (click)=\"closePopupEditMovie()\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-primary\" type=\"submit\"  >Save</button>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/components/movies/popup-add-edit/popup-add-edit.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/movies/popup-add-edit/popup-add-edit.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzL3BvcHVwLWFkZC1lZGl0L3BvcHVwLWFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/movies/popup-add-edit/popup-add-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/movies/popup-add-edit/popup-add-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: PopupAddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupAddEditComponent", function() { return PopupAddEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/movie */ "./src/app/models/movie.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/movies.service */ "./src/app/services/movies.service.ts");






var PopupAddEditComponent = /** @class */ (function () {
    function PopupAddEditComponent(moviesService, bsModalRef, formBuilder) {
        this.moviesService = moviesService;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    PopupAddEditComponent.prototype.ngOnInit = function () {
        this.ctitle = this.movie.Title;
        this.movieForm = this.formBuilder.group({
            imdbID: [this.movie.imdbID],
            Title: [this.movie.Title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.existNameTitle()]],
            Year: [this.movie.Year, [this.validYear()]],
            Type: [this.movie.Type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Poster: [this.movie.Poster, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Runtime: [this.movie.Runtime, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Genre: [this.movie.Genre, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Director: [this.movie.Director, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    PopupAddEditComponent.prototype.closePopupEditMovie = function () {
        this.bsModalRef.hide();
    };
    PopupAddEditComponent.prototype.onSubmitActionEditMovie = function () {
        if (this.Action == "Add") {
            this.onSubmitActionAddMovie();
        }
        else {
            this.submitted = true;
            if (this.movieForm.invalid) {
                return;
            }
            this.moviesService.updateMovie(this.movie).subscribe();
            this.closePopupEditMovie();
        }
    };
    PopupAddEditComponent.prototype.onSubmitActionAddMovie = function () {
        this.submitted = true;
        if (this.movieForm.invalid) {
            return;
        }
        this.moviesService.addMovie(this.movie).subscribe();
        this.closePopupEditMovie();
    };
    PopupAddEditComponent.prototype.validYear = function () {
        return function (control) {
            var yearControl = control.value;
            var date = new Date();
            date.setFullYear(yearControl, 0, 1);
            if ((date.getFullYear() == yearControl) && (date.getMonth() == 0) && (date.getDate() == 1)) {
                return null;
            }
            else {
                console.log(yearControl ? { 'datevalid': true } : null);
                return yearControl ? { 'datevalid': true } : null;
            }
        };
    }; //validYear END
    PopupAddEditComponent.prototype.existNameTitle = function () {
        var _this = this;
        return function (control) {
            var titleControl = control.value;
            clearTimeout(_this.settimeoutObj);
            if (titleControl != "") {
                new Promise(function (resolve, reject) {
                    _this.settimeoutObj = setTimeout(function () {
                        _this.moviesService.getMovieByTitle(titleControl).subscribe(function (res) {
                            if (res.hasOwnProperty('Title')) {
                                if (titleControl.toLowerCase() != _this.ctitle.toLowerCase()
                                    && String(res["Title"]).toLowerCase() === titleControl.toLowerCase()) {
                                    console.log("existvalid");
                                    resolve(titleControl ? { 'existvalid': true } : null);
                                }
                                else {
                                    resolve(null);
                                }
                            }
                            else {
                                resolve(null);
                            }
                        });
                    }, 700);
                }).then(function (result) {
                    console.log(result);
                    return result;
                });
            }
            else {
                return null;
            }
        }; //existNameTitle END
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopupAddEditComponent.prototype, "Action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], PopupAddEditComponent.prototype, "movie", void 0);
    PopupAddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-popup-add-edit]',
            template: __webpack_require__(/*! ./popup-add-edit.component.html */ "./src/app/components/movies/popup-add-edit/popup-add-edit.component.html"),
            styles: [__webpack_require__(/*! ./popup-add-edit.component.scss */ "./src/app/components/movies/popup-add-edit/popup-add-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PopupAddEditComponent);
    return PopupAddEditComponent;
}());



/***/ }),

/***/ "./src/app/components/movies/popup-delete/popup-delete.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/movies/popup-delete/popup-delete.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Delete Movie</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closePopupDeleteMovie()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>are you sure delete <strong>{{Title}}</strong> movie.</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"  (click)=\"closePopupDeleteMovie()\">No</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"actionDeleteMovie()\" >Yes</button>\n  </div>"

/***/ }),

/***/ "./src/app/components/movies/popup-delete/popup-delete.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/movies/popup-delete/popup-delete.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzL3BvcHVwLWRlbGV0ZS9wb3B1cC1kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/movies/popup-delete/popup-delete.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/movies/popup-delete/popup-delete.component.ts ***!
  \**************************************************************************/
/*! exports provided: PopupDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDeleteComponent", function() { return PopupDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/movies.service */ "./src/app/services/movies.service.ts");




var PopupDeleteComponent = /** @class */ (function () {
    function PopupDeleteComponent(moviesService, bsModalRef) {
        this.moviesService = moviesService;
        this.bsModalRef = bsModalRef;
    }
    PopupDeleteComponent.prototype.ngOnInit = function () {
    };
    PopupDeleteComponent.prototype.closePopupDeleteMovie = function () {
        this.bsModalRef.hide();
    };
    PopupDeleteComponent.prototype.actionDeleteMovie = function () {
        this.moviesService.deleteMovie(this.itemSelectDelete);
        this.closePopupDeleteMovie();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopupDeleteComponent.prototype, "itemSelectDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopupDeleteComponent.prototype, "Title", void 0);
    PopupDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-popup-delete]',
            template: __webpack_require__(/*! ./popup-delete.component.html */ "./src/app/components/movies/popup-delete/popup-delete.component.html"),
            styles: [__webpack_require__(/*! ./popup-delete.component.scss */ "./src/app/components/movies/popup-delete/popup-delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], PopupDeleteComponent);
    return PopupDeleteComponent;
}());



/***/ }),

/***/ "./src/app/helpers/pipes.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/pipes.ts ***!
  \**********************************/
/*! exports provided: TitleFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleFormatPipe", function() { return TitleFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitleFormatPipe = /** @class */ (function () {
    function TitleFormatPipe() {
    }
    TitleFormatPipe.prototype.transform = function (value) {
        var res = "";
        var isSpace = false;
        for (var i = 0; i < value.length; i++) {
            if (value[i] === " ") {
                isSpace = true;
            }
            else {
                if (value.charCodeAt(i) > 64 && value.charCodeAt(i) < 90
                    || value.charCodeAt(i) > 96 && value.charCodeAt(i) < 123) {
                    res += ((isSpace) ? " " : "") + ((isSpace || i == 0) ? value[i].toUpperCase() : value[i].toLowerCase());
                    isSpace = false;
                }
            }
        }
        return res;
    };
    TitleFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'TitleFormat' })
    ], TitleFormatPipe);
    return TitleFormatPipe;
}());



/***/ }),

/***/ "./src/app/models/movie.ts":
/*!*********************************!*\
  !*** ./src/app/models/movie.ts ***!
  \*********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());

//Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"


/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.apiUrl = "https://www.omdbapi.com";
        this.apikey = "cf43f6db";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET,POST,PUT",
            })
        };
    }
    MoviesService.prototype.addMovie = function (movie) {
        return this.http.post(this.apiUrl + "/Movie", movie, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MoviesService.prototype.updateMovie = function (movie) {
        return this.http.put(this.apiUrl + "/Movie", movie, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MoviesService.prototype.deleteMovie = function (id) {
        var apiParams = "/delete?id=" + id + "&apikey=" + this.apikey;
        var url = "" + this.apiUrl + apiParams;
        this.http.get(url).pipe().subscribe(),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError);
    };
    MoviesService.prototype.getListMovies = function () {
        var apiParams = "?s=Home&page=1&plot=short&type=movie&apikey=" + this.apikey;
        var url = "" + this.apiUrl + apiParams;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data["Search"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MoviesService.prototype.getItems = function (Movies) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Movies).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (movie, index) {
            return _this.http.get(_this.apiUrl + "?i=" + movie.imdbID + "&apikey=" + _this.apikey);
        }));
    };
    MoviesService.prototype.getMovieByTitle = function (title) {
        var apiParams = "?t=" + title + "&apikey=" + this.apikey;
        return this.http.get(this.apiUrl + apiParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    MoviesService.prototype.handleError = function (error) {
        console.log(error);
        // return an observable with a user friendly message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Error! something went wrong.');
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\HeroloMovieList\HeroloMoviesV4\HeroloMovies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map