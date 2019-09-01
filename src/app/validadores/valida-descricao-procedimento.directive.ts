import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { ProcedimentoService } from "../services/procedimento.service";
import { Util } from "../uteis/Util";

@Directive({
  selector: '[appValidaDescricaoProcedimento]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoProcedimentoDirective, multi: true }]
})

export class ValidaDescricaoProcedimentoDirective implements Validator {

  constructor(private procedimentoService: ProcedimentoService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    var listaProcedimento = this.procedimentoService.listaProcedimento;
    var procedimentoRegente = this.procedimentoService.procedimento;

    if (new Util().hasItems(listaProcedimento)
      && listaProcedimento.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()) != null) {    
    return { 'validaDescricaoProcedimento': { value: control.value } } ;        
    }
    return null;    
    
  }
}

