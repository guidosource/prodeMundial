import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.services';
import { PartidosService } from '../../services/partidos.services';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.services';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent  {

  usuarios:any[] = [];
  partidos: any[] = [];
  cambiosOk = false;

  nuevoNombre:String = '';
  nuevoPass:String = '';
  nuevoRole:Boolean;

  loading:Boolean;

  err:Boolean;

  //ProdeUsuarios
  user:any;

  resultados:any = false;
  

  constructor(private _login:LoginService, private _partidosServices:PartidosService
    , private _router:Router,private _usuariosServices:UsuariosService) {
    
    this.loading = true;

    this.partidos = this._partidosServices.obtenerPartidos();

    this._usuariosServices.todosLosUsuarios()
    .subscribe( (res:any)=>{
      this.usuarios = res;
   
      this.loading = false;

    },err=>{
      if( err.status === 401 ){
          this._login.logout();
          this._router.navigate(['Login']);
      }
    });
    
  

   }

   verProde(i:any){
      this.user = this.usuarios[i];
      this.resultados = true;
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
