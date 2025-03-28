import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/logCad/login/login.service';
import { User } from '../../../Interfaces/User';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('cpf') cpf!: ElementRef;
  @ViewChild('senha') senha!: ElementRef;

  usuario!: User;

  constructor(private router: Router, private service: LoginService) {}

  login(){

    if(this.cpf.nativeElement.value != '' && this.senha.nativeElement.value != ''){
      this.service.getUsuario(this.cpf.nativeElement.value).subscribe(
        (res) => {
          this.usuario = res;
          if(this.usuario){
            if(this.senha.nativeElement.value == this.usuario.senha){
              this.service.setUsuario(this.usuario);
              this.navigatePrincipal();
            }
            else{
              this.router.navigate(['/divitibank-error', 'As credenciais inseridas estão incorretas.', true]);
            }
          } else {
            this.router.navigate(['/divitibank-error', 'As credenciais inseridas estão incorretas.', true]);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
    else{
      this.router.navigate(['/divitibank-error', 'As credenciais inseridas estão incorretas.', true]);
    }
  }

  navigateCadastro(){
    this.router.navigate(['/divitibank-logon']);
  }

  navigatePrincipal(){
    this.router.navigate(['/divitibank-main']);
  }
}
