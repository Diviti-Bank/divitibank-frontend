import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagInicialComponent } from './pages/pag-inicial/pag-inicial.component';
import { LoginComponent } from './pages/logCad/login/login.component';
import { CadastroComponent } from './pages/logCad/cadastro/cadastro.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ExtractComponent } from './pages/extract/extract.component';
import { PagCartoesComponent } from './pages/pag-cartoes/pag-cartoes.component';
import { KeyPageComponent } from './pages/pags-transferencia/key-page/key-page.component';
import { InsertAmountComponent } from './pages/pags-transferencia/insert-amount/insert-amount.component';
import { PaymentMethodComponent } from './pages/pags-transferencia/payment-method/payment-method.component';
import { RelatoryComponent } from './pages/pags-transferencia/relatory/relatory.component';
import { ConfirmTransferComponent } from './components/confirm-transfer/confirm-transfer.component';
import { ReceiptComponent } from './pages/pags-transferencia/receipt/receipt.component';
import { CriarCartaoComponent } from './pages/criar-cartao/criar-cartao.component';
import { CadastroSucessoComponent } from './success/cadastro-sucesso/cadastro-sucesso.component';
import { CartaoSucessoComponent } from './success/cartao-sucesso/cartao-sucesso.component';
import { GeneralErrorComponent } from './error/general-error/general-error.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfosComponent,
    NavbarComponent,
    PagInicialComponent,
    LoginComponent,
    CadastroComponent,
    PrincipalComponent,
    ExtractComponent,
    PagCartoesComponent,
    KeyPageComponent,
    InsertAmountComponent,
    PaymentMethodComponent,
    RelatoryComponent,
    ConfirmTransferComponent,
    ReceiptComponent,
    CriarCartaoComponent,
    CadastroSucessoComponent,
    CartaoSucessoComponent,
    GeneralErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
