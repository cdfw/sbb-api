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

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        //, { queryParams: { returnUrl: state.url }}
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        //API_URL: string = "http://ec2-18-220-6-166.us-east-2.compute.amazonaws.com:8080/";
        //API_URL: string = "http://localhost:8080/";
        //API_URL: string = "http://cdfw-alb-prod-775994205.us-west-1.elb.amazonaws.com:9301/";
        //API_URL: string = "https://prod.cdfw-sbb.com/";
        this.API_URL = "https://dev.cdfw-sbb.com/";
    }
    AuthenticationService.prototype.login = function (username, password) {
        var self = this;
        return this.http.post(this.API_URL + 'authenticateUser', { username: username, password: password }).
            toPromise()
            .then(function (response) {
            if (response) {
                localStorage.setItem('currentUser', JSON.stringify(response));
                return true;
            }
            return false;
        }, function (error) {
            return error;
        });
    };
    AuthenticationService.prototype.resetPassword = function (username, password, newpassword) {
        var self = this;
        return this.http.post(this.API_URL + 'resetPassword', { username: username, password: password, newpassword: newpassword });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('csServiceMatrix');
        sessionStorage.removeItem('cslcfilters');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarComponent"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/error-interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error-interceptor.ts ***!
  \************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(snackBar) {
        this.snackBar = snackBar;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errMsg = '';
            // Client Side Error
            if (error.error instanceof ErrorEvent) {
                errMsg = "Error: " + error.error.message;
            }
            else { // Server Side Error
                errMsg = "Error Code: " + error.status + ",  Message: " + error.message;
            }
            // show error snackbar with red background
            _this.snackBar.openSnackBar('We are experiencing technical difficulties. Please try again later.', 'Close', 'red-snackbar');
            //this.snackBar.openSnackBar(errMsg,'Close','red-snackbar');
            // return an observable
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
        }));
    };
    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarComponent"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/http.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/http.interceptor.ts ***!
  \***********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(spinner) {
        this.spinner = spinner;
        this.count = 0;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + (user !== null ? user.userToken : '')
            }
        });
        setTimeout(function () { return _this.spinner.show(); });
        //console.log(`Intercepting requests --> ${this.count}`);
        this.count++;
        //console.log(`Incrementing count --> ${this.count}`);
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) { return console.log(event); }, function (error) { return console.log(error); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            //console.log(`Decrementing count --> ${this.count}`);
            _this.count--;
            if (_this.count == 0)
                _this.spinner.hide();
        }));
        //  return  next.handle(req);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, AlertService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "userId", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser'))['id'];
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getSelectedRegionObject = function (selectedRegion) {
        if (localStorage.getItem('currentUser') != null || localStorage.getItem('currentUser') != undefined) {
            var userRegionMapping = this.user['userRegionMappingsById'];
            for (var _i = 0, userRegionMapping_1 = userRegionMapping; _i < userRegionMapping_1.length; _i++) {
                var userRegion = userRegionMapping_1[_i];
                if (selectedRegion === userRegion['regionByRegionId']['regionName']) {
                    return userRegion['regionByRegionId'];
                }
            }
        }
        return null;
    };
    Object.defineProperty(UserService.prototype, "userRole", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser'))['userRoleByRoleId']['roleName'];
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUser = function () {
        return this.http.get("/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get("/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post("/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put("/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete("/users/" + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
/* harmony import */ var _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user-registration/user-registration.component */ "./src/app/user/user-registration/user-registration.component.ts");
/* harmony import */ var _service_matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/matrix-details/matrix-details.component */ "./src/app/service/matrix-details/matrix-details.component.ts");
/* harmony import */ var _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var _service_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/task-details/task-details.component */ "./src/app/service/task-details/task-details.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _current_state_labor_class_labor_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./current-state/labor-class/labor-class.component */ "./src/app/current-state/labor-class/labor-class.component.ts");
/* harmony import */ var _current_state_labor_hour_details_labor_hour_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./current-state/labor-hour-details/labor-hour-details.component */ "./src/app/current-state/labor-hour-details/labor-hour-details.component.ts");










var routes = [
    { path: 'user', component: _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'service/:regionName/:regionId', component: _service_matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_4__["MatrixDetailsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: ':regionName/:regionId/task/:taskId', component: _service_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_6__["TaskDetailsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'currentState/:regionId', component: _current_state_labor_class_labor_class_component__WEBPACK_IMPORTED_MODULE_8__["LaborClassComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'csLaborHours/:regionId/:laborClassName', component: _current_state_labor_hour_details_labor_hour_details_component__WEBPACK_IMPORTED_MODULE_9__["LaborHourDetailsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"] },
    { path: '', component: _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
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

module.exports = ".flex-container {\r\n  display:flex;\r\n  /*background-color: green;*/\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.vertical-middle{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n  text-align: center;\r\n}\r\n\r\n.main-content {\r\n  width:100%;\r\n  /*flex: 1 1 auto;*/\r\n}\r\n\r\nfooter\r\n {\r\n   position: fixed;\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100%;\r\n   text-align:center;\r\n   background-color: #ccc;\r\n   font-size: 14px;\r\n   padding-top: 3px;\r\n   padding-bottom: 3px\r\n }\r\n\r\n.fake-link {\r\n     color: blue;\r\n     text-decoration: underline;\r\n     cursor: pointer;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO21EQUNpRDtFQUNqRCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTs7R0FFRyxlQUFlO0dBQ2YsT0FBTztHQUNQLFNBQVM7R0FDVCxXQUFXO0dBQ1gsaUJBQWlCO0dBQ2pCLHNCQUFzQjtHQUN0QixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCO0NBQ0Y7O0FBRUE7S0FDSSxXQUFXO0tBQ1gsMEJBQTBCO0tBQzFCLGVBQWU7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Ki9cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnZlcnRpY2FsLW1pZGRsZXtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIC8qZmxleDogMSAxIGF1dG87Ki9cclxufVxyXG5cclxuZm9vdGVyXHJcbiB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgbGVmdDogMDtcclxuICAgYm90dG9tOiAwO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgcGFkZGluZy1ib3R0b206IDNweFxyXG4gfVxyXG5cclxuIC5mYWtlLWxpbmsge1xyXG4gICAgIGNvbG9yOiBibHVlO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n\r\n  <div style =\"width:100%; background-color: #1f4e79; color: white;\">\r\n    <!-- <mat-toolbar color=\"primary\"> -->\r\n      <!-- <div class=\"row m-0 w-100 p-2 h-100\">\r\n        <div class=\"col-md-2\">\r\n            <img src=\"../assets/SBB.png\" alt=\"\" class=\"logo\">\r\n        </div>\r\n        <div class=\"col-md-8 text-center vertical-middle text-bold\">\r\n          {{title}} {{getDataType()}}\r\n        </div>\r\n        <div class=\"col-md-2 text-right vertical-middle\">\r\n            <img src=\"../assets/CDFW.png\" alt=\"\">\r\n        </div>\r\n      </div> -->\r\n      <div class=\"row m-0 w-100 p-2 h-100\">\r\n          <div class=\"col-md-3\">\r\n              <img src=\"../assets/cdfw-logo.png\" alt=\"\" class=\"logo\">\r\n          </div>\r\n          <div class=\"col-md-6 text-center vertical-middle text-bold\">\r\n            <p class=\"mb-0\">{{title}} {{getDataType()}}</p>\r\n            <p class=\"mb-0\" style=\"color: red; font-weight: bold;\" *ngIf=\"!production\">***Test Environment***</p>\r\n          </div>\r\n          <div class=\"col-md-3 text-right vertical-middle\">\r\n              <img src=\"../assets/SBB.png\" alt=\"\" class=\"logo-sbb\">\r\n          </div>\r\n        </div>\r\n      <!-- <mat-toolbar-row>\r\n        <img src=\"../assets/SBB.png\" alt=\"\" class=\"logo\">\r\n        <span class=\"fill-remaining-space\">\r\n           Mission Level Data Collection Tool\r\n        </span>\r\n        <img src=\"../assets/CDFW.png\" alt=\"\">\r\n      </mat-toolbar-row> -->\r\n    <!-- </mat-toolbar> -->\r\n  </div>\r\n\r\n  <div class = \"main-content\">\r\n    <router-outlet #routerOutlet=\"outlet\"> </router-outlet>\r\n    <ngx-spinner\r\n        size = \"default\"\r\n        color = \"#fff\"\r\n        type = \"ball-pulse\"\r\n        fullScreen = \"true\"\r\n        >\r\n        <p style=\"color: white\" > Loading... </p>\r\n        </ngx-spinner>\r\n  </div>\r\n  <div>\r\n    <footer flex>\r\n      <div class=\"footer-copyright py-1 pb-1 text-center\">\r\n        Please contact the project team at\r\n        <a href=\"mailto:sbbsupport@wildlife.ca.gov\" class=\"fake-link\">sbbsupport@wildlife.ca.gov</a>\r\n        if you need assistance\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'Service Based Budgeting Project Data Collection Tool';
        this.production = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production;
    }
    AppComponent.prototype.getUserDetails = function () {
        //this.router.navigate(['/heroes']);
    };
    AppComponent.prototype.getDataType = function () {
        if (this.userService.user != null) {
            if (this.userService.user['dataTypeByDataTypeId']['dataType'] == 'mission') {
                return ' - Mission Level';
            }
            else if (this.userService.user['dataTypeByDataTypeId']['dataType'] == 'current') {
                return ' - Current State';
            }
            else if (this.userService.user['dataTypeByDataTypeId']['dataType'] == 'both') {
                return sessionStorage.getItem("tool-access");
            }
        }
        return '';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _service_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/inputs/inputs.component */ "./src/app/service/inputs/inputs.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/error-interceptor */ "./src/app/_services/error-interceptor.ts");
/* harmony import */ var _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var _services_http_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_services/http.interceptor */ "./src/app/_services/http.interceptor.ts");
/* harmony import */ var _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var _service_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/feedback/feedback.component */ "./src/app/service/feedback/feedback.component.ts");
/* harmony import */ var _current_state_labor_class_labor_class_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./current-state/labor-class/labor-class.component */ "./src/app/current-state/labor-class/labor-class.component.ts");
/* harmony import */ var _current_state_labor_hour_details_labor_hour_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./current-state/labor-hour-details/labor-hour-details.component */ "./src/app/current-state/labor-hour-details/labor-hour-details.component.ts");
/* harmony import */ var _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./current-state/labor-class-inputs/labor-class-inputs.component */ "./src/app/current-state/labor-class-inputs/labor-class-inputs.component.ts");
/* harmony import */ var _current_state_labor_class_tasks_labor_class_tasks_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./current-state/labor-class-tasks/labor-class-tasks.component */ "./src/app/current-state/labor-class-tasks/labor-class-tasks.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarComponent"],
                _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_26__["ResestPasswordDialog"],
                _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_26__["DataTypeSelectionDialog"],
                _current_state_labor_class_tasks_labor_class_tasks_component__WEBPACK_IMPORTED_MODULE_31__["AddCSInputDialog"],
                _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__["EditCSInputDialog"],
                _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__["DeleteCSInputDialog"],
                _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__["ApproveCSInputDialog"],
                _current_state_labor_class_tasks_labor_class_tasks_component__WEBPACK_IMPORTED_MODULE_31__["CSInputTaskExistDialog"],
                _current_state_labor_class_labor_class_component__WEBPACK_IMPORTED_MODULE_28__["LaborClassComponent"],
                _current_state_labor_hour_details_labor_hour_details_component__WEBPACK_IMPORTED_MODULE_29__["LaborHourDetailsComponent"],
                _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__["LaborClassInputsComponent"],
                _current_state_labor_class_tasks_labor_class_tasks_component__WEBPACK_IMPORTED_MODULE_31__["LaborClassTasksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                //material
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_6__["ServiceModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_19__["DataTableModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_20__["TableModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                    useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_23__["HttpErrorInterceptor"],
                    multi: true,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                    useClass: _services_http_interceptor__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
                    multi: true,
                },
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"], _services__WEBPACK_IMPORTED_MODULE_18__["UserService"], _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_service_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_14__["InputsComponent"], _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_26__["ResestPasswordDialog"], _service_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_27__["FeedbackComponent"], _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_26__["DataTypeSelectionDialog"], _current_state_labor_class_tasks_labor_class_tasks_component__WEBPACK_IMPORTED_MODULE_31__["AddCSInputDialog"], _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__["EditCSInputDialog"], _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__["DeleteCSInputDialog"], _current_state_labor_class_inputs_labor_class_inputs_component__WEBPACK_IMPORTED_MODULE_30__["ApproveCSInputDialog"], _current_state_labor_class_tasks_labor_class_tasks_component__WEBPACK_IMPORTED_MODULE_31__["CSInputTaskExistDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/current-state/labor-class-inputs/approve-cs-input-dialog.html":
/*!*******************************************************************************!*\
  !*** ./src/app/current-state/labor-class-inputs/approve-cs-input-dialog.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Approve Input</h1>\r\n<div mat-dialog-content>\r\n    <p>Are you sure you want to approve below input?</p>\r\n    <p>Position Id: {{data.task.positionId}}</p>\r\n    <p>Task Id: {{data.task.taskId}}</p>\r\n    <p>Input Hours: {{data.task.inputHours}}</p>\r\n</div>\r\n<div mat-dialog-actions class=\"text-center\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">Cancel</button>\r\n    <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"onConfirm()\">Confirm</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/current-state/labor-class-inputs/delete-cs-input-dialog.html":
/*!******************************************************************************!*\
  !*** ./src/app/current-state/labor-class-inputs/delete-cs-input-dialog.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Input</h1>\r\n<div mat-dialog-content>\r\n    <p>Are you sure you want to delete below input?</p>\r\n    <p>Position Id: {{data.task.positionId}}</p>\r\n    <p>Task Id: {{data.task.taskId}}</p>\r\n    <p>Input Hours: {{data.task.inputHours}}</p>\r\n</div>\r\n<div mat-dialog-actions class=\"text-center\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">Cancel</button>\r\n    <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"onConfirm()\">Confirm</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/current-state/labor-class-inputs/edit-cs-input-dialog.html":
/*!****************************************************************************!*\
  !*** ./src/app/current-state/labor-class-inputs/edit-cs-input-dialog.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>Edit Input</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"px-1\">\r\n    <input matInput placeholder=\"Position Id\" value=\"{{data.task.positionId}}\" disabled>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"px-1\">\r\n    <input matInput placeholder=\"Task Id\" value=\"{{data.task.taskId}}\" disabled>\r\n  </mat-form-field><br>\r\n  <mat-form-field class=\"px-1\">\r\n    <input matInput placeholder=\"Input Hours\" type=\"number\" [(ngModel)]=\"data.task.inputHours\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"px-1\">\r\n    <textarea matInput placeholder=\"Feedback\" [(ngModel)]=\"data.task.feedback\"></textarea>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions class=\"text-center\">\r\n  <button mat-raised-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"onUpdate()\">Update</button>\r\n</div>  -->\r\n\r\n\r\n<div>\r\n  <p style=\"font-size: 20px; font-weight: 600; margin-bottom: 0;\">{{data.task.serviceMatrixByTaskId.taskName}}({{data.task.taskId}}) - {{data.task.positionId}}</p>\r\n  <p style=\"font-size: 14px;\">{{data.task.serviceMatrixByTaskId.serviceName}} / {{data.task.serviceMatrixByTaskId.program}} / {{data.task.serviceMatrixByTaskId.subProgram}}\r\n    /{{data.task.serviceMatrixByTaskId.taskCategory}}\r\n  </p>\r\n</div>\r\n<div class=\"pt-4 row\">\r\n  <div class=\"col-12\">\r\n    <table class=\"text-white\" style=\"background: #1f4e79; height: 80px; width: auto !important; border-collapse: separate; border-spacing: 5px;\">\r\n      <tr>\r\n        <td rowspan=\"3\" style=\"background-color: white;\">\r\n            <mat-form-field class=\"px-1\">\r\n              <input matInput style=\"color:black;\" placeholder=\"Input Hours\" type=\"number\" [(ngModel)]=\"data.task.inputHours\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"px-1\">\r\n              <textarea matInput placeholder=\"Feedback\" [(ngModel)]=\"data.task.feedback\" style=\"color: black;\"></textarea>\r\n            </mat-form-field>\r\n          <button mat-raised-button color=\"primary\"cdkFocusInitial (click)=\"onUpdate()\" class=\"m-1\" style=\"width: 75px;\">Update</button>\r\n          <!--<button mat-raised-button color=\"primary\"cdkFocusInitial (click)=\"onValidate()\" class=\"m-1\" style=\"width: 75px;\">Validate</button>-->\r\n            <button mat-raised-button  (click)=\"onNoClick()\" class=\"m-1\" style=\"width: 75px;\">Close</button></td>\r\n        <td rowspan=\"3\" style=\"width: 75px;\"></td>\r\n        <td>Hours bank for the position</td>\r\n        <td style=\"width: 75px; border-bottom: 1px solid white;\">{{data.hoursBank}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Total hours allocated</td>\r\n        <td style=\"border-bottom: 1px solid white;\">{{data.hoursEntered+data.task.inputHours-staticInputHours}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Hours remaining to be allocated</td>\r\n        <td style=\"border-bottom: 1px solid white;\">{{data.hoursBank-(data.hoursEntered+data.task.inputHours-staticInputHours)}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"row pt-3\">\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Description\" disabled style=\"min-height: 150px; color: #444 !important;\">{{data.task.serviceMatrixByTaskId.taskDesc}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Desired Performance\" disabled style=\"min-height: 150px; color: #444 !important;\">{{data.task.serviceMatrixByTaskId.desiredPerf}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Glossary\" disabled style=\"min-height: 150px; color: #444 !important;\">{{data.task.serviceMatrixByTaskId.serviceGlossary}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Additional Budget Factors\" disabled style=\"min-height: 150px; color: #444 !important;\">{{data.task.serviceMatrixByTaskId.addtnlBudgetFator}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/current-state/labor-class-inputs/labor-class-inputs.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/current-state/labor-class-inputs/labor-class-inputs.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info{\r\n    cursor: pointer;\r\n    color: #1f4e79;\r\n    font-size: 18px;\r\n    padding-top: 5px;\r\n}\r\n\r\n.text-primary{\r\n    color: #1f4e79 !important;\r\n}\r\n\r\n.mat-form-field-infix { width: auto; }\r\n\r\n/*table tr td { border: 1px solid black;}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zdGF0ZS9sYWJvci1jbGFzcy1pbnB1dHMvbGFib3ItY2xhc3MtaW5wdXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsd0JBQXdCLFdBQVcsRUFBRTs7QUFFckMsMENBQTBDIiwiZmlsZSI6InNyYy9hcHAvY3VycmVudC1zdGF0ZS9sYWJvci1jbGFzcy1pbnB1dHMvbGFib3ItY2xhc3MtaW5wdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMWY0ZTc5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeXtcclxuICAgIGNvbG9yOiAjMWY0ZTc5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHdpZHRoOiBhdXRvOyB9XHJcblxyXG4vKnRhYmxlIHRyIHRkIHsgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7fSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/current-state/labor-class-inputs/labor-class-inputs.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/current-state/labor-class-inputs/labor-class-inputs.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<button mat-button (click)=\"copyTasks()\" color=\"primary\" matTooltip=\"Copy All Tasks\" style=\"cursor:default;\">\r\n  <mat-icon>file_copy</mat-icon>\r\n  Copy All Tasks\r\n</button>\r\n<mat-form-field>\r\n  <mat-label>Select Position IDs</mat-label>\r\n  <mat-select [(ngModel)]=\"positions\" multiple>\r\n    <mat-option style=\"min-width:1000px;\" *ngFor=\"let position of laborMappings\" [value]=\"position\">\r\n        {{position.positionId}} | {{position.laborClassName}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n<span *ngIf=\"isVaidator\" style=\"float: right;\">\r\n  <button id=\"valAllTasks\" mat-button (click)=\"approveAllTasks()\" color=\"primary\" matTooltip=\"Validate All Tasks\">\r\n    <mat-icon>done_all</mat-icon>\r\n    Validate All Tasks\r\n  </button>\r\n</span>\r\n</div>\r\n\r\n<table class=\"w-100 lcsummary-table\">\r\n  <tr class=\"border-bottom\" style=\"background-color: #1f4e79; color: white;\">\r\n    <th></th>\r\n    <th style=\"width:175px; height: 40px;\">Task ID</th>\r\n    <th>Task Name</th>\r\n    <th style=\"width:125px;\">Respondent name</th>\r\n    <th style=\"width:75px;\">Status</th>\r\n    <th style=\"width:100px;\">Validated by</th>\r\n    <th style=\"width:100px;\">Last edited by</th>\r\n    <th style=\"width:60px;\">Hours</th>\r\n    <th style=\"width:200px;\">Feedback</th>\r\n    <th style=\"width:60px;\">Actions</th>\r\n  </tr>\r\n  <tr *ngFor=\"let summary of result\" class=\"border-bottom\">\r\n    <td>\r\n      <i class=\"material-icons info text-primary\"\r\n        title=\"{{summary.tasks[0].serviceMatrixByTaskId.serviceName+'/'+summary.tasks[0].serviceMatrixByTaskId.program+'/'+summary.tasks[0].serviceMatrixByTaskId.subProgram+'/'+summary.tasks[0].serviceMatrixByTaskId.taskCategory}}\">info</i>\r\n    </td>\r\n    <td>{{summary.taskId}}</td>\r\n    <td>{{summary.tasks[0].serviceMatrixByTaskId.taskName}}</td>\r\n    <td colspan=\"7\">\r\n      <table class=\"w-100\">\r\n        <tbody>\r\n        <!-- <tr *ngFor=\"let task of summary.tasks; index as i\"> -->\r\n        <tr *ngFor=\"let task of summary.tasks; index as i\" [class.border-top]=\"i>0\">\r\n          <td style=\"width:125px; height: 35px;\">{{task.user.userName}}</td>\r\n          <td style=\"width:75px;\">\r\n            <div *ngIf=\"task.statusBySttsId != null\">\r\n              {{task.statusBySttsId.statusCode}}\r\n            </div>\r\n          </td>\r\n          <td style=\"width:100px;\">\r\n            <div *ngIf=\"task.userByApproverId != null\">\r\n              {{task.userByApproverId.userName}}\r\n            </div>\r\n          </td>\r\n          <td style=\"width:100px;\">\r\n            <div *ngIf=\"task.userByEditedBy != null\">\r\n              {{task.userByEditedBy.userName}}\r\n            </div>\r\n          </td>\r\n          <td style=\"width:60px;\" class=\"text-center\">{{task.inputHours}}</td>\r\n          <td style=\"width:200px;\">{{task.feedback}}</td>\r\n          <td style=\"width:60px;\">\r\n            <i class=\"material-icons info text-primary\" title=\"Edit\" *ngIf=\"(task.userId == user.id &&  task.sttsId != 'A') || user.userRoleByCsRoleId.roleName == 'c_lead'\"\r\n              (click)=\"editInput(task)\">edit</i>\r\n            <i class=\"material-icons info text-danger\" title=\"Remove\" *ngIf=\"(task.userId == user.id && task.sttsId != 'A') || user.userRoleByCsRoleId.roleName == 'c_lead'\"\r\n              (click)=\"deleteInput(task)\">delete</i>\r\n            <i class=\"material-icons info text-success\" title=\"Approve\"\r\n              (click)=\"approveCSInput(task)\" *ngIf=\"user.userRoleByCsRoleId.roleName == 'c_lead'\">check_circle</i>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n  <tr *ngIf=\"result == null || result == undefined || result.length == 0\">\r\n    <td colspan=\"9\" class=\"text-center\">No records found</td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/current-state/labor-class-inputs/labor-class-inputs.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/current-state/labor-class-inputs/labor-class-inputs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LaborClassInputsComponent, EditCSInputDialog, DeleteCSInputDialog, ApproveCSInputDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborClassInputsComponent", function() { return LaborClassInputsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCSInputDialog", function() { return EditCSInputDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCSInputDialog", function() { return DeleteCSInputDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveCSInputDialog", function() { return ApproveCSInputDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");







var LaborClassInputsComponent = /** @class */ (function () {
    function LaborClassInputsComponent(userService, serviceMatrix, dialog, snackBar) {
        this.userService = userService;
        this.serviceMatrix = serviceMatrix;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.hoursEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.validatedHours = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.copyInd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isCopyListEmpty = false;
        this.isVaidator = false;
    }
    LaborClassInputsComponent.prototype.ngOnInit = function () {
        this.customInit();
        this.user = this.userService.user;
        if ('c_lead' === this.user['userRoleByCsRoleId']['roleName']) {
            this.isVaidator = true;
        }
    };
    Object.defineProperty(LaborClassInputsComponent.prototype, "laborMappings", {
        get: function () {
            // transform value for display
            return this._laborMappings;
        },
        set: function (laborMappings) {
            var _this = this;
            this._laborMappings = laborMappings.filter(function (e) { return e['positionId'] != _this.positionId; });
        },
        enumerable: true,
        configurable: true
    });
    LaborClassInputsComponent.prototype.customInit = function () {
        var _this = this;
        var _self = this;
        this.serviceMatrix.getLaborClassSummaryByPositionId(this.regionId, this.positionId).subscribe(function (res) {
            _self.result = lodash__WEBPACK_IMPORTED_MODULE_4__(res)
                .groupBy(function (x) { return x['taskId']; })
                .map(function (value, key) { return ({ taskId: key, tasks: value }); })
                .value();
            var he = lodash__WEBPACK_IMPORTED_MODULE_4__["sumBy"](res, function (e) {
                return e['inputHours'];
            });
            var resp = res;
            var filteredResp = resp.filter(function (e) { return e['sttsId'] == 'A'; });
            var hv = lodash__WEBPACK_IMPORTED_MODULE_4__["sumBy"](filteredResp, function (e) {
                return e['inputHours'];
            });
            _this.hoursEntered.emit(he);
            _this.validatedHours.emit(hv);
        });
    };
    LaborClassInputsComponent.prototype.editInput = function (task) {
        var _this = this;
        var dialogRef = this.dialog.open(EditCSInputDialog, {
            data: { task: task, hoursBank: this.hoursBank, hoursEntered: this.hoursEnterd }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.customInit();
            }
        });
    };
    LaborClassInputsComponent.prototype.deleteInput = function (task) {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteCSInputDialog, {
            data: { task: task }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.customInit();
            }
        });
    };
    LaborClassInputsComponent.prototype.approveCSInput = function (task) {
        var _this = this;
        this.serviceMatrix.approveCSInput(task, this.userService.userId).subscribe(function (res) {
            if (res) {
                _this.snackBar.openSnackBar("Input Validated", 'Close', "green-snackbar");
                _this.customInit();
                //this.dialogRef.close(res);
            }
            else {
                _this.snackBar.openSnackBar("Error approving input", 'Close', "red-snackbar");
            }
        });
        /*  const dialogRef = this.dialog.open(ApproveCSInputDialog, {
            data: { task: task }
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              this.customInit();
            }
          });*/
    };
    LaborClassInputsComponent.prototype.approveAllTasks = function () {
        var _this = this;
        this.serviceMatrix.approveAllInputs(this.regionId, this.positionId, this.userService.userId).subscribe(function (res) {
            if (res) {
                _this.snackBar.openSnackBar("Inputs Validated", 'Close', "green-snackbar");
                _this.customInit();
                //this.dialogRef.close(res);
            }
            else {
                _this.snackBar.openSnackBar("Error approving input", 'Close', "red-snackbar");
            }
        });
    };
    LaborClassInputsComponent.prototype.copyTasks = function () {
        var _this = this;
        this.isCopyListEmpty = false;
        if (this.positions == undefined || this.positions.length == 0) {
            this.snackBar.openSnackBar("Please select position ids", 'Close', "red-snackbar");
        }
        else {
            var destinationPositions = this.positions.map(function (a) { return a.positionId; });
            var tasksToBeCopied = this.result.map(function (a) { return a.taskId; });
            this.serviceMatrix.copyTasks(this.regionId, this.userService.userId, this.positionId, destinationPositions, tasksToBeCopied).subscribe(function (res) {
                _this.snackBar.openSnackBar("Tasks copied successfully", 'Close', "green-snackbar");
                _this.copyInd.emit();
            }, function (err) {
                _this.snackBar.openSnackBar("Error copying tasks", 'Close', "red-snackbar");
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('positionId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LaborClassInputsComponent.prototype, "positionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('regionId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassInputsComponent.prototype, "regionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LaborClassInputsComponent.prototype, "hoursEntered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LaborClassInputsComponent.prototype, "validatedHours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LaborClassInputsComponent.prototype, "copyInd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("hoursEntered"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassInputsComponent.prototype, "hoursEnterd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("validatdHours"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassInputsComponent.prototype, "validatdHours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("hoursBank"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassInputsComponent.prototype, "hoursBank", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('laborMappings'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], LaborClassInputsComponent.prototype, "laborMappings", null);
    LaborClassInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labor-class-inputs',
            template: __webpack_require__(/*! ./labor-class-inputs.component.html */ "./src/app/current-state/labor-class-inputs/labor-class-inputs.component.html"),
            styles: [__webpack_require__(/*! ./labor-class-inputs.component.css */ "./src/app/current-state/labor-class-inputs/labor-class-inputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]])
    ], LaborClassInputsComponent);
    return LaborClassInputsComponent;
}());

var EditCSInputDialog = /** @class */ (function () {
    function EditCSInputDialog(dialogRef, data, serviceMatrix, snackBar, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serviceMatrix = serviceMatrix;
        this.snackBar = snackBar;
        this.userService = userService;
        this.staticInputHours = this.data.task.inputHours;
        dialogRef.disableClose = true;
    }
    EditCSInputDialog.prototype.onNoClick = function () {
        this.data.task.inputHours = this.staticInputHours;
        this.dialogRef.close();
    };
    EditCSInputDialog.prototype.onUpdate = function () {
        var _this = this;
        var user = this.userService.user;
        var vaidator = false;
        if ('c_lead' === user['userRoleByCsRoleId']['roleName']) {
            vaidator = true;
        }
        this.serviceMatrix.editCSInput(this.data.task, this.userService.userId, vaidator).subscribe(function (res) {
            if (res) {
                _this.snackBar.openSnackBar("Input saved successfully", 'Close', "green-snackbar");
                _this.dialogRef.close(res);
            }
            else {
                _this.snackBar.openSnackBar("Error saving input value", 'Close', "red-snackbar");
            }
        });
    };
    EditCSInputDialog.prototype.onValidate = function () {
        var _this = this;
        this.serviceMatrix.updateAndValidateCsInput(this.data.task, this.userService.userId).subscribe(function (res) {
            if (res) {
                _this.snackBar.openSnackBar("Input approved successfully", 'Close', "green-snackbar");
                _this.dialogRef.close(res);
            }
            else {
                _this.snackBar.openSnackBar("Error approving input", 'Close', "red-snackbar");
            }
        });
    };
    EditCSInputDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-cs-input-dialog',
            template: __webpack_require__(/*! ./edit-cs-input-dialog.html */ "./src/app/current-state/labor-class-inputs/edit-cs-input-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"], src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], EditCSInputDialog);
    return EditCSInputDialog;
}());

var DeleteCSInputDialog = /** @class */ (function () {
    function DeleteCSInputDialog(dialogRef, data, serviceMatrix, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serviceMatrix = serviceMatrix;
        this.snackBar = snackBar;
    }
    DeleteCSInputDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteCSInputDialog.prototype.onConfirm = function () {
        var _this = this;
        this.serviceMatrix.deleteCSInput(this.data.task).subscribe(function (res) {
            if (res) {
                _this.snackBar.openSnackBar("Input deleted successfully", 'Close', "green-snackbar");
                _this.dialogRef.close(res);
            }
            else {
                _this.snackBar.openSnackBar("Error deleting input value", 'Close', "red-snackbar");
            }
        });
    };
    DeleteCSInputDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-cs-input-dialog',
            template: __webpack_require__(/*! ./delete-cs-input-dialog.html */ "./src/app/current-state/labor-class-inputs/delete-cs-input-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"], src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]])
    ], DeleteCSInputDialog);
    return DeleteCSInputDialog;
}());

