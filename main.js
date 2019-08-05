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

/***/ "./src/app/agent-status/agent-status.component.html":
/*!**********************************************************!*\
  !*** ./src/app/agent-status/agent-status.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ng-autocomplete\">\n    <ng-autocomplete\n      [data]=\"Status\"\n      [searchKeyword]=\"keyword\"\n      placeHolder=\"Enter the Status\"\n      (selected)='selectEvent($event)'\n      (inputChanged)='onChangeSearch($event, null)'\n      (inputFocused)='onFocused($event)'\n      [itemTemplate]=\"itemTemplate\"\n      [notFoundTemplate]=\"notFoundTemplate\">\n    </ng-autocomplete>\n  \n    <ng-template #itemTemplate let-item>\n      <img [src]=\"item.image\" alt=\"\" />\n      <a [innerHTML]=\"item.name\"></a>\n    </ng-template>\n  \n    <ng-template #notFoundTemplate let-notFound>\n      <div [innerHTML]=\"notFound\"></div>\n    </ng-template>\n  </div>\n  "

/***/ }),

/***/ "./src/app/agent-status/agent-status.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/agent-status/agent-status.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-autocomplete {\n  width: 100%;\n  max-width: 600px;\n  display: table; }\n\n@media screen and (max-width: 767px) {\n  .ng-autocomplete {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQtc3RhdHVzL0Q6XFxtc2Qtd2lkZ2V0XFxsb2dpbmNybVxcY3JtbG9naW4vc3JjXFxhcHBcXGFnZW50LXN0YXR1c1xcYWdlbnQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBSWhCO0VBQ0U7SUFDRSxXQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2FnZW50LXN0YXR1cy9hZ2VudC1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctYXV0b2NvbXBsZXRlIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm5nLWF1dG9jb21wbGV0ZSB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/agent-status/agent-status.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent-status/agent-status.component.ts ***!
  \********************************************************/
/*! exports provided: AgentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentStatusComponent", function() { return AgentStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_subscriptions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/subscriptions.service */ "./src/app/services/subscriptions.service.ts");





var AgentStatusComponent = /** @class */ (function () {
    function AgentStatusComponent(http, cookieService, subscription) {
        this.http = http;
        this.cookieService = cookieService;
        this.subscription = subscription;
        this.keyword = 'name';
        this.Status = [
            { name: "At a Training Session", value: "Training", image: "../assets/images/mutecall.jpg" },
            { name: "At Lunch", value: "Lunch", image: "../assets/images/mutecall.jpg" },
            { name: "Available", value: "Available", image: "../assets/images/mutecall.jpg" },
            // { name: "Available, Forward", value: "AvailableForward", image: "../assets/images/mutecall.jpg"},
            { name: "Available, No ACD", value: "AvailableNoACD", image: "../assets/images/mutecall.jpg" },
            // { name: "Away from Desk", value: "AwayfromDesk", image: "../assets/images/mutecall.jpg"},
            { name: "Do not Disturb", value: "DonotDisturb", image: "../assets/images/mutecall.jpg" },
            { name: "Gone Home", value: "GoneHome", image: "../assets/images/mutecall.jpg" },
            { name: "In a Meeting", value: "InaMeeting", image: "../assets/images/mutecall.jpg" },
            // { name: "Not declared", value: "Notdeclared", image: "../assets/images/mutecall.jpg"},
            // { name: "On Vaction", value: "OnVaction", image: "../assets/images/mutecall.jpg"},
            // { name: "Others", value: "Others", image: "../assets/images/mutecall.jpg"},
            // { name: "Out of Office", value: "OutofOffice", image: "../assets/images/mutecall.jpg"},
            // { name: "Out of Town", value: "OutofTown", image: "../assets/images/mutecall.jpg"},
            // { name: "Working at Home", value: "WorkingatHome", image: "../assets/images/mutecall.jpg"},
            { name: "Manual on Call", value: "Manualoncall", image: "../assets/images/mutecall.jpg" },
            { name: "Tea", value: "Tea", image: "../assets/images/mutecall.jpg" }
        ];
        this._sessionId = cookieService.get('sessionId');
        this._tocken = cookieService.get('csrfToken');
        this._userID = cookieService.get('userID');
    }
    AgentStatusComponent.prototype.selectEvent = function (item) {
        var _this = this;
        //console.log(item);
        //console.log(this.keyword);
        var url = "http://cic1.cexfinance.com:8018/icws/" + this._sessionId + "/status/user-statuses/" + this._userID + "";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        var body = {
            "statusId": item.name
        };
        return this.http.put(url, body, options).subscribe(function (requestid) {
            //console.log(requestid);
            var requestId = requestid['requestId'];
            //console.log(requestId);
            if (requestId) {
                _this.subscription.service();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AgentStatusComponent.prototype.onChangeSearch = function (search, item) {
    };
    AgentStatusComponent.prototype.onFocused = function (e) {
        // do something
    };
    AgentStatusComponent.prototype.ngOnInit = function () {
    };
    AgentStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-status',
            template: __webpack_require__(/*! ./agent-status.component.html */ "./src/app/agent-status/agent-status.component.html"),
            styles: [__webpack_require__(/*! ./agent-status.component.scss */ "./src/app/agent-status/agent-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _services_subscriptions_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsService"]])
    ], AgentStatusComponent);
    return AgentStatusComponent;
}());



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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-screen/main-screen.component */ "./src/app/main-screen/main-screen.component.ts");





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'main', component: _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_4__["MainScreenComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
        this.title = 'Angularfirst';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _form_model_form_model_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-model/form-model.component */ "./src/app/form-model/form-model.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _work_group_work_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./work-group/work-group.component */ "./src/app/work-group/work-group.component.ts");
/* harmony import */ var _dailing_dailing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dailing/dailing.component */ "./src/app/dailing/dailing.component.ts");
/* harmony import */ var _agent_status_agent_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./agent-status/agent-status.component */ "./src/app/agent-status/agent-status.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _call_tool_call_tool_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./call-tool/call-tool.component */ "./src/app/call-tool/call-tool.component.ts");
/* harmony import */ var _wrapup_wrapup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wrapup/wrapup.component */ "./src/app/wrapup/wrapup.component.ts");
/* harmony import */ var _call_transfer_call_transfer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./call-transfer/call-transfer.component */ "./src/app/call-transfer/call-transfer.component.ts");
/* harmony import */ var _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main-screen/main-screen.component */ "./src/app/main-screen/main-screen.component.ts");
/* harmony import */ var _interaction_details_interaction_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interaction-details/interaction-details.component */ "./src/app/interaction-details/interaction-details.component.ts");
/* harmony import */ var _interaction2_interaction2_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./interaction2/interaction2.component */ "./src/app/interaction2/interaction2.component.ts");
/* harmony import */ var _services_subscriptions_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/subscriptions.service */ "./src/app/services/subscriptions.service.ts");
/* harmony import */ var _change_password_must_match_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./change-password/must-match.directive */ "./src/app/change-password/must-match.directive.ts");
/* harmony import */ var _interaction_details_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./interaction-details/sortable.directive */ "./src/app/interaction-details/sortable.directive.ts");






