import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-error',
  standalone: false,
  templateUrl: './cadastro-error.component.html',
  styleUrl: './cadastro-error.component.css'
})
export class CadastroErrorComponent {
  constructor(private router: Router){}

  navigateCadastro(){
    this.router.navigate(['/divitibank-logon'])
  }
}
