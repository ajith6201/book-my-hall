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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookmyhall_home_bookmyhall_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmyhall-home/bookmyhall-home.component */ "./src/app/bookmyhall-home/bookmyhall-home.component.ts");
/* harmony import */ var _bookmyhall_aboutus_bookmyhall_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookmyhall-aboutus/bookmyhall-aboutus.component */ "./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.ts");
/* harmony import */ var _bookmyhall_vision_mission_bookmyhall_vision_mission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmyhall-vision-mission/bookmyhall-vision-mission.component */ "./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.ts");






var routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: _bookmyhall_home_bookmyhall_home_component__WEBPACK_IMPORTED_MODULE_3__["BookmyhallHomeComponent"]
    },
    {
        path: 'aboutus', component: _bookmyhall_aboutus_bookmyhall_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["BookmyhallAboutusComponent"]
    },
    {
        path: 'vision-mission', component: _bookmyhall_vision_mission_bookmyhall_vision_mission_component__WEBPACK_IMPORTED_MODULE_5__["BookmyhallVisionMissionComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'book-my-hall';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _bookmyhall_home_bookmyhall_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookmyhall-home/bookmyhall-home.component */ "./src/app/bookmyhall-home/bookmyhall-home.component.ts");
/* harmony import */ var _bookmyhall_aboutus_bookmyhall_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmyhall-aboutus/bookmyhall-aboutus.component */ "./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.ts");
/* harmony import */ var _bookmyhall_vision_mission_bookmyhall_vision_mission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookmyhall-vision-mission/bookmyhall-vision-mission.component */ "./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _bookmyhall_home_bookmyhall_home_component__WEBPACK_IMPORTED_MODULE_8__["BookmyhallHomeComponent"],
                _bookmyhall_aboutus_bookmyhall_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["BookmyhallAboutusComponent"],
                _bookmyhall_vision_mission_bookmyhall_vision_mission_component__WEBPACK_IMPORTED_MODULE_10__["BookmyhallVisionMissionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tteWhhbGwtYWJvdXR1cy9ib29rbXloYWxsLWFib3V0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bookmyhall-aboutus works!\n</p>\n"

/***/ }),

/***/ "./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.ts ***!
  \********************************************************************/
/*! exports provided: BookmyhallAboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmyhallAboutusComponent", function() { return BookmyhallAboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookmyhallAboutusComponent = /** @class */ (function () {
    function BookmyhallAboutusComponent() {
    }
    BookmyhallAboutusComponent.prototype.ngOnInit = function () {
    };
    BookmyhallAboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookmyhall-aboutus',
            template: __webpack_require__(/*! ./bookmyhall-aboutus.component.html */ "./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.html"),
            styles: [__webpack_require__(/*! ./bookmyhall-aboutus.component.css */ "./src/app/bookmyhall-aboutus/bookmyhall-aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookmyhallAboutusComponent);
    return BookmyhallAboutusComponent;
}());



/***/ }),

