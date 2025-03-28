import { Component } from '@angular/core';
import { Card } from '../../Interfaces/Card';
import { LoginService } from '../../services/logCad/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-cartoes',
  standalone: false,
  templateUrl: './pag-cartoes.component.html',
  styleUrl: './pag-cartoes.component.css'
})
export class PagCartoesComponent {
  cardOne: boolean = true;
  cartoes!: Card[];

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(){
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cartoes = user.cartoes;
    })
  }

  navigatePrincipal(){
    this.router.navigate(['/divitibank-main']);
  }

  navigateCriarCartao() {
    this.router.navigate(['/divitibank-createCard']);
  }
}
