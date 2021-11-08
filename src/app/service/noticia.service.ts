import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";  
import { NoticiaViewModel } from "../models/NoticiaViewModel/NoticiaViewModel";

@Injectable({
    providedIn: "root",
  })


export class NoticiaService
{
    private readonly baseUrl = environment["endPoint"];

    constructor(private httpClient: HttpClient) {}


    ListarNoticias() {
        return this.httpClient.post<any>(
          `${this.baseUrl}/ListarNoticias/`,
          null
        );
      }

      ListarNoticiasCustomizada() {
        return this.httpClient.post<Array<NoticiaViewModel>>(
          `${this.baseUrl}/ListarNoticiasCustomizada/`,
          null
        );
      }

      AdicionaNoticia(noticia:NoticiaViewModel) {
        return this.httpClient.post<any>(
          `${this.baseUrl}/AdicionaNoticia/`,
          noticia
        );
      }


}