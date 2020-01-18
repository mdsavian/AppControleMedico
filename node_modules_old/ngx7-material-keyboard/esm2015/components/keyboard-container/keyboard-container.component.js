/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, NgZone, ViewChild } from '@angular/core';
import { AnimationCurves, AnimationDurations } from '@angular/material/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { KeyboardAnimationState } from '../../enums/keyboard-animation-state.enum';
import { KeyboardAnimationTransition } from '../../enums/keyboard-animation-transition.enum';
// TODO: we can't use constants from animation.ts here because you can't use
// a text interpolation in anything that is analyzed statically with ngc (for AoT compile).
/** @type {?} */
export const SHOW_ANIMATION = `${AnimationDurations.ENTERING} ${AnimationCurves.DECELERATION_CURVE}`;
/** @type {?} */
export const HIDE_ANIMATION = `${AnimationDurations.EXITING} ${AnimationCurves.ACCELERATION_CURVE}`;
/**
 * Internal component that wraps user-provided keyboard content.
 * \@docs-private
 */
export class MatKeyboardContainerComponent extends BasePortalOutlet {
    /**
     * @param {?} _ngZone
     * @param {?} _changeDetectorRef
     */
    constructor(_ngZone, _changeDetectorRef) {
        super();
        this._ngZone = _ngZone;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the component has been destroyed.
         */
        this._destroyed = false;
        /**
         * The state of the keyboard animations.
         */
        this._animationState = KeyboardAnimationState.Void;
        /**
         * Subject for notifying that the keyboard has exited from view.
         */
        this.onExit = new Subject();
        /**
         * Subject for notifying that the keyboard has finished entering the view.
         */
        this.onEnter = new Subject();
        this.attrRole = 'alert';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        event.preventDefault();
    }
    /**
     * Attach a component portal as content to this keyboard container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach keyboard content after content is already attached');
        }
        return this._portalOutlet.attachComponentPortal(portal);
    }
    // Attach a template portal as content to this keyboard container
    /**
     * @return {?}
     */
    attachTemplatePortal() {
        throw Error('Not yet implemented');
    }
    /**
     * Handle end of animations, updating the state of the keyboard.
     * @param {?} event
     * @return {?}
     */
    onAnimationEnd(event) {
        const { fromState, toState } = event;
        if ((toState === KeyboardAnimationState.Void && fromState !== KeyboardAnimationState.Void) || toState.startsWith('hidden')) {
            this._completeExit();
        }
        if (toState === KeyboardAnimationState.Visible) {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.
            /** @type {?} */
            const onEnter = this.onEnter;
            this._ngZone.run(() => {
                onEnter.next();
                onEnter.complete();
            });
        }
    }
    /**
     * Begin animation of keyboard entrance into view.
     * @return {?}
     */
    enter() {
        if (!this._destroyed) {
            this._animationState = KeyboardAnimationState.Visible;
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Begin animation of the snack bar exiting from view.
     * @return {?}
     */
    exit() {
        this._animationState = KeyboardAnimationState.Hidden;
        return this.onExit;
    }
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed = true;
        this._completeExit();
    }
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     * @private
     * @return {?}
     */
    _completeExit() {
        this._ngZone.onMicrotaskEmpty
            .asObservable()
            .pipe(first())
            .subscribe(() => {
            this.onExit.next();
            this.onExit.complete();
        });
    }
}
MatKeyboardContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-keyboard-container',
                template: "<ng-template cdkPortalHost></ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                // animations: [
                //   trigger('state', [
                //     state('visible', style({transform: 'translateY(0%)'})),
                //     transition('visible => hidden', animate(HIDE_ANIMATION)),
                //     transition('void => visible', animate(SHOW_ANIMATION)),
                //   ])
                // ]
                animations: [
                    trigger('state', [
                        state(`${KeyboardAnimationState.Visible}`, style({ transform: 'translateY(0%)' })),
                        transition(`${KeyboardAnimationTransition.Hide}`, animate(HIDE_ANIMATION)),
                        transition(`${KeyboardAnimationTransition.Show}`, animate(SHOW_ANIMATION))
                    ])
                ],
                styles: [":host{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:2px;box-sizing:border-box;display:block;margin:0 auto;max-width:960px;min-width:568px;-webkit-transform:translateY(100%);transform:translateY(100%)}@media screen and (-ms-high-contrast:active){:host{border:1px solid}}"]
            }] }
];
/** @nocollapse */
MatKeyboardContainerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
MatKeyboardContainerComponent.propDecorators = {
    _portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet,] }],
    _animationState: [{ type: HostBinding, args: ['@state',] }],
    attrRole: [{ type: HostBinding, args: ['attr.role',] }],
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onAnimationEnd: [{ type: HostListener, args: ['@state.done', ['$event'],] }]
};
if (false) {
    /**
     * Whether the component has been destroyed.
     * @type {?}
     * @private
     */
    MatKeyboardContainerComponent.prototype._destroyed;
    /**
     * The portal outlet inside of this container into which the keyboard content will be loaded.
     * @type {?}
     * @private
     */
    MatKeyboardContainerComponent.prototype._portalOutlet;
    /**
     * The state of the keyboard animations.
     * @type {?}
     */
    MatKeyboardContainerComponent.prototype._animationState;
    /**
     * Subject for notifying that the keyboard has exited from view.
     * @type {?}
     */
    MatKeyboardContainerComponent.prototype.onExit;
    /**
     * Subject for notifying that the keyboard has finished entering the view.
     * @type {?}
     */
    MatKeyboardContainerComponent.prototype.onEnter;
    /** @type {?} */
    MatKeyboardContainerComponent.prototype.attrRole;
    /** @type {?} */
    MatKeyboardContainerComponent.prototype.keyboardConfig;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardContainerComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardContainerComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neDctbWF0ZXJpYWwta2V5Ym9hcmQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2tleWJvYXJkLWNvbnRhaW5lci9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFtQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWlDLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SyxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUFNN0YsTUFBTSxPQUFPLGNBQWMsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUMsa0JBQWtCLEVBQUU7O0FBQ3BHLE1BQU0sT0FBTyxjQUFjLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLElBQUksZUFBZSxDQUFDLGtCQUFrQixFQUFFOzs7OztBQTJCbkcsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGdCQUFnQjs7Ozs7SUF5QmpFLFlBQW9CLE9BQWUsRUFDekIsa0JB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QUcsc0JBQXNCLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzt3QkFDbEYsVUFBVSxDQUFDLEdBQUcsMkJBQTJCLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUMxRSxVQUFVLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzNFLENBQUM7aUJBQ0g7O2FBQ0Y7Ozs7WUF2Q3lILE1BQU07WUFBOUYsaUJBQWlCOzs7NEJBOENoRCxTQUFTLFNBQUMsZUFBZTs4QkFJekIsV0FBVyxTQUFDLFFBQVE7dUJBU3BCLFdBQVcsU0FBQyxXQUFXOzBCQVd2QixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQW9CcEMsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7SUEvQ3ZDLG1EQUEyQjs7Ozs7O0lBRzNCLHNEQUN1Qzs7Ozs7SUFHdkMsd0RBQ3NFOzs7OztJQUd0RSwrQ0FBcUM7Ozs7O0lBR3JDLGdEQUFzQzs7SUFFdEMsaURBQ21COztJQUduQix1REFBa0M7Ozs7O0lBRXRCLGdEQUF1Qjs7Ozs7SUFDakMsMkRBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBCYXNlUG9ydGFsT3V0bGV0LCBDZGtQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIE5nWm9uZSwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmVzLCBBbmltYXRpb25EdXJhdGlvbnMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWdzL2tleWJvYXJkLmNvbmZpZyc7XHJcbmltcG9ydCB7IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1hbmltYXRpb24tc3RhdGUuZW51bSc7XHJcbmltcG9ydCB7IEtleWJvYXJkQW5pbWF0aW9uVHJhbnNpdGlvbiB9IGZyb20gJy4uLy4uL2VudW1zL2tleWJvYXJkLWFuaW1hdGlvbi10cmFuc2l0aW9uLmVudW0nO1xyXG5cclxuXHJcblxyXG4vLyBUT0RPOiB3ZSBjYW4ndCB1c2UgY29uc3RhbnRzIGZyb20gYW5pbWF0aW9uLnRzIGhlcmUgYmVjYXVzZSB5b3UgY2FuJ3QgdXNlXHJcbi8vIGEgdGV4dCBpbnRlcnBvbGF0aW9uIGluIGFueXRoaW5nIHRoYXQgaXMgYW5hbHl6ZWQgc3RhdGljYWxseSB3aXRoIG5nYyAoZm9yIEFvVCBjb21waWxlKS5cclxuZXhwb3J0IGNvbnN0IFNIT1dfQU5JTUFUSU9OID0gYCR7QW5pbWF0aW9uRHVyYXRpb25zLkVOVEVSSU5HfSAke0FuaW1hdGlvbkN1cnZlcy5ERUNFTEVSQVRJT05fQ1VSVkV9YDtcclxuZXhwb3J0IGNvbnN0IEhJREVfQU5JTUFUSU9OID0gYCR7QW5pbWF0aW9uRHVyYXRpb25zLkVYSVRJTkd9ICR7QW5pbWF0aW9uQ3VydmVzLkFDQ0VMRVJBVElPTl9DVVJWRX1gO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNvbXBvbmVudCB0aGF0IHdyYXBzIHVzZXItcHJvdmlkZWQga2V5Ym9hcmQgY29udGVudC5cclxuICogQGRvY3MtcHJpdmF0ZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQta2V5Ym9hcmQtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4va2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAvLyBhbmltYXRpb25zOiBbXHJcbiAgLy8gICB0cmlnZ2VyKCdzdGF0ZScsIFtcclxuICAvLyAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknfSkpLFxyXG4gIC8vICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIGFuaW1hdGUoSElERV9BTklNQVRJT04pKSxcclxuICAvLyAgICAgdHJhbnNpdGlvbigndm9pZCA9PiB2aXNpYmxlJywgYW5pbWF0ZShTSE9XX0FOSU1BVElPTikpLFxyXG4gIC8vICAgXSlcclxuICAvLyBdXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignc3RhdGUnLCBbXHJcbiAgICAgIHN0YXRlKGAke0tleWJvYXJkQW5pbWF0aW9uU3RhdGUuVmlzaWJsZX1gLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oYCR7S2V5Ym9hcmRBbmltYXRpb25UcmFuc2l0aW9uLkhpZGV9YCwgYW5pbWF0ZShISURFX0FOSU1BVElPTikpLFxyXG4gICAgICB0cmFuc2l0aW9uKGAke0tleWJvYXJkQW5pbWF0aW9uVHJhbnNpdGlvbi5TaG93fWAsIGFuaW1hdGUoU0hPV19BTklNQVRJT04pKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VQb3J0YWxPdXRsZXQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAvKiogV2hldGhlciB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cclxuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFRoZSBwb3J0YWwgb3V0bGV0IGluc2lkZSBvZiB0aGlzIGNvbnRhaW5lciBpbnRvIHdoaWNoIHRoZSBrZXlib2FyZCBjb250ZW50IHdpbGwgYmUgbG9hZGVkLiAqL1xyXG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0KVxyXG4gIHByaXZhdGUgX3BvcnRhbE91dGxldDogQ2RrUG9ydGFsT3V0bGV0O1xyXG5cclxuICAvKiogVGhlIHN0YXRlIG9mIHRoZSBrZXlib2FyZCBhbmltYXRpb25zLiAqL1xyXG4gIEBIb3N0QmluZGluZygnQHN0YXRlJylcclxuICBfYW5pbWF0aW9uU3RhdGU6IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUgPSBLZXlib2FyZEFuaW1hdGlvblN0YXRlLlZvaWQ7XHJcblxyXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhhdCB0aGUga2V5Ym9hcmQgaGFzIGV4aXRlZCBmcm9tIHZpZXcuICovXHJcbiAgb25FeGl0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIGtleWJvYXJkIGhhcyBmaW5pc2hlZCBlbnRlcmluZyB0aGUgdmlldy4gKi9cclxuICBvbkVudGVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXHJcbiAgYXR0clJvbGUgPSAnYWxlcnQnO1xyXG5cclxuICAvLyB0aGUga2V5Ym9hcmQgY29uZmlndXJhdGlvblxyXG4gIGtleWJvYXJkQ29uZmlnOiBNYXRLZXlib2FyZENvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEF0dGFjaCBhIGNvbXBvbmVudCBwb3J0YWwgYXMgY29udGVudCB0byB0aGlzIGtleWJvYXJkIGNvbnRhaW5lci4gKi9cclxuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xyXG4gICAgaWYgKHRoaXMuX3BvcnRhbE91dGxldC5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdBdHRlbXB0aW5nIHRvIGF0dGFjaCBrZXlib2FyZCBjb250ZW50IGFmdGVyIGNvbnRlbnQgaXMgYWxyZWFkeSBhdHRhY2hlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9wb3J0YWxPdXRsZXQuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XHJcbiAgfVxyXG5cclxuICAvLyBBdHRhY2ggYSB0ZW1wbGF0ZSBwb3J0YWwgYXMgY29udGVudCB0byB0aGlzIGtleWJvYXJkIGNvbnRhaW5lclxyXG4gIGF0dGFjaFRlbXBsYXRlUG9ydGFsKCk6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHtcclxuICAgIHRocm93IEVycm9yKCdOb3QgeWV0IGltcGxlbWVudGVkJyk7XHJcbiAgfVxyXG5cclxuICAvKiogSGFuZGxlIGVuZCBvZiBhbmltYXRpb25zLCB1cGRhdGluZyB0aGUgc3RhdGUgb2YgdGhlIGtleWJvYXJkLiAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ0BzdGF0ZS5kb25lJywgWyckZXZlbnQnXSlcclxuICBvbkFuaW1hdGlvbkVuZChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcclxuICAgIGNvbnN0IHsgZnJvbVN0YXRlLCB0b1N0YXRlIH0gPSBldmVudDtcclxuXHJcbiAgICBpZiAoKHRvU3RhdGUgPT09IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVm9pZCAmJiBmcm9tU3RhdGUgIT09IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVm9pZCkgfHwgdG9TdGF0ZS5zdGFydHNXaXRoKCdoaWRkZW4nKSkge1xyXG4gICAgICB0aGlzLl9jb21wbGV0ZUV4aXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9TdGF0ZSA9PT0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5WaXNpYmxlKSB7XHJcbiAgICAgIC8vIE5vdGU6IHdlIHNob3VsZG4ndCB1c2UgYHRoaXNgIGluc2lkZSB0aGUgem9uZSBjYWxsYmFjayxcclxuICAgICAgLy8gYmVjYXVzZSBpdCBjYW4gY2F1c2UgYSBtZW1vcnkgbGVhay5cclxuICAgICAgY29uc3Qgb25FbnRlciA9IHRoaXMub25FbnRlcjtcclxuXHJcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIG9uRW50ZXIubmV4dCgpO1xyXG4gICAgICAgIG9uRW50ZXIuY29tcGxldGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQmVnaW4gYW5pbWF0aW9uIG9mIGtleWJvYXJkIGVudHJhbmNlIGludG8gdmlldy4gKi9cclxuICBlbnRlcigpIHtcclxuICAgIGlmICghdGhpcy5fZGVzdHJveWVkKSB7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5WaXNpYmxlO1xyXG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQmVnaW4gYW5pbWF0aW9uIG9mIHRoZSBzbmFjayBiYXIgZXhpdGluZyBmcm9tIHZpZXcuICovXHJcbiAgZXhpdCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5IaWRkZW47XHJcbiAgICByZXR1cm4gdGhpcy5vbkV4aXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYWtlcyBzdXJlIHRoZSBleGl0IGNhbGxiYWNrcyBoYXZlIGJlZW4gaW52b2tlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGRlc3Ryb3llZC5cclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB0aGlzLl9jb21wbGV0ZUV4aXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdhaXRzIGZvciB0aGUgem9uZSB0byBzZXR0bGUgYmVmb3JlIHJlbW92aW5nIHRoZSBlbGVtZW50LiBIZWxwcyBwcmV2ZW50XHJcbiAgICogZXJyb3JzIHdoZXJlIHdlIGVuZCB1cCByZW1vdmluZyBhbiBlbGVtZW50IHdoaWNoIGlzIGluIHRoZSBtaWRkbGUgb2YgYW4gYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2NvbXBsZXRlRXhpdCgpIHtcclxuICAgIHRoaXMuX25nWm9uZS5vbk1pY3JvdGFza0VtcHR5XHJcbiAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAucGlwZShmaXJzdCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uRXhpdC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5vbkV4aXQuY29tcGxldGUoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==