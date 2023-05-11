$(document).ready(function(){
    
})

$(function(){
    //alert("Bienvenidos!");

    $("p").css({"background-color": "blue"});
    $(".first").css({"background-color": "red"});
    $("#tercero").css({"background-color": "pink"});
})


$("#ocultar").mouseleave(function(){
    //$("#quinto").hide();
    //$("#quinto").fadeOut();
    $("#quinto").slideUp();
})

$("#mostrar").mouseleave(function(){
    //$("#quinto").show();
    //$("#quinto").fadeIn();
    $("#quinto").slideDown();
})


$(function(){
    $("#miFormulario").validate({
        rules:{
            txtRut:{
                required:true,
                minlength:10
            },
            txtNombre:{
                required:true,
                minlength:10
            },
            txtApellido:{
                required:true,
                minlength:10
            },
            txtCorreo:{
                required:true,
                email:true
            }
        },
        messages:{
            txtRut:{
                required: "El rut es un campo obligatorio.",
                minlength: "El minimo de caracteres es 10."
            },
            txtCorreo:{
                required:"El correo es un campo obligatorio.",
                email:"El formato del correo no es valido."
            }
        }
    })
})





