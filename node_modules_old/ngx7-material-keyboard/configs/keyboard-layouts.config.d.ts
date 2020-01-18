import { InjectionToken } from '@angular/core';
import { IKeyboardLayouts } from '../interfaces/keyboard-layouts.interface';
declare const MAT_KEYBOARD_LAYOUTS: InjectionToken<IKeyboardLayouts>;
declare const keyboardLayouts: IKeyboardLayouts;
export { keyboardLayouts, MAT_KEYBOARD_LAYOUTS };
