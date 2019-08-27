import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { EspecialidadeService } from "../services/especialidade.service";

@Directive({
  selector: '[appValidaDescricaoEspecialidade]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoEspecialidadeDirective, multi: true }]
})

export class ValidaDescricaoEspecialidadeDirective implements Validator {

  constructor(private especialidadeService: EspecialidadeService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    if (control.value == '' || control.value == null)
      return null;

    var listaEspecialidade = this.especialidadeService.listaEspecialidade;
    var especialidadeRegente = this.especialidadeService.especialidade;

    if (especialidadeRegente == null && listaEspecialidade != null && listaEspecialidade.length > 0
      && listaEspecialidade.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()) != null) {
      return { 'validaDescricaoEspecialidade': { value: control.value } };
    }
    return null;

  }
}