/***/ "./src/app/bookmyhall-home/bookmyhall-home.component.css":
/*!***************************************************************!*\
  !*** ./src/app/bookmyhall-home/bookmyhall-home.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tteWhhbGwtaG9tZS9ib29rbXloYWxsLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bookmyhall-home/bookmyhall-home.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bookmyhall-home/bookmyhall-home.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    .meeting_title_para a {\n    color: #00008B;\n    }\n    .meeting_title {\n    font-size: 16px;\n    color: #66659d;\n    font-weight: bold;\n    }\n    .panel-newheading {\n    padding: 5px 0px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    border-top: 1px dotted #999;\n    }\n    .text-maroon {\n    color: #d81b60 !important;\n}\n </style>\n <div class=\"row\">\n    <div class=\"col-sm-3\">\n       <div class=\"col-md-3\" style=\"max-width:100%\">\n          <h2>Schemes </h2>\n          <!--<i class=\"fa    fa-quote-left text-orange\"></i>-->\n          <div class=\"meeting_title_para\">\n             <div class=\"panel-group\">\n                <div class=\"panel-newheading hover\">\n                   <a data-toggle=\"collapse\" href=\"#collapse1\" class=\"meeting_title collapsed\" aria-expanded=\"false\"><i class=\"glyphicon glyphicon-chevron-right\"></i> Scholarship</a>\t\t\t\t\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse\" aria-expanded=\"false\" style=\"height: 0px;\">\n                   <div class=\"panel-body\">\n                      <ul>\n                         <li><a href=\"Scholarship.asp\" class=\"text-yellow\">Scholarship</a></li>\n                         <li><a href=\"PreMetricScholarship.asp\" class=\"text-orange\">Pre-Matric Scholarship</a></li>\n                         <li><a href=\"PostMetricScholarship.asp\" class=\"text-purple\">Post-Matric Scholarship</a></li>\n                         <li><a href=\"MeritCumMeansScholarship.asp\" class=\"text-green\">Merit-Cum-Means Scholarship</a></li>\n                      </ul>\n                   </div>\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"FeeReimbursement.asp\">Fee Reimbursement</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"ForiegnScholarship.asp\"> Foriegn Scholarship</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"Vidyasiri.asp\"> Vidyasiri Scheme</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"Hostels.asp\"> Hostels</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"collapse\" href=\"#collapse2\" class=\"meeting_title\"><i class=\"glyphicon glyphicon-chevron-right\"></i>  Residential Schools</a>\t\t\t\t\n                </div>\n                <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                   <div class=\"panel-body\">\n                      <ul>\n                         <li><a href=\"MDSchool.asp\" class=\"text-red\">Morarji Desai School</a></li>\n                         <li><a href=\"MDCollege.asp\" class=\"text-green\">Morarji Desai College</a></li>\n                         <li><a href=\"MuslimResSchool.asp\" class=\"text-orange\">Muslim Residential School</a></li>\n                         <li><a href=\"ModelResSchool.asp\" class=\"text-violet\">Model Residential School</a></li>\n                      </ul>\n                   </div>\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"MASchool.asp\"> Moulana Azad School</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"Shaadimahal.asp\"> Shaadimahal Scheme</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"NursingParaMedicalTraining.asp\"> Nursing and Para Medical</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"Trainings.asp\"> Coaching/ Trainings</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"Bidaai.asp\"> Bidaai</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"ChristianDevelopment.asp\"> Christian Development</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"JainDevelopment.asp\"> Jain/Sikh Development</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"collapse\" href=\"#collapse3\" class=\"meeting_title\"><i class=\"glyphicon glyphicon-chevron-right\"></i> Incentives (Uttejana)</a>\t\t\t\t\n                </div>\n                <div id=\"collapse3\" class=\"panel-collapse collapse\">\n                   <div class=\"panel-body\">\n                      <ul>\n                         <li><a href=\"B.Ed.D.Ed..asp\" class=\"text-black\">B.Ed. &amp; D.Ed. Incentive </a></li>\n                         <li><a href=\"IITIIMIISc.asp\" class=\"text-orange\">IIT, IIM, NIT &amp; IISc</a></li>\n                         <li><a href=\"Journalism.asp\" class=\"text-green\">Journalism &amp; Mass Communication</a></li>\n                         <li><a href=\"sslc_puc.asp\" class=\"text-red\">SSLC &amp; 2nd PUC</a></li>\n                         <li><a href=\"IntegratedCourse.asp\" class=\"text-violet\">Integrated Course</a></li>\n                      </ul>\n                   </div>\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"MadarasaScheme.asp\">Madarasa Schemes</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"MPhilPhD.asp\"> M.Phil and Ph.D Fellowship</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"ColonyDevelopment.asp\"> Colony Development</a>\t\t\t\t\n                </div>\n                <div class=\"panel-newheading\">\n                   <a data-toggle=\"href\" class=\"meeting_title\" href=\"ReligiousMinorities.asp\">Chair on Religious Minoritites</a>\t\t\t\t\n                </div>\n             </div>\n          </div>\n       </div>\n    </div>\n    <div class=\"col-sm-6\">\n       <div class=\"container\">\n          <h2>Gallery</h2>\n          <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n            <!-- Indicators -->\n            <ul class=\"carousel-indicators\">\n              <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n              <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n            </ul>\n            \n            <!-- The slideshow -->\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img src=\"assets/hall1.jpg\" alt=\"Los Angeles\" width=\"1100\" height=\"500\">\n              </div>\n              <div class=\"carousel-item\">\n                <img src=\"assets/hall2.jpg\" alt=\"Chicago\" width=\"1100\" height=\"500\">\n              </div>\n              <div class=\"carousel-item\">\n                <img src=\"assets/hall3.jpg\" alt=\"New York\" width=\"1100\" height=\"500\">\n              </div>\n            </div>\n            \n            <!-- Left and right controls -->\n            <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\"></span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\"></span>\n            </a>\n          </div>       \n       </div>\n       <div _ngcontent-c3=\"\" class=\"row\">\n          <div _ngcontent-c3=\"\" class=\"col-md-6\">\n             <h2 _ngcontent-c3=\"\">Schemes </h2>\n             <div _ngcontent-c3=\"\" class=\"meeting_title_para\">\n                <div _ngcontent-c3=\"\" class=\"panel-group\">\n                   <div _ngcontent-c3=\"\" class=\"panel-newheading\"><a _ngcontent-c3=\"\" class=\"meeting_title\" data-toggle=\"href\" href=\"SSAKResearchCentre.asp\">Sir Syed Ahmed Khan Study and Research Centre</a></div>\n                   <div _ngcontent-c3=\"\" class=\"panel-newheading\"><a _ngcontent-c3=\"\" class=\"meeting_title\" data-toggle=\"href\" href=\"DistLevelSchemes.asp\">District Level Schemes </a></div>\n                   <div _ngcontent-c3=\"\" class=\"panel-newheading\"><a _ngcontent-c3=\"\" class=\"meeting_title\" data-toggle=\"href\" href=\"MSDP.asp\">MSDP</a></div>\n                   <div _ngcontent-c3=\"\" class=\"panel-newheading\"><a _ngcontent-c3=\"\" class=\"meeting_title\" data-toggle=\"href\" href=\"PMProgramme.asp\">Prime Minister 15 Point Program</a></div>\n                   <div _ngcontent-c3=\"\" class=\"panel-newheading\"><a _ngcontent-c3=\"\" class=\"meeting_title\" data-toggle=\"href\" href=\"CMSchemes.asp\"> Chief Minister Schemes </a></div>\n                </div>\n             </div>\n          </div>\n          <div _ngcontent-c3=\"\" class=\"col-md-6\">\n             <div _ngcontent-c3=\"\">\n                <h2 _ngcontent-c3=\"\">Notifications</h2>\n                <div _ngcontent-c3=\"\" class=\"meeting_title_para\">\n                   <ul _ngcontent-c3=\"\" class=\"meeting_title  list-unstyled NEWS\">\n                      <li _ngcontent-c3=\"\">\n                         <div _ngcontent-c3=\"\" class=\"w100 w100first\">\n                            <div _ngcontent-c3=\"\" class=\"meeting_title_para \"><a _ngcontent-c3=\"\" class=\"meeting_title text-maroon\" href=\"Recruitment.asp\"><i _ngcontent-c3=\"\" class=\"fa fa-link\"></i><strong _ngcontent-c3=\"\">Minority Dept Recruitment</strong></a></div>\n                         </div>\n                      </li>\n                      <li _ngcontent-c3=\"\">\n                         <div _ngcontent-c3=\"\" class=\"w100 w100first\">\n                            <div _ngcontent-c3=\"\" class=\"meeting_title_para\"><a _ngcontent-c3=\"\" class=\"meeting_title text-maroon\" href=\"GO.asp\"><i _ngcontent-c3=\"\" class=\"fa fa-link\"></i><strong _ngcontent-c3=\"\">Government Orders</strong></a></div>\n                         </div>\n                      </li>\n                      <li _ngcontent-c3=\"\">\n                         <div _ngcontent-c3=\"\" class=\"w100 w100first\">\n                            <div _ngcontent-c3=\"\" class=\"meeting_title_para\"><a _ngcontent-c3=\"\" class=\"meeting_title text-maroon\" href=\"Budget.asp\"><i _ngcontent-c3=\"\" class=\"fa fa-link\"></i><strong _ngcontent-c3=\"\"> Budget </strong></a></div>\n                         </div>\n                      </li>\n                      <li _ngcontent-c3=\"\">\n                         <div _ngcontent-c3=\"\" class=\"w100 w100first\">\n                            <div _ngcontent-c3=\"\" class=\"meeting_title_para\"><a _ngcontent-c3=\"\" class=\"meeting_title text-maroon\" href=\"CensusReport.asp\"><i _ngcontent-c3=\"\" class=\"fa fa-link\"></i><strong _ngcontent-c3=\"\"> Census Report 2001 and 2011 </strong></a></div>\n                         </div>\n                      </li>\n                      <li _ngcontent-c3=\"\">\n                         <div _ngcontent-c3=\"\" class=\"w100 w100first\">\n                            <div _ngcontent-c3=\"\" class=\"meeting_title_para\"><a _ngcontent-c3=\"\" class=\"meeting_title text-maroon\" href=\"https://dom.karnataka.gov.in/#\"><i _ngcontent-c3=\"\" class=\"fa fa-link\"></i><strong _ngcontent-c3=\"\"> Asset Management Portal </strong></a></div>\n                         </div>\n                      </li>\n                   </ul>\n                </div>\n             </div>\n          </div>\n       </div>\n    </div>\n    <div class=\"col-md-3\">\n       <h2>Latest News</h2>\n       <script>\n          $('.marquee-vert').marquee({\n          direction: 'up',\n          speed: slow\n          });\n       </script>\n       <div>\n          <!--<i class=\"fa    fa-quote-left text-purple\"></i>-->\n          <marquee direction=\"up\" height=\"380\" scrollamount=\"3\" onmouseover=\"this.stop()\" onmouseout=\"this.start()\">\n             <ul class=\"meeting_title list-unstyled NEWS\">\n                <li><a href=\"Documents\\Latest News\\NOS - for the year 2018-19 (second List-Fresh Candidates).pdf\" class=\"text-blue\" target=\"blank\"> <i class=\"fa  fa-star text- blue text-justify\"></i><b> Sanction and release of grants under National Overseas Scholarship to the minority students for the year 2018-19 (Batch-2)</b></a></li>\n                <li><a href=\"Documents\\Latest News\\Revised intimation letter -2ND LIST.pdf\" class=\"text-blue\" target=\"blank\"> <i class=\"fa  fa-star text- blue text-justify\"></i><b> Intimation for National Overseas Scholarship to the minority students for the year 2018-19 (Batch-2)</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Rev_Overseas 1st Batch Release list 2018-19.pdf\" class=\"text-purple\" target=\"blank\"> <i class=\"fa  fa-star text- purple text-justify\"></i><b> Sanction and release of grants under National Overseas Scholarship to the minority students for the year 2018-19 (Batch-1)</b></a></li>\n                <li><a href=\"Documents\\Latest News\\Revised intimation letter.pdf\" class=\"text-purple\" target=\"blank\"> <i class=\"fa  fa-star text- purple text-justify\"></i><b> Intimation for National Overseas Scholarship to the minority students for the year 2018-19 (Batch-1)</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\How to Update Account Number.pdf\" class=\"text-maroon\" target=\"blank\"> <i class=\"fa  fa-star text- maroon text-justify\"></i><b>How to Update Account Number under NSP 2018-19</b></a></li>\n                <br>\n                <li><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSe0ONL3HRklatU_C-k6uInpWB6zWh2sgKD-ZdEQkVrOGJajDw/viewform?usp=sf_link\" class=\"text-maroon\" target=\"blank\"> <i class=\"fa  fa-star text- maroon text-justify\"></i><b>  Online Registration Link for Special Incentive of Rs 25000/- to students Pursuing B.Ed.&amp; D.Ed. Courses,Last Date for Application is 15/12/2018.</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\B.Ed. &amp; D.Ed. Extension Notification.pdf\" class=\"text-blue\" target=\"blank\"> <i class=\"fa  fa-star text- blue text-justify\"></i><b>  Notification along with District Offices Addresses to Provide Special Incentive of amount Rs 25000/- P.A(Maximium Two Years) to students pursing B.Ed.&amp; D.Ed.Courses,Last Date has been Extended till 15/12/2018</b></a></li>\n                <br>\n                <li><a href=\"http://www.kpsc.kar.nic.in/indexk.html#\" class=\"text-purple\" target=\"blank\"><i class=\"fa  fa-arrow text- purple text-justify\"></i><b>Provisional Selection Lists by KPSC for various assets of Minorities(MDRS/MDR PU College/Minority Boys/girls Hostels)  </b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep36.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- black text-justify\"></i><b> WARDEN BOYS/GIRLS </b> </a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep6.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> URDU TEACHERS IN MDRS IN DEPT OF MINORITY WELFARE </b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep9.txt \" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> SUBJECT TEACHER SOCIAL SCIENCE IN MDRS </b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep10.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> SUBJECT TEACHER MATHS IN MDRS (URDU)</b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep12.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> SUBJECT TEACHER SOCIAL SCIENCE IN MDRS (URDU)\n                   </b></a>\n                </li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep18.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> WARDEN IN MDR PU COLLEGE </b></a></li>\n                <li><a href=\" http://www.kpsc.kar.nic.in/sep19.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> WARDEN IN MDRS </b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep33.txt \" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> SUPERINTENDENTS OF PRE METRIC GIRLS HOSTEL (WOMEN) IN MDRS </b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep32.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> SUPERINTENDENTS OF PRE METRIC BOYS HOSTEL (MEN) IN MDRS</b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep23.txt \" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b>  WARDENS OF POST METRIC HOSTEL (WOMEN)</b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep22.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> WARDENS OF POST METRIC HOSTEL (MEN)</b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep21.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> FIRST DIVISION COMPUTER ASSISTANT IN MDRS </b></a></li>\n                <li><a href=\"http://www.kpsc.kar.nic.in/sep20.txt\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> FIRST DIVISION COMPUTER ASSISTANT IN MDR PU COLLEGE</b></a></li>\n                <br>\n                <li><a href=\"http://www.kpsc.kar.nic.in/indexk.html\" class=\"text-olive\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> KPSC Website Link</b></a></li>\n                <li><a href=\"https://kpscrecruitment.in/RPS/Home.aspx\" class=\"text-navy\" target=\"blank\"> <i class=\"fa  fa-star text- navy text-justify\"></i><b> Online Applicaion Link for HM &amp; Teachers Post in Govt.MAMS </b></a></li>\n                <br>\n                <li><a href=\"\" class=\"text-maroon\" target=\"blank\"> <i class=\"fa  fa-star text- maroon text-justify\"></i><b>Attention - Dear Students, \n                   Submit your hard copies of application along with enclosures immediately to your concerned Taluk or District Minority Officer for verification within 27/11/2018. If you dont submit your hard copy of your application. you will not be selected for scholarship. If already submitted ignore.</b></a>\n                </li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Recruitment at MAMS.pdf\" class=\"text-maroon\" target=\"blank\"> <i class=\"fa  fa-star text- maroon text-justify\"></i><b> Recruitment by KPSC for Head Masters &amp; Teachers in Govt.Maulana Azad English Model School Managed by Directorate of Minorities. </b></a></li>\n                <br>\n                <li><i class=\"fa  fa-star text- purple text-justify\"></i><b>Helpline for Queries regarding B.Ed.&amp;D.Ed.Incentive and Free Army Training Schemes <br>Email:gokdomnewschemes2018@gmail.com<br>Contact:08022535920 </b></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Physical &amp; educational requirements and other docs.pdf\" class=\"text-red\" target=\"blank\"> <i class=\"fa  fa-star text- green text-justify\"></i><b> Physical &amp; educational requirements for joining indian army training and openings in indian army </b></a></li>\n                <br>\t\n                <li><a href=\"https://joinindianarmyi.com/karnataka-army-open-rally-bharti/\" class=\"text-blue\" target=\"blank\"> <i class=\"fa  fa-star text- green text-justify\"></i><b>  Karnataka Army Open Rally District Wise Complete Information </b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Free Training for Joining Indian Army notification.pdf\" class=\"text-purple\" target=\"blank\"> <i class=\"fa  fa-star text- green text-justify\"></i><b> Free training with food &amp; accomodation to minority students to join Indian Land Army,Naval Army,Air Force &amp; other allied forces, Paper Notification Dated:16/11/2018.</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Revised GO for Training to Minority students to Join Army Services.pdf\" class=\"text-navy\" target=\"blank\"> <i class=\"fa  fa-star text- green text-justify\"></i><b>  Government Order for Providing Free training with food &amp; accomodation to minority students who are interested to join Indian Army, Dated:11/10/2018.</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\SSPLastDate.PNG\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- black text-justify\"></i><b> Last Date for Apply under State Scholarship portal (SSP) is extended upto 30/11/2018.</b></a></li>\n                <br>\n                <li><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSeucfef4rdAuG4PtJWramD_Cem2tK38D0-wJpgZIEeqorw2ag/viewform?usp=sf_link\" class=\"text-green\" target=\"blank\"> <i class=\"fa  fa-star text- green text-justify\"></i><b>  Online Registration Link for free training with accomodation to minority students to join Defence Forces(Indian Army and allied forces),Last Date for Application is 30/11/2018.</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Grant Release for Colony Development.pdf\" class=\"text-purple\" target=\"blank\"> <i class=\"fa  fa-star text- purple text-justify\"></i><b> Colony Development Release Order,Dated:05/11/2018 </b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Institute Last Date.pdf\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- black text-justify\"></i><b> Attention Institute: Last Date for Institutes/Schools/Colleges to verify online application under NSP 2018-19 is 15/11/2018.</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Procedure for correction_NSP.pdf\" class=\"text-blue\" target=\"blank\"> <i class=\"fa  fa-star text- blue text-justify\"></i><b> Procedure for correction in the NSP online applications already Submitted </b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\B-ed &amp; D-ed incentives 15-Oct-2018 14-40-22(2).pdf\" class=\"text-purple\" target=\"blank\"> <i class=\"fa  fa-star text- purple text-justify\"></i><b> Government Order to Provide Special Incentive of amount Rs 25000/- P.A(Maximium Two Years) to students pursing B.Ed.&amp; D.Ed.Courses  </b></a></li>\n                <br>\n                <li><a href=\"https://gokdom.kar.nic.in/Scholarship.asp\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- black text-justify\"></i><b> NSP &amp; SSP 2018-19</b></a></li>\n                <br>\n                <li><a href=\"https://gokdom.kar.nic.in/MeritCumMeansScholarship.asp\" class=\"text-red\" target=\"blank\"> <i class=\"fa  fa-star text- red text-justify\"></i><b> Transaction Failure List GOK - MCM 2017-18</b></a></li>\n                <br>\n                <li><a href=\"https://gokdom.kar.nic.in/PostMetricScholarship.asp\" class=\"text-red\" target=\"blank\"> <i class=\"fa  fa-star text- red text-justify\"></i><b> Transaction Failure List GOK - PMS 2017-18</b></a></li>\n                <br>\n                <li><a href=\"https://gokdom.kar.nic.in/FeeReimbursement.asp\" class=\"text-red\" target=\"blank\"> <i class=\"fa  fa-star text- red text-justify\"></i><b> Transaction Failure List  GOK - Fee Reimbursement 2017-18</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Income Limit Increased from 6L to 8L.pdf\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- black text-justify\"></i><b> Annual Income Limit is Increased from 6 lakhs to 8 lakhs for claiming reservation under categories 2A,2B,3A &amp; 3B.</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Journalism Incentive Notification 2018-19.pdf\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b>  Incentive to Journalism &amp; Mass Communication Students Notification 2018-19 </b></a></li>\n                <li><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSc2a2GLgT9EhOxego8yqQ4c68M2tM5KABE7NW-2C9SsXW1TgQ/viewform?usp=sf_link \" class=\"text-maroon\" target=\"blank\"> <i class=\"fa  fa-star text- maroon text-justify\"></i><b> Online Registration </b> </a></li>\n                <li><a href=\"Documents\\Latest News\\Application_Journalism1819.pdf\" class=\"text-black\" target=\"blank\"> <i class=\"fa  fa-star text- olive text-justify\"></i><b> Offline Form</b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\GO for Minority Certificate.pdf\" class=\"text-teal\" target=\"blank\"> <i class=\"fa  fa-star text- teal text-justify\"></i><b>Govt Order to Provide Minority Certificate by Tahsildar's to students belonging to Minority Communities </b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\314  notification  Hostels.pdf\" class=\"text-light-blue\" target=\"blank\"> <i class=\"fa  fa-star text- light-blue text-justify\"></i><b> List of Minority Hostels for Admission </b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\Moulana Azad School Address list.pdf\" class=\"text-yellow\" target=\"blank\"><i class=\"fa  fa-star text- yellow text-justify\"></i><b> List of Moulana azad Model School(English Medium) for Admissions </b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\129 MDRS Notification 2018-19.pdf\" class=\"text-aqua\" target=\"blank\"><i class=\"fa  fa-star text- aqua text-justify\"></i><b> List of Minority Residential Schools and Colleges for Admission </b></a></li>\n                <br>\n                <li><a href=\"Documents\\Latest News\\phd &amp; Mphil Notification 2018-19.pdf\" class=\"text-blue\" target=\"blank\"> <i class=\"fa  fa-star text- blue text-justify\"></i><b> Notification for Ph.D/Mphil Fellowship 2018-19.</b></a></li>\n                <li><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSc8CFNAdpIhdfrvIgbP4QXkvDPi1zNUBSyP9-sjJkwPeOpzLQ/viewform?usp=sf_link&#10;\" class=\"text-blue\" target=\"blank\"> <i class=\"fa  fa-star text- blue text-justify\"></i><b>Online Application for Ph.D &amp; Mphil Scholars 2018-19</b></a></li>\n                <br>\n             </ul>\n          </marquee>\n       </div>\n       <div>\n          <h3><i class=\"glyphicon glyphicon-earphone\"></i> Contact Us</h3>\n       </div>\n       <div>\n          <p>Directorate of Minorities, 20th &amp; 21st Floor, V V Towers(Main),\n             Dr. B R Ambedkar Veedhi, Bangalore - 560001\n          </p>\n       </div>\n       <h2><strong>HELPLINE - 080   22535900</strong></h2>\n       <div>\n          <h2> <strong> Connect with us on </strong></h2>\n          <a target=\"_blank\" href=\"https://www.facebook.com/itcell.gokdom.9\" role=\"link\"><img alt=\"Facebook\" src=\"assets/fb.png\"></a>\n          <a target=\"_blank\" href=\"https://www.twitter.com/DOMGOK\" role=\"link\"><img alt=\"Twitter\" src=\"assets/twitter.png\"></a>\n          <a target=\"_blank\" href=\"https://plus.google.com/+Directorgokdom\" role=\"link\"><img src=\"assets/googleplus.png\"></a>\n          <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCKMYrolow7yHdUBn72sj97w\" role=\"link\"><img src=\"assets/youtube.png\"></a>\n          <a target=\"_blank\" href=\"https://www.linkedin.com/in/dir-of-minorities-government-of-karnataka-a7a97315a/\" role=\"link\"><img src=\"assets/Linkedin.jpg\"></a>\n          <!--<a target=\"_blank\" href=\"https://www.gmail.com\" role=\"link\"><img src=\"Images/gmail.png\"></a>\t\t\t-->\n          <a target=\"_blank\" href=\"https://goo.gl/maps/UjCtBa2FHBu\" role=\"link\"><img src=\"assets/map_2.png\"></a>\n          <a target=\"_blank\" href=\"https://www.instagram.com/directorate_of_minorities/\" role=\"link\"><img src=\"assets/Instagram.jpg\"></a>\n       </div>\n       <div class=\"w100 w100first\">\n          <div class=\"meeting_title_para\">\n             <a href=\"Links.asp\" class=\"meeting_title text-red\" target=\"_blank\">\n             <i class=\"glyphicon glyphicon-link\"></i> Related Links </a>\t\t\t\t\t\t\t   \n          </div>\n       </div>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/bookmyhall-home/bookmyhall-home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bookmyhall-home/bookmyhall-home.component.ts ***!
  \**************************************************************/
