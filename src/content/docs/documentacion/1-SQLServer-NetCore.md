---
title: SQL Server y .NET Core
description: Una guía de uso para exponer la documentación de Hidrosina. 
---



Anteriormente, Hidrosina como corporativo, ha utilizado la plataforma de .NET para el desarrollo de sus aplicaciones, como por ejemplo, sistemas de facturacion, soporte y la gestions de ciertos clientes. Por lo que, en este apartado daremos las bases para entender como utilizar y mejorar el desarrollo aportando las nuevas bases tecnologicas que nos permiten trabajar con herramientas como .NET, SQL Server, y que son compatibles con el desarrollo de sistemas embebidos.

## Constante Actualizacion.

Nosotros como coporativo nos encontramos, con diversas situaciones como la necesidad de actualizar nuestros sistemas, actualizar y refactorizar nuestro codigo y mejorar la experiencia del usuario. Estos puntos los trabajaremos con herramientas como .NET Core, SQL Server y herramientas del front-end como React para mejorar la experiencia del usuario.

## Tecnologías

Para dar inicio a este apartado, vamos a ver las tecnologias que utilizamos para dar la base y generar el estandar de desarrollo dentro de Hidrosina.

- .NET | C#
- SQL Server
- JSON 
- XML
 
  
### Back-End

Se comprende a alguien Fullstack cuando maneja varias tecnologias para la creacion de un proyecto completo en los cuales, se integren la interfaz de usuario, la base de datos, y toda la logica de negocios.

Por lo que se dividen varias tareas en dos grupos, el Frontend y el Backend, donde el Frontend es el que maneja la interfaz y el Backend maneja la base de datos y la logica de negocios.



## ORM con Entity Framework

```bash title="Usando scalfold de Entity Framework"
  Scaffold-DbContext "Server=DESKTOP-XXXXX;Database=NombreBaseDatos;User Id=sa;Password=tu_contraseña;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Context ApplicationDbContext -ContextDir Contexts -Force


```


## JSON y XML

Para la comunicacion de sistemas, hacemos uso de JSON y XML, que son formatos de texto que permiten la representacion de datos en forma de objetos, listas, diccionarios, etc.

JSON es un formato de texto que permite la representacion de datos en forma de objetos, listas, diccionarios, etc. 

```
{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}



```



Por otro lado, XML es un formato de texto que permite la representacion de informacion por medio de etiquetas, atributos, datos, etc.

```
<menu id="file" value="File">
  <popup>
    <menuitem value="New" onclick="CreateNewDoc()" />
    <menuitem value="Open" onclick="OpenDoc()" />
    <menuitem value="Close" onclick="CloseDoc()" />
  </popup>
</menu>

```


 
<!-- ## Referencias

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework -->