var ApproveCSInputDialog = /** @class */ (function () {
    function ApproveCSInputDialog(dialogRef, data, serviceMatrix, snackBar, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serviceMatrix = serviceMatrix;
        this.snackBar = snackBar;
        this.userService = userService;
    }
    ApproveCSInputDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ApproveCSInputDialog.prototype.onConfirm = function () {
        var _this = this;
        this.serviceMatrix.approveCSInput(this.data.task, this.userService.userId).subscribe(function (res) {
            if (res) {
                _this.snackBar.openSnackBar("Input approved successfully", 'Close', "green-snackbar");
                _this.dialogRef.close(res);
            }
            else {
                _this.snackBar.openSnackBar("Error approving input", 'Close', "red-snackbar");
            }
        });
    };
    ApproveCSInputDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'approve-cs-input-dialog',
            template: __webpack_require__(/*! ./approve-cs-input-dialog.html */ "./src/app/current-state/labor-class-inputs/approve-cs-input-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"],
            src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ApproveCSInputDialog);
    return ApproveCSInputDialog;
}());



/***/ }),

/***/ "./src/app/current-state/labor-class-tasks/add-cs-input-dialog.css":
/*!*************************************************************************!*\
  !*** ./src/app/current-state/labor-class-tasks/add-cs-input-dialog.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: separate;\r\n    border-spacing: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zdGF0ZS9sYWJvci1jbGFzcy10YXNrcy9hZGQtY3MtaW5wdXQtZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW50LXN0YXRlL2xhYm9yLWNsYXNzLXRhc2tzL2FkZC1jcy1pbnB1dC1kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/current-state/labor-class-tasks/add-cs-input-dialog.html":
/*!**************************************************************************!*\
  !*** ./src/app/current-state/labor-class-tasks/add-cs-input-dialog.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table class=\"w-100\">\r\n    <tr>\r\n      <td style=\"font-size: 20px; font-weight: 600; margin-bottom: 0;\">{{task.taskName}}({{task.taskId}}) - {{positionId}}</td>\r\n      <td rowspan=\"2\" style=\"text-align: center; width: 148px;\">\r\n        ({{task.index}} out of {{filteredTasks.length}})<br>\r\n        <button mat-button class=\"float-sm-right\" *ngIf=\"task.nextTask != undefined\" title=\"{{task.nextTask.taskId}}\" (click)=\"goToTask(task.nextTask.taskId)\">\r\n            <mat-icon class=\"next_task_icon\">navigate_next</mat-icon>\r\n        </button>\r\n        <button mat-button class=\"float-sm-right\" *ngIf=\"task.nextTask != undefined\" title=\"{{task.prevTask.taskId}}\" (click)=\"goToTask(task.prevTask.taskId)\">\r\n            <mat-icon class=\"next_task_icon\">navigate_before</mat-icon>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td style=\"font-size: 14px; color: gray; padding-bottom: 10px;\">\r\n        {{task.serviceName}}/{{task.program}}/{{task.subProgram}}/{{task.taskCategory}}\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"taskMessage != ''\">\r\n      <td colspan=\"2\" class=\"alert alert-success\">{{taskMessage}}</td>\r\n    </tr>\r\n  </table>\r\n  <!-- <p style=\"font-size: 20px; font-weight: 600; margin-bottom: 0;\">{{data.task.taskName}}({{data.task.taskId}}) - {{data.positionId}}</p>\r\n  <p style=\"font-size: 14px;\">{{data.task.serviceName}} / {{data.task.program}} / {{data.task.subProgram}}\r\n    /{{data.task.taskCategory}}\r\n  </p> -->\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <table class=\"text-white\" style=\"background: #1f4e79; height: 80px; width: auto !important;\">\r\n      <tr>\r\n        <td rowspan=\"3\" style=\"background-color: white;\">\r\n            <mat-form-field class=\"px-1\">\r\n              <input matInput style=\"color:black;\" placeholder=\"Input Hours\" type=\"number\" [(ngModel)]=\"hours\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"px-1\">\r\n              <textarea matInput placeholder=\"Feedback\" [(ngModel)]=\"feedback\" style=\"color: black;\"></textarea>\r\n            </mat-form-field>\r\n          <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"onAdd()\" class=\"m-1\" style=\"width: 70px;\" *ngIf=\"!existingTask\">Add</button>\r\n          <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"onUpdate()\" class=\"m-1\" style=\"width: 70px;\" *ngIf=\"existingTask\">Update</button>\r\n          <button mat-raised-button  (click)=\"onNoClick()\" class=\"m-1\" style=\"width: 70px;\">Close</button>\r\n        </td>\r\n        <td rowspan=\"3\" style=\"width: 75px;\"></td>\r\n        <td>Hours bank for the position</td>\r\n        <td style=\"width: 75px; border-bottom: 1px solid white;\">{{hoursBank}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Total hours allocated</td>\r\n        <td style=\"border-bottom: 1px solid white;\">{{hoursEntered+hours-staticInputHours}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Hours remaining to be allocated</td>\r\n        <td style=\"border-bottom: 1px solid white;\">{{hoursBank-(hoursEntered+hours-staticInputHours)}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"row pt-3\">\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Description\" disabled style=\"min-height: 150px; color: #444 !important;\">{{task.taskDesc}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Desired Performance\" disabled style=\"min-height: 150px; color: #444 !important;\">{{task.desiredPerf}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Glossary\" disabled style=\"min-height: 150px; color: #444 !important;\">{{task.serviceGlossary}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <mat-form-field class=\"w-100\">\r\n      <textarea matInput placeholder=\"Additional Budget Factors\" disabled style=\"min-height: 150px; color: #444 !important;\">{{task.addtnlBudgetFator}}</textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/current-state/labor-class-tasks/cs-input-taskexist-dialog.html":
/*!********************************************************************************!*\
  !*** ./src/app/current-state/labor-class-tasks/cs-input-taskexist-dialog.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Task already added</h1>\r\n<div mat-dialog-content>\r\n  <p>Please view 'Inputs' section to modify task hours.</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/current-state/labor-class-tasks/labor-class-tasks.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/current-state/labor-class-tasks/labor-class-tasks.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-cell,\r\n.mat-cell,\r\nmat-footer-cell,\r\n.mat-footer-cell,\r\nmat-header-cell, .mat-header-cell {\r\n  padding: 0.75rem !important;\r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:flex-end;\r\n }\r\n\r\n.mat-form-field {\r\n   font-size: 14px;\r\n   width: 50%;\r\n }\r\n\r\n.mat-row:hover {\r\n  background-color: #DDD;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar  span, mat-toolbar  a  span {\r\n  font-size: 10pt;\r\n}\r\n\r\n.table-col-title {\r\n  font-weight: 500;\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n\r\n.table-col-header {\r\n  font-size: 12px;\r\n}\r\n\r\n.filter-input{\r\n  width: 75%;\r\n  text-align: left;\r\n}\r\n\r\n.th-header-background{\r\n  background: #1f4e79;\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.help-text-icon {\r\n  font-size: 14px;\r\n}\r\n\r\n::ng-deep .mat-tooltip  {\r\n white-space: pre-line    !important;\r\n font-size: 10px   !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zdGF0ZS9sYWJvci1jbGFzcy10YXNrcy9sYWJvci1jbGFzcy10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztFQUtFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7Q0FDekI7O0FBRUE7R0FDRSxlQUFlO0dBQ2YsVUFBVTtDQUNaOztBQUVBO0VBQ0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLDRCQUE0QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbnQtc3RhdGUvbGFib3ItY2xhc3MtdGFza3MvbGFib3ItY2xhc3MtdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jZWxsLFxyXG4ubWF0LWNlbGwsXHJcbm1hdC1mb290ZXItY2VsbCxcclxuLm1hdC1mb290ZXItY2VsbCxcclxubWF0LWhlYWRlci1jZWxsLCAubWF0LWhlYWRlci1jZWxsIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuIH1cclxuXHJcbiAubWF0LWZvcm0tZmllbGQge1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiB9XHJcblxyXG4gLm1hdC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXHJcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxubWF0LXRvb2xiYXIgIHNwYW4sIG1hdC10b29sYmFyICBhICBzcGFuIHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi50YWJsZS1jb2wtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRhYmxlLWNvbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZpbHRlci1pbnB1dHtcclxuICB3aWR0aDogNzUlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50aC1oZWFkZXItYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiAjMWY0ZTc5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10b29sdGlwICB7XHJcbiB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgICAgIWltcG9ydGFudDtcclxuIGZvbnQtc2l6ZTogMTBweCAgICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/current-state/labor-class-tasks/labor-class-tasks.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/current-state/labor-class-tasks/labor-class-tasks.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"text-center\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" [(ngModel)]=\"globalFilter\">\r\n  </mat-form-field>\r\n  <button mat-button color=\"primary\" (click)=\"clearAllFilters()\">Clear All Filters</button>\r\n  <!-- <button mat-button color=\"primary\" (click)=\"loadLastUsedFilter()\" *ngIf=\"user['filter'] != null\">Use Most Recent\r\n    Filter</button> -->\r\n  </div>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8 w-100\">\r\n    <ng-container matColumnDef=\"viewTask\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Actions</th>\r\n      <td mat-cell *matCellDef=\"let row\">\r\n        <button mat-button color=\"primary\" (click)=\"addInput(row)\" title=\"Add Hours\" [disabled]=\"isTaskAdded(row.taskId) >= 0\">\r\n          <mat-icon>add_box</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"viewTask-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n\r\n      </th>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"taskId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task ID</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.taskId}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"serviceName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Service</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.serviceName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"program\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Program</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.program}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"subProgram\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Sub Program</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.subProgram}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"taskCategory\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task Category</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.taskCategory}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"taskName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.taskName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Task Id Filter Column -->\r\n    <ng-container matColumnDef=\"taskId-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.taskId}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'taskId')\" placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Service Filter Column -->\r\n    <ng-container matColumnDef=\"serviceName-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.serviceName}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'serviceName')\" placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Program Filter Column -->\r\n    <ng-container matColumnDef=\"program-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.program}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'program')\" placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Sub Program Filter Column -->\r\n    <ng-container matColumnDef=\"subProgram-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.subProgram}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'subProgram')\" placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Task Category Filter Column -->\r\n    <ng-container matColumnDef=\"taskCategory-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.taskCategory}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'taskCategory')\" placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Task Filter Column -->\r\n    <ng-container matColumnDef=\"taskName-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.taskName}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'taskName')\" placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedFilterColumns\" class=\"example-second-header-row\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[10, 20, 50, 100]\" showFirstLastButtons (page)=\"pageEvent = handlePage($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/current-state/labor-class-tasks/labor-class-tasks.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/current-state/labor-class-tasks/labor-class-tasks.component.ts ***!
  \********************************************************************************/