// import { HttpModule } from '@angular/http';

// import { Angular2CsvModule } from 'angular2-csv';























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _form_model_form_model_component__WEBPACK_IMPORTED_MODULE_11__["FormModelComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"],
                _work_group_work_group_component__WEBPACK_IMPORTED_MODULE_16__["WorkGroupComponent"],
                _dailing_dailing_component__WEBPACK_IMPORTED_MODULE_17__["DailingComponent"],
                _agent_status_agent_status_component__WEBPACK_IMPORTED_MODULE_18__["AgentStatusComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _call_tool_call_tool_component__WEBPACK_IMPORTED_MODULE_20__["CallToolComponent"],
                _wrapup_wrapup_component__WEBPACK_IMPORTED_MODULE_21__["WrapupComponent"],
                _call_transfer_call_transfer_component__WEBPACK_IMPORTED_MODULE_22__["CallTransferComponent"],
                _main_screen_main_screen_component__WEBPACK_IMPORTED_MODULE_23__["MainScreenComponent"],
                _interaction_details_interaction_details_component__WEBPACK_IMPORTED_MODULE_24__["InteractionDetailsComponent"],
                _interaction2_interaction2_component__WEBPACK_IMPORTED_MODULE_25__["Interaction2Component"],
                _change_password_must_match_directive__WEBPACK_IMPORTED_MODULE_27__["MustMatchDirective"],
                _interaction_details_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["NgbdSortableHeader"],
                _interaction2_interaction2_component__WEBPACK_IMPORTED_MODULE_25__["SortableHeader"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                // HttpModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                // Angular2CsvModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAlertModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_10__["AutocompleteLibModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _services_subscriptions_service__WEBPACK_IMPORTED_MODULE_26__["SubscriptionsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/call-tool/call-tool.component.html":
/*!****************************************************!*\
  !*** ./src/app/call-tool/call-tool.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <ul class=\"tools-list\">\n        <li class=\"tools\" (click)=\"pickup()\">\n            <img src=\"../assets/images/pickup.jpg\" alt=\"\" />\n            <p>Pickup</p>\n        </li>\n        <li class=\"tools\" (click)=\"holdcall()\">\n            <img src=\"../assets/images/holdcall.jpg\" alt=\"\" />\n            <p>Hold</p>\n        </li>\n        <li class=\"tools\" (click)=\"mutecall()\">\n            <img src=\"../assets/images/mutecall.jpg\" alt=\"\" />\n            <p>Mute</p>\n        </li>\n        <li class=\"tools\" (click)=\"open(content)\">\n            <img src=\"../assets/images/transfercall.jpg\" alt=\"\" />\n            <p>Transfer</p>\n        </li>\n        <li class=\"tools\" (click)=\"disconnectcall()\">\n            <img src=\"../assets/images/disconnectcall.jpg\" alt=\"\" />\n            <p>Disconnect</p>\n        </li>\n    </ul>\n</div>\n\n<ng-template #content let-d=\"dismiss\" let-c=\"close\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Transfer: 9703696072</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form name=\"form\" (ngSubmit)=\"transfercall(f)\" #f=\"ngForm\">\n            <div class=\"form-group\">\n                <label for=\"transfer\">Transfer to</label>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"transfer\" ngModel required name=\"transfer\" placeholder=\"Dail a number\" #transfer=\"ngModel\">\n                </div>\n                <div class=\"input-group\">\n                        <input type=\"checkbox\" value=\"user\">User<br/>\n                        <input type=\"checkbox\" value=\"workgroup\">Workgroup<br/>\n                        <input type=\"checkbox\" value=\"station\">Station<br/>\n                        <input type=\"checkbox\" value=\"agent\">Stand-alone Phone<br/>\n                        <input type=\"checkbox\" value=\"agent\">Station Group<br/>\n                        <input type=\"checkbox\" value=\"agent\">Attendant Profile<br/>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-outline-dark\">Transfer</button>\n            </div>\n        </form>\n    </div>\n    <!-- <p>Selected option: {{ selectedOption }}</p> -->\n</ng-template>"

/***/ }),

/***/ "./src/app/call-tool/call-tool.component.scss":
/*!****************************************************!*\
  !*** ./src/app/call-tool/call-tool.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.tools-list {\n  display: inline-flex;\n  width: 100%;\n  border-top: 1px solid #000;\n  margin: 0 auto;\n  list-style: none;\n  background-color: #fff;\n  padding-top: 15px;\n  padding-left: 10px; }\n  ul.tools-list img {\n    width: 25px;\n    height: 25px;\n    margin: 0 10px; }\n  ul.tools-list li {\n    padding-right: 5px; }\n  ul.tools-list p {\n    text-align: center;\n    font-size: 12px;\n    padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbC10b29sL0Q6XFxtc2Qtd2lkZ2V0XFxsb2dpbmNybVxcY3JtbG9naW4vc3JjXFxhcHBcXGNhbGwtdG9vbFxcY2FsbC10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBUnRCO0lBVVEsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjLEVBQUE7RUFadEI7SUFlUSxrQkFBa0IsRUFBQTtFQWYxQjtJQWtCUSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FsbC10b29sL2NhbGwtdG9vbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLnRvb2xzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/call-tool/call-tool.component.ts":
/*!**************************************************!*\
  !*** ./src/app/call-tool/call-tool.component.ts ***!
  \**************************************************/
