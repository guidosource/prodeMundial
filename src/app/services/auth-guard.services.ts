import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot , RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoginService } from './login.services';

@Injectable()
export class AuthGuardService implements CanActivate{
    
    constructor(private _login:LoginService) { }

    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this._login.isAuthenticated()){
            console.log('Auth Ok');
            return true;
        }
        console.error('Auth Fail');
        return false;
    }

}