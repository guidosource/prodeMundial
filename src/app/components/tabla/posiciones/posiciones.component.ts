import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {

  @Input() tablaPosiciones:any[];

  userName = localStorage.getItem('user_name').toUpperCase();

  puntajeMayor = 0;

  constructor() {

    
  }
  
  ngOnInit(){
    for (let index = 0; index < this.tablaPosiciones.length; index++) {
      if(this.tablaPosiciones[index].puntaje >= this.puntajeMayor){
        this.puntajeMayor = this.tablaPosiciones[index].puntaje;
      }
      
    }
    
   }

}
