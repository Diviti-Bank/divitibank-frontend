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
import { GeneralErrorComponent } from './error/general-error/general-error.component';
import { PagFaturaComponent } from './pages/pag-fatura/pag-fatura.component';
import { GeneralSuccessComponent } from './success/general-success/general-success.component';
import { ConfirmCardExclusionComponent } from './pages/confirm-card-exclusion/confirm-card-exclusion.component';

const routes: Routes = [
  {path: '', redirectTo: '/divitibank', pathMatch: 'full'},
  {path: 'divitibank', component: PagInicialComponent},
  {path: 'divitibank-login', component: LoginComponent},
  {path: 'divitibank-logon', component: CadastroComponent},
  {path: 'divitibank-main', component: PrincipalComponent},
  {path: 'divitibank-userInfo', component: UserInfosComponent},
  {path: 'divitibank-extract', component: ExtractComponent},
  {path: 'divitibank-createCard', component: CriarCartaoComponent},
  {path: 'divitibank-confirmCardExclusion', component: ConfirmCardExclusionComponent},
  {path: 'divitibank-cards', component: PagCartoesComponent},
  {path: 'divitibank-invoicePayment', component: PagFaturaComponent},
  {path: 'divitibank-transfer-keyPage', component: KeyPageComponent},
  {path: 'divitibank-transfer-insertAmount', component: InsertAmountComponent},
  {path: 'divitibank-transfer-paymentMethod', component: PaymentMethodComponent},
  {path: 'divitibank-transfer-relatory', component: RelatoryComponent},
  {path: 'divitibank-transfer-receipt', component: ReceiptComponent},
  {path: 'divitibank-success/:message/:start/:buttonMessage/:endpoint', component: GeneralSuccessComponent},
  {path: 'divitibank-error/:message/:start', component: GeneralErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
