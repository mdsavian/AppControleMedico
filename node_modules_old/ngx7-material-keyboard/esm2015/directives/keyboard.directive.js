/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatKeyboardService } from '../services/keyboard.service';
export class MatKeyboardDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _keyboardService
     * @param {?=} _control
     */
    constructor(_elementRef, _keyboardService, _control) {
        this._elementRef = _elementRef;
        this._keyboardService = _keyboardService;
        this._control = _control;
        this.enterClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._hideKeyboard();
    }
    /**
     * @private
     * @return {?}
     */
    _showKeyboard() {
        this._keyboardRef = this._keyboardService.open(this.matKeyboard, {
            darkTheme: this.darkTheme,
            duration: this.duration,
            isDebug: this.isDebug
        });
        // reference the input element
        this._keyboardRef.instance.setInputInstance(this._elementRef);
        // set control if given, cast to smth. non-abstract
        if (this._control) {
            this._keyboardRef.instance.attachControl(this._control.control);
        }
        // connect outputs
        this._keyboardRef.instance.enterClick.subscribe(() => this.enterClick.next());
        this._keyboardRef.instance.capsClick.subscribe(() => this.capsClick.next());
        this._keyboardRef.instance.altClick.subscribe(() => this.altClick.next());
        this._keyboardRef.instance.shiftClick.subscribe(() => this.shiftClick.next());
    }
    /**
     * @private
     * @return {?}
     */
    _hideKeyboard() {
        if (this._keyboardRef) {
            this._keyboardRef.dismiss();
        }
    }
}
MatKeyboardDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[matKeyboard], textarea[matKeyboard]'
            },] }
];
/** @nocollapse */
MatKeyboardDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: MatKeyboardService },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
MatKeyboardDirective.propDecorators = {
    matKeyboard: [{ type: Input }],
    darkTheme: [{ type: Input }],
    duration: [{ type: Input }],
    isDebug: [{ type: Input }],
    enterClick: [{ type: Output }],
    capsClick: [{ type: Output }],
    altClick: [{ type: Output }],
    shiftClick: [{ type: Output }],
    _showKeyboard: [{ type: HostListener, args: ['focus', ['$event'],] }],
    _hideKeyboard: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatKeyboardDirective.prototype._keyboardRef;
    /** @type {?} */
    MatKeyboardDirective.prototype.matKeyboard;
    /** @type {?} */
    MatKeyboardDirective.prototype.darkTheme;
    /** @type {?} */
    MatKeyboardDirective.prototype.duration;
    /** @type {?} */
    MatKeyboardDirective.prototype.isDebug;
    /** @type {?} */
    MatKeyboardDirective.prototype.enterClick;
    /** @type {?} */
    MatKeyboardDirective.prototype.capsClick;
    /** @type {?} */
    MatKeyboardDirective.prototype.altClick;
    /** @type {?} */
    MatKeyboardDirective.prototype.shiftClick;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardDirective.prototype._keyboardService;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardDirective.prototype._control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMva2V5Ym9hcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLbEUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBb0IvQixZQUFvQixXQUF1QixFQUN2QixnQkFBb0MsRUFDaEIsUUFBb0I7UUFGeEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBVmxELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxRCxjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFekQsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXhELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUlMLENBQUM7Ozs7SUFFaEUsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUdPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDL0QsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO1FBRUgsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU5RCxtREFBbUQ7UUFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBR08sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJDQUEyQzthQUN0RDs7OztZQVRtQixVQUFVO1lBS3JCLGtCQUFrQjtZQUpsQixTQUFTLHVCQStCSCxRQUFRLFlBQUksSUFBSTs7OzBCQWxCNUIsS0FBSzt3QkFFTCxLQUFLO3VCQUVMLEtBQUs7c0JBRUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLE1BQU07dUJBRU4sTUFBTTt5QkFFTixNQUFNOzRCQVVOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBdUJoQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBakRoQyw0Q0FBMkQ7O0lBRTNELDJDQUE2Qjs7SUFFN0IseUNBQTRCOztJQUU1Qix3Q0FBMEI7O0lBRTFCLHVDQUEwQjs7SUFFMUIsMENBQW9FOztJQUVwRSx5Q0FBbUU7O0lBRW5FLHdDQUFrRTs7SUFFbEUsMENBQW9FOzs7OztJQUV4RCwyQ0FBK0I7Ozs7O0lBQy9CLGdEQUE0Qzs7Ozs7SUFDNUMsd0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRLZXlib2FyZFJlZiB9IGZyb20gJy4uL2NsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2tleWJvYXJkL2tleWJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2tleWJvYXJkLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttYXRLZXlib2FyZF0sIHRleHRhcmVhW21hdEtleWJvYXJkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfa2V5Ym9hcmRSZWY6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgbWF0S2V5Ym9hcmQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgZGFya1RoZW1lOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSBpc0RlYnVnOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgZW50ZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgY2Fwc0NsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBhbHRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgc2hpZnRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2tleWJvYXJkU2VydmljZTogTWF0S2V5Ym9hcmRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBfY29udHJvbD86IE5nQ29udHJvbCkge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9oaWRlS2V5Ym9hcmQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcclxuICBwcml2YXRlIF9zaG93S2V5Ym9hcmQoKSB7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZiA9IHRoaXMuX2tleWJvYXJkU2VydmljZS5vcGVuKHRoaXMubWF0S2V5Ym9hcmQsIHtcclxuICAgICAgZGFya1RoZW1lOiB0aGlzLmRhcmtUaGVtZSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgIGlzRGVidWc6IHRoaXMuaXNEZWJ1Z1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVmZXJlbmNlIHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5zZXRJbnB1dEluc3RhbmNlKHRoaXMuX2VsZW1lbnRSZWYpO1xyXG5cclxuICAgIC8vIHNldCBjb250cm9sIGlmIGdpdmVuLCBjYXN0IHRvIHNtdGguIG5vbi1hYnN0cmFjdFxyXG4gICAgaWYgKHRoaXMuX2NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2UuYXR0YWNoQ29udHJvbCh0aGlzLl9jb250cm9sLmNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbm5lY3Qgb3V0cHV0c1xyXG4gICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2UuZW50ZXJDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5lbnRlckNsaWNrLm5leHQoKSk7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5jYXBzQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuY2Fwc0NsaWNrLm5leHQoKSk7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5hbHRDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hbHRDbGljay5uZXh0KCkpO1xyXG4gICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2Uuc2hpZnRDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaGlmdENsaWNrLm5leHQoKSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcclxuICBwcml2YXRlIF9oaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICBpZiAodGhpcy5fa2V5Ym9hcmRSZWYpIHtcclxuICAgICAgdGhpcy5fa2V5Ym9hcmRSZWYuZGlzbWlzcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19