import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private usuario = new BehaviorSubject<any>(null);

  private apiUrl = 'https://divitibank-backend.onrender.com/contas/buscar';

  constructor(private http: HttpClient) {}

  getUsuario(cpf: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${cpf}`);
  }

  setUsuario(novoUsuario: any){
    this.usuario.next(novoUsuario);
  }

  getUsuarioObservable(){
    return this.usuario.asObservable();
  }
}
