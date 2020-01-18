/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class MatKeyboardKebabCasePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .toLowerCase();
    }
}
MatKeyboardKebabCasePipe.decorators = [
    { type: Pipe, args: [{
                name: 'matKeyboardKebabCase',
                pure: false
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ViYWItY2FzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbInBpcGVzL2tlYmFiLWNhc2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFFbkMsU0FBUyxDQUFDLEtBQWE7UUFDckIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzthQUM3QyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQzthQUNwQixXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFWRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsSUFBSSxFQUFFLEtBQUs7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbWF0S2V5Ym9hcmRLZWJhYkNhc2UnLFxyXG4gIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZEtlYmFiQ2FzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcclxuICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=