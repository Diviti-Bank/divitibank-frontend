import { Component, OnInit } from '@angular/core';
import { User } from '../../Interfaces/User';
import { LoginService } from '../../services/logCad/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-infos',
  standalone: false,
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.css'
})
export class UserInfosComponent implements OnInit{
  usuario!: User;

  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(){
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.usuario = user;
      console.log(this.usuario);
    })
  }

  navigatePrincipal(){
    this.router.navigate(['/divitibank-main']);
  }
}
