import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authService = this.injector.get(AuthService);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${authService.getToken()}`)
        });

        return next.handle(authRequest);
   }
}
