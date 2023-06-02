from django.db import models

# Create your models here.

class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20)

class Producto(models.Model):
    sku = models.IntegerField(primary_key=True)
    precio = models.IntegerField()
    nombre = models.CharField(max_length=50)
    imagen = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=80)
    stock = models.IntegerField()
    fechaAgregar = models.DateField(auto_now_add=True)
    categoria_id = models.ForeignKey(Categoria, on_delete=models.CASCADE)


