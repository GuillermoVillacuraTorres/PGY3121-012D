from django.shortcuts import render
from .models import *

# Create your views here.


def cargarInicio(request):
    productos = Producto.objects.all()
    producto_perros = Producto.objects.filter(categoria_id=1)
    producto_gatos = Producto.objects.filter(categoria_id=2)
    return render(request,"inicio.html",{"prod" : productos, "prod_dogs":producto_perros, "prod_cats":producto_gatos})


def cargarAgregarProducto(request):
    return render(request, "agregarProducto.html")