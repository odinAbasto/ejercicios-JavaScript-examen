/**
 * Crear un programa que pida ingresar numeros separados por espacios y luego pregunte por cuanto se desea multiplicar 
 * cada numero. El programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array
 * (en la misma posicion) multiplicado por el numero ingresado
 */
let cadena = "4 3 22 3 44";

let numeros = cadena.split(" ");
console.log(numeros);

let multiplicador = 2;

for (let i = 0; i < numeros.length; i++) {
    numeros[i]= numeros[i]*multiplicador;
}


console.log(`El array resultante es: ${numeros}`);