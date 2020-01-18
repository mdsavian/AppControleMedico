/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var MatKeyboardKebabCasePipe = /** @class */ (function () {
    function MatKeyboardKebabCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    MatKeyboardKebabCasePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .toLowerCase();
    };
    MatKeyboardKebabCasePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'matKeyboardKebabCase',
                    pure: false
                },] }
    ];
    return MatKeyboardKebabCasePipe;
}());
export { MatKeyboardKebabCasePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ViYWItY2FzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbInBpcGVzL2tlYmFiLWNhc2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQVlBLENBQUM7Ozs7O0lBTkMsNENBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzthQUM3QyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFWRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLHNCQUFzQjtvQkFDNUIsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7O0lBU0QsK0JBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ21hdEtleWJvYXJkS2ViYWJDYXNlJyxcclxuICBwdXJlOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0S2V5Ym9hcmRLZWJhYkNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19