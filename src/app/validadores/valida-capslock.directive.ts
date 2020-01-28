import { Directive, HostListener, EventEmitter, Output } from "@angular/core";


@Directive({
  selector: '[appValidaCapsLock]',
})

export class ValidaCapsLockDirective  {

  @Output('appValidaCapsLock') capsLock = new EventEmitter<Boolean>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {    
    this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {    
    this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
  }
}
