import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.services';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent  {

  usuarios:any[] = [];
  cambiosOk = false;

  nuevoNombre:String = '';
  nuevoPass:String = '';
  nuevoRole:Boolean;

  loading:Boolean;

  err:Boolean;

  constructor(private _usuariosServices:UsuariosService) {
    
    this.loading = true;

    this._usuariosServices.todosLosUsuarios()
    .subscribe( (res:any)=>{
      this.usuarios = res;
   
      this.loading = false;

    });
    
  

   }

   guardarCambios(){
      for (const usuario of this.usuarios) {
        
        this._usuariosServices.actualizarParticipo(usuario._id,usuario.participo)
        .subscribe(res=>{});
      }

      this.cambiosOk = true;


   }

   nuevoUsuario(){

    let role = 'USER_ROLE';
    if(this.nuevoRole === true){
      role = 'ADMIN_ROLE';
    }

      this._usuariosServices.nuevoUsuario(this.nuevoNombre,this.nuevoPass,role)
      .subscribe((res:any)=>{
      },err=>{
          this.err = true;
      });
    }
  
}
