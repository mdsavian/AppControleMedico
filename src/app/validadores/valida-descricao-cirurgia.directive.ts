import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { CirurgiaService } from "../services/cirurgia.service";

@Directive({
  selector: '[appValidaDescricaoCirurgia]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoCirurgiaDirective, multi: true }]
})

export class ValidaDescricaoCirurgiaDirective implements Validator {

  constructor(private cirurgiaService: CirurgiaService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    var listaCirurgia = this.cirurgiaService.listaCirurgia;
    var cirurgiaRegente = this.cirurgiaService.cirurgia;

    if (cirurgiaRegente == null && listaCirurgia != null && listaCirurgia.length > 0 && listaCirurgia.find(c => c.descricao === control.value) != null) {    
    return { 'validaDescricaoCirurgia': { value: control.value } } ;        
    }
    return null;    
    
  }
}

