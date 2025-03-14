import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/logCad/login/login.component';
import { CadastroComponent } from './pages/logCad/cadastro/cadastro.component';
import { PagInicialComponent } from './pages/pag-inicial/pag-inicial.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';
import { ExtractComponent } from './pages/extract/extract.component';

const routes: Routes = [
  {path: '', redirectTo: '/divitibank', pathMatch: 'full'},
  {path: 'divitibank', component: PagInicialComponent},
  {path: 'divitibank-login', component: LoginComponent},
  {path: 'divitibank-logon', component: CadastroComponent},
  {path: 'divitibank-main', component: PrincipalComponent},
  {path: 'divitibank-userInfo', component: UserInfosComponent},
  {path: 'divitibank-extract', component: ExtractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