/*! exports provided: CallToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToolComponent", function() { return CallToolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var CallToolComponent = /** @class */ (function () {
    function CallToolComponent(http, cookieService, modalService) {
        this.http = http;
        this.cookieService = cookieService;
        this.modalService = modalService;
        this.val = '';
        this.transfer = [];
        this._sessionId = cookieService.get('sessionId');
        this._interactionId = cookieService.get('interactionId');
        this._tocken = cookieService.get('csrfToken');
        this._number = cookieService.get('number');
    }
    CallToolComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CallToolComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    CallToolComponent.prototype.pickup = function () {
        console.log('Call pickup');
        var url = "http://192.168.1.211:8018/icws/" + this._sessionId + "/interactions/" + this._interactionId + "/pickup";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        return this.http.post(url, options).subscribe(function (pickup) {
            console.log(pickup);
        }, function (err) {
            console.log(err);
        });
    };
    CallToolComponent.prototype.holdcall = function () {
        console.log('Call on hold');
        var url = "http://192.168.1.211:8018/icws/" + this._sessionId + "/interactions/" + this._interactionId + "/hold";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        var body = {
            "on": "false"
        };
        return this.http.post(url, body, options).subscribe(function (hold) {
            console.log(hold);
        }, function (err) {
            console.log(err);
        });
    };
    CallToolComponent.prototype.mutecall = function () {
        var url = "http://192.168.1.211:8018/icws/" + this._sessionId + "/interactions/" + this._interactionId + "/mute";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        var body = {
            "on": "false"
        };
        return this.http.post(url, body, options).subscribe(function (mute) {
            console.log(mute);
        }, function (err) {
            console.log(err);
        });
    };
    CallToolComponent.prototype.transfercall = function (f) {
        var url = "http://192.168.1.211:8018/icws/" + this._sessionId + "/interactions/" + this._interactionId + "/blind-transfer";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        var body = {
            "target": 2002
        };
        return this.http.post(url, body, options).subscribe(function (transfer) {
            console.log(transfer);
        }, function (err) {
            console.log(err);
        });
    };
    CallToolComponent.prototype.disconnectcall = function () {
        console.log('Call disconnected');
        var url = "http://192.168.1.211:8018/icws/" + this._sessionId + "/interactions/" + this._interactionId + "/disconnect";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        return this.http.post(url, options).subscribe(function (disconnect) {
            console.log(disconnect);
        }, function (err) {
            console.log(err);
        });
    };
    CallToolComponent.prototype.lookupEntries = function (f) {
        var url = "http://192.168.1.211:8018/icws/" + this._sessionId + "/directories/lookup-entrie";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        var body = {
            "lookupComparisonType": "StartsWith",
            "lookupEntryProperties": ["displayName", "entryID", "extension", "firstName", "lastName"],
            "lookupEntryTypes": ["User", "Workgroup", "Station", "Stand-alone Phone", "Station Group", "Attendant Profile"],
            "lookupString": f.value['transfer'],
            "maxEntries": 10
        };
        return this.http.post(url, body, options).subscribe(function (lookupEntries) {
            console.log(lookupEntries);
        }, function (err) {
            console.log(err);
        });
    };
    CallToolComponent.prototype.ngOnInit = function () {
    };
    CallToolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-call-tool',
            template: __webpack_require__(/*! ./call-tool.component.html */ "./src/app/call-tool/call-tool.component.html"),
            styles: [__webpack_require__(/*! ./call-tool.component.scss */ "./src/app/call-tool/call-tool.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], CallToolComponent);
    return CallToolComponent;
}());



/***/ }),

/***/ "./src/app/call-transfer/call-transfer.component.html":
/*!************************************************************!*\
  !*** ./src/app/call-transfer/call-transfer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  call-transfer works!\n</p>\n"

/***/ }),

/***/ "./src/app/call-transfer/call-transfer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/call-transfer/call-transfer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGwtdHJhbnNmZXIvY2FsbC10cmFuc2Zlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/call-transfer/call-transfer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/call-transfer/call-transfer.component.ts ***!
  \**********************************************************/
/*! exports provided: CallTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallTransferComponent", function() { return CallTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CallTransferComponent = /** @class */ (function () {
    function CallTransferComponent() {
    }
    CallTransferComponent.prototype.ngOnInit = function () {
    };
    CallTransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-call-transfer',
            template: __webpack_require__(/*! ./call-transfer.component.html */ "./src/app/call-transfer/call-transfer.component.html"),
            styles: [__webpack_require__(/*! ./call-transfer.component.scss */ "./src/app/call-transfer/call-transfer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallTransferComponent);
    return CallTransferComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-d=\"dismiss\" let-c=\"close\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Change Password</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && changepassword()\" #f=\"ngForm\" [mustMatch]=\"['password', 'confirmPassword']\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"6\" />\n            <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"password.errors.required\">Password is required</div>\n                <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"confirmPassword\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && confirmPassword.invalid }\" required />\n            <div *ngIf=\"f.submitted && confirmPassword.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"confirmPassword.errors.required\">Confirm Password is required</div>\n                <div *ngIf=\"confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-outline-dark\">Save</button>\n        </div>\n      </form>\n    </div>\n    <!-- <p>Selected option: {{ selectedOption }}</p> -->\n  </ng-template>\n\n  <a class=\"\" (click)=\"open(content)\">\n    <span style=\"color: #007bff;\"><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i> Change Password</span>\n  </a>\n  \n  \n  "

/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".span {\n  color: #007bff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0Q6XFxtc2Qtd2lkZ2V0XFxsb2dpbmNybVxcY3JtbG9naW4vc3JjXFxhcHBcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFuIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmOyAgICAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(modalService, http, cookieService) {
        this.modalService = modalService;
        this.http = http;
        this.cookieService = cookieService;
        this.model = {};
        this._sessionId = cookieService.get('sessionId');
        this._tocken = cookieService.get('csrfToken');
    }
    ChangePasswordComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ChangePasswordComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ChangePasswordComponent.prototype.changepassword = function (pass) {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
        // console.log(pass);
        // let url= "http://192.168.1.211:8018/icws/"+this._sessionId+"/security/password";
        // const headers = new Headers();
        // const options = { 
        //                   headers: new HttpHeaders({'ININ-ICWS-CSRF-Token': this._tocken}),
        //                   withCredentials: true
        //                 };
        // let body = {
        //               "oldPassword":"Cexlab@123",
        //               "newPassword":"Cexlab@123"
        //             }
        // return this.http.post(url, body, options).subscribe(
        //       passchange => {
        //                   console.log(passchange);
        //                 },
        //       err => {
        //                 console.log(err);
        //               }
        //     );
    };
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/change-password/must-match.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/must-match.directive.ts ***!
  \*********************************************************/
/*! exports provided: MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./must-match.validator */ "./src/app/change-password/must-match.validator.ts");




var MustMatchDirective = /** @class */ (function () {
    function MustMatchDirective() {
        this.mustMatch = [];
    }
    MustMatchDirective_1 = MustMatchDirective;
    MustMatchDirective.prototype.validate = function (formGroup) {
        return Object(_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])(this.mustMatch[0], this.mustMatch[1])(formGroup);
    };
    var MustMatchDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mustMatch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MustMatchDirective.prototype, "mustMatch", void 0);
    MustMatchDirective = MustMatchDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mustMatch]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MustMatchDirective_1, multi: true }]
        })
    ], MustMatchDirective);
    return MustMatchDirective;
}());



/***/ }),

/***/ "./src/app/change-password/must-match.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/must-match.validator.ts ***!
  \*********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/dailing/dailing.component.html":
/*!************************************************!*\
  !*** ./src/app/dailing/dailing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <ng-template #content let-d=\"dismiss\" let-c=\"close\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Advanced Dailing Options</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"makecall(fdata)\" #fdata=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"number\">Number</label>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" id=\"number\" ngModel required name=\"number\" #number=\"ngModel\" maxlength=10 pattern=\"[0-9]*\"\n                     placeholder=\"Dail a number\" [(ngModel)]=\"model.number\" [ngClass]=\"{'invalid-data': number.invalid && fdata.submitted, 'valid-data': number.valid && fdata.submitted}\"> \n              <div *ngIf=\"number.invalid && fdata.submitted\" style=\"position: absolute;margin: 35px 0 0 14px;font-size: 13px;\">  \n                <span style=\"color: red;\">Please Enter Mobile Number</span>  \n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"workGroup\">Work Group</label>\n            <div class=\"input-group\">\n              <select [(ngModel)]=\"selectedOption\" name=\"workgroup\" class=\"form-control\">\n                <option *ngFor=\"let o of options\">\n                  {{o.name}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-outline-dark\">Make Call</button>\n          </div>\n        </form>\n      </div>\n      <!-- <p>Selected option: {{ selectedOption }}</p> -->\n    </ng-template>\n    \n    <button id=\"Dailing\" class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></button>\n    "

/***/ }),

