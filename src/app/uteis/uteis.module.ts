import { NgModule } from '@angular/core';
import { EnumToArrayPipe } from './enumToArray.pipe'
import { dateParse } from './dateParse';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
  ],
  declarations: [
    EnumToArrayPipe
  ],
  exports:[      
    EnumToArrayPipe
  ],
  providers:[
    { provide: NgbDateParserFormatter, useClass: dateParse }
  ]
})
export class UteisModule {}
