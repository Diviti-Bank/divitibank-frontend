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
import { ReceiptComponent } from './pages/receipt/receipt.component';

const routes: Routes = [
  {path: '', redirectTo: '/divitibank', pathMatch: 'full'},
  {path: 'divitibank', component: PagInicialComponent},
  {path: 'divitibank-login', component: LoginComponent},
  {path: 'divitibank-logon', component: CadastroComponent},
  {path: 'divitibank-main', component: PrincipalComponent},
  {path: 'divitibank-userInfo', component: UserInfosComponent},
  {path: 'divitibank-extract', component: ExtractComponent},
  {path: 'divitibank-cards', component: PagCartoesComponent},
  {path: 'divitibank-transfer-keyPage', component: KeyPageComponent},
  {path: 'divitibank-transfer-insertAmount', component: InsertAmountComponent},
  {path: 'divitibank-transfer-paymentMethod/:amount', component: PaymentMethodComponent},
  {path: 'divitibank-transfer-relatory/:amount/:paymentColor', component: RelatoryComponent},
  {path: 'divitibank-transfer-recepit/:amount/:paymentColor', component: ReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
