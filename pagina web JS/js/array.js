let miArray = [1,2,3,"Hola",10, true];


miArray.push(100);

miArray.unshift(500);


//console.log(miArray);


for (const i of miArray) {
   //console.log(i);
}


let array = [];
function agregar(){
    let txt = document.getElementById("txtData").value;
    array.push(txt);
    console.log(array);
}


let arrayDos = [
    {id:1,nombre:"Metropolitana"},
    {id:2,nombre:"Maule"}
];



arrayDos.push({id:3,nombre:"Atacama"});

for (const k of arrayDos) {
    console.log(k.nombre);   
}


console.log("Posicion",arrayDos[1].nombre);
//console.log(arrayDos);


//console.log("FILTRO: ", arrayDos.filter(e => e.id == 1 && e.id == 3));


function cargarRegion(){
    const select = document.getElementById("cmbRegion");

    for (const i of arrayDos) {
        const option = document.createElement("option");
        option.value = i.id;
        option.textContent = i.nombre;
        select.appendChild(option);
    }

    consumoApi();
}


function consumoApi(){
    fetch('https://mindicador.cl/api')
        .then(response => response.json())
        .then(info => {
            let dolar = document.getElementById("resultDolar");

            dolar.innerHTML += info.dolar.valor;

        })
}