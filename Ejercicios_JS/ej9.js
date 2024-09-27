/* 
EJERCICIO 9:
Un reloj muestra: 
 - la hora (0 <= h <= 23) 
 - los minutos (0 <= m <= 59)
 - y los segundos (0 <= s <= 59).

 Escribe una funcion que calcule los millisegundos que han pasado desde 
 media noche 00:00:00 hasta la hora actual teniendo en cuenta que:

 - hay 1000 millisegundos en un segundo
 - podemos obtener la hora, minutos y segundos con la función "getTime" 

*/

function getTime() {
    const now = new Date();
    return {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
    };
}

function calcularMilisegundosDesdeMedianoche() {
    // Obtener la hora actual
    const { hours, minutes, seconds } = getTime();
    
    // Calcular milisegundos
    const milisegundosPorHora = hours * 3600 * 1000; // 3600 segundos en una hora, 1000 milisegundos en un segundo
    const milisegundosPorMinuto = minutes * 60 * 1000; // 60 segundos en un minuto
    const milisegundosPorSegundo = seconds * 1000; // 1000 milisegundos en un segundo
    
    // Total de milisegundos desde medianoche
    const totalMilisegundos = milisegundosPorHora + milisegundosPorMinuto + milisegundosPorSegundo;
    
    return totalMilisegundos;
  }
  
  console.log(calcularMilisegundosDesdeMedianoche());
