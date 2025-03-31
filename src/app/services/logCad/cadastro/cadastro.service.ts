import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'https://divitibank-backend.onrender.com/contas/criar';

  constructor(private http: HttpClient) {}

  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}
