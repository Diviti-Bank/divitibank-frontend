import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(private router: Router) {}

  navigateLogin(){
    this.router.navigate(['divitibank-login']);
  }
}