/*! exports provided: BookmyhallHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmyhallHomeComponent", function() { return BookmyhallHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookmyhallHomeComponent = /** @class */ (function () {
    function BookmyhallHomeComponent() {
    }
    BookmyhallHomeComponent.prototype.ngOnInit = function () {
    };
    BookmyhallHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookmyhall-home',
            template: __webpack_require__(/*! ./bookmyhall-home.component.html */ "./src/app/bookmyhall-home/bookmyhall-home.component.html"),
            styles: [__webpack_require__(/*! ./bookmyhall-home.component.css */ "./src/app/bookmyhall-home/bookmyhall-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookmyhallHomeComponent);
    return BookmyhallHomeComponent;
}());



/***/ }),

/***/ "./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tteWhhbGwtdmlzaW9uLW1pc3Npb24vYm9va215aGFsbC12aXNpb24tbWlzc2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bookmyhall-vision-mission works!\n</p>\n"

/***/ }),

/***/ "./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BookmyhallVisionMissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmyhallVisionMissionComponent", function() { return BookmyhallVisionMissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookmyhallVisionMissionComponent = /** @class */ (function () {
    function BookmyhallVisionMissionComponent() {
    }
    BookmyhallVisionMissionComponent.prototype.ngOnInit = function () {
    };
    BookmyhallVisionMissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookmyhall-vision-mission',
            template: __webpack_require__(/*! ./bookmyhall-vision-mission.component.html */ "./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.html"),
            styles: [__webpack_require__(/*! ./bookmyhall-vision-mission.component.css */ "./src/app/bookmyhall-vision-mission/bookmyhall-vision-mission.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookmyhallVisionMissionComponent);
    return BookmyhallVisionMissionComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    border-top: 2px solid #ddd;\n    border-bottom: 2px solid #ddd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid line footer\">\n  <!-- Example row of columns -->\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n\t  \n      <a target=\"_blank\" href=\"http://www.minorityaffairs.gov.in/\" title=\"Minority Affairs GoI\"> <img src=\"assets/minorityaffairs.png\"></a>\n                  \n           \n     <a target=\"_blank\" href=\"http://www.karnataka.gov.in\" title=\"Govt. Of Karnataka\"> <img src=\"assets/karnataka.png\"></a>\n     \n      </div>\n\n <div class=\"col-sm-8 small  background-blue text-centers text-white\" style=\"background-color:#0073b7 !important\">\n \n \n Website Content Managed by Directorate of Minorities, Government of Karnataka. <br>\n Designed, Developed and Hosted by National Informatics Centre( NIC ).<br>\n Questions regarding content or presentation may be mail to: <strong>gokdom[at]gmail[dot]com</strong>       \n <br>\n Last Updated: <strong>13/12/2018</strong>\n</div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  h1 small {\n      padding: 2px 0px 0px 0px !important;\n      margin: 0px !important;\n      font-weight: bold;\n      font-size: 14px;\n      color: #fff !important;\n  }\n  h1 {\n      padding: 5px 0px 0px 0px !important;\n      margin: 0px !important;\n      font-weight: bold;\n      font-size: 30px;\n      color: #fff;\n      margin: 0 0;\n  }\n  p{\n    font-size: 14px;\n      font-weight: 400;\n  }\n  .list-inline >li{\n    display: inline-block;\n      padding-right: 5px;\n      padding-left: 5px;\n  }\n  .list-inline {\n      padding-left: 0;\n      margin-left: -5px;\n      list-style: none;\n  }\n  .gov{\n    padding:0 20px;\n  }\n  .pull-right {\n      float: right!important;\n  }\n  .navbar-nav >li>a{\n    font-weight: bold;\n    color:#fff;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .login-btn{\n    border: 1px solid white;\n    padding: 8px 12px 8px 12px !important;\n    margin: 5px 15px;\n  }\n  h1[_ngcontent-c1] {\n      padding: 2px 0px 0px 0px !important;\n  }\n  .pull-right {\n    float: right;}\n  .pull-right {\n    float: right!important; \n}\n  .pull-right[_ngcontent-c1] {\n    float: right!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtNQUNJLG9DQUFvQztNQUNwQyx1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQix1QkFBdUI7R0FDMUI7RUFDRDtNQUNJLG9DQUFvQztNQUNwQyx1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osWUFBWTtHQUNmO0VBQ0Q7SUFDRSxnQkFBZ0I7TUFDZCxpQkFBaUI7R0FDcEI7RUFDRDtJQUNFLHNCQUFzQjtNQUNwQixtQkFBbUI7TUFDbkIsa0JBQWtCO0dBQ3JCO0VBQ0Q7TUFDSSxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtHQUNwQjtFQUNEO0lBQ0UsZUFBZTtHQUNoQjtFQUNEO01BQ0ksdUJBQXVCO0dBQzFCO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7R0FDdEI7RUFDRDtJQUNFLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsaUJBQWlCO0dBQ2xCO0VBQ0Q7TUFDSSxvQ0FBb0M7R0FDdkM7RUFDRDtJQUNFLGFBQWEsQ0FBQztFQUVsQjtJQUNJLHVCQUF1QjtDQUMxQjtFQUNEO0lBQ0ksdUJBQXVCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGgxIHNtYWxsIHtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICBoMSB7XG4gICAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luOiAwIDA7XG4gIH1cbiAgcHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5saXN0LWlubGluZSA+bGl7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLmxpc3QtaW5saW5lIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICAuZ292e1xuICAgIHBhZGRpbmc6MCAyMHB4O1xuICB9XG4gIC5wdWxsLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1uYXYgPmxpPmF7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxuICAubG9naW4tYnRue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4IDhweCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA1cHggMTVweDtcbiAgfVxuICBoMVtfbmdjb250ZW50LWMxXSB7XG4gICAgICBwYWRkaW5nOiAycHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgfVxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O31cblxuLnB1bGwtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7IFxufVxuLnB1bGwtcmlnaHRbX25nY29udGVudC1jMV0ge1xuICAgIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container-fluid a1\" style=\"background: #deddde url('assets/bg.jpg') repeat-x;color:#fff\">\n    <div class=\"row\">\n      <div style=\"width:100%\">\n      \n      \n        <ul class=\"list-inline pull-right\" style=\"margin-bottom:10px;\">\n          <li><a class=\" text-white\" href=\"index_en.asp\"><i class=\"glyphicon glyphicon-home\"></i>Home</a></li>\n          <li><a class=\"kannada text-white\" href=\"index_kan.asp\"><i class=\"glyphicon glyphicon-refresh\">\n          </i>Kannada </a></li>\n  \n  \n          <!--- switch by syam -->\n          <li>\n            <!-- <a href=\"javascript:chooseStyle('accessibility', 60)\" class=\"text-white\" >\n             <i class=\"glyphicon glyphicon-adjust\"></i>\n             </a> -->\n  \n            <a class=\"decreaseFont text-white\">\n             <i class=\"glyphicon glyphicon-font minus\"></i>\n             </a>\n  \n             \n            <a class=\"increaseFont text-white\">\n             <i class=\"glyphicon glyphicon-font plus\"></i>\n             </a>\n             <a href=\"javascript:window.print();\" class=\"text-white\">\n             <i class=\"glyphicon glyphicon-print\"></i>\n             </a>\n  \n             </li>\n  \n            <!-- switch ends here -->\n                                                    \n        </ul>\n      </div>\n    </div>\n    \n      <!-- Example row of columns -->\n      <div class=\"row\" >\n        <div class=\"col-md-3 vmid text-center gov\">\n      \n    <img src=\"assets/cmk-eng.jpg\" alt=\"logo\" width=\"130px\" height=\"148px\">\n    <p>Sri H D Kumaraswamy<br> Hon'ble Chief Minister | Government of Karnataka </p>\n    </div>\n    \n     <div class=\"col-md-7 title text-center\">\n                 <img src=\"assets/logo govtk.jpg\" alt=\"logo\" width=\"100px\" height=\"100px\">\n     <!--<h1><h1 class=\"sub\"><small>Government of Karnataka</small></h1>-->\n     <h1></h1><h1 class=\"sub\"><small>Minority Welfare Department</small></h1>\n     <h1>Directorate of Minorities</h1>\n  <h1></h1><h1 class=\"sub\"><small>Karnataka</small></h1>\n    \n    </div>\n    \n    <div class=\"col-md-2 vmid text-center gov\" style=\"padding: 0 0\">\n                <img src=\"assets/mmwd1.jpg\" alt=\"logo\" width=\"130px\" height=\"148px\">\n                <p>Sri B Z Zameer Ahmed Khan<br> Hon'ble Minister of Minorities Welfare,Haj &amp; Wakf Board </p>\n      <!-- \n      <div class=\"row\">\n        \n        <div>\n          <button type=\"submit\" class=\"btn btn-warning helpline\"><i class=\"fa fa-phone \"></i>HELPLINE</button>  \n         </div>\t\t\n      </div>\n      -->\n    </div>\n    \n    \n    </div>\n  </div>\n  \n  \n  \n  <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\" style=\"padding-left:5%;padding-top: 0;padding-bottom: 0\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">      \n        <a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\n      </li>\n       <!-- Dropdown -->\n       <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\" >\n          About Us\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['aboutus']\">Administration</a>\n          <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['vision-mission']\">Reports</a>\n          <a class=\"dropdown-item\" href=\"#\">RTI</a>\n          <a class=\"dropdown-item\" href=\"#\">Downloads</a>\n          <a class=\"dropdown-item\" href=\"#\">Information Center</a>\n          <a class=\"dropdown-item\" href=\"#\">District Offices</a>\n          \n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Administration</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Reports</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">RTI</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Downloads</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Information Center</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">District Offices</a>\n      </li>\n      <!-- Dropdown -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          Media\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Administration</a>\n          <a class=\"dropdown-item\" href=\"#\">Reports</a>\n          <a class=\"dropdown-item\" href=\"#\">RTI</a>\n          <a class=\"dropdown-item\" href=\"#\">Downloads</a>\n          <a class=\"dropdown-item\" href=\"#\">Information Center</a>\n          <a class=\"dropdown-item\" href=\"#\">District Offices</a>        \n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Online Applications</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">PMU</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">FAQ</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link login-btn\" href=\"#\">Login</a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"row\">\n      <div class=\"col-md-1 text-white\">\n        <i class=\"fa fa-quote-left pull-right text-black\"></i>\n      </div>\n      <div class=\"col-md-10 text-red\">\n  \n        <marquee onmouseover=\"this.stop()\" onmouseout=\"this.start()\">\t \n            Civilization can be judged by the way it treats its Minorities - <label class=\"bold \"> Mahatma Gandhiji</label>\n            <i class=\"fa fa-child qbigger\"></i>\n            Education is the most powerful weapon which you can use to change the world - <label class=\"bold \"> Nelson Mandela</label>\n            <i class=\"fa fa-child qbigger\"></i>\n            An investment in knowledge pays the best interest - <label class=\"bold \"> Benjamin Franklin</label>\n            <i class=\"fa fa-child qbigger\"></i>\n            The roots of education are bitter, but the fruit is sweet - <label class=\"bold \"> Aristotle</label>\n        </marquee>\t\t \n      </div>\n      <div class=\"col-md-1 text-white\">\n        <i class=\"fa fa-quote-right text-black\"></i>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = __webpack_require__(/*! /home/developer/ang/book-my-hall/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map