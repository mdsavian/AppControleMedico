/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Inject, LOCALE_ID, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
import { KeyboardModifier } from '../../enums/keyboard-modifier.enum';
import { MatKeyboardService } from '../../services/keyboard.service';
import { MatKeyboardKeyComponent } from '../keyboard-key/keyboard-key.component';
/**
 * A component used to open as the default keyboard, matching material spec.
 * This should only be used internally by the keyboard service.
 */
var MatKeyboardComponent = /** @class */ (function () {
    // inject dependencies
    function MatKeyboardComponent(_locale, _keyboardService) {
        this._locale = _locale;
        this._keyboardService = _keyboardService;
        this._darkTheme = new BehaviorSubject(false);
        this._isDebug = new BehaviorSubject(false);
        this._inputInstance$ = new BehaviorSubject(null);
        this._modifier = KeyboardModifier.None;
        this._capsLocked = false;
        this.cssClass = true;
        this.enterClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
    }
    Object.defineProperty(MatKeyboardComponent.prototype, "inputInstance", {
        // returns an observable of the input instance
        get: 
        // returns an observable of the input instance
        /**
         * @return {?}
         */
        function () {
            return this._inputInstance$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardComponent.prototype, "darkTheme", {
        set: /**
         * @param {?} darkTheme
         * @return {?}
         */
        function (darkTheme) {
            if (this._darkTheme.getValue() !== darkTheme) {
                this._darkTheme.next(darkTheme);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardComponent.prototype, "isDebug", {
        set: /**
         * @param {?} isDebug
         * @return {?}
         */
        function (isDebug) {
            if (this._isDebug.getValue() !== isDebug) {
                this._isDebug.next(isDebug);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardComponent.prototype, "darkTheme$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._darkTheme.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardComponent.prototype, "isDebug$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDebug.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} inputInstance
     * @return {?}
     */
    MatKeyboardComponent.prototype.setInputInstance = /**
     * @param {?} inputInstance
     * @return {?}
     */
    function (inputInstance) {
        this._inputInstance$.next(inputInstance);
    };
    /**
     * @param {?} control
     * @return {?}
     */
    MatKeyboardComponent.prototype.attachControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        this.control = control;
    };
    /**
     * @return {?}
     */
    MatKeyboardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // set a fallback using the locale
        if (!this.layout) {
            this.locale = this._keyboardService.mapLocale(this._locale) ? this._locale : 'en-US';
            this.layout = this._keyboardService.getLayoutForLocale(this.locale);
        }
    };
    /**
     * dismisses the keyboard
     */
    /**
     * dismisses the keyboard
     * @return {?}
     */
    MatKeyboardComponent.prototype.dismiss = /**
     * dismisses the keyboard
     * @return {?}
     */
    function () {
        this.keyboardRef.dismiss();
    };
    /**
     * checks if a given key is currently pressed
     * @param key
     * @param
     */
    /**
     * checks if a given key is currently pressed
     * @param {?} key
     * @return {?}
     */
    MatKeyboardComponent.prototype.isActive = /**
     * checks if a given key is currently pressed
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var modifiedKey = this.getModifiedKey(key);
        /** @type {?} */
        var isActiveCapsLock = modifiedKey === KeyboardClassKey.Caps && this._capsLocked;
        /** @type {?} */
        var isActiveModifier = modifiedKey === KeyboardModifier[this._modifier];
        return isActiveCapsLock || isActiveModifier;
    };
    // retrieves modified key
    // retrieves modified key
    /**
     * @param {?} key
     * @return {?}
     */
    MatKeyboardComponent.prototype.getModifiedKey = 
    // retrieves modified key
    /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var modifier = this._modifier;
        // `CapsLock` inverts the meaning of `Shift`
        if (this._capsLocked) {
            modifier = this._invertShiftModifier(this._modifier);
        }
        return key[modifier];
    };
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {?} event
     * @return {?}
     */
    MatKeyboardComponent.prototype.onKeyDown = /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // 'activate' corresponding key
        this._keys
            .filter(function (key) { return key.key === event.key; })
            .forEach(function (key) {
            key.pressed = true;
        });
        // simulate modifier press
        if (event.key === KeyboardClassKey.Caps) {
            this.onCapsClick(event.getModifierState(KeyboardClassKey.Caps));
        }
        if (event.key === KeyboardClassKey.Alt && this._modifier !== KeyboardModifier.Alt && this._modifier !== KeyboardModifier.ShiftAlt) {
            this.onAltClick();
        }
        if (event.key === KeyboardClassKey.Shift && this._modifier !== KeyboardModifier.Shift && this._modifier !== KeyboardModifier.ShiftAlt) {
            this.onShiftClick();
        }
    };
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {?} event
     * @return {?}
     */
    MatKeyboardComponent.prototype.onKeyUp = /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // 'deactivate' corresponding key
        this._keys
            .filter(function (key) { return key.key === event.key; })
            .forEach(function (key) {
            key.pressed = false;
        });
        // simulate modifier release
        if (event.key === KeyboardClassKey.Alt && (this._modifier === KeyboardModifier.Alt || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onAltClick();
        }
        if (event.key === KeyboardClassKey.Shift && (this._modifier === KeyboardModifier.Shift || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onShiftClick();
        }
    };
    /**
     * bubbles event if submit is potentially triggered
     */
    /**
     * bubbles event if submit is potentially triggered
     * @return {?}
     */
    MatKeyboardComponent.prototype.onEnterClick = /**
     * bubbles event if submit is potentially triggered
     * @return {?}
     */
    function () {
        // notify subscribers
        this.enterClick.next();
    };
    /**
     * simulates clicking `CapsLock` key
     * @param targetState
     */
    /**
     * simulates clicking `CapsLock` key
     * @param {?=} targetState
     * @return {?}
     */
    MatKeyboardComponent.prototype.onCapsClick = /**
     * simulates clicking `CapsLock` key
     * @param {?=} targetState
     * @return {?}
     */
    function (targetState) {
        if (targetState === void 0) { targetState = !this._capsLocked; }
        // not implemented
        this._capsLocked = targetState;
        // notify subscribers
        this.capsClick.next();
    };
    /**
     * simulates clicking `Alt` key
     */
    /**
     * simulates clicking `Alt` key
     * @return {?}
     */
    MatKeyboardComponent.prototype.onAltClick = /**
     * simulates clicking `Alt` key
     * @return {?}
     */
    function () {
        // invert modifier meaning
        this._modifier = this._invertAltModifier(this._modifier);
        // notify subscribers
        this.altClick.next();
    };
    /**
     * simulates clicking `Shift` key
     */
    /**
     * simulates clicking `Shift` key
     * @return {?}
     */
    MatKeyboardComponent.prototype.onShiftClick = /**
     * simulates clicking `Shift` key
     * @return {?}
     */
    function () {
        // invert modifier meaning
        this._modifier = this._invertShiftModifier(this._modifier);
        // notify subscribers
        this.shiftClick.next();
    };
    /**
     * @private
     * @param {?} modifier
     * @return {?}
     */
    MatKeyboardComponent.prototype._invertAltModifier = /**
     * @private
     * @param {?} modifier
     * @return {?}
     */
    function (modifier) {
        switch (modifier) {
            case KeyboardModifier.None:
                return KeyboardModifier.Alt;
            case KeyboardModifier.Shift:
                return KeyboardModifier.ShiftAlt;
            case KeyboardModifier.ShiftAlt:
                return KeyboardModifier.Shift;
            case KeyboardModifier.Alt:
                return KeyboardModifier.None;
        }
    };
    /**
     * @private
     * @param {?} modifier
     * @return {?}
     */
    MatKeyboardComponent.prototype._invertShiftModifier = /**
     * @private
     * @param {?} modifier
     * @return {?}
     */
    function (modifier) {
        switch (modifier) {
            case KeyboardModifier.None:
                return KeyboardModifier.Shift;
            case KeyboardModifier.Alt:
                return KeyboardModifier.ShiftAlt;
            case KeyboardModifier.ShiftAlt:
                return KeyboardModifier.Alt;
            case KeyboardModifier.Shift:
                return KeyboardModifier.None;
        }
    };
    MatKeyboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mat-keyboard',
                    template: "<div class=\"mat-keyboard-wrapper\"\r\n     [class.dark-theme]=\"darkTheme$ | async\"\r\n     [class.debug]=\"isDebug$ | async\"\r\n>\r\n  <nav class=\"mat-keyboard-layout\">\r\n    <div class=\"mat-keyboard-row\"\r\n         *ngFor=\"let row of layout.keys\"\r\n    >\r\n      <ng-container *ngFor=\"let key of row\">\r\n        <mat-keyboard-key class=\"mat-keyboard-col\"\r\n                          *ngIf=\"getModifiedKey(key)\"\r\n                          [key]=\"getModifiedKey(key)\"\r\n                          [active]=\"isActive(key)\"\r\n                          [input]=\"inputInstance | async\"\r\n                          [control]=\"control\"\r\n                          (enterClick)=\"onEnterClick()\"\r\n                          (capsClick)=\"onCapsClick()\"\r\n                          (altClick)=\"onAltClick()\"\r\n                          (shiftClick)=\"onShiftClick()\"\r\n        ></mat-keyboard-key>\r\n      </ng-container>\r\n    </div>\r\n  </nav>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    styles: [".mat-keyboard-wrapper{background-color:#f5f5f5;border-radius:2px;display:flex;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;justify-content:space-between;line-height:20px;padding:14px 24px}.mat-keyboard-wrapper.dark-theme{background-color:#424242}.mat-keyboard-action{background:0 0;color:inherit;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:600;line-height:1;margin-left:8px;text-transform:uppercase}:host(.dark-theme) .mat-keyboard-action{color:#f5f5f5}.mat-keyboard-layout{width:100%}.mat-keyboard-row{align-items:stretch;display:flex;flex-direction:row;flex-wrap:nowrap}.mat-keyboard-col{box-sizing:border-box;flex:1 1 auto;padding:4px}.mat-keyboard-key{min-width:0;width:100%}:host(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host(.debug.dark-theme) .mat-keyboard-key-deadkey{background-color:#663399}:host(.debug.dark-theme) .mat-keyboard-key-modifier{background-color:#9370db}"]
                }] }
    ];
    /** @nocollapse */
    MatKeyboardComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: MatKeyboardService }
    ]; };
    MatKeyboardComponent.propDecorators = {
        _keys: [{ type: ViewChildren, args: [MatKeyboardKeyComponent,] }],
        cssClass: [{ type: HostBinding, args: ['class.mat-keyboard',] }],
        onKeyDown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }],
        onKeyUp: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
    };
    return MatKeyboardComponent;
}());
export { MatKeyboardComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._darkTheme;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._isDebug;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._inputInstance$;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._keys;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._modifier;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._capsLocked;
    /** @type {?} */
    MatKeyboardComponent.prototype.locale;
    /** @type {?} */
    MatKeyboardComponent.prototype.layout;
    /** @type {?} */
    MatKeyboardComponent.prototype.control;
    /** @type {?} */
    MatKeyboardComponent.prototype.keyboardRef;
    /** @type {?} */
    MatKeyboardComponent.prototype.cssClass;
    /** @type {?} */
    MatKeyboardComponent.prototype.enterClick;
    /** @type {?} */
    MatKeyboardComponent.prototype.capsClick;
    /** @type {?} */
    MatKeyboardComponent.prototype.altClick;
    /** @type {?} */
    MatKeyboardComponent.prototype.shiftClick;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardComponent.prototype._keyboardService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1SyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7OztBQVFqRjtJQW9FRSxzQkFBc0I7SUFDdEIsOEJBQXVDLE9BQWUsRUFDNUMsZ0JBQW9DO1FBRFAsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUM1QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBN0R0QyxlQUFVLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEUsb0JBQWUsR0FBdUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFLaEYsY0FBUyxHQUFxQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFFcEQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFhNUIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUVoQixlQUFVLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFF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QixDQUFDLElBQUksQ0FBQztTQUNoQztJQUNILENBQUM7O2dCQTlPRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGkvQkFBd0M7b0JBRXhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLOztpQkFDM0I7Ozs7NkNBK0RjLE1BQU0sU0FBQyxTQUFTO2dCQTlFdEIsa0JBQWtCOzs7d0JBd0J4QixZQUFZLFNBQUMsdUJBQXVCOzJCQWlCcEMsV0FBVyxTQUFDLG9CQUFvQjs0QkEyRmhDLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkF5QjNDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUE0RjVDLDJCQUFDO0NBQUEsQUFoUEQsSUFnUEM7U0F6T1ksb0JBQW9COzs7Ozs7SUFFL0IsMENBQTBFOzs7OztJQUUxRSx3Q0FBd0U7Ozs7O0lBRXhFLCtDQUF3Rjs7Ozs7SUFFeEYscUNBQ2tEOzs7OztJQUVsRCx5Q0FBNEQ7Ozs7O0lBRTVELDJDQUE0Qjs7SUFHNUIsc0NBQWdCOztJQUVoQixzQ0FBd0I7O0lBRXhCLHVDQUF5Qjs7SUFHekIsMkNBQWtEOztJQUVsRCx3Q0FDZ0I7O0lBRWhCLDBDQUEwRDs7SUFFMUQseUNBQXlEOztJQUV6RCx3Q0FBd0Q7O0lBRXhELDBDQUEwRDs7Ozs7SUE0QjlDLHVDQUEwQzs7Ozs7SUFDcEQsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbmplY3QsIExPQ0FMRV9JRCwgT25Jbml0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZFJlZiB9IGZyb20gJy4uLy4uL2NsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRDbGFzc0tleSB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLWNsYXNzLWtleS5lbnVtJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRNb2RpZmllciB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLW1vZGlmaWVyLmVudW0nO1xyXG5pbXBvcnQgeyBJS2V5Ym9hcmRMYXlvdXQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2tleWJvYXJkLWxheW91dC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9rZXlib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQgfSBmcm9tICcuLi9rZXlib2FyZC1rZXkva2V5Ym9hcmQta2V5LmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBIGNvbXBvbmVudCB1c2VkIHRvIG9wZW4gYXMgdGhlIGRlZmF1bHQga2V5Ym9hcmQsIG1hdGNoaW5nIG1hdGVyaWFsIHNwZWMuXHJcbiAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoZSBrZXlib2FyZCBzZXJ2aWNlLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQta2V5Ym9hcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXlib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4va2V5Ym9hcmQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0S2V5Ym9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIF9kYXJrVGhlbWU6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICBwcml2YXRlIF9pc0RlYnVnOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5wdXRJbnN0YW5jZSQ6IEJlaGF2aW9yU3ViamVjdDxFbGVtZW50UmVmIHwgbnVsbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKE1hdEtleWJvYXJkS2V5Q29tcG9uZW50KVxyXG4gIHByaXZhdGUgX2tleXM6IFF1ZXJ5TGlzdDxNYXRLZXlib2FyZEtleUNvbXBvbmVudD47XHJcblxyXG4gIHByaXZhdGUgX21vZGlmaWVyOiBLZXlib2FyZE1vZGlmaWVyID0gS2V5Ym9hcmRNb2RpZmllci5Ob25lO1xyXG5cclxuICBwcml2YXRlIF9jYXBzTG9ja2VkID0gZmFsc2U7XHJcblxyXG4gIC8vIHRoZSBzZXJ2aWNlIHByb3ZpZGVzIGEgbG9jYWxlIG9yIGxheW91dCBvcHRpb25hbGx5XHJcbiAgbG9jYWxlPzogc3RyaW5nO1xyXG5cclxuICBsYXlvdXQ6IElLZXlib2FyZExheW91dDtcclxuXHJcbiAgY29udHJvbDogQWJzdHJhY3RDb250cm9sO1xyXG5cclxuICAvLyB0aGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBtYWtpbmcgdXAgdGhlIGNvbnRlbnQgb2YgdGhlIGtleWJvYXJkXHJcbiAga2V5Ym9hcmRSZWY6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQta2V5Ym9hcmQnKVxyXG4gIGNzc0NsYXNzID0gdHJ1ZTtcclxuXHJcbiAgZW50ZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjYXBzQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgYWx0Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgc2hpZnRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAvLyByZXR1cm5zIGFuIG9ic2VydmFibGUgb2YgdGhlIGlucHV0IGluc3RhbmNlXHJcbiAgZ2V0IGlucHV0SW5zdGFuY2UoKTogT2JzZXJ2YWJsZTxFbGVtZW50UmVmIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0SW5zdGFuY2UkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRhcmtUaGVtZShkYXJrVGhlbWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLl9kYXJrVGhlbWUuZ2V0VmFsdWUoKSAhPT0gZGFya1RoZW1lKSB7XHJcbiAgICAgIHRoaXMuX2RhcmtUaGVtZS5uZXh0KGRhcmtUaGVtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEZWJ1Zyhpc0RlYnVnOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5faXNEZWJ1Zy5nZXRWYWx1ZSgpICE9PSBpc0RlYnVnKSB7XHJcbiAgICAgIHRoaXMuX2lzRGVidWcubmV4dChpc0RlYnVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkYXJrVGhlbWUkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhcmtUaGVtZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0RlYnVnJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9pc0RlYnVnLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5qZWN0IGRlcGVuZGVuY2llc1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcclxuICAgIHByaXZhdGUgX2tleWJvYXJkU2VydmljZTogTWF0S2V5Ym9hcmRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgc2V0SW5wdXRJbnN0YW5jZShpbnB1dEluc3RhbmNlOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLl9pbnB1dEluc3RhbmNlJC5uZXh0KGlucHV0SW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoQ29udHJvbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcclxuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHNldCBhIGZhbGxiYWNrIHVzaW5nIHRoZSBsb2NhbGVcclxuICAgIGlmICghdGhpcy5sYXlvdXQpIHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLl9rZXlib2FyZFNlcnZpY2UubWFwTG9jYWxlKHRoaXMuX2xvY2FsZSkgPyB0aGlzLl9sb2NhbGUgOiAnZW4tVVMnO1xyXG4gICAgICB0aGlzLmxheW91dCA9IHRoaXMuX2tleWJvYXJkU2VydmljZS5nZXRMYXlvdXRGb3JMb2NhbGUodGhpcy5sb2NhbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZGlzbWlzc2VzIHRoZSBrZXlib2FyZFxyXG4gICAqL1xyXG4gIGRpc21pc3MoKSB7XHJcbiAgICB0aGlzLmtleWJvYXJkUmVmLmRpc21pc3MoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoZWNrcyBpZiBhIGdpdmVuIGtleSBpcyBjdXJyZW50bHkgcHJlc3NlZFxyXG4gICAqIEBwYXJhbSBrZXlcclxuICAgKiBAcGFyYW1cclxuICAgKi9cclxuICBpc0FjdGl2ZShrZXk6IChzdHJpbmcgfCBLZXlib2FyZENsYXNzS2V5KVtdKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBtb2RpZmllZEtleTogc3RyaW5nID0gdGhpcy5nZXRNb2RpZmllZEtleShrZXkpO1xyXG4gICAgY29uc3QgaXNBY3RpdmVDYXBzTG9jazogYm9vbGVhbiA9IG1vZGlmaWVkS2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkNhcHMgJiYgdGhpcy5fY2Fwc0xvY2tlZDtcclxuICAgIGNvbnN0IGlzQWN0aXZlTW9kaWZpZXI6IGJvb2xlYW4gPSBtb2RpZmllZEtleSA9PT0gS2V5Ym9hcmRNb2RpZmllclt0aGlzLl9tb2RpZmllcl07XHJcbiAgICByZXR1cm4gaXNBY3RpdmVDYXBzTG9jayB8fCBpc0FjdGl2ZU1vZGlmaWVyO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0cmlldmVzIG1vZGlmaWVkIGtleVxyXG4gIGdldE1vZGlmaWVkS2V5KGtleTogKHN0cmluZyB8IEtleWJvYXJkQ2xhc3NLZXkpW10pOiBzdHJpbmcge1xyXG4gICAgbGV0IG1vZGlmaWVyOiBLZXlib2FyZE1vZGlmaWVyID0gdGhpcy5fbW9kaWZpZXI7XHJcblxyXG4gICAgLy8gYENhcHNMb2NrYCBpbnZlcnRzIHRoZSBtZWFuaW5nIG9mIGBTaGlmdGBcclxuICAgIGlmICh0aGlzLl9jYXBzTG9ja2VkKSB7XHJcbiAgICAgIG1vZGlmaWVyID0gdGhpcy5faW52ZXJ0U2hpZnRNb2RpZmllcih0aGlzLl9tb2RpZmllcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtleVttb2RpZmllcl07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBsaXN0ZW5zIHRvIHVzZXJzIGtleWJvYXJkIGlucHV0cyB0byBzaW11bGF0ZSBvbiB2aXJ0dWFsIGtleWJvYXJkLCB0b29cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIC8vICdhY3RpdmF0ZScgY29ycmVzcG9uZGluZyBrZXlcclxuICAgIHRoaXMuX2tleXNcclxuICAgICAgLmZpbHRlcigoa2V5OiBNYXRLZXlib2FyZEtleUNvbXBvbmVudCkgPT4ga2V5LmtleSA9PT0gZXZlbnQua2V5KVxyXG4gICAgICAuZm9yRWFjaCgoa2V5OiBNYXRLZXlib2FyZEtleUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgIGtleS5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gc2ltdWxhdGUgbW9kaWZpZXIgcHJlc3NcclxuICAgIGlmIChldmVudC5rZXkgPT09IEtleWJvYXJkQ2xhc3NLZXkuQ2Fwcykge1xyXG4gICAgICB0aGlzLm9uQ2Fwc0NsaWNrKGV2ZW50LmdldE1vZGlmaWVyU3RhdGUoS2V5Ym9hcmRDbGFzc0tleS5DYXBzKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkFsdCAmJiB0aGlzLl9tb2RpZmllciAhPT0gS2V5Ym9hcmRNb2RpZmllci5BbHQgJiYgdGhpcy5fbW9kaWZpZXIgIT09IEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQpIHtcclxuICAgICAgdGhpcy5vbkFsdENsaWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LlNoaWZ0ICYmIHRoaXMuX21vZGlmaWVyICE9PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0ICYmIHRoaXMuX21vZGlmaWVyICE9PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSB7XHJcbiAgICAgIHRoaXMub25TaGlmdENsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBsaXN0ZW5zIHRvIHVzZXJzIGtleWJvYXJkIGlucHV0cyB0byBzaW11bGF0ZSBvbiB2aXJ0dWFsIGtleWJvYXJkLCB0b29cclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgLy8gJ2RlYWN0aXZhdGUnIGNvcnJlc3BvbmRpbmcga2V5XHJcbiAgICB0aGlzLl9rZXlzXHJcbiAgICAgIC5maWx0ZXIoKGtleTogTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpID0+IGtleS5rZXkgPT09IGV2ZW50LmtleSlcclxuICAgICAgLmZvckVhY2goKGtleTogTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpID0+IHtcclxuICAgICAgICBrZXkucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBzaW11bGF0ZSBtb2RpZmllciByZWxlYXNlXHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkFsdCAmJiAodGhpcy5fbW9kaWZpZXIgPT09IEtleWJvYXJkTW9kaWZpZXIuQWx0IHx8IHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSkge1xyXG4gICAgICB0aGlzLm9uQWx0Q2xpY2soKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQgJiYgKHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0IHx8IHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSkge1xyXG4gICAgICB0aGlzLm9uU2hpZnRDbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYnViYmxlcyBldmVudCBpZiBzdWJtaXQgaXMgcG90ZW50aWFsbHkgdHJpZ2dlcmVkXHJcbiAgICovXHJcbiAgb25FbnRlckNsaWNrKCkge1xyXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXHJcbiAgICB0aGlzLmVudGVyQ2xpY2submV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2ltdWxhdGVzIGNsaWNraW5nIGBDYXBzTG9ja2Aga2V5XHJcbiAgICogQHBhcmFtIHRhcmdldFN0YXRlXHJcbiAgICovXHJcbiAgb25DYXBzQ2xpY2sodGFyZ2V0U3RhdGUgPSAhdGhpcy5fY2Fwc0xvY2tlZCkge1xyXG4gICAgLy8gbm90IGltcGxlbWVudGVkXHJcbiAgICB0aGlzLl9jYXBzTG9ja2VkID0gdGFyZ2V0U3RhdGU7XHJcblxyXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXHJcbiAgICB0aGlzLmNhcHNDbGljay5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzaW11bGF0ZXMgY2xpY2tpbmcgYEFsdGAga2V5XHJcbiAgICovXHJcbiAgb25BbHRDbGljaygpIHtcclxuICAgIC8vIGludmVydCBtb2RpZmllciBtZWFuaW5nXHJcbiAgICB0aGlzLl9tb2RpZmllciA9IHRoaXMuX2ludmVydEFsdE1vZGlmaWVyKHRoaXMuX21vZGlmaWVyKTtcclxuXHJcbiAgICAvLyBub3RpZnkgc3Vic2NyaWJlcnNcclxuICAgIHRoaXMuYWx0Q2xpY2submV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2ltdWxhdGVzIGNsaWNraW5nIGBTaGlmdGAga2V5XHJcbiAgICovXHJcbiAgb25TaGlmdENsaWNrKCkge1xyXG4gICAgLy8gaW52ZXJ0IG1vZGlmaWVyIG1lYW5pbmdcclxuICAgIHRoaXMuX21vZGlmaWVyID0gdGhpcy5faW52ZXJ0U2hpZnRNb2RpZmllcih0aGlzLl9tb2RpZmllcik7XHJcblxyXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXHJcbiAgICB0aGlzLnNoaWZ0Q2xpY2submV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW52ZXJ0QWx0TW9kaWZpZXIobW9kaWZpZXI6IEtleWJvYXJkTW9kaWZpZXIpOiBLZXlib2FyZE1vZGlmaWVyIHtcclxuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLk5vbmU6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuQWx0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLkFsdDpcclxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5Ob25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW52ZXJ0U2hpZnRNb2RpZmllcihtb2RpZmllcjogS2V5Ym9hcmRNb2RpZmllcik6IEtleWJvYXJkTW9kaWZpZXIge1xyXG4gICAgc3dpdGNoIChtb2RpZmllcikge1xyXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuTm9uZTpcclxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5TaGlmdDtcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5BbHQ6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQ7XHJcblxyXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuU2hpZnRBbHQ6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuQWx0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLk5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=