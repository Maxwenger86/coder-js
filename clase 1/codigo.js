/*
//declaracion de la variable //
let nombre;
let edad ;
//inicializacion de la variable //
nombre = "Max";
edad = "36";

//actualizo valor de la variable//
nombre = "Max";
edad = "30";

//declarar y asignar al mismo timpo
let direccion = "av rivadavia 333";

//constante
const PI = 3.14;

//operaciones matematicas
let num1 = 8;
let num2 = 3;
let suma = num1 + num2; //11
let resta = num1 - num2; //5
let multiplicacion = num1 * num2; //24
let division = num1 / num2; //2.6666

//concatenacion
let apellido = "Wenger";
let ESPACIO = " ";
let nombreCompleto = nombre +ESPACIO+ apellido; //Max Wenger

let nomYEdad = nombre +ESPACIO+ edad; //Max 36

//consola
console.log("bienvenidos a la consola");
console.log("El resultado de la suma es:"+suma);
console.log("El resultado de la suma es:"+resta);
console.log("El resultado de la suma es:"+multiplicacion);
console.log("El resultado de la suma es:"+division);

console.log("El nombre completo del usuario es:"+nombreCompleto);
console.log("El nombre concatenado a la edad es:"+nomYEdad);

//Pront
let bandafavorita = prompt("ingresa tu banda favorita");
console.log("La banda favorita del usuario es:"+bandafavorita);

//Alert - salida de datos
let nomUsu = prompt("Ingresa tu nombre");
alert("Buenas noches:"+nomUsu);

//ejercicio sumamos dos numeros que ingresa el usuario
let primeroNum = parseInt(prompt("Ingresa el primero numero a sumar"));
let segundoNum = parseInt(prompt("Ingresa el segundo numero a sumar"));
//ya tengo ambos numeros en formato numerico

let sumaNumeros = primeroNum + segundoNum;
alert("la suma de los numeros ingresados es ="+sumaNumeros);

//parseFloat para convertir a numeros con decimales por ej un precio.

//tarea 
//1) solicitar el año de nacimiento al usuario y decirle cuantos años tiene
//2) solicitar un precio de un prodcuto e informar el precio final con iva incluido
*/

//ejercicio 1

let nombre = prompt("Cual es tu nombre)");
let apellido = prompt("Cual es tu apellido)");
let nacimiento = prompt("En que año naciste?");

let edad = 2022 - nacimiento;
let espacio = " ";
alert(nombre + espacio +apellido+espacio+"tenes" +espacio + edad);

//ejercicio 2

let precio = parseFloat(prompt("Cuanto sale el prodcuto seleccionado?"));
const IVA = 1.21;

let precioFinal = precio * IVA;

alert ("El precio final del productor seleccionado es de" + precioFinal);

