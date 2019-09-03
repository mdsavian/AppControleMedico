import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { OficioService } from "../services/oficio.service";
import { Util } from "../uteis/Util";

@Directive({
  selector: '[appValidaNomeOficio]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaNomeOficioDirective, multi: true }]
})

export class ValidaNomeOficioDirective implements Validator {

  constructor(private oficioService: OficioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {

    
    if (control.value == '' || control.value == null)
      return null;
      
    var listaOficio = this.oficioService.listaOficio;
    var oficio = this.oficioService.oficio;

    if (new Util().hasItems(listaOficio)
      && listaOficio.find(c => c.descricao.toUpperCase() === control.value.toUpperCase()
      && (oficio == null || oficio.id != c.id)) != null) {
      return { 'validaNomeOficio': { value: control.value } };
    }
    return null;

  }
}

