import { Component } from '@angular/core';
import { LoginService } from '../../services/login.services';
import { UsuariosService } from '../../services/usuarios.services';

import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  userName = localStorage.getItem('user_name').toUpperCase();

  form:FormGroup;
  
  invalidPass:Boolean = false;
  isOk = false;

  constructor(private _usuariosServices:UsuariosService, private _login:LoginService) {

      this.form = new FormGroup({
        'oldpass' : new FormControl('',[Validators.required]),
        'newpass' : new FormControl('', [Validators.required]),
        'renewpass' : new FormControl('', [Validators.required,this.differentPass])
      });


   }

  saveChanges(){
    
    this._login.login(localStorage.getItem('user_name'), this.form.controls['oldpass'].value)
    .subscribe((res:any)=>{
        if(res.ok){
            this._usuariosServices.actualizarPassword(this.form.controls['newpass'].value)
            .subscribe((resp:any)=>{
                if(resp.ok){
                  this.isOk = true;
                }
            });
        }
    },err=>{
        this.invalidPass = true;
    });

  }

  resetForm(){
    this.invalidPass = false;

    this.form.reset();

    if(this.isOk){
      this.logout();
    }

  }


  differentPass = ( control:FormControl ) => {
    if(this.form != null){
      
        if( control.value !== this.form.controls['newpass'].value){
          return {
            differentPass : true
          };
        }
        return null;
    }    
  }
  
  logout(){
    this._login.logout();
  }
  
  isAdmin(){
    return this._login.isAdmin();
  }

  isLogin(){
    return this._login.isAuthenticated();
  }

}
