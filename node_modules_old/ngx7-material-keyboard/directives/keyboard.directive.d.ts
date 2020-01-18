import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatKeyboardService } from '../services/keyboard.service';
export declare class MatKeyboardDirective implements OnDestroy {
    private _elementRef;
    private _keyboardService;
    private _control?;
    private _keyboardRef;
    matKeyboard: string;
    darkTheme: boolean;
    duration: number;
    isDebug: boolean;
    enterClick: EventEmitter<void>;
    capsClick: EventEmitter<void>;
    altClick: EventEmitter<void>;
    shiftClick: EventEmitter<void>;
    constructor(_elementRef: ElementRef, _keyboardService: MatKeyboardService, _control?: NgControl);
    ngOnDestroy(): void;
    private _showKeyboard;
    private _hideKeyboard;
}
