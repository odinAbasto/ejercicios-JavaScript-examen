/**
 * Define estas dos funciones en base a la documentacion aportada. Usa la primera para hacer la pregunta.
 * isPalindrome->recibe un string y devuelve  un booleano
 * getNextPalindrome -> recibe un numero entero y devuelve el primer numero
 * mayor que sea palindromo
 */
let cadena = "A luna ese anula";


function isPalindrome(cadena){
    cadena = cadena.toLowerCase();
    cadena = cadena.replaceAll(" ","");
    
    if(cadena.length==1||cadena.length==0){
        return true;
    }else{
        if(cadena.charAt(0)==cadena.charAt(cadena.length-1)){
            return isPalindrome(cadena.substring(1,cadena.length-1));
        }else{
            return false;
        }
        
    }

}

console.log(isPalindrome(cadena));


function getNextPalindrome(num){
    //numero = num.toString();
    let numero = num;
    let esPalindromo = isPalindrome(numero.toString());

    while(esPalindromo == false){
        numero = numero + 1;
        esPalindromo = isPalindrome(numero.toString());
        
    }
    return numero;
}


console.log(getNextPalindrome(525));
