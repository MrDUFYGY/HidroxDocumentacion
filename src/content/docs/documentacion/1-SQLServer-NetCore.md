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
 
  

## Back-end

Inicialmente vamos a entender que el backend, se encargara de manejar la base de datos y la logica de negocio, los cuales mantendremos en servidores locales o la nube de acuerdo a las necesidades del proyecto.

Para el backend, es importante manejar diversas maneras de trabajar como la arquitectura de la aplicacion, como por ejemplo, MVC, Web API, etc. haciendo uso de herramientas que nos provee .NET standards como .NET Core, ASP.NET, ASP.NET Core, y elementos como el ORM que nos permite trabajar con el mapeo de datos de una manera mas eficiente, sin embargo, no olvidaremos el uso de herramientas como LINQ, SQL Client para acceder y manipulacion de los datos.



### .NET Standard

Cuando trabajamos con bases de datos, es importante entender que existen diversas maneras de trabajar con ellas, como por ejemplo, el utilizar Entity Framework, ADO.NET, LINQ, etc. para acceder y manipular los datos, esto generalmente viene apartir del .NET Framework y su especificacion .NET Standard, por loq ue podemos hacer uso de cualquier de estos.

### Entity Framework

Entity Framework es una libreria de .NET que nos aparte del standard de trabajo donde, podemos trabajar con las bases de datos haciendo operaciones CRUD (Create, Read, Update, Delete) apartir de una tabla dentro de la base de datos para luego generar el modelo de esta tabla, luego podemos trabajar con los datos de acuerdo a dos enfoques:

- Data Set: Es una coleccion de objetos que representan una tabla de la base de datos.
- Data Table: Es una coleccion de objetos que representan una tabla de la base de datos.
- Data Adapter: Es una clase que se encarga de comunicarse con la base de datos.



### ORM (Object Relational Mapping)

El ORM que utiliza .NET es Entity Framework, y este a su ves, cumple con el objetivo de mapear los datos de la base a objetos dentro de nuestra logica de negocios, mas en espeficifico podremos ver dos versiones del llamado ORM de Entity Framework donde el primero es el ORM de .NET Framework y el segundo es el ORM de .NET Core; sin embargo, ambos son compatibles con .NET Standard, y tiene por nombre Scalfold.

El Scaffolding es una herramienta que nos permite generar nuestros modelos de datos, el cual se ejecuta por medio de la creacion de modelos de EF y la ejecucion de comando de CLI, y, para comprender cual de los dos metodos es adecuado, sera apartir de las versiones de .NET Framework y .NET Core, en donde .Net Framework es la version contiene la posiblidad de usar EF6 y por otro lado .NET Core es la version que contiene EF Core. 




En el caso de .NET Core podemos mapear la base mediente un comando de CLI, para ello, debemos ejecutar el siguiente comando en la terminal de comandos dentro del directorio del modelo de conexion (Generalmente llamado DL_EF):


```bash title="Usando scalfold de Entity Framework"
  Scaffold-DbContext "Server=DESKTOP-XXXXX;Database=NombreBaseDatos;User Id=sa;Password=tu_contraseña;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Context ApplicationDbContext -ContextDir Contexts -Force


```
- Cadena de conexión: Proporciona tu cadena de conexión a la base de datos.
- Microsoft.EntityFrameworkCore.SqlServer: Especifica el proveedor para bases de datos SQL Server.
- OutputDir Models: Directorio donde se generarán las clases de entidad (carpeta Models en tu proyecto).
- Context ApplicationDbContext: Nombre del DbContext que se generará.
- ContextDir Contexts: Directorio donde se ubicará el archivo del contexto.
- Force: Sobrescribe cualquier archivo existente.


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





