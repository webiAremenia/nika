import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {DataService} from './data.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private data: DataService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.data.getToken()) {
            const clone = request.clone({
                setHeaders: {token: this.data.getToken()}
            });
            return next.handle(clone)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        const errorMessage = '';
                        if (error.status === 401) {
                            localStorage.clear();
                            window.location.href = '/admin-panel/login';
                        }
                        return throwError(errorMessage);
                    })
                );
        }
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = '';
                    if (error.status === 401) {
                        localStorage.clear();
                        window.location.href = '/login';
                    }
                    return throwError(errorMessage);
                })
            );
    }
}
