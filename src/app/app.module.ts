import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Rutas
import { APPROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProdeComponent } from './components/prode/prode.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HeaderComponent } from './shared/header/header.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { AdminuserComponent } from './components/adminuser/adminuser.component';

//Servicios
import { ResultadosService } from './services/resultados.services';
import { UsuariosService } from './services/usuarios.services';
import { PartidosService } from './services/partidos.services';
import { AuthGuardService } from './services/auth-guard.services';
import { LoginService } from './services/login.services';
import {  GlobalService } from './services/global.services';
import { LoadingComponent } from './shared/loading/loading.component';
import { PosicionesComponent } from './components/tabla/posiciones/posiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdeComponent,
    TablaComponent,
    HeaderComponent,
    ResultadosComponent,
    AdminuserComponent,
    LoadingComponent,
    PosicionesComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ResultadosService,
    UsuariosService,PartidosService,AuthGuardService,LoginService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
