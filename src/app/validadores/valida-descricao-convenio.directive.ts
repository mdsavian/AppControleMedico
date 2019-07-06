import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { ConvenioService } from "../services/convenio.service";


@Directive({
  selector: '[appValidaDescricaoConvenio]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoConvenioDirective, multi: true }]
})

export class ValidaDescricaoConvenioDirective implements Validator {

  constructor(private convenioService: ConvenioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    if (control.value == '')
      return null;

    var listaConvenio = this.convenioService.listaConvenio;
    var convenioRegente = this.convenioService.convenio;

    if (convenioRegente == null && listaConvenio != null && listaConvenio.length > 0
      && listaConvenio.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()) != null) {
      return { 'validaDescricaoConvenio': { value: control.value } };
    }
    return null;

  }
}
