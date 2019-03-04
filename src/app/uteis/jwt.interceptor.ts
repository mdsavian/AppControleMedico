import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let usuarioCorrente = this.loginService.usuarioCorrenteValor;
        if (usuarioCorrente && usuarioCorrente.token) {
            request = request.clone({
                 
                setHeaders: {
                    Authorization: `Bearer ${usuarioCorrente.token}`
                }
            });
        }

        return next.handle(request);
    }
}