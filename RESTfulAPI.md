| Method            | /products   |/products/{id} | 
|-------------------|-------------|---------------|
| GET               |   Get list  |    Get        |
| PUT               | Replace     |Update/Replace | 
| PATCH             | No Apply    |     Update    | 
| POST              | Create      | No Apply      |
| DELETE            | Delete      | Delete        |

# Get
>Obterner
# Put
>Modificar/Actualizar =>  Cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado. Requiere todos los atributos.
# Patch
>Modificar/Actualizar => actualiza valores especificos, actualizaciones parciales
# Post
>Crear
# Delete
>Eliminar

# SRP Single Responsability principle
Se debe organizar para que cada parte o archivo del codigo sea especifica en lo que controla. 

# Middlewares 
* Funcionan como pipes
* Validar datos
* Capturar errores
* Validar permisos
* Controlar accesos

``` js
function (req, res, next){
  if(something){
    res.send('end')
  }else{
    next();
  }
}
``` 
