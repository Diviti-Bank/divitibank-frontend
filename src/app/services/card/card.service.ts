import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Card } from '../../Interfaces/Card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl =
    'https://divitibank-backend.onrender.com/contas/criar/cartao';

  constructor(private http: HttpClient) {}

  cadastrarCartao(cpf: string, dados: Card): Observable<any> {
    return this.http.post<any>(this.apiUrl + `/${cpf}`, dados);
  }
}
