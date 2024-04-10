// recibe un arreglo y regresa un país y cuantos artistas top tiene el mismo

export function paisTop(artistas_y_ciudades) {
  //for
  /*let ciudadCuenta = {};
  for (let elemento of artistas_y_ciudades) {
    const country = elemento.country;
    if (ciudadCuenta[country] != null) {
      const count = ciudadCuenta[country];
      ciudadCuenta[country] = count + 1;
    } else {
      ciudadCuenta[country] = 1;
    }
  }
  return ciudadCuenta;
}
//colocar js al modulo
import { artistas_y_ciudades } from "./constant/artistas_y_ciudades.js";
const res = paisTop(artistas_y_ciudades);
console.log(res);
*/

  //if
  /* return artistas_y_ciudades.reduce((acc, currentValue) => {
    const { country } = currentValue;
    if (acc[country]) {
      acc[country] += 1;
    } else {
      acc[country] = 1;
    }
    return acc;
  }, {});
}
import { artistas_y_ciudades } from "./constant/artistas_y_ciudades.js";
const res = paisTop(artistas_y_ciudades);
console.log(res);*/

  //ternario
  /* return artistas_y_ciudades.reduce((acc, currentValue) => {
    const { country } = currentValue;
    acc[country] = acc[country] ? acc[country] + 1 : 1;
    return acc;
  }, {});
}
import { artistas_y_ciudades } from "./constant/artistas_y_ciudades.js";
const res = paisTop(artistas_y_ciudades);
console.log(res);
*/

  return artistas_y_ciudades.reduce((acc, currentValue) => {
    const { country } = currentValue;
    acc[country] ??= 0; //nuevo operador si existe le add un valor no se soporta en todos los navegadores
    acc[country] += 1;
    return acc;
  }, {});
}
import { artistas_y_ciudades } from "./constant/artistas_y_ciudades.js";
const res = paisTop(artistas_y_ciudades);
console.log(res);
