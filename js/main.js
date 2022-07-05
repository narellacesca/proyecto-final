function Saludar () {
    alert ('Hola, bienvenidas a superchill!')}
Saludar()
let nombreIngresado = prompt ('ingresa tu nombre')
if (nombreIngresado != "" ) {
    alert ("Hola " + nombreIngresado)
} else {
    alert ("No ingresaste un nombre")
}/*
function Comprar (parametro1, parametro2, parametro3) {
    prompt(parametro1+ parametro2+ parametro3)
 
}
Comprar ("que te gustaria comprar?", " 1-bikinis", " 2-ropa interior")
*/
let producto = '';
let total = 0;

function comprar () {
    while (producto != '3') {
       producto = prompt ('Qué te gustaria comprar, '+ nombreIngresado +'? Ingresa el número de su eleccion 1. Bikinis $2000 2.Ropa interior $3000 3-Finalizar');
       switch (producto) {
           case '1':
           total += 2000;
           alert ('su compra es $' + total);
           break;
           case '2':
           total += 3000;
           alert ('su compra es $' + total);
           break
           case '3':
           alert ('el total es $' + total);
           break
       }
    }
}
comprar();