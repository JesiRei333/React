//recibe el arreglo de artistas y ciudades , regresa un arreglo con solo el nombre
//de las ciudades que hay en el arreglo sin repetidas
/*
export function ciudadesExistentes(arr) {
  
  let ciudades = [];
  for (let entry of arr) {
    const { country } = entry;
    if (!ciudades.includes(country)) {
      ciudades.push(country);
    }
  }
  return ciudades;
}

import { artistas_y_ciudades } from "./constant/artistas_y_ciudades.js";

const res = ciudadesExistentes(artistas_y_ciudades);
console.log(res);*/

export function ciudadesExistentes(arr) {
  return arr.reduce((countries, entry) => {
    const { country } = entry;

    if (!countries.includes(country)) {
      countries.push(country);
    }

    return countries;
  }, []);
}

import { artistas_y_ciudades } from "./constant/artistas_y_ciudades.js";

const res = ciudadesExistentes(artistas_y_ciudades);
console.log(res);
