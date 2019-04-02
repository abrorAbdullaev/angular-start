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

/***/ "./src/app/age.pipe.ts":
/*!*****************************!*\
  !*** ./src/app/age.pipe.ts ***!
  \*****************************/
/*! exports provided: AgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgePipe", function() { return AgePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgePipe = /** @class */ (function () {
    function AgePipe() {
    }
    AgePipe.prototype.transform = function (value, args) {
        var ageDifMs = Date.now() - Date.parse(value);
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    AgePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'age'
        })
    ], AgePipe);
    return AgePipe;
}());



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
/* harmony import */ var _window_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.ref */ "./src/app/window.ref.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(winRef) {
        this.winRef = winRef;
        this.title = 'n2go';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <div class=\"main-wrapper bg-main\">\n      <div class=\"container main-block text-center\">\n        <h1><strong>Welcome to {{ title }}!</strong></h1>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_window_ref__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _window_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./window.ref */ "./src/app/window.ref.ts");
/* harmony import */ var _csv_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./csv.ref */ "./src/app/csv.ref.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users-list/users-list.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-item/user-item.component */ "./src/app/user-item/user-item.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-modal/user-modal.component */ "./src/app/user-modal/user-modal.component.ts");
/* harmony import */ var _age_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./age.pipe */ "./src/app/age.pipe.ts");















// TODO Move to separate file
var appRoutes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"]
    },
    {
        path: 'users',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"]
    },
    {
        path: 'users/:id',
        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailsComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_11__["UserItemComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailsComponent"],
                _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_13__["UserModalComponent"],
                _age_pipe__WEBPACK_IMPORTED_MODULE_14__["AgePipe"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [
                _window_ref__WEBPACK_IMPORTED_MODULE_6__["WindowRef"],
                _csv_ref__WEBPACK_IMPORTED_MODULE_7__["Csv"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/csv.ref.ts":
/*!****************************!*\
  !*** ./src/app/csv.ref.ts ***!
  \****************************/
/*! exports provided: Csv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Csv", function() { return Csv; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Csv = /** @class */ (function () {
    function Csv() {
    }
    Csv.prototype.convertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    ;
    Csv.prototype.exportCSVFile = function (headers, items, fileTitle) {
        if (headers) {
            items.unshift(headers);
        }
        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
        var csv = this.convertToCSV(jsonObject);
        var exportedFilenmae = fileTitle + '.csv' || false;
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, exportedFilenmae);
        }
        else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilenmae);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    };
    ;
    Csv = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Csv);
    return Csv;
}());



/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: "\n    <div class=\"main-block text-center\">\n      <button routerLink=\"users\" class=\"btn btn-primary\">See the users</button>\n    </div>\n  ",
            inputs: [
                'users'
            ]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _window_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../window.ref */ "./src/app/window.ref.ts");





