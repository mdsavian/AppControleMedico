import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { ProcedimentoService } from "../services/procedimento.service";

@Directive({
  selector: '[appValidaDescricaoServico]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoServicoDirective, multi: true }]
})

export class ValidaDescricaoServicoDirective implements Validator {

  constructor(private procedimentoService: ProcedimentoService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    var listaProcedimento = this.procedimentoService.listaProcedimento;
    var procedimentoRegente = this.procedimentoService.procedimento;

    if (procedimentoRegente == null && listaProcedimento != null && listaProcedimento.length > 0 
      && listaProcedimento.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()) != null) {    
    return { 'validaDescricaoServico': { value: control.value } } ;        
    }
    return null;    
    
  }
}

