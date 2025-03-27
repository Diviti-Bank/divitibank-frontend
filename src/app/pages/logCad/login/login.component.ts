import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/logCad/login.service';
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
    this.service.getUsuario(this.cpf.nativeElement.value).subscribe(
      (res) => {
        this.usuario = res;
        if(this.senha.nativeElement.value == this.usuario.senha){
          this.service.setUsuario(this.usuario);
          this.navigatePrincipal();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  navigateCadastro(){
    this.router.navigate(['divitibank-logon']);
  }

  navigatePrincipal(){
    this.router.navigate(['divitibank-main']);
  }
}
