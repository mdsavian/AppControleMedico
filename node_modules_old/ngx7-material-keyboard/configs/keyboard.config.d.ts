import { ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AriaLivePoliteness } from '@angular/cdk/a11y';
export declare class MatKeyboardConfig {
    /** The politeness level for the MatAriaLiveAnnouncer announcement. */
    politeness?: AriaLivePoliteness;
    /** Message to be announced by the MatAriaLiveAnnouncer */
    announcementMessage?: string;
    /** The view container to place the overlay for the keyboard into. */
    viewContainerRef?: ViewContainerRef;
    /** The length of time in milliseconds to wait before automatically dismissing the keyboard after blur. */
    duration?: number;
    /** Enable a dark keyboard **/
    darkTheme?: any;
    /** Enable the debug view **/
    isDebug?: boolean;
    /** Enable the debug view **/
    ngControl?: NgControl;
}
