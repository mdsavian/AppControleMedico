import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { MatKeyboardContainerComponent } from '../components/keyboard-container/keyboard-container.component';
import { MatKeyboardComponent } from '../components/keyboard/keyboard.component';
/**
 * Reference to a keyboard dispatched from the keyboard service.
 */
export declare class MatKeyboardRef<T> {
    private _overlayRef;
    /** Subject for notifying the user that the keyboard has closed. */
    private _afterClosed;
    /** Subject for notifying the user that the keyboard has opened and appeared. */
    private _afterOpened;
    /** The instance of the component making up the content of the keyboard. */
    instance: MatKeyboardComponent;
    /** The instance of the component making up the content of the keyboard. */
    containerInstance: MatKeyboardContainerComponent;
    constructor(instance: MatKeyboardComponent, containerInstance: MatKeyboardContainerComponent, _overlayRef: OverlayRef);
    /** Dismisses the keyboard. */
    dismiss(): void;
    /** Marks the keyboard as opened */
    _open(): void;
    /** Gets an observable that is notified when the keyboard is finished closing. */
    afterDismissed(): Observable<void>;
    /** Gets an observable that is notified when the keyboard has opened and appeared. */
    afterOpened(): Observable<void>;
    /** Cleans up the DOM after closing. */
    private _finishDismiss;
}
