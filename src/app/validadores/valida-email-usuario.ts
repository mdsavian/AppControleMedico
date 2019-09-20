import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"
import { UsuarioService } from "../services/usuario.service";
import { Util } from "../uteis/Util";
@Directive({
  selector: '[appValidaEmailUsuario]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidaEmailUsuarioDirective, multi: true }]
})

export class ValidaEmailUsuarioDirective implements Validator {
  constructor(private usuarioService: UsuarioService) { };
  validate(control: AbstractControl): { [key: string]: any } | null {
    
    if (control.value == '' || control.value == null)
      return null;
      
    this.usuarioService.todos().subscribe(c =>
      this.usuarioService.listaUsuario = c);

    var listaUsuario = this.usuarioService.listaUsuario;
    var usuario = this.usuarioService.usuarioParaValidacao;

    if (new Util().hasItems(listaUsuario) &&
      listaUsuario.find(c => c.login.toUpperCase() === control.value.toUpperCase()
      && (usuario == null || usuario.id != c.id)) != null) {

      return { 'validaEmailUsuario': { value: control.value } };
    }
    return null;
  }
}

