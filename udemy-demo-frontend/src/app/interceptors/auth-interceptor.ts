import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService){} 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if (token) {
        req = req.clone({
        headers: req.headers
            .set('Authorization', `Bearer ${token}`)
            .set('Content-Type', 'application/json')
        });
    }

    return next.handle(req);
  }
}