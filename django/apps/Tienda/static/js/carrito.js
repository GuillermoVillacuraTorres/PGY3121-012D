let btnCarrito = document.getElementById("btnCarrito");

btnCarrito.addEventListener('click', function(){
    arrayProducto = [
        {
            sku:1,
            nombre:"Comida de perro",
            precio:500,
            cantidad:50
        },
        {
            sku:2,
            nombre:"Comida de gato",
            precio:1500,
            cantidad:20
        },
        {
            sku:3,
            nombre:"Comida de tortuga",
            precio:9000,
            cantidad:1
        },
    ]

    let token = document.getElementsByName("csrfmiddlewaretoken")[0].value;

    fetch('/carrito',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':token
        },
        body:JSON.stringify(arrayProducto)
    })

})