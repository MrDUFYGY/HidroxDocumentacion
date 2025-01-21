---
title: SQL Server
description: Una guia para indroducir al usuario a la instalación de SQL Server.
---

## Introduccion

SQL Server es un sistema de gestión de bases de datos relacionales y multidimensional. Es un producto de Microsoft, desarrollado por Microsoft SQL Server.

Como tecnologia de bases de datos, podemos encontrar una gran cantidad de aplicaciones o software (gestores de bases de datos) los cuales tienen capacidad de interactuar con SQL, generando un lenguaje de consulta el cual se llama Tansaction SQL (T-SQL).


### Instalación de SQL Server

Para instalar SQL Server, deberemos estar enterados que existen diversas versiones para trabajar, por lo que vamos a ver que podremos intalar diversas versiones de SQL Server y trabajar con ellas en diversos entornos.


#### Instalación de SQL Server Express

La instalación de SQL Server Express es la opción más sencilla y es la que vamos a usar en este caso de ejemplo, posteriormente veremos el proceso y las limitaciones de esta opcion y que alternativas existen, como el uso de SQL Server Developer Edition o SQL Server Standard Edition.

Nota: Es importante tener en cuenta que usaremos versiones de desarrollo o bien, la version express que nos ayuda a desarrollar nuestros proyectos de prueba, pero al mismo tiempo, podemos usar versiones estables de producción en pequeña escala, por lo tanto, tener en conocimiento el hecho de que haremos uso de la base de datos y su gestor de bases de datos que se llama SQL Server Management Studio. 

Estos elementos que queremos instalar normalmente vienen en un paquete, llamado service pack, el cual contiene componentes para el manejo y gestion asi como la base de datos y el servidor de SQL Server.


Ya con el conocimiento en que es lo que instalaremos, haremos uso de las instrucciones y referencias para que guiarnos en la instalacion y primeros pasos dentro del entorno de SQL Server.

1. Abrir el navegador y ir a la siguiente dirección: https://www.microsoft.com/es-es/sql-server/sql-server-downloads
2. Buscar la opción de instalación de SQL Server Express y hacer click en el botón de descarga.
3. Una vez descargado, ejecutar el instalador y seguir las instrucciones del mismo.

Es importante tener en cuenta las versiones, ya que nosotros generalmente usamos bases de datos en la version 2017 o 2012 en ciertos casos, sin embargo, podemos hacer uso de versiones 2019 o 2022 siempre que estemos en entornos donde sea posible y que el servidor de produccion mantenga la version deseada.


En el caso que nuestra base de datos, no sea funcional o bien, queramos usar otra base de datos en el mismo gestor, muchas veces podemos hacer la instalacion de la ultima version de SQL Server Management Studio independientemente de la base que usaremos. 

LINK

Para "obtener" la base de datos y trabajar en ella, podremos ver la siguiente pagina para poder descargar diversas versiones de SQL Server DB y no como tal el gestor de bases de datos.

LINK

## Referecias

- Lectura [Acerca de sql](https://learn.microsoft.com/en-us/troubleshoot/sql/releases/download-and-install-latest-updates) in the Diátaxis framework