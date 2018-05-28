import { Component } from '@angular/core';
import { LoginService } from '../../services/login.services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  userName = localStorage.getItem('user_name');

  constructor(private _login:LoginService) {

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
