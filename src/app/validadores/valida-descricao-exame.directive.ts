import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { ExameService } from "../services/exame.service";

@Directive({
  selector: '[appValidaDescricaoExame]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoExameDirective, multi: true }]
})

export class ValidaDescricaoExameDirective implements Validator {

  constructor(private exameService: ExameService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    var listaExame = this.exameService.listaExame;
    var exameRegente = this.exameService.exame;

    if (exameRegente == null && listaExame != null && listaExame.length > 0 && listaExame.find(c => c.descricao === control.value) != null) {    
    return { 'validaDescricaoExame': { value: control.value } } ;        
    }
    return null;    
    
  }
}

