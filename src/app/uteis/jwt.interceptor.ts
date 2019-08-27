import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private appService: AppService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let usuarioCorrente = this.appService.retornarUsuarioCorrente();
        if (usuarioCorrente && usuarioCorrente.ultimoLogin != '') {
            request = request.clone({
                 
                setHeaders: {
                    Authorization: `Bearer ${usuarioCorrente.ultimoLogin}`
                }
            });
        }

        return next.handle(request);
    }
}