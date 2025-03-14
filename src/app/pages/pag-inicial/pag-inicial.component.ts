import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pag-inicial',
  standalone: false,
  templateUrl: './pag-inicial.component.html',
  styleUrl: './pag-inicial.component.css'
})
export class PagInicialComponent {
  constructor(private router: Router) {}

  navigateLogin() {
    this.router.navigate(['divitibank-login'])
  }
}
