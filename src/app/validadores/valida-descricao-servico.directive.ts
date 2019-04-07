import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { OficioService } from "../services/oficio.service";

@Directive({
  selector: '[appValidaDescricaoServico]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoServicoDirective, multi: true }]
})

export class ValidaDescricaoServicoDirective implements Validator {

  constructor(private oficioService: OficioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    var listaOficio = this.oficioService.listaOficio;
    var oficioRegente = this.oficioService.oficio;

    if (oficioRegente == null && listaOficio != null && listaOficio.length > 0 && listaOficio.find(c => c.descricao === control.value) != null) {    
    return { 'validaDescricaoServico': { value: control.value } } ;        
    }
    return null;    
    
  }
}

