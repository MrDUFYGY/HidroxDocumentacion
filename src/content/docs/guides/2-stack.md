---
title: Nuestro Stack
description: Una guía de uso para exponer la documentación de Hidrosina. 
---

Entendamos el Stack como un conjunto de tecnologías que utilizamos dentro de nuestro proyecto, como por ejemplo, el uso de .NET, SQL Server, para el desarrollo de aplicaciones web y APIs asi como tambien desarrollo de aplicaciones móviles y de escritorio. El uso de estas tecnologias nos permite acceder a una gran de recursos y poder resolver problemas de manera eficiente. 

## Nuestro "STACK" Tecnologico



Tomando en cuenta esto, podremos ver mas adelante como resolvemos problemas mediante el uso de librerias, frameworks, y otras alternativas para poder solvertar las dificultades y satifacer las necesidades que se presentan en el proyecto.

## Tecnologías

Dentro de proyectos del corporativo tenemos varios proyectos y proveedores, los cuales estan centralizados y pensados para ser desplegados en plataformas de produccion como Windows Server, por lo volteamos a ver la que tenga la mayor compatibilidad con nuestro Stack.

Podremos hacer uso de Frameworks, librerias o busquedas en internet, pero, lo que podemos ver como una constante en el desarrollo dentro del coporativo, encontraremos que utilizamos generalmente:

- .NET | C#
- SQL Server
- JavaScript 
- Htmt, CSS y Bootstrap
- JQuery
- Figma
- JSON 
- XML
 
  
## FullStack

Se comprende a alguien Fullstack cuando maneja varias tecnologias para la creacion de un proyecto completo en los cuales, se integren la interfaz de usuario, la base de datos, y toda la logica de negocios.

Por lo que se dividen varias tareas en dos grupos, el Frontend y el Backend, donde el Frontend es el que maneja la interfaz y el Backend maneja la base de datos y la logica de negocios.

## Frontend

Comencemos por el Front-End, el cual cumple con encasillar a todas las tecnologias encargadas de la creacion de interfaces y su interacccion con el Backend. En el caso de Hidrosina podremos ver que se centra en la creacion de Componentes reutilizables y que de manera modular, podemos mantener, mejorar e implementar en nuestros proyectos.

Para la realizacion de componentes reutilizables y de manera modular mantenemos el uso de JS, CSS y HTML con Bootstrap. En el caso de tener que realizar interfaces para usuarios y de tipo escritorio hacemos uso de ASP.NET combinando con Bootstrap y JQuery. Determinando que tipo de proyecto se trata, vamos a hacer uso tambien de ASPX como web forms o de Razor como web pages.

Manejamos ciertas librerias para el desarrollo de interfaces de usuarios, como:

- .NET
- Bootstrap
- JQuery
- AjaxTooltipHTML
- Tailwind (new - opcion para proyectos pequeños* o externos)
- Astro (new - proyectos pequeños)
- React (Componentes)

Tentativas a cambio u implentacion.
- Svelte


## Backend


Dentro de Hidrosina manejamos diversas soluciones para el contro de data o informacion, haciendo uso de diversas arquitecturas y tecnologia para poder mantener los sitemas en operacion, mantener pruduccion funcionando, la integridad de los datos y la seguridad de los sitemas, sin olvidar el mantenimiento de la infraestructura.

Para nosotros, es importante hacer uso de herramientas de desarrollo de bases de datos para su administracion y no depende siempre de un proveedor de servicios, por lo que tenemos que usar herramientas robustas, mantenibles y dificiles de que fallen.

Como tecnologia usamos:
- SQL Server (con SSMS y en desarrollo la version express **[Versiones: 2008, 2012, 2014, 2016, 2017, 2019]**)
- MongoDB (Checador)
- Cloudflare (Como elementos de CDN y barrera de seguridad)
- AWS (deprecated)
- Windows Server



## ORM

ORM es un mecanismo que permite la comunicación entre el sistema de datos y el código de aplicación. Concretamente para nuestros proyectos hacemos uso de Entity Framework, que es una librería de .NET que permite la comunicación entre el sistema de datos y el código de aplicación. Por medio de ella estamos capaz de realizar operaciones CRUD (Create, Read, Update, Delete) en la base de datos. 

- En el caso de tener que realizar operaciones de este tipo, y dependiendo de la version que manejamos hacemos uso de las siguientes librerias:

  - Entity Framework Core (API .NET CORE)
  - Entity Framework (.NET Framework "standard")
  - SqlClient (Solucion nativa para .NET Framework y .NET Core)
  - Linq (De acuerdo con el tipo y la version del proyecto)



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
