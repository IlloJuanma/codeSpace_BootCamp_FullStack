/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/

document.addEventListener('DOMContentLoaded', function(){
    let array=[];
    for (let i = 0; i <10; i++){
        let numAle = Math.round(Math.random() * 101);
        array.push(numAle);
    }

    let menor = Math.min(...array);
    let mayor = Math.max(...array);

    console.log(array);
    console.log(menor);
    console.log(mayor);

});