/*! exports provided: LaborClassTasksComponent, CSInputTaskExistDialog, AddCSInputDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborClassTasksComponent", function() { return LaborClassTasksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSInputTaskExistDialog", function() { return CSInputTaskExistDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCSInputDialog", function() { return AddCSInputDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var LaborClassTasksComponent = /** @class */ (function () {
    function LaborClassTasksComponent(userService, serviceMatrix, dialog, snackBar) {
        this.userService = userService;
        this.serviceMatrix = serviceMatrix;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.updateHoursEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updatedValidatedHours = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addedTasks = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ["taskId", "serviceName", "program", "subProgram", "taskCategory", "taskName", "viewTask"];
        this.displayedFilterColumns = [];
        this.globalFilter = '';
        this.filteredValues = {
            taskId: '', serviceName: '', program: '',
            subProgram: '', taskCategory: '', taskName: ''
        };
    }
    LaborClassTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.user;
        // this.loadLaborClassInputs();
        // this.taskCatalog = JSON.parse(localStorage.getItem('csServiceMatrix'));
        this.displayedColumns.forEach(function (e) {
            _this.displayedFilterColumns.push(e + '-filter');
        });
        this.dataSource.data = this.taskCatalog;
        this.dataSource.filterPredicate = this.customFilterPredicate();
        this.filters = JSON.parse(sessionStorage.getItem('cslcfilters'));
        this.filters = this.filters == null ? {} : this.filters;
        this.lcfilter = this.filters[this.positionId];
        if (this.lcfilter != undefined) {
            this.paginator.pageIndex = this.lcfilter.pageIndex;
            this.paginator.pageSize = this.lcfilter.pageSize;
            this.applyAllFilters(this.lcfilter.globalFilter, this.lcfilter.filteredValues);
        }
        this.dataSource.paginator = this.paginator;
    };
    LaborClassTasksComponent.prototype.saveFilter = function () {
        this.lcfilter = {};
        this.lcfilter["globalFilter"] = this.globalFilter;
        this.lcfilter["filteredValues"] = this.filteredValues;
        this.lcfilter["pageIndex"] = this.paginator.pageIndex;
        this.lcfilter["pageSize"] = this.paginator.pageSize;
        this.filters[this.positionId] = this.lcfilter;
        sessionStorage.setItem('cslcfilters', JSON.stringify(this.filters));
    };
    LaborClassTasksComponent.prototype.handlePage = function (e) {
        this.saveFilter();
    };
    LaborClassTasksComponent.prototype.loadLaborClassInputs = function () {
        var _this = this;
        this.serviceMatrix.getLaborClassSummaryByPositionId(this.regionId, this.positionId).subscribe(function (res) {
            _this.addedTasks = res;
        });
    };
    LaborClassTasksComponent.prototype.isTaskAdded = function (taskId) {
        var index = lodash__WEBPACK_IMPORTED_MODULE_6__["findIndex"](this.addedTasks, function (ele) { return ele['taskId'] == taskId; });
        return index;
    };
    LaborClassTasksComponent.prototype.applyAllFilters = function (gFilter, fValues) {
        this.applyFilter(gFilter);
        this.applyColumnFilter(fValues.taskId, 'taskId');
        this.applyColumnFilter(fValues.serviceName, 'serviceName');
        this.applyColumnFilter(fValues.program, 'program');
        this.applyColumnFilter(fValues.subProgram, 'subProgram');
        this.applyColumnFilter(fValues.taskCategory, 'taskCategory');
        this.applyColumnFilter(fValues.taskName, 'taskName');
    };
    LaborClassTasksComponent.prototype.clearAllFilters = function () {
        this.paginator.pageIndex = 0;
        this.paginator.pageSize = 10;
        this.dataSource.paginator = this.paginator;
        this.globalFilter = '';
        this.filteredValues = {
            taskId: '', serviceName: '', program: '',
            subProgram: '', taskCategory: '', taskName: ''
        };
        this.applyAllFilters(this.globalFilter, this.filteredValues);
        this.saveFilter();
    };
    LaborClassTasksComponent.prototype.customFilterPredicate = function () {
        var _this = this;
        var myFilterPredicate = function (data, filter) {
            var globalMatch = !_this.globalFilter;
            if (_this.globalFilter) {
                var taskIdFound_1 = data.taskId.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var serviceNameFound_1 = data.serviceName.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var programFound_1 = data.program.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var subProgramFound_1 = data.subProgram.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var taskCategoryFound_1 = data.taskCategory.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var taskNameFound_1 = data.taskName.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                globalMatch = taskIdFound_1 || serviceNameFound_1 || programFound_1 || subProgramFound_1 || taskCategoryFound_1 || taskNameFound_1;
            }
            if (!globalMatch) {
                return;
            }
            var searchString = JSON.parse(filter);
            var taskIdFound = data.taskId.toString().trim().toLowerCase().indexOf(searchString.taskId.toString().toLowerCase()) !== -1;
            var serviceNameFound = data.serviceName.toString().trim().toLowerCase().indexOf(searchString.serviceName.toString().toLowerCase()) !== -1;
            var programFound = data.program.toString().trim().toLowerCase().indexOf(searchString.program.toString().toLowerCase()) !== -1;
            var subProgramFound = data.subProgram.toString().trim().toLowerCase().indexOf(searchString.subProgram.toString().toLowerCase()) !== -1;
            var taskCategoryFound = data.taskCategory.toString().trim().toLowerCase().indexOf(searchString.taskCategory.toString().toLowerCase()) !== -1;
            var taskNameFound = data.taskName.toString().trim().toLowerCase().indexOf(searchString.taskName.toString().toLowerCase()) !== -1;
            return taskIdFound && serviceNameFound && programFound && subProgramFound && taskCategoryFound && taskNameFound;
        };
        return myFilterPredicate;
    };
    LaborClassTasksComponent.prototype.applyColumnFilter = function (filterValue, col) {
        this.filteredValues[col] = filterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
        this.saveFilter();
    };
    LaborClassTasksComponent.prototype.applyFilter = function (filter) {
        this.globalFilter = filter;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
        this.saveFilter();
    };
    LaborClassTasksComponent.prototype.addInput = function (task) {
        var _this = this;
        var tasks = this.dataSource.filteredData;
        var filteredTasks = [];
        if (tasks.length > 0) {
            for (var i = 0; i < tasks.length; i++) {
                var sspt = tasks[i];
                if (i == 0) {
                    sspt["prevTask"] = tasks[tasks.length - 1];
                    sspt["nextTask"] = tasks[i + 1];
                }
                else if (i == tasks.length - 1) {
                    sspt["prevTask"] = tasks[i - 1];
                    sspt["nextTask"] = tasks[0];
                }
                else {
                    sspt["prevTask"] = tasks[i - 1];
                    sspt["nextTask"] = tasks[i + 1];
                }
                sspt["index"] = i + 1;
                filteredTasks.push(sspt);
            }
        }
        // this.serviceMatrix.getCSInput(this.regionId, this.userService.userId, this.positionId, task.taskId).subscribe(res => {
        //   if(res != null && res['inputHours'] > 0){
        //     this.dialog.open(CSInputTaskExistDialog, {});
        //   } else {
        var dialogRef = this.dialog.open(AddCSInputDialog, {
            data: { positionId: this.positionId, task: task, hours: 0, feedback: "",
                userId: this.user['id'], selectedRegionId: this.regionId,
                hoursBank: this.hoursBank, hoursEntered: this.hoursEntered,
                validatedHours: this.validatedHours, filteredTasks: filteredTasks }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res != undefined && res.hours) {
                // this.loadLaborClassInputs();
                _this.updateHoursEntered.emit(res.hours);
                _this.updatedValidatedHours.emit(res.validatedHours);
            }
        });
        //   }
        // })
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('positionId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LaborClassTasksComponent.prototype, "positionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('regionId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassTasksComponent.prototype, "regionId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("hoursEntered"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassTasksComponent.prototype, "hoursEntered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("validatedHours"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassTasksComponent.prototype, "validatedHours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("hoursBank"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LaborClassTasksComponent.prototype, "hoursBank", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LaborClassTasksComponent.prototype, "updateHoursEntered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LaborClassTasksComponent.prototype, "updatedValidatedHours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("taskCatalog"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LaborClassTasksComponent.prototype, "taskCatalog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], LaborClassTasksComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], LaborClassTasksComponent.prototype, "sort", void 0);
    LaborClassTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labor-class-tasks',
            template: __webpack_require__(/*! ./labor-class-tasks.component.html */ "./src/app/current-state/labor-class-tasks/labor-class-tasks.component.html"),
            styles: [__webpack_require__(/*! ./labor-class-tasks.component.css */ "./src/app/current-state/labor-class-tasks/labor-class-tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarComponent"]])
    ], LaborClassTasksComponent);
    return LaborClassTasksComponent;
}());

var CSInputTaskExistDialog = /** @class */ (function () {
    function CSInputTaskExistDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CSInputTaskExistDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CSInputTaskExistDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cs-input-task-exist-dialog',
            template: __webpack_require__(/*! ./cs-input-taskexist-dialog.html */ "./src/app/current-state/labor-class-tasks/cs-input-taskexist-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], CSInputTaskExistDialog);
    return CSInputTaskExistDialog;
}());

var AddCSInputDialog = /** @class */ (function () {
    function AddCSInputDialog(dialogRef, data, serviceMatrix, snackBar, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serviceMatrix = serviceMatrix;
        this.snackBar = snackBar;
        this.userService = userService;
        this.hours = 0;
        this.feedback = "";
        dialogRef.disableClose = true;
    }
    AddCSInputDialog.prototype.ngOnInit = function () {
        this.user = this.userService.user;
        this.selectedRegionId = this.data.selectedRegionId;
        this.userId = this.userService.user['id'];
        this.positionId = this.data.positionId;
        this.hoursBank = this.data.hoursBank;
        this.hoursEntered = this.data.hoursEntered;
        this.validatedHours = this.data.validatedHours;
        this.selectedTaskId = this.data.task.taskId;
        this.filteredTasks = this.data.filteredTasks;
        this.goToTask(this.selectedTaskId);
    };
    AddCSInputDialog.prototype.onNoClick = function () {
        this.dialogRef.close({ "hours": this.hoursEntered, "validatedHours": this.validatedHours });
    };
    AddCSInputDialog.prototype.goToTask = function (taskId) {
        var _this = this;
        this.task = this.filteredTasks.find(function (e) { return e.taskId == taskId; });
        this.hours = 0;
        this.feedback = "";
        this.taskMessage = "";
        this.existingTask = false;
        this.staticInputHours = 0;
        this.serviceMatrix.getCSInput(this.selectedRegionId, this.userId, this.positionId, taskId).subscribe(function (res) {
            if (res != null && res['inputHours'] > 0) {
                _this.hours = res['inputHours'];
                _this.feedback = res['feedback'];
                _this.staticInputHours = res['inputHours'];
                _this.existingTask = true;
                if (res['sttsId'] == 'A') {
                    _this.taskMessage = "Task has been already validated";
                }
                _this.csInputUserId = res['userId'];
            }
        });
    };
    AddCSInputDialog.prototype.onUpdate = function () {
        var _this = this;
        var csInput = new Object;
        csInput['regionId'] = this.selectedRegionId;
        csInput['userId'] = this.csInputUserId;
        csInput['positionId'] = this.positionId;
        csInput['taskId'] = this.task.taskId;
        csInput['inputHours'] = this.hours;
        csInput['feedback'] = this.feedback;
        var vaidator = false;
        if ('c_lead' === this.user['userRoleByCsRoleId']['roleName']) {
            vaidator = true;
        }
        this.serviceMatrix.editCSInput(csInput, this.userId, vaidator).subscribe(function (res) {
            if (res) {
                _this.hoursEntered = _this.hoursEntered + (_this.hours - _this.staticInputHours);
                if (vaidator) {
                    _this.validatedHours = _this.validatedHours + (_this.hours - _this.staticInputHours);
                }
                _this.staticInputHours = _this.hours;
                _this.snackBar.openSnackBar("Input saved successfully", 'Close', "green-snackbar");
            }
            else {
                _this.snackBar.openSnackBar("Error saving input value", 'Close', "red-snackbar");
            }
        });
    };
    AddCSInputDialog.prototype.onAdd = function () {
        var _this = this;
        var vaidator = false;
        if ('c_lead' === this.user['userRoleByCsRoleId']['roleName']) {
            vaidator = true;
        }
        this.serviceMatrix.saveCsInput(this.selectedRegionId, this.userId, this.positionId, this.task.taskId, this.hours, this.feedback, vaidator).subscribe(function (res) {
            if (res) {
                _this.hoursEntered = _this.hoursEntered + _this.hours;
                if (vaidator) {
                    _this.validatedHours = _this.validatedHours + _this.hours;
                }
                _this.staticInputHours = _this.hours;
                _this.snackBar.openSnackBar("Input saved successfully", 'Close', "green-snackbar");
                // this.dialogRef.close({"result":res, "hours":this.data.hours});
            }
            else {
                _this.snackBar.openSnackBar("Error saving input value", 'Close', "red-snackbar");
            }
        });
    };
    AddCSInputDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-cs-input-dialog',
            template: __webpack_require__(/*! ./add-cs-input-dialog.html */ "./src/app/current-state/labor-class-tasks/add-cs-input-dialog.html"),
            styles: [__webpack_require__(/*! ./add-cs-input-dialog.css */ "./src/app/current-state/labor-class-tasks/add-cs-input-dialog.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"], src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarComponent"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AddCSInputDialog);
    return AddCSInputDialog;
}());



/***/ }),

/***/ "./src/app/current-state/labor-class/labor-class.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/current-state/labor-class/labor-class.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-cell,\r\n.mat-cell,\r\nmat-footer-cell,\r\n.mat-footer-cell,\r\nmat-header-cell, .mat-header-cell {\r\n  padding: 0.75rem !important;\r\n}\r\n\r\ntable, mat-paginator {\r\n  width: 90%;\r\n}\r\n\r\n.hours-container{\r\n  text-align: center;\r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:flex-end;\r\n }\r\n\r\n.mat-form-field {\r\n   font-size: 14px;\r\n   width: 50%;\r\n }\r\n\r\n.mat-row:hover {\r\n  background-color: #DDD;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar  span, mat-toolbar  a  span {\r\n  font-size: 10pt;\r\n}\r\n\r\n.table-col-title {\r\n  font-weight: 500;\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n\r\n.table-col-header {\r\n  font-size: 12px;\r\n}\r\n\r\n.filter-input{\r\n  width: 75%;\r\n  text-align: left;\r\n}\r\n\r\n.th-header-background{\r\n  background: #1f4e79;\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.help-text-icon {\r\n  font-size: 14px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n  border: 1px solid #1f4e79;\r\n}\r\n\r\n.example-detail-row-td {\r\n  padding: 0px !important;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.expand-icon {\r\n  cursor: pointer;\r\n  color: #1f4e79;\r\n}\r\n\r\n.lcsummary-table {\r\n  border-color: lightgray;\r\n}\r\n\r\n.lcsummary-table td, .lcsummary-table th {\r\n  padding: 3px;\r\n}\r\n\r\n.example-element-detail:hover {\r\n  background-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zdGF0ZS9sYWJvci1jbGFzcy9sYWJvci1jbGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztFQUtFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7Q0FDekI7O0FBRUE7R0FDRSxlQUFlO0dBQ2YsVUFBVTtDQUNaOztBQUVBO0VBQ0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW50LXN0YXRlL2xhYm9yLWNsYXNzL2xhYm9yLWNsYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2VsbCxcclxuLm1hdC1jZWxsLFxyXG5tYXQtZm9vdGVyLWNlbGwsXHJcbi5tYXQtZm9vdGVyLWNlbGwsXHJcbm1hdC1oZWFkZXItY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSwgbWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmhvdXJzLWNvbnRhaW5lcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuIH1cclxuXHJcbiAubWF0LWZvcm0tZmllbGQge1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiB9XHJcblxyXG4gLm1hdC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXHJcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxubWF0LXRvb2xiYXIgIHNwYW4sIG1hdC10b29sYmFyICBhICBzcGFuIHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi50YWJsZS1jb2wtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRhYmxlLWNvbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZpbHRlci1pbnB1dHtcclxuICB3aWR0aDogNzUlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50aC1oZWFkZXItYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiAjMWY0ZTc5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMWY0ZTc5O1xyXG59XHJcblxyXG4uZXhhbXBsZS1kZXRhaWwtcm93LXRkIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5leHBhbmQtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMWY0ZTc5O1xyXG59XHJcblxyXG4ubGNzdW1tYXJ5LXRhYmxlIHtcclxuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmxjc3VtbWFyeS10YWJsZSB0ZCwgLmxjc3VtbWFyeS10YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/current-state/labor-class/labor-class.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/current-state/labor-class/labor-class.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" class=\"mb-4\">\r\n  <mat-toolbar>\r\n    <div class=\"row w-100 m-0\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <span> <b>My Reports</b> </span>\r\n\r\n        <button mat-button color=\"primary\" matTooltip=\"User Info\" style=\"cursor:default;\">\r\n          <mat-icon>account_box</mat-icon>\r\n          {{user.userName}}\r\n        </button>\r\n        <button mat-button color=\"primary\" matTooltip=\"Region/Branch/District\" style=\"cursor:default;\">\r\n          <mat-icon>language</mat-icon>\r\n          {{selectedRegionObj.regionByRegionId.regionName}}\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6 text-right\">\r\n        <span> <b>Actions: </b></span>\r\n        <button mat-button color=\"primary\" [matMenuTriggerFor]=\"region\">\r\n          <mat-icon>language</mat-icon>\r\n          Choose Region/Branch/District\r\n        </button>\r\n\r\n        <mat-menu #region=\"matMenu\">\r\n          <button mat-menu-item *ngFor=\"let item of regionList\" (click)=\"chooseRegion(item.regionId)\">\r\n            {{item.regionByRegionId.regionName}} </button>\r\n        </mat-menu>\r\n\r\n\r\n        <a mat-button color=\"primary\" title=\"Provide Feedback\" target=\"_new\"\r\n          href=\"https://deloittesurvey.deloitte.com/Community/se/3FC11B2638966086\">\r\n          <mat-icon>feedback</mat-icon>\r\n        </a>\r\n        <a mat-button color=\"primary\" title=\"Respondent Resource Hub\" target=\"_new\"\r\n          href=\"http://dfgintranet/portal/BusinessOperations/Budget/ServiceBasedBudgeting/Respondents/tabid/2880/Default.aspx\">\r\n          <mat-icon>file_copy</mat-icon>\r\n        </a>\r\n\r\n        <button mat-button color=\"primary\" (click)=\"backToLogin()\">\r\n          <mat-icon>power_settings_new</mat-icon>\r\n          Logout\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" multiTemplateDataRows>\r\n    <ng-container matColumnDef=\"expansion\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"></th>\r\n      <td mat-cell *matCellDef=\"let element\" style=\"width:20px;\">\r\n        <i class=\"material-icons expand-icon\" *ngIf=\"element == expandedElement\" title=\"Collapse\"\r\n          (click)=\"expandRow(element)\">expand_less</i>\r\n        <i class=\"material-icons expand-icon\" *ngIf=\"element != expandedElement\" title=\"Expand\"\r\n          (click)=\"expandRow(element)\">expand_more</i>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"respondentName\" >\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Respondent Name</th>\r\n      <td mat-cell *matCellDef=\"let element\" style=\"width:150px;\">\r\n        {{element.respondentName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"positionId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Position ID</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.positionId}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"laborClassName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Labor Class Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.laborClassName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"hours\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Hours Bank</th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"hours-container\">\r\n        {{element.hours}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"inputHours\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Respondent Hours Entered</th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"hours-container\">\r\n        {{element.hoursEntered}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"hoursRemaining\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Respondent Hours Remaining</th>\r\n      <td mat-cell *matCellDef=\"let element\" [class.text-success]=\"element.hoursRemaining > 0\" [class.text-danger]=\"element.hoursRemaining < 0\" class=\"hours-container\">\r\n        {{element.hoursRemaining}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"validatedHours\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Validated Hours</th>\r\n      <td mat-cell *matCellDef=\"let element\" class=\"hours-container\">\r\n        {{element.validatedHours}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"validatedHoursRemaining\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Unvalidated Hours Remaining</th>\r\n      <td mat-cell *matCellDef=\"let element\" [class.text-success]=\"element.validatedHoursRemaining > 0\" [class.text-danger]=\"element.validatedHoursRemaining < 0\" class=\"hours-container\">\r\n        {{element.validatedHoursRemaining}}\r\n      </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Actions</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <!-- <i class=\"material-icons\" title=\"Add Hours\" (click)=\"showMatrix(element)\">add_circle_outline</i> -->\r\n        <button mat-stroked-button color=\"primary\" (click)=\"showMatrix(element)\">\r\n          Add Hours\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n    <ng-container matColumnDef=\"expandedDetail\">\r\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\" class=\"example-detail-row-td\">\r\n        <div class=\"example-element-detail w-100\"\r\n          [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n          <mat-tab-group class=\"w-100\" *ngIf=\"element == expandedElement\">\r\n            <mat-tab label=\"Add Task\">\r\n              <ng-template matTabContent>\r\n                <div *ngIf=\"taskCatalog != null && taskCatalog.length > 0\">\r\n                  <app-labor-class-tasks [taskCatalog]=\"taskCatalog\" [hoursBank]=\"element.hours\"\r\n                   [hoursEntered]=\"element.hoursEntered\" [validatedHours]=\"element.validatedHours\" [positionId]=\"element.positionId\"\r\n                   [regionId]=\"selectedRegionId\" (updateHoursEntered)=\"updateHoursEntered(element, $event)\"\r\n                   (updatedValidatedHours)= \"updatedValidatedHours(element, $event)\"\r\n                   ></app-labor-class-tasks>\r\n                </div>\r\n              </ng-template>\r\n            </mat-tab>\r\n            <mat-tab label=\"Inputs\">\r\n              <ng-template matTabContent>\r\n                <app-labor-class-inputs [positionId]=\"element.positionId\" [hoursBank]=\"element.hours\"\r\n                  [hoursEntered]=\"element.hoursEntered\"\r\n                  [validatdHours]=\"element.validatedHours\"\r\n                  (hoursEntered)=\"updateHoursEntered(element, $event)\"\r\n                  (validatedHours)=\"updatedValidatedHours(element, $event)\"\r\n                  (copyInd) = \"reloadLaborClass()\"\r\n                  [regionId]=\"selectedRegionObj.regionByRegionId.regionId\"\r\n                  [laborMappings] = \"laborMappings\"></app-labor-class-inputs>\r\n              </ng-template>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\"\r\n      [class.example-expanded-row]=\"expandedElement === element\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n  <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 20, 50, 100]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/current-state/labor-class/labor-class.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/current-state/labor-class/labor-class.component.ts ***!
  \********************************************************************/
