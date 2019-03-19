import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from "@angular/forms"
import { ConvenioService } from "../services/convenio.service";
import { Convenio } from "../modelos/convenio";

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})

export class ForbiddenValidatorDirective implements Validator {

  constructor(private convenioService: ConvenioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    var listaConvenio = this.convenioService.listaConvenio;
    var convenioRegente = this.convenioService.convenio;

    if (convenioRegente == null && listaConvenio != null && listaConvenio.length > 0 && listaConvenio.find(c => c.nomeConvenio === control.value) != null) {    
      console.log(true);
    return { 'forbiddenName': { value: control.value } } ;        
    }
    return null;    
    
  }
}

