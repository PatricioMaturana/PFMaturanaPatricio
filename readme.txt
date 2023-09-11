Mejoras aplicadas para el SEO del sitio, para esto se revisó lo siguiente:
1.	Cada pagina solo tenga una etiqueta <H1>.
2.	Que el uso de las etiquetas de encabezados o títulos, los tags <H> cumplan las normativas, el uso consecutivo sin saltarse la numeración.
3.	Que en todas las imágenes utilizadas tengan sus textos alternativos.
4.	Que las etiquetas <title> en el sitio tengan información adecuada de cada página.
5.	Que la etiqueta <meta> para el atributo “name” y el valor “description” tenga una descripción breve para cada página del sitio.
6.	Que la etiqueta <meta> con el atributo “name” y el valor “keywords” tengan las palabras claves en cada página del sitio.
7.	Se bajo el tamaño de las imágenes a través de TinyPGN componente que se habilito en VSC.
8.	Se verifica las imagenes que se utilizan y se quitan/ eliminan las no utilizadas, que solo ocupan espacio.

A demás de lo anterior en esta pre-entrega 3, se realizo lo siguiente:
1.	Se migro el sitio a SASS, si utilizando scss.
2.	Se ordeno el código creando una nueva estructura, lo siguiente:
	A.	Raiz: sigue la carpeta "pages" para las paginas html del sitio.
	B.	Raiz: sigue la carpeta "Imagen" para las imagenes que se utilizan en todo el sitio.
	C.	Raiz: sigue la carpeta "fuentes" para fuentes nuevas que se requieran en el sitio.
	D.	Raiz: se creo carpeta nueva "css", en donde se dejo el archivo de los estilos,  estilos.css (la tenia en la raiz anteriormente).
	E.	Raiz: se creo la carpeta scss, para las paginas de sass, la cual contiene lo siguiente:
		i.  Archivo main.scss contiene todos los vinculos @import, para los llamados de los archivos scss y unirlos.
		ii. Archivo _base.scss el cual contiene estilos base que afecta todas las paginas.
		iii.Archivo _layouts.scss, contiene estilos que se utiliza fuertemente a la estructura web básica.
		    Etiquetas header, body, footer, nav.
		 iv.Carpeta pages, contiene los archivos scss que contiene los estilos de cada pagina del sitio.
		    En esta carpeta igual esta el archivos _variables.scss, contiene las variables que se utilizaran en todo el sitio.
		  v.Se creo carpeta js, la cual contiene archivo javaScript. Si bien no esta pedido en la consigna, en el trabajo, pero se utilizo
		    para poder demostrar el uso de las variables a través de tema de fondo dark o light.
	F.	Raiz: Esta el archivo index.html.
	E.	Raiz: se creo el archivo readme.txt, en donde se describe parte de lo realizado.
3.	Se utilizo para las clases en sass anidaciones.
4.	Se busco mejorar el diseño del sitio, se aplico correcciones:
	A.	Pagina noticias, se cambio imagen ppal, se obtine mejor diseño.
	B.	Pagina noticias, se agrego bordes, se quitaron margenes entre la imagen y los parrafos buscando mejorar el diseño.
	C.	Pagina frases y citas, se retoca el diseño, se le da un toque más fino a la tipografia y se utiliza un borde menor buscando la mejor experiencia del usuario en la navegación.
5.	Se aplica deja un selector que permite ver pagina con diseñor light o dark.
	Para esto se tuvo que mejorar la experiencia del sitio, y para conseguir el saber que colores aplicar se aplico el uso de variables.
6.	Se utilizo github para guardado de versiones.





