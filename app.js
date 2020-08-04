document.write("<h1>CURSO DE JAVASCRIPT</h1>")

//Tipos de datos 
/*
String: Cadenas
"HOLA MUNDO"
'HOLA MUNDO'
Son la misma vaina 
Number: Numeros 
12
121
12.213
Booleanos: Lógicos
True 
False 
Array: Arreglos
Lista de datos 
[dato1, dato2, dato3,...,datoN]
Objeto:
"Juan"
89.2
31
true
Representación abstracta de un objeto en la vida real

{
    "username": "Julio",
    "score": 89.2,
    "hours": 31,
    "professional": true;
}

*/

let typeCard = "Targeta de crédito";

//Condicional SWITCH

switch (typeCard) {
    case "Targeta de débito":
        console.log("Esta es una targeta de crédito");
        break;
    case "Targera de crédito":
        console.log("Esta es una targeta de crédito");
        break;
    default:
        console.log("Targeta invalida");
}

//ITERADORES Y WHILES

var variableContador = 0;

while (variableContador < 50) { //Comparación
    console.log(variableContador); //Acción
    variableContador++; //Modificación de la variable de condición
    document.write("<h3> " + variableContador + "</h3>")
}

var nombre = prompt("Ingresa tu nombre"); //El prompt es para pedir datos externos

var username2 = "Julio"; //Variable
let lastName = "Motta"; //Otro tipo de variable
const pi = 3.1415; //Estos valores son constantes, no se puede cambiar 

if (nombre === "Julio") {
    document.write("<h2>Bienvenido galán</h2>");
    console.log("It's a String");
    console.log(1, 2, 3, 4);
    console.log(true);
    console.log({
        "username": "Julio",
        "points": 14,
        "time": 13.4
    });
    console.log(username2);
    console.log(lastName);
    lastName = "Claudio";
    console.log(lastName);
} else {
    document.write("<h2>You're not me</h2>");
}