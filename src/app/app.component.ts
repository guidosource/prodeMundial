import { Component } from '@angular/core';
import { LoginService } from './services/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private _login:LoginService){}

  login(){
    return this._login.isAuthenticated();
  }
}
