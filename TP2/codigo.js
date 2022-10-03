const producto =[ 
    {nombre: "barbijos", precio: 100 },
    {nombre: "guantes latex", precio: 250 },
    {nombre: "guantes nitrilo", precio: 300 },
    {nombre: "cofias", precio: 150 },
];

let carrito = []

let seleccion = prompt("Buenos días, queres comprar algún producto? (si o no )")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresar SI o NO")
    seleccion = prompt("Buenos días, queres comrpar algún producto? (si o no)");
}

if(seleccion == "si"){
    alert("a continuacion te dejamos los prodcutos a elegir");
    let todoslosProducto = producto.map((producto) => producto.nombre + " "+ producto.precio + " $ ");  
    alert(todoslosProducto.join(" - "))
}else if(seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto.!");
}

while(seleccion != "no"){
    let producto = prompt ("agrega un producto a tu carrito .!!");
    let precio = 0

    if(producto == "barbijos" || producto == "guantes latex" || producto == "guantes nitrilo" || producto == "cofias"){
        switch(producto){
            case "barbijos":
            precio = 100;
            break;
            case "guantes latex":
            precio = 250;
            break;
            case "guantes nitrilo":
            precio = 300;
            break;
            case "cofias":
            precio = 150;
            break;
            default:
            break;
        }
    let unidades = parseInt(prompt("cuantas unidades queres comrpar ?"))
    
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }else{
        alert("NO TENEMOS  ESE PRODUCTO!!")
    }

    seleccion = prompt("Queres seguir comprando ??");
    
    while(seleccion == "no") {
        alert("MUCHAS GRACIAS POR TU COMPRA!");
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
     }
}

const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por tu compra es: $ ${total}`)









