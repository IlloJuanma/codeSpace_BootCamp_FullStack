/* 
EJERCICIO 1:
Muestra el siguiente saludo pasando un nombre como parámetro
“Hello <name>, how are you doing today?”
*/

document.addEventListener('DOMContentLoaded', function(){
    function saludo(name){
        return `Hello ${name}, how are you doing today?`;
    }
    console.log(saludo("juanma"));
});
