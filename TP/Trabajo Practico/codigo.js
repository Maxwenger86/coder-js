 function convertir(){
  var valore = parseInt(document.getElementById("valor").value);
  var resultado = 0;
  var dolar = 283.00;
  var euro = 140.36;
  if(document.getElementById("uno").checked) {
    resultado = valore / dolar; 
    alert("El cambio de Pesos a Dólar es: $" + resultado.toFixed(2));
  }
  else if(document.getElementById("dos").checked){
    resultado = valore / euro; 
    alert("El cambio de Pesos a Euro es: $" + resultado.toFixed(2));
  }
  else{
    alert("Tienes que completar todos los requerimientos")
  }
}