import { NgModule } from '@angular/core';
import { EnumToArrayPipe } from './enumToArray.pipe'

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
