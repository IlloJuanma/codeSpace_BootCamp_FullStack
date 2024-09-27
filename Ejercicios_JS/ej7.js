/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
Ejemplos:
"La frase 'Dábale arroz a la zorra el abad' es un palíndromo"
"La frase 'hola mundo' NO es un palíndromo"
*/

document.addEventListener('DOMContentLoaded', function(){

    function esPalindromo(texto){
        // Convertir a minusculas y eliminar caracteres no alfabéticos
        let textoLimpio = texto.toLowerCase().replace(/[^a-z]/g, '');

        // Invertir
        let textoInvertido = textoLimpio.split("").reverse().join("");

        // Verificar
        let resultado = textoLimpio === textoInvertido ? "ES palindromo" : "NO es palindromo";

        // Return
        return `La frase "${texto}" ${resultado}`;
    }

    console.log(esPalindromo("Hola que tal estas"));
});