/*! exports provided: LaborClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborClassComponent", function() { return LaborClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");









var LaborClassComponent = /** @class */ (function () {
    function LaborClassComponent(http, router, serviceMatrix, userService, route, snackBar) {
        this.http = http;
        this.router = router;
        this.serviceMatrix = serviceMatrix;
        this.userService = userService;
        this.route = route;
        this.snackBar = snackBar;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.user = null;
        this.displayedColumns = [];
        this.taskhours = 0;
        this.feedback = "";
        this.selectedIndex = 1;
        this.options = ['One', 'Two', 'Three'];
    }
    LaborClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRegionId = params['regionId'];
            _this.customInit(_this.selectedRegionId);
            _this.loadTaskCatalog();
        });
        // this.filteredOptions = this.myControl.valueChanges
        //   .pipe(
        //     startWith(''),
        //     map(value => this._filter(value))
        //   );
    };
    LaborClassComponent.prototype.loadTaskCatalog = function () {
        var _this = this;
        this.taskCatalog = JSON.parse(localStorage.getItem('csServiceMatrix'));
        if (this.taskCatalog == null || this.taskCatalog.length <= 0) {
            console.time("Loading Task Catalog");
            this.serviceMatrix.getCsMatrixData()
                .subscribe(function (res) {
                _this.taskCatalog = res;
                // this.taskCatalog.forEach(e => this.serviceNames.add(e["serviceName"]));
                localStorage.setItem('csServiceMatrix', JSON.stringify(res));
            });
            console.time("Loaded Task Catalog");
        }
        // else {
        //   this.taskCatalog.forEach(e => this.serviceNames.add(e["serviceName"]));
        // }
    };
    // private _filter(value: string) {
    //   const filterValue = value.toLowerCase();
    //   return this.tasks.filter(e => e['name'].toLowerCase().includes(filterValue));
    // }
    // filterServices() {
    //   let fltr = this.taskCatalog.filter(e => e["serviceName"] == this.servicename);
    //   this.programs = new Set();
    //   this.tasks = [];
    //   this.taskid = "";
    //   fltr.forEach(e => {
    //     this.programs.add(e["program"]);
    //     this.tasks.push({ "id": e["taskId"], "name": e["taskName"] });
    //   });
    // }
    // filterPrograms() {
    //   let fltr = this.taskCatalog.filter(e => e["program"] == this.program);
    //   this.subprograms = new Set();
    //   this.tasks = [];
    //   this.taskid = "";
    //   fltr.forEach(e => {
    //     this.subprograms.add(e["subProgram"]);
    //     this.tasks.push({ "id": e["taskId"], "name": e["taskName"] });
    //   });
    // }
    // filterSubPrograms() {
    //   let fltr = this.taskCatalog.filter(e => e["subProgram"] == this.subprogram);
    //   this.taskcategories = new Set();
    //   this.tasks = [];
    //   this.taskid = "";
    //   fltr.forEach(e => {
    //     this.taskcategories.add(e["taskCategory"]);
    //     this.tasks.push({ "id": e["taskId"], "name": e["taskName"] });
    //   });
    // }
    // filterTaskCategories() {
    //   let fltr = this.taskCatalog.filter(e => e["taskCategory"] == this.taskcategory);
    //   this.tasks = [];
    //   this.taskid = "";
    //   fltr.forEach(e => this.tasks.push({ "id": e["taskId"], "name": e["taskName"] }));
    // }
    // filterTasks(searchVal) {
    //   this.filteredtasks = this._filter(searchVal);
    // }
    LaborClassComponent.prototype.addTask = function () {
        var _this = this;
        var pid = this.expandedElement['positionId'];
        this.serviceMatrix.saveCsInput(this.selectedRegionId, this.user["id"], pid, this.taskid, this.taskhours, this.feedback, false)
            .subscribe(function (res) {
            _this.snackBar.openSnackBar("Input saved successfully", 'Close', "green-snackbar");
            _this.expandedElement['hoursEntered'] = _this.expandedElement['hoursEntered'] + _this.taskhours;
            //this.expandedElement['validatedHours'] = this.expandedElement['validatedHours'] + this.taskhours;
        });
    };
    LaborClassComponent.prototype.updateHoursEntered = function (element, hours) {
        element['hoursEntered'] = hours;
        element['hoursRemaining'] = element['hours'] - element['hoursEntered'];
    };
    LaborClassComponent.prototype.updatedValidatedHours = function (element, hours) {
        element['validatedHours'] = hours;
        element['validatedHoursRemaining'] = element['hours'] - element['validatedHours'];
    };
    LaborClassComponent.prototype.reloadLaborClass = function () {
        this.customInit(this.selectedRegionId);
    };
    LaborClassComponent.prototype.updateHoursEnteredFromAdd = function (element, hours) {
        element['hoursEntered'] = element['hoursEntered'] + hours;
        element['hoursRemaining'] = element['hours'] - element['hoursEntered'];
    };
    LaborClassComponent.prototype.resetAddTaskForm = function () {
        this.servicename = "";
        this.program = "";
        this.subprogram = "";
        this.taskcategory = "";
        this.taskid = "";
        this.taskhours = 0;
        this.fundingsource = "";
        this.feedback = "";
    };
    LaborClassComponent.prototype.customInit = function (regionId) {
        var _this = this;
        console.time("Landing Page");
        this.user = this.userService.user;
        this.regionList = this.user['userRegionMappingsById'].sort((function (a, b) {
            if (a.regionByRegionId.regionName < b.regionByRegionId.regionName) {
                return -1;
            }
            if (a.regionByRegionId.regionName > b.regionByRegionId.regionName) {
                return 1;
            }
            return 0;
        }));
        this.selectedRegionObj = this.regionList.find(function (e) { return e["regionId"] == regionId; });
        if (this.user != null) {
            //var result = [];
            this.serviceMatrix.getLaborMappingsData(this.selectedRegionId, this.user["id"]).subscribe(function (res) {
                //result = res as Object[];
                _this.laborMappings = res;
                // result.forEach(element => {
                //   var inputHours = 0;
                //   element["csUserLaborClassInputs"].forEach(e => {
                //     inputHours = inputHours + e["inputHours"];
                //   });
                //   element["inputHours"] = inputHours;
                // });
                _this.laborMappings.forEach(function (element) {
                    element.hoursRemaining = element.hours - element.hoursEntered;
                    element.validatedHoursRemaining = element.hours - element.validatedHours;
                });
                _this.setDatasource(_this.selectedRegionId, _this.laborMappings);
            });
        }
        console.time("Landing Page loaded");
    };
    LaborClassComponent.prototype.chooseRegion = function (regionId) {
        this.router.navigate(["currentState", regionId]);
    };
    LaborClassComponent.prototype.setDatasource = function (regionId, userLsMappingByRegion) {
        this.dataSource.data = [];
        if ('c_lead' === this.user['userRoleByCsRoleId']['roleName']) {
            this.displayedColumns = ["expansion", "respondentName", "positionId", "laborClassName", "hours", "inputHours", "hoursRemaining", "validatedHours", "validatedHoursRemaining"];
        }
        else {
            this.displayedColumns = ["expansion", "positionId", "laborClassName", "hours", "inputHours", "hoursRemaining", "validatedHours", "validatedHoursRemaining"];
        }
        this.dataSource.data = userLsMappingByRegion;
        this.dataSource.sort = this.sort;
        this.paginator.pageSize = 20;
        this.dataSource.paginator = this.paginator;
    };
    LaborClassComponent.prototype.backToLogin = function () {
        this.router.navigate(["login"]);
    };
    LaborClassComponent.prototype.showMatrix = function (row) {
        this.router.navigate(['csLaborHours', this.selectedRegionId, row.laborClassName]);
    };
    LaborClassComponent.prototype.expandRow = function (element) {
        this.resetAddTaskForm();
        this.expandedElement = this.expandedElement === element ? null : element;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], LaborClassComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], LaborClassComponent.prototype, "sort", void 0);
    LaborClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labor-class',
            template: __webpack_require__(/*! ./labor-class.component.html */ "./src/app/current-state/labor-class/labor-class.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./labor-class.component.css */ "./src/app/current-state/labor-class/labor-class.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarComponent"]])
    ], LaborClassComponent);
    return LaborClassComponent;
}());



/***/ }),

/***/ "./src/app/current-state/labor-hour-details/labor-hour-details.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/current-state/labor-hour-details/labor-hour-details.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-cell,\r\n.mat-cell,\r\nmat-footer-cell,\r\n.mat-footer-cell,\r\nmat-header-cell, .mat-header-cell {\r\n  padding: 0.75rem !important;\r\n}\r\n\r\ntable, mat-paginator {\r\n  width: 90%;\r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:flex-end;\r\n }\r\n\r\n.mat-form-field {\r\n   font-size: 14px;\r\n   width: 50%;\r\n }\r\n\r\n.mat-row:hover {\r\n  background-color: #DDD;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar  span, mat-toolbar  a  span {\r\n  font-size: 10pt;\r\n}\r\n\r\n.table-col-title {\r\n  font-weight: 500;\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n\r\n.table-col-header {\r\n  font-size: 12px;\r\n}\r\n\r\n.filter-input{\r\n  width: 75%;\r\n  text-align: left;\r\n}\r\n\r\n.th-header-background{\r\n  background: #1f4e79;\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.help-text-icon {\r\n  font-size: 14px;\r\n}\r\n\r\n.labor-hours-card {\r\n  max-width: 1000px;\r\n  margin-top: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zdGF0ZS9sYWJvci1ob3VyLWRldGFpbHMvbGFib3ItaG91ci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtDQUN6Qjs7QUFFQTtHQUNFLGVBQWU7R0FDZixVQUFVO0NBQ1o7O0FBRUE7RUFDQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbnQtc3RhdGUvbGFib3ItaG91ci1kZXRhaWxzL2xhYm9yLWhvdXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNlbGwsXHJcbi5tYXQtY2VsbCxcclxubWF0LWZvb3Rlci1jZWxsLFxyXG4ubWF0LWZvb3Rlci1jZWxsLFxyXG5tYXQtaGVhZGVyLWNlbGwsIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUsIG1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuIH1cclxuXHJcbiAubWF0LWZvcm0tZmllbGQge1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiB9XHJcblxyXG4gLm1hdC1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXHJcbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxubWF0LXRvb2xiYXIgIHNwYW4sIG1hdC10b29sYmFyICBhICBzcGFuIHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi50YWJsZS1jb2wtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRhYmxlLWNvbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZpbHRlci1pbnB1dHtcclxuICB3aWR0aDogNzUlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50aC1oZWFkZXItYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiAjMWY0ZTc5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubGFib3ItaG91cnMtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/current-state/labor-hour-details/labor-hour-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/current-state/labor-hour-details/labor-hour-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" class=\"mb-4\">\r\n  <mat-toolbar>\r\n    <div class=\"row w-100 m-0\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <span> <b>Task Catalog</b> </span>\r\n\r\n        <button mat-button color=\"primary\" matTooltip=\"User Info\" style=\"cursor:default;\">\r\n          <mat-icon>account_box</mat-icon>\r\n          {{user.userName}}\r\n        </button>\r\n        <button mat-button color=\"primary\" matTooltip=\"Region/Branch/District\" style=\"cursor:default;\">\r\n          <mat-icon>language</mat-icon>\r\n          {{selectedRegionObj.regionByRegionId.regionName}}\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6 text-right\">\r\n        <span> <b>Actions: </b></span>\r\n\r\n        <button mat-button color=\"primary\" (click)=\"backToLandingPage()\">\r\n          <mat-icon>arrow_back</mat-icon>\r\n          Back to Landing Page\r\n        </button>\r\n\r\n\r\n        <a mat-button color=\"primary\" title=\"Provide Feedback\" target=\"_new\"\r\n          href=\"https://deloittesurvey.deloitte.com/Community/se/3FC11B2638966086\">\r\n          <mat-icon>feedback</mat-icon>\r\n        </a>\r\n        <a mat-button color=\"primary\" title=\"Respondent Resource Hub\" target=\"_new\"\r\n          href=\"http://dfgintranet/portal/BusinessOperations/Budget/ServiceBasedBudgeting/Respondents/tabid/2880/Default.aspx\">\r\n          <mat-icon>file_copy</mat-icon>\r\n        </a>\r\n\r\n        <button mat-button color=\"primary\" (click)=\"backToLogin()\">\r\n          <mat-icon>power_settings_new</mat-icon>\r\n          Logout\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar>\r\n\r\n  <mat-card class=\"labor-hours-card\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{selectedLaborClassName}}\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\r\n      <p-table [value]=\"csHoursData\" dataKey=\"taskId\">\r\n        <ng-template pTemplate=\"header\">\r\n          <tr>\r\n            <th>TaskID</th>\r\n            <th>TaskName</th>\r\n            <th>Hours</th>\r\n            <th>Funding Source</th>\r\n            <th style=\"width:8em\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\">\r\n          <tr [pEditableRow]=\"rowData\">\r\n            <td>\r\n              {{rowData.taskId}}\r\n            </td>\r\n            <td>\r\n            <td>\r\n              {{rowData.taskName}}\r\n            </td>\r\n            <td pEditableColumn>\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input pInputText type=\"text\" [(ngModel)]=\"rowData.inputHours\">\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  {{rowData.inputHours}}\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </td>\r\n            <td pEditableColumn>\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <p-dropdown [options]=\"fundingSources\" [(ngModel)]=\"rowData.fundingSource\" [style]=\"{'width':'100%'}\">\r\n                  </p-dropdown>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  {{rowData.fundingSource}}\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </td>\r\n\r\n            <td style=\"text-align:center\">\r\n              <button *ngIf=\"!editing\" pButton type=\"button\" pInitEditableRow icon=\"pi pi-pencil\" class=\"ui-button-info\"\r\n                (click)=\"onRowEditInit(rowData)\">Edit</button>\r\n              <button *ngIf=\"editing\" pButton type=\"button\" pSaveEditableRow icon=\"pi pi-check\"\r\n                class=\"ui-button-success\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\">Save</button>\r\n              <button *ngIf=\"editing\" pButton type=\"button\" pCancelEditableRow icon=\"pi pi-times\"\r\n                class=\"ui-button-danger\" (click)=\"onRowEditCancel(rowData, ri)\">Cancel</button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" [(ngModel)]=\"globalFilter\">\r\n  </mat-form-field>\r\n  <button mat-button color=\"primary\" (click)=\"clearAllFilters()\">Clear All Filters</button>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"taskId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task ID</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.taskId}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"serviceName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Service</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.serviceName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"program\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Program</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.program}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"subProgram\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Sub Program</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.subProgram}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"taskCategory\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task Category</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.taskCategory}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"taskName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{element.taskName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"hoursSpent\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Hours Spent</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-button color=\"primary\" matTooltip=\"Assign Hours\" style=\"cursor:default;\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"assignHours(row)\"></tr>\r\n  </table>\r\n  <mat-paginator #paginator [pageSizeOptions]=\"[5, 20, 50, 100]\" showFirstLastButtons></mat-paginator>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/current-state/labor-hour-details/labor-hour-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/current-state/labor-hour-details/labor-hour-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LaborHourDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaborHourDetailsComponent", function() { return LaborHourDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LaborHourDetailsComponent = /** @class */ (function () {
    function LaborHourDetailsComponent(serviceMatrix, userService, router, route) {
        this.serviceMatrix = serviceMatrix;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.assignedTasks = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ["taskId", "serviceName", "program",
            "subProgram", "taskCategory", "taskName", "hoursSpent"];
        this.csHoursData = [];
        this.data = [];
    }
    LaborHourDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRegionId = params['regionId'];
            _this.selectedLaborClassName = params['laborClassName'];
            _this.customInit(params);
        });
    };
    LaborHourDetailsComponent.prototype.addRow = function (row) {
        this.csHoursData = this.csHoursData.slice();
        this.csHoursData.push({ taskId: row.taskId, taskName: row.taskName, isEditable: false });
    };
    LaborHourDetailsComponent.prototype.customInit = function (params) {
        var _this = this;
        this.user = this.userService.user;
        this.setRegionDetails(this.user);
        this.selectedRegionObj = this.regionList.find(function (e) { return e["regionId"] == params['regionId']; });
        if (localStorage.getItem('csServiceMatrix') == null || localStorage.getItem('csServiceMatrix') == undefined) {
            this.serviceMatrix.getCsMatrixData()
                .subscribe(function (res) {
                _this.taskCatalog = res;
                _this.setDataSource(res);
                localStorage.setItem('csServiceMatrix', JSON.stringify(res));
            });
        }
        else {
            this.setDataSource(JSON.parse(localStorage.getItem('csServiceMatrix')));
        }
        this.fundingSources = [
            { label: 'FS1', value: 'Funding Source 1' },
            { label: 'FS2', value: 'Funding Source 2' },
            { label: 'FS3', value: 'Funding Source 3' },
            { label: 'FS4', value: 'Funding Source 4' },
            { label: 'FS5', value: 'Funding Source 5' },
            { label: 'FS6', value: 'Funding Source 6' },
        ];
    };
    LaborHourDetailsComponent.prototype.setRegionDetails = function (user) {
        this.regionList = user['userRegionMappingsById'];
    };
    LaborHourDetailsComponent.prototype.setDataSource = function (res) {
        this.dataSource.data = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    LaborHourDetailsComponent.prototype.backToLogin = function () {
        this.serviceMatrix.logout(this.userService.user['id']);
        this.router.navigate(["login"]);
    };
    LaborHourDetailsComponent.prototype.backToLandingPage = function () {
        this.router.navigate(['currentState', this.selectedRegionId]);
    };
    LaborHourDetailsComponent.prototype.assignHours = function (row) {
        this.selectedTask = row;
        this.assignedTasks.push(row);
        this.addRow(row);
    };
    LaborHourDetailsComponent.prototype.onRowEditInit = function (csHoursData) {
        alert('Inside edit' + csHoursData.taskId);
    };
    LaborHourDetailsComponent.prototype.onRowEditSave = function (csHoursData) {
        alert('Inside Save');
    };
    LaborHourDetailsComponent.prototype.onRowEditCancel = function (csHoursData, index) {
        alert('Inside Cancel');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], LaborHourDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], LaborHourDetailsComponent.prototype, "sort", void 0);
    LaborHourDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labor-hour-details',
            template: __webpack_require__(/*! ./labor-hour-details.component.html */ "./src/app/current-state/labor-hour-details/labor-hour-details.component.html"),
            styles: [__webpack_require__(/*! ./labor-hour-details.component.css */ "./src/app/current-state/labor-hour-details/labor-hour-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_service_matrix_service__WEBPACK_IMPORTED_MODULE_2__["ServiceMatrixService"], src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], LaborHourDetailsComponent);
    return LaborHourDetailsComponent;
}());



