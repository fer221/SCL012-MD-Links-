# Markdown Links

Preámbulo

Markdown es un lenguaje de marcado que facilita la aplicación de formato a un texto, empleando una serie de caracteres de una forma especial. En principio, fue pensado para elaborar textos cuyo destino iba a ser la web con más rapidez y sencillez que si estuviésemos empleando directamente HTML. Y si bien ese suele ser el mejor uso que podemos darle, también podemos emplearlo para cualquier tipo de texto, independientemente de cual vaya ser su destino. Es muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

md-links es una herramienta que se crea con la finalidad de leer y analizar archivos en formato Markdown, para verificar los links que contiene y reportar estadísticas. Esta librería se ha implentado usando Node.js.

![mdl](https://maxcdn.icons8.com/iOS7/PNG/512/Programming/markdown-512.png)


## Objetivos
El objetivo de este proyecto es aprender a crear nuestra propia librería (o biblioteca - library) en JavaScript.

## Objetivos de aprendizaje
Los objetivos de aprendizaje a reforzar son:

### Javascript

- Uso de callbacks
- Consumo de Promesas
- Node
- Sistema de archivos
- Crear modules
- Npm scripts

## Diagrama de Flujo
![alt](https://i.imgur.com/AL3O3gM.jpg)

## Consideraciones generales
- La librería está implementada en JavaScript para ser ejecutada con Node.js.


### Git y Github

*  Organización en Github

### Node

*  Sistema de archivos 
*  Crear módulos 
*  Instalar y usar módulos 
*  Npm scripts
*  CLI (Command Line Interface - Interfaz de Línea de Comando)

 ## Modo de uso
- mdLinks(path, options)
- Argumentos
(path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, se resuelve como relativa al directorio desde donde se invoca node)
- Options: Un objeto con las siguientes       propiedades:
       validate: Booleano que determina si se desea validar los links encontrados.
       stats: Conteo de los links encontrados.
## CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación se ejecuta de la siguiente manera a través de la terminal:

![look](https://i.imgur.com/YMAj5La.png)
 
 En este paso estamos dando un archivo a la aplicación. Ahora hay que ejecutarla con ENTER

 ![read](https://i.imgur.com/4eAuMbE.png)

  Aqui esta recoriendo el archivo y se ven los link que tiene. 

  ![v](https://i.imgur.com/ivcf67B.png)

  Con la option (VALIDATE) validamos los link del archivo

  ![s](https://i.imgur.com/x6fc0wa.png)

  Con la option (STATS) entrega el resultado del total de link del archivo.

  ![st](https://i.imgur.com/MeD7NZX.png)

  Cuando queremos saber cuantos link y ademas saber si son validos, tenemos que ejecutar las dos opciones juntas.