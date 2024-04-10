// crea una función que reciba una cadena de texto y regrese la misma pero sin vocales

export function removeVowels(texto) {
  //forma larga
  /* const vocales = ["a", "e", "i", "o ", "u"];
  return texto.split("").filter((char) => !vocales.includes(char).join(""));*/

  //forma corta, global es para toda la palabra [g] insensible [i] buscará en mayúsculas y minucusculas por igual
  return texto.replace(/[aeiou]/gi, "");
}

/*const palabra = "Kodemia";
const resultado = removeVowels(palabra);
console.log(resultado);*/
