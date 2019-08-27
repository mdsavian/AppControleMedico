import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { FormaDePagamentoService } from "../services/forma-de-pagamento.service";

@Directive({
  selector: '[appValidaDescricaoFormaDePagamento]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaDescricaoFormaDePagamentoDirective, multi: true }]
})

export class ValidaDescricaoFormaDePagamentoDirective implements Validator {

  constructor(private formaDePagamentoService: FormaDePagamentoService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    if (control.value == '' || control.value == null)
      return null;

    var listaFormaDePagamento = this.formaDePagamentoService.listaFormaDePagamento;
    var formaDePagamentoRegente = this.formaDePagamentoService.formaDePagamento;

    if (formaDePagamentoRegente == null && listaFormaDePagamento != null && listaFormaDePagamento.length > 0
      && listaFormaDePagamento.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()) != null) {
      return { 'validaDescricaoFormaDePagamento': { value: control.value } };
    }
    return null;

  }
}
