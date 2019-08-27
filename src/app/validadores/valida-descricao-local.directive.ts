import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { LocalService } from "../services/local.service";

@Directive({
  selector: '[appValidaDescricaoLocal]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoLocalDirective, multi: true }]
})

export class ValidaDescricaoLocalDirective implements Validator {

  constructor(private localService: LocalService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    if (control.value == '' || control.value == null)
      return null;

    var listaLocal = this.localService.listaLocal;
    var localRegente = this.localService.local;

    if (localRegente == null && listaLocal != null && listaLocal.length > 0
      && listaLocal.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()) != null) {
      return { 'validaDescricaoLocal': { value: control.value } };
    }
    return null;

  }
}

