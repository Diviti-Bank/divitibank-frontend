import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Receipt } from '../../Interfaces/Receipt';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private cpfRemetente = new BehaviorSubject<any>(null);
  private cpfDestino = new BehaviorSubject<any>(null);
  private dinheiro = new BehaviorSubject<any>(null);
  private metodo_pagamento = new BehaviorSubject<any>(null);

  private destino = new BehaviorSubject<any>(null);

  private receipt = new BehaviorSubject<any>(null);

  private apiTransferUrl =
    'https://divitibank-backend.onrender.com/contas/transferir';

  private apiReceiptUrl =
    'https://divitibank-backend.onrender.com/contas/gerarComprovante';

  constructor(private http: HttpClient) {}

  fazerTransferencia(cpfRemetente: string, cpfDestino: string, dinheiro: number, metodo_pagamento: number): Observable<any> {
    return this.http.put<any>(
      `${this.apiTransferUrl}/${cpfRemetente}/${cpfDestino}/${dinheiro}/${metodo_pagamento}`, null
    );
  }

  getReceipt(cpfRemetente: string, cpfDestino: string, dinheiro: number): Observable<Receipt> {
    return this.http.get<Receipt>(`${this.apiReceiptUrl}/${cpfRemetente}/${cpfDestino}/${dinheiro}`);
  }

  setCpfRemetente(novoCpf: any) {
    this.cpfRemetente.next(novoCpf);
  }

  setCpfDestino(novoCpf: any) {
    this.cpfDestino.next(novoCpf);
  }

  setDinheiro(novoDinheiro: any) {
    this.dinheiro.next(novoDinheiro);
  }

  setMetodoPagamento(novoMetodo: any) {
    this.metodo_pagamento.next(novoMetodo);
  }

  setDestino(novoDestino: any){
    this.destino.next(novoDestino);
  }

  setReceipt(novoReceipt: any){
    this.receipt.next(novoReceipt);
  }

  getCpfRemetente() {
    return this.cpfRemetente.asObservable();
  }

  getCpfDestino() {
    return this.cpfDestino.asObservable();
  }

  getDinheiro() {
    return this.dinheiro.asObservable();
  }

  getMetodoPagamento() {
    return this.metodo_pagamento.asObservable();
  }

  getDestino(){
    return this.destino.asObservable();
  }

  getReceiptObservable() {
    return this.receipt.asObservable();
  }
}
