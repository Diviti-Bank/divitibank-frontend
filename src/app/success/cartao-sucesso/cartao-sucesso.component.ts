import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-sucesso',
  standalone: false,
  templateUrl: './cartao-sucesso.component.html',
  styleUrl: './cartao-sucesso.component.css',
})
export class CartaoSucessoComponent {
  constructor(private router: Router) {}

  navigatePrincipal() {
    this.router.navigate(['/divitibank-main']);
  }
}
