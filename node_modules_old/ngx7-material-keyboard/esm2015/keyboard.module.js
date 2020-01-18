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
const ɵ0 = keyboardDeadkeys, ɵ1 = keyboardIcons, ɵ2 = keyboardLayouts;
export class MatKeyboardModule {
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
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4Ny1tYXRlcmlhbC1rZXlib2FyZC8iLCJzb3VyY2VzIjpbImtleWJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRTFGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUV2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztXQXNDakIsZ0JBQWdCLE9BQ25CLGFBQWEsT0FDWCxlQUFlO0FBRzlELE1BQU0sT0FBTyxpQkFBaUI7OztZQXpDN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osYUFBYTtvQkFFYixjQUFjO29CQUNkLFlBQVk7b0JBRVosbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLDZCQUE2QjtvQkFDN0IsdUJBQXVCO29CQUN2QixvQkFBb0I7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDWix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsNkJBQTZCO29CQUM3Qix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLG9CQUFvQjtvQkFDcEIsNkJBQTZCO29CQUM3Qix1QkFBdUI7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxJQUFrQixFQUFFO29CQUM5RCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLElBQWUsRUFBRTtvQkFDeEQsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxJQUFpQixFQUFFO2lCQUM3RDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXh0ZXJuYWwgbW9kdWxlc1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBBbmd1bGFyIENES1xyXG5pbXBvcnQgeyBMSVZFX0FOTk9VTkNFUl9QUk9WSURFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbi8vIEFuZ3VsYXIgbWF0ZXJpYWxcclxuaW1wb3J0IHsgTWF0Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbi8vIENvbmZpZ3NcclxuaW1wb3J0IHsga2V5Ym9hcmREZWFka2V5cywgTUFUX0tFWUJPQVJEX0RFQURLRVlTIH0gZnJvbSAnLi9jb25maWdzL2tleWJvYXJkLWRlYWRrZXkuY29uZmlnJztcclxuaW1wb3J0IHsga2V5Ym9hcmRJY29ucywgTUFUX0tFWUJPQVJEX0lDT05TIH0gZnJvbSAnLi9jb25maWdzL2tleWJvYXJkLWljb25zLmNvbmZpZyc7XHJcbmltcG9ydCB7IGtleWJvYXJkTGF5b3V0cywgTUFUX0tFWUJPQVJEX0xBWU9VVFMgfSBmcm9tICcuL2NvbmZpZ3Mva2V5Ym9hcmQtbGF5b3V0cy5jb25maWcnO1xyXG4vLyBDb21wb25lbnRzIGFuZCBkaXJlY3RpdmVzXHJcbmltcG9ydCB7IE1hdEtleWJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2tleWJvYXJkLWNvbnRhaW5lci9rZXlib2FyZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRLZXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMva2V5Ym9hcmQta2V5L2tleWJvYXJkLWtleS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9rZXlib2FyZC9rZXlib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9rZXlib2FyZC5kaXJlY3RpdmUnO1xyXG4vLyBQcm92aWRlcnNcclxuaW1wb3J0IHsgTWF0S2V5Ym9hcmRLZWJhYkNhc2VQaXBlIH0gZnJvbSAnLi9waXBlcy9rZWJhYi1jYXNlLnBpcGUnO1xyXG5pbXBvcnQgeyBNYXRLZXlib2FyZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2tleWJvYXJkLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICAvLyBBbmd1bGFyIG1vZHVsZXNcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE92ZXJsYXlNb2R1bGUsXHJcblxyXG4gICAgLy8gQ2RrIG1vZHVsZXNcclxuICAgIFBvcnRhbE1vZHVsZSxcclxuXHJcbiAgICAvLyBNYXRlcmlhbCBtb2R1bGVzXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE1hdEtleWJvYXJkQ29tcG9uZW50LFxyXG4gICAgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBNYXRLZXlib2FyZEtleUNvbXBvbmVudCxcclxuICAgIE1hdEtleWJvYXJkRGlyZWN0aXZlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hdEtleWJvYXJkS2ViYWJDYXNlUGlwZSxcclxuICAgIE1hdEtleWJvYXJkQ29tcG9uZW50LFxyXG4gICAgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBNYXRLZXlib2FyZEtleUNvbXBvbmVudCxcclxuICAgIE1hdEtleWJvYXJkRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE1hdEtleWJvYXJkQ29tcG9uZW50LFxyXG4gICAgTWF0S2V5Ym9hcmRDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBNYXRLZXlib2FyZEtleUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBNYXRLZXlib2FyZFNlcnZpY2UsXHJcbiAgICBMSVZFX0FOTk9VTkNFUl9QUk9WSURFUixcclxuICAgIHsgcHJvdmlkZTogTUFUX0tFWUJPQVJEX0RFQURLRVlTLCB1c2VWYWx1ZToga2V5Ym9hcmREZWFka2V5cyB9LFxyXG4gICAgeyBwcm92aWRlOiBNQVRfS0VZQk9BUkRfSUNPTlMsIHVzZVZhbHVlOiBrZXlib2FyZEljb25zIH0sXHJcbiAgICB7IHByb3ZpZGU6IE1BVF9LRVlCT0FSRF9MQVlPVVRTLCB1c2VWYWx1ZToga2V5Ym9hcmRMYXlvdXRzIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRLZXlib2FyZE1vZHVsZSB7fVxyXG4iXX0=