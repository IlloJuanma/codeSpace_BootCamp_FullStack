/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”
*/

document.addEventListener('DOMContentLoaded', function(){
    function repetitions(text){
        let result = "";

        for(let i=0; i<text.length; i++){
            // La primera letra en mayusculas
            // Las siguientes en minusculas
            let letras = text[i].toUpperCase() + text[i].toLowerCase().repeat(i);

            result += letras;
        }
        return result;
    }

    console.log(repetitions("code"))
    console.log(repetitions("list"))
    console.log(repetitions("function"))
});
