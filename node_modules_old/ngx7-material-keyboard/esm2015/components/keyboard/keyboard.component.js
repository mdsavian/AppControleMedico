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
export class MatKeyboardComponent {
    // inject dependencies
    /**
     * @param {?} _locale
     * @param {?} _keyboardService
     */
    constructor(_locale, _keyboardService) {
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
    // returns an observable of the input instance
    /**
     * @return {?}
     */
    get inputInstance() {
        return this._inputInstance$.asObservable();
    }
    /**
     * @param {?} darkTheme
     * @return {?}
     */
    set darkTheme(darkTheme) {
        if (this._darkTheme.getValue() !== darkTheme) {
            this._darkTheme.next(darkTheme);
        }
    }
    /**
     * @param {?} isDebug
     * @return {?}
     */
    set isDebug(isDebug) {
        if (this._isDebug.getValue() !== isDebug) {
            this._isDebug.next(isDebug);
        }
    }
    /**
     * @return {?}
     */
    get darkTheme$() {
        return this._darkTheme.asObservable();
    }
    /**
     * @return {?}
     */
    get isDebug$() {
        return this._isDebug.asObservable();
    }
    /**
     * @param {?} inputInstance
     * @return {?}
     */
    setInputInstance(inputInstance) {
        this._inputInstance$.next(inputInstance);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    attachControl(control) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // set a fallback using the locale
        if (!this.layout) {
            this.locale = this._keyboardService.mapLocale(this._locale) ? this._locale : 'en-US';
            this.layout = this._keyboardService.getLayoutForLocale(this.locale);
        }
    }
    /**
     * dismisses the keyboard
     * @return {?}
     */
    dismiss() {
        this.keyboardRef.dismiss();
    }
    /**
     * checks if a given key is currently pressed
     * @param {?} key
     * @return {?}
     */
    isActive(key) {
        /** @type {?} */
        const modifiedKey = this.getModifiedKey(key);
        /** @type {?} */
        const isActiveCapsLock = modifiedKey === KeyboardClassKey.Caps && this._capsLocked;
        /** @type {?} */
        const isActiveModifier = modifiedKey === KeyboardModifier[this._modifier];
        return isActiveCapsLock || isActiveModifier;
    }
    // retrieves modified key
    /**
     * @param {?} key
     * @return {?}
     */
    getModifiedKey(key) {
        /** @type {?} */
        let modifier = this._modifier;
        // `CapsLock` inverts the meaning of `Shift`
        if (this._capsLocked) {
            modifier = this._invertShiftModifier(this._modifier);
        }
        return key[modifier];
    }
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // 'activate' corresponding key
        this._keys
            .filter((key) => key.key === event.key)
            .forEach((key) => {
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
    }
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        // 'deactivate' corresponding key
        this._keys
            .filter((key) => key.key === event.key)
            .forEach((key) => {
            key.pressed = false;
        });
        // simulate modifier release
        if (event.key === KeyboardClassKey.Alt && (this._modifier === KeyboardModifier.Alt || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onAltClick();
        }
        if (event.key === KeyboardClassKey.Shift && (this._modifier === KeyboardModifier.Shift || this._modifier === KeyboardModifier.ShiftAlt)) {
            this.onShiftClick();
        }
    }
    /**
     * bubbles event if submit is potentially triggered
     * @return {?}
     */
    onEnterClick() {
        // notify subscribers
        this.enterClick.next();
    }
    /**
     * simulates clicking `CapsLock` key
     * @param {?=} targetState
     * @return {?}
     */
    onCapsClick(targetState = !this._capsLocked) {
        // not implemented
        this._capsLocked = targetState;
        // notify subscribers
        this.capsClick.next();
    }
    /**
     * simulates clicking `Alt` key
     * @return {?}
     */
    onAltClick() {
        // invert modifier meaning
        this._modifier = this._invertAltModifier(this._modifier);
        // notify subscribers
        this.altClick.next();
    }
    /**
     * simulates clicking `Shift` key
     * @return {?}
     */
    onShiftClick() {
        // invert modifier meaning
        this._modifier = this._invertShiftModifier(this._modifier);
        // notify subscribers
        this.shiftClick.next();
    }
    /**
     * @private
     * @param {?} modifier
     * @return {?}
     */
    _invertAltModifier(modifier) {
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
    }
    /**
     * @private
     * @param {?} modifier
     * @return {?}
     */
    _invertShiftModifier(modifier) {
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
    }
}
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
MatKeyboardComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: MatKeyboardService }
];
MatKeyboardComponent.propDecorators = {
    _keys: [{ type: ViewChildren, args: [MatKeyboardKeyComponent,] }],
    cssClass: [{ type: HostBinding, args: ['class.mat-keyboard',] }],
    onKeyDown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }],
    onKeyUp: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1SyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7OztBQWVqRixNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUE4RC9CLFlBQXVDLE9BQWUsRUFDNUMsZ0JBQW9DO1FBRFAsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUM1QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBN0R0QyxlQUFVLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEUsb0JBQWUsR0FBdUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFLaEYsY0FBUyxHQUFxQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFFcEQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFhNUIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUVoQixlQUFVLEdBQXVCLElBQUksWUFBWSxFQUFR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LENBQUM7Ozs7Ozs7SUEzSTFDLDBDQUEwRTs7Ozs7SUFFMUUsd0NBQXdFOzs7OztJQUV4RSwrQ0FBd0Y7Ozs7O0lBRXhGLHFDQUNrRDs7Ozs7SUFFbEQseUNBQTREOzs7OztJQUU1RCwyQ0FBNEI7O0lBRzVCLHNDQUFnQjs7SUFFaEIsc0NBQXdCOztJQUV4Qix1Q0FBeUI7O0lBR3pCLDJDQUFrRDs7SUFFbEQsd0NBQ2dCOztJQUVoQiwwQ0FBMEQ7O0lBRTFELHlDQUF5RDs7SUFFekQsd0NBQXdEOztJQUV4RCwwQ0FBMEQ7Ozs7O0lBNEI5Qyx1Q0FBMEM7Ozs7O0lBQ3BELGdEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBMT0NBTEVfSUQsIE9uSW5pdCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRSZWYgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2tleWJvYXJkLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IEtleWJvYXJkQ2xhc3NLZXkgfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1jbGFzcy1rZXkuZW51bSc7XHJcbmltcG9ydCB7IEtleWJvYXJkTW9kaWZpZXIgfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1tb2RpZmllci5lbnVtJztcclxuaW1wb3J0IHsgSUtleWJvYXJkTGF5b3V0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1sYXlvdXQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMva2V5Ym9hcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkS2V5Q29tcG9uZW50IH0gZnJvbSAnLi4va2V5Ym9hcmQta2V5L2tleWJvYXJkLWtleS5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBjb21wb25lbnQgdXNlZCB0byBvcGVuIGFzIHRoZSBkZWZhdWx0IGtleWJvYXJkLCBtYXRjaGluZyBtYXRlcmlhbCBzcGVjLlxyXG4gKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW50ZXJuYWxseSBieSB0aGUga2V5Ym9hcmQgc2VydmljZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWtleWJvYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4va2V5Ym9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2tleWJvYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBfZGFya1RoZW1lOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgcHJpdmF0ZSBfaXNEZWJ1ZzogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gIHByaXZhdGUgX2lucHV0SW5zdGFuY2UkOiBCZWhhdmlvclN1YmplY3Q8RWxlbWVudFJlZiB8IG51bGw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbihNYXRLZXlib2FyZEtleUNvbXBvbmVudClcclxuICBwcml2YXRlIF9rZXlzOiBRdWVyeUxpc3Q8TWF0S2V5Ym9hcmRLZXlDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIF9tb2RpZmllcjogS2V5Ym9hcmRNb2RpZmllciA9IEtleWJvYXJkTW9kaWZpZXIuTm9uZTtcclxuXHJcbiAgcHJpdmF0ZSBfY2Fwc0xvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAvLyB0aGUgc2VydmljZSBwcm92aWRlcyBhIGxvY2FsZSBvciBsYXlvdXQgb3B0aW9uYWxseVxyXG4gIGxvY2FsZT86IHN0cmluZztcclxuXHJcbiAgbGF5b3V0OiBJS2V5Ym9hcmRMYXlvdXQ7XHJcblxyXG4gIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcclxuXHJcbiAgLy8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgbWFraW5nIHVwIHRoZSBjb250ZW50IG9mIHRoZSBrZXlib2FyZFxyXG4gIGtleWJvYXJkUmVmOiBNYXRLZXlib2FyZFJlZjxNYXRLZXlib2FyZENvbXBvbmVudD47XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWtleWJvYXJkJylcclxuICBjc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIGVudGVyQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY2Fwc0NsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGFsdENsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHNoaWZ0Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgLy8gcmV0dXJucyBhbiBvYnNlcnZhYmxlIG9mIHRoZSBpbnB1dCBpbnN0YW5jZVxyXG4gIGdldCBpbnB1dEluc3RhbmNlKCk6IE9ic2VydmFibGU8RWxlbWVudFJlZiB8IG51bGw+IHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dEluc3RhbmNlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldCBkYXJrVGhlbWUoZGFya1RoZW1lOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fZGFya1RoZW1lLmdldFZhbHVlKCkgIT09IGRhcmtUaGVtZSkge1xyXG4gICAgICB0aGlzLl9kYXJrVGhlbWUubmV4dChkYXJrVGhlbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IGlzRGVidWcoaXNEZWJ1ZzogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX2lzRGVidWcuZ2V0VmFsdWUoKSAhPT0gaXNEZWJ1Zykge1xyXG4gICAgICB0aGlzLl9pc0RlYnVnLm5leHQoaXNEZWJ1Zyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGFya1RoZW1lJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9kYXJrVGhlbWUuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEZWJ1ZyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEZWJ1Zy5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIGluamVjdCBkZXBlbmRlbmNpZXNcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcsXHJcbiAgICBwcml2YXRlIF9rZXlib2FyZFNlcnZpY2U6IE1hdEtleWJvYXJkU2VydmljZSkgeyB9XHJcblxyXG4gIHNldElucHV0SW5zdGFuY2UoaW5wdXRJbnN0YW5jZTogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5faW5wdXRJbnN0YW5jZSQubmV4dChpbnB1dEluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaENvbnRyb2woY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBzZXQgYSBmYWxsYmFjayB1c2luZyB0aGUgbG9jYWxlXHJcbiAgICBpZiAoIXRoaXMubGF5b3V0KSB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5fa2V5Ym9hcmRTZXJ2aWNlLm1hcExvY2FsZSh0aGlzLl9sb2NhbGUpID8gdGhpcy5fbG9jYWxlIDogJ2VuLVVTJztcclxuICAgICAgdGhpcy5sYXlvdXQgPSB0aGlzLl9rZXlib2FyZFNlcnZpY2UuZ2V0TGF5b3V0Rm9yTG9jYWxlKHRoaXMubG9jYWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRpc21pc3NlcyB0aGUga2V5Ym9hcmRcclxuICAgKi9cclxuICBkaXNtaXNzKCkge1xyXG4gICAgdGhpcy5rZXlib2FyZFJlZi5kaXNtaXNzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVja3MgaWYgYSBnaXZlbiBrZXkgaXMgY3VycmVudGx5IHByZXNzZWRcclxuICAgKiBAcGFyYW0ga2V5XHJcbiAgICogQHBhcmFtXHJcbiAgICovXHJcbiAgaXNBY3RpdmUoa2V5OiAoc3RyaW5nIHwgS2V5Ym9hcmRDbGFzc0tleSlbXSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgbW9kaWZpZWRLZXk6IHN0cmluZyA9IHRoaXMuZ2V0TW9kaWZpZWRLZXkoa2V5KTtcclxuICAgIGNvbnN0IGlzQWN0aXZlQ2Fwc0xvY2s6IGJvb2xlYW4gPSBtb2RpZmllZEtleSA9PT0gS2V5Ym9hcmRDbGFzc0tleS5DYXBzICYmIHRoaXMuX2NhcHNMb2NrZWQ7XHJcbiAgICBjb25zdCBpc0FjdGl2ZU1vZGlmaWVyOiBib29sZWFuID0gbW9kaWZpZWRLZXkgPT09IEtleWJvYXJkTW9kaWZpZXJbdGhpcy5fbW9kaWZpZXJdO1xyXG4gICAgcmV0dXJuIGlzQWN0aXZlQ2Fwc0xvY2sgfHwgaXNBY3RpdmVNb2RpZmllcjtcclxuICB9XHJcblxyXG4gIC8vIHJldHJpZXZlcyBtb2RpZmllZCBrZXlcclxuICBnZXRNb2RpZmllZEtleShrZXk6IChzdHJpbmcgfCBLZXlib2FyZENsYXNzS2V5KVtdKTogc3RyaW5nIHtcclxuICAgIGxldCBtb2RpZmllcjogS2V5Ym9hcmRNb2RpZmllciA9IHRoaXMuX21vZGlmaWVyO1xyXG5cclxuICAgIC8vIGBDYXBzTG9ja2AgaW52ZXJ0cyB0aGUgbWVhbmluZyBvZiBgU2hpZnRgXHJcbiAgICBpZiAodGhpcy5fY2Fwc0xvY2tlZCkge1xyXG4gICAgICBtb2RpZmllciA9IHRoaXMuX2ludmVydFNoaWZ0TW9kaWZpZXIodGhpcy5fbW9kaWZpZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBrZXlbbW9kaWZpZXJdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbGlzdGVucyB0byB1c2VycyBrZXlib2FyZCBpbnB1dHMgdG8gc2ltdWxhdGUgb24gdmlydHVhbCBrZXlib2FyZCwgdG9vXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAvLyAnYWN0aXZhdGUnIGNvcnJlc3BvbmRpbmcga2V5XHJcbiAgICB0aGlzLl9rZXlzXHJcbiAgICAgIC5maWx0ZXIoKGtleTogTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpID0+IGtleS5rZXkgPT09IGV2ZW50LmtleSlcclxuICAgICAgLmZvckVhY2goKGtleTogTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQpID0+IHtcclxuICAgICAgICBrZXkucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIHNpbXVsYXRlIG1vZGlmaWVyIHByZXNzXHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LkNhcHMpIHtcclxuICAgICAgdGhpcy5vbkNhcHNDbGljayhldmVudC5nZXRNb2RpZmllclN0YXRlKEtleWJvYXJkQ2xhc3NLZXkuQ2FwcykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS2V5Ym9hcmRDbGFzc0tleS5BbHQgJiYgdGhpcy5fbW9kaWZpZXIgIT09IEtleWJvYXJkTW9kaWZpZXIuQWx0ICYmIHRoaXMuX21vZGlmaWVyICE9PSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0KSB7XHJcbiAgICAgIHRoaXMub25BbHRDbGljaygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCAmJiB0aGlzLl9tb2RpZmllciAhPT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdCAmJiB0aGlzLl9tb2RpZmllciAhPT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdEFsdCkge1xyXG4gICAgICB0aGlzLm9uU2hpZnRDbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbGlzdGVucyB0byB1c2VycyBrZXlib2FyZCBpbnB1dHMgdG8gc2ltdWxhdGUgb24gdmlydHVhbCBrZXlib2FyZCwgdG9vXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIC8vICdkZWFjdGl2YXRlJyBjb3JyZXNwb25kaW5nIGtleVxyXG4gICAgdGhpcy5fa2V5c1xyXG4gICAgICAuZmlsdGVyKChrZXk6IE1hdEtleWJvYXJkS2V5Q29tcG9uZW50KSA9PiBrZXkua2V5ID09PSBldmVudC5rZXkpXHJcbiAgICAgIC5mb3JFYWNoKChrZXk6IE1hdEtleWJvYXJkS2V5Q29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAga2V5LnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gc2ltdWxhdGUgbW9kaWZpZXIgcmVsZWFzZVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gS2V5Ym9hcmRDbGFzc0tleS5BbHQgJiYgKHRoaXMuX21vZGlmaWVyID09PSBLZXlib2FyZE1vZGlmaWVyLkFsdCB8fCB0aGlzLl9tb2RpZmllciA9PT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdEFsdCkpIHtcclxuICAgICAgdGhpcy5vbkFsdENsaWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBLZXlib2FyZENsYXNzS2V5LlNoaWZ0ICYmICh0aGlzLl9tb2RpZmllciA9PT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdCB8fCB0aGlzLl9tb2RpZmllciA9PT0gS2V5Ym9hcmRNb2RpZmllci5TaGlmdEFsdCkpIHtcclxuICAgICAgdGhpcy5vblNoaWZ0Q2xpY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGJ1YmJsZXMgZXZlbnQgaWYgc3VibWl0IGlzIHBvdGVudGlhbGx5IHRyaWdnZXJlZFxyXG4gICAqL1xyXG4gIG9uRW50ZXJDbGljaygpIHtcclxuICAgIC8vIG5vdGlmeSBzdWJzY3JpYmVyc1xyXG4gICAgdGhpcy5lbnRlckNsaWNrLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNpbXVsYXRlcyBjbGlja2luZyBgQ2Fwc0xvY2tgIGtleVxyXG4gICAqIEBwYXJhbSB0YXJnZXRTdGF0ZVxyXG4gICAqL1xyXG4gIG9uQ2Fwc0NsaWNrKHRhcmdldFN0YXRlID0gIXRoaXMuX2NhcHNMb2NrZWQpIHtcclxuICAgIC8vIG5vdCBpbXBsZW1lbnRlZFxyXG4gICAgdGhpcy5fY2Fwc0xvY2tlZCA9IHRhcmdldFN0YXRlO1xyXG5cclxuICAgIC8vIG5vdGlmeSBzdWJzY3JpYmVyc1xyXG4gICAgdGhpcy5jYXBzQ2xpY2submV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2ltdWxhdGVzIGNsaWNraW5nIGBBbHRgIGtleVxyXG4gICAqL1xyXG4gIG9uQWx0Q2xpY2soKSB7XHJcbiAgICAvLyBpbnZlcnQgbW9kaWZpZXIgbWVhbmluZ1xyXG4gICAgdGhpcy5fbW9kaWZpZXIgPSB0aGlzLl9pbnZlcnRBbHRNb2RpZmllcih0aGlzLl9tb2RpZmllcik7XHJcblxyXG4gICAgLy8gbm90aWZ5IHN1YnNjcmliZXJzXHJcbiAgICB0aGlzLmFsdENsaWNrLm5leHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNpbXVsYXRlcyBjbGlja2luZyBgU2hpZnRgIGtleVxyXG4gICAqL1xyXG4gIG9uU2hpZnRDbGljaygpIHtcclxuICAgIC8vIGludmVydCBtb2RpZmllciBtZWFuaW5nXHJcbiAgICB0aGlzLl9tb2RpZmllciA9IHRoaXMuX2ludmVydFNoaWZ0TW9kaWZpZXIodGhpcy5fbW9kaWZpZXIpO1xyXG5cclxuICAgIC8vIG5vdGlmeSBzdWJzY3JpYmVyc1xyXG4gICAgdGhpcy5zaGlmdENsaWNrLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ludmVydEFsdE1vZGlmaWVyKG1vZGlmaWVyOiBLZXlib2FyZE1vZGlmaWVyKTogS2V5Ym9hcmRNb2RpZmllciB7XHJcbiAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5Ob25lOlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLkFsdDtcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5TaGlmdDpcclxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5TaGlmdEFsdDtcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5TaGlmdEFsdDpcclxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5TaGlmdDtcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5BbHQ6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuTm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ludmVydFNoaWZ0TW9kaWZpZXIobW9kaWZpZXI6IEtleWJvYXJkTW9kaWZpZXIpOiBLZXlib2FyZE1vZGlmaWVyIHtcclxuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLk5vbmU6XHJcbiAgICAgICAgcmV0dXJuIEtleWJvYXJkTW9kaWZpZXIuU2hpZnQ7XHJcblxyXG4gICAgICBjYXNlIEtleWJvYXJkTW9kaWZpZXIuQWx0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0O1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZE1vZGlmaWVyLlNoaWZ0QWx0OlxyXG4gICAgICAgIHJldHVybiBLZXlib2FyZE1vZGlmaWVyLkFsdDtcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRNb2RpZmllci5TaGlmdDpcclxuICAgICAgICByZXR1cm4gS2V5Ym9hcmRNb2RpZmllci5Ob25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19