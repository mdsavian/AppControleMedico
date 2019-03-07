import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Paciente} from '../modelos/paciente'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Endereco } from '../modelos/endereco';
@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl + 'endereco/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public buscarEndereco(cep:string){
    return this.http.get<Endereco>(this.accessPointUrl + "buscaCep/" + cep);
   }

}
