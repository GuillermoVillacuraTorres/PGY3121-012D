function crearStorage(){
    array = [
        {
            sku:1,
            nombre:"Comida de perro",
            precio:1000
        },
        {
            sku:2,
            nombre:"Comida de gato",
            precio:2000
        },
        {
            sku:656654816,
            nombre:"Juguete de perro",
            precio:5000
        },
        {
            sku:4,
            nombre:"Juguete de gato",
            precio:15000
        },
    ];

    
    let tamanoArray = new Blob([JSON.stringify(array)]).size;
    console.log("Tamaño del array en bytes: ",tamanoArray, "Elementos en el array", array.length);

    let cadenaString = JSON.stringify(array);
    localStorage.setItem("miPrimerStorage",cadenaString);
    //console.log("Creando storage", cadenaString);
}

function obtenerStorage(){
    let storage = localStorage.getItem("miPrimerStorage");
    let obj = JSON.parse(storage);
    console.log("Obteniendo storage",obj);
}

function eliminarStorage(){
    console.log("Eliminando storage");
    localStorage.removeItem("miPrimerStorage");
}

function eliminarUnoStorage(){
    let valor = document.getElementById("txtSku").value;
    let storage = JSON.parse(localStorage.getItem("miPrimerStorage"));
    let arrayTemporal = [];
    let filtro = storage.filter(e => e.sku == valor);
    console.log("Filtro", filtro);

    if (filtro.length == 0) {
        alert("El sku no es valido.")
    }else{
        for (const i of storage) {
            if (i.sku != valor) {
                arrayTemporal.push(i);
            }
        }
    
        console.log(storage);
        console.log("Array temporal",arrayTemporal);
        localStorage.setItem("miPrimerStorage",JSON.stringify(arrayTemporal));
        alert("Elemento eliminado!");
    }
}


function crearUnoStorage(){
    let sku = parseInt(document.getElementById("txtSku").value);
    let nombre = document.getElementById("txtNombre").value;
    let precio = parseInt(document.getElementById("txtPrecio").value);
    let storage = JSON.parse(localStorage.getItem("miPrimerStorage"));

    storage.push({sku:sku,nombre:nombre,precio:precio});
    localStorage.setItem("miPrimerStorage",JSON.stringify(storage));
}

