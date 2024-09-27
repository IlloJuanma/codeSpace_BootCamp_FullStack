/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function esIsograma(cadena) {
    // Limpiar la cadena: eliminar espacios y convertir a minúsculas
    let textoLimpio = cadena.toLowerCase().replace(/[^a-z]/g, '');

    // Contar la frecuencia de cada letra
    let frecuencia = {};
    for (let letra of textoLimpio) {
        if (frecuencia[letra]) {
            frecuencia[letra]++;
        } else {
            frecuencia[letra] = 1;
        }
    }

    // Obtener el número de veces que aparece cada letra
    let frecuencias = Object.values(frecuencia);

    // Verificar si todas las frecuencias son iguales
    let esIsograma = frecuencias.every(freq => freq === frecuencias[0]);

    if (esIsograma) {
        return `La cadena '${cadena}' es un isograma.`;
    } else {
        return `La cadena '${cadena}' NO es un isograma.`;
    }
}
console.log(esIsograma("hola mundo"));