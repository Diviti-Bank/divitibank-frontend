import { Component, importProvidersFrom } from '@angular/core';
import { Transfer } from '../../Interfaces/Transfer';
import { LoginService } from '../../services/logCad/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extract',
  standalone: false,
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.css',
})
export class ExtractComponent {
  verSaldo: boolean = false;
  saldo!: number;
  extrato!: Transfer[];

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.saldo = user.saldo;
      this.extrato = user.extrato;
    });
  }

  navigatePrincipal(){
    this.router.navigate(['/divitibank-main']);
  }
}
