import { NgModule } from '@angular/core';
import { EnumToArrayPipe } from '../uteis/enumToArray'

@NgModule({
  imports: [
  ],
  declarations: [
    EnumToArrayPipe
  ],
  exports:[      
    EnumToArrayPipe
  ]
})
export class UteisModule {}
