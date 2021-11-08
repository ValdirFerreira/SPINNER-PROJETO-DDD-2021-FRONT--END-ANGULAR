import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { finalize, map } from "rxjs/operators";
import { AutenticaService } from '../service/Autentica.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private autenticaService: AutenticaService,
        private spinner: NgxSpinnerService) {

    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return next.handle(req);
        let headers;

        if (req.body instanceof FormData) {
            headers: new HttpHeaders(
                {
                    contentType: "false",
                    processData: "false",
                    Authorization: "Bearer " + this.autenticaService.ObterToken()
                }
            );

        }
        else {
            headers = new HttpHeaders()
                .append("accept", "application/json")
                .append("Content-Type", "application/json")
                .append("Authorization", "Bearer " + this.autenticaService.ObterToken());
        }


        let request = req.clone({ headers });

        this.spinner.show();

        return next.handle(request).pipe(
            map((event) => {
                return event;
            }),
            finalize(() => {
                this.spinner.hide();
            }
            )

        )

    }
}

