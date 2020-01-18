/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatKeyboardService } from '../services/keyboard.service';
var MatKeyboardDirective = /** @class */ (function () {
    function MatKeyboardDirective(_elementRef, _keyboardService, _control) {
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
    MatKeyboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._hideKeyboard();
    };
    /**
     * @private
     * @return {?}
     */
    MatKeyboardDirective.prototype._showKeyboard = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
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
        this._keyboardRef.instance.enterClick.subscribe(function () { return _this.enterClick.next(); });
        this._keyboardRef.instance.capsClick.subscribe(function () { return _this.capsClick.next(); });
        this._keyboardRef.instance.altClick.subscribe(function () { return _this.altClick.next(); });
        this._keyboardRef.instance.shiftClick.subscribe(function () { return _this.shiftClick.next(); });
    };
    /**
     * @private
     * @return {?}
     */
    MatKeyboardDirective.prototype._hideKeyboard = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._keyboardRef) {
            this._keyboardRef.dismiss();
        }
    };
    MatKeyboardDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[matKeyboard], textarea[matKeyboard]'
                },] }
    ];
    /** @nocollapse */
    MatKeyboardDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MatKeyboardService },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
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
    return MatKeyboardDirective;
}());
export { MatKeyboardDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMva2V5Ym9hcmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbEU7SUF1QkUsOEJBQW9CLFdBQXVCLEVBQ3ZCLGdCQUFvQyxFQUNoQixRQUFvQjtRQUZ4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFWbEQsZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTFELGNBQVMsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV6RCxhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFeEQsZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBSUwsQ0FBQzs7OztJQUVoRSwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFHTyw0Q0FBYTs7OztJQURyQjtRQUFBLGlCQXFCQztRQW5CQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMvRCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7UUFFSCw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlELG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakU7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBR08sNENBQWE7Ozs7SUFEckI7UUFFRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztpQkFDdEQ7Ozs7Z0JBVG1CLFVBQVU7Z0JBS3JCLGtCQUFrQjtnQkFKbEIsU0FBUyx1QkErQkgsUUFBUSxZQUFJLElBQUk7Ozs4QkFsQjVCLEtBQUs7NEJBRUwsS0FBSzsyQkFFTCxLQUFLOzBCQUVMLEtBQUs7NkJBRUwsTUFBTTs0QkFFTixNQUFNOzJCQUVOLE1BQU07NkJBRU4sTUFBTTtnQ0FVTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dDQXVCaEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFPbEMsMkJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTFEWSxvQkFBb0I7Ozs7OztJQUUvQiw0Q0FBMkQ7O0lBRTNELDJDQUE2Qjs7SUFFN0IseUNBQTRCOztJQUU1Qix3Q0FBMEI7O0lBRTFCLHVDQUEwQjs7SUFFMUIsMENBQW9FOztJQUVwRSx5Q0FBbUU7O0lBRW5FLHdDQUFrRTs7SUFFbEUsMENBQW9FOzs7OztJQUV4RCwyQ0FBK0I7Ozs7O0lBQy9CLGdEQUE0Qzs7Ozs7SUFDNUMsd0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRLZXlib2FyZFJlZiB9IGZyb20gJy4uL2NsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2tleWJvYXJkL2tleWJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2tleWJvYXJkLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFttYXRLZXlib2FyZF0sIHRleHRhcmVhW21hdEtleWJvYXJkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfa2V5Ym9hcmRSZWY6IE1hdEtleWJvYXJkUmVmPE1hdEtleWJvYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgbWF0S2V5Ym9hcmQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgZGFya1RoZW1lOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSBpc0RlYnVnOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgZW50ZXJDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgY2Fwc0NsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBhbHRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgc2hpZnRDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2tleWJvYXJkU2VydmljZTogTWF0S2V5Ym9hcmRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBfY29udHJvbD86IE5nQ29udHJvbCkge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9oaWRlS2V5Ym9hcmQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcclxuICBwcml2YXRlIF9zaG93S2V5Ym9hcmQoKSB7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZiA9IHRoaXMuX2tleWJvYXJkU2VydmljZS5vcGVuKHRoaXMubWF0S2V5Ym9hcmQsIHtcclxuICAgICAgZGFya1RoZW1lOiB0aGlzLmRhcmtUaGVtZSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuZHVyYXRpb24sXHJcbiAgICAgIGlzRGVidWc6IHRoaXMuaXNEZWJ1Z1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVmZXJlbmNlIHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5zZXRJbnB1dEluc3RhbmNlKHRoaXMuX2VsZW1lbnRSZWYpO1xyXG5cclxuICAgIC8vIHNldCBjb250cm9sIGlmIGdpdmVuLCBjYXN0IHRvIHNtdGguIG5vbi1hYnN0cmFjdFxyXG4gICAgaWYgKHRoaXMuX2NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2UuYXR0YWNoQ29udHJvbCh0aGlzLl9jb250cm9sLmNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbm5lY3Qgb3V0cHV0c1xyXG4gICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2UuZW50ZXJDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5lbnRlckNsaWNrLm5leHQoKSk7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5jYXBzQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuY2Fwc0NsaWNrLm5leHQoKSk7XHJcbiAgICB0aGlzLl9rZXlib2FyZFJlZi5pbnN0YW5jZS5hbHRDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hbHRDbGljay5uZXh0KCkpO1xyXG4gICAgdGhpcy5fa2V5Ym9hcmRSZWYuaW5zdGFuY2Uuc2hpZnRDbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaGlmdENsaWNrLm5leHQoKSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcclxuICBwcml2YXRlIF9oaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICBpZiAodGhpcy5fa2V5Ym9hcmRSZWYpIHtcclxuICAgICAgdGhpcy5fa2V5Ym9hcmRSZWYuZGlzbWlzcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19