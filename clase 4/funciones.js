/*
function saludar (){
    console.log("Hola gente");
}
saludar();


for (let i=1; i<=3; i++){
    saludar();
}

// sin parametros...
function sumar(){
    let num1=parseInt(prompt("INGRESA EL PRIMER NUMERO"));
    let num2=parseInt(prompt("INGRESA EL SEGUNDO NUMERO"));
    let resultado = num1+num2;
    console.log("El resultado de la suma es:" +resultado);
}

sumar ();

// con parametros

function armarFrase(palabra1,palabra2){
    console.log("La frase es:"+palabra1+" "+palabra2+".");
}
armarFrase("Tengo","hambre");
armarFrase("Que","frio");

let p1=prompt("Ingresa la primera palabra");
let p2=prompt("Ingresa la segunda palabra");

armarFrase(p1,p2);


// FUNCION CON PARAMETROS Y RETURN

let precioProducto =parseFloat(prompt("Ingresa el preco del producto"));

function calcularIva(precio){
    return precio * 0.21
}

let iva =calcularIva(precioProducto);
console.log("El valor del iva es $"+iva)

function mostrarPrecioFinal(precioIngresado,ivaCalculado){
    console.log("Mostrar precio con iva incluido es $"+(precioIngresado+ivaCalculado))
}
mostrarPrecioFinal(precioProducto,iva);


// Ambito de una variable(local o global )
let soyglobal="Pepe";

function probarScope(){
    console.log(soyglobal);
    let soyLocal="Maxi";
    console.log(soyLocal);
    return soyLocal;
}

let loQueRetorna=probarScope();

console.log(soyglobal);


function sumar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

function restar(num1, num2) {
    let resultado = num1 - num2
    return resultado
}

let resulSuma = sumar(4,3);
console.log(resulSuma);
let resulResta = restar(4,3);

resulSuma =sumar(10,9);
console.log(resulSuma);

//FUNCIONES ANONIMAS
const descuento  = function (precio) { 
    return precio *0.10 }
console.log("el descuento es $"+descuento(700));

//FUNCIONES FLECHAS

const mostrarNombre = (nombre)=>"Mi nombre es "+nombre;
console.log(mostrarNombre("Maximiliano"));

const areaTriangulo = (base,altura)=> (base*altura)/2;
console.log("El area del triangulo es : "+areaTriangulo(4,6));

const ejemplo = (parametro1, parametro2)=> {
    // aca el bloque de codigo
    return parametro1 + parametro2;
}
*/   


















































