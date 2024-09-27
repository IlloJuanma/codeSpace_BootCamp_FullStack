/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/

function fibonacci(n) {
    // Manejo de los primeros dos casos especiales
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Inicialización de los dos primeros números en la secuencia de Fibonacci
    let a = 0, b = 1, fib;

    // Bucle iterativo para calcular Fibonacci hasta n
    for (let i = 2; i <= n; i++) {
        fib = a + b;  // fib(n) = fib(n-1) + fib(n-2)
        a = b;        // Actualizamos a para el siguiente paso
        b = fib;      // Actualizamos b para el siguiente paso
    }

    return fib;
}

let numero = 20;
let resultado = fibonacci(numero);
console.log(`El vigésimo número de la serie de Fibonacci es ${resultado}`);
