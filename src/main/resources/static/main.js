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
    }
    AuthenticationService.prototype.login = function (username, password) {
        var self = this;
        return this.http.post('http://localhost:8080/authenticateUser', { username: username, password: password }).
            toPromise()
            .then(function (response) {
            console.log(response);
            if (response) {
                localStorage.setItem('currentUser', JSON.stringify(response));
                return true;
            }
            return false;
        }, function (error) {
            return error;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
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








var routes = [
    { path: 'user', component: _user_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'service/:regionId', component: _service_matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_4__["MatrixDetailsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: ':regionId/task/:taskId', component: _service_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_6__["TaskDetailsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
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

module.exports = "<div class=\"flex-container\">\r\n\r\n  <div style =\"width:100%; background-color: #1f4e79; color: white;\">\r\n    <!-- <mat-toolbar color=\"primary\"> -->\r\n      <div class=\"row m-0 w-100 p-2 h-100\">\r\n        <div class=\"col-md-2\">\r\n            <img src=\"../assets/SBB.png\" alt=\"\" class=\"logo\">\r\n        </div>\r\n        <div class=\"col-md-8 text-center vertical-middle\">\r\n            Mission Level Data Collection Tool \r\n        </div>\r\n        <div class=\"col-md-2 text-right vertical-middle\">\r\n            <img src=\"../assets/CDFW.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <!-- <mat-toolbar-row>\r\n        <img src=\"../assets/SBB.png\" alt=\"\" class=\"logo\">\r\n        <span class=\"fill-remaining-space\">\r\n           Mission Level Data Collection Tool \r\n        </span>\r\n        <img src=\"../assets/CDFW.png\" alt=\"\">\r\n      </mat-toolbar-row> -->\r\n    <!-- </mat-toolbar> -->\r\n  </div>\r\n\r\n  <div class = \"main-content\">\r\n    <router-outlet #routerOutlet=\"outlet\"> </router-outlet>\r\n  </div>\r\n  <div>\r\n    <footer flex>\r\n      <div class=\"footer-copyright py-1 pb-1 text-center\">\r\n        Please contact the project team at\r\n        <span class=\"fake-link\">sbbsupport@wildlife.ca.gov</span>\r\n        if you need assistance\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>\r\n"

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
        this.title = 'SBB';
    }
    AppComponent.prototype.getUserDetails = function () {
        //this.router.navigate(['/heroes']);
    };
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
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _service_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/inputs/inputs.component */ "./src/app/service/inputs/inputs.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/error-interceptor */ "./src/app/_services/error-interceptor.ts");
/* harmony import */ var _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
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
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_6__["ServiceModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_19__["HttpErrorInterceptor"],
                    multi: true,
                },
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"], _services__WEBPACK_IMPORTED_MODULE_17__["UserService"], _service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_service_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_13__["InputsComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login-form/login-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm {\r\n  min-height: 50vh;\r\n  padding-top: 100px;\r\n  width: 350px;\r\n  margin: auto;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.login-table {\r\n  width: 85%;\r\n  margin: auto;\r\n}\r\n\r\n.login-table .mat-form-field {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5Gb3JtIHtcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLXRhYmxlIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmxvZ2luLXRhYmxlIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"loginForm\" [formGroup]=\"loginForm\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>Login</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <table cellspacing=\"0\" class=\"login-table\">\r\n          <tr>\r\n            <td>\r\n              <div class=\"form-group\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Username\" name=\"username\" required\r\n                  formControlName=\"username\">\r\n                  <mat-error *ngIf=\"loginForm.controls['username'].errors?.required && loginForm.controls['username'].touched\">\r\n                      Username is <strong>required</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Password\" type=\"password\" name=\"password\"\r\n                formControlName=\"password\" required>\r\n                <mat-error *ngIf=\"loginForm.controls['password'].errors?.required && loginForm.controls['password'].touched\">\r\n                    Password is <strong>required</strong>\r\n                  </mat-error>\r\n              </mat-form-field>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <span style=\"color:red;\" *ngIf=\"errMsg != null\">{{errMsg}}</span>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\r\n      </mat-card-content>\r\n      <mat-card-actions class=\"text-center\">\r\n        <button type= \"submit\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Login</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/mat-snack-bar/mat-snack-bar.component */ "./src/app/service/mat-snack-bar/mat-snack-bar.component.ts");







var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, authenticationService, formBuilder, userService, snackBar) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.userService = userService;
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
            this.authenticationService.login(this.f.username.value, this.f.password.value).then(function (isMission) {
                if (isMission) {
                    var mappedRegions = _this.userService.user['userRegionMappingsById'];
                    if (mappedRegions.length > 0) {
                        var userRegion = mappedRegions[0]['regionByRegionId']['regionName'];
                        _this.router.navigate(['service', userRegion]);
                    }
                    else {
                        //  this.snackBar.openSnackBar( `User ${this.f.username.value} does not have access to any region.`, 'Close', "red-snackbar");
                        _this.errMsg = "User " + _this.f.username.value + " does not have access to any region. ";
                        _this.router.navigate(['login']);
                    }
                }
                else {
                    // this.snackBar.openSnackBar( "Invalid Credentials", 'Close', "red-snackbar");
                    _this.errMsg = "Invalid Credentials";
                    _this.router.navigate(['login']);
                }
            });
        }
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_service_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



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

module.exports = "<div>\r\n  <mat-card>\r\n  <mat-card-header>\r\n      <mat-card-title>Review Inputs</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n  <table mat-table [dataSource]=\"inputs\" class=\"mat-elevation-z8 w-100\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Respondent Name </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.userById.userName}}  </td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"value\">\r\n      <th mat-header-cell *matHeaderCellDef> Input Value </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.inputValue}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef> Status </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.statusBySttsId.statusCode}} </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"inputDisplayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: inputDisplayedColumns;\"\r\n            [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\r\n            (click)=\"highlight(row)\">\r\n    </tr>\r\n  </table>\r\n  </mat-card-content>\r\n  <mat-card-actions class=\"text-center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"approveResponse()\" [disabled]=\"this.selectedRow != undefined && this.selectedRow.statusBySttsId.statusCode == 'Approved'\">Select</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"provideYourInput()\">Provide your own Input</button>\r\n  </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

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
    function InputsComponent(serviceMatrix, dialogRef, userService, data, router, snackBar) {
        this.serviceMatrix = serviceMatrix;
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.data = data;
        this.router = router;
        this.snackBar = snackBar;
        this.selectedRowIndex = -1;
        this.inputs = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.inputDisplayedColumns = ["value", "name", "status"];
        this.errorMessage = null;
        this.successMessage = null;
    }
    InputsComponent.prototype.ngOnInit = function () {
        this.user = this.userService.user;
        this.selectedRegionObject = this.userService.getSelectedRegionObject(this.data.regionName);
        this.fetchInputs();
    };
    InputsComponent.prototype.fetchInputs = function () {
        var _this = this;
        var _self = this;
        this.serviceMatrix.fetchInputs(this.selectedRegionObject.regionId, this.data.taskId).subscribe(function (data) {
            _self.inputs.data = data;
        }, function (err) {
            _this.errorMessage = "Error fectching input values. Please try again later.";
        });
    };
    InputsComponent.prototype.approveResponse = function () {
        var _this = this;
        this.serviceMatrix.selectedRowIndex = this.selectedRowIndex;
        var _self = this;
        this.serviceMatrix.selectInput(this.selectedRegionObject.regionId, this.data.taskId, this.selectedRow.id).subscribe(function (data) {
            _self.approvedInput = Number(data);
            _this.snackBar.openSnackBar("Selected Input is approved", 'Close', "green-snackbar");
            _this.dialogRef.close(_this.data);
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
        this.dialogRef.close();
    };
    InputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__(/*! ./inputs.component.html */ "./src/app/service/inputs/inputs.component.html"),
            styles: [__webpack_require__(/*! ./inputs.component.css */ "./src/app/service/inputs/inputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_matrix_service__WEBPACK_IMPORTED_MODULE_2__["ServiceMatrixService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]])
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

module.exports = "mat-cell, \r\n.mat-cell,\r\nmat-footer-cell,\r\n.mat-footer-cell,\r\nmat-header-cell, .mat-header-cell {\r\n  padding: 0.75rem !important;\r\n}\r\n\r\ntable, mat-paginator {\r\n  width: 90%;\r\n}\r\n\r\nmat-header-cell {\r\n  display:flex;\r\n  justify-content:flex-end;\r\n }\r\n\r\n.mat-form-field {\r\n   font-size: 14px;\r\n   width: 50%;\r\n }\r\n\r\n.mat-row:hover {\r\n  background-color: #DDD;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar  span, mat-toolbar  a  span {\r\n  font-size: 10pt;\r\n}\r\n\r\n.table-col-title {\r\n  font-weight: 500;\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n\r\n.table-col-header {\r\n  font-size: 12px;\r\n}\r\n\r\n.filter-input{\r\n  width: 75%;\r\n  text-align: left;\r\n}\r\n\r\n.th-header-background{\r\n  background: #1f4e79;\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.help-text-icon {\r\n  font-size: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9tYXRyaXgtZGV0YWlscy9tYXRyaXgtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztFQUtFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7Q0FDekI7O0FBRUE7R0FDRSxlQUFlO0dBQ2YsVUFBVTtDQUNaOztBQUVBO0VBQ0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS9tYXRyaXgtZGV0YWlscy9tYXRyaXgtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNlbGwsIFxyXG4ubWF0LWNlbGwsXHJcbm1hdC1mb290ZXItY2VsbCxcclxuLm1hdC1mb290ZXItY2VsbCxcclxubWF0LWhlYWRlci1jZWxsLCAubWF0LWhlYWRlci1jZWxsIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlLCBtYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiB9XHJcblxyXG4gLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB3aWR0aDogNTAlO1xyXG4gfVxyXG5cclxuIC5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG59XHJcblxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbm1hdC10b29sYmFyICBzcGFuLCBtYXQtdG9vbGJhciAgYSAgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4udGFibGUtY29sLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50YWJsZS1jb2wtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXR7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGgtaGVhZGVyLWJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZDogIzFmNGU3OTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaGVscC10ZXh0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/service/matrix-details/matrix-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/service/matrix-details/matrix-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" class=\"mb-4\">\r\n    <mat-toolbar>\r\n        <div class=\"row w-100 m-0\">\r\n        <div class=\"col-md-6 text-left\">\r\n        <span> <b>Task Catalog</b> </span>\r\n\r\n        <button mat-button color=\"primary\" matTooltip=\"User Info\" style=\"cursor:default;\">\r\n            <mat-icon>account_box</mat-icon>\r\n            {{user.userName}}\r\n          </button>\r\n          <button mat-button color=\"primary\" matTooltip=\"Region\" style=\"cursor:default;\">\r\n              <mat-icon>language</mat-icon>\r\n              {{selectedRegion}}\r\n            </button>\r\n        </div>\r\n        <div class=\"col-md-6 text-right\">\r\n          <span> <b>Actions: </b></span>\r\n          <button mat-button color = \"primary\" [matMenuTriggerFor]=\"region\">\r\n              <mat-icon>language</mat-icon>\r\n              Pick a different region\r\n          </button>\r\n\r\n          <mat-menu #region=\"matMenu\">\r\n            <button mat-menu-item *ngFor=\"let item of regionList\"\r\n            (click)=\"chooseRegion(item.regionByRegionId.regionName)\"> {{item.regionByRegionId.regionName}} </button>\r\n          </mat-menu>\r\n\r\n          <button mat-button color = \"primary\" (click)=\"backToLogin()\">\r\n              <mat-icon>power_settings_new</mat-icon>\r\n              Logout\r\n          </button>\r\n        </div>\r\n        </div>\r\n      </mat-toolbar>\r\n  <!-- <mat-toolbar >\r\n    <h4> Task Catalog &nbsp;&nbsp; </h4>\r\n    <mat-icon matListAvatar color=\"primary\" matTooltip = \"User Info\">account_box</mat-icon>\r\n    <span>{{user.userName}} &nbsp;&nbsp;</span>\r\n    <mat-icon matListAvatar color=\"primary\">language</mat-icon>\r\n    <span > {{selectedRegion}} &nbsp;&nbsp;</span>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <span> <b>Actions: </b> </span>\r\n    <button mat-button color = \"primary\" [matMenuTriggerFor]=\"region\">\r\n        <mat-icon>language</mat-icon>\r\n        Pick a different region\r\n    </button>\r\n\r\n    <mat-menu #region=\"matMenu\">\r\n      <button mat-menu-item *ngFor=\"let item of regionList\"\r\n      (click)=\"chooseRegion(item.regionByRegionId.regionName)\"> {{item.regionByRegionId.regionName}} </button>\r\n    </mat-menu>\r\n\r\n    <button mat-button color = \"primary\" (click)=\"backToLogin()\">\r\n        <mat-icon>power_settings_new</mat-icon>\r\n        Logout\r\n    </button>\r\n\r\n  </mat-toolbar> -->\r\n\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <table mat-table [dataSource] = \"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef =\"taskId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task ID</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.taskId}}\r\n      </td>\r\n    </ng-container>\r\n\r\n   <ng-container matColumnDef =\"serviceName\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Service</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.serviceName}}\r\n      </td>\r\n    </ng-container>\r\n\r\n   <ng-container matColumnDef =\"program\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Program</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.program}}\r\n      </td>\r\n    </ng-container>\r\n\r\n   <ng-container matColumnDef =\"subProgram\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Sub Program</th>\r\n       <td mat-cell *matCellDef= \"let element\">\r\n         {{element.subProgram}}\r\n       </td>\r\n     </ng-container>\r\n\r\n     <ng-container matColumnDef =\"taskCategory\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task Category</th>\r\n        <td mat-cell *matCellDef= \"let element\">\r\n          {{element.taskCategory}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef =\"taskName\">\r\n         <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Task</th>\r\n         <td mat-cell *matCellDef= \"let element\">\r\n           {{element.taskName}}\r\n         </td>\r\n       </ng-container>\r\n\r\n    <ng-container matColumnDef=\"myInput\">\r\n     <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"\r\n      matTooltip=\"Displays the input you provided, if applicable. You may select the task in question to update your prior entry if necessary. \"\r\n     >\r\n       My Input <i class=\"material-icons help-text-icon\"\r\n       placement=\"bottom\"\r\n       >help</i>\r\n      </th>\r\n     <td mat-cell *matCellDef=\"let element\">\r\n             {{element.myInput}}\r\n     </td>\r\n   </ng-container>\r\n\r\n   <!--<ng-container matColumnDef =\"approved\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\">Approved</th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        <button mat-icon-button color=\"primary\" >\r\n            <mat-icon class=\"mat-18\">done_all</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container> -->\r\n\r\n   <ng-container matColumnDef =\"statusCode\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"\r\n      matTooltip=\"'Not started' indicates that no input has been provided for this task.\r\n      'Pending' indicates that one or more inputs have been provided, and that the Region lead / Approver has not yet made the final input selection.\r\n      'Approved' indicates that the assigned Region lead / Approver has validated the final input and closed the item. Please e-mail your assigned Region lead / Approver with any additional comments you may have. \">\r\n        Status <i class=\"material-icons help-text-icon\" placement=\"bottom\"\r\n         >help</i>\r\n        </th>\r\n      <td mat-cell *matCellDef= \"let element\">\r\n        {{element.statusBySttsId.statusCode}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef =\"inputCount\">\r\n       <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"th-header-background\"\r\n       matTooltip=\"Displays the number of inputs entered the region's respondents so far; the 0 value indicates that no input has been received from any of the region's respondents so far.\">\r\n         Input Count <i class=\"material-icons help-text-icon\" placement=\"bottom\"\r\n          >help</i>\r\n        </th>\r\n       <td mat-cell *matCellDef= \"let element\">\r\n         {{element.inputCount}}\r\n       </td>\r\n     </ng-container>\r\n\r\n     <!-- Task Id Filter Column -->\r\n    <ng-container matColumnDef=\"taskId-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input class=\"filter-input\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'taskId')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Service Filter Column -->\r\n    <ng-container matColumnDef=\"serviceName-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'serviceName')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Program Filter Column -->\r\n    <ng-container matColumnDef=\"program-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'program')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Sub Program Filter Column -->\r\n    <ng-container matColumnDef=\"subProgram-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'subProgram')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Task Category Filter Column -->\r\n    <ng-container matColumnDef=\"taskCategory-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'taskCategory')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Task Filter Column -->\r\n    <ng-container matColumnDef=\"taskName-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'taskName')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Myinput Filter Column -->\r\n    <ng-container matColumnDef=\"myInput-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n      <input  class=\"filter-input\"\r\n        (keyup)=\"applyColumnFilter($event.target.value, 'myInput')\"\r\n        placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <!-- Status Filter Column -->\r\n    <ng-container matColumnDef=\"statusCode-filter\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <input  class=\"filter-input\"\r\n            (keyup)=\"applyColumnFilter($event.target.value, 'statusCode')\"\r\n            placeholder=\"Filter\">\r\n        </th>\r\n    </ng-container>\r\n\r\n    <!-- Count Input Filter Column -->\r\n    <ng-container matColumnDef=\"inputCount-filter\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <input class=\"filter-input\"\r\n          (keyup)=\"applyColumnFilter($event.target.value, 'inputCount')\"\r\n          placeholder=\"Filter\">\r\n      </th>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedFilterColumns\" class=\"example-second-header-row\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"showTask(row)\"></tr>\r\n  </table>\r\n<mat-paginator\r\n  [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n"

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
            myInput: '', inputCount: '' //, topFilter: false
        };
        this.getMatrixDetails = function (userId) {
            _this.serviceMatrix.getData(_this.selectedRegion, userId)
                .subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
                _this.dataSource.data.forEach(function (e) {
                    e["statusCode"] = e["statusBySttsId"].statusCode;
                });
            });
        };
    }
    MatrixDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedRegion = params['regionId'];
            _this.customInit(params);
        });
        this.dataSource.filterPredicate = this.customFilterPredicate();
    };
    ;
    MatrixDetailsComponent.prototype.customInit = function (params) {
        var _this = this;
        this.user = this.userService.user;
        this.displayedColumns = ["taskId", "serviceName", "program",
            "subProgram", "taskCategory", "taskName", "myInput", "statusCode", "inputCount"];
        this.displayedFilterColumns = [];
        //remove this block after confirmation about the display of columns for resp
        // if('admin' === this.user['userRoleByRoleId']['roleName'] || 'm_lead' === this.user['userRoleByRoleId']['roleName']) {
        //    this.displayedColumns.push( "input",  "status", "count");
        //  } else if ('m_resp' === this.user['userRoleByRoleId']['roleName']) {
        //    this.displayedColumns.push( "input",  "status", "count");
        //  }
        this.displayedColumns.forEach(function (e) {
            _this.displayedFilterColumns.push(e + '-filter');
        });
        this.getMatrixDetails(this.userService.user['id']);
        this.getRegionDetails(this.user);
    };
    MatrixDetailsComponent.prototype.getRegionDetails = function (user) {
        this.regionList = user['userRegionMappingsById'];
    };
    MatrixDetailsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
                var statusFound_1 = data.statusBySttsId.statusCode.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var inputFound_1 = data.myInput.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                var countFound_1 = data.inputCount.toString().trim().toLowerCase().indexOf(_this.globalFilter.toString().toLowerCase()) !== -1;
                globalMatch = taskIdFound_1 || serviceNameFound_1 || programFound_1 || subProgramFound_1 || taskCategoryFound_1 || taskNameFound_1 || statusFound_1 || inputFound_1 || countFound_1;
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
            var statusFound = data.statusBySttsId.statusCode.toString().trim().toLowerCase().indexOf(searchString.statusCode.toString().toLowerCase()) !== -1;
            var inputFound = data.myInput.toString().trim().toLowerCase().indexOf(searchString.myInput.toString().toLowerCase()) !== -1;
            var countFound = data.inputCount.toString().trim().toLowerCase().indexOf(searchString.inputCount.toString().toLowerCase()) !== -1;
            return taskIdFound && serviceNameFound && programFound && subProgramFound && taskCategoryFound && taskNameFound && statusFound && inputFound && countFound;
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
        this.router.navigate([this.selectedRegion, "task", row.taskId]);
    };
    MatrixDetailsComponent.prototype.chooseRegion = function (region) {
        this.router.navigate(["service", region]);
    };
    MatrixDetailsComponent.prototype.backToLogin = function () {
        this.router.navigate(["login"]);
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
/*! exports provided: ServiceMatrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceMatrixService", function() { return ServiceMatrixService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ServiceMatrixService = /** @class */ (function () {
    function ServiceMatrixService(http) {
        var _this = this;
        this.http = http;
        this.API_URL = "http://localhost:8080/";
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
        this.getData = function (selectedRegion, userId) {
            return _this.http.get(_this.API_URL + 'service/' + selectedRegion + '/' + userId);
        };
        this.selectInput = function (regionId, taskId, userId) {
            return _this.http.get(_this.API_URL + 'selectInput/' + regionId + '/' + taskId + '/' + userId);
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
    ServiceMatrixService.prototype.testBackend = function () {
        this.http.get('http://localhost:8080/greeting').toPromise()
            .then(function (response) {
        });
    };
    ServiceMatrixService.prototype.saveUserInput = function (userId, regionName, taskId, inputValue) {
        return this.http.post(this.API_URL + 'saveInput', { userId: userId, regionName: regionName, taskId: taskId, inputValue: inputValue });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ServiceMatrixService.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ServiceMatrixService.prototype, "sort", void 0);
    ServiceMatrixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceMatrixService);
    return ServiceMatrixService;
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













var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_matrix_details_matrix_details_component__WEBPACK_IMPORTED_MODULE_4__["MatrixDetailsComponent"], _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailsComponent"], _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_10__["InputsComponent"], _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__["SaveResponseConfirmDialog"]],
            entryComponents: [_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__["SaveResponseConfirmDialog"]],
            providers: [_service_matrix_service__WEBPACK_IMPORTED_MODULE_9__["ServiceMatrixService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _service_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
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

module.exports = ".task-container{\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field{\r\n  width: 100%;\r\n}\r\n\r\n.example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\ntextarea {\r\n    padding: 10px;\r\n    line-height: 1.5;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    width: 100%;\r\n}\r\n\r\nmat-toolbar  span, mat-toolbar  a  span {\r\n  font-size: 10pt;\r\n}\r\n\r\n.help-text-icon {\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS90YXNrLWRldGFpbHMvdGFzay1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS90YXNrLWRldGFpbHMvdGFzay1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXRvb2xiYXIgIHNwYW4sIG1hdC10b29sYmFyICBhICBzcGFuIHtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi5oZWxwLXRleHQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/service/task-details/task-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/service/task-details/task-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <div class=\"row w-100 m-0\">\r\n  <div class=\"col-md-6\">\r\n  <span> <b>Task Details</b> </span>\r\n\r\n  <button mat-button color=\"primary\" matTooltip=\"User Info\" style=\"cursor:default;\">\r\n      <mat-icon>account_box</mat-icon>\r\n      {{user.userName}}\r\n    </button>\r\n    <button mat-button color=\"primary\" matTooltip=\"Region\" style=\"cursor:default;\">\r\n        <mat-icon>language</mat-icon>\r\n        {{selectedRegion}}\r\n      </button>\r\n  </div>\r\n  <div class=\"col-md-6 text-right\">\r\n    <span> <b>Actions: </b></span>\r\n    <button mat-button color=\"primary\" (click)=\"goBackToMatrix()\">\r\n      <mat-icon>arrow_back</mat-icon>\r\n      Back to Catalog\r\n    </button>\r\n    <button mat-button color=\"primary\" (click)=\"backToLogin()\">\r\n      <mat-icon>power_settings_new</mat-icon>\r\n      Logout\r\n    </button>\r\n  </div>\r\n  </div>\r\n</mat-toolbar>\r\n\r\n<ngb-alert *ngIf=\"approved && userRole==='m_resp' && approvedMsgResp !== null\" type=\"success\"\r\n  (close)=\"approvedMsgResp = null\">{{ approvedMsgResp }}</ngb-alert>\r\n<ngb-alert *ngIf=\"approved && (userRole==='m_lead' || userRole==='admin') && approvedMsgLead !== null\" type=\"success\"\r\n  (close)=\"approvedMsgLead = null\">{{ approvedMsgLead }}</ngb-alert>\r\n\r\n\r\n<div class=\"task-container\" *ngIf=\"task != undefined\">\r\n  <mat-card class=\"example-card m-3\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{task.taskName}}</mat-card-title>\r\n      <mat-card-subtitle>{{task.serviceName}} / {{task.program}} / {{task.subProgram}} /{{task.taskCategory}}\r\n      </mat-card-subtitle>\r\n\r\n    </mat-card-header>\r\n    <mat-divider matInset></mat-divider>\r\n    <mat-card-content class=\"py-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <mat-card>\r\n            <mat-card-actions class=\"m-0 p-0 mb-3\">\r\n              <div class=\"row mx-0\">\r\n                <div class=\"col-sm-4\">\r\n                    <mat-form-field>\r\n                      <label for=\"inputmul\">Input Multiplier<i class=\"material-icons help-text-icon\"\r\n                          matTooltip=\"Displays the input recorded for this task. This is the only field that requires an input from respondents in this exercise. \">help</i></label>\r\n                      <input id=\"inputmul\" matInput type=\"number\" name=\"test_name\" min=\"0\"\r\n                        oninput=\"validity.valid||(value='');\" [(ngModel)]=\"multiplier\" [disabled]=\"saveRespInputDisabled\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n                <div class=\"col-sm-4 pt-4\">\r\n                      <button mat-raised-button color=\"primary\" (click)=\"saveResponse()\" [disabled]=\"saveRespInputDisabled || multiplier == undefined || multiplier == 0\">\r\n                      <mat-icon>save</mat-icon>\r\n                      Save Response\r\n                    </button>\r\n\r\n                  </div>\r\n                  <div class=\"col-sm-4 pt-4\">\r\n                      <button mat-raised-button color=\"primary\" (click)=\"viewInputs()\"\r\n                        *ngIf=\"userRole==='admin' || userRole==='m_lead'\">\r\n                        <mat-icon>touch_app</mat-icon>\r\n                        Review Inputs\r\n                      </button>\r\n\r\n                    </div>\r\n              </div>\r\n            </mat-card-actions>\r\n            <mat-divider matInset></mat-divider>\r\n            <mat-card-content>\r\n              <div class=\"row pt-3\">\r\n                <div class=\"col-sm-6\">\r\n                  <label for=\"taskdesc\">Task Description</label><br>\r\n                  <textarea id=\"taskdesc\" name=\"taskdesc\" rows=\"5\" cols=\"30\" readonly> {{task.taskDesc}}\r\n        </textarea>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <label for=\"multiDesc\">Input Multiplier Description</label><br>\r\n                  <textarea id=\"multiDesc\" name=\"multiDesc\" rows=\"5\" cols=\"30\" readonly> {{task.multDesc}}\r\n        </textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"row pt-3\">\r\n                <div class=\"col-sm-6\">\r\n                  <label for=\"taskdesc2\">Desired Performance</label><br>\r\n                  <textarea id=\"taskdesc2\" name=\"taskdesc\" rows=\"5\" cols=\"30\" readonly> {{task.desiredPerf}}\r\n        </textarea>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <label for=\"multiDesc2\">Additional Budget Factor(s)</label><br>\r\n                  <textarea id=\"multiDesc2\" name=\"multiDesc\" rows=\"5\" cols=\"30\" readonly> {{task.addtnlBudgetFator}}\r\n        </textarea>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <mat-card>\r\n            <mat-card-actions class=\"m-0 p-0 mb-3\">\r\n              <div class=\"row mx-0\">\r\n                  <div class=\"col-sm-3\">\r\n                <mat-form-field>\r\n                  <label for=\"frequency\">Freuquency <i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Number of times per year that the task needs to be accomplished (predefined).\">help</i></label>\r\n                  <input id=\"frequency\" matInput value=\"{{task.frequency}}\" readonly>\r\n                </mat-form-field></div>\r\n                <div class=\"col-sm-6\">\r\n                <mat-form-field>\r\n                  <label for=\"totallaborhours\">Total time of Labor Hours <i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Sum of time per labor classification (predefined).\">help</i></label>\r\n                  <input id=\"totallaborhours\" matInput value=\"{{task.totalLaborHours}}\" readonly>\r\n                </mat-form-field></div>\r\n                <div class=\"col-sm-3\">\r\n\r\n                <mat-form-field>\r\n                  <label for=\"totalhours\">Total Hours <i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Product of multiplier (input), times the total time of labor hours, times the frequency (automatically calculated).\">help</i></label>\r\n                  <input id=\"totalhours\" matInput value=\"{{task.totalLaborHours * task.frequency * multiplier}}\"\r\n                    readonly>\r\n                </mat-form-field></div>\r\n              </div>\r\n            </mat-card-actions>\r\n            <mat-divider matInset></mat-divider>\r\n            <mat-card-content>\r\n              <div class=\"row pt-3\">\r\n                <div class=\"col-sm-8\">\r\n                  <label for=\"laborTable\">Labor Classification<i class=\"material-icons help-text-icon\"\r\n                      matTooltip=\"Displays the time that each labor classification would spend on the task in question, in the future state / at mission level (predefined). \">help</i></label>\r\n                  <table id=\"laborTable\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z1 w-100\">\r\n                    <ng-container matColumnDef=\"title\">\r\n                      <th mat-header-cell *matHeaderCellDef> Title </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"role\">\r\n                      <th mat-header-cell *matHeaderCellDef> Code </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.role}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"time\">\r\n                      <th mat-header-cell *matHeaderCellDef> Time </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                  </table>\r\n                  <!--  <mat-paginator\r\n          [pageSizeOptions]=\"[3, 5, 7]\" showFirstLastButtons></mat-paginator> -->\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <label for=\"justcat\">Justification Category</label>\r\n                  <table id=\"justcat\" mat-table [dataSource]=\"dataSourceJustification\" matSort\r\n                    class=\"mat-elevation-z1 w-100\">\r\n                    <ng-container matColumnDef=\"categoryName\">\r\n                      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                      <td mat-cell *matCellDef=\"let element\"> {{element.categoryName}} </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsJustification\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsJustification;\"></tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

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
        this.getTaskInfo1 = function (selectedRegion, taskId) {
            var _self = _this;
            _this.serviceMatrix.getTaskDetail1(selectedRegion, taskId).subscribe(function (data) {
                _self.task = data;
                _self.dataSource.data = data['laborClassesByTaskId'];
                _self.dataSourceJustification.data = data['jrsdctnCtgriesByTaskId'];
                var inputs = data['missionUserInputsByTaskId'];
                _self.serviceMatrix.inputDataStore = inputs;
                if ('A' === _self.task['statusBySttsId']['sttsId']) {
                    _self.approved = true;
                    var approvedInput = inputs.filter(function (input) {
                        if (_self.userService.userRole === 'm_resp') {
                            _self.saveRespInputDisabled = true;
                            _self.approvedMsgResp = "The multiplier input for this task has been validated. You may submit additional suggestions to your designated Region lead by reaching out directly.";
                        }
                        else {
                            _self.approvedMsgLead = "The multiplier input for this task has been validated.";
                        }
                        return input.sttsId == 'A';
                    });
                    if (approvedInput.length == 1) {
                        _self.multiplier = approvedInput[0].inputValue;
                    }
                }
                else {
                    var myInput = inputs.filter(function (input) {
                        return input.id == _self.user['id'];
                    });
                    if (myInput.length == 1) {
                        _self.multiplier = myInput[0].inputValue;
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
            _this.customInit(params['regionId'], params['taskId']);
        });
    };
    TaskDetailsComponent.prototype.customInit = function (regionId, taskId) {
        this.user = this.userService.user;
        this.getTaskInfo1(regionId, taskId);
        this.userRole = this.userService.userRole;
        this.selectedRegion = regionId;
        this.inpuTaskId = taskId;
    };
    TaskDetailsComponent.prototype.saveResponse = function () {
        var _this = this;
        var status = 'N';
        if ('admin' === this.user['userRoleByRoleId']['roleName'] || 'm_lead' === this.user['userRoleByRoleId']['roleName']) {
            status = 'A';
            if (this.task['missionUserInputsByTaskId'] != undefined && this.task['missionUserInputsByTaskId'].length > 0) {
                var dialogRef = this.dialog.open(SaveResponseConfirmDialog, {
                    width: '500px',
                    data: { confirm: 'No' }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log('The dialog was closed -->' + result.confirm);
                    if (result.confirm == 'Yes') {
                        _this.saveUserInput(status);
                    }
                    else {
                        _this.viewInputs();
                    }
                });
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
    TaskDetailsComponent.prototype.saveUserInput = function (stats) {
        var _this = this;
        this.serviceMatrix.saveUserInput(this.user['id'], this.selectedRegion, this.inpuTaskId, this.multiplier).subscribe(function (res) {
            _this.snackBar.openSnackBar("Input saved successfully", 'Close', "green-snackbar");
        }, function (err) {
            _this.snackBar.openSnackBar("Error saving input value", 'Close', "red-snackbar");
        });
    };
    TaskDetailsComponent.prototype.goBackToMatrix = function () {
        this.router.navigate(["service", this.selectedRegion]);
    };
    TaskDetailsComponent.prototype.viewInputs = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.width = '500px';
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
    TaskDetailsComponent.prototype.provideYourInputs = function () {
        this.router.navigate(['task', this.inpuTaskId]);
    };
    TaskDetailsComponent.prototype.backToRegion = function () {
        this.router.navigate(["region"]);
    };
    TaskDetailsComponent.prototype.backToLogin = function () {
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