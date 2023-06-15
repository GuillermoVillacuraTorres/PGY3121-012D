from django.shortcuts import render, redirect
from .models import *

# Create your views here.


def cargarInicio(request):
    productos = Producto.objects.all()
    producto_perros = Producto.objects.filter(categoria_id=1)
    producto_gatos = Producto.objects.filter(categoria_id=2)
    return render(request,"inicio.html",{"prod" : productos, "prod_dogs":producto_perros, "prod_cats":producto_gatos})


def cargarAgregarProducto(request):
    categorias = Categoria.objects.all()
    productos = Producto.objects.all()

    return render(request, "agregarProducto.html",{"cate":categorias,"prod":productos})



def agregarProducto(request):
    #print("AGREGANDO PRODUCTOS A LA BBDD",request.POST)
    v_sku = request.POST['txtSku']
    v_precio = request.POST['txtPrecio']
    v_nombre = request.POST['txtNombre']
    v_imagen = request.FILES['txtImagen']
    v_descripcion = request.POST['txtDescripcion']
    v_stock = request.POST['txtStock']

    v_categoria = Categoria.objects.get(id_categoria = request.POST['cmbCategoria'])

    Producto.objects.create(sku = v_sku, precio = v_precio, nombre = v_nombre,imagen = v_imagen,descripcion = v_descripcion,stock = v_stock, categoria_id = v_categoria)


    return redirect('/agregarProducto')



def cargarEditarProducto(request,sku):
    producto = Producto.objects.get(sku = sku)
    return render(request,"editarProducto.html",{"prod":producto})