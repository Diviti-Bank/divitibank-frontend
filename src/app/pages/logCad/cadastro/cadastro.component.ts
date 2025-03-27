import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { CadastroService } from '../../../services/logCad/cadastro.service';
import { User } from '../../../Interfaces/User';

@Component({
  selector: 'cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  @ViewChild('nome') nome!: ElementRef;
  @ViewChild('sobrenome') sobrenome!: ElementRef;
  @ViewChild('cpf') cpf!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('senha') senha!: ElementRef;

  constructor(private router: Router, private service: CadastroService) {}

  cadastrar() {
    console.log(this.nome.nativeElement.value)
    if (
      this.nome.nativeElement.value != '' &&
      this.sobrenome.nativeElement.value != '' &&
      this.cpf.nativeElement.value != '' &&
      this.email.nativeElement.value != '' &&
      this.senha.nativeElement.value != ''
    ) {
      const user: User = {
        nome: this.nome.nativeElement.value,
        sobrenome: this.sobrenome.nativeElement.value,
        cpf: this.cpf.nativeElement.value,
        email: this.email.nativeElement.value,
        senha: this.senha.nativeElement.value,
        saldo: 10,
        cartoes: [],
        extrato: [],
      };
      this.service.cadastrarUsuario(user).subscribe(
        (res) => {
          console.log('Cadastro realizado com sucesso:', res);
        },
        (erro) => {
          console.error('Erro no cadastro:', erro);
        }
      );
      this.navigateLogin()
    } else{
      this.router.navigate(['/divitibank-logonError'])
    }
  }

  navigateLogin() {
    this.router.navigate(['divitibank-login']);
  }
}
