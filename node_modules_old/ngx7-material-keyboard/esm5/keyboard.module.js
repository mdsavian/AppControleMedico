/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// External modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Angular CDK
import { LIVE_ANNOUNCER_PROVIDER } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
// Angular material
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// Configs
import { keyboardDeadkeys, MAT_KEYBOARD_DEADKEYS } from './configs/keyboard-deadkey.config';
import { keyboardIcons, MAT_KEYBOARD_ICONS } from './configs/keyboard-icons.config';
import { keyboardLayouts, MAT_KEYBOARD_LAYOUTS } from './configs/keyboard-layouts.config';
// Components and directives
import { MatKeyboardContainerComponent } from './components/keyboard-container/keyboard-container.component';
import { MatKeyboardKeyComponent } from './components/keyboard-key/keyboard-key.component';
import { MatKeyboardComponent } from './components/keyboard/keyboard.component';
import { MatKeyboardDirective } from './directives/keyboard.directive';
// Providers
import { MatKeyboardKebabCasePipe } from './pipes/kebab-case.pipe';
import { MatKeyboardService } from './services/keyboard.service';
var ɵ0 = keyboardDeadkeys, ɵ1 = keyboardIcons, ɵ2 = keyboardLayouts;
var MatKeyboardModule = /** @class */ (function () {
    function MatKeyboardModule() {
    }
    MatKeyboardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        // Angular modules
                        CommonModule,
                        OverlayModule,
                        // Cdk modules
                        PortalModule,
                        // Material modules
                        MatButtonModule,
                        MatCommonModule,
                        MatIconModule,
                        MatInputModule
                    ],
                    exports: [
                        MatKeyboardComponent,
                        MatKeyboardContainerComponent,
                        MatKeyboardKeyComponent,
                        MatKeyboardDirective
                    ],
                    declarations: [
                        MatKeyboardKebabCasePipe,
                        MatKeyboardComponent,
                        MatKeyboardContainerComponent,
                        MatKeyboardKeyComponent,
                        MatKeyboardDirective
                    ],
                    entryComponents: [
                        MatKeyboardComponent,
                        MatKeyboardContainerComponent,
                        MatKeyboardKeyComponent
                    ],
                    providers: [
                        MatKeyboardService,
                        LIVE_ANNOUNCER_PROVIDER,
                        { provide: MAT_KEYBOARD_DEADKEYS, useValue: ɵ0 },
                        { provide: MAT_KEYBOARD_ICONS, useValue: ɵ1 },
                        { provide: MAT_KEYBOARD_LAYOUTS, useValue: ɵ2 }
                    ]
                },] }
    ];
    return MatKeyboardModule;
}());
export { MatKeyboardModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImtleWJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRTFGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUV2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztTQXNDakIsZ0JBQWdCLE9BQ25CLGFBQWEsT0FDWCxlQUFlO0FBdEM5RDtJQUFBO0lBeUNnQyxDQUFDOztnQkF6Q2hDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGFBQWE7d0JBRWIsY0FBYzt3QkFDZCxZQUFZO3dCQUVaLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQiw2QkFBNkI7d0JBQzdCLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUNyQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLDZCQUE2Qjt3QkFDN0IsdUJBQXVCO3dCQUN2QixvQkFBb0I7cUJBQ3JCO29CQUNELGVBQWUsRUFBRTt3QkFDZixvQkFBb0I7d0JBQ3BCLDZCQUE2Qjt3QkFDN0IsdUJBQXVCO3FCQUN4QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Qsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsSUFBa0IsRUFBRTt3QkFDOUQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxJQUFlLEVBQUU7d0JBQ3hELEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsSUFBaUIsRUFBRTtxQkFDN0Q7aUJBQ0Y7O0lBQytCLHdCQUFDO0NBQUEsQUF6Q2pDLElBeUNpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHRlcm5hbCBtb2R1bGVzXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIEFuZ3VsYXIgQ0RLXHJcbmltcG9ydCB7IExJVkVfQU5OT1VOQ0VSX1BST1ZJREVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuLy8gQW5ndWxhciBtYXRlcmlhbFxyXG5pbXBvcnQgeyBNYXRDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuLy8gQ29uZmlnc1xyXG5pbXBvcnQgeyBrZXlib2FyZERlYWRrZXlzLCBNQVRfS0VZQk9BUkRfREVBREtFWVMgfSBmcm9tICcuL2NvbmZpZ3Mva2V5Ym9hcmQtZGVhZGtleS5jb25maWcnO1xyXG5pbXBvcnQgeyBrZXlib2FyZEljb25zLCBNQVRfS0VZQk9BUkRfSUNPTlMgfSBmcm9tICcuL2NvbmZpZ3Mva2V5Ym9hcmQtaWNvbnMuY29uZmlnJztcclxuaW1wb3J0IHsga2V5Ym9hcmRMYXlvdXRzLCBNQVRfS0VZQk9BUkRfTEFZT1VUUyB9IGZyb20gJy4vY29uZmlncy9rZXlib2FyZC1sYXlvdXRzLmNvbmZpZyc7XHJcbi8vIENvbXBvbmVudHMgYW5kIGRpcmVjdGl2ZXNcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMva2V5Ym9hcmQtY29udGFpbmVyL2tleWJvYXJkLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZEtleUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9rZXlib2FyZC1rZXkva2V5Ym9hcmQta2V5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2tleWJvYXJkL2tleWJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2tleWJvYXJkLmRpcmVjdGl2ZSc7XHJcbi8vIFByb3ZpZGVyc1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZEtlYmFiQ2FzZVBpcGUgfSBmcm9tICcuL3BpcGVzL2tlYmFiLWNhc2UucGlwZSc7XHJcbmltcG9ydCB7IE1hdEtleWJvYXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMva2V5Ym9hcmQuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIC8vIEFuZ3VsYXIgbW9kdWxlc1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgT3ZlcmxheU1vZHVsZSxcclxuXHJcbiAgICAvLyBDZGsgbW9kdWxlc1xyXG4gICAgUG9ydGFsTW9kdWxlLFxyXG5cclxuICAgIC8vIE1hdGVyaWFsIG1vZHVsZXNcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdENvbW1vbk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWF0S2V5Ym9hcmRDb21wb25lbnQsXHJcbiAgICBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE1hdEtleWJvYXJkS2V5Q29tcG9uZW50LFxyXG4gICAgTWF0S2V5Ym9hcmREaXJlY3RpdmVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWF0S2V5Ym9hcmRLZWJhYkNhc2VQaXBlLFxyXG4gICAgTWF0S2V5Ym9hcmRDb21wb25lbnQsXHJcbiAgICBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE1hdEtleWJvYXJkS2V5Q29tcG9uZW50LFxyXG4gICAgTWF0S2V5Ym9hcmREaXJlY3RpdmVcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgTWF0S2V5Ym9hcmRDb21wb25lbnQsXHJcbiAgICBNYXRLZXlib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIE1hdEtleWJvYXJkS2V5Q29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1hdEtleWJvYXJkU2VydmljZSxcclxuICAgIExJVkVfQU5OT1VOQ0VSX1BST1ZJREVSLFxyXG4gICAgeyBwcm92aWRlOiBNQVRfS0VZQk9BUkRfREVBREtFWVMsIHVzZVZhbHVlOiBrZXlib2FyZERlYWRrZXlzIH0sXHJcbiAgICB7IHByb3ZpZGU6IE1BVF9LRVlCT0FSRF9JQ09OUywgdXNlVmFsdWU6IGtleWJvYXJkSWNvbnMgfSxcclxuICAgIHsgcHJvdmlkZTogTUFUX0tFWUJPQVJEX0xBWU9VVFMsIHVzZVZhbHVlOiBrZXlib2FyZExheW91dHMgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEtleWJvYXJkTW9kdWxlIHt9XHJcbiJdfQ==