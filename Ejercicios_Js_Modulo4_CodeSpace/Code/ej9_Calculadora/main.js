document.addEventListener("DOMContentLoaded", () => {
    // Usamos Event Delegation en este caso, es mejor controlar todo el div de las teclas
    // y luego averiguar que tecla es pulsada, que controlar cada tecla individualmente

    document.querySelector('textarea').readOnly = true;
    const result = document.querySelector("#results");
    const calcTeclas = document.querySelector('.calc_teclas');

    // Agregamos listener al contenedor de teclas
    calcTeclas.addEventListener('click', (event) => {
        // Verificamos si el elemento clicado es un botón
        if (event.target.classList.contains('calc_tecla')) {
            const tecla = event.target.textContent;
            switch (tecla) {
                case '+':
                case '-':
                case 'x':
                case '/':
                    agregarOperacion(tecla);
                    break;
                case '=':
                    calcularResultado();
                    break;
                case 'C':
                    borrar();
                    break;
                default:
                    agregarNumero(tecla);
            }

        }
    });

    // Funcion para manejar numeros
    function agregarNumero(numero) {
        result.value += numero;
    }
    // Funcion para manejar operaciones
    function agregarOperacion(operacion) {
        result.value += operacion;
    }

    // Funcion para calcular resultado
    function calcularResultado() {
        // Como yo he puesto "x" en lugar de "*"
        // hay que reemplazar para usar "eval"
        const expresion = result.value.replace(/x/g, '*');
        try {
            // La funcion eval() toma una cadena de texto y la interpreta
            // como codigo JS, permitiendo evaluar expresiones matemáticas 
            result.value = eval(expresion);
            if (result.value === "Infinity") result.value = "No se puede dividir por 0";
        } catch (error) {
            result.value = "Error";
        }
    }
    // Function para borrar
    function borrar() {
        result.value = "";
    }

});