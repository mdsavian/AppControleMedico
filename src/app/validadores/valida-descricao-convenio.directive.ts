import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { ConvenioService } from "../services/convenio.service";
import { Util } from "../uteis/Util";

@Directive({
  selector: '[appValidaDescricaoConvenio]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoConvenioDirective, multi: true }]
})

export class ValidaDescricaoConvenioDirective implements Validator {

  constructor(private convenioService: ConvenioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {


    if (control.value == '' || control.value == null)
      return null;

    this.convenioService.Todos().subscribe(c =>
      this.convenioService.listaConvenio = c);

    var listaConvenio = this.convenioService.listaConvenio;
    var convenioRegente = this.convenioService.convenio;

    if (new Util().hasItems(listaConvenio) &&
      listaConvenio.find(c => c.descricao.toUpperCase() === control.value.toUpperCase() &&
       (convenioRegente == null || convenioRegente.id != c.id) ) != null) {

      return { 'validaDescricaoConvenio': { value: control.value } };
    }
    return null;

  }
}