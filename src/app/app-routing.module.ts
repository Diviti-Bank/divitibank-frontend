import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/logCad/login/login.component';
import { CadastroComponent } from './pages/logCad/cadastro/cadastro.component';
import { PagInicialComponent } from './pages/pag-inicial/pag-inicial.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';
import { ExtractComponent } from './pages/extract/extract.component';
import { PagCartoesComponent } from './pages/pag-cartoes/pag-cartoes.component';
import { KeyPageComponent } from './pages/pags-transferencia/key-page/key-page.component';
import { InsertAmountComponent } from './pages/pags-transferencia/insert-amount/insert-amount.component';
import { PaymentMethodComponent } from './pages/pags-transferencia/payment-method/payment-method.component';
import { RelatoryComponent } from './pages/pags-transferencia/relatory/relatory.component';
import { ReceiptComponent } from './pages/pags-transferencia/receipt/receipt.component';
import { CriarCartaoComponent } from './pages/criar-cartao/criar-cartao.component';
import { CadastroSucessoComponent } from './success/cadastro-sucesso/cadastro-sucesso.component';
import { CartaoSucessoComponent } from './success/cartao-sucesso/cartao-sucesso.component';
import { GeneralErrorComponent } from './error/general-error/general-error.component';

const routes: Routes = [
  {path: '', redirectTo: '/divitibank', pathMatch: 'full'},
  {path: 'divitibank', component: PagInicialComponent},
  {path: 'divitibank-login', component: LoginComponent},
  {path: 'divitibank-logon', component: CadastroComponent},
  {path: 'divitibank-main', component: PrincipalComponent},
  {path: 'divitibank-userInfo', component: UserInfosComponent},
  {path: 'divitibank-extract', component: ExtractComponent},
  {path: 'divitibank-createCard', component: CriarCartaoComponent},
  {path: 'divitibank-cards', component: PagCartoesComponent},
  {path: 'divitibank-transfer-keyPage', component: KeyPageComponent},
  {path: 'divitibank-transfer-insertAmount', component: InsertAmountComponent},
  {path: 'divitibank-transfer-paymentMethod', component: PaymentMethodComponent},
  {path: 'divitibank-transfer-relatory', component: RelatoryComponent},
  {path: 'divitibank-transfer-receipt', component: ReceiptComponent},
  {path: 'divitibank-logonSuccess', component: CadastroSucessoComponent},
  {path: 'divitibank-cardSuccess', component: CartaoSucessoComponent},
  {path: 'divitibank-error/:message/:start', component: GeneralErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
