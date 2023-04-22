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