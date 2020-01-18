import { AnimationEvent } from '@angular/animations';
import { BasePortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectorRef, ComponentRef, EmbeddedViewRef, NgZone, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatKeyboardConfig } from '../../configs/keyboard.config';
import { KeyboardAnimationState } from '../../enums/keyboard-animation-state.enum';
export declare const SHOW_ANIMATION: string;
export declare const HIDE_ANIMATION: string;
/**
 * Internal component that wraps user-provided keyboard content.
 * @docs-private
 */
export declare class MatKeyboardContainerComponent extends BasePortalOutlet implements OnDestroy {
    private _ngZone;
    private _changeDetectorRef;
    /** Whether the component has been destroyed. */
    private _destroyed;
    /** The portal outlet inside of this container into which the keyboard content will be loaded. */
    private _portalOutlet;
    /** The state of the keyboard animations. */
    _animationState: KeyboardAnimationState;
    /** Subject for notifying that the keyboard has exited from view. */
    onExit: Subject<any>;
    /** Subject for notifying that the keyboard has finished entering the view. */
    onEnter: Subject<any>;
    attrRole: string;
    keyboardConfig: MatKeyboardConfig;
    constructor(_ngZone: NgZone, _changeDetectorRef: ChangeDetectorRef);
    onMousedown(event: MouseEvent): void;
    /** Attach a component portal as content to this keyboard container. */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal(): EmbeddedViewRef<any>;
    /** Handle end of animations, updating the state of the keyboard. */
    onAnimationEnd(event: AnimationEvent): void;
    /** Begin animation of keyboard entrance into view. */
    enter(): void;
    /** Begin animation of the snack bar exiting from view. */
    exit(): Observable<void>;
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    private _completeExit;
}
