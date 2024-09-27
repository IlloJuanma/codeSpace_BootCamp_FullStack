/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/

document.addEventListener('DOMContentLoaded', function(){
    function contarVocales(text){
        let count = 0;
        const vocales =['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

        for (let char of text){
            if(vocales.includes(char)){
                count++;
            }
        }
        return `Number of vowels is ${count}`;
    }

    console.log(contarVocales("Nadie es inmortal"));
});