var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(route, winRef) {
        this.route = route;
        this.winRef = winRef;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            userLastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            userCountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            userDateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    UserDetailsComponent.prototype.getUsers = function () {
        return this.winRef.getUsers();
    };
    UserDetailsComponent.prototype.getUser = function () {
        var _this = this;
        if (typeof this.user === 'undefined') {
            this.route.params.subscribe(function (params) {
                _this.user = _this.winRef.getUsers().find(function (user) {
                    return +user.id === +params['id'];
                });
            });
        }
        return this.user;
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: "\n    <div class=\"main-block text-center\">\n      <button routerLink=\"/users\" (click)=\"$event.stopPropagation()\" class=\"btn btn-primary mb-2\">Go To List</button>\n      <div *ngIf=\"this.getUsers()\">\n        <h1 class=\"mb-2\">{{this.getUser().firstName + ' ' + this.getUser().lastName}}</h1>\n        <table style=\"width: 100%\">\n          <tr>\n            <th class=\"text-primary\"><strong>ID</strong></th>\n            <th class=\"text-primary\"><strong>Email</strong></th>\n            <th class=\"text-primary\"><strong>Country</strong></th>\n            <th class=\"text-primary\"><strong>Date Of Birth</strong></th>\n          </tr>\n          <tr>\n            <th>{{this.getUser().id}}</th>\n            <th>{{this.getUser().email}}</th>\n            <th>{{this.getUser().country}}</th>\n            <th>{{this.getUser().dateOfBirth | date: longFormat}}</th>\n          </tr>\n        </table>\n      </div>\n    </div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _window_ref__WEBPACK_IMPORTED_MODULE_4__["WindowRef"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-item/user-item.component.ts ***!
  \**************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../window.ref */ "./src/app/window.ref.ts");



var UserItemComponent = /** @class */ (function () {
    function UserItemComponent(winRef) {
        this.winRef = winRef;
    }
    UserItemComponent.prototype.removeUser = function () {
        var _this = this;
        this.winRef.getUsers().forEach(function (item, key) {
            if (_this.user['id'] == item.id) {
                _this.winRef.getUsers().splice(key, 1);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-user-item]',
            template: "\n    <th>\n      <strong *ngIf=\"user.isChecked\"><input type=\"checkbox\" checked=\"true\"/></strong>\n      <strong *ngIf=\"!user.isChecked\"><input type=\"checkbox\"/></strong>\n    </th>\n    <th><strong>{{ user.email }}</strong></th>\n    <th><strong>{{ user.firstName }}</strong></th>\n    <th><strong>{{ user.lastName }}</strong></th>\n    <th><strong>{{ user.country }}</strong></th>\n    <th><strong>{{ user.dateOfBirth | date: longFormat }}</strong></th>\n    <th><button routerLink=\"{{ user.id }}\" class=\"btn btn-success\">\n      <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        width=\"30px\" height=\"20px\" fill=\"#fff\" viewBox=\"0 0 87.605 87.605\" style=\"enable-background:new 0 0 87.605 87.605;\"\n        xml:space=\"preserve\">\n        <g>\n          <path d=\"M58.534,22.906H29.071c-0.957,0-1.732,0.792-1.732,1.765c0,0.974,0.775,1.765,1.732,1.765h29.462\n            c0.955,0,1.731-0.791,1.731-1.765C60.267,23.698,59.488,22.906,58.534,22.906z M58.534,36.767H29.071\n            c-0.957,0-1.732,0.791-1.732,1.765c0,0.973,0.775,1.764,1.732,1.764h29.462c0.955,0,1.731-0.791,1.731-1.764\n            C60.267,37.558,59.488,36.767,58.534,36.767z M58.534,50.631H29.071c-0.957,0-1.732,0.792-1.732,1.766s0.775,1.765,1.732,1.765\n            h29.462c0.955,0,1.731-0.791,1.731-1.765C60.267,51.423,59.488,50.631,58.534,50.631z M58.534,64.491H29.071\n            c-0.957,0-1.732,0.791-1.732,1.765c0,0.973,0.775,1.764,1.732,1.764h29.462c0.955,0,1.731-0.791,1.731-1.764\n            C60.267,65.282,59.488,64.491,58.534,64.491z M74.56,2.802h-9.965c-0.525,0-1.018,0.128-1.463,0.341\n            C62.103,1.266,60.202,0,58.022,0H29.579c-2.175,0-4.077,1.267-5.105,3.144c-0.446-0.214-0.938-0.342-1.463-0.342h-9.965\n            c-1.914,0-3.465,1.583-3.465,3.529v77.746c0,1.952,1.551,3.528,3.465,3.528H74.56c1.914,0,3.465-1.576,3.465-3.528V6.331\n            C78.022,4.385,76.474,2.802,74.56,2.802z M29.579,3.529h28.443c1.355,0,2.457,1.256,2.457,2.802c0,1.545-1.102,2.802-2.457,2.802\n            H29.579c-1.353,0-2.454-1.257-2.454-2.802C27.125,4.785,28.227,3.529,29.579,3.529z M71.095,80.548H16.511V9.859h6.5\n            c0.525,0,1.018-0.128,1.463-0.341c1.029,1.877,2.93,3.144,5.105,3.144h28.443c2.18,0,4.08-1.267,5.108-3.143\n            c0.446,0.212,0.938,0.34,1.464,0.34h6.5V80.548z\"/>\n        </g>\n      </svg>\n    </button></th>\n    <th><button (click)=\"this.removeUser();$event.stopPropagation()\" class=\"btn btn-warning\">\n      <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        width=\"30px\" height=\"20px\" viewBox=\"0 0 459 459\" fill=\"#fff\" \n        style=\"enable-background:new 0 0 459 459;\" xml:space=\"preserve\">\n        <g>\n          <path d=\"M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5\n            H51v51h357V25.5z\"/>\n        </g>\n      </svg> \n    </button></th>\n    <th>\n      <app-user-modal [user]=\"user\"></app-user-modal>\n    </th>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_window_ref__WEBPACK_IMPORTED_MODULE_2__["WindowRef"]])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/user-modal/user-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-modal/user-modal.component.ts ***!
  \****************************************************/
/*! exports provided: UserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalComponent", function() { return UserModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var UserModalComponent = /** @class */ (function () {
    function UserModalComponent(modalService) {
        this.modalService = modalService;
    }
    UserModalComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    UserModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-modal',
            template: "\n  <ng-template #content let-modal>\n    <div class=\"p-3\">\n      {{ user.firstName }} {{ user.lastName }} age: {{ user.dateOfBirth | age }}\n    </div>\n  </ng-template>\n  <button class=\"btn btn-info\" (click)=\"open(content);$event.stopPropagation()\">\n    <svg width=\"30px\" height=\"20px\" fill=\"#fff\" viewBox=\"0 0 480 480\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"m448 64v16c8.835938 0 16 7.164062 16 16v240h-448v-240c0-8.835938 7.164062-16 16-16v-16c-17.671875 0-32 14.328125-32 32v272c0 17.671875 14.328125 32 32 32h157.246094l-19.199219 64h-18.046875v16h176v-16h-18.046875l-19.199219-64h157.246094c17.671875 0 32-14.328125 32-32v-272c0-17.671875-14.328125-32-32-32zm-154.753906 400h-106.492188l19.199219-64h68.09375zm170.753906-96c0 8.835938-7.164062 16-16 16h-416c-8.835938 0-16-7.164062-16-16v-16h448zm0 0\"/>\n      <path d=\"m64 32c0-8.835938 7.164062-16 16-16h320c8.835938 0 16 7.164062 16 16v288h16v-288c0-17.671875-14.328125-32-32-32h-320c-17.671875 0-32 14.328125-32 32v288h16zm0 0\"/><path d=\"m80 32h16v16h-16zm0 0\"/><path d=\"m112 32h16v16h-16zm0 0\"/>\n      <path d=\"m144 32h16v16h-16zm0 0\"/>\n      <path d=\"m125.191406 263.496094 128 48c.089844 0 .191406 0 .28125.046875.8125.285156 1.664063.441406 2.527344.457031 1.105469-.023438 2.195312-.277344 3.199219-.742188.128906-.058593.28125 0 .410156-.097656l96-48c2.699219-1.363281 4.398437-4.136718 4.390625-7.160156v-96c-.011719-.539062-.082031-1.074219-.207031-1.601562 0-.085938 0-.183594 0-.269532-.269531-1.027344-.738281-1.988281-1.378907-2.832031-.0625-.082031-.070312-.191406-.132812-.28125l-64-80c-2.355469-2.945313-6.449219-3.847656-9.824219-2.160156l-160 80c-2.722656 1.34375-4.445312 4.109375-4.457031 7.144531v96c-.003906 3.335938 2.066406 6.324219 5.191406 7.496094zm51.144532 1.601562v-46.890625l16 6v46.921875zm167.664062-14.042968-80 40v-78.109376l80-40zm-58.207031-161.007813 53.773437 67.199219-81.359375 40.683594-53.773437-67.203126zm-149.792969 74.898437 53.792969-26.898437 58.207031 72.761719v81.648437l-39.664062-14.855469v-58.9375c0-3.335937-2.070313-6.316406-5.191407-7.488281l-32-12c-2.457031-.921875-5.207031-.578125-7.363281.914063-2.15625 1.496094-3.445312 3.949218-3.445312 6.574218v52.921876l-24.335938-9.128907zm0 0\"/>\n      <path d=\"m80 288v24c0 4.417969 3.582031 8 8 8h24v-16h-16v-16zm0 0\"/>\n      <path d=\"m112 64h-24c-4.417969 0-8 3.582031-8 8v24h16v-16h16zm0 0\"/>\n      <path d=\"m384 304h-16v16h24c4.417969 0 8-3.582031 8-8v-24h-16zm0 0\"/>\n      <path d=\"m400 72c0-4.417969-3.582031-8-8-8h-24v16h16v16h16zm0 0\"/>\n    </svg>\n  </button>\n  ",
            inputs: [
                'user'
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], UserModalComponent);
    return UserModalComponent;
}());



/***/ }),

/***/ "./src/app/users-list/users-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users-list/users-list.component.ts ***!
  \****************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../window.ref */ "./src/app/window.ref.ts");
/* harmony import */ var _csv_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../csv.ref */ "./src/app/csv.ref.ts");




var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(winRef, Csv) {
        this.winRef = winRef;
        this.Csv = Csv;
        this.checkedItems = [];
        this.page = 1;
        this.pageSize = 10;
    }
    UsersListComponent.prototype.getUsers = function () {
        return this.winRef.getUsers();
    };
    UsersListComponent.prototype.getLenght = function () {
        return this.winRef.getUsers().length;
    };
    /**
     * Toggles the param isChecked on the user item
     * @param id
     */
    UsersListComponent.prototype.toggleCheck = function (id) {
        var user = this.winRef.getUsers().filter(function (user) {
            return user.id === id;
        })[0];
        user.isChecked = !(user.isChecked !== 'undefined' && user.isChecked == true);
    };
    /**
     * Updates the number of the checked items
     */
    UsersListComponent.prototype.updateCheckedItems = function () {
        var checkedUsers = this.winRef.getUsers().filter(function (user) {
            return typeof user.isChecked !== 'undefined' && user.isChecked == true;
        });
        this.checkedItems = checkedUsers;
    };
    /**
     * Removes the selected items from the list
     *
     * @TODO The implementation doesn't smell good, better find a way to improve it
     */
    UsersListComponent.prototype.removeChecked = function () {
        var _this = this;
        var userIds = this.checkedItems.map(function (user) {
            return user.id;
        });
        var keys = [];
        this.winRef.getUsers().forEach(function (user, key) {
            if (userIds.includes(user.id)) {
                keys.push(key);
            }
        });
        var deleteOffset = 0;
        keys.forEach(function (key) {
            _this.winRef.getUsers().splice(key - deleteOffset, 1);
            deleteOffset++;
        });
        this.checkedItems = [];
    };
    /**
     * Downloads the selected options as csv
     */
    UsersListComponent.prototype.getCsv = function () {
        var _this = this;
        var headers = {
            id: 'id',
            firstName: "firstName",
            lastName: "lastName",
            email: "email",
            country: "country",
            dateOfBirth: "dateOfBirth"
        };
        this.checkedItems.forEach(function (user) {
            _this.toggleCheck(user.id);
        });
        this.Csv.exportCSVFile(headers, this.checkedItems, 'Users');
        this.checkedItems = [];
    };
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: "\n    <div class=\"main-block text-center\">\n      <button routerLink=\"/\" class=\"btn btn-primary\">Go To Landing</button>\n      <div class=\"mt-2 text-left\">\n        <button class=\"btn btn-danger\" [disabled]=\"checkedItems.length == 0\" (click)=\"this.removeChecked()\">Delete</button>\n        <button class=\"btn btn-success ml-1\" [disabled]=\"checkedItems.length == 0\" (click)=\"this.getCsv()\">Download</button>\n      </div>\n      <div class=\"mt-1 text-left\" *ngIf=\"this.checkedItems.length > 0\">\n        <span>Selected {{ this.checkedItems.length }}</span>\n      </div>  \n      <table *ngIf=\"this.getUsers()\" class=\"mt-4 text-left mb-4 users-table\" style=\"width: 100%\">\n        <tr>\n          <th class=\"py-2 text-primary\"><strong>Check</strong></th>\n          <th class=\"py-2 text-primary\"><strong>Email</strong></th>\n          <th class=\"py-2 text-primary\"><strong>First Name</strong></th>\n          <th class=\"py-2 text-primary\"><strong>Last Name</strong></th>\n          <th class=\"py-2 text-primary\"><strong>Country</strong></th>\n          <th class=\"py-2 text-primary\"><strong>Date Of Birth</strong></th>\n          <th class=\"py-2 text-primary\"><strong>Details</strong></th>\n          <th class=\"py-2 text-primary\"><strong>Delete</strong></th>\n          <th class=\"py-2 text-primary\"><strong>Modal</strong></th>\n        </tr>\n        <tr app-user-item *ngFor=\"let user of this.getUsers() | slice :(page - 1) * pageSize :pageSize * page\" \n          [user]=\"user\"\n          (click)=\"this.toggleCheck(user.id);this.updateCheckedItems()\"></tr>\n      </table>\n      <ngb-pagination *ngIf=\"this.getUsers()\" [collectionSize]=\"this.getUsers().length\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n    </div>\n  ",
            styles: ["\n      .users-table tr:nth-of-type(even) {\n        background-color: #07152f;\n      }\n      .users-table tr:not(:first-of-type):hover {\n        background-color: #5077ca;\n        cursor: pointer;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_window_ref__WEBPACK_IMPORTED_MODULE_2__["WindowRef"],
            _csv_ref__WEBPACK_IMPORTED_MODULE_3__["Csv"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/window.ref.ts":
/*!*******************************!*\
  !*** ./src/app/window.ref.ts ***!
  \*******************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef(http) {
        this.http = http;
        this.isLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](typeof _window().users !== 'undefined');
        this.getUsers();
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.prototype.getUsers = function () {
        var _this = this;
        if (typeof _window().users === 'undefined') {
            // The link is generated in myjson.com
            // To generate a new link, create an api in the website
            // TODO Find a better way to save the response json in a global available space
            this.http.get('https://api.myjson.com/bins/9ceb6')
                .subscribe(function (data) {
                _this.isLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
                return _window().users = data;
            });
        }
        else {
            return _window().users;
        }
    };
    WindowRef = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WindowRef);
    return WindowRef;
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

module.exports = __webpack_require__(/*! C:\Users\niXin\Desktop\n2go\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map