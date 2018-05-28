import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { GlobalService } from './global.services';

@Injectable()
export class UsuariosService {

    
    constructor(private _http:HttpClient, private _global:GlobalService) { 
    }
    
    todosLosUsuarios(){
        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
                'token' : localStorage.getItem('token')
                
            })
        };

        return this._http.get( this._global.URL_SERVER + '/obtenerusuarios', options )
        .map( (res:any)=> {
            return res.usuarios;
        });
  

    }
    
    partidosPorUsuario(id:String){

        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
                'token' : localStorage.getItem('token')
                
            })
        };

        return this._http.get ( this._global.URL_SERVER + '/usuariopartidos/' + id, options)
        .map( (res:any) =>{
            return res.partidos;
        });
    }

    actualizarParticipo(id:String, participo:Boolean){
        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
                'token' : localStorage.getItem('token')
            })
        };

        const body = {
            participo : ''
        };

        if(participo){
            body.participo = 'true';
        }else{
            body.participo = 'false';
        }

        return this._http.put( this._global.URL_SERVER  + '/participo/' + id, body , options);

    }

    actualizarPartidos(id:String, partidos:any[]){

        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
                'token' : localStorage.getItem('token')
            })
        };

        const body = {
            prode : partidos
        };

        return this._http.put( this._global.URL_SERVER  + '/actualizarpartidos/' + id, body , options);

    }

    nuevoUsuario(nombre:String, password:String, role:String){

        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
                'token' : localStorage.getItem('token')
            })
        };

        const body = {
            nombre,
            password,
            role
        };

        return this._http.post( this._global.URL_SERVER  + '/nuevousuario/', body , options);

    }



}