/***/ }),

/***/ "./src/app/login/login-form/data-type-selection-dialog.html":
/*!******************************************************************!*\
  !*** ./src/app/login/login-form/data-type-selection-dialog.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>{{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <p>Please choose the data type: Mission Level or Current State </p>\r\n</div>\r\n<div class=\"text-center\">\r\n  <button mat-raised-button (click)=\"closeDialog('mission')\" class=\"mr-2\">Mission Level</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"closeDialog('current')\" cdkFocusInitial>Current State</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm {\r\n  min-height: 50vh;\r\n  padding-top: 80px;\r\n  width: 350px;\r\n  margin: auto;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.login-table {\r\n  width: 85%;\r\n  margin: auto;\r\n}\r\n\r\n.login-table .mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5Gb3JtIHtcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tdGFibGUge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4tdGFibGUgLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"loginForm\" [formGroup]=\"loginForm\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>Login</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <table cellspacing=\"0\" class=\"login-table\">\r\n        <tr>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Username\" name=\"username\" required formControlName=\"username\">\r\n                <mat-error\r\n                  *ngIf=\"loginForm.controls['username'].errors?.required && loginForm.controls['username'].touched\">\r\n                  Username is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" formControlName=\"password\"\r\n                required>\r\n              <mat-error\r\n                *ngIf=\"loginForm.controls['password'].errors?.required && loginForm.controls['password'].touched\">\r\n                Password is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <span style=\"color:red;\" *ngIf=\"errMsg != null\">{{errMsg}}</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\r\n    </mat-card-content>\r\n    <mat-card-actions class=\"text-center\">\r\n      <button type=\"button\" mat-raised-button (click)=\"resetPassword()\">Reset Password</button>\r\n      <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Login</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent, ResestPasswordDialog, DataTypeSelectionDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResestPasswordDialog", function() { return ResestPasswordDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTypeSelectionDialog", function() { return DataTypeSelectionDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, authenticationService, formBuilder, userService, dialog, snackBar) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.show = false;
        this.errMsg = null;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        // reset login status
        this.authenticationService.logout();
    };
    Object.defineProperty(LoginFormComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginFormComponent.prototype.login = function () {
        this.router.navigate(['service']);
    };
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var self = this;
            this.authenticationService.login(this.f.username.value, this.f.password.value).then(function (validUser) {
                if (validUser) {
                    var mappedRegions = self.userService.user != undefined ? self.userService.user['userRegionMappingsById'] : null;
                    if (mappedRegions != null && mappedRegions.length > 0) {
                        mappedRegions = mappedRegions.sort((function (a, b) {
                            if (a.regionByRegionId.regionName < b.regionByRegionId.regionName) {
                                return -1;
                            }
                            if (a.regionByRegionId.regionName > b.regionByRegionId.regionName) {
                                return 1;
                            }
                            return 0;
                        }));
                        var userRegion = mappedRegions[0]['regionByRegionId'];
                        if (self.userService.user['dataTypeByDataTypeId']['dataType'] == 'mission') {
                            self.router.navigate(['service', userRegion["regionName"], userRegion["regionId"]]);
                        }
                        else if (self.userService.user['dataTypeByDataTypeId']['dataType'] == 'current') {
                            self.router.navigate(['currentState', userRegion["regionId"]]);
                        }
                        else if (self.userService.user['dataTypeByDataTypeId']['dataType'] == 'both') {
                            _this.chooseDataType(userRegion);
                        }
                    }
                    else {
                        //  this.snackBar.openSnackBar( `User ${this.f.username.value} does not have access to any region.`, 'Close', "red-snackbar");
                        self.errMsg = "User does not have access to any region. ";
                        self.router.navigate(['login']);
                    }
                }
                else {
                    // this.snackBar.openSnackBar( "Invalid Credentials", 'Close', "red-snackbar");
                    self.errMsg = "Invalid Credentials";
                    self.router.navigate(['login']);
                }
            });
        }
    };
    LoginFormComponent.prototype.resetPassword = function () {
        var dialogRef = this.dialog.open(ResestPasswordDialog, {
            width: '500px',
            data: { confirm: 'No' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    LoginFormComponent.prototype.chooseDataType = function (userRegion) {
        var _this = this;
        status = 'A';
        var dialogRef = this.dialog.open(DataTypeSelectionDialog, {
            width: '500px',
            data: { confirm: 'No' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.confirm == 'mission') {
                sessionStorage.setItem("tool-access", " - Mission Level");
                _this.router.navigate(['service', userRegion["regionName"], userRegion["regionId"]]);
            }
            else {
                sessionStorage.setItem("tool-access", " - Current State");
                _this.router.navigate(['currentState', userRegion["regionId"]]);
            }
        });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());

var ResestPasswordDialog = /** @class */ (function () {
    function ResestPasswordDialog(dialogRef, authenticationService, snackBar, data) {
        this.dialogRef = dialogRef;
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.data = data;
    }
    ResestPasswordDialog.prototype.ngOnInit = function () {
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    ResestPasswordDialog.prototype.checkPasswords = function () {
        var pass = this.resetForm.controls.newPassword.value;
        var confirmPass = this.resetForm.controls.confirmPassword.value;
        if (pass === confirmPass) {
            return true;
        }
        else {
            return false;
        }
    };
    ResestPasswordDialog.prototype.resetPassword = function () {
        var _this = this;
        if (this.checkPasswords() == false) {
            this.resetForm.controls['confirmPassword'].setErrors({ 'incorrect': true });
        }
        else {
            this.resetForm.controls['confirmPassword'].setErrors(null);
            this.authenticationService.resetPassword(this.resetForm.controls['userName'].value, this.resetForm.controls['password'].value, this.resetForm.controls['newPassword'].value)
                .subscribe(function (res) {
                if (res != null) {
                    _this.snackBar.openSnackBar("Password saved successfully", 'Close', "green-snackbar");
                    _this.closeDialog('Yes');
                }
                else {
                    _this.errorMsg = "Invalid user credentials";
                }
            });
        }
    };
    ResestPasswordDialog.prototype.closeDialog = function (confirm) {
        this.dialogRef.close({ 'confirm': confirm });
    };
    ResestPasswordDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'reset-password-dialog',
            template: __webpack_require__(/*! ./reset-password-dialog.html */ "./src/app/login/login-form/reset-password-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"], Object])
    ], ResestPasswordDialog);
    return ResestPasswordDialog;
}());

var DataTypeSelectionDialog = /** @class */ (function () {
    function DataTypeSelectionDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DataTypeSelectionDialog.prototype.closeDialog = function (confirm) {
        this.dialogRef.close({ 'confirm': confirm });
    };
    DataTypeSelectionDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-type-selection-dialog',
            template: __webpack_require__(/*! ./data-type-selection-dialog.html */ "./src/app/login/login-form/data-type-selection-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object])
    ], DataTypeSelectionDialog);
    return DataTypeSelectionDialog;
}());



/***/ }),

/***/ "./src/app/login/login-form/reset-password-dialog.html":
/*!*************************************************************!*\
  !*** ./src/app/login/login-form/reset-password-dialog.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Reset Password</h1>\r\n<div mat-dialog-content style=\"min-height:200px;\">\r\n  <p *ngIf=\"errorMsg != null\" style=\"color:red\">{{errorMsg}}</p>\r\n  <form class=\"resetForm\" [formGroup]=\"resetForm\">\r\n    <mat-form-field class=\"p-2\">\r\n      <input matInput placeholder=\"Username\" name=\"userName\" required formControlName=\"userName\">\r\n      <mat-error>\r\n        Username is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"p-2\">\r\n      <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" formControlName=\"password\" required>\r\n      <mat-error>\r\n        Password is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"p-2\">\r\n      <input matInput placeholder=\"New Password\" type=\"password\" name=\"newPassword\" formControlName=\"newPassword\"\r\n        required minlength=\"6\" maxlength=\"15\">\r\n      <mat-error\r\n        *ngIf=\"resetForm.controls['newPassword'].errors != null && resetForm.controls['newPassword'].errors.required\">\r\n        Password is <strong>required</strong>\r\n      </mat-error>\r\n      <mat-error\r\n        *ngIf=\"resetForm.controls['newPassword'].errors != null && resetForm.controls['newPassword'].errors.minlength\">\r\n        Password length must match be minimum of 6\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"p-2\">\r\n      <input matInput placeholder=\"Confirm Password\" type=\"password\" name=\"confirmPassword\"\r\n        formControlName=\"confirmPassword\" required minlength=\"6\" maxlength=\"15\">\r\n      <mat-error\r\n        *ngIf=\"resetForm.controls['confirmPassword'].errors != null && resetForm.controls['confirmPassword'].errors.required\">\r\n        Password is <strong>required</strong>\r\n      </mat-error>\r\n      <mat-error\r\n        *ngIf=\"resetForm.controls['confirmPassword'].errors != null && resetForm.controls['confirmPassword'].errors.incorrect\">\r\n        Password must match with new password\r\n      </mat-error>\r\n      <mat-error\r\n        *ngIf=\"resetForm.controls['confirmPassword'].errors != null && resetForm.controls['confirmPassword'].errors.minlength\">\r\n        Password length must match be minimum of 6\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </form>\r\n</div>\r\n<div style=\"font-size:14px;\">\r\n  <li>Password needs to be 6-15 characters in length and may be any combination of keyboard characters.</li>\r\n  <li>If you forget your password, please reach out to project team.</li>\r\n  <br>\r\n</div>\r\n<div class=\"text-center\">\r\n  <button mat-raised-button (click)=\"closeDialog('No')\" class=\"mr-2\">Cancel</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"resetPassword()\" [disabled]=\"!resetForm.valid\">Reset</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/service/feedback/feedback.component.css":
/*!*********************************************************!*\
  !*** ./src/app/service/feedback/feedback.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/service/feedback/feedback.component.html":
/*!**********************************************************!*\
  !*** ./src/app/service/feedback/feedback.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>Feedbacks</mat-card-title> -->\r\n            <h4>Feedbacks</h4>\r\n        <!-- </mat-card-header>\r\n        <mat-card-content> -->\r\n            <table mat-table [dataSource]=\"feedbacks\" class=\"mat-elevation-z8 w-100\">\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef> Respondent Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.userById.userName}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"feedback\">\r\n                    <th mat-header-cell *matHeaderCellDef> Feedback </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.feedback}} </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"inputDisplayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: inputDisplayedColumns;\"></tr>\r\n            </table>\r\n        <!-- </mat-card-content> -->\r\n        <div class=\"text-center pt-2\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"onClose()\">Close</button>\r\n        </div>\r\n    <!-- </mat-card> -->\r\n</div>"

/***/ }),

/***/ "./src/app/service/feedback/feedback.component.ts":
/*!********************************************************!*\
  !*** ./src/app/service/feedback/feedback.component.ts ***!
  \********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_matrix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(serviceMatrix, dialogRef, userService, data, router, snackBar) {
        this.serviceMatrix = serviceMatrix;
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.data = data;
        this.router = router;
        this.snackBar = snackBar;
        this.feedbacks = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.inputDisplayedColumns = ["name", "feedback"];
        this.errorMessage = null;
        this.successMessage = null;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.user = this.userService.user;
        this.selectedRegionObject = this.userService.getSelectedRegionObject(this.data.regionName);
        this.fetchFeedbacks();
    };
    FeedbackComponent.prototype.fetchFeedbacks = function () {
        var _this = this;
        var _self = this;
        this.serviceMatrix.fetchInputs(this.selectedRegionObject.regionId, this.data.taskId).subscribe(function (data) {
            var dt = data;
            _self.feedbacks.data = dt.filter(function (e) { return e['feedback'] != null && e['feedback'] != ''; });
        }, function (err) {
            _this.errorMessage = "Error fectching input values. Please try again later.";
        });
    };
    FeedbackComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/service/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/service/feedback/feedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_matrix_service__WEBPACK_IMPORTED_MODULE_2__["ServiceMatrixService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarComponent"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/service/inputs/inputs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/service/inputs/inputs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlight{\r\n  background: #ddd;\r\n}\r\n\r\n.mat-row:hover{\r\n  background-color: #EEE;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9pbnB1dHMvaW5wdXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL2lucHV0cy9pbnB1dHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHR7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLm1hdC1yb3c6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/service/inputs/inputs.component.html":
/*!******************************************************!*\
  !*** ./src/app/service/inputs/inputs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"inputs.data.length > 0\">\r\n  <!-- <mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title> -->\r\n      <h5 class=\"text-center\" style=\"color: white\">Review Inputs</h5>\r\n    <!-- </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content> -->\r\n    <table mat-table [dataSource]=\"inputs\" class=\"mat-elevation-z8 w-100\">\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef> Respondent Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.userById.userName}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"value\">\r\n        <th mat-header-cell *matHeaderCellDef> Input Value </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.inputValue}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef> Status </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.statusBySttsId.statusCode}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"approverName\">\r\n        <th mat-header-cell *matHeaderCellDef> Validated By </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <div *ngIf=\"element.userByApproverId != undefined\"> {{element.userByApproverId.userName}} </div>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"feedback\">\r\n        <th mat-header-cell *matHeaderCellDef> Feedback </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{element.feedback}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"totalHours\">\r\n        <th mat-header-cell *matHeaderCellDef> Total Hours </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.inputValue * totalHours}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"inputDisplayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: inputDisplayedColumns;\"\r\n        [ngClass]=\"{'highlight': selectedRowIndex == row.id}\" (click)=\"highlight(row)\">\r\n      </tr>\r\n    </table>\r\n  <!-- </mat-card-content> -->\r\n  <div class=\"text-center pt-2\" *ngIf=\"userRole == 'admin' || userRole == 'm_lead'\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"approveResponse()\" class=\"mx-2 text-dark bg-white task-input-multiplier-btn\"\r\n      [disabled]=true>Select</button>\r\n      <!--<button mat-raised-button color=\"primary\" (click)=\"approveResponse()\" class=\"mx-2 text-dark bg-white task-input-multiplier-btn\"\r\n        [disabled]=\"this.selectedRow != undefined && this.selectedRow.taskStatus == 'Approved'\">Select</button>-->\r\n    <!-- <button mat-raised-button color=\"primary\" (click)=\"provideYourInput()\" class=\"text-dark bg-white task-input-multiplier-btn\">Provide your own Input</button> -->\r\n  </div>\r\n<!-- </mat-card> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service/inputs/inputs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/service/inputs/inputs.component.ts ***!
  \****************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_matrix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");







var InputsComponent = /** @class */ (function () {
    function InputsComponent(serviceMatrix, 
    // public dialogRef : MatDialogRef<InputsComponent>,
    userService, 
    // @Inject(MAT_DIALOG_DATA) public data: any,
    router, snackBar) {
        this.serviceMatrix = serviceMatrix;
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.selectedRowIndex = -1;
        this.inputs = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.inputDisplayedColumns = ["name", "status", "approverName", "feedback", "value", "totalHours"];
        this.errorMessage = null;
        this.successMessage = null;
        this.approved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputsComponent.prototype.ngOnInit = function () {
        this.user = this.userService.user;
        this.userRole = this.userService.userRole;
        this.selectedRegionObject = this.userService.getSelectedRegionObject(this.regionName);
        this.fetchInputs();
    };
    InputsComponent.prototype.ngOnChanges = function () {
        this.selectedRegionObject = this.userService.getSelectedRegionObject(this.regionName);
        this.fetchInputs();
    };
    InputsComponent.prototype.fetchInputs = function () {
        var _this = this;
        var _self = this;
        this.serviceMatrix.fetchInputs(this.selectedRegionObject.regionId, this.taskId).subscribe(function (data) {
            _self.inputs.data = data;
        }, function (err) {
            _this.errorMessage = "Error fectching input values. Please try again later.";
        });
    };
    InputsComponent.prototype.approveResponse = function () {
        var _this = this;
        this.serviceMatrix.selectedRowIndex = this.selectedRowIndex;
        var _self = this;
        this.serviceMatrix.selectInput(this.selectedRegionObject.regionId, this.taskId, this.selectedRow.id, this.userService.userId).subscribe(function (data) {
            _self.approvedInput = Number(data);
            _this.snackBar.openSnackBar("Selected Input is approved", 'Close', "green-snackbar");
            _this.fetchInputs();
            _this.approved.emit("approved");
            // this.dialogRef.close(this.data);
        }, function (err) {
            _this.snackBar.openSnackBar("Error saving selected input", 'Close', "red-snackbar");
            _this.onClose();
        });
    };
    InputsComponent.prototype.provideYourInput = function () {
        this.onClose();
    };
    InputsComponent.prototype.highlight = function (row) {
        var myJSON = JSON.stringify(row);
        this.selectedRowIndex = row.id;
        this.selectedRow = row;
    };
    InputsComponent.prototype.onClose = function () {
        // this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('regionName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputsComponent.prototype, "regionName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('taskId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputsComponent.prototype, "taskId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('totalHours'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InputsComponent.prototype, "totalHours", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('changeDetection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputsComponent.prototype, "changeDetection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputsComponent.prototype, "approved", void 0);
    InputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__(/*! ./inputs.component.html */ "./src/app/service/inputs/inputs.component.html"),
            styles: [__webpack_require__(/*! ./inputs.component.css */ "./src/app/service/inputs/inputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_matrix_service__WEBPACK_IMPORTED_MODULE_2__["ServiceMatrixService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]])
    ], InputsComponent);
    return InputsComponent;
}());



/***/ }),

/***/ "./src/app/service/mat-snack-bar/mat-snack-bar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/service/mat-snack-bar/mat-snack-bar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UvbWF0LXNuYWNrLWJhci9tYXQtc25hY2stYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/service/mat-snack-bar/mat-snack-bar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/service/mat-snack-bar/mat-snack-bar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mat-snack-bar works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/service/mat-snack-bar/mat-snack-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: MatSnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarComponent", function() { return MatSnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MatSnackBarComponent = /** @class */ (function () {
    function MatSnackBarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    MatSnackBarComponent.prototype.ngOnInit = function () {
    };
    // this function will open up snackbar on top right position with custom background color (defined in css)
    MatSnackBarComponent.prototype.openSnackBar = function (message, action, className) {
        this.snackBar.open(message, action, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: [className],
        });
    };
    MatSnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-snack-bar',
            template: __webpack_require__(/*! ./mat-snack-bar.component.html */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.html"),
            styles: [__webpack_require__(/*! ./mat-snack-bar.component.css */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MatSnackBarComponent);
    return MatSnackBarComponent;
}());



/***/ }),

