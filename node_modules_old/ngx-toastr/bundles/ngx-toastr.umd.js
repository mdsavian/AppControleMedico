(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('tslib'), require('@angular/platform-browser'), require('@angular/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-toastr', ['exports', '@angular/core', 'rxjs', 'tslib', '@angular/platform-browser', '@angular/animations', '@angular/common'], factory) :
    (factory((global['ngx-toastr'] = {}),global.ng.core,null,global.tslib,global.ng.platformBrowser,global.ng.animations,global.ng.common));
}(this, (function (exports,core,rxjs,tslib_1,platformBrowser,animations,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToastContainerDirective = (function () {
        function ToastContainerDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        ToastContainerDirective.prototype.getContainerElement = /**
         * @return {?}
         */
            function () {
                return this.el.nativeElement;
            };
        ToastContainerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[toastContainer]',
                        exportAs: 'toastContainer',
                    },] },
        ];
        /** @nocollapse */
        ToastContainerDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        return ToastContainerDirective;
    }());
    var ToastContainerModule = (function () {
        function ToastContainerModule() {
        }
        ToastContainerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ToastContainerDirective],
                        exports: [ToastContainerDirective],
                    },] },
        ];
        return ToastContainerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Everything a toast needs to launch
     */
    var /**
     * Everything a toast needs to launch
     */ ToastPackage = (function () {
        function ToastPackage(toastId, config, message, title, toastType, toastRef) {
            var _this = this;
            this.toastId = toastId;
            this.config = config;
            this.message = message;
            this.title = title;
            this.toastType = toastType;
            this.toastRef = toastRef;
            this._onTap = new rxjs.Subject();
            this._onAction = new rxjs.Subject();
            this.toastRef.afterClosed().subscribe(function () {
                _this._onAction.complete();
                _this._onTap.complete();
            });
        }
        /** Fired on click */
        /**
         * Fired on click
         * @return {?}
         */
        ToastPackage.prototype.triggerTap = /**
         * Fired on click
         * @return {?}
         */
            function () {
                this._onTap.next();
                if (this.config.tapToDismiss) {
                    this._onTap.complete();
                }
            };
        /**
         * @return {?}
         */
        ToastPackage.prototype.onTap = /**
         * @return {?}
         */
            function () {
                return this._onTap.asObservable();
            };
        /** available for use in custom toast */
        /**
         * available for use in custom toast
         * @param {?=} action
         * @return {?}
         */
        ToastPackage.prototype.triggerAction = /**
         * available for use in custom toast
         * @param {?=} action
         * @return {?}
         */
            function (action) {
                this._onAction.next(action);
            };
        /**
         * @return {?}
         */
        ToastPackage.prototype.onAction = /**
         * @return {?}
         */
            function () {
                return this._onAction.asObservable();
            };
        return ToastPackage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */
    var /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */ ComponentPortal = (function () {
        function ComponentPortal(component, injector) {
            this.component = component;
            this.injector = injector;
        }
        /** Attach this portal to a host. */
        /**
         * Attach this portal to a host.
         * @param {?} host
         * @param {?} newestOnTop
         * @return {?}
         */
        ComponentPortal.prototype.attach = /**
         * Attach this portal to a host.
         * @param {?} host
         * @param {?} newestOnTop
         * @return {?}
         */
            function (host, newestOnTop) {
                this._attachedHost = host;
                return host.attach(this, newestOnTop);
            };
        /** Detach this portal from its host */
        /**
         * Detach this portal from its host
         * @return {?}
         */
        ComponentPortal.prototype.detach = /**
         * Detach this portal from its host
         * @return {?}
         */
            function () {
                var /** @type {?} */ host = this._attachedHost;
                if (host) {
                    this._attachedHost = undefined;
                    return host.detach();
                }
            };
        Object.defineProperty(ComponentPortal.prototype, "isAttached", {
            /** Whether this portal is attached to a host. */
            get: /**
             * Whether this portal is attached to a host.
             * @return {?}
             */ function () {
                return this._attachedHost != null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the PortalHost reference without performing `attach()`. This is used directly by
         * the PortalHost when it is performing an `attach()` or `detach()`.
         */
        /**
         * Sets the PortalHost reference without performing `attach()`. This is used directly by
         * the PortalHost when it is performing an `attach()` or `detach()`.
         * @param {?=} host
         * @return {?}
         */
        ComponentPortal.prototype.setAttachedHost = /**
         * Sets the PortalHost reference without performing `attach()`. This is used directly by
         * the PortalHost when it is performing an `attach()` or `detach()`.
         * @param {?=} host
         * @return {?}
         */
            function (host) {
                this._attachedHost = host;
            };
        return ComponentPortal;
    }());
    /**
     * Partial implementation of PortalHost that only deals with attaching a
     * ComponentPortal
     * @abstract
     */
    var /**
     * Partial implementation of PortalHost that only deals with attaching a
     * ComponentPortal
     * @abstract
     */ BasePortalHost = (function () {
        function BasePortalHost() {
        }
        /**
         * @param {?} portal
         * @param {?} newestOnTop
         * @return {?}
         */
        BasePortalHost.prototype.attach = /**
         * @param {?} portal
         * @param {?} newestOnTop
         * @return {?}
         */
            function (portal, newestOnTop) {
                this._attachedPortal = portal;
                return this.attachComponentPortal(portal, newestOnTop);
            };
        /**
         * @return {?}
         */
        BasePortalHost.prototype.detach = /**
         * @return {?}
         */
            function () {
                if (this._attachedPortal) {
                    this._attachedPortal.setAttachedHost();
                }
                this._attachedPortal = undefined;
                if (this._disposeFn) {
                    this._disposeFn();
                    this._disposeFn = undefined;
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BasePortalHost.prototype.setDisposeFn = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._disposeFn = fn;
            };
        return BasePortalHost;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     *
     * This is the only part of the portal core that directly touches the DOM.
     */
    var /**
     * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     *
     * This is the only part of the portal core that directly touches the DOM.
     */ DomPortalHost = (function (_super) {
        tslib_1.__extends(DomPortalHost, _super);
        function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
            var _this = _super.call(this) || this;
            _this._hostDomElement = _hostDomElement;
            _this._componentFactoryResolver = _componentFactoryResolver;
            _this._appRef = _appRef;
            return _this;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         */
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @template T
         * @param {?} portal Portal to be attached
         * @param {?} newestOnTop
         * @return {?}
         */
        DomPortalHost.prototype.attachComponentPortal = /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @template T
         * @param {?} portal Portal to be attached
         * @param {?} newestOnTop
         * @return {?}
         */
            function (portal, newestOnTop) {
                var _this = this;
                var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
                var /** @type {?} */ componentRef;
                // If the portal specifies a ViewContainerRef, we will use that as the attachment point
                // for the component (in terms of Angular's component tree, not rendering).
                // When the ViewContainerRef is missing, we use the factory to create the component directly
                // and then manually attach the ChangeDetector for that component to the application (which
                // happens automatically when using a ViewContainer).
                componentRef = componentFactory.create(portal.injector);
                // When creating a component outside of a ViewContainer, we need to manually register
                // its ChangeDetector with the application. This API is unfortunately not yet published
                // in Angular core. The change detector must also be deregistered when the component
                // is destroyed to prevent memory leaks.
                this._appRef.attachView(componentRef.hostView);
                this.setDisposeFn(function () {
                    _this._appRef.detachView(componentRef.hostView);
                    componentRef.destroy();
                });
                // At this point the component has been instantiated, so we move it to the location in the DOM
                // where we want it to be rendered.
                if (newestOnTop) {
                    this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
                }
                else {
                    this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
                }
                return componentRef;
            };
        /**
         * Gets the root HTMLElement for an instantiated component.
         * @param {?} componentRef
         * @return {?}
         */
        DomPortalHost.prototype._getComponentRootNode = /**
         * Gets the root HTMLElement for an instantiated component.
         * @param {?} componentRef
         * @return {?}
         */
            function (componentRef) {
                return /** @type {?} */ (((componentRef.hostView)).rootNodes[0]);
            };
        return DomPortalHost;
    }(BasePortalHost));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */
    var /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */ OverlayRef = (function () {
        function OverlayRef(_portalHost) {
            this._portalHost = _portalHost;
        }
        /**
         * @param {?} portal
         * @param {?=} newestOnTop
         * @return {?}
         */
        OverlayRef.prototype.attach = /**
         * @param {?} portal
         * @param {?=} newestOnTop
         * @return {?}
         */
            function (portal, newestOnTop) {
                if (newestOnTop === void 0) {
                    newestOnTop = true;
                }
                return this._portalHost.attach(portal, newestOnTop);
            };
        /**
         * Detaches an overlay from a portal.
         * @returns Resolves when the overlay has been detached.
         */
        /**
         * Detaches an overlay from a portal.
         * @return {?} Resolves when the overlay has been detached.
         */
        OverlayRef.prototype.detach = /**
         * Detaches an overlay from a portal.
         * @return {?} Resolves when the overlay has been detached.
         */
            function () {
                return this._portalHost.detach();
            };
        return OverlayRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * The OverlayContainer is the container in which all overlays will load.
     * It should be provided in the root component to ensure it is properly shared.
     */
    var /**
     * The OverlayContainer is the container in which all overlays will load.
     * It should be provided in the root component to ensure it is properly shared.
     */ OverlayContainer = (function () {
        function OverlayContainer() {
        }
        /**
         * This method returns the overlay container element.  It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @returns the container element
         */
        /**
         * This method returns the overlay container element.  It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */
        OverlayContainer.prototype.getContainerElement = /**
         * This method returns the overlay container element.  It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */
            function () {
                if (!this._containerElement) {
                    this._createContainer();
                }
                return this._containerElement;
            };
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @return {?}
         */
        OverlayContainer.prototype._createContainer = /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @return {?}
         */
            function () {
                var /** @type {?} */ container = document.createElement('div');
                container.classList.add('overlay-container');
                document.body.appendChild(container);
                this._containerElement = container;
            };
        return OverlayContainer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
     */
    var Overlay = (function () {
        function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
            this._overlayContainer = _overlayContainer;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._paneElements = {};
        }
        /**
         * Creates an overlay.
         * @returns A reference to the created overlay.
         */
        /**
         * Creates an overlay.
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?} A reference to the created overlay.
         */
        Overlay.prototype.create = /**
         * Creates an overlay.
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?} A reference to the created overlay.
         */
            function (positionClass, overlayContainer) {
                // get existing pane if possible
                return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
            };
        /**
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?}
         */
        Overlay.prototype.getPaneElement = /**
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?}
         */
            function (positionClass, overlayContainer) {
                if (positionClass === void 0) {
                    positionClass = '';
                }
                if (!this._paneElements[positionClass]) {
                    this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
                }
                return this._paneElements[positionClass];
            };
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @param {?} positionClass
         * @param {?=} overlayContainer
         * @return {?} Newly-created pane element
         */
        Overlay.prototype._createPaneElement = /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @param {?} positionClass
         * @param {?=} overlayContainer
         * @return {?} Newly-created pane element
         */
            function (positionClass, overlayContainer) {
                var /** @type {?} */ pane = document.createElement('div');
                pane.id = 'toast-container';
                pane.classList.add(positionClass);
                pane.classList.add('toast-container');
                if (!overlayContainer) {
                    this._overlayContainer.getContainerElement().appendChild(pane);
                }
                else {
                    overlayContainer.getContainerElement().appendChild(pane);
                }
                return pane;
            };
        /**
         * Create a DomPortalHost into which the overlay content can be loaded.
         * @param {?} pane The DOM element to turn into a portal host.
         * @return {?} A portal host for the given DOM element.
         */
        Overlay.prototype._createPortalHost = /**
         * Create a DomPortalHost into which the overlay content can be loaded.
         * @param {?} pane The DOM element to turn into a portal host.
         * @return {?} A portal host for the given DOM element.
         */
            function (pane) {
                return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
            };
        /**
         * Creates an OverlayRef for an overlay in the given DOM element.
         * @param {?} pane DOM element for the overlay
         * @return {?}
         */
        Overlay.prototype._createOverlayRef = /**
         * Creates an OverlayRef for an overlay in the given DOM element.
         * @param {?} pane DOM element for the overlay
         * @return {?}
         */
            function (pane) {
                return new OverlayRef(this._createPortalHost(pane));
            };
        Overlay.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        Overlay.ctorParameters = function () {
            return [
                { type: OverlayContainer, },
                { type: core.ComponentFactoryResolver, },
                { type: core.ApplicationRef, },
            ];
        };
        return Overlay;
    }());
    /**
     * Providers for Overlay and its related injectables.
     */
    var /** @type {?} */ OVERLAY_PROVIDERS = [
        Overlay,
        OverlayContainer,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Reference to a toast opened via the Toastr service.
     * @template T
     */
    var /**
     * Reference to a toast opened via the Toastr service.
     * @template T
     */ ToastRef = (function () {
        function ToastRef(_overlayRef) {
            this._overlayRef = _overlayRef;
            /**
             * Subject for notifying the user that the toast has finished closing.
             */
            this._afterClosed = new rxjs.Subject();
            /**
             * triggered when toast is activated
             */
            this._activate = new rxjs.Subject();
            /**
             * notifies the toast that it should close before the timeout
             */
            this._manualClose = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        ToastRef.prototype.manualClose = /**
         * @return {?}
         */
            function () {
                this._manualClose.next();
                this._manualClose.complete();
            };
        /**
         * @return {?}
         */
        ToastRef.prototype.manualClosed = /**
         * @return {?}
         */
            function () {
                return this._manualClose.asObservable();
            };
        /**
         * Close the toast.
         */
        /**
         * Close the toast.
         * @return {?}
         */
        ToastRef.prototype.close = /**
         * Close the toast.
         * @return {?}
         */
            function () {
                this._overlayRef.detach();
                this._afterClosed.next();
                this._afterClosed.complete();
                this._manualClose.complete();
                this._activate.complete();
            };
        /** Gets an observable that is notified when the toast is finished closing. */
        /**
         * Gets an observable that is notified when the toast is finished closing.
         * @return {?}
         */
        ToastRef.prototype.afterClosed = /**
         * Gets an observable that is notified when the toast is finished closing.
         * @return {?}
         */
            function () {
                return this._afterClosed.asObservable();
            };
        /**
         * @return {?}
         */
        ToastRef.prototype.isInactive = /**
         * @return {?}
         */
            function () {
                return this._activate.isStopped;
            };
        /**
         * @return {?}
         */
        ToastRef.prototype.activate = /**
         * @return {?}
         */
            function () {
                this._activate.next();
                this._activate.complete();
            };
        /** Gets an observable that is notified when the toast has started opening. */
        /**
         * Gets an observable that is notified when the toast has started opening.
         * @return {?}
         */
        ToastRef.prototype.afterActivate = /**
         * Gets an observable that is notified when the toast has started opening.
         * @return {?}
         */
            function () {
                return this._activate.asObservable();
            };
        return ToastRef;
    }());
    /**
     * Custom injector type specifically for instantiating components with a toast.
     */
    var /**
     * Custom injector type specifically for instantiating components with a toast.
     */ ToastInjector = (function () {
        function ToastInjector(_toastPackage, _parentInjector) {
            this._toastPackage = _toastPackage;
            this._parentInjector = _parentInjector;
        }
        /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */
        ToastInjector.prototype.get = /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */
            function (token, notFoundValue) {
                if (token === ToastPackage && this._toastPackage) {
                    return this._toastPackage;
                }
                return this._parentInjector.get(token, notFoundValue);
            };
        return ToastInjector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ TOAST_CONFIG = new core.InjectionToken('ToastConfig');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToastrService = (function () {
        function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
            this.overlay = overlay;
            this._injector = _injector;
            this.sanitizer = sanitizer;
            this.ngZone = ngZone;
            this.currentlyActive = 0;
            this.toasts = [];
            this.index = 0;
            var /** @type {?} */ defaultConfig = new token.defaults;
            this.toastrConfig = tslib_1.__assign({}, defaultConfig, token.config);
            this.toastrConfig.iconClasses = tslib_1.__assign({}, defaultConfig.iconClasses, token.config.iconClasses);
        }
        /** show toast */
        /**
         * show toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @param {?=} type
         * @return {?}
         */
        ToastrService.prototype.show = /**
         * show toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @param {?=} type
         * @return {?}
         */
            function (message, title, override, type) {
                if (override === void 0) {
                    override = {};
                }
                if (type === void 0) {
                    type = '';
                }
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show successful toast */
        /**
         * show successful toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.success = /**
         * show successful toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                var /** @type {?} */ type = this.toastrConfig.iconClasses.success || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show error toast */
        /**
         * show error toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.error = /**
         * show error toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                var /** @type {?} */ type = this.toastrConfig.iconClasses.error || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show info toast */
        /**
         * show info toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.info = /**
         * show info toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                var /** @type {?} */ type = this.toastrConfig.iconClasses.info || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show warning toast */
        /**
         * show warning toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.warning = /**
         * show warning toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                var /** @type {?} */ type = this.toastrConfig.iconClasses.warning || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /**
         * Remove all or a single toast by id
         */
        /**
         * Remove all or a single toast by id
         * @param {?=} toastId
         * @return {?}
         */
        ToastrService.prototype.clear = /**
         * Remove all or a single toast by id
         * @param {?=} toastId
         * @return {?}
         */
            function (toastId) {
                try {
                    // Call every toastRef manualClose function
                    for (var _a = tslib_1.__values(this.toasts), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var toast = _b.value;
                        if (toastId !== undefined) {
                            if (toast.toastId === toastId) {
                                toast.toastRef.manualClose();
                                return;
                            }
                        }
                        else {
                            toast.toastRef.manualClose();
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        /**
         * Remove and destroy a single toast by id
         */
        /**
         * Remove and destroy a single toast by id
         * @param {?} toastId
         * @return {?}
         */
        ToastrService.prototype.remove = /**
         * Remove and destroy a single toast by id
         * @param {?} toastId
         * @return {?}
         */
            function (toastId) {
                var /** @type {?} */ found = this._findToast(toastId);
                if (!found) {
                    return false;
                }
                found.activeToast.toastRef.close();
                this.toasts.splice(found.index, 1);
                this.currentlyActive = this.currentlyActive - 1;
                if (!this.toastrConfig.maxOpened || !this.toasts.length) {
                    return false;
                }
                if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
                    var /** @type {?} */ p = this.toasts[this.currentlyActive].toastRef;
                    if (!p.isInactive()) {
                        this.currentlyActive = this.currentlyActive + 1;
                        p.activate();
                    }
                }
                return true;
            };
        /**
         * Determines if toast message is already shown
         */
        /**
         * Determines if toast message is already shown
         * @param {?} message
         * @return {?}
         */
        ToastrService.prototype.isDuplicate = /**
         * Determines if toast message is already shown
         * @param {?} message
         * @return {?}
         */
            function (message) {
                for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
                    if (this.toasts[i].message === message) {
                        return true;
                    }
                }
                return false;
            };
        /**
         * create a clone of global config and apply individual settings
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.applyConfig = /**
         * create a clone of global config and apply individual settings
         * @param {?=} override
         * @return {?}
         */
            function (override) {
                if (override === void 0) {
                    override = {};
                }
                return tslib_1.__assign({}, this.toastrConfig, override);
            };
        /**
         * Find toast object by id
         * @param {?} toastId
         * @return {?}
         */
        ToastrService.prototype._findToast = /**
         * Find toast object by id
         * @param {?} toastId
         * @return {?}
         */
            function (toastId) {
                for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
                    if (this.toasts[i].toastId === toastId) {
                        return { index: i, activeToast: this.toasts[i] };
                    }
                }
                return null;
            };
        /**
         * Determines the need to run inside angular's zone then builds the toast
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
        ToastrService.prototype._preBuildNotification = /**
         * Determines the need to run inside angular's zone then builds the toast
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
            function (toastType, message, title, config) {
                var _this = this;
                if (config.onActivateTick) {
                    return this.ngZone.run(function () { return _this._buildNotification(toastType, message, title, config); });
                }
                return this._buildNotification(toastType, message, title, config);
            };
        /**
         * Creates and attaches toast data to component
         * returns null if toast is duplicate and preventDuplicates == True
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
        ToastrService.prototype._buildNotification = /**
         * Creates and attaches toast data to component
         * returns null if toast is duplicate and preventDuplicates == True
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
            function (toastType, message, title, config) {
                var _this = this;
                if (!config.toastComponent) {
                    throw new Error('toastComponent required');
                }
                // max opened and auto dismiss = true
                if (message && this.toastrConfig.preventDuplicates && this.isDuplicate(message)) {
                    return null;
                }
                this.previousToastMessage = message;
                var /** @type {?} */ keepInactive = false;
                if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
                    keepInactive = true;
                    if (this.toastrConfig.autoDismiss) {
                        this.clear(this.toasts[this.toasts.length - 1].toastId);
                    }
                }
                var /** @type {?} */ overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
                this.index = this.index + 1;
                var /** @type {?} */ sanitizedMessage = message;
                if (message && config.enableHtml) {
                    sanitizedMessage = this.sanitizer.sanitize(core.SecurityContext.HTML, message);
                }
                var /** @type {?} */ toastRef = new ToastRef(overlayRef);
                var /** @type {?} */ toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
                var /** @type {?} */ toastInjector = new ToastInjector(toastPackage, this._injector);
                var /** @type {?} */ component = new ComponentPortal(config.toastComponent, toastInjector);
                var /** @type {?} */ portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
                toastRef.componentInstance = ((portal))._component;
                var /** @type {?} */ ins = {
                    toastId: this.index,
                    message: message || '',
                    toastRef: toastRef,
                    onShown: toastRef.afterActivate(),
                    onHidden: toastRef.afterClosed(),
                    onTap: toastPackage.onTap(),
                    onAction: toastPackage.onAction(),
                    portal: portal,
                };
                if (!keepInactive) {
                    setTimeout(function () {
                        ins.toastRef.activate();
                        _this.currentlyActive = _this.currentlyActive + 1;
                    });
                }
                this.toasts.push(ins);
                return ins;
            };
        ToastrService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        ToastrService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [TOAST_CONFIG,] },] },
                { type: Overlay, },
                { type: core.Injector, },
                { type: platformBrowser.DomSanitizer, },
                { type: core.NgZone, },
            ];
        };
        return ToastrService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Toast = (function () {
        function Toast(toastrService, toastPackage, ngZone) {
            var _this = this;
            this.toastrService = toastrService;
            this.toastPackage = toastPackage;
            this.ngZone = ngZone;
            /**
             * width of progress bar
             */
            this.width = -1;
            /**
             * a combination of toast type and options.toastClass
             */
            this.toastClasses = '';
            /**
             * controls animation
             */
            this.state = {
                value: 'inactive',
                params: {
                    easeTime: this.toastPackage.config.easeTime,
                    easing: 'ease-in',
                },
            };
            this.message = toastPackage.message;
            this.title = toastPackage.title;
            this.options = toastPackage.config;
            this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
            this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
                _this.activateToast();
            });
            this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
                _this.remove();
            });
        }
        /**
         * @return {?}
         */
        Toast.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.sub.unsubscribe();
                this.sub1.unsubscribe();
                clearInterval(this.intervalId);
                clearTimeout(this.timeout);
            };
        /**
         * activates toast and sets timeout
         */
        /**
         * activates toast and sets timeout
         * @return {?}
         */
        Toast.prototype.activateToast = /**
         * activates toast and sets timeout
         * @return {?}
         */
            function () {
                var _this = this;
                this.state = tslib_1.__assign({}, this.state, { value: 'active' });
                if (!this.options.disableTimeOut && this.options.timeOut) {
                    this.outsideTimeout(function () { return _this.remove(); }, this.options.timeOut);
                    this.hideTime = new Date().getTime() + this.options.timeOut;
                    if (this.options.progressBar) {
                        this.outsideInterval(function () { return _this.updateProgress(); }, 10);
                    }
                }
            };
        /**
         * updates progress bar width
         */
        /**
         * updates progress bar width
         * @return {?}
         */
        Toast.prototype.updateProgress = /**
         * updates progress bar width
         * @return {?}
         */
            function () {
                if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
                    return;
                }
                var /** @type {?} */ now = new Date().getTime();
                var /** @type {?} */ remaining = this.hideTime - now;
                this.width = (remaining / this.options.timeOut) * 100;
                if (this.options.progressAnimation === 'increasing') {
                    this.width = 100 - this.width;
                }
                if (this.width <= 0) {
                    this.width = 0;
                }
                if (this.width >= 100) {
                    this.width = 100;
                }
            };
        /**
         * tells toastrService to remove this toast after animation time
         */
        /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
        Toast.prototype.remove = /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.state.value === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.state = tslib_1.__assign({}, this.state, { value: 'removed' });
                this.outsideTimeout(function () {
                    return _this.toastrService.remove(_this.toastPackage.toastId);
                }, +this.toastPackage.config.easeTime);
            };
        /**
         * @return {?}
         */
        Toast.prototype.tapToast = /**
         * @return {?}
         */
            function () {
                if (this.state.value === 'removed') {
                    return;
                }
                this.toastPackage.triggerTap();
                if (this.options.tapToDismiss) {
                    this.remove();
                }
            };
        /**
         * @return {?}
         */
        Toast.prototype.stickAround = /**
         * @return {?}
         */
            function () {
                if (this.state.value === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.options.timeOut = 0;
                this.hideTime = 0;
                // disable progressBar
                clearInterval(this.intervalId);
                this.width = 0;
            };
        /**
         * @return {?}
         */
        Toast.prototype.delayedHideToast = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.options.disableTimeOut
                    || this.options.extendedTimeOut === 0
                    || this.state.value === 'removed') {
                    return;
                }
                this.outsideTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
                this.options.timeOut = this.options.extendedTimeOut;
                this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
                this.width = -1;
                if (this.options.progressBar) {
                    this.outsideInterval(function () { return _this.updateProgress(); }, 10);
                }
            };
        /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
        Toast.prototype.outsideTimeout = /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
            function (func, timeout) {
                var _this = this;
                if (this.ngZone) {
                    this.ngZone.runOutsideAngular(function () {
                        return _this.timeout = setTimeout(function () { return _this.runInsideAngular(func); }, timeout);
                    });
                }
                else {
                    this.timeout = setTimeout(function () { return func(); }, timeout);
                }
            };
        /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
        Toast.prototype.outsideInterval = /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
            function (func, timeout) {
                var _this = this;
                if (this.ngZone) {
                    this.ngZone.runOutsideAngular(function () {
                        return _this.intervalId = setInterval(function () { return _this.runInsideAngular(func); }, timeout);
                    });
                }
                else {
                    this.intervalId = setInterval(function () { return func(); }, timeout);
                }
            };
        /**
         * @param {?} func
         * @return {?}
         */
        Toast.prototype.runInsideAngular = /**
         * @param {?} func
         * @return {?}
         */
            function (func) {
                if (this.ngZone) {
                    this.ngZone.run(function () { return func(); });
                }
                else {
                    func();
                }
            };
        Toast.decorators = [
            { type: core.Component, args: [{
                        selector: '[toast-component]',
                        template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                        animations: [
                            animations.trigger('flyInOut', [
                                animations.state('inactive', animations.style({
                                    display: 'none',
                                    opacity: 0,
                                })),
                                animations.state('active', animations.style({})),
                                animations.state('removed', animations.style({ opacity: 0 })),
                                animations.transition('inactive => active', animations.animate('{{ easeTime }}ms {{ easing }}')),
                                animations.transition('active => removed', animations.animate('{{ easeTime }}ms {{ easing }}')),
                            ]),
                        ],
                        preserveWhitespaces: false,
                    },] },
        ];
        /** @nocollapse */
        Toast.ctorParameters = function () {
            return [
                { type: ToastrService, },
                { type: ToastPackage, },
                { type: core.NgZone, },
            ];
        };
        Toast.propDecorators = {
            "toastClasses": [{ type: core.HostBinding, args: ['class',] },],
            "state": [{ type: core.HostBinding, args: ['@flyInOut',] },],
            "tapToast": [{ type: core.HostListener, args: ['click',] },],
            "stickAround": [{ type: core.HostListener, args: ['mouseenter',] },],
            "delayedHideToast": [{ type: core.HostListener, args: ['mouseleave',] },],
        };
        return Toast;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DefaultGlobalConfig = (function () {
        function DefaultGlobalConfig() {
            // Global
            this.maxOpened = 0;
            this.autoDismiss = false;
            this.newestOnTop = true;
            this.preventDuplicates = false;
            this.iconClasses = {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning',
            };
            // Individual
            this.toastComponent = Toast;
            this.closeButton = false;
            this.timeOut = 5000;
            this.extendedTimeOut = 1000;
            this.enableHtml = false;
            this.progressBar = false;
            this.toastClass = 'toast';
            this.positionClass = 'toast-top-right';
            this.titleClass = 'toast-title';
            this.messageClass = 'toast-message';
            this.easing = 'ease-in';
            this.easeTime = 300;
            this.tapToDismiss = true;
            this.onActivateTick = false;
            this.progressAnimation = 'decreasing';
        }
        return DefaultGlobalConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToastrModule = (function () {
        function ToastrModule(parentModule) {
            if (parentModule) {
                throw new Error('ToastrModule is already loaded. It should only be imported in your application\'s main module.');
            }
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        ToastrModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                if (config === void 0) {
                    config = {};
                }
                return {
                    ngModule: ToastrModule,
                    providers: [
                        { provide: TOAST_CONFIG, useValue: { config: config, defaults: DefaultGlobalConfig } },
                        OverlayContainer,
                        Overlay,
                        ToastrService,
                    ],
                };
            };
        ToastrModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [Toast],
                        declarations: [Toast],
                        entryComponents: [Toast],
                    },] },
        ];
        /** @nocollapse */
        ToastrModule.ctorParameters = function () {
            return [
                { type: ToastrModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf },] },
            ];
        };
        return ToastrModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToastNoAnimation = (function () {
        function ToastNoAnimation(toastrService, toastPackage, appRef) {
            var _this = this;
            this.toastrService = toastrService;
            this.toastPackage = toastPackage;
            this.appRef = appRef;
            /**
             * width of progress bar
             */
            this.width = -1;
            /**
             * a combination of toast type and options.toastClass
             */
            this.toastClasses = '';
            /**
             * controls animation
             */
            this.state = 'inactive';
            this.message = toastPackage.message;
            this.title = toastPackage.title;
            this.options = toastPackage.config;
            this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
            this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
                _this.activateToast();
            });
            this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
                _this.remove();
            });
        }
        Object.defineProperty(ToastNoAnimation.prototype, "displayStyle", {
            get: /**
             * @return {?}
             */ function () {
                if (this.state === 'inactive') {
                    return 'none';
                }
                return 'inherit';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.sub.unsubscribe();
                this.sub1.unsubscribe();
                clearInterval(this.intervalId);
                clearTimeout(this.timeout);
            };
        /**
         * activates toast and sets timeout
         */
        /**
         * activates toast and sets timeout
         * @return {?}
         */
        ToastNoAnimation.prototype.activateToast = /**
         * activates toast and sets timeout
         * @return {?}
         */
            function () {
                var _this = this;
                this.state = 'active';
                if (!this.options.disableTimeOut && this.options.timeOut) {
                    this.timeout = setTimeout(function () {
                        _this.remove();
                    }, this.options.timeOut);
                    this.hideTime = new Date().getTime() + this.options.timeOut;
                    if (this.options.progressBar) {
                        this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
                    }
                }
                if (this.options.onActivateTick) {
                    this.appRef.tick();
                }
            };
        /**
         * updates progress bar width
         */
        /**
         * updates progress bar width
         * @return {?}
         */
        ToastNoAnimation.prototype.updateProgress = /**
         * updates progress bar width
         * @return {?}
         */
            function () {
                if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
                    return;
                }
                var /** @type {?} */ now = new Date().getTime();
                var /** @type {?} */ remaining = this.hideTime - now;
                this.width = remaining / this.options.timeOut * 100;
                if (this.options.progressAnimation === 'increasing') {
                    this.width = 100 - this.width;
                }
                if (this.width <= 0) {
                    this.width = 0;
                }
                if (this.width >= 100) {
                    this.width = 100;
                }
            };
        /**
         * tells toastrService to remove this toast after animation time
         */
        /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
        ToastNoAnimation.prototype.remove = /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.state === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.state = 'removed';
                this.timeout = setTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); });
            };
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.tapToast = /**
         * @return {?}
         */
            function () {
                if (this.state === 'removed') {
                    return;
                }
                this.toastPackage.triggerTap();
                if (this.options.tapToDismiss) {
                    this.remove();
                }
            };
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.stickAround = /**
         * @return {?}
         */
            function () {
                if (this.state === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.options.timeOut = 0;
                this.hideTime = 0;
                // disable progressBar
                clearInterval(this.intervalId);
                this.width = 0;
            };
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.delayedHideToast = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.options.disableTimeOut
                    || this.options.extendedTimeOut === 0
                    || this.state === 'removed') {
                    return;
                }
                this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
                this.options.timeOut = this.options.extendedTimeOut;
                this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
                this.width = -1;
                if (this.options.progressBar) {
                    this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
                }
            };
        ToastNoAnimation.decorators = [
            { type: core.Component, args: [{
                        selector: '[toast-component]',
                        template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                    },] },
        ];
        /** @nocollapse */
        ToastNoAnimation.ctorParameters = function () {
            return [
                { type: ToastrService, },
                { type: ToastPackage, },
                { type: core.ApplicationRef, },
            ];
        };
        ToastNoAnimation.propDecorators = {
            "toastClasses": [{ type: core.HostBinding, args: ['class',] },],
            "displayStyle": [{ type: core.HostBinding, args: ['style.display',] },],
            "tapToast": [{ type: core.HostListener, args: ['click',] },],
            "stickAround": [{ type: core.HostListener, args: ['mouseenter',] },],
            "delayedHideToast": [{ type: core.HostListener, args: ['mouseleave',] },],
        };
        return ToastNoAnimation;
    }());
    var ToastNoAnimationModule = (function () {
        function ToastNoAnimationModule() {
        }
        ToastNoAnimationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [ToastNoAnimation],
                        exports: [ToastNoAnimation],
                        entryComponents: [ToastNoAnimation],
                    },] },
        ];
        return ToastNoAnimationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ToastContainerDirective = ToastContainerDirective;
    exports.ToastContainerModule = ToastContainerModule;
    exports.Toast = Toast;
    exports.ToastrService = ToastrService;
    exports.ToastPackage = ToastPackage;
    exports.DefaultGlobalConfig = DefaultGlobalConfig;
    exports.ToastrModule = ToastrModule;
    exports.ToastRef = ToastRef;
    exports.ToastInjector = ToastInjector;
    exports.TOAST_CONFIG = TOAST_CONFIG;
    exports.ToastNoAnimation = ToastNoAnimation;
    exports.ToastNoAnimationModule = ToastNoAnimationModule;
    exports.ComponentPortal = ComponentPortal;
    exports.BasePortalHost = BasePortalHost;
    exports.Overlay = Overlay;
    exports.OVERLAY_PROVIDERS = OVERLAY_PROVIDERS;
    exports.OverlayContainer = OverlayContainer;
    exports.OverlayRef = OverlayRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0ci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3RyLWNvbmZpZy50cyIsIm5nOi8vbmd4LXRvYXN0ci9wb3J0YWwvcG9ydGFsLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3BvcnRhbC9kb20tcG9ydGFsLWhvc3QudHMiLCJuZzovL25neC10b2FzdHIvb3ZlcmxheS9vdmVybGF5LXJlZi50cyIsIm5nOi8vbmd4LXRvYXN0ci9vdmVybGF5L292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL292ZXJsYXkvb3ZlcmxheS50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3QtaW5qZWN0b3IudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0LXRva2VuLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdHIuc2VydmljZS50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3QuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci9kZWZhdWx0LWNvbmZpZy50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3RyLm1vZHVsZS50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3Qtbm9hbmltYXRpb24uY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG9hc3RDb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICd0b2FzdENvbnRhaW5lcicsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG4gIGdldENvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RDb250YWluZXJEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVG9hc3RDb250YWluZXJEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QtaW5qZWN0b3InO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGFuIGluZGl2aWR1YWwgdG9hc3QuXG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogZGlzYWJsZSBib3RoIHRpbWVPdXQgYW5kIGV4dGVuZGVkVGltZU91dFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZVRpbWVPdXQ6IGJvb2xlYW47XG4gIC8qKlxuICAqIHRvYXN0IHRpbWUgdG8gbGl2ZSBpbiBtaWxsaXNlY29uZHNcbiAgKiBkZWZhdWx0OiA1MDAwXG4gICovXG4gIHRpbWVPdXQ6IG51bWJlcjtcbiAgLyoqXG4gICogdG9hc3Qgc2hvdyBjbG9zZSBidXR0b25cbiAgKiBkZWZhdWx0OiBmYWxzZVxuICAqL1xuICBjbG9zZUJ1dHRvbjogYm9vbGVhbjtcbiAgLyoqXG4gICogdGltZSB0byBjbG9zZSBhZnRlciBhIHVzZXIgaG92ZXJzIG92ZXIgdG9hc3RcbiAgKiBkZWZhdWx0OiAxMDAwXG4gICAqL1xuICBleHRlbmRlZFRpbWVPdXQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIHNob3cgdG9hc3QgcHJvZ3Jlc3MgYmFyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBwcm9ncmVzc0JhcjogYm9vbGVhbjtcblxuICAvKipcbiAgICogY2hhbmdlcyB0b2FzdCBwcm9ncmVzcyBiYXIgYW5pbWF0aW9uXG4gICAqIGRlZmF1bHQ6IGRlY3JlYXNpbmdcbiAgICovXG4gIHByb2dyZXNzQW5pbWF0aW9uPzogJ2luY3JlYXNpbmcnIHwgJ2RlY3JlYXNpbmcnO1xuICAvKipcbiAgICogcmVuZGVyIGh0bWwgaW4gdG9hc3QgbWVzc2FnZSAocG9zc2libHkgdW5zYWZlKVxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZW5hYmxlSHRtbDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBjb21wb25lbnRcbiAgICogZGVmYXVsdDogdG9hc3RcbiAgICovXG4gIHRvYXN0Q2xhc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBjb250YWluZXJcbiAgICogZGVmYXVsdDogdG9hc3QtdG9wLXJpZ2h0XG4gICAqL1xuICBwb3NpdGlvbkNsYXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG8gdG9hc3QgdGl0bGVcbiAgICogZGVmYXVsdDogdG9hc3QtdGl0bGVcbiAgICovXG4gIHRpdGxlQ2xhc3M6IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0byB0b2FzdCB0aXRsZVxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxuICAgKi9cbiAgbWVzc2FnZUNsYXNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhbmltYXRpb24gZWFzaW5nIG9uIHRvYXN0XG4gICAqIGRlZmF1bHQ6IGVhc2UtaW5cbiAgICovXG4gIGVhc2luZzogc3RyaW5nO1xuICAvKipcbiAgICogYW5pbWF0aW9uIGVhc2UgdGltZSBvbiB0b2FzdFxuICAgKiBkZWZhdWx0OiAzMDBcbiAgICovXG4gIGVhc2VUaW1lOiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiBjbGlja2luZyBvbiB0b2FzdCBkaXNtaXNzZXMgaXRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgdGFwVG9EaXNtaXNzOiBib29sZWFuO1xuICAvKipcbiAgICogQW5ndWxhciB0b2FzdCBjb21wb25lbnQgdG8gYmUgc2hvd25cbiAgICogZGVmYXVsdDogVG9hc3RcbiAgICovXG4gIHRvYXN0Q29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XG4gIC8qKlxuICAgKiBIZWxwcyBzaG93IHRvYXN0IGZyb20gYSB3ZWJzb2NrZXQgb3IgZnJvbSBldmVudCBvdXRzaWRlIEFuZ3VsYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIG9uQWN0aXZhdGVUaWNrOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0ckljb25DbGFzc2VzIHtcbiAgZXJyb3I6IHN0cmluZztcbiAgaW5mbzogc3RyaW5nO1xuICBzdWNjZXNzOiBzdHJpbmc7XG4gIHdhcm5pbmc6IHN0cmluZztcbn1cblxuLyoqXG4gKiBHbG9iYWwgVG9hc3QgY29uZmlndXJhdGlvblxuICogSW5jbHVkZXMgYWxsIEluZGl2aWR1YWxDb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIG1heCB0b2FzdHMgb3BlbmVkLiBUb2FzdHMgd2lsbCBiZSBxdWV1ZWRcbiAgICogWmVybyBpcyB1bmxpbWl0ZWRcbiAgICogZGVmYXVsdDogMFxuICAgKi9cbiAgbWF4T3BlbmVkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBkaXNtaXNzIGN1cnJlbnQgdG9hc3Qgd2hlbiBtYXggaXMgcmVhY2hlZFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW47XG4gIGljb25DbGFzc2VzOiBQYXJ0aWFsPFRvYXN0ckljb25DbGFzc2VzPjtcbiAgLyoqXG4gICAqIE5ldyB0b2FzdCBwbGFjZW1lbnRcbiAgICogZGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgbmV3ZXN0T25Ub3A6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBibG9jayBkdXBsaWNhdGUgbWVzc2FnZXNcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEV2ZXJ5dGhpbmcgYSB0b2FzdCBuZWVkcyB0byBsYXVuY2hcbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0UGFja2FnZSB7XG4gIHByaXZhdGUgX29uVGFwID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9vbkFjdGlvbiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG9hc3RJZDogbnVtYmVyLFxuICAgIHB1YmxpYyBjb25maWc6IEluZGl2aWR1YWxDb25maWcsXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgcHVibGljIHRvYXN0UmVmOiBUb2FzdFJlZjxhbnk+LFxuICApIHtcbiAgICB0aGlzLnRvYXN0UmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX29uQWN0aW9uLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLl9vblRhcC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpcmVkIG9uIGNsaWNrICovXG4gIHRyaWdnZXJUYXAoKSB7XG4gICAgdGhpcy5fb25UYXAubmV4dCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZy50YXBUb0Rpc21pc3MpIHtcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25UYXAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25UYXAuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogYXZhaWxhYmxlIGZvciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gIHRyaWdnZXJBY3Rpb24oYWN0aW9uPzogYW55KSB7XG4gICAgdGhpcy5fb25BY3Rpb24ubmV4dChhY3Rpb24pO1xuICB9XG5cbiAgb25BY3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25BY3Rpb24uYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cblxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHktaW50ZXJmYWNlICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbFRvYXN0ckNvbmZpZyBleHRlbmRzIEdsb2JhbENvbmZpZyB7fVxuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsVG9hc3RyQ29uZmlnIGV4dGVuZHMgSW5kaXZpZHVhbENvbmZpZyB7fVxuZXhwb3J0IGludGVyZmFjZSBUb2FzdHJDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHt9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdG9yLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudFR5cGU8VD4ge1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKTogVDtcbn1cblxuXG4vKipcbiAqIEEgYENvbXBvbmVudFBvcnRhbGAgaXMgYSBwb3J0YWwgdGhhdCBpbnN0YW50aWF0ZXMgc29tZSBDb21wb25lbnQgdXBvbiBhdHRhY2htZW50LlxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsPFQ+IHtcbiAgcHJpdmF0ZSBfYXR0YWNoZWRIb3N0PzogQmFzZVBvcnRhbEhvc3Q7XG4gIC8qKiBUaGUgdHlwZSBvZiB0aGUgY29tcG9uZW50IHRoYXQgd2lsbCBiZSBpbnN0YW50aWF0ZWQgZm9yIGF0dGFjaG1lbnQuICovXG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcblxuICAvKipcbiAgICogW09wdGlvbmFsXSBXaGVyZSB0aGUgYXR0YWNoZWQgY29tcG9uZW50IHNob3VsZCBsaXZlIGluIEFuZ3VsYXIncyAqbG9naWNhbCogY29tcG9uZW50IHRyZWUuXG4gICAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gd2hlcmUgdGhlIGNvbXBvbmVudCAqcmVuZGVycyosIHdoaWNoIGlzIGRldGVybWluZWQgYnkgdGhlIFBvcnRhbEhvc3QuXG4gICAqIFRoZSBvcmlnaW4gbmVjZXNzYXJ5IHdoZW4gdGhlIGhvc3QgaXMgb3V0c2lkZSBvZiB0aGUgQW5ndWxhciBhcHBsaWNhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKiogSW5qZWN0b3IgdXNlZCBmb3IgdGhlIGluc3RhbnRpYXRpb24gb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgaW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgLyoqIEF0dGFjaCB0aGlzIHBvcnRhbCB0byBhIGhvc3QuICovXG4gIGF0dGFjaChob3N0OiBCYXNlUG9ydGFsSG9zdCwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICAgIHJldHVybiBob3N0LmF0dGFjaCh0aGlzLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICAvKiogRGV0YWNoIHRoaXMgcG9ydGFsIGZyb20gaXRzIGhvc3QgKi9cbiAgZGV0YWNoKCkge1xuICAgIGNvbnN0IGhvc3QgPSB0aGlzLl9hdHRhY2hlZEhvc3Q7XG4gICAgaWYgKGhvc3QpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBob3N0LmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoaXMgcG9ydGFsIGlzIGF0dGFjaGVkIHRvIGEgaG9zdC4gKi9cbiAgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVkSG9zdCAhPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFBvcnRhbEhvc3QgcmVmZXJlbmNlIHdpdGhvdXQgcGVyZm9ybWluZyBgYXR0YWNoKClgLiBUaGlzIGlzIHVzZWQgZGlyZWN0bHkgYnlcbiAgICogdGhlIFBvcnRhbEhvc3Qgd2hlbiBpdCBpcyBwZXJmb3JtaW5nIGFuIGBhdHRhY2goKWAgb3IgYGRldGFjaCgpYC5cbiAgICovXG4gIHNldEF0dGFjaGVkSG9zdChob3N0PzogQmFzZVBvcnRhbEhvc3QpIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICB9XG59XG5cbi8qKlxuICogUGFydGlhbCBpbXBsZW1lbnRhdGlvbiBvZiBQb3J0YWxIb3N0IHRoYXQgb25seSBkZWFscyB3aXRoIGF0dGFjaGluZyBhXG4gKiBDb21wb25lbnRQb3J0YWxcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQb3J0YWxIb3N0IHtcbiAgLyoqIFRoZSBwb3J0YWwgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBob3N0LiAqL1xuICBwcml2YXRlIF9hdHRhY2hlZFBvcnRhbD86IENvbXBvbmVudFBvcnRhbDxhbnk+O1xuXG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJtYW5lbnRseSBkaXNwb3NlIHRoaXMgaG9zdC4gKi9cbiAgcHJpdmF0ZSBfZGlzcG9zZUZuPzogKCkgPT4gdm9pZDtcblxuICBhdHRhY2gocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IHBvcnRhbDtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsLCBuZXdlc3RPblRvcCk7XG4gIH1cblxuICBhYnN0cmFjdCBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4sIG5ld2VzdE9uVG9wOiBib29sZWFuKTogQ29tcG9uZW50UmVmPFQ+O1xuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fYXR0YWNoZWRQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9kaXNwb3NlRm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VGbigpO1xuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc3Bvc2VGbihmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IGZuO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlUG9ydGFsSG9zdCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnLi9wb3J0YWwnO1xuXG4vKipcbiAqIEEgUG9ydGFsSG9zdCBmb3IgYXR0YWNoaW5nIHBvcnRhbHMgdG8gYW4gYXJiaXRyYXJ5IERPTSBlbGVtZW50IG91dHNpZGUgb2YgdGhlIEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uIGNvbnRleHQuXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBwYXJ0IG9mIHRoZSBwb3J0YWwgY29yZSB0aGF0IGRpcmVjdGx5IHRvdWNoZXMgdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNsYXNzIERvbVBvcnRhbEhvc3QgZXh0ZW5kcyBCYXNlUG9ydGFsSG9zdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2hvc3REb21FbGVtZW50OiBFbGVtZW50LFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHRoZSBnaXZlbiBDb21wb25lbnRQb3J0YWwgdG8gRE9NIGVsZW1lbnQgdXNpbmcgdGhlIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5cbiAgICogQHBhcmFtIHBvcnRhbCBQb3J0YWwgdG8gYmUgYXR0YWNoZWRcbiAgICovXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihcbiAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPixcbiAgICBuZXdlc3RPblRvcDogYm9vbGVhbixcbiAgKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgcG9ydGFsLmNvbXBvbmVudCxcbiAgICApO1xuICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcblxuICAgIC8vIElmIHRoZSBwb3J0YWwgc3BlY2lmaWVzIGEgVmlld0NvbnRhaW5lclJlZiwgd2Ugd2lsbCB1c2UgdGhhdCBhcyB0aGUgYXR0YWNobWVudCBwb2ludFxuICAgIC8vIGZvciB0aGUgY29tcG9uZW50IChpbiB0ZXJtcyBvZiBBbmd1bGFyJ3MgY29tcG9uZW50IHRyZWUsIG5vdCByZW5kZXJpbmcpLlxuICAgIC8vIFdoZW4gdGhlIFZpZXdDb250YWluZXJSZWYgaXMgbWlzc2luZywgd2UgdXNlIHRoZSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRpcmVjdGx5XG4gICAgLy8gYW5kIHRoZW4gbWFudWFsbHkgYXR0YWNoIHRoZSBDaGFuZ2VEZXRlY3RvciBmb3IgdGhhdCBjb21wb25lbnQgdG8gdGhlIGFwcGxpY2F0aW9uICh3aGljaFxuICAgIC8vIGhhcHBlbnMgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIGEgVmlld0NvbnRhaW5lcikuXG4gICAgY29tcG9uZW50UmVmID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUocG9ydGFsLmluamVjdG9yKTtcblxuICAgIC8vIFdoZW4gY3JlYXRpbmcgYSBjb21wb25lbnQgb3V0c2lkZSBvZiBhIFZpZXdDb250YWluZXIsIHdlIG5lZWQgdG8gbWFudWFsbHkgcmVnaXN0ZXJcbiAgICAvLyBpdHMgQ2hhbmdlRGV0ZWN0b3Igd2l0aCB0aGUgYXBwbGljYXRpb24uIFRoaXMgQVBJIGlzIHVuZm9ydHVuYXRlbHkgbm90IHlldCBwdWJsaXNoZWRcbiAgICAvLyBpbiBBbmd1bGFyIGNvcmUuIFRoZSBjaGFuZ2UgZGV0ZWN0b3IgbXVzdCBhbHNvIGJlIGRlcmVnaXN0ZXJlZCB3aGVuIHRoZSBjb21wb25lbnRcbiAgICAvLyBpcyBkZXN0cm95ZWQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIHRoaXMuc2V0RGlzcG9zZUZuKCgpID0+IHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQXQgdGhpcyBwb2ludCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGluc3RhbnRpYXRlZCwgc28gd2UgbW92ZSBpdCB0byB0aGUgbG9jYXRpb24gaW4gdGhlIERPTVxuICAgIC8vIHdoZXJlIHdlIHdhbnQgaXQgdG8gYmUgcmVuZGVyZWQuXG4gICAgaWYgKG5ld2VzdE9uVG9wKSB7XG4gICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHRoaXMuX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZiksXG4gICAgICAgIHRoaXMuX2hvc3REb21FbGVtZW50LmZpcnN0Q2hpbGQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ob3N0RG9tRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgdGhpcy5fZ2V0Q29tcG9uZW50Um9vdE5vZGUoY29tcG9uZW50UmVmKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSByb290IEhUTUxFbGVtZW50IGZvciBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50LiAqL1xuICBwcml2YXRlIF9nZXRDb21wb25lbnRSb290Tm9kZShjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhbiBvdmVybGF5IHRoYXQgaGFzIGJlZW4gY3JlYXRlZCB3aXRoIHRoZSBPdmVybGF5IHNlcnZpY2UuXG4gKiBVc2VkIHRvIG1hbmlwdWxhdGUgb3IgZGlzcG9zZSBvZiBzYWlkIG92ZXJsYXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5UmVmIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9ydGFsSG9zdDogQmFzZVBvcnRhbEhvc3QpIHt9XG5cbiAgYXR0YWNoKFxuICAgIHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT4sXG4gICAgbmV3ZXN0T25Ub3A6IGJvb2xlYW4gPSB0cnVlLFxuICApOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbEhvc3QuYXR0YWNoKHBvcnRhbCwgbmV3ZXN0T25Ub3ApO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIGFuIG92ZXJsYXkgZnJvbSBhIHBvcnRhbC5cbiAgICogQHJldHVybnMgUmVzb2x2ZXMgd2hlbiB0aGUgb3ZlcmxheSBoYXMgYmVlbiBkZXRhY2hlZC5cbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5kZXRhY2goKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGUgT3ZlcmxheUNvbnRhaW5lciBpcyB0aGUgY29udGFpbmVyIGluIHdoaWNoIGFsbCBvdmVybGF5cyB3aWxsIGxvYWQuXG4gKiBJdCBzaG91bGQgYmUgcHJvdmlkZWQgaW4gdGhlIHJvb3QgY29tcG9uZW50IHRvIGVuc3VyZSBpdCBpcyBwcm9wZXJseSBzaGFyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIG92ZXJsYXkgY29udGFpbmVyIGVsZW1lbnQuICBJdCB3aWxsIGxhemlseVxuICAgKiBjcmVhdGUgdGhlIGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgIGl0IGlzIGNhbGxlZCB0byBmYWNpbGl0YXRlIHVzaW5nXG4gICAqIHRoZSBjb250YWluZXIgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzLlxuICAgKiBAcmV0dXJucyB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIGdldENvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyRWxlbWVudCkgeyB0aGlzLl9jcmVhdGVDb250YWluZXIoKTsgfVxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb250YWluZXIgZWxlbWVudCwgd2hpY2ggaXMgc2ltcGx5IGEgZGl2XG4gICAqIHdpdGggdGhlICdjZGstb3ZlcmxheS1jb250YWluZXInIGNsYXNzIG9uIHRoZSBkb2N1bWVudCBib2R5LlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21Qb3J0YWxIb3N0IH0gZnJvbSAnLi4vcG9ydGFsL2RvbS1wb3J0YWwtaG9zdCc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG5cbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGNyZWF0ZSBPdmVybGF5cy4gT3ZlcmxheXMgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHBpZWNlcyBvZiBmbG9hdGluZyBVSSwgbWVhbnQgdG8gYmVcbiAqIHVzZWQgYXMgYSBsb3ctbGV2ZWwgYnVpbGRpbmcgYnVpbGRpbmcgYmxvY2sgZm9yIG90aGVyIGNvbXBvbmVudHMuIERpYWxvZ3MsIHRvb2x0aXBzLCBtZW51cyxcbiAqIHNlbGVjdHMsIGV0Yy4gY2FuIGFsbCBiZSBidWlsdCB1c2luZyBvdmVybGF5cy4gVGhlIHNlcnZpY2Ugc2hvdWxkIHByaW1hcmlseSBiZSB1c2VkIGJ5IGF1dGhvcnNcbiAqIG9mIHJlLXVzYWJsZSBjb21wb25lbnRzIHJhdGhlciB0aGFuIGRldmVsb3BlcnMgYnVpbGRpbmcgZW5kLXVzZXIgYXBwbGljYXRpb25zLlxuICpcbiAqIEFuIG92ZXJsYXkgKmlzKiBhIFBvcnRhbEhvc3QsIHNvIGFueSBraW5kIG9mIFBvcnRhbCBjYW4gYmUgbG9hZGVkIGludG8gb25lLlxuICovXG4gQEluamVjdGFibGUoKVxuICBleHBvcnQgY2xhc3MgT3ZlcmxheSB7XG4gICAgcHJpdmF0ZSBfcGFuZUVsZW1lbnRzOiB7c3RyaW5nPzogSFRNTEVsZW1lbnR9ID0ge307XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvdmVybGF5LlxuICAgKiBAcmV0dXJucyBBIHJlZmVyZW5jZSB0byB0aGUgY3JlYXRlZCBvdmVybGF5LlxuICAgKi9cbiAgY3JlYXRlKHBvc2l0aW9uQ2xhc3M/OiBzdHJpbmcsIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSk6IE92ZXJsYXlSZWYge1xuICAgIC8vIGdldCBleGlzdGluZyBwYW5lIGlmIHBvc3NpYmxlXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYodGhpcy5nZXRQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzLCBvdmVybGF5Q29udGFpbmVyKSk7XG4gIH1cblxuICBnZXRQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzOiBzdHJpbmcgPSAnJywgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5fcGFuZUVsZW1lbnRzW3Bvc2l0aW9uQ2xhc3NdKSB7XG4gICAgICB0aGlzLl9wYW5lRWxlbWVudHNbcG9zaXRpb25DbGFzc10gPSB0aGlzLl9jcmVhdGVQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzLCBvdmVybGF5Q29udGFpbmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhbmVFbGVtZW50c1twb3NpdGlvbkNsYXNzXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBmb3IgYW4gb3ZlcmxheSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZWQgcGFuZSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzOiBzdHJpbmcsIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFuZS5pZCA9ICd0b2FzdC1jb250YWluZXInO1xuICAgIHBhbmUuY2xhc3NMaXN0LmFkZChwb3NpdGlvbkNsYXNzKTtcbiAgICBwYW5lLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFvdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5hcHBlbmRDaGlsZChwYW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuYXBwZW5kQ2hpbGQocGFuZSk7XG4gICAgfVxuICAgIHJldHVybiBwYW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERvbVBvcnRhbEhvc3QgaW50byB3aGljaCB0aGUgb3ZlcmxheSBjb250ZW50IGNhbiBiZSBsb2FkZWQuXG4gICAqIEBwYXJhbSBwYW5lIFRoZSBET00gZWxlbWVudCB0byB0dXJuIGludG8gYSBwb3J0YWwgaG9zdC5cbiAgICogQHJldHVybnMgQSBwb3J0YWwgaG9zdCBmb3IgdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9ydGFsSG9zdChwYW5lOiBIVE1MRWxlbWVudCk6IERvbVBvcnRhbEhvc3Qge1xuICAgIHJldHVybiBuZXcgRG9tUG9ydGFsSG9zdChwYW5lLCB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBPdmVybGF5UmVmIGZvciBhbiBvdmVybGF5IGluIHRoZSBnaXZlbiBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHBhbmUgRE9NIGVsZW1lbnQgZm9yIHRoZSBvdmVybGF5XG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5UmVmKHBhbmU6IEhUTUxFbGVtZW50KTogT3ZlcmxheVJlZiB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5UmVmKHRoaXMuX2NyZWF0ZVBvcnRhbEhvc3QocGFuZSkpO1xuICB9XG59XG5cblxuLyoqIFByb3ZpZGVycyBmb3IgT3ZlcmxheSBhbmQgaXRzIHJlbGF0ZWQgaW5qZWN0YWJsZXMuICovXG5leHBvcnQgY29uc3QgT1ZFUkxBWV9QUk9WSURFUlMgPSBbXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb250YWluZXIsXG5dO1xuIiwiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1yZWYnO1xuaW1wb3J0IHsgVG9hc3RQYWNrYWdlIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcblxuLyoqXG4gKiBSZWZlcmVuY2UgdG8gYSB0b2FzdCBvcGVuZWQgdmlhIHRoZSBUb2FzdHIgc2VydmljZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRvYXN0UmVmPFQ+IHtcbiAgLyoqIFRoZSBpbnN0YW5jZSBvZiBjb21wb25lbnQgb3BlbmVkIGludG8gdGhlIHRvYXN0LiAqL1xuICBjb21wb25lbnRJbnN0YW5jZTogVDtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHRvYXN0IGhhcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBwcml2YXRlIF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGFjdGl2YXRlZCAqL1xuICBwcml2YXRlIF9hY3RpdmF0ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgLyoqIG5vdGlmaWVzIHRoZSB0b2FzdCB0aGF0IGl0IHNob3VsZCBjbG9zZSBiZWZvcmUgdGhlIHRpbWVvdXQgKi9cbiAgcHJpdmF0ZSBfbWFudWFsQ2xvc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZikgeyB9XG5cbiAgbWFudWFsQ2xvc2UoKSB7XG4gICAgdGhpcy5fbWFudWFsQ2xvc2UubmV4dCgpO1xuICAgIHRoaXMuX21hbnVhbENsb3NlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBtYW51YWxDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFudWFsQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgdGhlIHRvYXN0LlxuICAgKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2FjdGl2YXRlLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgdG9hc3QgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpc0luYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZS5pc1N0b3BwZWQ7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLl9hY3RpdmF0ZS5uZXh0KCk7XG4gICAgdGhpcy5fYWN0aXZhdGUuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSB0b2FzdCBoYXMgc3RhcnRlZCBvcGVuaW5nLiAqL1xuICBhZnRlckFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG5cblxuLyoqIEN1c3RvbSBpbmplY3RvciB0eXBlIHNwZWNpZmljYWxseSBmb3IgaW5zdGFudGlhdGluZyBjb21wb25lbnRzIHdpdGggYSB0b2FzdC4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdEluamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcbiAgICBwcml2YXRlIF9wYXJlbnRJbmplY3RvcjogSW5qZWN0b3IpIHsgfVxuXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KTogYW55IHtcbiAgICBpZiAodG9rZW4gPT09IFRvYXN0UGFja2FnZSAmJiB0aGlzLl90b2FzdFBhY2thZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl90b2FzdFBhY2thZ2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRJbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0VG9rZW4ge1xuICBjb25maWc6IEdsb2JhbENvbmZpZztcbiAgZGVmYXVsdHM6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IFRPQVNUX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUb2FzdFRva2VuPignVG9hc3RDb25maWcnKTtcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBTZWN1cml0eUNvbnRleHRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcbmltcG9ydCB7IFRvYXN0SW5qZWN0b3IsIFRvYXN0UmVmIH0gZnJvbSAnLi90b2FzdC1pbmplY3Rvcic7XG5pbXBvcnQgeyBUb2FzdFRva2VuLCBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LXRva2VuJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsQ29uZmlnLFxuICBJbmRpdmlkdWFsQ29uZmlnLFxuICBUb2FzdFBhY2thZ2UsXG59IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVUb2FzdDxDPiB7XG4gIC8qKiBZb3VyIFRvYXN0IElELiBVc2UgdGhpcyB0byBjbG9zZSBpdCBpbmRpdmlkdWFsbHkgKi9cbiAgdG9hc3RJZDogbnVtYmVyO1xuICAvKiogdGhlIG1lc3NhZ2Ugb2YgeW91ciB0b2FzdC4gU3RvcmVkIHRvIHByZXZlbnQgZHVwbGljYXRlcyAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIC8qKiBhIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHNlZSBwb3J0YWwudHMgKi9cbiAgcG9ydGFsOiBDb21wb25lbnRSZWY8Qz47XG4gIC8qKiBhIHJlZmVyZW5jZSB0byB5b3VyIHRvYXN0ICovXG4gIHRvYXN0UmVmOiBUb2FzdFJlZjxDPjtcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGFjdGl2ZSAqL1xuICBvblNob3duOiBPYnNlcnZhYmxlPGFueT47XG4gIC8qKiB0cmlnZ2VyZWQgd2hlbiB0b2FzdCBpcyBkZXN0cm95ZWQgKi9cbiAgb25IaWRkZW46IE9ic2VydmFibGU8YW55PjtcbiAgLyoqIHRyaWdnZXJlZCBvbiB0b2FzdCBjbGljayAqL1xuICBvblRhcDogT2JzZXJ2YWJsZTxhbnk+O1xuICAvKiogYXZhaWxhYmxlIGZvciB5b3VyIHVzZSBpbiBjdXN0b20gdG9hc3QgKi9cbiAgb25BY3Rpb246IE9ic2VydmFibGU8YW55Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0clNlcnZpY2Uge1xuICB0b2FzdHJDb25maWc6IEdsb2JhbENvbmZpZztcbiAgY3VycmVudGx5QWN0aXZlID0gMDtcbiAgdG9hc3RzOiBBY3RpdmVUb2FzdDxhbnk+W10gPSBbXTtcbiAgb3ZlcmxheUNvbnRhaW5lcjogVG9hc3RDb250YWluZXJEaXJlY3RpdmU7XG4gIHByZXZpb3VzVG9hc3RNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgaW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVE9BU1RfQ09ORklHKSB0b2tlbjogVG9hc3RUb2tlbixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gbmV3IHRva2VuLmRlZmF1bHRzO1xuICAgIHRoaXMudG9hc3RyQ29uZmlnID0geyAuLi5kZWZhdWx0Q29uZmlnLCAuLi50b2tlbi5jb25maWcgfTtcbiAgICB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3NlcyA9IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWcuaWNvbkNsYXNzZXMsXG4gICAgICAuLi50b2tlbi5jb25maWcuaWNvbkNsYXNzZXMsXG4gICAgfTtcbiAgfVxuICAvKiogc2hvdyB0b2FzdCAqL1xuICBzaG93KG1lc3NhZ2U/OiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9LCB0eXBlID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIHN1Y2Nlc3MobWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge30pIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcyB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyBlcnJvciB0b2FzdCAqL1xuICBlcnJvcihtZXNzYWdlPzogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvciB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyBpbmZvIHRvYXN0ICovXG4gIGluZm8obWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge30pIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMuaW5mbyB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyB3YXJuaW5nIHRvYXN0ICovXG4gIHdhcm5pbmcobWVzc2FnZT86IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlOiBQYXJ0aWFsPEluZGl2aWR1YWxDb25maWc+ID0ge30pIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMud2FybmluZyB8fCAnJztcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvciBhIHNpbmdsZSB0b2FzdCBieSBpZFxuICAgKi9cbiAgY2xlYXIodG9hc3RJZD86IG51bWJlcikge1xuICAgIC8vIENhbGwgZXZlcnkgdG9hc3RSZWYgbWFudWFsQ2xvc2UgZnVuY3Rpb25cbiAgICBmb3IgKGNvbnN0IHRvYXN0IG9mIHRoaXMudG9hc3RzKSB7XG4gICAgICBpZiAodG9hc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0b2FzdC50b2FzdElkID09PSB0b2FzdElkKSB7XG4gICAgICAgICAgdG9hc3QudG9hc3RSZWYubWFudWFsQ2xvc2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYW5kIGRlc3Ryb3kgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIHJlbW92ZSh0b2FzdElkOiBudW1iZXIpIHtcbiAgICBjb25zdCBmb3VuZCA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvdW5kLmFjdGl2ZVRvYXN0LnRvYXN0UmVmLmNsb3NlKCk7XG4gICAgdGhpcy50b2FzdHMuc3BsaWNlKGZvdW5kLmluZGV4LCAxKTtcbiAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlIC0gMTtcbiAgICBpZiAoIXRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCB8fCAhdGhpcy50b2FzdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRseUFjdGl2ZSA8IHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCAmJiB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0pIHtcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBpZiAoIXAuaXNJbmFjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgICBwLmFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdG9hc3QgbWVzc2FnZSBpcyBhbHJlYWR5IHNob3duXG4gICAqL1xuICBpc0R1cGxpY2F0ZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0ubWVzc2FnZSA9PT0gbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIGNyZWF0ZSBhIGNsb25lIG9mIGdsb2JhbCBjb25maWcgYW5kIGFwcGx5IGluZGl2aWR1YWwgc2V0dGluZ3MgKi9cbiAgcHJpdmF0ZSBhcHBseUNvbmZpZyhvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9KTogR2xvYmFsQ29uZmlnIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnRvYXN0ckNvbmZpZywgLi4ub3ZlcnJpZGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvYXN0IG9iamVjdCBieSBpZFxuICAgKi9cbiAgcHJpdmF0ZSBfZmluZFRvYXN0KHRvYXN0SWQ6IG51bWJlcik6IHsgaW5kZXg6IG51bWJlciwgYWN0aXZlVG9hc3Q6IEFjdGl2ZVRvYXN0PGFueT4gfSB8IG51bGwge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0c1tpXS50b2FzdElkID09PSB0b2FzdElkKSB7XG4gICAgICAgIHJldHVybiB7IGluZGV4OiBpLCBhY3RpdmVUb2FzdDogdGhpcy50b2FzdHNbaV0gfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgbmVlZCB0byBydW4gaW5zaWRlIGFuZ3VsYXIncyB6b25lIHRoZW4gYnVpbGRzIHRoZSB0b2FzdFxuICAgKi9cbiAgcHJpdmF0ZSBfcHJlQnVpbGROb3RpZmljYXRpb24oXG4gICAgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgY29uZmlnOiBHbG9iYWxDb25maWcsXG4gICk6IEFjdGl2ZVRvYXN0PGFueT4gfCBudWxsIHtcbiAgICBpZiAoY29uZmlnLm9uQWN0aXZhdGVUaWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHRvYXN0VHlwZSwgbWVzc2FnZSwgdGl0bGUsIGNvbmZpZykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odG9hc3RUeXBlLCBtZXNzYWdlLCB0aXRsZSwgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBhdHRhY2hlcyB0b2FzdCBkYXRhIHRvIGNvbXBvbmVudFxuICAgKiByZXR1cm5zIG51bGwgaWYgdG9hc3QgaXMgZHVwbGljYXRlIGFuZCBwcmV2ZW50RHVwbGljYXRlcyA9PSBUcnVlXG4gICAqL1xuICBwcml2YXRlIF9idWlsZE5vdGlmaWNhdGlvbihcbiAgICB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBjb25maWc6IEdsb2JhbENvbmZpZyxcbiAgKTogQWN0aXZlVG9hc3Q8YW55PiB8IG51bGwge1xuICAgIGlmICghY29uZmlnLnRvYXN0Q29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvYXN0Q29tcG9uZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIC8vIG1heCBvcGVuZWQgYW5kIGF1dG8gZGlzbWlzcyA9IHRydWVcbiAgICBpZiAobWVzc2FnZSAmJiB0aGlzLnRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyAmJiB0aGlzLmlzRHVwbGljYXRlKG1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1RvYXN0TWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgbGV0IGtlZXBJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnRvYXN0ckNvbmZpZy5tYXhPcGVuZWQgJiYgdGhpcy5jdXJyZW50bHlBY3RpdmUgPj0gdGhpcy50b2FzdHJDb25maWcubWF4T3BlbmVkKSB7XG4gICAgICBrZWVwSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudG9hc3RyQ29uZmlnLmF1dG9EaXNtaXNzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy50b2FzdHNbdGhpcy50b2FzdHMubGVuZ3RoIC0gMV0udG9hc3RJZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZy5wb3NpdGlvbkNsYXNzLCB0aGlzLm92ZXJsYXlDb250YWluZXIpO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmluZGV4ICsgMTtcbiAgICBsZXQgc2FuaXRpemVkTWVzc2FnZTogc3RyaW5nIHwgU2FmZUh0bWwgfCB1bmRlZmluZWQgfCBudWxsID0gbWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZSAmJiBjb25maWcuZW5hYmxlSHRtbCkge1xuICAgICAgc2FuaXRpemVkTWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XG4gICAgY29uc3QgdG9hc3RQYWNrYWdlID0gbmV3IFRvYXN0UGFja2FnZShcbiAgICAgIHRoaXMuaW5kZXgsXG4gICAgICBjb25maWcsXG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0b2FzdFR5cGUsXG4gICAgICB0b2FzdFJlZixcbiAgICApO1xuICAgIGNvbnN0IHRvYXN0SW5qZWN0b3IgPSBuZXcgVG9hc3RJbmplY3Rvcih0b2FzdFBhY2thZ2UsIHRoaXMuX2luamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbmZpZy50b2FzdENvbXBvbmVudCwgdG9hc3RJbmplY3Rvcik7XG4gICAgY29uc3QgcG9ydGFsID0gb3ZlcmxheVJlZi5hdHRhY2goY29tcG9uZW50LCB0aGlzLnRvYXN0ckNvbmZpZy5uZXdlc3RPblRvcCk7XG4gICAgdG9hc3RSZWYuY29tcG9uZW50SW5zdGFuY2UgPSAoPGFueT5wb3J0YWwpLl9jb21wb25lbnQ7XG4gICAgY29uc3QgaW5zOiBBY3RpdmVUb2FzdDxhbnk+ID0ge1xuICAgICAgdG9hc3RJZDogdGhpcy5pbmRleCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgJycsXG4gICAgICB0b2FzdFJlZixcbiAgICAgIG9uU2hvd246IHRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKSxcbiAgICAgIG9uSGlkZGVuOiB0b2FzdFJlZi5hZnRlckNsb3NlZCgpLFxuICAgICAgb25UYXA6IHRvYXN0UGFja2FnZS5vblRhcCgpLFxuICAgICAgb25BY3Rpb246IHRvYXN0UGFja2FnZS5vbkFjdGlvbigpLFxuICAgICAgcG9ydGFsLFxuICAgIH07XG5cbiAgICBpZiAoIWtlZXBJbmFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlucy50b2FzdFJlZi5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudG9hc3RzLnB1c2goaW5zKTtcbiAgICByZXR1cm4gaW5zO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RQYWNrYWdlIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3RvYXN0LWNvbXBvbmVudF0nLFxuICB0ZW1wbGF0ZTogYFxuICA8YnV0dG9uICpuZ0lmPVwib3B0aW9ucy5jbG9zZUJ1dHRvblwiIChjbGljayk9XCJyZW1vdmUoKVwiIGNsYXNzPVwidG9hc3QtY2xvc2UtYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxkaXYgKm5nSWY9XCJ0aXRsZVwiIFtjbGFzc109XCJvcHRpb25zLnRpdGxlQ2xhc3NcIiBbYXR0ci5hcmlhLWxhYmVsXT1cInRpdGxlXCI+XG4gICAge3sgdGl0bGUgfX1cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJtZXNzYWdlICYmIG9wdGlvbnMuZW5hYmxlSHRtbFwiIHJvbGU9XCJhbGVydGRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2lubmVySFRNTF09XCJtZXNzYWdlXCI+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwibWVzc2FnZSAmJiAhb3B0aW9ucy5lbmFibGVIdG1sXCIgcm9sZT1cImFsZXJ0ZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICBbY2xhc3NdPVwib3B0aW9ucy5tZXNzYWdlQ2xhc3NcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIm1lc3NhZ2VcIj5cbiAgICB7eyBtZXNzYWdlIH19XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwib3B0aW9ucy5wcm9ncmVzc0JhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1wcm9ncmVzc1wiIFtzdHlsZS53aWR0aF09XCJ3aWR0aCArICclJ1wiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZseUluT3V0JywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe30pKSxcbiAgICAgIHN0YXRlKCdyZW1vdmVkJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsXG4gICAgICAgIGFuaW1hdGUoJ3t7IGVhc2VUaW1lIH19bXMge3sgZWFzaW5nIH19JylcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gcmVtb3ZlZCcsXG4gICAgICAgIGFuaW1hdGUoJ3t7IGVhc2VUaW1lIH19bXMge3sgZWFzaW5nIH19JyksXG4gICAgICApLFxuICAgIF0pLFxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3QgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtZXNzYWdlPzogc3RyaW5nIHwgU2FmZUh0bWwgfCBudWxsO1xuICB0aXRsZT86IHN0cmluZztcbiAgb3B0aW9uczogSW5kaXZpZHVhbENvbmZpZztcbiAgLyoqIHdpZHRoIG9mIHByb2dyZXNzIGJhciAqL1xuICB3aWR0aCA9IC0xO1xuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRvYXN0Q2xhc3NlcyA9ICcnO1xuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXG4gIEBIb3N0QmluZGluZygnQGZseUluT3V0Jykgc3RhdGUgPSB7XG4gICAgdmFsdWU6ICdpbmFjdGl2ZScsXG4gICAgcGFyYW1zOiB7XG4gICAgICBlYXNlVGltZTogdGhpcy50b2FzdFBhY2thZ2UuY29uZmlnLmVhc2VUaW1lLFxuICAgICAgZWFzaW5nOiAnZWFzZS1pbicsXG4gICAgfSxcbiAgfTtcbiAgcHJpdmF0ZSB0aW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgaW50ZXJ2YWxJZDogYW55O1xuICBwcml2YXRlIGhpZGVUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc3ViMTogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgIHB1YmxpYyB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcbiAgICBwcm90ZWN0ZWQgbmdab25lPzogTmdab25lLFxuICApIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0b2FzdFBhY2thZ2UubWVzc2FnZTtcbiAgICB0aGlzLnRpdGxlID0gdG9hc3RQYWNrYWdlLnRpdGxlO1xuICAgIHRoaXMub3B0aW9ucyA9IHRvYXN0UGFja2FnZS5jb25maWc7XG4gICAgdGhpcy50b2FzdENsYXNzZXMgPSBgJHt0b2FzdFBhY2thZ2UudG9hc3RUeXBlfSAke3RvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc31gO1xuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWIxLnVuc3Vic2NyaWJlKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG4gIC8qKlxuICAgKiBhY3RpdmF0ZXMgdG9hc3QgYW5kIHNldHMgdGltZW91dFxuICAgKi9cbiAgYWN0aXZhdGVUb2FzdCgpIHtcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCB2YWx1ZTogJ2FjdGl2ZScgfTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlVGltZU91dCAmJiB0aGlzLm9wdGlvbnMudGltZU91dCkge1xuICAgICAgdGhpcy5vdXRzaWRlVGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLm9wdGlvbnMudGltZU91dCk7XG4gICAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLm9wdGlvbnMudGltZU91dDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgdGhpcy5vdXRzaWRlSW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVQcm9ncmVzcygpLCAxMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiB1cGRhdGVzIHByb2dyZXNzIGJhciB3aWR0aFxuICAgKi9cbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMud2lkdGggPT09IDAgfHwgdGhpcy53aWR0aCA9PT0gMTAwIHx8ICF0aGlzLm9wdGlvbnMudGltZU91dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmhpZGVUaW1lIC0gbm93O1xuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NBbmltYXRpb24gPT09ICdpbmNyZWFzaW5nJykge1xuICAgICAgdGhpcy53aWR0aCA9IDEwMCAtIHRoaXMud2lkdGg7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoIDw9IDApIHtcbiAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA+PSAxMDApIHtcbiAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRlbGxzIHRvYXN0clNlcnZpY2UgdG8gcmVtb3ZlIHRoaXMgdG9hc3QgYWZ0ZXIgYW5pbWF0aW9uIHRpbWVcbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMuc3RhdGUgPSB7Li4udGhpcy5zdGF0ZSwgdmFsdWU6ICdyZW1vdmVkJ307XG4gICAgdGhpcy5vdXRzaWRlVGltZW91dCgoKSA9PlxuICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3RQYWNrYWdlLnRvYXN0SWQpLFxuICAgICAgICArdGhpcy50b2FzdFBhY2thZ2UuY29uZmlnLmVhc2VUaW1lLFxuICAgICAgKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHRhcFRvYXN0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlclRhcCgpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFwVG9EaXNtaXNzKSB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgc3RpY2tBcm91bmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IDA7XG4gICAgdGhpcy5oaWRlVGltZSA9IDA7XG5cbiAgICAvLyBkaXNhYmxlIHByb2dyZXNzQmFyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMud2lkdGggPSAwO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBkZWxheWVkSGlkZVRvYXN0KCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXRcbiAgICAgIHx8IHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQgPT09IDBcbiAgICAgIHx8IHRoaXMuc3RhdGUudmFsdWUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm91dHNpZGVUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dDtcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XG4gICAgdGhpcy53aWR0aCA9IC0xO1xuICAgIGlmICh0aGlzLm9wdGlvbnMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG91dHNpZGVUaW1lb3V0KGZ1bmM6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ydW5JbnNpZGVBbmd1bGFyKGZ1bmMpLCB0aW1lb3V0KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIHRpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG4gIG91dHNpZGVJbnRlcnZhbChmdW5jOiBGdW5jdGlvbiwgdGltZW91dDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubmdab25lKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1bkluc2lkZUFuZ3VsYXIoZnVuYyksIHRpbWVvdXQpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiBmdW5jKCksIHRpbWVvdXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zaWRlQW5ndWxhcihmdW5jOiBGdW5jdGlvbikge1xuICAgIGlmICh0aGlzLm5nWm9uZSkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IGZ1bmMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEdsb2JhbENvbmZpZyBpbXBsZW1lbnRzIEdsb2JhbENvbmZpZyB7XG4gIC8vIEdsb2JhbFxuICBtYXhPcGVuZWQgPSAwO1xuICBhdXRvRGlzbWlzcyA9IGZhbHNlO1xuICBuZXdlc3RPblRvcCA9IHRydWU7XG4gIHByZXZlbnREdXBsaWNhdGVzID0gZmFsc2U7XG4gIGljb25DbGFzc2VzID0ge1xuICAgIGVycm9yOiAndG9hc3QtZXJyb3InLFxuICAgIGluZm86ICd0b2FzdC1pbmZvJyxcbiAgICBzdWNjZXNzOiAndG9hc3Qtc3VjY2VzcycsXG4gICAgd2FybmluZzogJ3RvYXN0LXdhcm5pbmcnLFxuICB9O1xuXG4gIC8vIEluZGl2aWR1YWxcbiAgdG9hc3RDb21wb25lbnQgPSBUb2FzdDtcbiAgY2xvc2VCdXR0b24gPSBmYWxzZTtcbiAgZGlzYWJsZVRpbWVPdXQ6IGZhbHNlO1xuICB0aW1lT3V0ID0gNTAwMDtcbiAgZXh0ZW5kZWRUaW1lT3V0ID0gMTAwMDtcbiAgZW5hYmxlSHRtbCA9IGZhbHNlO1xuICBwcm9ncmVzc0JhciA9IGZhbHNlO1xuICB0b2FzdENsYXNzID0gJ3RvYXN0JztcbiAgcG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0aXRsZUNsYXNzID0gJ3RvYXN0LXRpdGxlJztcbiAgbWVzc2FnZUNsYXNzID0gJ3RvYXN0LW1lc3NhZ2UnO1xuICBlYXNpbmcgPSAnZWFzZS1pbic7XG4gIGVhc2VUaW1lID0gMzAwO1xuICB0YXBUb0Rpc21pc3MgPSB0cnVlO1xuICBvbkFjdGl2YXRlVGljayA9IGZhbHNlO1xuICBwcm9ncmVzc0FuaW1hdGlvbjogJ2RlY3JlYXNpbmcnIHwgJ2luY3JlYXNpbmcnID0gJ2RlY3JlYXNpbmcnO1xufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IERlZmF1bHRHbG9iYWxDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtY29uZmlnJztcbmltcG9ydCB7IFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtdG9rZW4nO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbVG9hc3RdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1RvYXN0XSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBUb2FzdHJNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvYXN0ck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgaW1wb3J0ZWQgaW4geW91ciBhcHBsaWNhdGlvblxcJ3MgbWFpbiBtb2R1bGUuJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUGFydGlhbDxHbG9iYWxDb25maWc+ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0ck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFRPQVNUX0NPTkZJRywgdXNlVmFsdWU6IHsgY29uZmlnLCBkZWZhdWx0czogRGVmYXVsdEdsb2JhbENvbmZpZyB9IH0sXG4gICAgICAgIE92ZXJsYXlDb250YWluZXIsXG4gICAgICAgIE92ZXJsYXksXG4gICAgICAgIFRvYXN0clNlcnZpY2UsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBOZ01vZHVsZSxcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW3RvYXN0LWNvbXBvbmVudF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGJ1dHRvbiAqbmdJZj1cIm9wdGlvbnMuY2xvc2VCdXR0b25cIiAoY2xpY2spPVwicmVtb3ZlKClcIiBjbGFzcz1cInRvYXN0LWNsb3NlLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8ZGl2ICpuZ0lmPVwidGl0bGVcIiBbY2xhc3NdPVwib3B0aW9ucy50aXRsZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJ0aXRsZVwiPlxyXG4gICAge3sgdGl0bGUgfX1cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwibWVzc2FnZSAmJiBvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2lubmVySFRNTF09XCJtZXNzYWdlXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgIW9wdGlvbnMuZW5hYmxlSHRtbFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXHJcbiAgICBbY2xhc3NdPVwib3B0aW9ucy5tZXNzYWdlQ2xhc3NcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIm1lc3NhZ2VcIj5cclxuICAgIHt7IG1lc3NhZ2UgfX1cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwib3B0aW9ucy5wcm9ncmVzc0JhclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvYXN0LXByb2dyZXNzXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoICsgJyUnXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Tm9BbmltYXRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGw7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgb3B0aW9uczogSW5kaXZpZHVhbENvbmZpZztcclxuICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXHJcbiAgd2lkdGggPSAtMTtcclxuICAvKiogYSBjb21iaW5hdGlvbiBvZiB0b2FzdCB0eXBlIGFuZCBvcHRpb25zLnRvYXN0Q2xhc3MgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdG9hc3RDbGFzc2VzID0gJyc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXHJcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnaW5hY3RpdmUnKSB7XHJcbiAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2luaGVyaXQnO1xyXG4gIH1cclxuXHJcbiAgLyoqIGNvbnRyb2xzIGFuaW1hdGlvbiAqL1xyXG4gIHN0YXRlID0gJ2luYWN0aXZlJztcclxuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcclxuICBwcml2YXRlIGludGVydmFsSWQ6IGFueTtcclxuICBwcml2YXRlIGhpZGVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHN1YjE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSxcclxuICAgIHB1YmxpYyB0b2FzdFBhY2thZ2U6IFRvYXN0UGFja2FnZSxcclxuICAgIHByb3RlY3RlZCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdG9hc3RQYWNrYWdlLm1lc3NhZ2U7XHJcbiAgICB0aGlzLnRpdGxlID0gdG9hc3RQYWNrYWdlLnRpdGxlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdG9hc3RQYWNrYWdlLmNvbmZpZztcclxuICAgIHRoaXMudG9hc3RDbGFzc2VzID0gYCR7dG9hc3RQYWNrYWdlLnRvYXN0VHlwZX0gJHtcclxuICAgICAgdG9hc3RQYWNrYWdlLmNvbmZpZy50b2FzdENsYXNzXHJcbiAgICB9YDtcclxuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVG9hc3QoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zdWIxLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcclxuICAgKi9cclxuICBhY3RpdmF0ZVRvYXN0KCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgJiYgdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xyXG4gICAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLm9wdGlvbnMudGltZU91dDtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQWN0aXZhdGVUaWNrKSB7XHJcbiAgICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXBkYXRlcyBwcm9ncmVzcyBiYXIgd2lkdGhcclxuICAgKi9cclxuICB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgIGlmICh0aGlzLndpZHRoID09PSAwIHx8IHRoaXMud2lkdGggPT09IDEwMCB8fCAhdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmhpZGVUaW1lIC0gbm93O1xyXG4gICAgdGhpcy53aWR0aCA9IHJlbWFpbmluZyAvIHRoaXMub3B0aW9ucy50aW1lT3V0ICogMTAwO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0FuaW1hdGlvbiA9PT0gJ2luY3JlYXNpbmcnKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAxMDAgLSB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpZHRoID49IDEwMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdGVsbHMgdG9hc3RyU2VydmljZSB0byByZW1vdmUgdGhpcyB0b2FzdCBhZnRlciBhbmltYXRpb24gdGltZVxyXG4gICAqL1xyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICB0aGlzLnN0YXRlID0gJ3JlbW92ZWQnO1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgKCkgPT4gdGhpcy50b2FzdHJTZXJ2aWNlLnJlbW92ZSh0aGlzLnRvYXN0UGFja2FnZS50b2FzdElkKSxcclxuICAgICk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICB0YXBUb2FzdCgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2FzdFBhY2thZ2UudHJpZ2dlclRhcCgpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgc3RpY2tBcm91bmQoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSAwO1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcblxyXG4gICAgLy8gZGlzYWJsZSBwcm9ncmVzc0JhclxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIGRlbGF5ZWRIaWRlVG9hc3QoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVUaW1lT3V0XHJcbiAgICAgIHx8IHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQgPT09IDBcclxuICAgICAgfHwgdGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+IHRoaXMucmVtb3ZlKCksXHJcbiAgICAgIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQsXHJcbiAgICApO1xyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0O1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKHRoaXMub3B0aW9ucy50aW1lT3V0IHx8IDApO1xyXG4gICAgdGhpcy53aWR0aCA9IC0xO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3ROb0FuaW1hdGlvbl0sXHJcbiAgZXhwb3J0czogW1RvYXN0Tm9BbmltYXRpb25dLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1RvYXN0Tm9BbmltYXRpb25dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3ROb0FuaW1hdGlvbk1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIk5nTW9kdWxlIiwiU3ViamVjdCIsInRzbGliXzEuX19leHRlbmRzIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkFwcGxpY2F0aW9uUmVmIiwiSW5qZWN0aW9uVG9rZW4iLCJ0c2xpYl8xLl9fdmFsdWVzIiwiU2VjdXJpdHlDb250ZXh0IiwiSW5qZWN0IiwiSW5qZWN0b3IiLCJEb21TYW5pdGl6ZXIiLCJOZ1pvbmUiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiSG9zdEJpbmRpbmciLCJIb3N0TGlzdGVuZXIiLCJDb21tb25Nb2R1bGUiLCJPcHRpb25hbCIsIlNraXBTZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFXRSxpQ0FBb0IsRUFBYztZQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7U0FBSzs7OztRQUN2QyxxREFBbUI7OztZQUFuQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzlCOztvQkFSRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzNCOzs7Ozt3QkFQQ0MsZUFBVTs7O3NDQUZaOzs7Ozs7b0JBaUJDQyxhQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7d0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO3FCQUNuQzs7bUNBcEJEOzs7Ozs7O0FDRUE7OztBQW1JQTs7UUFBQTtRQUlFLHNCQUNTLFNBQ0EsUUFDQSxTQUNBLE9BQ0EsV0FDQTtZQU5ULGlCQVlDO1lBWFEsWUFBTyxHQUFQLE9BQU87WUFDUCxXQUFNLEdBQU4sTUFBTTtZQUNOLFlBQU8sR0FB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