Mejoras aplicadas para el SEO del sitio, para esto se revisó lo siguiente:
1.	Cada página solo tenga una etiqueta <H1>.
2.	Que el uso de las etiquetas de encabezados o títulos, los tags <H> cumplan las normativas, el uso consecutivo sin saltarse la numeración.
3.	Que en todas las imágenes utilizadas tengan sus textos alternativos.
4.	Que las etiquetas <title> en el sitio tengan información adecuada de cada página.
5.	Que la etiqueta <meta> para el atributo “name” y el valor “description” tenga una descripción breve para cada página del sitio.
6.	Que la etiqueta <meta> con el atributo “name” y el valor “keywords” tengan las palabras claves en cada página del sitio.
7.	Se bajo el tamaño de las imágenes a través de TinyPGN componente que se habilito en VSC.
8.	Se verifica las imágenes que se utilizan y se quitan/ eliminan las no utilizadas, que solo ocupan espacio.

A demás de lo anterior en esta pre-entrega 3, se realizó lo siguiente:
1.	Se migro el sitio a SASS, si utilizando scss.
2.	Se ordeno el código creando una nueva estructura, lo siguiente:
	A.	Raíz: sigue la carpeta "pages" para las páginas html del sitio.
	B.	Raíz: sigue la carpeta "Imagen" para las imágenes que se utilizan en todo el sitio.
	C.	Raíz: sigue la carpeta "fuentes" para fuentes nuevas que se requieran en el sitio.
	D.	Raíz: se creó carpeta nueva "css", en donde se dejó el archivo de los estilos,  estilos.css (la tenía en la raíz anteriormente).
	E.	Raíz: se creó la carpeta scss, para las páginas de sass, la cual contiene lo siguiente:
		i.  Archivo main.scss contiene todos los vínculos @import, para los llamados de los archivos scss y unirlos.
		ii. Archivo _base.scss el cual contiene estilos base que afecta todas las páginas.
		iii.Archivo _layouts.scss, contiene estilos que se utiliza fuertemente a la estructura web básica.
		    Etiquetas header, body, footer, nav.
		 iv.Carpeta pages, contiene los archivos scss que contiene los estilos de cada página del sitio.
		    En esta carpeta igual está el archivos _variables.scss, contiene las variables que se utilizaran en todo el sitio.
		  v.Se creo carpeta js, la cual contiene archivo javaScript. Si bien, no está solicitado para el trabajo, se utilizo
		    para poder demostrar el uso de las variables a través de tema de fondo dark o light.
	F.	Raíz: Esta el archivo index.html.
	E.	Raíz: se creó el archivo readme.txt, en donde se describe parte de lo realizado.
3.	Se utilizo para las clases en sass anidaciones.
4.	Se busco mejorar el diseño del sitio, se aplicó correcciones:
	A.	Pagina noticias, se cambió imagen ppal, se obtiene mejor diseño.
	B.	Pagina noticias, se agregó bordes, se quitaron márgenes entre la imagen y los párrafos buscando mejorar el diseño.
	C.	Pagina frases y citas, se retoca el diseño, se le da un toque más fino a la tipografía y se utiliza un borde menor buscando la mejor experiencia del usuario en la navegación.
5.	Se aplica deja un selector que permite ver página con diseñor light o dark.
	Para esto se tuvo que mejorar la experiencia del sitio, y para conseguir el saber que colores aplicar se aplicó el uso de variables.
6.	Se utilizo github para guardado de versiones.
7.	Este es el repositorio público del proyecto en github:
	https://github.com/PatricioMaturana/PreEntrega3MaturanaPatricio.git
8.	Este es el GitHub Pages:
	https://patriciomaturana.github.io/PreEntrega3MaturanaPatricio/
