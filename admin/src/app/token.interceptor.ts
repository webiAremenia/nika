import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {DataService} from './data.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private data: DataService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.data.getToken()) {
            const clone = request.clone({
                setHeaders: {token: this.data.getToken()}
            });
            return next.handle(clone);
        }

        return next.handle(request);
    }
}
