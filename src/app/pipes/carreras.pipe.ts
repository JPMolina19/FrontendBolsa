import { Pipe, PipeTransform } from '@angular/core';
import {Carrera} from "../models/carrera";

@Pipe({
  name: 'carreras'
})
export class CarrerasPipe implements PipeTransform {

  transform(value: Array<Carrera>, query: string): Array<Carrera> {
    if (query) {
      query = query.toLowerCase();
      return value.filter(carrera => carrera.nombre_carrera.toLowerCase().includes(query));
    }
    return value;
  }

}
