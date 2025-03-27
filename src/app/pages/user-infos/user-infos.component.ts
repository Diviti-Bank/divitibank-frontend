import { Component, OnInit } from '@angular/core';
import { User } from '../../Interfaces/User';
import { LoginService } from '../../services/logCad/login.service';

@Component({
  selector: 'user-infos',
  standalone: false,
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.css'
})
export class UserInfosComponent implements OnInit{
  usuario!: User;

  constructor(private loginService: LoginService){}

  ngOnInit(){
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.usuario = user;
      console.log(this.usuario);
    })
  }
}
