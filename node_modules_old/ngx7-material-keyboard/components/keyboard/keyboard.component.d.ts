import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatKeyboardRef } from '../../classes/keyboard-ref.class';
import { KeyboardClassKey } from '../../enums/keyboard-class-key.enum';
import { IKeyboardLayout } from '../../interfaces/keyboard-layout.interface';
import { MatKeyboardService } from '../../services/keyboard.service';
/**
 * A component used to open as the default keyboard, matching material spec.
 * This should only be used internally by the keyboard service.
 */
export declare class MatKeyboardComponent implements OnInit {
    private _locale;
    private _keyboardService;
    private _darkTheme;
    private _isDebug;
    private _inputInstance$;
    private _keys;
    private _modifier;
    private _capsLocked;
    locale?: string;
    layout: IKeyboardLayout;
    control: AbstractControl;
    keyboardRef: MatKeyboardRef<MatKeyboardComponent>;
    cssClass: boolean;
    enterClick: EventEmitter<void>;
    capsClick: EventEmitter<void>;
    altClick: EventEmitter<void>;
    shiftClick: EventEmitter<void>;
    readonly inputInstance: Observable<ElementRef | null>;
    darkTheme: boolean;
    isDebug: boolean;
    readonly darkTheme$: Observable<boolean>;
    readonly isDebug$: Observable<boolean>;
    constructor(_locale: string, _keyboardService: MatKeyboardService);
    setInputInstance(inputInstance: ElementRef): void;
    attachControl(control: AbstractControl): void;
    ngOnInit(): void;
    /**
     * dismisses the keyboard
     */
    dismiss(): void;
    /**
     * checks if a given key is currently pressed
     * @param key
     * @param
     */
    isActive(key: (string | KeyboardClassKey)[]): boolean;
    getModifiedKey(key: (string | KeyboardClassKey)[]): string;
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * listens to users keyboard inputs to simulate on virtual keyboard, too
     * @param event
     */
    onKeyUp(event: KeyboardEvent): void;
    /**
     * bubbles event if submit is potentially triggered
     */
    onEnterClick(): void;
    /**
     * simulates clicking `CapsLock` key
     * @param targetState
     */
    onCapsClick(targetState?: boolean): void;
    /**
     * simulates clicking `Alt` key
     */
    onAltClick(): void;
    /**
     * simulates clicking `Shift` key
     */
    onShiftClick(): void;
    private _invertAltModifier;
    private _invertShiftModifier;
}
