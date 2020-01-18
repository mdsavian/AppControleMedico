import { MatKeyboardConfig } from '../configs/keyboard.config';
import { IKeyboardLayouts } from '../interfaces/keyboard-layouts.interface';
import { ILocaleMap } from '../interfaces/locale-map.interface';
/**
 * Applies default options to the keyboard configs.
 * @param config The configuration to which the defaults will be applied.
 * @returns The new configuration object with defaults applied.
 */
export declare function _applyConfigDefaults(config: MatKeyboardConfig): MatKeyboardConfig;
/**
 * Applies available layouts.
 * @param layouts
 */
export declare function _applyAvailableLayouts(layouts: IKeyboardLayouts): ILocaleMap;
