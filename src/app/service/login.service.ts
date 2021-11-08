import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";



@Injectable(
    {
        providedIn: "root"
    }
)

export class LoginService {

    private readonly baseURL = environment["endPoint"];
    
    constructor(private httpClient: HttpClient) {
    }
 

    LoginUsuario(objeto: any) {
        return this.httpClient.post<any>
            (`${this.baseURL}/CriarTokenIdentity/`, objeto);
    }

}