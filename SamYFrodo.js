
/***  
 * 
 * crear un programa que permita saber sin SAm y Fromo está juntos. El programa debe permitir
 * ingresar nombre separados por espacios, y mostrrar con un mensaje si Sam se encuentra al lado de Fromo, ya sea antes o después
 */

let cadena = prompt('Ingrese nombres separados por espacios ');

//let cadena = 'Sam y Frodo';
let names = cadena.split(' ');

if(Math.abs(names.indexOf('Sam')-names.indexOf('Frodo'))==1){
    return console.log('Sam y Fromo están juntos');
}else{
    console.log('Sam y Frodo están separados')
}