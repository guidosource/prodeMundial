import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val = true;

  constructor(private _login:LoginService, private _router:Router) { }



  signin(formulario:any){

    this._login.login(formulario.value.nombre,formulario.value.password)
    .subscribe((res:any) => {
      if (res.ok) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.usuario.role);
        localStorage.setItem('user_id', res.usuario._id );
        localStorage.setItem('user_name', res.usuario.nombre );
        localStorage.setItem('participo', res.usuario.participo);
        this._router.navigate(['resultados']);
      }
      
    },err=>{
      this.val = this._login.isAuthenticated();
    });
  }
  ngOnInit() {
    if(this._login.isAuthenticated()){
      this._router.navigate(['resultados']);
    }
  }

}
