# LMSGI-07. Página web de noticias.
## Autor: Sebastián Marqués Pardo.
### Previsualización del proyecto: https://rawgit.com/SebasMTX/Web-noticias/master/index.html
#### Especificaciones.
Especificaciones del cliente:
    La maquetación (layer design) debe dejar 300 px de espacio a la derecha de la pantalla para publicidad si la pantalla es suficientemente ancho. Todo otro diseño es libre.
    Para dispositivos móviles, la publicidad irá fijada en la parte inferior o bien sólo aparecerá en la parte superior (y desaparecerá al hacer scroll) con un alto de 90px. Puedes elegir la opción. Todo otro diseño es libre.
    Los datos son: título (entorno a 8 palabras), imgbig (url al json, imagen en la carpeta), imgmid (url al json, imagen en la carpeta), descripción (mínimo de 300 caracteres), fecha y hora (datetime) .
    Todas las noticias deben tener el mismo formato y mostrar los datos especificados de forma elegante a todo dispositivo.

tareas:
    Realiza la maquetación del proyecto. Entrega un breve documento con el análisis y la planificación al README.md (valen fotos de esquemas del cuaderno).
    (Hasta 2 puntos)
    Presenta news.html con 3 noticias (ya escritas en html, no cargar con js) y almacena 6 noticias más en dos ficheros, fecha / 1.json fecha / 2.json para ser cargadas con js.
    (Hasta 2 puntos)
    Codifica news.js en jQuery para hacer: "botón cargar más noticias" y "scroll bottom" que, al ser activado cualquiera de ellos, haga una carga y presentación de más datos (hasta dos veces 1.json, 2.json )
    (Hasta 1 punto)
    Incluye rss.xml (especificado en el tema 6)
    (Hasta 1 punto)
    Codifica news1.html y news2.html, páginas que corresponden a las dos primeras noticias (últimas publicadas). Cuando hacemos clic en la noticia 1 de news.html nos va a news1.html, cuando hacemos clic en la noticia 2 de news.html nos va a news2.html (seguir no tiene sentido, esta tarea se automatiza con código de servidor ).
    (Hasta 1 punto)
    La plantilla o página de ver una sola noticia news1.html (news2.html es idéntica) debe contener una imagen y un vídeo de youtube responsive (ver: http://fpadistancia.caib.es/mod/page/view.php ? id = 64.319)
    (Hasta 1 punto)
    Cada página debe contener las etiquetas meta (con open graph) para compartir título, descripción, imagen (grande), nombre de la aplicación y url de la página.
    (Hasta 1 punto)

Hasta + 2 puntos: acabado final (o dicho de otra forma: cumplir las especificaciones del cliente o dar soluciones elegantes alternativas)

Para realizar el proyecto Lunar Landing se debe desarrollar una aplicación web según el siguiente _StoryBoard_:  
![imagen HTML](storyboard.jpg)  
El objetivo es crear una aplicación web similar (diversas páginas web: _.html, css, JavaScript_ e imágenes), documentando todo el proceso en el presente _README.md_.
#### Desarrollo de la práctica:
En primer lugar se han creado tres archivos de texto plano, modificando sus extensiones a html para que sean las tres páginas que serán enlazadas y servirán para la práctica. Las tres páginas son:
 * _inicio_html_. Que servirá como página principal y contendrá los elementos del _Lunar Landing_.
 * _creditos.html_. En ésta página se relacionarán las webs y lugares de donde se han obtenido las imágenes y el apoyo para la tarea. 
 * _intrucciones.html_. Se realizará una breve descripción del juego y sus controles.

#### _CSS_. Argumentaciones técnicas y/o estéticas de las páginas creadas.
 
 Para la aplicación del estilo se han utilizado dos hojas css. Se hará uso de cada una dependiendo del tamaño de pantalla del dispositivo utilizado (_d.css_ y _m.css_), ambas se hallan referenciadas en la etiqueta _link_ del _html_.
  
#### Añadido JavaScript y adaptaciones del proyecto.

Mediante el uso de JavaScript se deberá lograr que la nave descienda hacia la superficie lunar y, activando los motores, controlar su descenso para que en el momento del aterrizaje no lo haga superando una velocidad determinada.

Pasos seguidos en la adaptación:

  * Se incorpora al proyecto el esqueleto conteniendo las instrucciones en JavaScript aportado por el tutor de la asignatura.
  * Incluir en el proyecto nuevos elementos gráficos.
    * Imagen de un planeta tierra.
    * imagen de un sol.
    * Nueva imagen de montañas lunares tras el suelo lunar. (Difuminadas para dar sensación de profundidad)
  * Añadir el efecto de fuego a la turbina del motor.
    * Nueva imagen para el fuego de la turbina en html.
    * En css se escala correctamente y se oculta para que sólo aparezca cuando se active el motor.
    * En js, en las funciones encender y apagar motor se referencia la imagen para que se muestre cuando se requiere (Al pulsar una tecla o clicando sobre la pantalla).
  * Añadir botones para dispositivo móvil.
    * Botones de encendido de motor, pausa y reinicio. Éstos botones se deberán ocultar en caso de utilizarse un dispositivo de pantalla pequeña, pudiendo, no obstante visualizarse a demanda del jugador. 
  * Adaptar el diseño a versiones móviles.
    * Con la ayuda del inspector de Chrome se realizan los ajustes en el css para móvil y dar un correcto visionado en cualquier dispositivo.
  * Corregir altitud ya que aumenta en lugar de disminuir cuando se acerca al planeta.
    * Definidas nuevas variables para modificar la altitud.
       * Variable y2: acumulará el cálculo de la altitud.
       * Variable alt: acumulará y mostrará el resultado del cálculo en la función  moverNave
  * Añadir función de finalización del juego.
    * Se crea la nueva función (finjuego), definiendo como errónea toda velocidad de impacto superior a 7.
    * Se define el gif que se mostrará sustituyendo a la nave si el vehículo impacta (naveKaput.gif).
    * Se crea en html (oculta en css) una pantalla de información de fin de juego (gameOver), vinculándola también en la función para que se muestre al finalizar.
    * Se añade un contador de intentos.
    * Se crea en html (oculta en css) una pantalla de información en caso de conseguir aterrizar el módulo (victoria). Se vincula a la función con un bucle para mostrarla en caso de que el resto de condiciones no se cumplan.
    * En ambas pantallas de información se añade un botón que permite reiniciar el juego.
  * Añadir función de reinicio.
    * Se crea la nueva función (reinicio) para que vuelva a empezar el juego tras finalizar (victoria o gameOver).
  * Modificar pantallas de instrucciones y créditos para que varíen en versiones móviles.
    * Adaptado css.
  * Actualizar Github con la nueva versión de Lunar Landing.
  * Crear nueva Branch para minify.
    * Modificados css y js adaptándolos a minify.
    * Actualizar Branch minify con el nuevo código.
    * Enlace para previsualización del proyecto Minify: https://rawgit.com/SebasMTX/LunarLanding/Minify/inicio.html
