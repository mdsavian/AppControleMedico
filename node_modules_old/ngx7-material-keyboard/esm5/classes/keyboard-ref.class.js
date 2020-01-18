/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Reference to a keyboard dispatched from the keyboard service.
 * @template T
 */
var /**
 * Reference to a keyboard dispatched from the keyboard service.
 * @template T
 */
MatKeyboardRef = /** @class */ (function () {
    function MatKeyboardRef(instance, containerInstance, _overlayRef) {
        var _this = this;
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the keyboard has closed.
         */
        this._afterClosed = new Subject();
        /**
         * Subject for notifying the user that the keyboard has opened and appeared.
         */
        this._afterOpened = new Subject();
        // Sets the readonly instance of the keyboard content component.
        this.instance = instance;
        this.containerInstance = containerInstance;
        // Finish dismiss on exitting
        containerInstance.onExit.subscribe(function () { return _this._finishDismiss(); });
    }
    /** Dismisses the keyboard. */
    /**
     * Dismisses the keyboard.
     * @return {?}
     */
    MatKeyboardRef.prototype.dismiss = /**
     * Dismisses the keyboard.
     * @return {?}
     */
    function () {
        if (!this._afterClosed.closed) {
            this.containerInstance.exit();
        }
    };
    /** Marks the keyboard as opened */
    /**
     * Marks the keyboard as opened
     * @return {?}
     */
    MatKeyboardRef.prototype._open = /**
     * Marks the keyboard as opened
     * @return {?}
     */
    function () {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    };
    /** Gets an observable that is notified when the keyboard is finished closing. */
    /**
     * Gets an observable that is notified when the keyboard is finished closing.
     * @return {?}
     */
    MatKeyboardRef.prototype.afterDismissed = /**
     * Gets an observable that is notified when the keyboard is finished closing.
     * @return {?}
     */
    function () {
        return this._afterClosed.asObservable();
    };
    /** Gets an observable that is notified when the keyboard has opened and appeared. */
    /**
     * Gets an observable that is notified when the keyboard has opened and appeared.
     * @return {?}
     */
    MatKeyboardRef.prototype.afterOpened = /**
     * Gets an observable that is notified when the keyboard has opened and appeared.
     * @return {?}
     */
    function () {
        return this.containerInstance.onEnter;
    };
    /** Cleans up the DOM after closing. */
    /**
     * Cleans up the DOM after closing.
     * @private
     * @return {?}
     */
    MatKeyboardRef.prototype._finishDismiss = /**
     * Cleans up the DOM after closing.
     * @private
     * @return {?}
     */
    function () {
        this._overlayRef.dispose();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    return MatKeyboardRef;
}());
/**
 * Reference to a keyboard dispatched from the keyboard service.
 * @template T
 */
export { MatKeyboardRef };
if (false) {
    /**
     * Subject for notifying the user that the keyboard has closed.
     * @type {?}
     * @private
     */
    MatKeyboardRef.prototype._afterClosed;
    /**
     * Subject for notifying the user that the keyboard has opened and appeared.
     * @type {?}
     * @private
     */
    MatKeyboardRef.prototype._afterOpened;
    /**
     * The instance of the component making up the content of the keyboard.
     * @type {?}
     */
    MatKeyboardRef.prototype.instance;
    /**
     * The instance of the component making up the content of the keyboard.
     * @type {?}
     */
    MatKeyboardRef.prototype.containerInstance;
    /**
     * @type {?}
     * @private
     */
    MatKeyboardRef.prototype._overlayRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImNsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztBQVMzQzs7Ozs7SUFjRSx3QkFBWSxRQUE4QixFQUN4QyxpQkFBZ0QsRUFDeEMsV0FBdUI7UUFGakMsaUJBU0M7UUFQUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7OztRQWJ6QixpQkFBWSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOzs7O1FBRzNDLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFXakQsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUUzQyw2QkFBNkI7UUFDN0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDhCQUE4Qjs7Ozs7SUFDOUIsZ0NBQU87Ozs7SUFBUDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsbUNBQW1DOzs7OztJQUNuQyw4QkFBSzs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxpRkFBaUY7Ozs7O0lBQ2pGLHVDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHFGQUFxRjs7Ozs7SUFDckYsb0NBQVc7Ozs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztJQUN4QyxDQUFDO0lBRUQsdUNBQXVDOzs7Ozs7SUFDL0IsdUNBQWM7Ozs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQzs7Ozs7Ozs7Ozs7O0lBdERDLHNDQUFtRDs7Ozs7O0lBR25ELHNDQUFtRDs7Ozs7SUFHbkQsa0NBQStCOzs7OztJQUcvQiwyQ0FBaUQ7Ozs7O0lBSS9DLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2tleWJvYXJkLWNvbnRhaW5lci9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2tleWJvYXJkL2tleWJvYXJkLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWZlcmVuY2UgdG8gYSBrZXlib2FyZCBkaXNwYXRjaGVkIGZyb20gdGhlIGtleWJvYXJkIHNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWF0S2V5Ym9hcmRSZWY8VD4ge1xyXG5cclxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIGtleWJvYXJkIGhhcyBjbG9zZWQuICovXHJcbiAgcHJpdmF0ZSBfYWZ0ZXJDbG9zZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhlIHVzZXIgdGhhdCB0aGUga2V5Ym9hcmQgaGFzIG9wZW5lZCBhbmQgYXBwZWFyZWQuICovXHJcbiAgcHJpdmF0ZSBfYWZ0ZXJPcGVuZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIC8qKiBUaGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBtYWtpbmcgdXAgdGhlIGNvbnRlbnQgb2YgdGhlIGtleWJvYXJkLiAqL1xyXG4gIGluc3RhbmNlOiBNYXRLZXlib2FyZENvbXBvbmVudDtcclxuXHJcbiAgLyoqIFRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IG1ha2luZyB1cCB0aGUgY29udGVudCBvZiB0aGUga2V5Ym9hcmQuICovXHJcbiAgY29udGFpbmVySW5zdGFuY2U6IE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbnN0YW5jZTogTWF0S2V5Ym9hcmRDb21wb25lbnQsXHJcbiAgICBjb250YWluZXJJbnN0YW5jZTogTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmKSB7XHJcbiAgICAvLyBTZXRzIHRoZSByZWFkb25seSBpbnN0YW5jZSBvZiB0aGUga2V5Ym9hcmQgY29udGVudCBjb21wb25lbnQuXHJcbiAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlID0gY29udGFpbmVySW5zdGFuY2U7XHJcblxyXG4gICAgLy8gRmluaXNoIGRpc21pc3Mgb24gZXhpdHRpbmdcclxuICAgIGNvbnRhaW5lckluc3RhbmNlLm9uRXhpdC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fZmluaXNoRGlzbWlzcygpKTtcclxuICB9XHJcblxyXG4gIC8qKiBEaXNtaXNzZXMgdGhlIGtleWJvYXJkLiAqL1xyXG4gIGRpc21pc3MoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2FmdGVyQ2xvc2VkLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lckluc3RhbmNlLmV4aXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBNYXJrcyB0aGUga2V5Ym9hcmQgYXMgb3BlbmVkICovXHJcbiAgX29wZW4oKSB7XHJcbiAgICBpZiAoIXRoaXMuX2FmdGVyT3BlbmVkLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLl9hZnRlck9wZW5lZC5uZXh0KCk7XHJcbiAgICAgIHRoaXMuX2FmdGVyT3BlbmVkLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUga2V5Ym9hcmQgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cclxuICBhZnRlckRpc21pc3NlZCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9hZnRlckNsb3NlZC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBrZXlib2FyZCBoYXMgb3BlbmVkIGFuZCBhcHBlYXJlZC4gKi9cclxuICBhZnRlck9wZW5lZCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lckluc3RhbmNlLm9uRW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xlYW5zIHVwIHRoZSBET00gYWZ0ZXIgY2xvc2luZy4gKi9cclxuICBwcml2YXRlIF9maW5pc2hEaXNtaXNzKCkge1xyXG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcblxyXG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dCgpO1xyXG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19