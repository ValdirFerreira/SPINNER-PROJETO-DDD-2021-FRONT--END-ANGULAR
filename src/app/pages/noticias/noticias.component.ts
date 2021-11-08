import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaViewModel } from 'src/app/models/NoticiaViewModel/NoticiaViewModel';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  noticias!: Array<NoticiaViewModel>;

  ngOnInit(): void {
    this.ListarNoticiasCustomizada();
  }


  ListarNoticiasCustomizada() {
    this.noticiaService.ListarNoticiasCustomizada()
      .subscribe(noticias => {
        this.noticias = noticias;
      },
        error => {
          this.router.navigate(["/login"]);
        })
  }


  // ListarNoticias() {
  //   this.noticiaService.ListarNoticias()
  //     .subscribe(noticias => {
  //       this.noticias = noticias;
  //     },
  //       error => {
  //         this.router.navigate(["/login"]);
  //       } )
  // }

}
