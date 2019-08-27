import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { UsuarioService } from "../services/usuario.service";
import{Util} from "../uteis/Util";
@Directive({
  selector: '[appValidaEmailUsuario]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaEmailUsuarioDirective, multi: true }]
})

export class ValidaEmailUsuarioDirective implements Validator {
  constructor(private usuarioService: UsuarioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {
    var util = new Util();   

    if (control.value == '' || control.value == null)
      return null; 
    this.usuarioService.todos().subscribe(usuarios=> {    
      console.log(usuarios,!util.isNullOrWhitespace(control.value), usuarios.find(c=> c.login.toUpperCase() == control.value.toUpperCase())!= null);
      if (util.hasItems(usuarios) && !util.isNullOrWhitespace(control.value) && usuarios.find(c=> c.login.toUpperCase() == control.value.toUpperCase()) != null)
      {
        console.log("entrei");
        return { 'validaEmailUsuario': { value: control.value } } ;        
      }
    });
    return null;    
  }
}

