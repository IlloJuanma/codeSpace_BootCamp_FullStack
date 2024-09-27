/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
Nota: even = par | odd = impar
*/

document.addEventListener('DOMContentLoaded', function(){
    function imparOpar(number){
        const result = parseInt(number) %2 === 0 ? "even" : "odd";
        return `Number ${result} is ${result}`;
    }

    console.log(imparOpar(3));
});