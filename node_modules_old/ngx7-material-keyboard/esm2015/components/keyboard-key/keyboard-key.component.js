/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MAT_KEYBOARD_DEADKEYS } from '../../configs/keyboard-deadkey.config';
import { MAT_KEYBOARD_ICONS } from '../../configs/keyboard-icons.config';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
/** @type {?} */
export const VALUE_NEWLINE = '\n\r';
/** @type {?} */
export const VALUE_SPACE = ' ';
/** @type {?} */
export const VALUE_TAB = '\t';
export class MatKeyboardKeyComponent {
    // Inject dependencies
    /**
     * @param {?} _deadkeys
     * @param {?} _icons
     */
    constructor(_deadkeys, _icons) {
        this._deadkeys = _deadkeys;
        this._icons = _icons;
        this._deadkeyKeys = [];
        this._iconKeys = [];
        this.active$ = new BehaviorSubject(false);
        this.pressed$ = new BehaviorSubject(false);
        this.genericClick = new EventEmitter();
        this.enterClick = new EventEmitter();
        this.bkspClick = new EventEmitter();
        this.capsClick = new EventEmitter();
        this.altClick = new EventEmitter();
        this.shiftClick = new EventEmitter();
        this.spaceClick = new EventEmitter();
        this.tabClick = new EventEmitter();
        this.keyClick = new EventEmitter();
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this.active$.next(active);
    }
    /**
     * @return {?}
     */
    get active() {
        return this.active$.getValue();
    }
    /**
     * @param {?} pressed
     * @return {?}
     */
    set pressed(pressed) {
        this.pressed$.next(pressed);
    }
    /**
     * @return {?}
     */
    get pressed() {
        return this.pressed$.getValue();
    }
    /**
     * @return {?}
     */
    get lowerKey() {
        return `${this.key}`.toLowerCase();
    }
    /**
     * @return {?}
     */
    get charCode() {
        return `${this.key}`.charCodeAt(0);
    }
    /**
     * @return {?}
     */
    get isClassKey() {
        return this.key in KeyboardClassKey;
    }
    /**
     * @return {?}
     */
    get isDeadKey() {
        return this._deadkeyKeys.some((deadKey) => deadKey === `${this.key}`);
    }
    /**
     * @return {?}
     */
    get hasIcon() {
        return this._iconKeys.some((iconKey) => iconKey === `${this.key}`);
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icons[this.key];
    }
    /**
     * @return {?}
     */
    get cssClass() {
        /** @type {?} */
        const classes = [];
        if (this.hasIcon) {
            classes.push('mat-keyboard-key-modifier');
            classes.push(`mat-keyboard-key-${this.lowerKey}`);
        }
        if (this.isDeadKey) {
            classes.push('mat-keyboard-key-deadkey');
        }
        return classes.join(' ');
    }
    /**
     * @return {?}
     */
    get inputValue() {
        if (this.control) {
            return this.control.value;
        }
        else if (this.input && this.input.nativeElement && this.input.nativeElement.value) {
            return this.input.nativeElement.value;
        }
        else {
            return '';
        }
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        if (this.control) {
            this.control.setValue(inputValue);
        }
        else if (this.input && this.input.nativeElement) {
            this.input.nativeElement.value = inputValue;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // read the deadkeys
        this._deadkeyKeys = Object.keys(this._deadkeys);
        // read the icons
        this._iconKeys = Object.keys(this._icons);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        // Trigger a global key event
        // TODO: investigate
        this._triggerKeyEvent();
        // Trigger generic click event
        this.genericClick.emit(event);
        // Manipulate the focused input / textarea value    
        /** @type {?} */
        const caret = this.input ? this._getCursorPosition() : 0;
        /** @type {?} */
        let char;
        switch (this.key) {
            // this keys have no actions yet
            // TODO: add deadkeys and modifiers
            case KeyboardClassKey.Alt:
            case KeyboardClassKey.AltGr:
            case KeyboardClassKey.AltLk:
                this.altClick.emit(event);
                break;
            case KeyboardClassKey.Bksp:
                this.deleteSelectedText();
                this.bkspClick.emit(event);
                break;
            case KeyboardClassKey.Caps:
                this.capsClick.emit(event);
                break;
            case KeyboardClassKey.Enter:
                if (this._isTextarea()) {
                    char = VALUE_NEWLINE;
                }
                else {
                    this.enterClick.emit(event);
                    // TODO: trigger submit / onSubmit / ngSubmit properly (for the time being this has to be handled by the user himself)
                    // console.log(this.control.ngControl.control.root)
                    // this.input.nativeElement.form.submit();
                }
                break;
            case KeyboardClassKey.Shift:
                this.shiftClick.emit(event);
                break;
            case KeyboardClassKey.Space:
                char = VALUE_SPACE;
                this.spaceClick.emit(event);
                break;
            case KeyboardClassKey.Tab:
                char = VALUE_TAB;
                this.tabClick.emit(event);
                break;
            default:
                // the key is not mapped or a string
                char = `${this.key}`;
                this.keyClick.emit(event);
                break;
        }
        if (char && this.input) {
            this.replaceSelectedText(char);
            this._setCursorPosition(caret + 1);
        }
    }
    /**
     * @private
     * @return {?}
     */
    deleteSelectedText() {
        /** @type {?} */
        const value = this.inputValue ? this.inputValue : "";
        /** @type {?} */
        let caret = this.input ? this._getCursorPosition() : 0;
        /** @type {?} */
        let selectionLength = this._getSelectionLength();
        if (selectionLength === 0) {
            if (caret === 0) {
                return;
            }
            caret--;
            selectionLength = 1;
        }
        /** @type {?} */
        const headPart = value.slice(0, caret);
        /** @type {?} */
        const endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, endPart].join('');
        this._setCursorPosition(caret);
    }
    /**
     * @private
     * @param {?} char
     * @return {?}
     */
    replaceSelectedText(char) {
        /** @type {?} */
        const value = this.inputValue ? this.inputValue : "";
        /** @type {?} */
        const caret = this.input ? this._getCursorPosition() : 0;
        /** @type {?} */
        const selectionLength = this._getSelectionLength();
        /** @type {?} */
        const headPart = value.slice(0, caret);
        /** @type {?} */
        const endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, char, endPart].join('');
    }
    /**
     * @private
     * @return {?}
     */
    _triggerKeyEvent() {
        /** @type {?} */
        const keyboardEvent = new KeyboardEvent('keydown');
        //
        // keyboardEvent[initMethod](
        //   true, // bubbles
        //   true, // cancelable
        //   window, // viewArg: should be window
        //   false, // ctrlKeyArg
        //   false, // altKeyArg
        //   false, // shiftKeyArg
        //   false, // metaKeyArg
        //   this.charCode, // keyCodeArg : unsigned long - the virtual key code, else 0
        //   0 // charCodeArgs : unsigned long - the Unicode character associated with the depressed key, else 0
        // );
        //
        // window.document.dispatchEvent(keyboardEvent);
        return keyboardEvent;
    }
    // inspired by:
    // ref https://stackoverflow.com/a/2897510/1146207
    /**
     * @private
     * @return {?}
     */
    _getCursorPosition() {
        if (!this.input) {
            return;
        }
        if ('selectionStart' in this.input.nativeElement) {
            // Standard-compliant browsers
            return this.input.nativeElement.selectionStart;
        }
        else if ('selection' in window.document) {
            // IE
            this.input.nativeElement.focus();
            /** @type {?} */
            let selection = window.document['selection'];
            /** @type {?} */
            const sel = selection.createRange();
            /** @type {?} */
            const selLen = selection.createRange().text.length;
            sel.moveStart('character', -this.control.value.length);
            return sel.text.length - selLen;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getSelectionLength() {
        if (!this.input) {
            return;
        }
        if ('selectionEnd' in this.input.nativeElement) {
            // Standard-compliant browsers
            return this.input.nativeElement.selectionEnd - this.input.nativeElement.selectionStart;
        }
        if ('selection' in window.document) {
            // IE
            this.input.nativeElement.focus();
            /** @type {?} */
            let selection = window.document['selection'];
            return selection.createRange().text.length;
        }
    }
    // inspired by:
    // ref https://stackoverflow.com/a/12518737/1146207
    // tslint:disable one-line
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    _setCursorPosition(position) {
        if (!this.input) {
            return;
        }
        this.inputValue = this.control.value;
        // ^ this is used to not only get "focus", but
        // to make sure we don't have it everything -selected-
        // (it causes an issue in chrome, and having it doesn't hurt any other browser)
        if ('createTextRange' in this.input.nativeElement) {
            /** @type {?} */
            const range = this.input.nativeElement.createTextRange();
            range.move('character', position);
            range.select();
            return true;
        }
        else {
            // (el.selectionStart === 0 added for Firefox bug)
            if (this.input.nativeElement.selectionStart || this.input.nativeElement.selectionStart === 0) {
                this.input.nativeElement.focus();
                this.input.nativeElement.setSelectionRange(position, position);
                return true;
            }
            // fail city, fortunately this never happens (as far as I've tested) :)
            else {
                this.input.nativeElement.focus();
                return false;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _isTextarea() {
        return this.input && this.input.nativeElement && this.input.nativeElement.tagName === 'TEXTAREA';
    }
}
MatKeyboardKeyComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-keyboard-key',
                template: "<button mat-raised-button\r\n        class=\"mat-keyboard-key\"\r\n        tabindex=\"-1\"\r\n        [class.mat-keyboard-key-active]=\"active$ | async\"\r\n        [class.mat-keyboard-key-pressed]=\"pressed$ | async\"\r\n        [ngClass]=\"cssClass\"\r\n        (click)=\"onClick($event)\"\r\n>\r\n  <mat-icon *ngIf=\"hasIcon\">{{ icon }}</mat-icon>\r\n  <ng-container *ngIf=\"!hasIcon\">{{ key }}</ng-container>\r\n</button>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: ["@charset \"UTF-8\";:host{display:flex;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;justify-content:space-between;line-height:20px}.mat-keyboard-key{min-width:0;width:100%}.mat-keyboard-key-active{background-color:#e0e0e0}.mat-keyboard-key-pressed{background-color:#bdbdbd}.mat-keyboard-key-capslock{background-color:#fff}.mat-keyboard-key-capslock:before{background-color:#bdbdbd;border-radius:100%;content:'';display:inline-block;height:3px;left:5px;position:absolute;top:5px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:background-color,box-shadow;width:3px}.mat-keyboard-key-capslock.mat-keyboard-key-active:before{background-color:#0f0;box-shadow:0 0 \u00A7px #adff2f}:host-context(.dark-theme) .mat-keyboard-key{background-color:#616161;color:#f5f5f5}:host-context(.dark-theme) .mat-keyboard-key-active{background-color:#9e9e9e}:host-context(.dark-theme) .mat-keyboard-key-pressed{background-color:#757575}:host-context(.debug) .mat-keyboard-key-deadkey{background-color:#5f9ea0}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#6fa8aa}:host-context(.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#7fb1b3}:host-context(.debug) .mat-keyboard-key-modifier{background-color:#7fffd4}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#9fd}:host-context(.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b2ffe5}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey{background-color:#663399}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-active{background-color:#7339ac}:host-context(.dark-theme.debug) .mat-keyboard-key-deadkey.mat-keyboard-key-pressed{background-color:#8040bf}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier{background-color:#9370db}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-active{background-color:#a284e0}:host-context(.dark-theme.debug) .mat-keyboard-key-modifier.mat-keyboard-key-pressed{background-color:#b299e5}"]
            }] }
];
/** @nocollapse */
MatKeyboardKeyComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_KEYBOARD_DEADKEYS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_KEYBOARD_ICONS,] }] }
];
MatKeyboardKeyComponent.propDecorators = {
    key: [{ type: Input }],
    active: [{ type: Input }],
    pressed: [{ type: Input }],
    input: [{ type: Input }],
    control: [{ type: Input }],
    genericClick: [{ type: Output }],
    enterClick: [{ type: Output }],
    bkspClick: [{ type: Output }],
    capsClick: [{ type: Output }],
    altClick: [{ type: Output }],
    shiftClick: [{ type: Output }],
    spaceClick: [{ type: Output }],
    tabClick: [{ type: Output }],
    keyClick: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MatKeyboardKeyComponent.prototype._deadkeyKeys;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardKeyComponent.prototype._iconKeys;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.active$;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.pressed$;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.key;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.input;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.control;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.genericClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.enterClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.bkspClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.capsClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.altClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.shiftClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.spaceClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.tabClick;
    /** @type {?} */
    MatKeyboardKeyComponent.prototype.keyClick;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardKeyComponent.prototype._deadkeys;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardKeyComponent.prototype._icons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQta2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neDctbWF0ZXJpYWwta2V5Ym9hcmQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2tleWJvYXJkLWtleS9rZXlib2FyZC1rZXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBTXZFLE1BQU0sT0FBTyxhQUFhLEdBQUcsTUFBTTs7QUFDbkMsTUFBTSxPQUFPLFdBQVcsR0FBRyxHQUFHOztBQUM5QixNQUFNLE9BQU8sU0FBUyxHQUFHLElBQUk7QUFTN0IsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBMEhsQyxZQUFtRCxTQUE0QixFQUN6QyxNQUFzQjtRQURULGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQ3pDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBekhwRCxpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUU1QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0QsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQThCaEUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FB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LE1BQU0sU0FBQyxxQkFBcUI7NENBQ3RDLE1BQU0sU0FBQyxrQkFBa0I7OztrQkFqSDNCLEtBQUs7cUJBR0wsS0FBSztzQkFTTCxLQUFLO29CQVNMLEtBQUs7c0JBR0wsS0FBSzsyQkFHTCxNQUFNO3lCQUdOLE1BQU07d0JBR04sTUFBTTt3QkFHTixNQUFNO3VCQUdOLE1BQU07eUJBR04sTUFBTTt5QkFHTixNQUFNO3VCQUdOLE1BQU07dUJBR04sTUFBTTs7Ozs7OztJQTNEUCwrQ0FBb0M7Ozs7O0lBRXBDLDRDQUFpQzs7SUFFakMsMENBQStEOztJQUUvRCwyQ0FBZ0U7O0lBRWhFLHNDQUMrQjs7SUFvQi9CLHdDQUNtQjs7SUFFbkIsMENBQ3NCOztJQUV0QiwrQ0FDOEM7O0lBRTlDLDZDQUM0Qzs7SUFFNUMsNENBQzJDOztJQUUzQyw0Q0FDMkM7O0lBRTNDLDJDQUMwQzs7SUFFMUMsNkNBQzRDOztJQUU1Qyw2Q0FDNEM7O0lBRTVDLDJDQUMwQzs7SUFFMUMsMkNBQzBDOzs7OztJQTREOUIsNENBQW1FOzs7OztJQUM3RSx5Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTUFUX0tFWUJPQVJEX0RFQURLRVlTIH0gZnJvbSAnLi4vLi4vY29uZmlncy9rZXlib2FyZC1kZWFka2V5LmNvbmZpZyc7XHJcbmltcG9ydCB7IE1BVF9LRVlCT0FSRF9JQ09OUyB9IGZyb20gJy4uLy4uL2NvbmZpZ3Mva2V5Ym9hcmQtaWNvbnMuY29uZmlnJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRDbGFzc0tleSB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLWNsYXNzLWtleS5lbnVtJztcclxuaW1wb3J0IHsgSUtleWJvYXJkRGVhZGtleXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2tleWJvYXJkLWRlYWRrZXlzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElLZXlib2FyZEljb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1pY29ucy5pbnRlcmZhY2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkFMVUVfTkVXTElORSA9ICdcXG5cXHInO1xyXG5leHBvcnQgY29uc3QgVkFMVUVfU1BBQ0UgPSAnICc7XHJcbmV4cG9ydCBjb25zdCBWQUxVRV9UQUIgPSAnXFx0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWtleWJvYXJkLWtleScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2tleWJvYXJkLWtleS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4va2V5Ym9hcmQta2V5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkS2V5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBfZGVhZGtleUtleXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2ljb25LZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBhY3RpdmUkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgcHJlc3NlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGtleTogc3RyaW5nIHwgS2V5Ym9hcmRDbGFzc0tleTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hY3RpdmUkLm5leHQoYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUkLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwcmVzc2VkKHByZXNzZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMucHJlc3NlZCQubmV4dChwcmVzc2VkKTtcclxuICB9XHJcblxyXG4gIGdldCBwcmVzc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlc3NlZCQuZ2V0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaW5wdXQ/OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbnRyb2w/OiBGb3JtQ29udHJvbDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZ2VuZXJpY0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBlbnRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBia3NwQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGNhcHNDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYWx0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNoaWZ0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNwYWNlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHRhYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBrZXlDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgZ2V0IGxvd2VyS2V5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5rZXl9YC50b0xvd2VyQ2FzZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYXJDb2RlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5rZXl9YC5jaGFyQ29kZUF0KDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2xhc3NLZXkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXkgaW4gS2V5Ym9hcmRDbGFzc0tleTtcclxuICB9XHJcblxyXG4gIGdldCBpc0RlYWRLZXkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVhZGtleUtleXMuc29tZSgoZGVhZEtleTogc3RyaW5nKSA9PiBkZWFkS2V5ID09PSBgJHt0aGlzLmtleX1gKTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNJY29uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb25LZXlzLnNvbWUoKGljb25LZXk6IHN0cmluZykgPT4gaWNvbktleSA9PT0gYCR7dGhpcy5rZXl9YCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ljb25zW3RoaXMua2V5XTtcclxuICB9XHJcblxyXG4gIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLmhhc0ljb24pIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdtYXQta2V5Ym9hcmQta2V5LW1vZGlmaWVyJyk7XHJcbiAgICAgIGNsYXNzZXMucHVzaChgbWF0LWtleWJvYXJkLWtleS0ke3RoaXMubG93ZXJLZXl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNEZWFkS2V5KSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnbWF0LWtleWJvYXJkLWtleS1kZWFka2V5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKGlucHV0VmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBpbnB1dFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5qZWN0IGRlcGVuZGVuY2llc1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0tFWUJPQVJEX0RFQURLRVlTKSBwcml2YXRlIF9kZWFka2V5czogSUtleWJvYXJkRGVhZGtleXMsXHJcbiAgICBASW5qZWN0KE1BVF9LRVlCT0FSRF9JQ09OUykgcHJpdmF0ZSBfaWNvbnM6IElLZXlib2FyZEljb25zKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyByZWFkIHRoZSBkZWFka2V5c1xyXG4gICAgdGhpcy5fZGVhZGtleUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9kZWFka2V5cyk7XHJcblxyXG4gICAgLy8gcmVhZCB0aGUgaWNvbnNcclxuICAgIHRoaXMuX2ljb25LZXlzID0gT2JqZWN0LmtleXModGhpcy5faWNvbnMpO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgLy8gVHJpZ2dlciBhIGdsb2JhbCBrZXkgZXZlbnRcclxuICAgIC8vIFRPRE86IGludmVzdGlnYXRlXHJcbiAgICB0aGlzLl90cmlnZ2VyS2V5RXZlbnQoKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGdlbmVyaWMgY2xpY2sgZXZlbnRcclxuICAgIHRoaXMuZ2VuZXJpY0NsaWNrLmVtaXQoZXZlbnQpO1xyXG5cclxuICAgIC8vIE1hbmlwdWxhdGUgdGhlIGZvY3VzZWQgaW5wdXQgLyB0ZXh0YXJlYSB2YWx1ZSAgICBcclxuICAgIGNvbnN0IGNhcmV0ID0gdGhpcy5pbnB1dCA/IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCkgOiAwO1xyXG5cclxuICAgIGxldCBjaGFyOiBzdHJpbmc7XHJcbiAgICBzd2l0Y2ggKHRoaXMua2V5KSB7XHJcbiAgICAgIC8vIHRoaXMga2V5cyBoYXZlIG5vIGFjdGlvbnMgeWV0XHJcbiAgICAgIC8vIFRPRE86IGFkZCBkZWFka2V5cyBhbmQgbW9kaWZpZXJzXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5BbHQ6XHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcjpcclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkFsdExrOlxyXG4gICAgICAgIHRoaXMuYWx0Q2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQmtzcDpcclxuICAgICAgICB0aGlzLmRlbGV0ZVNlbGVjdGVkVGV4dCgpO1xyXG4gICAgICAgIHRoaXMuYmtzcENsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkNhcHM6XHJcbiAgICAgICAgdGhpcy5jYXBzQ2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXI6XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVGV4dGFyZWEoKSkge1xyXG4gICAgICAgICAgY2hhciA9IFZBTFVFX05FV0xJTkU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZW50ZXJDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgIC8vIFRPRE86IHRyaWdnZXIgc3VibWl0IC8gb25TdWJtaXQgLyBuZ1N1Ym1pdCBwcm9wZXJseSAoZm9yIHRoZSB0aW1lIGJlaW5nIHRoaXMgaGFzIHRvIGJlIGhhbmRsZWQgYnkgdGhlIHVzZXIgaGltc2VsZilcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC5uZ0NvbnRyb2wuY29udHJvbC5yb290KVxyXG4gICAgICAgICAgLy8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LlNoaWZ0OlxyXG4gICAgICAgIHRoaXMuc2hpZnRDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZTpcclxuICAgICAgICBjaGFyID0gVkFMVUVfU1BBQ0U7XHJcbiAgICAgICAgdGhpcy5zcGFjZUNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LlRhYjpcclxuICAgICAgICBjaGFyID0gVkFMVUVfVEFCO1xyXG4gICAgICAgIHRoaXMudGFiQ2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIHRoZSBrZXkgaXMgbm90IG1hcHBlZCBvciBhIHN0cmluZ1xyXG4gICAgICAgIGNoYXIgPSBgJHt0aGlzLmtleX1gO1xyXG4gICAgICAgIHRoaXMua2V5Q2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYXIgJiYgdGhpcy5pbnB1dCkge1xyXG4gICAgICB0aGlzLnJlcGxhY2VTZWxlY3RlZFRleHQoY2hhcik7XHJcbiAgICAgIHRoaXMuX3NldEN1cnNvclBvc2l0aW9uKGNhcmV0ICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlbGV0ZVNlbGVjdGVkVGV4dCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dFZhbHVlID8gdGhpcy5pbnB1dFZhbHVlIDogXCJcIjtcclxuICAgIGxldCBjYXJldCA9IHRoaXMuaW5wdXQgPyB0aGlzLl9nZXRDdXJzb3JQb3NpdGlvbigpIDogMDtcclxuICAgIGxldCBzZWxlY3Rpb25MZW5ndGggPSB0aGlzLl9nZXRTZWxlY3Rpb25MZW5ndGgoKTtcclxuICAgIGlmIChzZWxlY3Rpb25MZW5ndGggPT09IDApIHtcclxuICAgICAgaWYgKGNhcmV0ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXJldC0tO1xyXG4gICAgICBzZWxlY3Rpb25MZW5ndGggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhlYWRQYXJ0ID0gdmFsdWUuc2xpY2UoMCwgY2FyZXQpO1xyXG4gICAgY29uc3QgZW5kUGFydCA9IHZhbHVlLnNsaWNlKGNhcmV0ICsgc2VsZWN0aW9uTGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBbaGVhZFBhcnQsIGVuZFBhcnRdLmpvaW4oJycpO1xyXG4gICAgdGhpcy5fc2V0Q3Vyc29yUG9zaXRpb24oY2FyZXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXBsYWNlU2VsZWN0ZWRUZXh0KGNoYXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0VmFsdWUgPyB0aGlzLmlucHV0VmFsdWUgOiBcIlwiO1xyXG4gICAgY29uc3QgY2FyZXQgPSB0aGlzLmlucHV0ID8gdGhpcy5fZ2V0Q3Vyc29yUG9zaXRpb24oKSA6IDA7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25MZW5ndGggPSB0aGlzLl9nZXRTZWxlY3Rpb25MZW5ndGgoKTtcclxuICAgIGNvbnN0IGhlYWRQYXJ0ID0gdmFsdWUuc2xpY2UoMCwgY2FyZXQpO1xyXG4gICAgY29uc3QgZW5kUGFydCA9IHZhbHVlLnNsaWNlKGNhcmV0ICsgc2VsZWN0aW9uTGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBbaGVhZFBhcnQsIGNoYXIsIGVuZFBhcnRdLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdHJpZ2dlcktleUV2ZW50KCk6IEV2ZW50IHtcclxuICAgIGNvbnN0IGtleWJvYXJkRXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicpO1xyXG4gICAgLy9cclxuICAgIC8vIGtleWJvYXJkRXZlbnRbaW5pdE1ldGhvZF0oXHJcbiAgICAvLyAgIHRydWUsIC8vIGJ1YmJsZXNcclxuICAgIC8vICAgdHJ1ZSwgLy8gY2FuY2VsYWJsZVxyXG4gICAgLy8gICB3aW5kb3csIC8vIHZpZXdBcmc6IHNob3VsZCBiZSB3aW5kb3dcclxuICAgIC8vICAgZmFsc2UsIC8vIGN0cmxLZXlBcmdcclxuICAgIC8vICAgZmFsc2UsIC8vIGFsdEtleUFyZ1xyXG4gICAgLy8gICBmYWxzZSwgLy8gc2hpZnRLZXlBcmdcclxuICAgIC8vICAgZmFsc2UsIC8vIG1ldGFLZXlBcmdcclxuICAgIC8vICAgdGhpcy5jaGFyQ29kZSwgLy8ga2V5Q29kZUFyZyA6IHVuc2lnbmVkIGxvbmcgLSB0aGUgdmlydHVhbCBrZXkgY29kZSwgZWxzZSAwXHJcbiAgICAvLyAgIDAgLy8gY2hhckNvZGVBcmdzIDogdW5zaWduZWQgbG9uZyAtIHRoZSBVbmljb2RlIGNoYXJhY3RlciBhc3NvY2lhdGVkIHdpdGggdGhlIGRlcHJlc3NlZCBrZXksIGVsc2UgMFxyXG4gICAgLy8gKTtcclxuICAgIC8vXHJcbiAgICAvLyB3aW5kb3cuZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChrZXlib2FyZEV2ZW50KTtcclxuXHJcbiAgICByZXR1cm4ga2V5Ym9hcmRFdmVudDtcclxuICB9XHJcblxyXG4gIC8vIGluc3BpcmVkIGJ5OlxyXG4gIC8vIHJlZiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjg5NzUxMC8xMTQ2MjA3XHJcbiAgcHJpdmF0ZSBfZ2V0Q3Vyc29yUG9zaXRpb24oKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5pbnB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIC8vIFN0YW5kYXJkLWNvbXBsaWFudCBicm93c2Vyc1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgfSBlbHNlIGlmICgnc2VsZWN0aW9uJyBpbiB3aW5kb3cuZG9jdW1lbnQpIHtcclxuICAgICAgLy8gSUVcclxuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIGxldCBzZWxlY3Rpb246IGFueSA9IHdpbmRvdy5kb2N1bWVudFsnc2VsZWN0aW9uJ107XHJcbiAgICAgIGNvbnN0IHNlbCA9IHNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICBjb25zdCBzZWxMZW4gPSBzZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0Lmxlbmd0aDtcclxuICAgICAgc2VsLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLXRoaXMuY29udHJvbC52YWx1ZS5sZW5ndGgpO1xyXG5cclxuICAgICAgcmV0dXJuIHNlbC50ZXh0Lmxlbmd0aCAtIHNlbExlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldFNlbGVjdGlvbkxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLmlucHV0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ3NlbGVjdGlvbkVuZCcgaW4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIC8vIFN0YW5kYXJkLWNvbXBsaWFudCBicm93c2Vyc1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCAtIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ3NlbGVjdGlvbicgaW4gd2luZG93LmRvY3VtZW50KSB7XHJcbiAgICAgIC8vIElFXHJcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBsZXQgc2VsZWN0aW9uOiBhbnkgPSB3aW5kb3cuZG9jdW1lbnRbJ3NlbGVjdGlvbiddO1xyXG4gICAgICByZXR1cm4gc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBpbnNwaXJlZCBieTpcclxuICAvLyByZWYgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEyNTE4NzM3LzExNDYyMDdcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZSBvbmUtbGluZVxyXG4gIHByaXZhdGUgX3NldEN1cnNvclBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5pbnB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb250cm9sLnZhbHVlO1xyXG4gICAgLy8gXiB0aGlzIGlzIHVzZWQgdG8gbm90IG9ubHkgZ2V0IFwiZm9jdXNcIiwgYnV0XHJcbiAgICAvLyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZSBpdCBldmVyeXRoaW5nIC1zZWxlY3RlZC1cclxuICAgIC8vIChpdCBjYXVzZXMgYW4gaXNzdWUgaW4gY2hyb21lLCBhbmQgaGF2aW5nIGl0IGRvZXNuJ3QgaHVydCBhbnkgb3RoZXIgYnJvd3NlcilcclxuXHJcbiAgICBpZiAoJ2NyZWF0ZVRleHRSYW5nZScgaW4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgICByYW5nZS5tb3ZlKCdjaGFyYWN0ZXInLCBwb3NpdGlvbik7XHJcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIChlbC5zZWxlY3Rpb25TdGFydCA9PT0gMCBhZGRlZCBmb3IgRmlyZWZveCBidWcpXHJcbiAgICAgIGlmICh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHBvc2l0aW9uLCBwb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmFpbCBjaXR5LCBmb3J0dW5hdGVseSB0aGlzIG5ldmVyIGhhcHBlbnMgKGFzIGZhciBhcyBJJ3ZlIHRlc3RlZCkgOilcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pc1RleHRhcmVhKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnO1xyXG4gIH1cclxuXHJcbn1cclxuIl19