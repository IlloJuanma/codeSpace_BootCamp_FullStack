/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/

function calcularSiglo(ano) {
    if (ano <= 0) {
        throw new Error("El año debe ser un número positivo.");
    }
    // Dividiendo el año entre 100 para obtener el número del siglo.
    // Redondear hacia Arriba usando Math.ceil para redondear hacia arriba, ya que el año 100 pertenece al siglo 1, el año 101 al siglo 2, y así sucesivamente.
    return Math.ceil(ano / 100);
}

// Ejemplos de uso
console.log(calcularSiglo(2024)); // Salida: 21
console.log(calcularSiglo(1900)); // Salida: 19
