import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map' ;

import { Resultado } from '../clases/Resultado';
import { GlobalService } from './global.services';




@Injectable()
export class ResultadosService {

    constructor(private _http:HttpClient, private _global:GlobalService) {
     }

    todosLosResultados(){
        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
                'token' : localStorage.getItem('token')
            })
        };
        
        return this._http.get( this._global.URL_SERVER + '/todosresultados', options)
        .map((res:any)=>{
            return res.resultados;
        });
        
        
    }

   nuevoResultado(partido:Number,resultado:String){

        const body = {
            partido : partido,
            resultado : resultado
        };
        
        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
                'token' : localStorage.getItem('token')
            })
        };

        return this._http.post( this._global.URL_SERVER + '/nuevoresultado' , body , options );
    }

}