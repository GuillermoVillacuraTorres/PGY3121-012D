document.getElementById("valRut").style.display = "none";
document.getElementById("valNombre").style.display = "none";
document.getElementById("valApellido").style.display = "none";


function validarFormulario(){
    let rut = document.getElementById("txtRut").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;

    if (rut.length == 0) {
        document.getElementById("valRut").style.display = "inline";
        document.getElementById("txtRut").classList.add("is-invalid");
    }else{
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
        document.getElementById("valRut").style.display = "none";
    }


    if (nombre.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";
    }
    
    if (apellido.length == 0) {
        document.getElementById("valApellido").style.display = "inline";
        document.getElementById("txtApellido").classList.add("is-invalid");
    }else{
        document.getElementById("txtApellido").classList.remove("is-invalid");
        document.getElementById("txtApellido").classList.add("is-valid");
        document.getElementById("valApellido").style.display = "none";
    }


 /*    if (rut.length == 0) {
        alert("Debe ingrear su rut.");
        //18.402.429-2
        return;
    }
    if (nombre.length == 0) {
        alert("Debe ingrear su nombre.");
        return;
    }
    if (apellido.length == 0) {
        alert("Debe ingrear su apellido.");
        return;
    } */



}