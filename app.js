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


var nombre = prompt("Ingresa tu nombre");

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
} else {
    document.write("<h2>You're not me</h2>");
}