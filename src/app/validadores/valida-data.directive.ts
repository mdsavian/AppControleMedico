import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { Util } from "../uteis/Util";

@Directive({
  selector: '[appValidaData]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDataDirective, multi: true }]
})

export class ValidaDataDirective implements Validator {

  util = new Util();
  constructor() { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    if (control.value == '' || control.value == null)
      return null;

    if (!this.validaData(control.value)) return { 'validaData': { value: control.value } };
    else return null;
  }

  public validaData(data:string): boolean {    
    
    var date = this.util.formatarData(data);
    var ardt = new Array;
    var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");    
    var erro = false;
    ardt = date.split("/");

    if (date.search(ExpReg) == -1) {
      erro = true;
    }
    else if (((ardt[1] == 4) || (ardt[1] == 6) || (ardt[1] == 9) || (ardt[1] == 11)) && (ardt[0] > 30))
      erro = true;
    else if (ardt[1] == 2) {

      if ((ardt[0] > 28) && ((ardt[2] % 4) != 0))
        erro = true;
      if ((ardt[0] > 29) && ((ardt[2] % 4) == 0))
        erro = true;
    }
    
    if (erro)
      return false;

    return true;
  }
}

