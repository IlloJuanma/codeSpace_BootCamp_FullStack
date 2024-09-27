/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

function contarLetras(texto) {
    // Convertir el texto a minúsculas y eliminar caracteres no alfabéticos
    let textoLimpio = texto.toLowerCase().replace(/[^a-z]/g, '');

    // Crear un objeto vacío para almacenar las repeticiones
    let contador = {};

    // Recorrer cada letra en el texto
    for (let letra of textoLimpio) {
        // Si la letra ya existe en el objeto, aumentar su contador
        if (contador[letra]) {
            contador[letra]++;
        } else {
            // Si no existe, añadirla con un valor inicial de 1
            contador[letra] = 1;
        }
    }

    return contador;
}

let texto = "Hello world";
let resultado = contarLetras(texto);
console.log(resultado);
