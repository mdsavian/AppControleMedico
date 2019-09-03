import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { ExameService } from "../services/exame.service";
import { Util } from "../uteis/Util";

@Directive({
  selector: '[appValidaDescricaoExame]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoExameDirective, multi: true }]
})

export class ValidaDescricaoExameDirective implements Validator {

  constructor(private exameService: ExameService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    if (control.value == '' || control.value == null)
      return null;

    var listaExame = this.exameService.listaExame;
    var exame = this.exameService.exame;

    if (new Util().hasItems(listaExame) 
      && listaExame.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()
      && (exame == null || exame.id != c.id)) != null) {
      return { 'validaDescricaoExame': { value: control.value } };
    }
    return null;

  }
}

