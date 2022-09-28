/*
//if
let edad = 18;

if ( edad == 18) {
    console.log("Ya eres mayor de edad")
}

// if..else 
let user = prompt("ingrese usuario");

if (user =="nadita1989"){
    console.log("Bienvenida Nadia");
}else{
    console.log("Usuario no registrado");
}

//if...else if...else
let codproducto = prompt("Ingrese el codigo del producto y le diré su procio");

if (codproducto == "1212"){
    console.log("Mouse marca Genius - modelo DX100 - $ 999.99");
}else if(codproducto == "2222"){
    console.log("Teclado Logitech -- modelo G600 - $ 7999.00");
}else if(codproducto ="1133"){
    console.log("Mouse pad gamer - $6000");
}else{
    console.log("Producto sin stock!");
}

//ejercicio: Solicitar al usuario el año de vto de su registro de conducir
// si el mismo coincide con el año actual => Enviar un mensaje "Su registro esta vencido o por vender"
// Sino enviar un mensaje "Aun esta vigente"

//Ejercicio 

let anioVencimiento = parseInt(prompt("ingrese el año de vencimiento de su registro"));
const anioActual = 2022;

if(anioVencimiento == anioActual){
    console.log("Su registro esta vencido o por vencer");
}else{
    console.log("Aun está vigente");
}

// variables boolean

let tieneAptoFisico = false;
if(tieneAptoFisico){
    console.log("Puede realizar actividad fisica");
}else{
    console.log("Primero debe traer apto fisico");
}

let edadUsuario=15;
let esMayorDeEdad = (edadUsuario > 17); //true

if (esMayorDeEdad){
    console.log("Puede ingresar al bar");
}else{
    console.log("Para ingresar debes ser mayor de edad");
}


// == vs ===
let num1 = 1;
let numUno = "1";
let sonIguales = (num1 == numUno);
console.log(sonIguales);

// == compara por valor

let sonEstrictamenteIguales = (num1 === numUno);
console.log(sonEstrictamenteIguales)

// === compara por valor y por tipo


// operadores < <= > >=

let caloriasDiarias = parseInt(prompt("Ingresa las calorias ingeridas hoy"));

if (caloriasDiarias < 1800){
    console.log("Deficit calorico");
}else if(caloriasDiarias < 230240){
    console.log("Excelente valor calorico");
}else{
    console.log("Exceso calorico");
}


// Operador &&
let usuario = prompt("Ingresa numbre de usuario");
let contrasenia = prompt("Ingresa contraseña para el usuario" +usuario);

if((usuario == "Pepe_2022")&& (contrasenia == "roble+1_J")){
    console.log("Bienvenido al sistema");
}else{
    console.log("Usuario y/o contraseña erroneos");
}


// Operador or ||
let bandaFavorita = prompt("Ingresa tu banda favorita");

if((bandaFavorita == "daft punk") || (bandaFavorita =="DAFT PUNK") ||(bandaFavorita =="Daft Punk")){
    console.log("Tambien es mi banda favorita!")
}else{
        console.log(bandaFavorita + "es genial"); 
    }


///////// ejercicio n° 1
let miNumero = (prompt("Ingresa un numero del 1 al 1000"));

if (miNumero >= 0 && miNumero <= 1000 ){
    console.log("El numero que elegiste es "+miNumero);
}else if(miNumero <= 0){
    console.log("Tu numero esta duera del permitido, intenta una vez mas..");
}else {alert("Tu numero es mayor a 1000, lo lamentamos");
}

//ejercicio n° 2

let palabra = (prompt("Por favor ingresa una palabra para saludar"));

if (palabra == "hola" || palabra == "Hola" || palabra == "HOLA"){
    alert("ENHORA BUENA, MUY BUENAS PARA TI..");
}else if (palabra == "") {
    alert("Ouchh..Quizas si me das un saludo, podemos emepzar de nuevo..")
}else {
    alert("Tu respuesta no es la correcta")
}

//ejercicio n° 3

let num1 = prompt("Por favor ingresa un número de 10 a 50");

if (num1 >= 10 && num1 <= 50 ) {
    alert("El numero que ingresaste es correcto..");
}else {
    alert("No has respetado la consigna, prueba de nuevo....")
}
*/