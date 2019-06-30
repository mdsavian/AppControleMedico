import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { ConvenioService } from "../services/convenio.service";

@Directive({
  selector: '[appValidaNomeConvenio]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaNomeConvenioDirective, multi: true }]
})

export class ValidaNomeConvenioDirective implements Validator {

  constructor(private convenioService: ConvenioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    var listaConvenio = this.convenioService.listaConvenio;
    var convenioRegente = this.convenioService.convenio;

    if (convenioRegente == null && listaConvenio != null && listaConvenio.length > 0
       && listaConvenio.find(c => c.nomeConvenio.toUpperCase() === control.value.toUpperCase()) != null) {    
    return { 'validaNomeConvenio': { value: control.value } } ;        
    }
    return null;    
    
  }
}

