import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.services';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario.interface';

@Injectable()
export class LoginService {
  auxLogin = true;

  constructor(
    private _http: HttpClient,
    private _global: GlobalService,
    private _router: Router
  ) {}

  login(usuario: String, password: String) {
    const body = {
      nombre: usuario,
      password: password
    };

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

     return this._http
      .post(this._global.URL_SERVER + '/login', body, options);
      /*.subscribe((res:any) => {
        if (res.ok) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.usuario.role);
          localStorage.setItem('user_id', res.usuario._id );
          localStorage.setItem('user_name', res.usuario.nombre );
          localStorage.setItem('participo', res.usuario.participo);
          this._router.navigate(['resultados']);
        }
      });
      */
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('participo');

    this._router.navigate(['Login']);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token') == null) {
      return false;
    }
    return true;
  }

  isAdmin():boolean{
      if(localStorage.getItem('role') === 'ADMIN_ROLE'){
          return true;
      }
      return false;
  }
}
