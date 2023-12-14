/**
 *  Crear un programa que pida ingresar un conjunto de letras sin espacios y devuelva un mensaje con ls
 * cantidad que hay de cada una.
 *  
 * */  
let cadena = "dad";
let letras = cadena.split('');
console.log(letras);

let mapLetras = new Map();

for(let i = 0; i<=letras.length-1;i++){
    if(mapLetras.has(letras[i])){
        mapLetras.set(letras[i], mapLetras.get(letras[i])+1);
    }else{
        mapLetras.set(letras[i], 1);
    }
}
console.log(mapLetras);