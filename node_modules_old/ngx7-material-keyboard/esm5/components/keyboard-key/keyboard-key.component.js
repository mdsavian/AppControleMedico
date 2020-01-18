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
export var VALUE_NEWLINE = '\n\r';
/** @type {?} */
export var VALUE_SPACE = ' ';
/** @type {?} */
export var VALUE_TAB = '\t';
var MatKeyboardKeyComponent = /** @class */ (function () {
    // Inject dependencies
    function MatKeyboardKeyComponent(_deadkeys, _icons) {
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
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this.active$.getValue();
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            this.active$.next(active);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "pressed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.pressed$.getValue();
        },
        set: /**
         * @param {?} pressed
         * @return {?}
         */
        function (pressed) {
            this.pressed$.next(pressed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "lowerKey", {
        get: /**
         * @return {?}
         */
        function () {
            return ("" + this.key).toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "charCode", {
        get: /**
         * @return {?}
         */
        function () {
            return ("" + this.key).charCodeAt(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "isClassKey", {
        get: /**
         * @return {?}
         */
        function () {
            return this.key in KeyboardClassKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "isDeadKey", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this._deadkeyKeys.some(function (deadKey) { return deadKey === "" + _this.key; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "hasIcon", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this._iconKeys.some(function (iconKey) { return iconKey === "" + _this.key; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icons[this.key];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "cssClass", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var classes = [];
            if (this.hasIcon) {
                classes.push('mat-keyboard-key-modifier');
                classes.push("mat-keyboard-key-" + this.lowerKey);
            }
            if (this.isDeadKey) {
                classes.push('mat-keyboard-key-deadkey');
            }
            return classes.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatKeyboardKeyComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.control) {
                return this.control.value;
            }
            else if (this.input && this.input.nativeElement && this.input.nativeElement.value) {
                return this.input.nativeElement.value;
            }
            else {
                return '';
            }
        },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            if (this.control) {
                this.control.setValue(inputValue);
            }
            else if (this.input && this.input.nativeElement) {
                this.input.nativeElement.value = inputValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // read the deadkeys
        this._deadkeyKeys = Object.keys(this._deadkeys);
        // read the icons
        this._iconKeys = Object.keys(this._icons);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Trigger a global key event
        // TODO: investigate
        this._triggerKeyEvent();
        // Trigger generic click event
        this.genericClick.emit(event);
        // Manipulate the focused input / textarea value    
        /** @type {?} */
        var caret = this.input ? this._getCursorPosition() : 0;
        /** @type {?} */
        var char;
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
                char = "" + this.key;
                this.keyClick.emit(event);
                break;
        }
        if (char && this.input) {
            this.replaceSelectedText(char);
            this._setCursorPosition(caret + 1);
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype.deleteSelectedText = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.inputValue ? this.inputValue : "";
        /** @type {?} */
        var caret = this.input ? this._getCursorPosition() : 0;
        /** @type {?} */
        var selectionLength = this._getSelectionLength();
        if (selectionLength === 0) {
            if (caret === 0) {
                return;
            }
            caret--;
            selectionLength = 1;
        }
        /** @type {?} */
        var headPart = value.slice(0, caret);
        /** @type {?} */
        var endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, endPart].join('');
        this._setCursorPosition(caret);
    };
    /**
     * @private
     * @param {?} char
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype.replaceSelectedText = /**
     * @private
     * @param {?} char
     * @return {?}
     */
    function (char) {
        /** @type {?} */
        var value = this.inputValue ? this.inputValue : "";
        /** @type {?} */
        var caret = this.input ? this._getCursorPosition() : 0;
        /** @type {?} */
        var selectionLength = this._getSelectionLength();
        /** @type {?} */
        var headPart = value.slice(0, caret);
        /** @type {?} */
        var endPart = value.slice(caret + selectionLength);
        this.inputValue = [headPart, char, endPart].join('');
    };
    /**
     * @private
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype._triggerKeyEvent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keyboardEvent = new KeyboardEvent('keydown');
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
    };
    // inspired by:
    // ref https://stackoverflow.com/a/2897510/1146207
    // inspired by:
    // ref https://stackoverflow.com/a/2897510/1146207
    /**
     * @private
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype._getCursorPosition = 
    // inspired by:
    // ref https://stackoverflow.com/a/2897510/1146207
    /**
     * @private
     * @return {?}
     */
    function () {
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
            var selection = window.document['selection'];
            /** @type {?} */
            var sel = selection.createRange();
            /** @type {?} */
            var selLen = selection.createRange().text.length;
            sel.moveStart('character', -this.control.value.length);
            return sel.text.length - selLen;
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype._getSelectionLength = /**
     * @private
     * @return {?}
     */
    function () {
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
            var selection = window.document['selection'];
            return selection.createRange().text.length;
        }
    };
    // inspired by:
    // ref https://stackoverflow.com/a/12518737/1146207
    // tslint:disable one-line
    // inspired by:
    // ref https://stackoverflow.com/a/12518737/1146207
    // tslint:disable one-line
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype._setCursorPosition = 
    // inspired by:
    // ref https://stackoverflow.com/a/12518737/1146207
    // tslint:disable one-line
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (!this.input) {
            return;
        }
        this.inputValue = this.control.value;
        // ^ this is used to not only get "focus", but
        // to make sure we don't have it everything -selected-
        // (it causes an issue in chrome, and having it doesn't hurt any other browser)
        if ('createTextRange' in this.input.nativeElement) {
            /** @type {?} */
            var range = this.input.nativeElement.createTextRange();
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
    };
    /**
     * @private
     * @return {?}
     */
    MatKeyboardKeyComponent.prototype._isTextarea = /**
     * @private
     * @return {?}
     */
    function () {
        return this.input && this.input.nativeElement && this.input.nativeElement.tagName === 'TEXTAREA';
    };
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
    MatKeyboardKeyComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_KEYBOARD_DEADKEYS,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_KEYBOARD_ICONS,] }] }
    ]; };
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
    return MatKeyboardKeyComponent;
}());
export { MatKeyboardKeyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQta2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neDctbWF0ZXJpYWwta2V5Ym9hcmQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2tleWJvYXJkLWtleS9rZXlib2FyZC1rZXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBTXZFLE1BQU0sS0FBTyxhQUFhLEdBQUcsTUFBTTs7QUFDbkMsTUFBTSxLQUFPLFdBQVcsR0FBRyxHQUFHOztBQUM5QixNQUFNLEtBQU8sU0FBUyxHQUFHLElBQUk7QUFFN0I7SUFnSUUsc0JBQXNCO0lBQ3RCLGlDQUFtRCxTQUE0QixFQUN6QyxNQUFzQjtRQURULGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQ3pDLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBekhwRCxpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUU1QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0QsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQThCaEUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRzlDLGVBQVUs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O0lBQ0gsQ0FBQzs7Ozs7SUFFTyw2Q0FBVzs7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEtBQUssVUFBVSxDQUFDO0lBQ25HLENBQUM7O2dCQTdVRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMmJBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzs7aUJBQzNCOzs7O2dEQTJIYyxNQUFNLFNBQUMscUJBQXFCO2dEQUN0QyxNQUFNLFNBQUMsa0JBQWtCOzs7c0JBakgzQixLQUFLO3lCQUdMLEtBQUs7MEJBU0wsS0FBSzt3QkFTTCxLQUFLOzBCQUdMLEtBQUs7K0JBR0wsTUFBTTs2QkFHTixNQUFNOzRCQUdOLE1BQU07NEJBR04sTUFBTTsyQkFHTixNQUFNOzZCQUdOLE1BQU07NkJBR04sTUFBTTsyQkFHTixNQUFNOzJCQUdOLE1BQU07O0lBMlFULDhCQUFDO0NBQUEsQUEvVUQsSUErVUM7U0F4VVksdUJBQXVCOzs7Ozs7SUFFbEMsK0NBQW9DOzs7OztJQUVwQyw0Q0FBaUM7O0lBRWpDLDBDQUErRDs7SUFFL0QsMkNBQWdFOztJQUVoRSxzQ0FDK0I7O0lBb0IvQix3Q0FDbUI7O0lBRW5CLDBDQUNzQjs7SUFFdEIsK0NBQzhDOztJQUU5Qyw2Q0FDNEM7O0lBRTVDLDRDQUMyQzs7SUFFM0MsNENBQzJDOztJQUUzQywyQ0FDMEM7O0lBRTFDLDZDQUM0Qzs7SUFFNUMsNkNBQzRDOztJQUU1QywyQ0FDMEM7O0lBRTFDLDJDQUMwQzs7Ozs7SUE0RDlCLDRDQUFtRTs7Ozs7SUFDN0UseUNBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1BVF9LRVlCT0FSRF9ERUFES0VZUyB9IGZyb20gJy4uLy4uL2NvbmZpZ3Mva2V5Ym9hcmQtZGVhZGtleS5jb25maWcnO1xyXG5pbXBvcnQgeyBNQVRfS0VZQk9BUkRfSUNPTlMgfSBmcm9tICcuLi8uLi9jb25maWdzL2tleWJvYXJkLWljb25zLmNvbmZpZyc7XHJcbmltcG9ydCB7IEtleWJvYXJkQ2xhc3NLZXkgfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1jbGFzcy1rZXkuZW51bSc7XHJcbmltcG9ydCB7IElLZXlib2FyZERlYWRrZXlzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9rZXlib2FyZC1kZWFka2V5cy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJS2V5Ym9hcmRJY29ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMva2V5Ym9hcmQtaWNvbnMuaW50ZXJmYWNlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZBTFVFX05FV0xJTkUgPSAnXFxuXFxyJztcclxuZXhwb3J0IGNvbnN0IFZBTFVFX1NQQUNFID0gJyAnO1xyXG5leHBvcnQgY29uc3QgVkFMVUVfVEFCID0gJ1xcdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1rZXlib2FyZC1rZXknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXlib2FyZC1rZXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2tleWJvYXJkLWtleS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZEtleUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgX2RlYWRrZXlLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9pY29uS2V5czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgYWN0aXZlJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gIHByZXNzZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgQElucHV0KClcclxuICBrZXk6IHN0cmluZyB8IEtleWJvYXJkQ2xhc3NLZXk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWN0aXZlJC5uZXh0KGFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlJC5nZXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcHJlc3NlZChwcmVzc2VkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnByZXNzZWQkLm5leHQocHJlc3NlZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJlc3NlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnByZXNzZWQkLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGlucHV0PzogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KClcclxuICBjb250cm9sPzogRm9ybUNvbnRyb2w7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGdlbmVyaWNDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZW50ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYmtzcENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBjYXBzQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGFsdENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzaGlmdENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzcGFjZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICB0YWJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAga2V5Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIGdldCBsb3dlcktleSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3RoaXMua2V5fWAudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFyQ29kZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGAke3RoaXMua2V5fWAuY2hhckNvZGVBdCgwKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0NsYXNzS2V5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMua2V5IGluIEtleWJvYXJkQ2xhc3NLZXk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEZWFkS2V5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlYWRrZXlLZXlzLnNvbWUoKGRlYWRLZXk6IHN0cmluZykgPT4gZGVhZEtleSA9PT0gYCR7dGhpcy5rZXl9YCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uS2V5cy5zb21lKChpY29uS2V5OiBzdHJpbmcpID0+IGljb25LZXkgPT09IGAke3RoaXMua2V5fWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uc1t0aGlzLmtleV07XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNJY29uKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnbWF0LWtleWJvYXJkLWtleS1tb2RpZmllcicpO1xyXG4gICAgICBjbGFzc2VzLnB1c2goYG1hdC1rZXlib2FyZC1rZXktJHt0aGlzLmxvd2VyS2V5fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzRGVhZEtleSkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ21hdC1rZXlib2FyZC1rZXktZGVhZGtleScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5jb250cm9sKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IGlucHV0VmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5jb250cm9sKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShpbnB1dFZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gaW5wdXRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEluamVjdCBkZXBlbmRlbmNpZXNcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9LRVlCT0FSRF9ERUFES0VZUykgcHJpdmF0ZSBfZGVhZGtleXM6IElLZXlib2FyZERlYWRrZXlzLFxyXG4gICAgQEluamVjdChNQVRfS0VZQk9BUkRfSUNPTlMpIHByaXZhdGUgX2ljb25zOiBJS2V5Ym9hcmRJY29ucykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gcmVhZCB0aGUgZGVhZGtleXNcclxuICAgIHRoaXMuX2RlYWRrZXlLZXlzID0gT2JqZWN0LmtleXModGhpcy5fZGVhZGtleXMpO1xyXG5cclxuICAgIC8vIHJlYWQgdGhlIGljb25zXHJcbiAgICB0aGlzLl9pY29uS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX2ljb25zKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIC8vIFRyaWdnZXIgYSBnbG9iYWwga2V5IGV2ZW50XHJcbiAgICAvLyBUT0RPOiBpbnZlc3RpZ2F0ZVxyXG4gICAgdGhpcy5fdHJpZ2dlcktleUV2ZW50KCk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBnZW5lcmljIGNsaWNrIGV2ZW50XHJcbiAgICB0aGlzLmdlbmVyaWNDbGljay5lbWl0KGV2ZW50KTtcclxuXHJcbiAgICAvLyBNYW5pcHVsYXRlIHRoZSBmb2N1c2VkIGlucHV0IC8gdGV4dGFyZWEgdmFsdWUgICAgXHJcbiAgICBjb25zdCBjYXJldCA9IHRoaXMuaW5wdXQgPyB0aGlzLl9nZXRDdXJzb3JQb3NpdGlvbigpIDogMDtcclxuXHJcbiAgICBsZXQgY2hhcjogc3RyaW5nO1xyXG4gICAgc3dpdGNoICh0aGlzLmtleSkge1xyXG4gICAgICAvLyB0aGlzIGtleXMgaGF2ZSBubyBhY3Rpb25zIHlldFxyXG4gICAgICAvLyBUT0RPOiBhZGQgZGVhZGtleXMgYW5kIG1vZGlmaWVyc1xyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0OlxyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3I6XHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5BbHRMazpcclxuICAgICAgICB0aGlzLmFsdENsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkJrc3A6XHJcbiAgICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZFRleHQoKTtcclxuICAgICAgICB0aGlzLmJrc3BDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5DYXBzOlxyXG4gICAgICAgIHRoaXMuY2Fwc0NsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBLZXlib2FyZENsYXNzS2V5LkVudGVyOlxyXG4gICAgICAgIGlmICh0aGlzLl9pc1RleHRhcmVhKCkpIHtcclxuICAgICAgICAgIGNoYXIgPSBWQUxVRV9ORVdMSU5FO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVudGVyQ2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgICAvLyBUT0RPOiB0cmlnZ2VyIHN1Ym1pdCAvIG9uU3VibWl0IC8gbmdTdWJtaXQgcHJvcGVybHkgKGZvciB0aGUgdGltZSBiZWluZyB0aGlzIGhhcyB0byBiZSBoYW5kbGVkIGJ5IHRoZSB1c2VyIGhpbXNlbGYpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wubmdDb250cm9sLmNvbnRyb2wucm9vdClcclxuICAgICAgICAgIC8vIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdDpcclxuICAgICAgICB0aGlzLnNoaWZ0Q2xpY2suZW1pdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2U6XHJcbiAgICAgICAgY2hhciA9IFZBTFVFX1NQQUNFO1xyXG4gICAgICAgIHRoaXMuc3BhY2VDbGljay5lbWl0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgS2V5Ym9hcmRDbGFzc0tleS5UYWI6XHJcbiAgICAgICAgY2hhciA9IFZBTFVFX1RBQjtcclxuICAgICAgICB0aGlzLnRhYkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyB0aGUga2V5IGlzIG5vdCBtYXBwZWQgb3IgYSBzdHJpbmdcclxuICAgICAgICBjaGFyID0gYCR7dGhpcy5rZXl9YDtcclxuICAgICAgICB0aGlzLmtleUNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFyICYmIHRoaXMuaW5wdXQpIHtcclxuICAgICAgdGhpcy5yZXBsYWNlU2VsZWN0ZWRUZXh0KGNoYXIpO1xyXG4gICAgICB0aGlzLl9zZXRDdXJzb3JQb3NpdGlvbihjYXJldCArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxldGVTZWxlY3RlZFRleHQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZSA/IHRoaXMuaW5wdXRWYWx1ZSA6IFwiXCI7XHJcbiAgICBsZXQgY2FyZXQgPSB0aGlzLmlucHV0ID8gdGhpcy5fZ2V0Q3Vyc29yUG9zaXRpb24oKSA6IDA7XHJcbiAgICBsZXQgc2VsZWN0aW9uTGVuZ3RoID0gdGhpcy5fZ2V0U2VsZWN0aW9uTGVuZ3RoKCk7XHJcbiAgICBpZiAoc2VsZWN0aW9uTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGlmIChjYXJldCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FyZXQtLTtcclxuICAgICAgc2VsZWN0aW9uTGVuZ3RoID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoZWFkUGFydCA9IHZhbHVlLnNsaWNlKDAsIGNhcmV0KTtcclxuICAgIGNvbnN0IGVuZFBhcnQgPSB2YWx1ZS5zbGljZShjYXJldCArIHNlbGVjdGlvbkxlbmd0aCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gW2hlYWRQYXJ0LCBlbmRQYXJ0XS5qb2luKCcnKTtcclxuICAgIHRoaXMuX3NldEN1cnNvclBvc2l0aW9uKGNhcmV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVwbGFjZVNlbGVjdGVkVGV4dChjaGFyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dFZhbHVlID8gdGhpcy5pbnB1dFZhbHVlIDogXCJcIjtcclxuICAgIGNvbnN0IGNhcmV0ID0gdGhpcy5pbnB1dCA/IHRoaXMuX2dldEN1cnNvclBvc2l0aW9uKCkgOiAwO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uTGVuZ3RoID0gdGhpcy5fZ2V0U2VsZWN0aW9uTGVuZ3RoKCk7XHJcbiAgICBjb25zdCBoZWFkUGFydCA9IHZhbHVlLnNsaWNlKDAsIGNhcmV0KTtcclxuICAgIGNvbnN0IGVuZFBhcnQgPSB2YWx1ZS5zbGljZShjYXJldCArIHNlbGVjdGlvbkxlbmd0aCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gW2hlYWRQYXJ0LCBjaGFyLCBlbmRQYXJ0XS5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RyaWdnZXJLZXlFdmVudCgpOiBFdmVudCB7XHJcbiAgICBjb25zdCBrZXlib2FyZEV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nKTtcclxuICAgIC8vXHJcbiAgICAvLyBrZXlib2FyZEV2ZW50W2luaXRNZXRob2RdKFxyXG4gICAgLy8gICB0cnVlLCAvLyBidWJibGVzXHJcbiAgICAvLyAgIHRydWUsIC8vIGNhbmNlbGFibGVcclxuICAgIC8vICAgd2luZG93LCAvLyB2aWV3QXJnOiBzaG91bGQgYmUgd2luZG93XHJcbiAgICAvLyAgIGZhbHNlLCAvLyBjdHJsS2V5QXJnXHJcbiAgICAvLyAgIGZhbHNlLCAvLyBhbHRLZXlBcmdcclxuICAgIC8vICAgZmFsc2UsIC8vIHNoaWZ0S2V5QXJnXHJcbiAgICAvLyAgIGZhbHNlLCAvLyBtZXRhS2V5QXJnXHJcbiAgICAvLyAgIHRoaXMuY2hhckNvZGUsIC8vIGtleUNvZGVBcmcgOiB1bnNpZ25lZCBsb25nIC0gdGhlIHZpcnR1YWwga2V5IGNvZGUsIGVsc2UgMFxyXG4gICAgLy8gICAwIC8vIGNoYXJDb2RlQXJncyA6IHVuc2lnbmVkIGxvbmcgLSB0aGUgVW5pY29kZSBjaGFyYWN0ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBkZXByZXNzZWQga2V5LCBlbHNlIDBcclxuICAgIC8vICk7XHJcbiAgICAvL1xyXG4gICAgLy8gd2luZG93LmRvY3VtZW50LmRpc3BhdGNoRXZlbnQoa2V5Ym9hcmRFdmVudCk7XHJcblxyXG4gICAgcmV0dXJuIGtleWJvYXJkRXZlbnQ7XHJcbiAgfVxyXG5cclxuICAvLyBpbnNwaXJlZCBieTpcclxuICAvLyByZWYgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4OTc1MTAvMTE0NjIwN1xyXG4gIHByaXZhdGUgX2dldEN1cnNvclBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgnc2VsZWN0aW9uU3RhcnQnIGluIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAvLyBTdGFuZGFyZC1jb21wbGlhbnQgYnJvd3NlcnNcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgIH0gZWxzZSBpZiAoJ3NlbGVjdGlvbicgaW4gd2luZG93LmRvY3VtZW50KSB7XHJcbiAgICAgIC8vIElFXHJcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICBsZXQgc2VsZWN0aW9uOiBhbnkgPSB3aW5kb3cuZG9jdW1lbnRbJ3NlbGVjdGlvbiddO1xyXG4gICAgICBjb25zdCBzZWwgPSBzZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgY29uc3Qgc2VsTGVuID0gc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dC5sZW5ndGg7XHJcbiAgICAgIHNlbC5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC10aGlzLmNvbnRyb2wudmFsdWUubGVuZ3RoKTtcclxuXHJcbiAgICAgIHJldHVybiBzZWwudGV4dC5sZW5ndGggLSBzZWxMZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRTZWxlY3Rpb25MZW5ndGgoKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5pbnB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzZWxlY3Rpb25FbmQnIGluIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAvLyBTdGFuZGFyZC1jb21wbGlhbnQgYnJvd3NlcnNcclxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgLSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzZWxlY3Rpb24nIGluIHdpbmRvdy5kb2N1bWVudCkge1xyXG4gICAgICAvLyBJRVxyXG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgbGV0IHNlbGVjdGlvbjogYW55ID0gd2luZG93LmRvY3VtZW50WydzZWxlY3Rpb24nXTtcclxuICAgICAgcmV0dXJuIHNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaW5zcGlyZWQgYnk6XHJcbiAgLy8gcmVmIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMjUxODczNy8xMTQ2MjA3XHJcbiAgLy8gdHNsaW50OmRpc2FibGUgb25lLWxpbmVcclxuICBwcml2YXRlIF9zZXRDdXJzb3JQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuY29udHJvbC52YWx1ZTtcclxuICAgIC8vIF4gdGhpcyBpcyB1c2VkIHRvIG5vdCBvbmx5IGdldCBcImZvY3VzXCIsIGJ1dFxyXG4gICAgLy8gdG8gbWFrZSBzdXJlIHdlIGRvbid0IGhhdmUgaXQgZXZlcnl0aGluZyAtc2VsZWN0ZWQtXHJcbiAgICAvLyAoaXQgY2F1c2VzIGFuIGlzc3VlIGluIGNocm9tZSwgYW5kIGhhdmluZyBpdCBkb2Vzbid0IGh1cnQgYW55IG90aGVyIGJyb3dzZXIpXHJcblxyXG4gICAgaWYgKCdjcmVhdGVUZXh0UmFuZ2UnIGluIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICBjb25zdCByYW5nZSA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgICAgcmFuZ2UubW92ZSgnY2hhcmFjdGVyJywgcG9zaXRpb24pO1xyXG4gICAgICByYW5nZS5zZWxlY3QoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAoZWwuc2VsZWN0aW9uU3RhcnQgPT09IDAgYWRkZWQgZm9yIEZpcmVmb3ggYnVnKVxyXG4gICAgICBpZiAodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZhaWwgY2l0eSwgZm9ydHVuYXRlbHkgdGhpcyBuZXZlciBoYXBwZW5zIChhcyBmYXIgYXMgSSd2ZSB0ZXN0ZWQpIDopXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaXNUZXh0YXJlYSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==