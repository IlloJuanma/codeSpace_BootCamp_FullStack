/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/

document.addEventListener("DOMContentLoaded", function(){
    
    function hashtag(texto){
        // Dividir el texto en palabras
        let palabras = texto.split(" ");

        // Ponemos en mayusculas la primera letra de cada palabra
        let palabrasMayus = palabras.map(palabra => {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        });

        // Volvemos a unir las palabras sin espacios
        let resultado = "#" + palabrasMayus.join("");
        return resultado;
    }

    let texto = "Programando en Javascript";
    let resul = hashtag(texto);
    console.log(resul);

});