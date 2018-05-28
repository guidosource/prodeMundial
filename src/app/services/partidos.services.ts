import { Injectable } from '@angular/core';

@Injectable()
export class PartidosService {
    
    partidos = [{
        'partido' : '1',
        'local': 'Rusia',
        'visitante': 'Arabia Saudita' 
      },{
        'partido' : '2',
        'local': 'Egipto',
        'visitante': 'Uruguay'
      },{
        'partido' : '3',
        'local': 'Marruecos',
        'visitante' : 'Irán'
      },{
        'partido' : '4',
        'local' : 'Portugal',
        'visitante' : 'España'
      },{
        'partido' : '5',
        'local' : 'Francia',
        'visitante' : 'Australia'
      },{
        'partido' : '6',
        'local' : 'Argentina',
        'visitante' : 'Islandia'
      },{
        'partido' : '7',
        'local' : 'Perú',
        'visitante' : 'Dinamarca'
      },{
        'partido' : '8',
        'local' : 'Croacia',
        'visitante' : 'Nigeria'
      },{
        'partido' : '9',
        'local' : 'Costa Rica',
        'visitante' : 'Serbia'
      },{
        'partido' : '10',
        'local' : 'Alemania',
        'visitante' : 'México'
      },{
        'partido' : '11',
        'local' : 'Brasil',
        'visitante' : 'Suiza'
      },{
        'partido' : '12',
        'local' : 'Suecia',
        'visitante' : 'Corea del Sur'
      },{
        'partido' : '13',
        'local' : 'Bélgica',
        'visitante' : 'Panamá',
      },{
        'partido' : '14',
        'local' : 'Túnez',
        'visitante' : 'Inglaterra'
      },{
        'partido' : '15',
        'local' : 'Polonia',
        'visitante' : 'Senegal'
      },{
        'partido' : '16',
        'local' : 'Colombia',
        'visitante' : 'Japón'
      },{
        'partido' : '17',
        'local' : 'Rusia',
        'visitante' : 'Egipto',
      },{
        'partido' : '18',
        'local' : 'Portugal',
        'visitante' : 'Marruecos',
      },{
        'partido' : '19',
        'local' : 'Uruguay',
        'visitante' : 'Arabia Saudita'
      },{
        'partido' : '20',
        'local' : 'Irán',
        'visitante' : 'España'
      },{
        'partido' : '21',
        'local' : 'Francia',
        'visitante' : 'Perú'
      },{
        'partido' : '22',
        'local' : 'Dinamarca',
        'visitante' : 'Australia'
      },{
        'partido' : '23',
        'local' : 'Argentina',
        'visitante' : 'Croacia'
      },{
        'partido' : '24',
        'local' : 'Brasil',
        'visitante' : 'Costa Rica'
      },{
        'partido' : '25',
        'local' : 'Nigeria',
        'visitante' : 'Islandia'
      },{
        'partido' : '26',
        'local' : 'Serbia',
        'visitante' : 'Suiza'
      },{
        'partido' : '27',
        'local' : 'Bélgica',
        'visitante' : 'Túnez'
      },{
        'partido' : '28',
        'local' : 'Alemania',
        'visitante' : 'Suecia',
      },{
        'partido' : '29',
        'local' : 'Corea del Sur',
        'visitante' : 'México'
      },{
        'partido' : '30',
        'local' : 'Inglaterra',
        'visitante' : 'Panamá'
      },{
        'partido' : '31',
        'local' : 'Polonia',
        'visitante' : 'Colombia'
      },{
        'partido' : '32',
        'local' : 'Japón',
        'visitante' : 'Colombia'
      },{
        'partido' : '33',
        'local' : 'Uruguay',
        'visitante' : 'Rusia'
      },{
        'partido' : '34',
        'local' : 'Arabia Saudita',
        'visitante' : 'Egipto'
      },{
        'partido' : '35',
        'local' : 'Irán',
        'visitante' : 'Portugal'
      },{
        'partido' : '36',
        'local' : 'España',
        'visitante' : 'Marruecos'
      },{
        'partido' : '37',
        'local' : 'Dinamarca',
        'visitante' : 'Francia'
      },{
        'partido' : '38',
        'local' : 'Australia',
        'visitante' : 'Perú',
      },{
        'partido' : '39',
        'local' : 'Nigeria',
        'visitante' : 'Argentina'
      },{
        'partido' : '40',
        'local' : 'Islandia',
        'visitante' : 'Croacia'
      },{
        'partido' : '41',
        'local' : 'Corea del Sur',
        'visitante' : 'Alemania'
      },{
        'partido' : '42',
        'local' : 'México',
        'visitante' : 'Suecia'
      },{
        'partido' : '43',
        'local' : 'Serbia',
        'visitante' : 'Brasil'
      },{
        'partido' : '44',
        'local' : 'Suiza',
        'visitante' : 'Costa Rica'
      },{
        'partido' : '45',
        'local' : 'Japón',
        'visitante' : 'Polonia'
      },{
        'partido' : '46',
        'local' : 'Senegal',
        'visitante' : 'Colombia'
      },{
        'partido' : '47',
        'local' : 'Inglaterra',
        'visitante' : 'Bélgica'
      },{
        'partido' : '48',
        'local' : 'Panamá',
        'visitante' : 'Túnez'
      }];


    constructor() {  }

    obtenerPartidos(){
        return this.partidos;
    }
}