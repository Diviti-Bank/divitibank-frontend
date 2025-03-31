import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../Interfaces/Transfer';
import { Card } from '../../Interfaces/Card';
import { Router } from '@angular/router';
import { LoginService } from '../../services/logCad/login/login.service';

@Component({
  selector: 'principal',
  standalone: false,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent implements OnInit {
  cpf!: string;
  verSaldo: boolean = false;
  saldo!: number;
  extrato!: Transfer[];
  cartoes!: Card[];

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cpf = user. cpf
      this.saldo = user.saldo;
      this.extrato = user.extrato;
      this.cartoes = user.cartoes;

      this.loginService.getUsuario(this.cpf).subscribe(
        (res) => {
          const usuario = res;
  
          this.loginService.setUsuario(usuario);

          this.loginService.getUsuarioObservable().subscribe((user) => {
            this.saldo = user.saldo;
            this.extrato = user.extrato;
            this.cartoes = user.cartoes;
          });
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  navigateExtract() {
    this.router.navigate(['divitibank-extract']);
  }

  navigateCartoes() {
    this.router.navigate(['divitibank-cards']);
  }

  navigateCriarCartao() {
    this.router.navigate(['/divitibank-createCard']);
  }

  navigateTransferencia() {
    this.router.navigate(['divitibank-transfer-keyPage']);
  }
}
