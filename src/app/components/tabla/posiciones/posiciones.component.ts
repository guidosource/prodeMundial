import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent {

  @Input() tablaPosiciones:any[];

  constructor() { }

}
