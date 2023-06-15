const formulario = document.getElementById("formAgregarproducto");


formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    if (document.getElementById("txtSku").value.length == 0) {
        alert("Debe ingresar un codigo de producto.");
    }else{
        this.submit();
    }

})