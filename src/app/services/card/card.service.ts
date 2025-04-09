import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Card } from '../../Interfaces/Card';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'https://divitibank-backend.onrender.com/contas';

  private cartao = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  cadastrarCartao(cpf: string, dados: Card): Observable<any> {
    return this.http.post<any>(
      this.apiUrl + '/criar/cartao' + `/${cpf}`,
      dados
    );
  }

  excluirCartao(cpf: string, color: string): Observable<any> {
    return this.http.delete<any>(
      this.apiUrl + '/excluircartao' + `/${cpf}/${color}`
    );
  }

  getExtratoCartao(cpf: string, color: string){
    return this.http.get<any>(this.apiUrl + '/mostrarextratocartao' + `/${cpf}/${color}`);
  }

  pagarFatura(cpf: string, color: string) {
    return this.http.put<any>(
      this.apiUrl + '/pagarfatura' + `/${cpf}/${color}`,
      null
    );
  }

  setCartao(novocartao: any){
    this.cartao.next(novocartao);
  }

  getCartao(){
    return this.cartao.asObservable();
  }
}
