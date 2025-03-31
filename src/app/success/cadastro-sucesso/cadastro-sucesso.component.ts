import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-sucesso',
  standalone: false,
  templateUrl: './cadastro-sucesso.component.html',
  styleUrl: './cadastro-sucesso.component.css'
})
export class CadastroSucessoComponent {
    constructor(private router: Router) {}
  
    navigateLogin(){
      this.router.navigate(['/divitibank-login']);
    }
}
