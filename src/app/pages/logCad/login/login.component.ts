import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  navigateCadastro(){
    this.router.navigate(['divitibank-logon']);
  }

  navigatePrincipal(){
    this.router.navigate(['divitibank-main']);
  }
}