/***/ "./src/app/dailing/dailing.component.scss":
/*!************************************************!*\
  !*** ./src/app/dailing/dailing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  width: 50% !important;\n  margin: 0 auto !important; }\n\n.btn-outline-primary {\n  color: #fff; }\n\n.btn-outline-primary:hover {\n    background-color: unset; }\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  .btn-outline-primary {\n    margin-left: -15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbGluZy9EOlxcbXNkLXdpZGdldFxcbG9naW5jcm1cXGNybWxvZ2luL3NyY1xcYXBwXFxkYWlsaW5nXFxkYWlsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLFdBQVcsRUFBQTs7QUFEZjtJQUdRLHVCQUF1QixFQUFBOztBQUkvQjtFQUNJO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9kYWlsaW5nL2RhaWxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XHJcbiAgICAuYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dailing/dailing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dailing/dailing.component.ts ***!
  \**********************************************/
/*! exports provided: DailingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailingComponent", function() { return DailingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var DailingComponent = /** @class */ (function () {
    function DailingComponent(modalService, http, cookieService) {
        this.modalService = modalService;
        this.http = http;
        this.cookieService = cookieService;
        this.model = {};
        this.options = [
            { name: "CIC1 Workgroup", value: "CIC1 Workgroup" },
            { name: "CIC1 Workgroup2", value: "CIC1 Workgroup2" },
        ];
        this._sessionId = cookieService.get('sessionId');
        this._tocken = cookieService.get('csrfToken');
        this._cookie = cookieService.get('Set-Cookie');
    }
    DailingComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DailingComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    DailingComponent.prototype.makecall = function (f) {
        var _this = this;
        console.log(f.value);
        console.log(this._cookie);
        this.cookieService.set('number', f.value['number']);
        this.printedOption = this.selectedOption;
        var url = "http://cic1.cexfinance.com:8018/icws/" + this._sessionId + "/interactions";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        var body = {
            "__type": "urn:inin.com:interactions:createCallParameters",
            "callMadeStage": 1,
            "additionalAttributes": {},
            "target": f.value['number'],
            "workgroup": f.value['workgroup']
        };
        return this.http.post(url, body, options).subscribe(function (data2) {
            console.log(data2);
            var interactionId = data2['interactionId'];
            _this.cookieService.set('interactionId', interactionId);
        }, function (err) {
            console.log(err);
        });
    };
    DailingComponent.prototype.ngOnInit = function () {
    };
    DailingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dailing',
            template: __webpack_require__(/*! ./dailing.component.html */ "./src/app/dailing/dailing.component.html"),
            styles: [__webpack_require__(/*! ./dailing.component.scss */ "./src/app/dailing/dailing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], DailingComponent);
    return DailingComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/form-model/form-model.component.html":
/*!******************************************************!*\
  !*** ./src/app/form-model/form-model.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\r\n   <h1>Form</h1>\r\n     <form (ngSubmit)=\"dosubmit(formdata)\" #formdata=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"servername\">Choose your Interaction Center server</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"title\" ngModel required name=\"servername\" placeholder=\"Server\" #username=\"ngModel\">\r\n        </div>\r\n       <div class=\"form-group\">\r\n         <label for=\"username\">UserID</label>\r\n         <input type=\"text\" class=\"form-control\" id=\"title\" ngModel required name=\"username\" #username=\"ngModel\">\r\n       </div>\r\n       <div class=\"form-group\">\r\n         <label for=\"password\">Password</label>\r\n         <input type=\"password\" class=\"form-control\" id=\"author\" ngModel required name=\"password\" #password=\"ngModel\">\r\n       </div>\r\n       <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n     </form>\r\n </div>"

/***/ }),

/***/ "./src/app/form-model/form-model.component.sass":
/*!******************************************************!*\
  !*** ./src/app/form-model/form-model.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbW9kZWwvZm9ybS1tb2RlbC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/form-model/form-model.component.ts":
/*!****************************************************!*\
  !*** ./src/app/form-model/form-model.component.ts ***!
  \****************************************************/
/*! exports provided: FormModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModelComponent", function() { return FormModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


// import {  Http,  Response,  Headers,  RequestOptions  } from '@angular/http';  

var FormModelComponent = /** @class */ (function () {
    function FormModelComponent(http) {
        this.http = http;
        this.username = '';
        this.password = '';
    }
    FormModelComponent.prototype.dosubmit = function (f) {
        var server_info_url = '192.168.1.213:80/icws/connection/server-info';
        var url = 'http://192.168.1.211:8018/icws/connection';
        var headers = new Headers();
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept-Language': 'any' }) };
        var body = {
            "__type": "urn:inin.com:connection:icAuthConnectionRequestSettings",
            "applicationName": "ICWS",
            "userID": f.value['username'],
            "password": f.value['password']
        };
        return this.http.post(url, body, options).subscribe(function (data) {
            if (data['status'] == 'success') {
                window.location.href = 'https://www.google.com/';
            }
            else {
                alert('Please check your details');
            }
        }, function (err) { console.log(err); });
    };
    FormModelComponent.prototype.ngOnInit = function () {
    };
    FormModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-model',
            template: __webpack_require__(/*! ./form-model.component.html */ "./src/app/form-model/form-model.component.html"),
            styles: [__webpack_require__(/*! ./form-model.component.sass */ "./src/app/form-model/form-model.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FormModelComponent);
    return FormModelComponent;
}());



/***/ }),

/***/ "./src/app/interaction-details/interaction-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/interaction-details/interaction-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"background\">\n    <ngb-tabset>\n      <ngb-tab>\n        <ng-template ngbTabTitle>Interaction Details</ng-template>\n        <ng-template ngbTabContent>\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Name</th>\n                <th scope=\"col\" sortable=\"duration\" (sort)=\"onSort($event)\">Duration</th>\n                <th scope=\"col\" sortable=\"state\" (sort)=\"onSort($event)\">State</th>\n                <th scope=\"col\" sortable=\"queue\" (sort)=\"onSort($event)\">Queue</th>\n                <th scope=\"col\" sortable=\"station\" (sort)=\"onSort($event)\">Station</th>\n                <th scope=\"col\" sortable=\"user\" (sort)=\"onSort($event)\">User</th>\n                <th scope=\"col\" sortable=\"wrapup\" (sort)=\"onSort($event)\">Wrapup</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let interact of countries$.source._value\">\n                <td>{{ interact.name }}</td>\n                <td>{{ interact.duration }}</td>\n                <td>{{ interact.state }}</td>\n                <td>{{ interact.queue }}</td>\n                <td>{{ interact.station }}</td>\n                <td>{{ interact.user }}</td>\n                <td>{{ interact.wrapup }}</td>\n              </tr>\n            </tbody>\n          </table>    \n          <div class=\"d-flex justify-content-between p-2\">\n              <ngb-pagination\n                [collectionSize]=\"total$ | async\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\">\n              </ngb-pagination>\n          \n              <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"service.pageSize\">\n                <option [ngValue]=\"2\">2 items per page</option>\n                <option [ngValue]=\"4\">4 items per page</option>\n                <option [ngValue]=\"6\">6 items per page</option>\n                <option [ngValue]=\"8\">8 items per page</option>\n              </select>\n            </div>    \n        </ng-template>\n      </ngb-tab>\n      <ngb-tab>\n        <ng-template ngbTabTitle>Interaction2</ng-template>\n        <ng-template ngbTabContent>\n            <app-interaction2></app-interaction2>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/interaction-details/interaction-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/interaction-details/interaction-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color: #fff;\n  height: 78vh;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3Rpb24tZGV0YWlscy9EOlxcbXNkLXdpZGdldFxcbG9naW5jcm1cXGNybWxvZ2luL3NyY1xcYXBwXFxpbnRlcmFjdGlvbi1kZXRhaWxzXFxpbnRlcmFjdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbnRlcmFjdGlvbi1kZXRhaWxzL2ludGVyYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA3OHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/interaction-details/interaction-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/interaction-details/interaction-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: InteractionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionDetailsComponent", function() { return InteractionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _interaction_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interaction.services */ "./src/app/interaction-details/interaction.services.ts");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/interaction-details/sortable.directive.ts");





var InteractionDetailsComponent = /** @class */ (function () {
    function InteractionDetailsComponent(service) {
        this.service = service;
        this.countries$ = service.countries$;
        this.total$ = service.total$;
        // console.log(this.countries$);
        // console.log(this.countries$['value']);
    }
    InteractionDetailsComponent.prototype.onSort = function (_a) {
        var column = _a.column, direction = _a.direction;
        // resetting other headers
        this.headers.forEach(function (header) {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    };
    InteractionDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["NgbdSortableHeader"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], InteractionDetailsComponent.prototype, "headers", void 0);
    InteractionDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interaction-details',
            template: __webpack_require__(/*! ./interaction-details.component.html */ "./src/app/interaction-details/interaction-details.component.html"),
            providers: [_interaction_services__WEBPACK_IMPORTED_MODULE_3__["InteracationServices"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
            styles: [__webpack_require__(/*! ./interaction-details.component.scss */ "./src/app/interaction-details/interaction-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_interaction_services__WEBPACK_IMPORTED_MODULE_3__["InteracationServices"]])
    ], InteractionDetailsComponent);
    return InteractionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/interaction-details/interaction.services.ts":
/*!*************************************************************!*\
  !*** ./src/app/interaction-details/interaction.services.ts ***!
  \*************************************************************/
/*! exports provided: InteracationServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteracationServices", function() { return InteracationServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interactionslist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactionslist */ "./src/app/interaction-details/interactionslist.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(countries, column, direction) {
    if (direction === '') {
        return countries;
    }
    else {
        return countries.slice().sort(function (a, b) {
            var res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    return pipe.transform(country.name).includes(term)
        || pipe.transform(country.duration).includes(term)
        || pipe.transform(country.state).includes(term)
        || pipe.transform(country.queue).includes(term)
        || pipe.transform(country.station).includes(term)
        || pipe.transform(country.user).includes(term)
        || pipe.transform(country.wrapup).includes(term);
}
var InteracationServices = /** @class */ (function () {
    function InteracationServices(pipe) {
        var _this = this;
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 8,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._loading$.next(true); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this._search(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._loading$.next(false); })).subscribe(function (result) {
            _this._countries$.next(result.countries);
            _this._total$.next(result.total);
        });
        this._search$.next();
    }
    Object.defineProperty(InteracationServices.prototype, "countries$", {
        get: function () { return this._countries$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteracationServices.prototype, "total$", {
        get: function () { return this._total$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteracationServices.prototype, "loading$", {
        get: function () { return this._loading$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteracationServices.prototype, "page", {
        get: function () { return this._state.page; },
        set: function (page) { this._set({ page: page }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteracationServices.prototype, "pageSize", {
        get: function () { return this._state.pageSize; },
        set: function (pageSize) { this._set({ pageSize: pageSize }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteracationServices.prototype, "searchTerm", {
        get: function () { return this._state.searchTerm; },
        set: function (searchTerm) { this._set({ searchTerm: searchTerm }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteracationServices.prototype, "sortColumn", {
        set: function (sortColumn) { this._set({ sortColumn: sortColumn }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteracationServices.prototype, "sortDirection", {
        set: function (sortDirection) { this._set({ sortDirection: sortDirection }); },
        enumerable: true,
        configurable: true
    });
    InteracationServices.prototype._set = function (patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    };
    InteracationServices.prototype._search = function () {
        var _this = this;
        var _a = this._state, sortColumn = _a.sortColumn, sortDirection = _a.sortDirection, pageSize = _a.pageSize, page = _a.page, searchTerm = _a.searchTerm;
        // 1. sort
        var countries = sort(_interactionslist__WEBPACK_IMPORTED_MODULE_3__["INTERACTIONSLIST"], sortColumn, sortDirection);
        // 2. filter
        countries = countries.filter(function (country) { return matches(country, searchTerm, _this.pipe); });
        var total = countries.length;
        // 3. paginate
        countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ countries: countries, total: total });
    };
    InteracationServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]])
    ], InteracationServices);
    return InteracationServices;
}());



/***/ }),

/***/ "./src/app/interaction-details/interactionslist.ts":
/*!*********************************************************!*\
  !*** ./src/app/interaction-details/interactionslist.ts ***!
  \*********************************************************/
/*! exports provided: INTERACTIONSLIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERACTIONSLIST", function() { return INTERACTIONSLIST; });
var INTERACTIONSLIST = [
    {
        name: 9703696072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9441100072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9876543210,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9703696072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9703696072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9441100072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9876543210,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9703696072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    }, {
        name: 9876543210,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
    {
        name: 9703696072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: '',
        wrapup: ''
    },
];


/***/ }),

/***/ "./src/app/interaction-details/sortable.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/interaction-details/sortable.directive.ts ***!
  \***********************************************************/
/*! exports provided: NgbdSortableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function() { return NgbdSortableHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
var NgbdSortableHeader = /** @class */ (function () {
    function NgbdSortableHeader() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgbdSortableHeader.prototype.rotate = function () {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgbdSortableHeader.prototype, "sortable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgbdSortableHeader.prototype, "direction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdSortableHeader.prototype, "sort", void 0);
    NgbdSortableHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'th[sortable]',
            host: {
                '[class.asc]': 'direction === "asc"',
                '[class.desc]': 'direction === "desc"',
                '(click)': 'rotate()'
            }
        })
    ], NgbdSortableHeader);
    return NgbdSortableHeader;
}());



/***/ }),

/***/ "./src/app/interaction2/interaction2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/interaction2/interaction2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Name</th>\n      <th scope=\"col\" sortable=\"duration\" (sort)=\"onSort($event)\">Duration</th>\n      <th scope=\"col\" sortable=\"state\" (sort)=\"onSort($event)\">State</th>\n      <th scope=\"col\" sortable=\"queue\" (sort)=\"onSort($event)\">Queue</th>\n      <th scope=\"col\" sortable=\"station\" (sort)=\"onSort($event)\">Station</th>\n      <th scope=\"col\" sortable=\"user\" (sort)=\"onSort($event)\">User</th>\n      <th scope=\"col\" sortable=\"interaction\" (sort)=\"onSort($event)\">interaction</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let interact of interactions\">\n      <td>{{ interact.name }}</td>\n      <td>{{ interact.duration }}</td>\n      <td>{{ interact.state }}</td>\n      <td>{{ interact.queue }}</td>\n      <td>{{ interact.station }}</td>\n      <td>{{ interact.user }}</td>\n      <td>{{ interact.interaction }}</td>\n    </tr>\n  </tbody>\n</table>     "

/***/ }),

/***/ "./src/app/interaction2/interaction2.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/interaction2/interaction2.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVyYWN0aW9uMi9pbnRlcmFjdGlvbjIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/interaction2/interaction2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/interaction2/interaction2.component.ts ***!
  \********************************************************/
/*! exports provided: compare, SortableHeader, Interaction2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableHeader", function() { return SortableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction2Component", function() { return Interaction2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var INTERACTION = [
    {
        name: 9703696072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: 'GOPAL',
        interaction: 2341242345235
    },
    {
        name: 9441100072,
        duration: 123123,
        state: 'Disconnected',
        queue: 'string',
        station: 1007,
        user: 'GOPAL',
        interaction: 2341242345235
    }
];
var rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
var compare = function (v1, v2) { return v1 < v2 ? -1 : v1 > v2 ? 1 : 0; };
var SortableHeader = /** @class */ (function () {
    function SortableHeader() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableHeader.prototype.rotate = function () {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SortableHeader.prototype, "sortable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SortableHeader.prototype, "direction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableHeader.prototype, "sort", void 0);
    SortableHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'th[sortable]',
            host: {
                '[class.asc]': 'direction === "asc"',
                '[class.desc]': 'direction === "desc"',
                '(click)': 'rotate()'
            }
        })
    ], SortableHeader);
    return SortableHeader;
}());

var Interaction2Component = /** @class */ (function () {
    function Interaction2Component() {
        this.interactions = INTERACTION;
    }
    Interaction2Component.prototype.onSort = function (_a) {
        var column = _a.column, direction = _a.direction;
        // resetting other headers
        this.headers.forEach(function (header) {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        // sorting countries
        if (direction === '') {
            this.interactions = INTERACTION;
        }
        else {
            this.interactions = INTERACTION.slice().sort(function (a, b) {
                var res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }
    };
    Interaction2Component.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(SortableHeader),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], Interaction2Component.prototype, "headers", void 0);
    Interaction2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interaction2',
            template: __webpack_require__(/*! ./interaction2.component.html */ "./src/app/interaction2/interaction2.component.html"),
            styles: [__webpack_require__(/*! ./interaction2.component.scss */ "./src/app/interaction2/interaction2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Interaction2Component);
    return Interaction2Component;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"container-fluid\">\n    <img width=\"168\" height=\"35\" src=\"../assets/images/cex_logo.png\" alt=\"\">\n    <div class=\"\">\n        <h1>Enter your Interaction Center credentials</h1>\n    </div>\n      <form (ngSubmit)=\"dosubmit(formdata)\" #formdata=\"ngForm\">\n         <!-- <div class=\"form-group\">\n           <label for=\"servername\">Choose your Interaction Center server</label>\n           <input type=\"text\" class=\"form-control\" id=\"title\" ngModel required name=\"servername\" placeholder=\"Server\" #username=\"ngModel\">\n         </div> -->\n        <div class=\"form-group\">\n          <!-- <label for=\"username\">UserID</label> -->\n          <input type=\"text\" class=\"form-control\" id=\"title\" ngModel required name=\"username\" #username=\"ngModel\"\n                 placeholder=\"UserName\" [(ngModel)]=\"model.username\" [ngClass]=\"{'invalid-data': username.invalid && formdata.submitted, 'valid-data': username.valid && formdata.submitted}\"> \n          <div *ngIf=\"username.invalid && formdata.submitted\">  \n            <span style=\"color: red;\">Please Enter Username.</span>  \n          </div>\n        </div>\n        <div class=\"form-group\">\n          <!-- <label for=\"password\">Password</label> -->\n          <input type=\"password\" class=\"form-control\" id=\"author\" ngModel required name=\"password\" #password=\"ngModel\"\n                 placeholder=\"Password\" [(ngModel)]=\"model.password\" [ngClass]=\"{'invalid-data': password.invalid && formdata.submitted, 'valid-data': password.valid && formdata.submitted}\"> \n          <div *ngIf=\"password.invalid && formdata.submitted\">  \n            <span style=\"color: red;\">Please Enter Password.</span>  \n          </div>\n        </div>\n        <div class=\"form-group\">\n          <!-- <label for=\"password\">Password</label> -->\n          <input type=\"text\" class=\"form-control\" id=\"station\" ngModel required name=\"workstation\" #workstation=\"ngModel\"\n                 placeholder=\"Enter workstation\" [(ngModel)]=\"model.workstation\" [ngClass]=\"{'invalid-data': workstation.invalid && formdata.submitted, 'valid-data': workstation.valid && formdata.submitted}\"> \n          <div *ngIf=\"workstation.invalid && formdata.submitted\">  \n            <span style=\"color: red;\">Please Enter workstation.</span>  \n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  width: 50%;\n  margin: 10% auto;\n  text-align: center; }\n  .login-page form {\n    width: 70%;\n    margin: 0 auto; }\n  .login-page img {\n    width: 60px;\n    height: 60px;\n    margin: 0 auto;\n    margin-bottom: 50px; }\n  .login-page h1 {\n    font-size: 22px;\n    padding-bottom: 20px;\n    color: #fff; }\n  .login-page button.btn.btn-default {\n    padding: 10px 50px;\n    border: 1px solid #ced4da;\n    font-size: 16px;\n    color: #fff; }\n  .login-page button.btn.btn-default:hover {\n      color: #ccc;\n      text-decoration: none; }\n  @media screen and (max-width: 767px) {\n  img {\n    margin-bottom: 30px; }\n  h1 {\n    font-size: 18px; } }\n  @media screen, (min-width: 865px) {\n  h1 {\n    line-height: 30px; }\n  form {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXG1zZC13aWRnZXRcXGxvZ2luY3JtXFxjcm1sb2dpbi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUh0QjtJQUtRLFVBQVU7SUFDVixjQUFjLEVBQUE7RUFOdEI7SUFVUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTtFQWIzQjtJQWdCUSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVcsRUFBQTtFQWxCbkI7SUFxQlEsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVyxFQUFBO0VBeEJuQjtNQTBCWSxXQUFXO01BQ1gscUJBQXFCLEVBQUE7RUFJakM7RUFDSTtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksZUFBZSxFQUFBLEVBQ2xCO0VBRUw7RUFDSTtJQUNJLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wYWdlIHsgXHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmJ0bi5idG4tZGVmYXVsdCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiAsIChtaW4td2lkdGg6ODY1cHgpe1xyXG4gICAgaDEge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_subscriptions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/subscriptions.service */ "./src/app/services/subscriptions.service.ts");





//const EventSource: any = window['EventSource'];
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, cookieService, subscription) {
        this.http = http;
        this.cookieService = cookieService;
        this.subscription = subscription;
        this.model = {};
        this.username = '';
        this.password = '';
        this.workstation = '';
        this.sessionId = '';
    }
    LoginComponent.prototype.dosubmit = function (f) {
        var _this = this;
        var url = 'http://cic1.cexfinance.com:8018/icws/connection';
        var headers = new Headers();
        var data = '';
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept-Language': 'en-US' }),
            withCredentials: true,
            observe: data
        };
        var body = {
            "__type": "urn:inin.com:connection:icAuthConnectionRequestSettings",
            "applicationName": "Example Dialer ICWS App",
            "userID": f.value['username'],
            "password": f.value['password']
        };
        return this.http.post(url, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept-Language': 'en-US' }),
            withCredentials: true,
            observe: 'response'
        }).subscribe(function (data) {
            console.log(data);
            var id = data.body['sessionId'];
            var tockenid = data.body['csrfToken'];
            var userID = data.body['userID'];
            _this.cookieService.set('sessionId', id);
            _this.cookieService.set('csrfToken', tockenid);
            _this.cookieService.set('userID', userID);
            if (id) {
                return _this.http.put("http://cic1.cexfinance.com:8018/icws/" + id + "/connection/station", {
                    "__type": "urn:inin.com:connection:workstationSettings",
                    "readyForInteractions": true,
                    "supportedMediaTypes": [1],
                    "workstation": f.value['workstation']
                }, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': tockenid }),
                    withCredentials: true
                }).subscribe(function (data) {
                    console.log(data);
                    _this.subscription.startMessageProcessing();
                    // return this.http.put(
                    //   "http://cic1.cexfinance.com:8018/icws/"+id+"/messaging/subscriptions/queues/InteractionStates",
                    //   {
                    //     "queueIds": [
                    //       {
                    //         "queueType": 1,
                    //         "queueName": userID
                    //       }
                    //     ],
                    //     "attributeNames": [
                    //       "Eic_State",
                    //       "Eic_ConnectDurationTime"
                    //     ]
                    //   },
                    //   { 
                    //     headers: new HttpHeaders({'ININ-ICWS-CSRF-Token': tockenid}),
                    //     withCredentials: true
                    //   }
                    // ).subscribe(
                    //       data => {
                    //           console.log(data);
                    //           window.location.href = 'http://192.168.1.79:4200/main';
                    //         },
                    //       err => { 
                    //           console.log(err);
                    //         }
                    //     );
                    window.location.href = 'http://192.168.1.79:4200/main';
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _services_subscriptions_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"/\" (click)=\"logout()\"><p><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</p></a>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this._sessionId = cookieService.get('sessionId');
        this._tocken = cookieService.get('csrfToken');
    }
    LogoutComponent.prototype.logout = function () {
        var url = "http://192.168.1.211:8018/icws/" + this._sessionId + "/connection";
        var headers = new Headers();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        };
        return this.http.delete(url, options).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/logout/logout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/main-screen/main-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bar\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"main-screen\">\n                <div class=\"logo_img col-md-3 col-xs-3\">\n                    <img width=\"168\" height=\"35\" src=\"../assets/images/cex_logo.png\" alt=\"\" />\n                </div>\n                <div class=\"all-components col-md-6 offset-md-3 col-xs-9\">\n                    <div class=\"col-md-1 offset-md-1 col-xs-2 common-sec\">\n                        <app-dailing></app-dailing>\n                    </div>\n                    <div class=\"col-md-7 col-xs-7 common-sec\">\n                        <app-agent-status></app-agent-status>\n                    </div>\n                    <div class=\"col-md-3 col-xs-3 common-sec\">\n                        <app-profile></app-profile>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-interaction-details></app-interaction-details>\n        <app-call-tool></app-call-tool>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.scss":
/*!********************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bar img {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto; }\n\n.main-bar .main-screen {\n  display: flex;\n  width: 100%;\n  color: #fff; }\n\n.main-bar .all-components {\n  display: flex; }\n\n.main-bar .all-components div.common-sec {\n    padding: 10px 0;\n    height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zY3JlZW4vRDpcXG1zZC13aWRnZXRcXGxvZ2luY3JtXFxjcm1sb2dpbi9zcmNcXGFwcFxcbWFpbi1zY3JlZW5cXG1haW4tc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBSnRCO0VBT1EsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBVG5CO0VBWVEsYUFBYSxFQUFBOztBQVpyQjtJQWNnQixlQUFlO0lBQ2YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zY3JlZW4vbWFpbi1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iYXIge1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAubWFpbi1zY3JlZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuYWxsLWNvbXBvbmVudHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGRpdi5jb21tb24tc2Vje1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main-screen/main-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-screen/main-screen.component.ts ***!
  \******************************************************/
/*! exports provided: MainScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenComponent", function() { return MainScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainScreenComponent = /** @class */ (function () {
    function MainScreenComponent() {
    }
    MainScreenComponent.prototype.ngOnInit = function () {
    };
    MainScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-screen',
            template: __webpack_require__(/*! ./main-screen.component.html */ "./src/app/main-screen/main-screen.component.html"),
            styles: [__webpack_require__(/*! ./main-screen.component.scss */ "./src/app/main-screen/main-screen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainScreenComponent);
    return MainScreenComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n  <div class=\"user-info\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>\n              <img width=\"40\" height=\"40\" src=\"../assets/images/cex_logo.png\" class=\"user-img\" />\n              <h5 class=\"hidden-sm\">Gopal</h5>\n            </button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <p ngbDropdownItem><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Gopal</p>\n              <p ngbDropdownItem><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> 1007</p>\n              <p ngbDropdownItem><i class=\"fa fa-server\" aria-hidden=\"true\"></i> CIC1</p>\n              <app-change-password></app-change-password>\n              <app-logout></app-logout>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-page img {\n  margin-top: -8px; }\n\n.profile-page .row > div button {\n  display: flex; }\n\n.profile-page .dropdown-toggle::after {\n  margin-left: 10px;\n  margin-top: 12px; }\n\n.profile-page .btn-outline-primary {\n  color: #fff; }\n\n.profile-page .btn-outline-primary:hover {\n    background-color: unset; }\n\n.profile-page .btn-outline-primary:focus {\n  box-shadow: none; }\n\n.profile-page .show > .btn-outline-primary.dropdown-toggle {\n  background-color: unset; }\n\n.profile-page .dropdown-menu.show {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcbXNkLXdpZGdldFxcbG9naW5jcm1cXGNybWxvZ2luL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCLEVBQUE7O0FBRnhCO0VBS1EsYUFBWSxFQUFBOztBQUxwQjtFQVFRLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFUeEI7RUFZUSxXQUFXLEVBQUE7O0FBWm5CO0lBY1ksdUJBQXVCLEVBQUE7O0FBZG5DO0VBa0JRLGdCQUFnQixFQUFBOztBQWxCeEI7RUFxQlEsdUJBQXVCLEVBQUE7O0FBckIvQjtFQXdCUSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1wYWdlIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIH1cclxuICAgIC5yb3cgPiBkaXYgYnV0dG9ue1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIH1cclxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tb3V0bGluZS1wcmltYXJ5OmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/subscriptions.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/subscriptions.service.ts ***!
  \***************************************************/
/*! exports provided: SubscriptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsService", function() { return SubscriptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SubscriptionsService = /** @class */ (function () {
    function SubscriptionsService(http, cookieService, zone) {
        this.http = http;
        this.cookieService = cookieService;
        this.zone = zone;
        this._sessionId = cookieService.get('sessionId');
        this._tocken = cookieService.get('csrfToken');
        this._userID = cookieService.get('userID');
    }
    SubscriptionsService.prototype.onServerSentMessage = function (event) {
        var message;
        var messageType;
        var messageCallback;
        var icwsMessageCallbacks = [];
        try {
            //debugger;
            console.log(event.data);
            message = JSON.parse(event.data);
            //debugger;
            console.log(message);
            messageType = message.__type;
            icwsMessageCallbacks.forEach(function (callback) {
                //debugger;
                if (messageType === callback.type) {
                    callback.callback(message);
                }
            });
        }
        catch (error) {
            //debugger;
            console.error("Failed to process server sent message. Error: ", error);
        }
    };
    SubscriptionsService.prototype.runTimerInstance = function () {
        var messageProcessingTimerId;
        //messageProcessingTimerCallback();
        messageProcessingTimerId = setTimeout(this.runTimerInstance, 1000);
    };
    SubscriptionsService.prototype.startMessageProcessing = function () {
        var eventSource = window['eventSource'];
        var messageProcessingTimerId;
        if (typeof EventSource !== 'undefined') {
            //if (!eventSource || eventSource.readyState === EventSource.CLOSED) {
            var messagingUrl = "http://cic1.cexfinance.com:8018/icws/" + this._sessionId + "/messaging/messages";
            var headers = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
                withCredentials: true
            };
            eventSource = new EventSource(messagingUrl, headers);
            eventSource.onmessage = this.onServerSentMessage;
            //}
        }
        else {
            console.log('event trigger');
            this.runTimerInstance();
            if (!messageProcessingTimerId) {
                this.runTimerInstance();
            }
        }
    };
    //   stopMessageProcessing() {
    //     var deferred = $.Deferred();
    //     var eventSource: any = window['eventSource'];
    //     if (eventSource) {
    //         icwsMessageCallbacks.forEach(function(callback) {
    //             var payload = {};
    //             if (callback.request !== '') {
    //                 session.sendRequest(session.server, 'DELETE', callback.request, payload, true, 6000).done(function() {
    //                     var newIcwsMessageCallbacks = icwsMessageCallbacks.filter(function(cb) { return cb.type != callback.type });
    //                     icwsMessageCallbacks = newIcwsMessageCallbacks;
    //                     if (icwsMessageCallbacks.length === 0) {
    //                         deferred.resolve();
    //                     }
    //                 });
    //             } else {
    //                 var newIcwsMessageCallbacks = icwsMessageCallbacks.filter(function(cb) { return cb.type != callback.type });
    //                 icwsMessageCallbacks = newIcwsMessageCallbacks;
    //                 if (icwsMessageCallbacks.length === 0) {
    //                     deferred.resolve();
    //                 }
    //             }
    //         });
    //     } else if (!!messageProcessingTimerId) {
    //         clearTimeout(messageProcessingTimerId);
    //         messageProcessingTimerId = null;
    //         deferred.resolve();
    //     }
    //     return deferred.promise();
    // }
    SubscriptionsService.prototype.service = function () {
        var _this = this;
        return this.http.put("http://cic1.cexfinance.com:8018/icws/" + this._sessionId + "/messaging/subscriptions/status/user-statuses", {
            "userIds": [this._userID]
        }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'ININ-ICWS-CSRF-Token': this._tocken }),
            withCredentials: true
        }).subscribe(function (data) {
            //console.log(data);
            _this.startMessageProcessing();
            //window.location.href = 'http://192.168.1.79:4200/main';
        }, function (err) {
            console.log(err);
        });
    };
    SubscriptionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SubscriptionsService);
    return SubscriptionsService;
}());



/***/ }),

/***/ "./src/app/work-group/work-group.component.html":
/*!******************************************************!*\
  !*** ./src/app/work-group/work-group.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  work-group works!\n</p>\n"

/***/ }),

/***/ "./src/app/work-group/work-group.component.scss":
/*!******************************************************!*\
  !*** ./src/app/work-group/work-group.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmstZ3JvdXAvd29yay1ncm91cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/work-group/work-group.component.ts":
/*!****************************************************!*\
  !*** ./src/app/work-group/work-group.component.ts ***!
  \****************************************************/
/*! exports provided: WorkGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkGroupComponent", function() { return WorkGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkGroupComponent = /** @class */ (function () {
    function WorkGroupComponent() {
    }
    WorkGroupComponent.prototype.ngOnInit = function () {
    };
    WorkGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-group',
            template: __webpack_require__(/*! ./work-group.component.html */ "./src/app/work-group/work-group.component.html"),
            styles: [__webpack_require__(/*! ./work-group.component.scss */ "./src/app/work-group/work-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkGroupComponent);
    return WorkGroupComponent;
}());



/***/ }),

/***/ "./src/app/wrapup/wrapup.component.html":
/*!**********************************************!*\
  !*** ./src/app/wrapup/wrapup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  wrapup works!\n</p>\n"

/***/ }),

/***/ "./src/app/wrapup/wrapup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/wrapup/wrapup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyYXB1cC93cmFwdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/wrapup/wrapup.component.ts":
/*!********************************************!*\
  !*** ./src/app/wrapup/wrapup.component.ts ***!
  \********************************************/
/*! exports provided: WrapupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapupComponent", function() { return WrapupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WrapupComponent = /** @class */ (function () {
    function WrapupComponent() {
    }
    WrapupComponent.prototype.ngOnInit = function () {
    };
    WrapupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wrapup',
            template: __webpack_require__(/*! ./wrapup.component.html */ "./src/app/wrapup/wrapup.component.html"),
            styles: [__webpack_require__(/*! ./wrapup.component.scss */ "./src/app/wrapup/wrapup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WrapupComponent);
    return WrapupComponent;
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

module.exports = __webpack_require__(/*! D:\msd-widget\logincrm\crmlogin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map