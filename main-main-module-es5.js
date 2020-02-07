function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/day-manager/day-manager.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/day-manager/day-manager.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainContainersDayManagerDayManagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card border-primary\">\n    <div class=\"card-header\">\n        {{ day?.caption }} Settings \n    </div>\n    <div class=\"card-body text-primary\">        \n        <div class=\"card-text pr-3\">\n            <form novalidate [formGroup]=\"dayForm\">\n                <div class=\"form-group row\">\n                <label for=\"dayCaptionCtrl\" class=\"col-sm-2\">Day</label>\n                    <input formControlName=\"dayCaption\" #dayCaptionInputRef type=\"text\" class=\"form-control col-sm-10\" id=\"dayCaptionCtrl\"                        \n                        aria-describedby=\"dayCaptionHelp\"/>\n                    <small class=\"col-sm-2\"></small>\n                    <small id=\"dayCaptionHelp\" class=\"form-text text-muted col-sm-10\">Enter the name of the day</small>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-sm-10\">\n                        <button type=\"submit\" class=\"btn btn-primary\"\n                            [disabled]=\"!dayForm.valid\">\n                          Save\n                        </button>\n                    </div>\n                  </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/main-shell/main-shell.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/main-shell/main-shell.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainContainersMainShellMainShellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-2\">\n        <div *ngIf=\"days$ | async as days\" class=\"list-group\">\n            <a *ngFor=\"let day of days\" class=\"list-group-item list-group-item-action p-1 px-3\"\n                [ngClass]=\"{ active: day.id == dayId }\" (click)=\"selectDay(day.id)\">\n                <div class=\"d-flex w-100 justify-content-between\">\n                    <strong class=\"mb-1\">{{day.caption}}</strong>\n                    <small>100%</small>\n                </div>\n            </a>\n        </div>\n    </div>\n    <div *ngIf=\"dayId\"\n        class=\"col-4\">\n        <rg-day-manager></rg-day-manager>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/main/containers/day-manager/day-manager.component.sass":
  /*!************************************************************************!*\
    !*** ./src/app/main/containers/day-manager/day-manager.component.sass ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainContainersDayManagerDayManagerComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9kYXktbWFuYWdlci9kYXktbWFuYWdlci5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/containers/day-manager/day-manager.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/containers/day-manager/day-manager.component.ts ***!
    \**********************************************************************/

  /*! exports provided: DayManagerComponent */

  /***/
  function srcAppMainContainersDayManagerDayManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayManagerComponent", function () {
      return DayManagerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_main_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../state/main.reducer */
    "./src/app/main/state/main.reducer.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DayManagerComponent =
    /*#__PURE__*/
    function () {
      function DayManagerComponent(store, fb) {
        _classCallCheck(this, DayManagerComponent);

        this.store = store;
        this.fb = fb;
        this.componentIsActive = true;
      }

      _createClass(DayManagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_state_main_reducer__WEBPACK_IMPORTED_MODULE_4__["getSelectedDay"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () {
            return _this.componentIsActive;
          })).subscribe(function (day) {
            _this.day = day;

            _this.reinitForm();
          });
        }
      }, {
        key: "reinitForm",
        value: function reinitForm() {
          this.dayForm = this.fb.group({
            dayCaption: [this.day.caption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.dayCaptionInputRef.nativeElement.focus();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.componentIsActive = false;
        }
      }]);

      return DayManagerComponent;
    }();

    DayManagerComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dayCaptionInputRef', {
      static: true
    })], DayManagerComponent.prototype, "dayCaptionInputRef", void 0);
    DayManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'rg-day-manager',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day-manager.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/day-manager/day-manager.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day-manager.component.sass */
      "./src/app/main/containers/day-manager/day-manager.component.sass")).default]
    })], DayManagerComponent);
    /***/
  },

  /***/
  "./src/app/main/containers/main-shell/main-shell.component.sass":
  /*!**********************************************************************!*\
    !*** ./src/app/main/containers/main-shell/main-shell.component.sass ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainContainersMainShellMainShellComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFpbmVycy9tYWluLXNoZWxsL21haW4tc2hlbGwuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/containers/main-shell/main-shell.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/containers/main-shell/main-shell.component.ts ***!
    \********************************************************************/

  /*! exports provided: MainShellComponent */

  /***/
  function srcAppMainContainersMainShellMainShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainShellComponent", function () {
      return MainShellComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_main_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../state/main.actions */
    "./src/app/main/state/main.actions.ts");
    /* harmony import */


    var _state_main_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../state/main.reducer */
    "./src/app/main/state/main.reducer.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MainShellComponent =
    /*#__PURE__*/
    function () {
      function MainShellComponent(store) {
        _classCallCheck(this, MainShellComponent);

        this.store = store;
        this.componentIsActive = true;
      }

      _createClass(MainShellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          /* this.store.pipe(
            select(fromMain.getDays),
            takeWhile(() => this.componentIsActive))
              .subscribe((days: RationDay[]) => this.days = days);
          */
          this.days$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_main_reducer__WEBPACK_IMPORTED_MODULE_4__["getDays"]));
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_main_reducer__WEBPACK_IMPORTED_MODULE_4__["getSelectedDayId"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () {
            return _this2.componentIsActive;
          })).subscribe(function (day) {
            return _this2.dayId = day;
          });
          this.store.dispatch(new _state_main_actions__WEBPACK_IMPORTED_MODULE_3__["Load"]());
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.componentIsActive = false;
        }
      }, {
        key: "selectDay",
        value: function selectDay(dayId) {// this.store.dispatch(new daysActions.DaySelected(dayId));
        }
      }]);

      return MainShellComponent;
    }();

    MainShellComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    MainShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'rg-main-shell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-shell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/containers/main-shell/main-shell.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-shell.component.sass */
      "./src/app/main/containers/main-shell/main-shell.component.sass")).default]
    })], MainShellComponent);
    /***/
  },

  /***/
  "./src/app/main/days.service.ts":
  /*!**************************************!*\
    !*** ./src/app/main/days.service.ts ***!
    \**************************************/

  /*! exports provided: DaysService */

  /***/
  function srcAppMainDaysServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaysService", function () {
      return DaysService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");

    var DaysService =
    /*#__PURE__*/
    function () {
      function DaysService(http) {
        _classCallCheck(this, DaysService);

        this.http = http;
        this.rationDaysUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'rationdays/';
      }

      _createClass(DaysService, [{
        key: "getDays",
        value: function getDays() {
          return this.http.get(this.rationDaysUrl);
        }
      }]);

      return DaysService;
    }();

    DaysService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DaysService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DaysService);
    /***/
  },

  /***/
  "./src/app/main/main-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MainRoutingModule */

  /***/
  function srcAppMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
      return MainRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _containers_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers/main-shell/main-shell.component */
    "./src/app/main/containers/main-shell/main-shell.component.ts");

    var routes = [{
      path: '',
      component: _containers_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_3__["MainShellComponent"]
    }];

    var MainRoutingModule = function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    };

    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MainRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _containers_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers/main-shell/main-shell.component */
    "./src/app/main/containers/main-shell/main-shell.component.ts");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/main/main-routing.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_main_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./state/main.reducer */
    "./src/app/main/state/main.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _state_main_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./state/main.effects */
    "./src/app/main/state/main.effects.ts");
    /* harmony import */


    var _days_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./days.service */
    "./src/app/main/days.service.ts");
    /* harmony import */


    var _containers_day_manager_day_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./containers/day-manager/day-manager.component */
    "./src/app/main/containers/day-manager/day-manager.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_containers_main_shell_main_shell_component__WEBPACK_IMPORTED_MODULE_3__["MainShellComponent"], _containers_day_manager_day_manager_component__WEBPACK_IMPORTED_MODULE_10__["DayManagerComponent"]],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('main', _state_main_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_state_main_effects__WEBPACK_IMPORTED_MODULE_8__["MainEffects"]])],
      providers: [_days_service__WEBPACK_IMPORTED_MODULE_9__["DaysService"]],
      bootstrap: []
    })], MainModule);
    /***/
  },

  /***/
  "./src/app/main/state/main.actions.ts":
  /*!********************************************!*\
    !*** ./src/app/main/state/main.actions.ts ***!
    \********************************************/

  /*! exports provided: MainActionTypes, Load, LoadSuccess, LoadFailed, DaySelected */

  /***/
  function srcAppMainStateMainActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainActionTypes", function () {
      return MainActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Load", function () {
      return Load;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadSuccess", function () {
      return LoadSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadFailed", function () {
      return LoadFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaySelected", function () {
      return DaySelected;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MainActionTypes;

    (function (MainActionTypes) {
      MainActionTypes["DaysLoad"] = "[Main] Days Load";
      MainActionTypes["DaysLoadSuccess"] = "[Main] Days LoadSuccess";
      MainActionTypes["DaysLoadFailed"] = "[Main] Days LoadFailed";
      MainActionTypes["DaySelected"] = "[Main] Days Selected";
    })(MainActionTypes || (MainActionTypes = {}));

    var Load = function Load() {
      _classCallCheck(this, Load);

      this.type = MainActionTypes.DaysLoad;
    };

    var LoadSuccess = function LoadSuccess(payload) {
      _classCallCheck(this, LoadSuccess);

      this.payload = payload;
      this.type = MainActionTypes.DaysLoadSuccess;
    };

    var LoadFailed = function LoadFailed() {
      _classCallCheck(this, LoadFailed);

      this.type = MainActionTypes.DaysLoadFailed;
    };

    var DaySelected = function DaySelected(payload) {
      _classCallCheck(this, DaySelected);

      this.payload = payload;
      this.type = MainActionTypes.DaySelected;
    };
    /***/

  },

  /***/
  "./src/app/main/state/main.effects.ts":
  /*!********************************************!*\
    !*** ./src/app/main/state/main.effects.ts ***!
    \********************************************/

  /*! exports provided: MainEffects */

  /***/
  function srcAppMainStateMainEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainEffects", function () {
      return MainEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _days_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../days.service */
    "./src/app/main/days.service.ts");
    /* harmony import */


    var _main_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main.actions */
    "./src/app/main/state/main.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MainEffects = function MainEffects(actions$, daysService) {
      var _this3 = this;

      _classCallCheck(this, MainEffects);

      this.actions$ = actions$;
      this.daysService = daysService;
      this.loadDays$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_main_actions__WEBPACK_IMPORTED_MODULE_4__["MainActionTypes"].DaysLoad), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
        return _this3.daysService.getDays().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (days) {
          return new _main_actions__WEBPACK_IMPORTED_MODULE_4__["LoadSuccess"](days);
        }));
      }));
    };

    MainEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _days_service__WEBPACK_IMPORTED_MODULE_3__["DaysService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], MainEffects.prototype, "loadDays$", void 0);
    MainEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MainEffects);
    /***/
  },

  /***/
  "./src/app/main/state/main.reducer.ts":
  /*!********************************************!*\
    !*** ./src/app/main/state/main.reducer.ts ***!
    \********************************************/

  /*! exports provided: getDays, getSelectedDayId, getSelectedDay, reducer */

  /***/
  function srcAppMainStateMainReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDays", function () {
      return getDays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelectedDayId", function () {
      return getSelectedDayId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSelectedDay", function () {
      return getSelectedDay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _main_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main.actions */
    "./src/app/main/state/main.actions.ts");

    var initialState = {
      days: [],
      selectedDay: null
    }; // selectors

    var getMainFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('main');
    var getDays = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMainFeatureState, function (state) {
      return state.days;
    });
    var getSelectedDayId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMainFeatureState, function (state) {
      return state.selectedDay;
    });
    var getSelectedDay = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getMainFeatureState, getSelectedDayId, function (state, dayId) {
      return dayId ? state.days.find(function (d) {
        return d.id === dayId;
      }) : null;
    }); // reducer

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _main_actions__WEBPACK_IMPORTED_MODULE_2__["MainActionTypes"].DaysLoadSuccess:
          {
            var result = Object.assign({}, state, {
              days: action.payload
            });
            return result;
          }

        case _main_actions__WEBPACK_IMPORTED_MODULE_2__["MainActionTypes"].DaySelected:
          {
            var _result = Object.assign({}, state, {
              selectedDay: action.payload
            });

            return _result;
          }

        default:
          return state;
      }
    }
    /***/

  }
}]);
//# sourceMappingURL=main-main-module-es5.js.map