import { RouterModule, Routes } from '@angular/router';
import { ProdeComponent } from './components/prode/prode.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { LoginComponent } from './components/login/login.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { AdminuserComponent } from './components/adminuser/adminuser.component';

import { AuthGuardService } from './services/auth-guard.services';



const ROUTES: Routes = [
    { path: 'prode', component: ProdeComponent, canActivate: [AuthGuardService] },
    { path: 'tabla', component: TablaComponent, canActivate: [AuthGuardService] },
    { path: 'Login', component: LoginComponent },
    { path: 'resultados', component: ResultadosComponent, canActivate: [AuthGuardService] },
    { path: 'adminuser', component: AdminuserComponent, canActivate: [AuthGuardService] },
    { path: '**', pathMatch: 'full', redirectTo: 'Login' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
