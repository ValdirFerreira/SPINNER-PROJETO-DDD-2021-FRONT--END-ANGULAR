import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticaService } from 'src/app/service/Autentica.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private autenticaService: AutenticaService) { }

  ngOnInit(): void {
  }

  sair() {
    this.autenticaService.LimparToken();
    this.router.navigate(["/login"]);
  }

  novaNoticia()
  {
    this.router.navigate(["/addnoticia"]);
  }


}
