import { Component } from '@angular/core';
import { PartidosService } from '../../services/partidos.services';
import { UsuariosService } from '../../services/usuarios.services';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.services';

@Component({
  selector: 'app-prode',
  templateUrl: './prode.component.html',
  styleUrls: ['./prode.component.css']
})
export class ProdeComponent  {

  partidos: any[] = [];
  resultados : any[] = [];
  
  valid = true; //Formulario Valido
  guardado = false; //Formulario enviado correctamente.

  loading:Boolean; // flag de carga.  

  constructor(private _login:LoginService, private _router:Router,
    private _partidosServices:PartidosService, private _usuariosServices:UsuariosService) {

    this.loading = true;

    this.partidos = this._partidosServices.obtenerPartidos();
    this._usuariosServices.partidosPorUsuario(localStorage.getItem('user_id'))
    .subscribe( (res:any)=> {
        this.resultados = res;

        this.loading = false;

    },err=>{
      if( err.status === 401 ){
          this._login.logout();
          this._router.navigate(['Login']);
      }
    });

   }

   guardarPartidos(){
      if(this.resultados.length === 48){
        this._usuariosServices.actualizarPartidos(localStorage.getItem('user_id'),this.resultados)
        .subscribe((res:any)=>{
          if(res.ok){
            this.valid = true;
            this.guardado = true;
          }
        });
        
      }else{
        this.valid = false;
      }
      
   }

   participo(){
     if(localStorage.getItem('participo') === 'true'){
       return true;
     }
     return false;
   }

}
