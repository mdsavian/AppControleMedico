import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { EspecialidadeService } from "../services/especialidade.service";
import { Util } from "../uteis/Util";

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
    var especialidade = this.especialidadeService.especialidade;

    if (new Util().hasItems(listaEspecialidade) 
      && listaEspecialidade.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()
      && (especialidade == null || especialidade.id != c.id)) != null) {
      return { 'validaDescricaoEspecialidade': { value: control.value } };
    }
    return null;

  }
}