/***/ "./src/app/service/matrix-details/matrix-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/service/matrix-details/matrix-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-cell,\r\n.mat-cell,\r\nmat-footer-cell,\r\n.mat-footer-cell,\r\nmat-header-cell, .mat-header-cell {\r\n  padding: 0.75rem !important;\r\n}\r\n\r\ntable, mat-paginator {\r\n  width: 90%;\r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:flex-end;\r\n }\r\n\r\n.mat-form-field {\r\n   font-size: 14px;\r\n   width: 50%;\r\n }\r\n\r\n.mat-row:hover {\r\n  background-color: #DDD;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar  span, mat-toolbar  a  span {\r\n  font-size: 10pt;\r\n}\r\n\r\n.table-col-title {\r\n  font-weight: 500;\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n\r\n.table-col-header {\r\n  font-size: 12px;\r\n}\r\n\r\n.filter-input{\r\n  width: 75%;\r\n  text-align: left;\r\n}\r\n\r\n.th-header-background{\r\n  background: #1f4e79;\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.help-text-icon {\r\n  font-size: 14px;\r\n}\r\n\r\n::ng-deep .mat-tooltip  {\r\n white-space: pre-line    !important;\r\n font-size: 10px   !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9tYXRyaXgtZGV0YWlscy9tYXRyaXgtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztFQUtFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7Q0FDekI7O0FBRUE7R0FDRSxlQUFlO0dBQ2YsVUFBVTtDQUNaOztBQUVBO0VBQ0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLDRCQUE0QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UvbWF0cml4LWRldGFpbHMvbWF0cml4LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jZWxsLFxyXG4ubWF0LWNlbGwsXHJcbm1hdC1mb290ZXItY2VsbCxcclxuLm1hdC1mb290ZXItY2VsbCxcclxubWF0LWhlYWRlci1jZWxsLCAubWF0LWhlYWRlci1jZWxsIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlLCBtYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiB9XHJcblxyXG4gLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB3aWR0aDogNTAlO1xyXG4gfVxyXG5cclxuIC5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG59XHJcblxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbm1hdC10b29sYmFyICBzcGFuLCBtYXQtdG9vbGJhciAgYSAgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4udGFibGUtY29sLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50YWJsZS1jb2wtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXR7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGgtaGVhZGVyLWJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZDogIzFmNGU3OTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaGVscC10ZXh0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCAge1xyXG4gd2hpdGUtc3BhY2U6IHByZS1saW5lICAgICFpbXBvcnRhbnQ7XHJcbiBmb250LXNpemU6IDEwcHggICAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/service/matrix-details/matrix-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/service/matrix-details/matrix-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" class=\"mb-4\">\r\n    <mat-toolbar>\r\n        <div class=\"row w-100 m-0\">\r\n        <div class=\"col-md-6 text-left\">\r\n        <span> <b>Task Catalog</b> </span>\r\n\r\n        <button mat-button color=\"primary\" matTooltip=\"User Info\" style=\"cursor:default;\">\r\n            <mat-icon>account_box</mat-icon>\r\n            {{user.userName}}\r\n          </button>\r\n          <button mat-button color=\"primary\" matTooltip=\"Region/Branch/District\" style=\"cursor:default;\">\r\n              <mat-icon>language</mat-icon>\r\n              {{selectedRegion}}\r\n            </button>\r\n        </div>\r\n        <div class=\"col-md-6 text-right\">\r\n          <span> <b>Actions: </b></span>\r\n          <button mat-button color = \"primary\" [matMenuTriggerFor]=\"region\">\r\n              <mat-icon>language</mat-icon>\r\n              Choose Region/Branch/District\r\n          </button>\r\n\r\n          <mat-menu #region=\"matMenu\">\r\n            <button mat-menu-item *ngFor=\"let item of regionList\"\r\n            (click)=\"chooseRegion(item.regionByRegionId.regionName, item.regionByRegionId.regionId)\"> {{item.regionByRegionId.regionName}} </button>\r\n          </mat-menu>\r\n\r\n\r\n          <a mat-button color=\"primary\" title=\"Provide Feedback\" target=\"_new\" href=\"https://deloittesurvey.deloitte.com/Community/se/3FC11B2638966086\">\r\n              <mat-icon>feedback</mat-icon>\r\n          </a>\r\n          <a mat-button color=\"primary\" title=\"Respondent Resource Hub\" target=\"_new\" href=\"http://dfgintranet/portal/BusinessOperations/Budget/ServiceBasedBudgeting/Respondents/tabid/2880/Default.aspx\">\r\n              <mat-icon>file_copy</mat-icon>\r\n          </a>\r\n\r\n          <button mat-button color = \"primary\" (click)=\"backToLogin()\">\r\n              <mat-icon>power_settings_new</mat-icon>\r\n              Logout\r\n          </button>\r\n        </div>\r\n        </div>\r\n      </mat-toolbar>\r\n  <!-- <mat-toolbar >\r\n    <h4> Task Catalog &nbsp;&nbsp; </h4>\r\n    <mat-icon matListAvatar color=\"primary\" matTooltip = \"User Info\">account_box</mat-icon>\r\n    <span>{{user.userName}} &nbsp;&nbsp;</span>\r\n    <mat-icon matListAvatar color=\"primary\">language</mat-icon>\r\n    <span > {{selectedRegion}} &nbsp;&nbsp;</span>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <span> <b>Actions: </b> </span>\r\n    <button mat-button color = \"primary\" [matMenuTriggerFor]=\"region\">\r\n        <mat-icon>language</mat-icon>\r\n        Pick a different region\r\n    </button>\r\n\r\n    <mat-menu #region=\"matMenu\">\r\n      <button mat-menu-item *ngFor=\"let item of regionList\"\r\n      (click)=\"chooseRegion(item.regionByRegionId.regionName)\"> {{item.regionByRegionId.regionName}} </button>\r\n    </mat-menu>\r\n\r\n    <button mat-button color = \"primary\" (click)=\"backToLogin()\">\r\n        <mat-icon>power_settings_new</mat-icon>\r\n        Logout\r\n    </button>\r\n\r\n  </mat-toolbar> -->\r\n\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" [(ngModel)] = \"globalFilter\">\r\n  </mat-form-field>\r\n  <button mat-button color=\"primary\" (click)=\"clearAllFilters()\">Clear All Filters</button>\r\n  <button mat-button color=\"primary\" (click)=\"loadLastUsedFilter()\" *ngIf=\"user['filter'] != null\">Use Most Recent Filter</button>\r\n\r\n\r\n\r\n  <table mat-table [dataSource] = \"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef =\"viewTask\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"></th>\r\n      <td mat-cell *matCellDef= \"let row\">\r\n        <button mat-button color = \"primary\" (click)=\"showTask(row)\">\r\n            <mat-icon>visibility</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"viewTask-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n\r\n        </th>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef =\"taskId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task ID</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.taskId}}\r\n      </td>\r\n    </ng-container>\r\n\r\n   <ng-container matColumnDef =\"serviceName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Service</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.serviceName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n   <ng-container matColumnDef =\"program\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Program</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.program}}\r\n      </td>\r\n    </ng-container>\r\n\r\n   <ng-container matColumnDef =\"subProgram\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Sub Program</th>\r\n       <td mat-cell *matCellDef= \"let element\">\r\n         {{element.subProgram}}\r\n       </td>\r\n     </ng-container>\r\n\r\n     <ng-container matColumnDef =\"taskCategory\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task Category</th>\r\n        <td mat-cell *matCellDef= \"let element\">\r\n          {{element.taskCategory}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef =\"taskName\">\r\n         <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task</th>\r\n         <td mat-cell *matCellDef= \"let element\">\r\n           {{element.taskName}}\r\n         </td>\r\n       </ng-container>\r\n\r\n    <ng-container matColumnDef=\"myInput\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"\r\n      matTooltip=\"Displays the input you provided, if applicable. You may select the task in question to update your prior entry if necessary. \"\r\n     >\r\n       My Input <i class=\"material-icons help-text-icon\"\r\n       placement=\"bottom\"\r\n       >help</i>\r\n      </th>\r\n     <td mat-cell *matCellDef=\"let element\">\r\n             {{element.myInput}}\r\n     </td>\r\n   </ng-container>\r\n\r\n   <!--<ng-container matColumnDef =\"approved\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Approved</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        <button mat-icon-button color=\"primary\" >\r\n            <mat-icon class=\"mat-18\">done_all</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container> -->\r\n\r\n   <ng-container matColumnDef =\"statusCode\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"\r\n      matTooltip=\"'Not started' indicates that no input has been provided for this task.\r\n      'Pending' indicates that one or more inputs have been provided, and that the Region lead / Approver has not yet made the final input selection.\r\n      'Approved' indicates that the assigned Region lead / Approver has validated the final input and closed the item. Please e-mail your assigned Region lead / Approver with any additional comments you may have. \">\r\n        Status <i class=\"material-icons help-text-icon\" placement=\"bottom\"\r\n         >help</i>\r\n        </th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.taskStatus}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef =\"inputCount\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"\r\n       matTooltip=\"Yes answer indicates that at least one input was received; No answer indicates that there has been no input provided by anyone in the region so far. Filter for Yes on this column to select only the tasks that have received one or more inputs across the region so far.\">\r\n         Input Received <i class=\"material-icons help-text-icon\" placement=\"bottom\"\r\n          >help</i>\r\n        </th>\r\n       <td mat-cell *matCellDef= \"let element\">\r\n         {{element.inputReceived}}\r\n       </td>\r\n     </ng-container>\r\n\r\n     <ng-container matColumnDef =\"feedbackReceived\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">\r\n        Feedback Received\r\n       </th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.feedbackReceived}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef =\"toBeEnteredBy\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"\r\n      data-html=\"true\"\r\n      matTooltip=\"{{serviceMatrix.toBeEnteredBy.join('\\n')}}\" [matTooltipClass] =\"mat-tooltip\"\r\n        >\r\n        To Be Entered By\r\n        <i class=\"material-icons help-text-icon\" placement=\"bottom\"\r\n         >help</i>\r\n       </th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.toBeEnteredBy}}\r\n      </td>\r\n    </ng-container>\r\n\r\n     <!-- Task Id Filter Column -->\r\n    <ng-container matColumnDef=\"taskId-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input class=\"filter-input\" value=\"{{filteredValues.taskId}}\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'taskId')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Service Filter Column -->\r\n    <ng-container matColumnDef=\"serviceName-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\" value=\"{{filteredValues.serviceName}}\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'serviceName')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Program Filter Column -->\r\n    <ng-container matColumnDef=\"program-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\" value=\"{{filteredValues.program}}\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'program')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Sub Program Filter Column -->\r\n    <ng-container matColumnDef=\"subProgram-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\" value=\"{{filteredValues.subProgram}}\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'subProgram')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Task Category Filter Column -->\r\n    <ng-container matColumnDef=\"taskCategory-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\" value=\"{{filteredValues.taskCategory}}\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'taskCategory')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Task Filter Column -->\r\n    <ng-container matColumnDef=\"taskName-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\" value=\"{{filteredValues.taskName}}\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'taskName')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Myinput Filter Column -->\r\n    <ng-container matColumnDef=\"myInput-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      <input  class=\"filter-input\" value=\"{{filteredValues.myInput}}\"\r\n        (keyup)=\"applyColumnFilter($event.target.value, 'myInput')\"\r\n        placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Status Filter Column -->\r\n    <ng-container matColumnDef=\"statusCode-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\" value=\"{{filteredValues.statusCode}}\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'statusCode')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Count Input Filter Column -->\r\n    <ng-container matColumnDef=\"inputCount-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.inputCount}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'inputCount')\"\r\n          placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Feedback Received Filter Column -->\r\n    <ng-container matColumnDef=\"feedbackReceived-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.feedbackReceived}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'feedbackReceived')\"\r\n          placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- To Be Entered By Filter Column -->\r\n    <ng-container matColumnDef=\"toBeEnteredBy-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\" value=\"{{filteredValues.toBeEnteredBy}}\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'toBeEnteredBy')\"\r\n          placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedFilterColumns\" class=\"example-second-header-row\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n<mat-paginator #paginator\r\n  [pageSizeOptions]=\"[5, 20, 50, 100, 500, 1000]\" showFirstLastButtons\r\n  (page)=\"pageEvent = handlePage($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service/matrix-details/matrix-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/service/matrix-details/matrix-details.component.ts ***!
  \********************************************************************/
/*! exports provided: MatrixDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixDetailsComponent", function() { return MatrixDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_matrix_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");







var MatrixDetailsComponent = /** @class */ (function () {
    function MatrixDetailsComponent(http, router, serviceMatrix, userService, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.serviceMatrix = serviceMatrix;
        this.userService = userService;
        this.route = route;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.starColor = "primary";
        this.displayedColumns = [];
        this.displayedFilterColumns = [];
        this.globalFilter = '';
        this.filteredValues = { taskId: '', serviceName: '', program: '',
            subProgram: '', taskCategory: '', taskName: '', statusCode: '',
            myInput: '', inputCount: '', feedbackReceived: '', toBeEnteredBy: '' //, topFilter: false
        };
        this.getMatrixDetails = function (userId) {
            _this.serviceMatrix.getData(_this.selectedRegionId, userId)
                .subscribe(function (res) {
                _this.globalFilter = _this.serviceMatrix.filterStore.globalFilter;
                if (_this.serviceMatrix.filterStore.columnFilter != undefined) {
                    _this.filteredValues = _this.serviceMatrix.filterStore.columnFilter;
                }
                _this.dataSource.data = res;
                _this.dataSource.data.forEach(function (e) {
                    e["statusCode"] = e["taskStatus"];
                });
                _this.applyAllFilters(_this.globalFilter, _this.filteredValues);
                _this.paginator.pageIndex = _this.serviceMatrix.filterStore.pageIndex;
                _this.paginator.pageSize = _this.serviceMatrix.filterStore.pageSize;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        };
    }
    MatrixDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRegionId = params['regionId'];
            _this.selectedRegion = params['regionName'];
            _this.customInit(params);
        });
        this.dataSource.filterPredicate = this.customFilterPredicate();
    };
    ;
    MatrixDetailsComponent.prototype.customInit = function (params) {
        var _this = this;
        this.user = this.userService.user;
        this.displayedColumns = ["viewTask", "taskId", "serviceName", "program",
            "subProgram", "taskCategory", "taskName", "myInput", "statusCode", "inputCount", "feedbackReceived", "toBeEnteredBy"];
        this.displayedFilterColumns = [];
        this.displayedColumns.forEach(function (e) {
            _this.displayedFilterColumns.push(e + '-filter');
        });
        // if('admin' === this.user['userRoleByRoleId']['roleName'] || 'm_lead' === this.user['userRoleByRoleId']['roleName']){
        //   this.displayedColumns.push("feedbackReceived");
        //   this.displayedFilterColumns.push('feedbackReceived-filter');
        // }
        this.getMatrixDetails(this.userService.user['id']);
        this.getRegionDetails(this.user);
    };
    MatrixDetailsComponent.prototype.getRegionDetails = function (user) {
        this.regionList = user['userRegionMappingsById'].sort((function (a, b) {
            if (a.regionByRegionId.regionName < b.regionByRegionId.regionName) {
                return -1;
            }
            if (a.regionByRegionId.regionName > b.regionByRegionId.regionName) {
                return 1;
            }
            return 0;
        }));
        ;
    };
    MatrixDetailsComponent.prototype.loadLastUsedFilter = function () {
        var fstore = JSON.parse(this.user['filter']);
        this.applyAllFilters(fstore.globalFilter, fstore.columnFilter);
        this.paginator.pageIndex = fstore.pageIndex;
        this.paginator.pageSize = fstore.pageSize;
        this.dataSource.paginator = this.paginator;
    };
    MatrixDetailsComponent.prototype.applyAllFilters = function (gFilter, fValues) {
        this.applyFilter(gFilter);
        this.applyColumnFilter(fValues.taskId, 'taskId');
        this.applyColumnFilter(fValues.serviceName, 'serviceName');
        this.applyColumnFilter(fValues.program, 'program');
        this.applyColumnFilter(fValues.subProgram, 'subProgram');
        this.applyColumnFilter(fValues.taskCategory, 'taskCategory');
        this.applyColumnFilter(fValues.taskName, 'taskName');
        this.applyColumnFilter(fValues.myInput, 'myInput');
        this.applyColumnFilter(fValues.statusCode, 'statusCode');
        this.applyColumnFilter(fValues.inputCount, 'inputReceived');
        this.applyColumnFilter(fValues.feedbackReceived, 'feedbackReceived');
        this.applyColumnFilter(fValues.toBeEnteredBy, 'toBeEnteredBy');
    };
    MatrixDetailsComponent.prototype.clearAllFilters = function () {
        this.paginator.pageIndex = 0;
        this.paginator.pageSize = 50;
        this.dataSource.paginator = this.paginator;
        this.globalFilter = '';
        this.filteredValues = { taskId: '', serviceName: '', program: '',
            subProgram: '', taskCategory: '', taskName: '', statusCode: '',
            myInput: '', inputCount: '',
            feedbackReceived: '', toBeEnteredBy: ''
        };
        this.serviceMatrix.filterStore.pageIndex = 0;
        this.serviceMatrix.filterStore.globalFilter = '';
        this.serviceMatrix.filterStore.columnFilter = undefined;
        this.serviceMatrix.filterStore.selectedSubProgTasks = [];
        this.serviceMatrix.filterStore.pageSize = 50;
        this.applyAllFilters(this.globalFilter, this.filteredValues);
    };
    MatrixDetailsComponent.prototype.customFilterPredicate = function () {
        var _this = this;
        var myFilterPredicate = function (data, filter) {
            var globalMatch = !_this.globalFilter;
            if (_this.globalFilter) {
                var taskIdFound_1 = data.taskId.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var serviceNameFound_1 = data.serviceName.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var programFound_1 = data.program.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var subProgramFound_1 = data.subProgram.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var taskCategoryFound_1 = data.taskCategory.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var taskNameFound_1 = data.taskName.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var statusFound_1 = data.taskStatus.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var inputFound_1 = data.myInput.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var countFound_1 = data.inputReceived.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var fbReceivedFound_1 = data.feedbackReceived.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var taskDescFound = data.taskDesc.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var sgFound = data.serviceGlossary.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var toBeEnteredFound_1 = data.toBeEnteredBy.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                globalMatch = taskIdFound_1 || serviceNameFound_1 || programFound_1 || subProgramFound_1 || taskCategoryFound_1 || taskNameFound_1 || statusFound_1 || inputFound_1 || countFound_1 || fbReceivedFound_1 || taskDescFound || sgFound || toBeEnteredFound_1;
            }
            if (!globalMatch) {
                return;
            }
            var searchString = JSON.parse(filter);
            var taskIdFound = data.taskId.toString().trim().toLowerCase().indexOf(searchString.taskId.toString().toLowerCase()) !== -1;
            var serviceNameFound = data.serviceName.toString().trim().toLowerCase().indexOf(searchString.serviceName.toString().toLowerCase()) !== -1;
            var programFound = data.program.toString().trim().toLowerCase().indexOf(searchString.program.toString().toLowerCase()) !== -1;
            var subProgramFound = data.subProgram.toString().trim().toLowerCase().indexOf(searchString.subProgram.toString().toLowerCase()) !== -1;
            var taskCategoryFound = data.taskCategory.toString().trim().toLowerCase().indexOf(searchString.taskCategory.toString().toLowerCase()) !== -1;
            var taskNameFound = data.taskName.toString().trim().toLowerCase().indexOf(searchString.taskName.toString().toLowerCase()) !== -1;
            var statusFound = data.taskStatus.toString().trim().toLowerCase().indexOf(searchString.statusCode.toString().toLowerCase()) !== -1;
            var inputFound = data.myInput.toString().trim().toLowerCase().indexOf(searchString.myInput.toString().toLowerCase()) !== -1;
            var countFound = data.inputReceived.toString().trim().toLowerCase().indexOf(searchString.inputCount.toString().toLowerCase()) !== -1;
            var fbReceivedFound = data.feedbackReceived.toString().trim().toLowerCase().indexOf(searchString.feedbackReceived.toString().toLowerCase()) !== -1;
            var toBeEnteredFound = data.toBeEnteredBy.toString().trim().toLowerCase().indexOf(searchString.toBeEnteredBy.toString().toLowerCase()) !== -1;
            return taskIdFound && serviceNameFound && programFound && subProgramFound && taskCategoryFound && taskNameFound && statusFound && inputFound && countFound && fbReceivedFound && toBeEnteredFound;
        };
        return myFilterPredicate;
    };
    MatrixDetailsComponent.prototype.applyColumnFilter = function (filterValue, col) {
        this.filteredValues[col] = filterValue;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    MatrixDetailsComponent.prototype.applyFilter = function (filter) {
        //  this.globalFilter = filterValue;
        //  this.dataSource.filter = filterValue.trim().toLowerCase();
        this.globalFilter = filter;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    MatrixDetailsComponent.prototype.showTask = function (row) {
        this.storeFilterValues(this.paginator.pageIndex, this.paginator.pageSize);
        this.router.navigate([this.selectedRegion, this.selectedRegionId, "task", row.taskId]);
        //var tasks = this.dataSource.data.filter(e => e['program'] == row.program);
        var tasks = this.dataSource.filteredData;
        /*if(tasks.length == this.dataSource.data.length){
          tasks = this.dataSource.data.filter(e => e['program'] == row.program);
        }*/
        this.serviceMatrix.filterStore.selectedSubProgTasks = [];
        if (tasks.length > 1) {
            for (var i = 0; i < tasks.length; i++) {
                var sspt = tasks[i];
                if (i == 0) {
                    sspt["prevTaskId"] = tasks[tasks.length - 1]['taskId'];
                    sspt["nextTaskId"] = tasks[i + 1]['taskId'];
                }
                else if (i == tasks.length - 1) {
                    sspt["prevTaskId"] = tasks[i - 1]['taskId'];
                    sspt["nextTaskId"] = tasks[0]['taskId'];
                }
                else {
                    sspt["prevTaskId"] = tasks[i - 1]['taskId'];
                    sspt["nextTaskId"] = tasks[i + 1]['taskId'];
                }
                sspt["index"] = i + 1;
                this.serviceMatrix.filterStore.selectedSubProgTasks.push(sspt);
            }
        }
    };
    MatrixDetailsComponent.prototype.chooseRegion = function (regionName, regionId) {
        this.router.navigate(["service", regionName, regionId]);
    };
    MatrixDetailsComponent.prototype.backToLogin = function () {
        this.serviceMatrix.logout(this.userService.user['id']);
        this.serviceMatrix.filterStore.pageIndex = 0;
        this.serviceMatrix.filterStore.globalFilter = '';
        this.serviceMatrix.filterStore.columnFilter = undefined;
        this.serviceMatrix.filterStore.pageSize = 50;
        this.serviceMatrix.filterStore.selectedSubProgTasks = [];
        this.router.navigate(["login"]);
    };
    MatrixDetailsComponent.prototype.storeFilterValues = function (pageIndex, pageSize) {
        this.serviceMatrix.filterStore.pageIndex = pageIndex;
        this.serviceMatrix.filterStore.pageSize = pageSize;
        this.serviceMatrix.filterStore.globalFilter = this.globalFilter;
        this.serviceMatrix.filterStore.columnFilter = this.filteredValues;
    };
    MatrixDetailsComponent.prototype.handlePage = function (e) {
        window.scrollTo(0, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], MatrixDetailsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], MatrixDetailsComponent.prototype, "sort", void 0);
    MatrixDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matrix-details',
            template: __webpack_require__(/*! ./matrix-details.component.html */ "./src/app/service/matrix-details/matrix-details.component.html"),
            styles: [__webpack_require__(/*! ./matrix-details.component.css */ "./src/app/service/matrix-details/matrix-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_matrix_service__WEBPACK_IMPORTED_MODULE_5__["ServiceMatrixService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MatrixDetailsComponent);
    return MatrixDetailsComponent;
}());



/***/ }),

