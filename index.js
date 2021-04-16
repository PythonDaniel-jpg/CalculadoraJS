console.log("Bienvenido, introduzca un numero par la suma")



operacion=prompt("Introduzca la operacion que desea realizar", "")



if (operacion == "+" ) {
  var suma1;
  var suma2;
  suma1=prompt("Introduzca el primer numero", "")
  suma2=prompt("Introduzca el segundo numero", "")
  var suma3 = (parseInt (suma1) + parseInt (suma2));
  console.log(suma3)
};

if (operacion == "-") {
  var resta1;
  var resta2;
  resta1=prompt("Introduzca el primer numero", "")
  resta2=prompt("Introduzca el segundo numero", "")
  var resta3= (parseInt (resta1) - parseInt (resta2))
  console.log(resta3)
};

if (operacion == "*") {
  var multi1;
  var multi2;
  multi1=prompt("Introduzca el primer numero", "")
  multi2=prompt("Introduzca el segundo numero", "")
  var multi3= (parseInt (multi1) * parseInt (multi2))
  console.log(multi3)
};

if (operacion == "/") {
  var divi1;
  var divi2;
  divi1=prompt("Introduzca el primer numero", "")
  divi2=prompt("Introduzca el segundo numero", "")
  var divi3= (parseInt (divi1) / parseInt (divi2))
  console.log(divi3)
};