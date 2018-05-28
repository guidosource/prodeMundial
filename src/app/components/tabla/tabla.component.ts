import { Component,  } from '@angular/core';
import { ResultadosService } from '../../services/resultados.services';
import { UsuariosService } from '../../services/usuarios.services';

import { Resultado } from '../../clases/Resultado';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent  {

  resultados: any[] = [];
  usuarios : any[] = [];

  loading:boolean;
  
  tablaPosiciones: any[] = [];

  constructor(private _resultadosService:ResultadosService, private _usuariosServices:UsuariosService) {
      
    this.loading = true;

      this._resultadosService.todosLosResultados()
      .subscribe( res => {
        this.resultados = res;

        this._usuariosServices.todosLosUsuarios()
        .subscribe( data => {
          this.usuarios = data;
          
          this.tablaPosiciones =  this.armarTabla();

          this.loading = false; 
          
          
         });
        
      });
      
    
    }
    
    
  private armarTabla():Resultado[]{
    
    let listaResultados :Resultado[] = [];
    
    
    for (let index = 0; index < this.usuarios.length; index++) {
      
      const item : Resultado = new Resultado();
      
      item.nombre = this.usuarios[index].nombre.toUpperCase();
      item.puntaje = this.sumarPuntos(this.usuarios[index].prode);

      listaResultados.push(item);
    }
    
    listaResultados = this.ordenarResultados(listaResultados);
    return listaResultados;
  }

  private sumarPuntos(prode:any){

      let puntaje = 0;

      for (let index = 0; index < this.resultados.length; index++) {

        if(prode[index] === this.resultados[index].resultado){
          puntaje++;
        }
        
      }

      return puntaje;
  }

  private ordenarResultados(resultados:any[]){
      return resultados.sort(function ( a, b){
        if(a.puntaje < b.puntaje){
          return 1;
        }

        if(a.puntaje > b.puntaje){
          return -1;
        }

        return 0;
      });
  }

}
