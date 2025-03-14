import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/logCad/login/login.component';
import { CadastroComponent } from './pages/logCad/cadastro/cadastro.component';
import { PagInicialComponent } from './pages/pag-inicial/pag-inicial.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';

const routes: Routes = [
  {path: '', redirectTo: '/divitibank', pathMatch: 'full'},
  {path: 'divitibank', component: PagInicialComponent},
  {path: 'divitibank-login', component: LoginComponent},
  {path: 'divitibank-cadastro', component: CadastroComponent},
  {path: 'divitibank-principal', component: PrincipalComponent},
  {path: 'divitibank-userInfo', component: UserInfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
