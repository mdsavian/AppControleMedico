/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var SHOW_ANIMATION = AnimationDurations.ENTERING + " " + AnimationCurves.DECELERATION_CURVE;
/** @type {?} */
export var HIDE_ANIMATION = AnimationDurations.EXITING + " " + AnimationCurves.ACCELERATION_CURVE;
/**
 * Internal component that wraps user-provided keyboard content.
 * \@docs-private
 */
var MatKeyboardContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MatKeyboardContainerComponent, _super);
    function MatKeyboardContainerComponent(_ngZone, _changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        _this._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the component has been destroyed.
         */
        _this._destroyed = false;
        /**
         * The state of the keyboard animations.
         */
        _this._animationState = KeyboardAnimationState.Void;
        /**
         * Subject for notifying that the keyboard has exited from view.
         */
        _this.onExit = new Subject();
        /**
         * Subject for notifying that the keyboard has finished entering the view.
         */
        _this.onEnter = new Subject();
        _this.attrRole = 'alert';
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype.onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
    };
    /** Attach a component portal as content to this keyboard container. */
    /**
     * Attach a component portal as content to this keyboard container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype.attachComponentPortal = /**
     * Attach a component portal as content to this keyboard container.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach keyboard content after content is already attached');
        }
        return this._portalOutlet.attachComponentPortal(portal);
    };
    // Attach a template portal as content to this keyboard container
    // Attach a template portal as content to this keyboard container
    /**
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype.attachTemplatePortal = 
    // Attach a template portal as content to this keyboard container
    /**
     * @return {?}
     */
    function () {
        throw Error('Not yet implemented');
    };
    /** Handle end of animations, updating the state of the keyboard. */
    /**
     * Handle end of animations, updating the state of the keyboard.
     * @param {?} event
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype.onAnimationEnd = /**
     * Handle end of animations, updating the state of the keyboard.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var fromState = event.fromState, toState = event.toState;
        if ((toState === KeyboardAnimationState.Void && fromState !== KeyboardAnimationState.Void) || toState.startsWith('hidden')) {
            this._completeExit();
        }
        if (toState === KeyboardAnimationState.Visible) {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.
            /** @type {?} */
            var onEnter_1 = this.onEnter;
            this._ngZone.run(function () {
                onEnter_1.next();
                onEnter_1.complete();
            });
        }
    };
    /** Begin animation of keyboard entrance into view. */
    /**
     * Begin animation of keyboard entrance into view.
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype.enter = /**
     * Begin animation of keyboard entrance into view.
     * @return {?}
     */
    function () {
        if (!this._destroyed) {
            this._animationState = KeyboardAnimationState.Visible;
            this._changeDetectorRef.detectChanges();
        }
    };
    /** Begin animation of the snack bar exiting from view. */
    /**
     * Begin animation of the snack bar exiting from view.
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype.exit = /**
     * Begin animation of the snack bar exiting from view.
     * @return {?}
     */
    function () {
        this._animationState = KeyboardAnimationState.Hidden;
        return this.onExit;
    };
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     */
    /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype.ngOnDestroy = /**
     * Makes sure the exit callbacks have been invoked when the element is destroyed.
     * @return {?}
     */
    function () {
        this._destroyed = true;
        this._completeExit();
    };
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     */
    /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     * @private
     * @return {?}
     */
    MatKeyboardContainerComponent.prototype._completeExit = /**
     * Waits for the zone to settle before removing the element. Helps prevent
     * errors where we end up removing an element which is in the middle of an animation.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.onMicrotaskEmpty
            .asObservable()
            .pipe(first())
            .subscribe(function () {
            _this.onExit.next();
            _this.onExit.complete();
        });
    };
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
                            state("" + KeyboardAnimationState.Visible, style({ transform: 'translateY(0%)' })),
                            transition("" + KeyboardAnimationTransition.Hide, animate(HIDE_ANIMATION)),
                            transition("" + KeyboardAnimationTransition.Show, animate(SHOW_ANIMATION))
                        ])
                    ],
                    styles: [":host{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);border-radius:2px;box-sizing:border-box;display:block;margin:0 auto;max-width:960px;min-width:568px;-webkit-transform:translateY(100%);transform:translateY(100%)}@media screen and (-ms-high-contrast:active){:host{border:1px solid}}"]
                }] }
    ];
    /** @nocollapse */
    MatKeyboardContainerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    MatKeyboardContainerComponent.propDecorators = {
        _portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet,] }],
        _animationState: [{ type: HostBinding, args: ['@state',] }],
        attrRole: [{ type: HostBinding, args: ['attr.role',] }],
        onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        onAnimationEnd: [{ type: HostListener, args: ['@state.done', ['$event'],] }]
    };
    return MatKeyboardContainerComponent;
}(BasePortalOutlet));
export { MatKeyboardContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neDctbWF0ZXJpYWwta2V5Ym9hcmQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2tleWJvYXJkLWNvbnRhaW5lci9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBa0IsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBbUIsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFpQyxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUssT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7O0FBTTdGLE1BQU0sS0FBTyxjQUFjLEdBQU0sa0JBQWtCLENBQUMsUUFBUSxTQUFJLGVBQWUsQ0FBQyxrQkFBb0I7O0FBQ3BHLE1BQU0sS0FBTyxjQUFjLEdBQU0sa0JBQWtCLENBQUMsT0FBTyxTQUFJLGVBQWUsQ0FBQyxrQkFBb0I7Ozs7O0FBTW5HO0lBcUJtRCx5REFBZ0I7SUF5QmpFLHVDQUFvQixPQUFlLEVBQ3pCLGtCQUFxQztRQUQvQyxZQUVFLGlCQUFPLFNBQ1I7UUFIbUIsYUFBTyxH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dUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzs7Ozs7Ozs7b0JBUTFCLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsT0FBTyxFQUFFOzRCQUNmLEtBQUssQ0FBQyxLQUFHLHNCQUFzQixDQUFDLE9BQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDOzRCQUNsRixVQUFVLENBQUMsS0FBRywyQkFBMkIsQ0FBQyxJQUFNLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUMxRSxVQUFVLENBQUMsS0FBRywyQkFBMkIsQ0FBQyxJQUFNLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3lCQUMzRSxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkF2Q3lILE1BQU07Z0JBQTlGLGlCQUFpQjs7O2dDQThDaEQsU0FBUyxTQUFDLGVBQWU7a0NBSXpCLFdBQVcsU0FBQyxRQUFROzJCQVNwQixXQUFXLFNBQUMsV0FBVzs4QkFXdkIsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQ0FvQnBDLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBdUR6QyxvQ0FBQztDQUFBLEFBOUhELENBcUJtRCxnQkFBZ0IsR0F5R2xFO1NBekdZLDZCQUE2Qjs7Ozs7OztJQUd4QyxtREFBMkI7Ozs7OztJQUczQixzREFDdUM7Ozs7O0lBR3ZDLHdEQUNzRTs7Ozs7SUFHdEUsK0NBQXFDOzs7OztJQUdyQyxnREFBc0M7O0lBRXRDLGlEQUNtQjs7SUFHbkIsdURBQWtDOzs7OztJQUV0QixnREFBdUI7Ozs7O0lBQ2pDLDJEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQmFzZVBvcnRhbE91dGxldCwgQ2RrUG9ydGFsT3V0bGV0LCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlcywgQW5pbWF0aW9uRHVyYXRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlncy9rZXlib2FyZC5jb25maWcnO1xyXG5pbXBvcnQgeyBLZXlib2FyZEFuaW1hdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vZW51bXMva2V5Ym9hcmQtYW5pbWF0aW9uLXN0YXRlLmVudW0nO1xyXG5pbXBvcnQgeyBLZXlib2FyZEFuaW1hdGlvblRyYW5zaXRpb24gfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1hbmltYXRpb24tdHJhbnNpdGlvbi5lbnVtJztcclxuXHJcblxyXG5cclxuLy8gVE9ETzogd2UgY2FuJ3QgdXNlIGNvbnN0YW50cyBmcm9tIGFuaW1hdGlvbi50cyBoZXJlIGJlY2F1c2UgeW91IGNhbid0IHVzZVxyXG4vLyBhIHRleHQgaW50ZXJwb2xhdGlvbiBpbiBhbnl0aGluZyB0aGF0IGlzIGFuYWx5emVkIHN0YXRpY2FsbHkgd2l0aCBuZ2MgKGZvciBBb1QgY29tcGlsZSkuXHJcbmV4cG9ydCBjb25zdCBTSE9XX0FOSU1BVElPTiA9IGAke0FuaW1hdGlvbkR1cmF0aW9ucy5FTlRFUklOR30gJHtBbmltYXRpb25DdXJ2ZXMuREVDRUxFUkFUSU9OX0NVUlZFfWA7XHJcbmV4cG9ydCBjb25zdCBISURFX0FOSU1BVElPTiA9IGAke0FuaW1hdGlvbkR1cmF0aW9ucy5FWElUSU5HfSAke0FuaW1hdGlvbkN1cnZlcy5BQ0NFTEVSQVRJT05fQ1VSVkV9YDtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBjb21wb25lbnQgdGhhdCB3cmFwcyB1c2VyLXByb3ZpZGVkIGtleWJvYXJkIGNvbnRlbnQuXHJcbiAqIEBkb2NzLXByaXZhdGVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWtleWJvYXJkLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2tleWJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4va2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgLy8gYW5pbWF0aW9uczogW1xyXG4gIC8vICAgdHJpZ2dlcignc3RhdGUnLCBbXHJcbiAgLy8gICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ30pKSxcclxuICAvLyAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiBoaWRkZW4nLCBhbmltYXRlKEhJREVfQU5JTUFUSU9OKSksXHJcbiAgLy8gICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdmlzaWJsZScsIGFuaW1hdGUoU0hPV19BTklNQVRJT04pKSxcclxuICAvLyAgIF0pXHJcbiAgLy8gXVxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ3N0YXRlJywgW1xyXG4gICAgICBzdGF0ZShgJHtLZXlib2FyZEFuaW1hdGlvblN0YXRlLlZpc2libGV9YCwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKGAke0tleWJvYXJkQW5pbWF0aW9uVHJhbnNpdGlvbi5IaWRlfWAsIGFuaW1hdGUoSElERV9BTklNQVRJT04pKSxcclxuICAgICAgdHJhbnNpdGlvbihgJHtLZXlib2FyZEFuaW1hdGlvblRyYW5zaXRpb24uU2hvd31gLCBhbmltYXRlKFNIT1dfQU5JTUFUSU9OKSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXHJcbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBUaGUgcG9ydGFsIG91dGxldCBpbnNpZGUgb2YgdGhpcyBjb250YWluZXIgaW50byB3aGljaCB0aGUga2V5Ym9hcmQgY29udGVudCB3aWxsIGJlIGxvYWRlZC4gKi9cclxuICBAVmlld0NoaWxkKENka1BvcnRhbE91dGxldClcclxuICBwcml2YXRlIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcclxuXHJcbiAgLyoqIFRoZSBzdGF0ZSBvZiB0aGUga2V5Ym9hcmQgYW5pbWF0aW9ucy4gKi9cclxuICBASG9zdEJpbmRpbmcoJ0BzdGF0ZScpXHJcbiAgX2FuaW1hdGlvblN0YXRlOiBLZXlib2FyZEFuaW1hdGlvblN0YXRlID0gS2V5Ym9hcmRBbmltYXRpb25TdGF0ZS5Wb2lkO1xyXG5cclxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoYXQgdGhlIGtleWJvYXJkIGhhcyBleGl0ZWQgZnJvbSB2aWV3LiAqL1xyXG4gIG9uRXhpdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGF0IHRoZSBrZXlib2FyZCBoYXMgZmluaXNoZWQgZW50ZXJpbmcgdGhlIHZpZXcuICovXHJcbiAgb25FbnRlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxyXG4gIGF0dHJSb2xlID0gJ2FsZXJ0JztcclxuXHJcbiAgLy8gdGhlIGtleWJvYXJkIGNvbmZpZ3VyYXRpb25cclxuICBrZXlib2FyZENvbmZpZzogTWF0S2V5Ym9hcmRDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBBdHRhY2ggYSBjb21wb25lbnQgcG9ydGFsIGFzIGNvbnRlbnQgdG8gdGhpcyBrZXlib2FyZCBjb250YWluZXIuICovXHJcbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIGlmICh0aGlzLl9wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aHJvdyBFcnJvcignQXR0ZW1wdGluZyB0byBhdHRhY2gga2V5Ym9hcmQgY29udGVudCBhZnRlciBjb250ZW50IGlzIGFscmVhZHkgYXR0YWNoZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xyXG4gIH1cclxuXHJcbiAgLy8gQXR0YWNoIGEgdGVtcGxhdGUgcG9ydGFsIGFzIGNvbnRlbnQgdG8gdGhpcyBrZXlib2FyZCBjb250YWluZXJcclxuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbCgpOiBFbWJlZGRlZFZpZXdSZWY8YW55PiB7XHJcbiAgICB0aHJvdyBFcnJvcignTm90IHlldCBpbXBsZW1lbnRlZCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEhhbmRsZSBlbmQgb2YgYW5pbWF0aW9ucywgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIHRoZSBrZXlib2FyZC4gKi9cclxuICBASG9zdExpc3RlbmVyKCdAc3RhdGUuZG9uZScsIFsnJGV2ZW50J10pXHJcbiAgb25BbmltYXRpb25FbmQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XHJcbiAgICBjb25zdCB7IGZyb21TdGF0ZSwgdG9TdGF0ZSB9ID0gZXZlbnQ7XHJcblxyXG4gICAgaWYgKCh0b1N0YXRlID09PSBLZXlib2FyZEFuaW1hdGlvblN0YXRlLlZvaWQgJiYgZnJvbVN0YXRlICE9PSBLZXlib2FyZEFuaW1hdGlvblN0YXRlLlZvaWQpIHx8IHRvU3RhdGUuc3RhcnRzV2l0aCgnaGlkZGVuJykpIHtcclxuICAgICAgdGhpcy5fY29tcGxldGVFeGl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvU3RhdGUgPT09IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVmlzaWJsZSkge1xyXG4gICAgICAvLyBOb3RlOiB3ZSBzaG91bGRuJ3QgdXNlIGB0aGlzYCBpbnNpZGUgdGhlIHpvbmUgY2FsbGJhY2ssXHJcbiAgICAgIC8vIGJlY2F1c2UgaXQgY2FuIGNhdXNlIGEgbWVtb3J5IGxlYWsuXHJcbiAgICAgIGNvbnN0IG9uRW50ZXIgPSB0aGlzLm9uRW50ZXI7XHJcblxyXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICBvbkVudGVyLm5leHQoKTtcclxuICAgICAgICBvbkVudGVyLmNvbXBsZXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEJlZ2luIGFuaW1hdGlvbiBvZiBrZXlib2FyZCBlbnRyYW5jZSBpbnRvIHZpZXcuICovXHJcbiAgZW50ZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2Rlc3Ryb3llZCkge1xyXG4gICAgICB0aGlzLl9hbmltYXRpb25TdGF0ZSA9IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuVmlzaWJsZTtcclxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEJlZ2luIGFuaW1hdGlvbiBvZiB0aGUgc25hY2sgYmFyIGV4aXRpbmcgZnJvbSB2aWV3LiAqL1xyXG4gIGV4aXQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICB0aGlzLl9hbmltYXRpb25TdGF0ZSA9IEtleWJvYXJkQW5pbWF0aW9uU3RhdGUuSGlkZGVuO1xyXG4gICAgcmV0dXJuIHRoaXMub25FeGl0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFrZXMgc3VyZSB0aGUgZXhpdCBjYWxsYmFja3MgaGF2ZSBiZWVuIGludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBkZXN0cm95ZWQuXHJcbiAgICovXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fY29tcGxldGVFeGl0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXYWl0cyBmb3IgdGhlIHpvbmUgdG8gc2V0dGxlIGJlZm9yZSByZW1vdmluZyB0aGUgZWxlbWVudC4gSGVscHMgcHJldmVudFxyXG4gICAqIGVycm9ycyB3aGVyZSB3ZSBlbmQgdXAgcmVtb3ZpbmcgYW4gZWxlbWVudCB3aGljaCBpcyBpbiB0aGUgbWlkZGxlIG9mIGFuIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBwcml2YXRlIF9jb21wbGV0ZUV4aXQoKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUub25NaWNyb3Rhc2tFbXB0eVxyXG4gICAgICAuYXNPYnNlcnZhYmxlKClcclxuICAgICAgLnBpcGUoZmlyc3QoKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbkV4aXQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMub25FeGl0LmNvbXBsZXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=