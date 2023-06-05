from django.db import models

# Create your models here.

class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20)

    def __str__(self):
        txt = "Codigo: {0} - {1}"
        return txt.format(self.id_categoria,self.nombre)

class Producto(models.Model):
    sku = models.IntegerField(primary_key=True)
    precio = models.IntegerField()
    nombre = models.CharField(max_length=50)
    imagen = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=200)
    stock = models.IntegerField()
    fechaAgregar = models.DateField(auto_now_add=True)
    categoria_id = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        txt = "Codigo: {0} - Stock {1} - Precio {2} - Fecha {3}"
        return txt.format(self.sku,self.stock,self.precio,self.fechaAgregar)
