import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private toastrService: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
      }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if(error.status == 401) {
          this.toastrService.error('Email e/ou Senha Incorretos', 'Falha na operação');
        } else {
          this.toastrService.error('Erro desconhecido', 'Falha na operação');
        }
        return throwError(error);
      })
    )
  }
}
