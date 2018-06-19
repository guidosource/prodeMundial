import { Component } from '@angular/core';
import { ResultadosService } from '../../services/resultados.services';
import { PartidosService } from '../../services/partidos.services';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.services';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

  resultados : any[] = [];
  partidos : any[] = [];
  ultimoPartido:object;
  role = localStorage.getItem('role');

  guardadoOk:Boolean = false;
  nuevoPartido:String = 'Local';

  loading:Boolean;
  
  banderaSource = '../../../assets/img/banderas/';


  constructor(private _login:LoginService, private _router:Router,
     private _resultadosService:ResultadosService, private _partidoService:PartidosService) { 
    
    this.loading = true;

    this._resultadosService.todosLosResultados()
      .subscribe( res => {

          this.resultados = res;
          this.partidos = this._partidoService.obtenerPartidos();
          this.ultimoPartido = this.partidos[this.resultados.length];
        
          this.loading = false;
      },err=>{
          if(err.status === 401){
            this._login.logout();
            this._router.navigate(['Login']);

          }
      });
    
  }

  nuevoResultado(){
    
    const partido = this.partidos[this.resultados.length] || null;

    if( partido != null ){
      this._resultadosService.nuevoResultado(partido.partido,this.nuevoPartido)
      .subscribe( res=>{
         this.guardadoOk = true;
      });
    }
  }


}
