//CICLOS POR CONTEO - FOR
/*
for (let i=1; i<=5; i++){
    //porcion de codigo que se va a repetir
    console.log("vuelta nro"+i);
}


//solictamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresa un numero"));
// en cada repiticio, calculamos el numero ingresado x el el num de repes..
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero + "x"+ i + "="+ resultado)
}

// Diapo 14
for (let i = 1; i <= 4; i++) {
    let ingresarNombre = prompt("ingresa tu nombre");
    alert("TURNO N° "+i+" Nombre: "+ingresarNombre);
}

// usuario y contraseña con ciclo FOR
for (let i=1;i<=3;i++){

    let usuario = prompt("INGRESA USUARIO");
    let contrasenia = prompt("ingresa contraseña para "+usuario);
    
    if((usuario=="maxi")&&(contrasenia=="Code_66")){
        console.log("Buenvenido al Sistima Anakin!!");
        break;
    }else{
        console.log("Usuario y/o contrasña erroneos! Restan"+(3-i)+"intentos");
    }
}

//quiero imprimir los num impares del 1 al 10
for (let i=1; i<=100; i++){
    //saltea todos los num pares
    if(i%2==0){
        continue;
    }else{
        console.log(i);
}
    }
   
// Ejercicio: calcular el promedio de 3 notas de 1 alumno.

let nota
let acumulador = 0;
for (let i=1; i<=3; i++){
    nota=parseInt(prompt("Ingresa la nota nro"+i));
    console.log("la nota ingresada:"+nota);
    acumulador = acumulador + nota;
    console.log("acumulador actualizado:"+acumulador);
}
let promedio=acumulador/3;
console.log("elpromedio del alumnos"+promedio);



// Ciclos por condicion - WHILE
/*
console.log("Lista de compras")
let alimento=prompt("ingresa el alimento que vas a comprar (s para salir)");

while(alimento!="s"){
    console.log(alimento);
    alimento=prompt("ingresa el alimento que vas a comprar (s para salir)");
}

// Ciclos por condicion - DO..WHILE
console.log("mis bandas favoritas");
do{
    banda=prompt("Ingresa una de tus bandas favoritas (fin para salir)");
    if(banda!="fin"){
        console.log(banda);
    }
}while(banda!="fin")

let numero = 0;
do{
    numero = prompt("ingresa un numero");
    console.log(numero);
}while(parseInt(numero));


// SWITCH es condicional con el if

let fruta=prompt("Ingresa la fruta y te dire el precio por KG (salir para finalizar)");
while(fruta!= "salir"){
    switch(fruta){
        case"manzana":
            console.log("Precio por KG $399");
            break;
        case "mandarina":
            console.log("precio por KG $289.99");
            break;
        case "banana":
            console.log("precio por KG $300");
            break;    
        case "durazno":
        case "frutilla":
            default:
                console.log("fruta sin stock");
                break;
    }   
    fruta=prompt("Ingresa la fruta y te dire el precio por KG (salir para finalizar)");
}

// solicitar el peso de las 4 personas que ingresan a un ascensor
// si el total del peso supera los 390kg, dar aviso ya que excede la capcidad
// sino imprimir mensaje "Puede subir"

let pesoPersona = 0;
let acumulado = 0;

for (i=1;i<=4;i++){
    let pesoPersona = parseInt(prompt("Ingrese el peso de la persona "+i));   
        if(parseInt(pesoPersona)){
            acumulado = acumulado + pesoPersona;
        }else{
            while(!parseInt(pesoPersona)){
                pesoPersona = parseInt(prompt("Ingrese peso persona"+i))
            }
        } 
     if (acumulado<390){alert("PUEDEN SUBIR")
    }else 
        {alert("BAJAR DEL ASCENSOR")}}


for (let i=1;i<=3;i++){

    let usuario = prompt("INGRESA USUARIO");
    let contrasenia = prompt("ingresa contraseña para "+usuario);
    
    if((usuario=="maxi")&&(contrasenia=="Code_66")){
        console.log("Buenvenido al Sistema!!");
        break;
    }else{
        console.log("Usuario y/o contrasña erroneos! Restan"+(3-i)+"intentos");
    }
}
*/
