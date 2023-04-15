console.log("Hola mundo");

//asdasdasd

let variableUno = 10;
let variableDos = "10";

console.log("Valor de la variable: ",variableUno, "dos ", variableDos);

const constante = 10;
    //constante = 20;
console.log(constante);


//alert("Bienvenidos");


if (variableUno == variableDos) {
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

if (variableUno !== variableDos) {
    console.log("Son distintos");
}else{
    console.log("No son distintos");
}


if (variableUno > 5 && variableDos == 7) {
    
}

if (variableUno < 5 || variableDos == 10) {
    
}



if ("50" > 40) {
    console.log("es mayor");
}

function miFuncion() {
    console.log("Mi primera funcion.");
}

miFuncion();


function sumar(n1,n2){
    let resultado = n1 + parseInt(n2);
    console.log("El resultado de la suyma es: ", resultado);
}


sumar(50,50);


function eventBlur(){
    console.log("Evento BLUR");
}


function eventFocus(){
    console.log("Evento FOCUS");
}

function eventKeyDown(){
    console.log("Eveto KEY DOWN");
}

function eventKeyUp(){
    console.log("Evento KEY UP");
}

function eventClick(){
    console.log("Evento CLICK");
}


function eventDobleCLick(){
    console.log("Evento DOBLE CLICK");
}

function eventChange(){
    console.log("Evento CHANGE");
}