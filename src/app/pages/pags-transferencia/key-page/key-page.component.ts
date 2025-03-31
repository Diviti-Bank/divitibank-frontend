import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../../services/transfer/transfer.service';
import { LoginService } from '../../../services/logCad/login/login.service';
import { User } from '../../../Interfaces/User';

@Component({
  selector: 'app-key-page',
  standalone: false,
  templateUrl: './key-page.component.html',
  styleUrl: './key-page.component.css',
})
export class KeyPageComponent {
  cpfRemetente!: string;
  destinatario!: User;
  @ViewChild('cpfDestino') cpfDestino!: ElementRef;

  constructor(
    private router: Router,
    private service: TransferService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cpfRemetente = user.cpf;
    });
  }

  cpfOnzeDigitos(): boolean {
    return /^\d{11}$/.test(this.cpfDestino.nativeElement.value);
  }

  navigatePrincipal() {
    this.router.navigate(['divitibank-main']);
  }

  navigateInsertAmount() {
    if (this.cpfDestino.nativeElement.value != '') {
      if (this.cpfOnzeDigitos()) {
        this.loginService
          .getUsuario(this.cpfDestino.nativeElement.value)
          .subscribe((user) => {
            this.destinatario = user;

            if (this.destinatario) {
              if (this.destinatario.cpf != this.cpfRemetente) {
                this.service.setCpfRemetente(this.cpfRemetente);
                this.service.setCpfDestino(this.cpfDestino.nativeElement.value);
                this.service.setDestino(this.destinatario);
                this.router.navigate(['divitibank-transfer-insertAmount']);
              } else {
                this.router.navigate([
                  '/divitibank-error',
                  'Você não pode transferir dinheiro para si mesmo.',
                  false,
                ]);
              }
            } else {
              this.router.navigate([
                '/divitibank-error',
                'Nenhum usuário com esse CPF foi encontrado.',
                false,
              ]);
            }
          });
      } else {
        this.router.navigate([
          '/divitibank-error',
          'O CPF deve ter 11 dígitos.',
          false,
        ]);
      }
    } else {
      this.router.navigate([
        '/divitibank-error',
        'O campo de CPF deve ser preenchido.',
        false,
      ]);
    }
  }
}
