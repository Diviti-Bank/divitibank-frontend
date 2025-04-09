import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { CadastroService } from '../../../services/logCad/cadastro/cadastro.service';
import { User } from '../../../Interfaces/User';

@Component({
  selector: 'cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  showButton: boolean = true;

  @ViewChild('nome') nome!: ElementRef;
  @ViewChild('sobrenome') sobrenome!: ElementRef;
  @ViewChild('cpf') cpf!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('senha') senha!: ElementRef;

  constructor(private router: Router, private service: CadastroService) {}

  cadastrar() {
    this.showButton = !this.showButton
    if (
      this.nome.nativeElement.value != '' &&
      this.sobrenome.nativeElement.value != '' &&
      this.cpf.nativeElement.value != '' &&
      this.email.nativeElement.value != '' &&
      this.senha.nativeElement.value != ''
    ) {
      if (this.cpfOnzeDigitos()) {
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
            this.router.navigate(['/divitibank-success', 'Cadastro realizado com sucesso!', true, 'Avançar pro login', 'divitibank-login']);
          },
          (erro) => {
            console.error('Erro no cadastro:', erro);
          }
        );
      } else{
        this.router.navigate([
          '/divitibank-error',
          'O CPF deve ter 11 dígitos.',
          true
        ]);
      }
    } else {
      this.router.navigate([
        '/divitibank-error',
        'Algum dado essencial ficou vazio.',
        true
      ]);
    }
  }

  cpfOnzeDigitos(): boolean {
    return /^\d{11}$/.test(this.cpf.nativeElement.value);
  }

  navigateLogin() {
    this.router.navigate(['divitibank-login']);
  }
}
