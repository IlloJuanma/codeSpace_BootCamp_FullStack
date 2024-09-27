/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
const alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

document.addEventListener('DOMContentLoaded', function () {
    function transformar(texto) {
        let textoLimpio = texto.toLowerCase().replace(/[^a-z]/g, '');
        return textoLimpio;
    }

    function posicion(texto) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let textoLimpio = transformar(texto);
        let pos = [];
        
        for (let char of textoLimpio){
            // Encontrar la posicion
            let index = alphabet.indexOf(char);
            if(index !== -1){
                pos.push(index + 1);
            }
        }
        return pos;
    }
    console.log(posicion("Hola que tal"));
});
