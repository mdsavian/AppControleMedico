import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { CirurgiaService } from "../services/cirurgia.service";
import { Util } from "../uteis/Util";

@Directive({
  selector: '[appValidaDescricaoCirurgia]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoCirurgiaDirective, multi: true }]
})

export class ValidaDescricaoCirurgiaDirective implements Validator {

  constructor(private cirurgiaService: CirurgiaService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    if (control.value == '' || control.value == null)
      return null;


    this.cirurgiaService.Todos().subscribe(c =>
      this.cirurgiaService.listaCirurgia = c);
    var listaCirurgia = this.cirurgiaService.listaCirurgia;

    if (new Util().hasItems(listaCirurgia) &&
      listaCirurgia.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()) != null) {

      return { 'validaDescricaoCirurgia': { value: control.value } };
    }
    return null;

  }
}