/***/ "./src/app/service/service-matrix.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/service-matrix.service.ts ***!
  \***************************************************/
/*! exports provided: ServiceMatrixService, Filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMatrixService", function() { return ServiceMatrixService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ServiceMatrixService = /** @class */ (function () {
    function ServiceMatrixService(http) {
        var _this = this;
        this.http = http;
        //API_URL:string = "http://ec2-18-220-6-166.us-east-2.compute.amazonaws.com:8080/";
        //API_URL: string = "http://localhost:8080/";
        //API_URL:string = "https://prod.cdfw-sbb.com/";
        this.API_URL = "https://dev.cdfw-sbb.com/";
        this.inputDataStore = [{
                id: 1,
                value: "5",
                name: "Bob"
            },
            {
                id: 2,
                value: "3",
                name: "Bob"
            },
            {
                id: 3,
                value: "1",
                name: "Bob"
            },
            {
                id: 4,
                value: "4",
                name: "Bob"
            },
            {
                id: 5,
                value: "2",
                name: "Bob"
            },
            {
                id: 6,
                value: "3",
                name: "Bob"
            }
        ];
        this.toBeEnteredBy = ["AQUA  Aquaculture",
            "ASB   Accounting Services Branch",
            "AUD   Audits Branch",
            "BDB   Biogeographic Data Branch",
            "BIZOPS		Business Operations",
            "BMB			Business Management Branch",
            "BUDGETS		Budget Branch",
            "CONENGR		Conservation Engineering",
            "EEO			Ofc of Equal Employment Opportunity",
            "FACENGR		Facilities Engineering",
            "FB			Fisheries Branch",
            "FGC			Fish & Game Commission",
            "HCPB		Habitat Conservation Planning Branch",
            "HRB			Human Resources Branch",
            "IT			IT Operations & Systems Branches",
            "LED			Law Enforcement (all)",
            "LEG			Legislative Office",
            "LRB			License & Revenue Branch",
            "OCEO		Ofc of Communication, Education & Outreach",
            "ODB			Organizational Development Branch",
            "OGC			Ofc of General Counsel",
            "OSPR		Ofc of Spill Prevention & Response",
            "REGION		Regions 1-7",
            "REGSUNIT	Regulations",
            "SCIINST		Science Institute",
            "WATER		Water Branch",
            "WLB			Wildlife Branch",
            "WRGB		Watershed Restoration Grants Branch"
        ];
        this.getData = function (selectedRegionId, userId) {
            return _this.http.get(_this.API_URL + 'service/' + selectedRegionId + '/' + userId);
        };
        this.getLaborMappingsData = function (selectedRegion, userId) {
            return _this.http.get(_this.API_URL + 'csservice/' + selectedRegion + '/' + userId);
        };
        this.getCsMatrixData = function () {
            return _this.http.get(_this.API_URL + 'cslaborhours');
        };
        this.selectInput = function (regionId, taskId, userId, approvedUserId) {
            return _this.http.get(_this.API_URL + 'selectInput/' + regionId + '/' + taskId + '/' + userId + '/' + approvedUserId);
        };
        this.fetchInputs = function (regionId, taskId) {
            return _this.http.get(_this.API_URL + 'fetchInputs/' + regionId + '/' + taskId);
        };
        this.getTaskDetail1 = function (selectedRegion, taskId) {
            return _this.http.get(_this.API_URL + selectedRegion + '/task/' + taskId);
        };
        this.getRegionDetails = function () {
            return _this.http.get('../assets/data.json');
        };
        this.filterStore = new Filters();
    }
    ServiceMatrixService.prototype.getServiceMatrix1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, fetch(this.API_URL + 'service')
                                .then(function (response) {
                                response.json().then(function (data) {
                                    self.matrixJsonString = data;
                                    self.matMtrixDataStore = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                                    self.matMtrixDataStore.paginator = this.paginator;
                                    self.matMtrixDataStore.sort = this.sort;
                                });
                                //this.matMtrixDataStore = new MatTableDataSource (this.matrixJsonString);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceMatrixService.prototype.getLaborClassSummary = function (selectedRegion, userId, laborClassName) {
        return this.http.get(this.API_URL + 'csservice/laborclasssummary/' + selectedRegion + '/' + userId + '/' + laborClassName);
    };
    ServiceMatrixService.prototype.getLaborClassSummaryByPositionId = function (selectedRegion, laborClassName) {
        return this.http.get(this.API_URL + 'csservice/laborclasssummary/' + selectedRegion + '/' + laborClassName);
    };
    ServiceMatrixService.prototype.getTaskDetail = function (taskId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, fetch('../assets/data.json')
                                .then(function (response) {
                                response.json().then(function (data) {
                                    self.taskInfo = data.find(function (item) { return item.taskId === taskId; });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceMatrixService.prototype.saveUserInput = function (userId, regionName, taskId, inputValue, taskfeedback) {
        return this.http.post(this.API_URL + 'saveInput', { userId: userId, regionName: regionName, taskId: taskId, inputValue: inputValue, feedback: taskfeedback });
    };
    ServiceMatrixService.prototype.saveCsInput = function (selectedRegionId, userId, pid, taskid, taskhours, feedback, isValidator) {
        return this.http.post(this.API_URL + 'addCsInput', { regionId: selectedRegionId, userId: userId, positionId: pid, taskId: taskid, inputHours: taskhours, feedback: feedback, isValidator: isValidator });
    };
    ServiceMatrixService.prototype.getCSInput = function (regionId, userId, positionId, taskid) {
        return this.http.get(this.API_URL + 'getCsInput/' + regionId + '/' + userId + '/' + positionId + '/' + taskid);
    };
    ServiceMatrixService.prototype.editCSInput = function (csInput, editedBy, isValidator) {
        return this.http.post(this.API_URL + 'editCsInput', { regionId: csInput['regionId'], userId: csInput['userId'], positionId: csInput['positionId'], taskId: csInput['taskId'], inputHours: csInput['inputHours'], feedback: csInput['feedback'], editedBy: editedBy, isValidator: isValidator });
    };
    ServiceMatrixService.prototype.deleteCSInput = function (csInput) {
        return this.http.post(this.API_URL + 'deleteCsInput', { regionId: csInput['regionId'], userId: csInput['userId'], positionId: csInput['positionId'], taskId: csInput['taskId'], inputHours: csInput['inputHours'] });
    };
    ServiceMatrixService.prototype.approveAllInputs = function (regionId, positionId, approverId) {
        return this.http.post(this.API_URL + 'approveAllInputs', { regionId: regionId, positionId: positionId, approverId: approverId });
    };
    ServiceMatrixService.prototype.approveCSInput = function (csInput, approverId) {
        return this.http.post(this.API_URL + 'approveCsInput', { regionId: csInput['regionId'], userId: csInput['userId'], positionId: csInput['positionId'], taskId: csInput['taskId'], inputHours: csInput['inputHours'], approverId: approverId });
    };
    ServiceMatrixService.prototype.updateAndValidateCsInput = function (csInput, approverId) {
        return this.http.post(this.API_URL + 'updateAndValidateCsInput', { regionId: csInput['regionId'], userId: csInput['userId'], positionId: csInput['positionId'], taskId: csInput['taskId'], inputHours: csInput['inputHours'], approverId: approverId, feedback: csInput['feedback'] });
    };
    ServiceMatrixService.prototype.copyTasks = function (regionId, userId, sourcePosition, destinationPositions, tasksToBeCopied) {
        return this.http.post(this.API_URL + 'copyTasks', { regionId: regionId, userId: userId, sourcePosition: sourcePosition, destinationPositions: destinationPositions, tasksToBeCopied: tasksToBeCopied }, { responseType: 'text' });
    };
    ServiceMatrixService.prototype.getTaskInfo = function (taskId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, fetch('../assets/data.json')
                                .then(function (response) {
                                response.json().then(function (data) {
                                    self.taskInfo = data.find(function (item) { return item.taskId === taskId; });
                                    self.laborDataStore = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](self.taskInfo.service.category.task.laborClass);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceMatrixService.prototype.logout = function (usrId) {
        this.http.post(this.API_URL + "logout", { userId: usrId }).subscribe(function (res) {
            // console.log(res);
        });
    };
    ServiceMatrixService.prototype.saveFilter = function (userId, filter) {
        return this.http.post(this.API_URL + 'saveFilter', { userId: userId, filter: filter });
    };
    ServiceMatrixService.prototype.testBackend = function () {
        this.http.get('http://localhost:8080/greeting').toPromise()
            .then(function (response) {
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ServiceMatrixService.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ServiceMatrixService.prototype, "sort", void 0);
    ServiceMatrixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceMatrixService);
    return ServiceMatrixService;
}());

var Filters = /** @class */ (function () {
    function Filters() {
        this.pageIndex = 0;
        this.globalFilter = '';
        this.selectedSubProgTasks = [];
        this.pageSize = 50;
    }
    Filters.prototype.toString = function () {
        var str = {};
        str["pageIndex"] = this.pageIndex;
        str["pageSize"] = this.pageSize;
        str["globalFilter"] = this.globalFilter;
        str["columnFilter"] = this.columnFilter;
        return JSON.stringify(str);
    };
    return Filters;
}());



/***/ }),

/***/ "./src/app/service/service-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/service/service-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function() { return ServiceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix-details/matrix-details.component */ "./src/app/service/matrix-details/matrix-details.component.ts");




var routes = [
    {
        path: "",
        component: _matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_3__["MatrixDetailsComponent"]
    }
];
var ServiceRoutingModule = /** @class */ (function () {
    function ServiceRoutingModule() {
    }
    ServiceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ServiceRoutingModule);
    return ServiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-routing.module */ "./src/app/service/service-routing.module.ts");
/* harmony import */ var _matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matrix-details/matrix-details.component */ "./src/app/service/matrix-details/matrix-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-details/task-details.component */ "./src/app/service/task-details/task-details.component.ts");
/* harmony import */ var _service_matrix_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inputs/inputs.component */ "./src/app/service/inputs/inputs.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/service/feedback/feedback.component.ts");















var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_4__["MatrixDetailsComponent"], _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailsComponent"], _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_10__["InputsComponent"], _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__["SaveResponseConfirmDialog"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__["FeedbackComponent"]],
            entryComponents: [_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__["SaveResponseConfirmDialog"]],
            providers: [_service_matrix_service__WEBPACK_IMPORTED_MODULE_9__["ServiceMatrixService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _service_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"]
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/service/task-details/save-input-confirm-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/service/task-details/save-input-confirm-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title>{{data.name}}</h1> -->\r\n<div mat-dialog-content>\r\n  <p>The task has inputs from other respondents. To override, press continue. To review inputs, press Review Inputs.</p>\r\n</div>\r\n<div class=\"text-center\">\r\n  <button mat-raised-button (click)=\"closeDialog('No')\" class=\"mr-2\">Review Inputs</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"closeDialog('Yes')\" cdkFocusInitial>Continue</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service/task-details/task-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/service/task-details/task-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-container{\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field{\r\n  width: 100%;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\ntextarea {\r\n    padding: 10px;\r\n    line-height: 1.5;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    width: 100%;\r\n}\r\n\r\nmat-toolbar  span, mat-toolbar  a  span {\r\n  font-size: 10pt;\r\n}\r\n\r\n.help-text-icon {\r\n  font-size: 14px;\r\n}\r\n\r\n.input-task-feedback-lbl {\r\n  margin: 3px 3px 3px 10px !important;\r\n}\r\n\r\n.input-task-feedback-area {\r\n  margin: 3px 3px 10px 10px !important;\r\n}\r\n\r\n.w-65{\r\n  width: 65%;\r\n}\r\n\r\n.w-94{\r\n  width: 94%;\r\n}\r\n\r\n.task-input-multiplier:disabled, .input-task-feedback-area:disabled {\r\n  background-color: #FEFEFE;\r\n}\r\n\r\n::ng-deep .mat-tooltip  {\r\n white-space: pre-line    !important;\r\n font-size: 10px   !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS90YXNrLWRldGFpbHMvdGFzay1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLDRCQUE0QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UvdGFzay1kZXRhaWxzL3Rhc2stZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyICBzcGFuLCBtYXQtdG9vbGJhciAgYSAgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uaGVscC10ZXh0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmlucHV0LXRhc2stZmVlZGJhY2stbGJsIHtcclxuICBtYXJnaW46IDNweCAzcHggM3B4IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LXRhc2stZmVlZGJhY2stYXJlYSB7XHJcbiAgbWFyZ2luOiAzcHggM3B4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udy02NXtcclxuICB3aWR0aDogNjUlO1xyXG59XHJcblxyXG4udy05NHtcclxuICB3aWR0aDogOTQlO1xyXG59XHJcblxyXG4udGFzay1pbnB1dC1tdWx0aXBsaWVyOmRpc2FibGVkLCAuaW5wdXQtdGFzay1mZWVkYmFjay1hcmVhOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGRUZFO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10b29sdGlwICB7XHJcbiB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgICAgIWltcG9ydGFudDtcclxuIGZvbnQtc2l6ZTogMTBweCAgICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/service/task-details/task-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/service/task-details/task-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <div class=\"row w-100 m-0\">\r\n  <div class=\"col-md-6\">\r\n  <span> <b>Task Details</b> </span>\r\n\r\n  <button mat-button color=\"primary\" matTooltip=\"User Info\" style=\"cursor:default;\">\r\n      <mat-icon>account_box</mat-icon>\r\n      {{user.userName}}\r\n    </button>\r\n    <button mat-button color=\"primary\" matTooltip=\"Region/Branch/District\" style=\"cursor:default;\">\r\n        <mat-icon>language</mat-icon>\r\n        {{selectedRegion}}\r\n      </button>\r\n  </div>\r\n  <div class=\"col-md-6 text-right\">\r\n    <span> <b>Actions: </b></span>\r\n    <button mat-button color=\"primary\" (click)=\"goBackToMatrix()\">\r\n      <mat-icon>arrow_back</mat-icon>\r\n      Back to Catalog\r\n    </button>\r\n    <a mat-button color=\"primary\" title=\"Provide Feedback\" target=\"_new\" href=\"https://deloittesurvey.deloitte.com/Community/se/3FC11B2638966086\">\r\n        <mat-icon>feedback</mat-icon>\r\n    </a>\r\n    <a mat-button color=\"primary\" title=\"Respondent Resource Hub\" target=\"_new\" href=\"http://dfgintranet/portal/BusinessOperations/Budget/ServiceBasedBudgeting/Respondents/tabid/2880/Default.aspx\">\r\n        <mat-icon>file_copy</mat-icon>\r\n    </a>\r\n    <button mat-button color=\"primary\" (click)=\"backToLogin()\">\r\n      <mat-icon>power_settings_new</mat-icon>\r\n      Logout\r\n    </button>\r\n  </div>\r\n  </div>\r\n</mat-toolbar>\r\n\r\n<ngb-alert *ngIf=\"approved && userRole==='m_resp' && approvedMsgResp !== null\" type=\"success\"\r\n  (close)=\"approvedMsgResp = null\">{{ approvedMsgResp }}</ngb-alert>\r\n<ngb-alert *ngIf=\"approved && (userRole==='m_lead' || userRole==='admin') && approvedMsgLead !== null\" type=\"success\"\r\n  (close)=\"approvedMsgLead = null\">{{ approvedMsgLead }}</ngb-alert>\r\n\r\n\r\n<div class=\"task-container\" *ngIf=\"task != undefined\">\r\n  <mat-card class=\"example-card m-3\">\r\n      <mat-card-header>\r\n    <div style=\"width:75%\">\r\n        <mat-card-title>{{task.taskName}} (Task ID: {{task.taskId}})\r\n      </mat-card-title>\r\n        <mat-card-subtitle>{{task.serviceName}} / {{task.program}} / {{task.subProgram}} /{{task.taskCategory}}\r\n      </mat-card-subtitle>\r\n    </div>\r\n    <div class=\"flex-sm-fill\" *ngIf=\"serviceMatrix.filterStore.selectedSubProgTasks.length > 0\">\r\n    ({{task.index}} out of {{serviceMatrix.filterStore.selectedSubProgTasks.length}})\r\n  <button mat-button class=\"float-sm-right\" *ngIf=\"task.nextTaskId != undefined\" title=\"{{task.nextTaskId}}\" (click)=\"goToTask(task.nextTaskId)\">\r\n      <mat-icon class=\"next_task_icon\">navigate_next</mat-icon>\r\n  </button>\r\n  <button mat-button class=\"float-sm-right\" *ngIf=\"task.nextTaskId != undefined\" title=\"{{task.prevTaskId}}\" (click)=\"goToTask(task.prevTaskId)\">\r\n      <mat-icon class=\"next_task_icon\">navigate_before</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n    </mat-card-header>\r\n    <mat-divider matInset></mat-divider>\r\n    <mat-card-content class=\"py-3\">\r\n      <div class=\"row\" style=\"background: #1f4e79;\">\r\n        <div class=\"col-md-8\">\r\n            <table class=\"text-white\" style=\"background: #1f4e79; height: 80px; width: auto !important;\">\r\n              <tr>\r\n                <td style=\"width: 150px;\">\r\n                  <label for=\"inputmul\" style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\">Input Multiplier<i\r\n                      class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Displays the input recorded for this task. This is the only field that requires an input from respondents in this exercise. \">help</i></label>\r\n                </td>\r\n                <td class=\"w-50\">\r\n                  <label style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\">Feedback</label>\r\n                </td>\r\n                <td style=\"width: 150px;\">\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                  <td class=\"align-top\">\r\n                      <input id=\"inputmul\" type=\"number\" name=\"test_name\" min=\"0\" class=\"task-input-multiplier align-top\"\r\n                        oninput=\"validity.valid||(value='');\" [(ngModel)]=\"multiplier\" [disabled]=\"saveRespInputDisabled\">\r\n                      <div>\r\n                        <label for=\"tobeenteredby\" style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\">To be entered by<i\r\n                              class=\"material-icons help-text-icon\"\r\n                              matTooltip=\"{{serviceMatrix.toBeEnteredBy.join('\\n')}}\">help</i></label>\r\n                        <textarea id=\"tobeenteredby\" matInput value=\"{{task.toBeEnteredBy}}\"></textarea>\r\n                      </div>\r\n                    </td>\r\n                    <td class= \"align-top\">\r\n                      <textarea name=\"taskfeedback\" [(ngModel)]=\"taskfeedback\" rows=\"3\" cols=\"20\" maxlength=\"2000\"\r\n                        class=\"input-task-feedback-area w-94\" [disabled]=\"saveRespInputDisabled || multiplier == undefined\"> </textarea>\r\n                    </td>\r\n                    <td class=\"text-center align-top\">\r\n                      <!--<button mat-button class=\"text-dark bg-white task-input-multiplier-btn\" (click)=\"saveResponse()\" [disabled]=\"saveRespInputDisabled\r\n                                    || multiplier == undefined\"> -->\r\n                      <button mat-button class=\"text-dark bg-white task-input-multiplier-btn\" (click)=\"saveResponse()\" [disabled]=true>\r\n                        <mat-icon>save</mat-icon>\r\n                        Save Response\r\n                      </button>\r\n                    </td>\r\n              </tr>\r\n\r\n            </table>\r\n          </div>\r\n            <div class=\"col-md-4 pt-3\">\r\n              <table style=\"color: white; border: 1px solid white; float: right;\">\r\n                <tr>\r\n                <td>\r\n                  <label style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\" for=\"frequency\">Frequency <i\r\n                      class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Number of times per year that the task needs to be accomplished (predefined).\">help</i></label>\r\n                </td>\r\n\r\n                <td class=\"align-top\" style=\"width: 150px;\">\r\n                    <input id=\"frequency\" matInput style=\"width:90%; border-bottom: 1px solid white;\" value=\"{{task.frequency}}\" readonly class=\"m-1\">\r\n                  </td>\r\n                </tr>\r\n                  <tr>\r\n                <td>\r\n                  <label style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\" for=\"totallaborhours\">Total time of Labor\r\n                    Hours <i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Sum of time per labor classification (predefined).\">help</i></label>\r\n                </td>\r\n                <td class=\"align-top\">\r\n                  <input id=\"totallaborhours\" matInput style=\"width:90%; border-bottom: 1px solid white;\" value=\"{{task.totalLaborHours}}\" readonly class=\"m-1\">\r\n                </td>\r\n              </tr>\r\n                <tr>\r\n                <td>\r\n                  <label style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\" for=\"totalhours\">Total Hours <i\r\n                      class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Product of multiplier (input), times the total time of labor hours, times the frequency (automatically calculated).\">help</i></label>\r\n                </td>\r\n                <td class=\"align-top\">\r\n                  <input id=\"totalhours\" matInput style=\"width:90%; border-bottom: 1px solid white;\" value=\"{{task.totalLaborHours * task.frequency * multiplier}}\" readonly\r\n                    class=\"m-1\">\r\n                </td>\r\n              </tr>\r\n            </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"background: #1f4e79;\">\r\n        <div class=\"col-md-12 pb-3\">\r\n          <app-inputs [taskId]=\"inpuTaskId\" [regionName]=\"selectedRegion\"\r\n          [totalHours]=\"task.totalLaborHours * task.frequency\"\r\n          [changeDetection]=\"changeInputDetection\"\r\n          (approved)=\"onApproval(task, $event)\"></app-inputs>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 pt-3\">\r\n          <mat-card style=\"min-height: 570px;\">\r\n            <!-- <mat-card-actions class=\"m-0 p-0 mb-3\"> -->\r\n              <!-- <table class=\"text-white w-100\" style=\"background: #1f4e79; height: 80px;\">\r\n                <tr>\r\n                  <td>\r\n                      <label for=\"inputmul\" style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\">Input Multiplier<i class=\"material-icons help-text-icon\"\r\n                        matTooltip=\"Displays the input recorded for this task. This is the only field that requires an input from respondents in this exercise. \">help</i></label>\r\n                  </td>\r\n                  <td class=\"w-65\">\r\n                      <label style=\"margin-left:10px; margin-bottom: 0px; margin-top: 5px;\">Feedback</label>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"align-top\">\r\n                      <input id=\"inputmul\" type=\"number\" name=\"test_name\" min=\"0\" class=\"task-input-multiplier align-top\"\r\n                      oninput=\"validity.valid||(value='');\" [(ngModel)]=\"multiplier\" [disabled]=\"saveRespInputDisabled\">\r\n                  </td>\r\n\r\n                  <td>\r\n                      <textarea name=\"taskfeedback\" [(ngModel)]=\"taskfeedback\" rows=\"5\" cols=\"25\" maxlength=\"2000\" class=\"input-task-feedback-area w-94\"\r\n                      [disabled]=\"saveRespInputDisabled || multiplier == undefined\"> </textarea>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-center align-top\" colspan=\"2\">\r\n                    <button mat-button class=\"text-dark bg-white task-input-multiplier-btn\" (click)=\"saveResponse()\" [disabled]=\"saveRespInputDisabled\r\n                    || multiplier == undefined\">\r\n                        <mat-icon>save</mat-icon>\r\n                        Save Response\r\n                      </button>\r\n\r\n                    <button mat-button class=\"mx-2 text-dark bg-white task-input-multiplier-btn\" (click)=\"viewInputs()\" [disabled]=\"task['inputCount'] == 0\">\r\n                    <mat-icon>touch_app</mat-icon>\r\n                    Review Inputs ({{task['inputCount']}})\r\n                  </button>\r\n                </td>\r\n                </tr>\r\n              </table> -->\r\n              <!-- <div class=\"row mx-0 text-white p-2\" style=\"background: #1f4e79; \">\r\n                <div class=\"col-sm-4\">\r\n                      <label for=\"inputmul\">Input Multiplier<i class=\"material-icons help-text-icon\"\r\n                          matTooltip=\"Displays the input recorded for this task. This is the only field that requires an input from respondents in this exercise. \">help</i></label>\r\n                      <input id=\"inputmul\" type=\"number\" name=\"test_name\" min=\"0\"\r\n                        oninput=\"validity.valid||(value='');\" [(ngModel)]=\"multiplier\" [disabled]=\"saveRespInputDisabled\">\r\n\r\n                </div>\r\n                <div class=\"col-sm-4 pt-4\">\r\n                      <button mat-raised-button class=\"text-dark\" (click)=\"saveResponse()\" [disabled]=\"saveRespInputDisabled || multiplier == undefined || multiplier == 0\">\r\n                      <mat-icon>save</mat-icon>\r\n                      Save Response\r\n                    </button>\r\n\r\n                  </div>\r\n                  <div class=\"col-sm-4 pt-4\">\r\n                      <button mat-raised-button class=\"text-dark\" (click)=\"viewInputs()\" [disabled]=\"task['inputCount'] == 0\"\r\n                        *ngIf=\"(userRole==='admin' || userRole==='m_lead')\">\r\n                        <mat-icon>touch_app</mat-icon>\r\n                        Review Inputs ({{task['inputCount']}})\r\n                      </button>\r\n\r\n                    </div>\r\n              </div> -->\r\n            <!-- </mat-card-actions> -->\r\n            <!-- <mat-divider matInset></mat-divider> -->\r\n            <mat-card-content>\r\n              <div class=\"row pt-1\">\r\n                <div class=\"col-sm-6\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Task Description</mat-label>\r\n                    <textarea matInput id=\"taskdesc\" name=\"taskdesc\" rows=\"5\" cols=\"30\" disabled class=\"border-0 font-color-black\"> {{task.taskDesc}} </textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Input Multiplier Description</mat-label>\r\n                  <textarea matInput id=\"multiDesc\" name=\"multiDesc\" rows=\"5\" cols=\"30\" disabled class=\"border-0 font-color-black\"> {{task.multDesc}} </textarea>\r\n                </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row pt-3\">\r\n                <div class=\"col-sm-6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Glossary</mat-label>\r\n                  <textarea matInput id=\"srvcGlosry\" name=\"taskdesc\" rows=\"5\" cols=\"30\" disabled class=\"border-0 font-color-black\"> {{task.serviceGlossary}} </textarea>\r\n                </mat-form-field>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Desired Performance</mat-label>\r\n                  <textarea matInput id=\"taskdesc2\" name=\"taskdesc\" rows=\"5\" cols=\"30\" disabled class=\"border-0 font-color-black\"> {{task.desiredPerf}} </textarea>\r\n                </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row pt-3\">\r\n                <div class=\"col-sm-6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Additional Budget Factor(s)</mat-label>\r\n                  <textarea matInput  id=\"multiDesc2\" name=\"multiDesc\" rows=\"5\" cols=\"30\" disabled class=\"border-0 font-color-black\"> {{task.addtnlBudgetFator}} </textarea>\r\n                </mat-form-field>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"col-md-6 pt-3\">\r\n          <mat-card style=\"min-height: 570px;\">\r\n            <!-- <mat-card-actions class=\"m-0 p-0 mb-3\"> -->\r\n              <!-- <div class=\"row mx-0\" style=\"max-height:80px;\">\r\n                  <div class=\"col-sm-3\">\r\n                <mat-form-field>\r\n                  <label for=\"frequency\">Frequency <i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Number of times per year that the task needs to be accomplished (predefined).\">help</i></label>\r\n                  <input id=\"frequency\" matInput value=\"{{task.frequency}}\" readonly>\r\n                </mat-form-field></div>\r\n                <div class=\"col-sm-6\">\r\n                <mat-form-field>\r\n                  <label for=\"totallaborhours\">Total time of Labor Hours <i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Sum of time per labor classification (predefined).\">help</i></label>\r\n                  <input id=\"totallaborhours\" matInput value=\"{{task.totalLaborHours}}\" readonly>\r\n                </mat-form-field></div>\r\n                <div class=\"col-sm-3\">\r\n\r\n                <mat-form-field>\r\n                  <label for=\"totalhours\">Total Hours <i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Product of multiplier (input), times the total time of labor hours, times the frequency (automatically calculated).\">help</i></label>\r\n                  <input id=\"totalhours\" matInput value=\"{{task.totalLaborHours * task.frequency * multiplier}}\"\r\n                    readonly>\r\n                </mat-form-field></div>\r\n              </div> -->\r\n            <!-- </mat-card-actions> -->\r\n            <!-- <mat-divider matInset></mat-divider> -->\r\n            <mat-card-content>\r\n              <div class=\"row pt-1\">\r\n                <div class=\"col-sm-8\">\r\n                  <label for=\"laborTable\">Labor Classification<i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Displays the time that each labor classification would spend on the task in question, in the future state / at mission level (predefined). \">help</i></label>\r\n                  <table id=\"laborTable\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z1 w-100\">\r\n                    <ng-container matColumnDef=\"title\">\r\n                      <th mat-header-cell *matHeaderCellDef> Title </th>\r\n                      <!--<td mat-cell *matCellDef=\"let element\"> {{element.laborClassLookupByRoleId.title}} </td>-->\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"role\">\r\n                      <th mat-header-cell *matHeaderCellDef> Code </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.role}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"time\">\r\n                      <th mat-header-cell *matHeaderCellDef> Time (hours) </th>\r\n                      <td mat-cell *matCellDef=\"let element\" class=\"text-center\"> {{element.time}} </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  </table>\r\n                  <!--  <mat-paginator\r\n          [pageSizeOptions]=\"[3, 5, 7]\" showFirstLastButtons></mat-paginator> -->\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <label for=\"justcat\">Justification Category</label>\r\n                  <table id=\"justcat\" mat-table [dataSource]=\"dataSourceJustification\" matSort\r\n                    class=\"mat-elevation-z1 w-100\">\r\n                    <ng-container matColumnDef=\"categoryName\">\r\n                      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.categoryName}} </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsJustification\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsJustification;\"></tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service/task-details/task-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/task-details/task-details.component.ts ***!
  \****************************************************************/
/*! exports provided: TaskDetailsComponent, SaveResponseConfirmDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveResponseConfirmDialog", function() { return SaveResponseConfirmDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_matrix_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-matrix.service */ "./src/app/service/service-matrix.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inputs/inputs.component */ "./src/app/service/inputs/inputs.component.ts");
/* harmony import */ var _mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../feedback/feedback.component */ "./src/app/service/feedback/feedback.component.ts");









var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent(route, serviceMatrix, router, dialog, userService, snackBar) {
        var _this = this;
        this.route = route;
        this.serviceMatrix = serviceMatrix;
        this.router = router;
        this.dialog = dialog;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.dataSourceJustification = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ["title", "role", "time"];
        this.displayedColumnsJustification = ["categoryName"];
        this.multiplier = 0;
        this.saveRespInputDisabled = false;
        this.approved = false;
        this.errorMessage = null;
        this.successMessage = null;
        this.approvedMsgResp = null;
        this.approvedMsgLead = null;
        this.subProgramTasks = [];
        this.changeInputDetection = false;
        this.getTaskInfo1 = function (selectedRegion, taskId) {
            var _self = _this;
            _this.serviceMatrix.getTaskDetail1(selectedRegion, taskId).subscribe(function (data) {
                _self.task = data;
                _self.dataSource.data = data['laborClassesByTaskId'];
                _self.dataSourceJustification.data = data['jrsdctnCtgriesByTaskId'];
                var inputs = data['missionUserInputsByTaskId'];
                _self.serviceMatrix.inputDataStore = inputs;
                _self.approved = false;
                _self.multiplier = 0;
                _self.taskfeedback = "";
                _self.saveRespInputDisabled = false;
                if ('Validated' === _self.task['taskStatus']) {
                    _self.approved = true;
                    if (_self.userService.userRole === 'm_resp') {
                        _self.saveRespInputDisabled = true;
                        _self.approvedMsgResp = "The multiplier input for this task has been validated. You may submit additional suggestions to your designated Region lead by reaching out directly.";
                    }
                    else {
                        _self.approvedMsgLead = "The multiplier input for this task has been validated.";
                    }
                    var approvedInput = inputs.filter(function (input) {
                        return input['regionByRegionId']['regionName'] == selectedRegion && input['sttsId'] == "A";
                    });
                    if (approvedInput.length == 1) {
                        _self.multiplier = approvedInput[0].inputValue;
                    }
                }
                else {
                    var myInput = _this.filterInputsByUserAndRegion(inputs, _self.user['id'], selectedRegion);
                    if (myInput.length == 1) {
                        _self.multiplier = myInput[0].inputValue;
                    }
                }
                var loggedinUserInput = _this.filterInputsByUserAndRegion(inputs, _self.user['id'], selectedRegion);
                if (loggedinUserInput.length == 1) {
                    _self.taskfeedback = loggedinUserInput[0].feedback;
                }
                if (_this.subProgramTasks.length > 1) {
                    var fltr = _this.subProgramTasks.filter(function (e) { return e['taskId'] == _self.task['taskId']; });
                    if (fltr.length > 0) {
                        _self.task["nextTaskId"] = fltr[0].nextTaskId;
                        _self.task["prevTaskId"] = fltr[0].prevTaskId;
                        _self.task["index"] = fltr[0].index;
                    }
                }
            }, function (err) {
                _this.snackBar.openSnackBar("Error fetching task details. Please try again later", 'Close', "red-snackbar");
            }, function () {
            });
        };
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRegionId = params['regionId'];
            _this.customInit(params['regionName'], params['taskId']);
        });
    };
    TaskDetailsComponent.prototype.ngOnChanges = function () {
    };
    TaskDetailsComponent.prototype.customInit = function (regionName, taskId) {
        this.user = this.userService.user;
        this.getTaskInfo1(regionName, taskId);
        this.userRole = this.userService.userRole;
        this.selectedRegion = regionName;
        this.inpuTaskId = taskId;
        if (this.serviceMatrix.filterStore.selectedSubProgTasks != undefined) {
            this.subProgramTasks = this.serviceMatrix.filterStore.selectedSubProgTasks;
        }
        this.saveFilter(this.serviceMatrix.filterStore);
    };
    TaskDetailsComponent.prototype.saveFilter = function (fstore) {
        var cf = '{"taskId":"","serviceName":"","program":"","subProgram":"","taskCategory":"","taskName":"","statusCode":"","myInput":"","inputCount":"","feedbackReceived":"","toBeEnteredBy":"","inputReceived":""}';
        if (fstore.pageIndex != 0 || fstore.globalFilter != ''
            || fstore.pageSize != 50 || (fstore.columnFilter != undefined && JSON.stringify(fstore.columnFilter) != cf)) {
            if (this.user['filter'] != fstore.toString()) {
                this.serviceMatrix.saveFilter(this.user['id'], fstore.toString()).subscribe(function (data) {
                    var user = JSON.parse(localStorage.getItem('currentUser'));
                    user['filter'] = fstore.toString();
                    localStorage.setItem('currentUser', JSON.stringify(user));
                });
            }
        }
    };
    TaskDetailsComponent.prototype.goToTask = function (taskId) {
        this.router.navigate([this.selectedRegion, this.selectedRegionId, "task", taskId]);
    };
    TaskDetailsComponent.prototype.filterInputsByUserAndRegion = function (inputs, userId, regionName) {
        var myInputs = inputs.filter(function (input) {
            return input.id == userId && input['regionByRegionId']['regionName'] == regionName;
        });
        return myInputs;
    };
    TaskDetailsComponent.prototype.saveResponse = function () {
        var _this = this;
        var status = 'N';
        if ('admin' === this.user['userRoleByRoleId']['roleName'] || 'm_lead' === this.user['userRoleByRoleId']['roleName']) {
            status = 'A';
            if (this.task['missionUserInputsByTaskId'] != undefined && this.task['missionUserInputsByTaskId'].length > 0) {
                var missionUserInputsByTaskIdByRegion = this.task['missionUserInputsByTaskId'].filter(function (e) { return e.regionByRegionId.regionName == _this.selectedRegion; });
                if (missionUserInputsByTaskIdByRegion.length > 0) {
                    var dialogRef = this.dialog.open(SaveResponseConfirmDialog, {
                        width: '500px',
                        data: { confirm: 'No' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result.confirm == 'Yes') {
                            _this.saveUserInput(status);
                        }
                    });
                }
                else {
                    this.saveUserInput(status);
                }
            }
            else {
                this.saveUserInput(status);
            }
        }
        else if ('m_resp' === this.user['userRoleByRoleId']['roleName']) {
            status = 'P';
            this.saveUserInput(status);
        }
    };
    TaskDetailsComponent.prototype.onApproval = function (task, status) {
        var _self = this;
        _self.approved = true;
        _self.approvedMsgLead = "The multiplier input for this task has been validated.";
    };
    TaskDetailsComponent.prototype.saveUserInput = function (stats) {
        var _this = this;
        this.serviceMatrix.saveUserInput(this.user['id'], this.selectedRegion, this.inpuTaskId, this.multiplier, this.taskfeedback).subscribe(function (res) {
            _this.customInit(_this.selectedRegion, _this.inpuTaskId);
            _this.changeInputDetection = !_this.changeInputDetection;
            _this.snackBar.openSnackBar("Input saved successfully", 'Close', "green-snackbar");
        }, function (err) {
            _this.snackBar.openSnackBar("Error saving input value", 'Close', "red-snackbar");
        });
    };
    TaskDetailsComponent.prototype.goBackToMatrix = function () {
        this.router.navigate(["service", this.selectedRegion, this.selectedRegionId]);
    };
    TaskDetailsComponent.prototype.viewInputs = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = '800px';
        dialogConfig.maxHeight = '400px';
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            regionName: this.selectedRegion,
            userId: this.user['id'],
            taskId: this.task['taskId']
        };
        var inputDialogRef = this.dialog.open(_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_5__["InputsComponent"], dialogConfig);
        inputDialogRef.afterClosed().subscribe(function (data) {
            if (data != undefined) {
                _this.customInit(data.regionName, data.taskId);
            }
        });
    };
    TaskDetailsComponent.prototype.viewFeedbacks = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = '800px';
        dialogConfig.maxHeight = '400px';
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            regionName: this.selectedRegion,
            userId: this.user['id'],
            taskId: this.task['taskId']
        };
        var inputDialogRef = this.dialog.open(_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"], dialogConfig);
        inputDialogRef.afterClosed().subscribe(function (data) { });
    };
    TaskDetailsComponent.prototype.provideYourInputs = function () {
        this.router.navigate(['task', this.inpuTaskId]);
    };
    TaskDetailsComponent.prototype.backToRegion = function () {
        this.router.navigate(["region"]);
    };
    TaskDetailsComponent.prototype.backToLogin = function () {
        this.serviceMatrix.logout(this.userService.user['id']);
        this.serviceMatrix.filterStore.pageIndex = 0;
        this.serviceMatrix.filterStore.pageSize = 50;
        this.serviceMatrix.filterStore.globalFilter = '';
        this.serviceMatrix.filterStore.columnFilter = undefined;
        this.serviceMatrix.filterStore.selectedSubProgTasks = [];
        this.router.navigate(["login"]);
    };
    TaskDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-details',
            template: __webpack_require__(/*! ./task-details.component.html */ "./src/app/service/task-details/task-details.component.html"),
            styles: [__webpack_require__(/*! ./task-details.component.css */ "./src/app/service/task-details/task-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_matrix_service__WEBPACK_IMPORTED_MODULE_3__["ServiceMatrixService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], _mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());

var SaveResponseConfirmDialog = /** @class */ (function () {
    function SaveResponseConfirmDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SaveResponseConfirmDialog.prototype.closeDialog = function (confirm) {
        this.dialogRef.close({ 'confirm': confirm });
    };
    SaveResponseConfirmDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'save-input-confirm-dialog',
            template: __webpack_require__(/*! ./save-input-confirm-dialog.html */ "./src/app/service/task-details/save-input-confirm-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], SaveResponseConfirmDialog);
    return SaveResponseConfirmDialog;
}());



/***/ }),

/***/ "./src/app/user/user-registration/user-registration.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user/user-registration/user-registration.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user-registration/user-registration.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-registration/user-registration.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-registration works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user-registration/user-registration.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/user-registration/user-registration.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent() {
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! ./user-registration.component.html */ "./src/app/user/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.css */ "./src/app/user/user-registration/user-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/user/user-registration/user-registration.component.ts");




var routes = [
    {
        path: "",
        component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-registration/user-registration.component */ "./src/app/user/user-registration/user-registration.component.ts");





var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_4__["UserRegistrationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"]
            ]
        })
    ], UserModule);
    return UserModule;
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

module.exports = __webpack_require__(/*! C:\Users\pravgandhi\Desktop\Thisan\project\CDFW\SBB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map