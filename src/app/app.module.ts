import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    PagCartoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
