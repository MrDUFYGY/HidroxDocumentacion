---
title: Guia para el Desarrollador 
description: Una guía de uso para exponer la documentación de Hidrosina. 

---



## El corporativo

En el corporativo de Hidrosina hemos tenido varios momentos en donde, el desarrollo de ciertas ideas o soluciones, nos han llevado a la idea de crear una solucion que pueda ser reutilizada en otros proyectos, por lo que hemos creado, diversas soluciones como una libreria de componentes reutilizables, que podemos usar en cualquier proyecto de Hidrosina. Tambien hemos creado una serie de guías para que los desarrolladores tengan un inicio ademas de tomar algunos pasos para poder empezar en el puesto de trabajo de Hidrosina. Temos en produccion y en funconamientos sistemas de facturacion, soporte, gestion, etc. los cuales son indispensables para el funcionamiento optimo de la empresa. Por lo que tomamos el objetivo de hacer software que nos ayude a automatizar procesos y mejorar la experiencia del usuario (trabajador o cliente).



Comencemos señalando los dos puntos pincipales de esa plataforma y como podemos sacarle provecho ademas de ponernos al tanto de todo lo basico para Hidrosina en el desarrollo.

1. Mantener la integridad de los datos, un enfoque hacia la seguridad, matenimiento y escalabilidad de los sistemas.
2. Procurar el uso de alternativas estables y robustas asi como mantenibles para hacer proyectos de alto nivel y mas consistentes.
3. Usar Herramientas de desarrollo para automatizar procesos, asi como buenas practicas que mantenga un codigo mas limpio y organizado.
4. Mencion de nuevas ideas, proyectos o soluciones que puedan ser reutilizados en otros proyectos.
5. Generar la documentacion de los proyectos, de manera que sea accesible y facil de entender.
6. Seguir el marco teorico de la empresa y mantenerse al tanto de las obligaciones como desarrolladore.


## Tecnologías

Dentro de proyectos del corporativo tenemos varios proyectos y proveedores, los cuales estan centralizados y pensados para un enfoque en el uso de .NET, SQL Server, para el desarrollo de aplicaciones web y APIs asi como tambien desarrollo de aplicaciones móviles y de escritorio.

Esto se logra mediante el desarrollo de las soluciones para las problematicas que se presentan en la empresa, por lo que hacemos uso de librerias, frameworks, y otras alternativas para poder solvertar las dificultades que se presentan en el proyecto.

- .NET
- SQL Server
- JavaScript
- CSS y Bootstrap
- HTML y MD
  


## Frontend

Para la realizacion de componentes reutilizables y de manera modular mantenemos el uso de JS, CSS y HTML con Bootstrap. En el caso de tener que realizar interfaces para usuarios y de tipo escritorio hacemos uso de ASP.NET combinando con Bootstrap y JQuery. Determinando que tipo de proyecto se trata, vamos a hacer uso tambien de ASPX como web forms o de Razor como web pages.

Manejamos ciertas librerias para el desarrollo de interfaces de usuarios, como:

- .NET
- Bootstrap
- JQuery
- AjaxTooltipHTML
- Tailwind (new - opcion para proyectos pequeños* o externos)
- Astro (new - proyectos pequeños)
- React (Componentes)


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




 
<!-- ## Referencias

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework -->
