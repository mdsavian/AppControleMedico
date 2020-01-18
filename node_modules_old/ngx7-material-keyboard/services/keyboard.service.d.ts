import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Overlay } from '@angular/cdk/overlay';
import { MatKeyboardRef } from '../classes/keyboard-ref.class';
import { MatKeyboardComponent } from '../components/keyboard/keyboard.component';
import { MatKeyboardConfig } from '../configs/keyboard.config';
import { IKeyboardLayout } from '../interfaces/keyboard-layout.interface';
import { IKeyboardLayouts } from '../interfaces/keyboard-layouts.interface';
import { ILocaleMap } from '../interfaces/locale-map.interface';
/**
 * Service to dispatch Material Design keyboard.
 */
export declare class MatKeyboardService {
    private _overlay;
    private _live;
    private _defaultLocale;
    private _layouts;
    private _parentKeyboard;
    /**
     * Reference to the current keyboard in the view *at this level* (in the Angular injector tree).
     * If there is a parent keyboard service, all operations should delegate to that parent
     * via `_openedKeyboardRef`.
     */
    private _keyboardRefAtThisLevel;
    private _availableLocales;
    /** Reference to the currently opened keyboard at *any* level. */
    private _openedKeyboardRef;
    readonly availableLocales: ILocaleMap;
    readonly isOpened: boolean;
    constructor(_overlay: Overlay, _live: LiveAnnouncer, _defaultLocale: string, _layouts: IKeyboardLayouts, _parentKeyboard: MatKeyboardService);
    /**
     * Creates and dispatches a keyboard with a custom component for the content, removing any
     * currently opened keyboards.
     *
     * @param layoutOrLocale layout or locale to use.
     * @param config Extra configuration for the keyboard.
     */
    openFromComponent(layoutOrLocale: string, config: MatKeyboardConfig): MatKeyboardRef<MatKeyboardComponent>;
    /**
     * Opens a keyboard with a message and an optional action.
     * @param layoutOrLocale A string representing the locale or the layout name to be used.
     * @param config Additional configuration options for the keyboard.
     */
    open(layoutOrLocale?: string, config?: MatKeyboardConfig): MatKeyboardRef<MatKeyboardComponent>;
    /**
     * Dismisses the currently-visible keyboard.
     */
    dismiss(): void;
    /**
     * Map a given locale to a layout name.
     * @param locale The layout name
     */
    mapLocale(locale?: string): string;
    getLayoutForLocale(locale: string): IKeyboardLayout;
    /**
     * Attaches the keyboard container component to the overlay.
     */
    private _attachKeyboardContainer;
    /**
     * Places a new component as the content of the keyboard container.
     */
    private _attachKeyboardContent;
    /**
     * Creates a new overlay and places it in the correct location.
     */
    private _createOverlay;
}
