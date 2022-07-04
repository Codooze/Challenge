//GA3 - 220501093 - AA2;

//✅Algoritmo que a partir de una fecha de nacimiento y una fecha actual determine la edad en años actual de una persona.
function edad(fechaNacimiento, fechaActual) {
  //console.log(fechaActual.getFullYear(), fechaNacimiento.getFullYear());
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear(); //Calculo de la edad
  const mes = fechaActual.getMonth() - fechaNacimiento.getMonth(); //Calculo del mes si es negativo el resultado quiere decir que no ha cumplido años en ese mes
  const dia = fechaActual.getDate(); //Calculo del dia
  const diaNacimiento = fechaNacimiento.getDate();
  //console.log(dia, diaNacimiento);
  //console.log(edad, mes, dia);
  return mes <= 0 && dia >= diaNacimiento ? edad : edad - 1;
}

console.log(edad(new Date(1996, 9, 31), new Date(2022, 6, 3)));

//✅ Algoritmo que permita determinar si un año indicado es o no un año bisiesto.
function esBisiesto(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(
  esBisiesto(2020), //true
  esBisiesto(2024), //true
  esBisiesto(2027), //false
  esBisiesto(2600) //false
);
