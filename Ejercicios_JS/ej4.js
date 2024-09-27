/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

document.addEventListener('DOMContentLoaded', function(){
    const text = "Hi, I am learning Javascript"

    function vowelsOff(text){
        return text.replace(/[aeiou]/g, "");
    }

    let textoSinVocales = vowelsOff(text)
    console.log(vowelsOff(textoSinVocales));
});