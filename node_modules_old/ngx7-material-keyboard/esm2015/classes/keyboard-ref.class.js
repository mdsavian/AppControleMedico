/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Reference to a keyboard dispatched from the keyboard service.
 * @template T
 */
export class MatKeyboardRef {
    /**
     * @param {?} instance
     * @param {?} containerInstance
     * @param {?} _overlayRef
     */
    constructor(instance, containerInstance, _overlayRef) {
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
        containerInstance.onExit.subscribe(() => this._finishDismiss());
    }
    /**
     * Dismisses the keyboard.
     * @return {?}
     */
    dismiss() {
        if (!this._afterClosed.closed) {
            this.containerInstance.exit();
        }
    }
    /**
     * Marks the keyboard as opened
     * @return {?}
     */
    _open() {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    }
    /**
     * Gets an observable that is notified when the keyboard is finished closing.
     * @return {?}
     */
    afterDismissed() {
        return this._afterClosed.asObservable();
    }
    /**
     * Gets an observable that is notified when the keyboard has opened and appeared.
     * @return {?}
     */
    afterOpened() {
        return this.containerInstance.onEnter;
    }
    /**
     * Cleans up the DOM after closing.
     * @private
     * @return {?}
     */
    _finishDismiss() {
        this._overlayRef.dispose();
        this._afterClosed.next();
        this._afterClosed.complete();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtcmVmLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImNsYXNzZXMva2V5Ym9hcmQtcmVmLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztBQVMzQyxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBY3pCLFlBQVksUUFBOEIsRUFDeEMsaUJBQWdELEVBQ3hDLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7O1FBYnpCLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7Ozs7UUFHM0MsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVdqRCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBRTNDLDZCQUE2QjtRQUM3QixpQkFBaUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUdELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFHTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjs7Ozs7OztJQXREQyxzQ0FBbUQ7Ozs7OztJQUduRCxzQ0FBbUQ7Ozs7O0lBR25ELGtDQUErQjs7Ozs7SUFHL0IsMkNBQWlEOzs7OztJQUkvQyxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9rZXlib2FyZC1jb250YWluZXIva2V5Ym9hcmQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9rZXlib2FyZC9rZXlib2FyZC5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVmZXJlbmNlIHRvIGEga2V5Ym9hcmQgZGlzcGF0Y2hlZCBmcm9tIHRoZSBrZXlib2FyZCBzZXJ2aWNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkUmVmPFQ+IHtcclxuXHJcbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGUgdXNlciB0aGF0IHRoZSBrZXlib2FyZCBoYXMgY2xvc2VkLiAqL1xyXG4gIHByaXZhdGUgX2FmdGVyQ2xvc2VkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIGtleWJvYXJkIGhhcyBvcGVuZWQgYW5kIGFwcGVhcmVkLiAqL1xyXG4gIHByaXZhdGUgX2FmdGVyT3BlbmVkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiogVGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgbWFraW5nIHVwIHRoZSBjb250ZW50IG9mIHRoZSBrZXlib2FyZC4gKi9cclxuICBpbnN0YW5jZTogTWF0S2V5Ym9hcmRDb21wb25lbnQ7XHJcblxyXG4gIC8qKiBUaGUgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBtYWtpbmcgdXAgdGhlIGNvbnRlbnQgb2YgdGhlIGtleWJvYXJkLiAqL1xyXG4gIGNvbnRhaW5lckluc3RhbmNlOiBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5zdGFuY2U6IE1hdEtleWJvYXJkQ29tcG9uZW50LFxyXG4gICAgY29udGFpbmVySW5zdGFuY2U6IE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZikge1xyXG4gICAgLy8gU2V0cyB0aGUgcmVhZG9ubHkgaW5zdGFuY2Ugb2YgdGhlIGtleWJvYXJkIGNvbnRlbnQgY29tcG9uZW50LlxyXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgdGhpcy5jb250YWluZXJJbnN0YW5jZSA9IGNvbnRhaW5lckluc3RhbmNlO1xyXG5cclxuICAgIC8vIEZpbmlzaCBkaXNtaXNzIG9uIGV4aXR0aW5nXHJcbiAgICBjb250YWluZXJJbnN0YW5jZS5vbkV4aXQuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2ZpbmlzaERpc21pc3MoKSk7XHJcbiAgfVxyXG5cclxuICAvKiogRGlzbWlzc2VzIHRoZSBrZXlib2FyZC4gKi9cclxuICBkaXNtaXNzKCkge1xyXG4gICAgaWYgKCF0aGlzLl9hZnRlckNsb3NlZC5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5jb250YWluZXJJbnN0YW5jZS5leGl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogTWFya3MgdGhlIGtleWJvYXJkIGFzIG9wZW5lZCAqL1xyXG4gIF9vcGVuKCkge1xyXG4gICAgaWYgKCF0aGlzLl9hZnRlck9wZW5lZC5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5fYWZ0ZXJPcGVuZWQubmV4dCgpO1xyXG4gICAgICB0aGlzLl9hZnRlck9wZW5lZC5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIGtleWJvYXJkIGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXHJcbiAgYWZ0ZXJEaXNtaXNzZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUga2V5Ym9hcmQgaGFzIG9wZW5lZCBhbmQgYXBwZWFyZWQuICovXHJcbiAgYWZ0ZXJPcGVuZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJJbnN0YW5jZS5vbkVudGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsZWFucyB1cCB0aGUgRE9NIGFmdGVyIGNsb3NpbmcuICovXHJcbiAgcHJpdmF0ZSBfZmluaXNoRGlzbWlzcygpIHtcclxuICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG5cclxuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoKTtcclxuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==