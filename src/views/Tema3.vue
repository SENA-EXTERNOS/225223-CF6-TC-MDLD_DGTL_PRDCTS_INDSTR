<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Software] para modelado libre

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img3_1.png', alt='foto de una mujer tomando alguna bebida y trabajando en el computador en un software de modelado libre')
      .col-lg-6
        p(data-aos="fade-down") Las opciones de modelado de forma libre se usan, por lo general, para crear un diseño más llamativo y complejo desde uno paramétrico existente al que se le puede aplicar una de las cinco formas libres básicas: caja, esfera de malla cuadrada, cilindro, toroide y esfera.
        p(data-aos="fade-down") El diseño de objetos 3D con alto grado de modelado es bastante dispendioso a comparación de las formas de diseño convencional, por eso, estas herramientas de modelado libre brindan un método alterno que se manipula directamente.  Cabe anotar que existen ayudas de #[em hardware] para este tipo de diseño, como los dispositivos hápticos.  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") A continuación, se presentan las herramientas de modelado libre. 
    
    ImagenInfografica.color-primario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img3_2.png', alt='Imagen de infografia sobre software para modelado en forma libre')                    

      .tarjeta.p-3(x="10%" y="98%" numero="1")(style="background-color:#D2E1F1;color:#12263F")
        .h5.mb-2 Caja de forma libre
        p Permite agrandar o reducir la malla cuadriculada dependiendo de la complejidad del modelado a realizar.

      .tarjeta.p-3(x="30%" y="98%" numero="2")(style="background-color:#D2E1F1;color:#12263F")
        .h5.mb-2 Plano de forma libre
        p Crea planos paralelos a la cara donde se quiere cambia la geometría.

      .tarjeta.p-3(x="50%" y="98%" numero="3")(style="background-color:#D2E1F1;color:#12263F")
        .h5.mb-2 Cilindro de forma libre
        p Modifica los parámetros de la revolución para cambiar la forma del cilindro.
      
      .tarjeta.p-3(x="70%" y="98%" numero="4")(style="background-color:#D2E1F1;color:#12263F")
        .h5.mb-2 Toroide de forma libre
        p Cambia la forma de la figura base usando herramientas de revolución o barrido.

      .tarjeta.p-3(x="90%" y="98%" numero="5")(style="background-color:#D2E1F1;color:#12263F")
        .h5.mb-2 Esfera de malla cuadrada de forma libre
        p Deformar el objeto 3D de base (esfera), halando los puntos de la malla que se quieren cambiar.
        p Información extraída de (Autodesk, 2020).
    
    separador

    .row.justify-content-center.align-items-center
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 3.1	 Modelado basado en superficies.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img3_3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Una superficie es, básicamente, un límite que separa dos áreas en un espacio. Un ejemplo de esta definición podría ser la tela de un globo aerostático que separa el aire caliente del frío. Las superficies son útiles para algunos procesos de diseño, como la creación de objetos con formas y curvas complejas. En otras palabras, el modelado de productos se puede realizar utilizando cuerpos delgados (láminas) que se asemejan a superficies.

    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #e8e8e8")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center 
          .col-md-6.mb-4.mb-md-0
            h4 Superficies
            p La ventaja de utilizar superficies es que, al no tener espesor, solo hay que preocuparse por la forma exterior de la pieza, no por su interior o volumen, lo cual facilita el trabajo. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_4.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Modelado de superficies
            p Es importante reconocer la diferencia entre el modelado de sólidos y el modelado de superficies; y tener una visión clara de cuándo usar cada uno de estos métodos.
            p En el modelado de superficies, las curvas controlan el modelo, mientras que en el de sólidos lo hacen las caras. Comprender la secuencia de las operaciones de modelado de superficies es importante para crearlas y editarlas.  


          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_5.svg', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Procedimiento general para crear superficies:
            ul.lista-ul(style="color:#FF9500")
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Crear dibujos de contorno
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Crear sólidos con superficies periféricas.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Utilizar superficies como elementos de corte para sólidos u otras superficies.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Construir nuevas superficies a partir de otras creadas previamente.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Desarrollar curvas 3D usando geometría 2D.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Desarrollar superficies usando curvas 3D.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Agregar funciones apropiadas basadas en sólidos.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Ajustar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_6.svg', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Superficies sólidas
            p En algunos casos, puede ser difícil distinguir cuándo se debe usar una superficie, por ello, es importante distinguir las ventajas y desventajas del uso de estas herramientas.
            p Una de las ventajas de los sólidos es su forma prismática, se puede crear con una simple extrusión o rotación, funciones que dan como resultado múltiples productos a partir de formas geométricas simples y, por lo tanto, mediante operaciones básicas. Para poder utilizar entidades se deben cumplir ciertos requisitos:
            ul.lista-ul(style="color:#FF9500")
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Los límites entre caras deben ser completamente uniformes sin ninguna separación.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Una entidad consiste en una unidad.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Todas las caras normales apuntan en la misma dirección (distinguir entre interior y exterior).
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_7.svg', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Ventajas de una superficie
            p Por otro lado, la principal ventaja de las superficies es a la vez su principal debilidad: no contienen espesor, es decir que el trabajo debe centrarse en la forma exterior y no en el volumen del bloque.
            p Se pueden crear formas y volúmenes pieza por pieza o cara a cara, lo que permite un control extremo sobre la entidad terminada, la desventaja del proceso cara a cara es que es muy lento y engorroso, pero con él se puede lograr cualquier forma deseada.
            p Usar superficies para generar operaciones sólidas es un recurso utilizado cuando se trata de obtener formas complejas. Por ejemplo, las herramientas para trabajar con superficies que se pueden encontrar en la barra de herramientas de #[em Solidworks].
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_8.svg', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Las superficies se pueden utilizar de diferentes maneras:
            ul.lista-ul(style="color:#FF9500")
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Seleccionar aristas y vértices para usar como curvas guía y rutas de barrido.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Utilizarlas en ciertas operaciones sólidas como el corte.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Crear sólidos a partir de diferentes modelos y superficies cosidas para formar un volumen cerrado.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Sustituir las caras de algunos sólidos por superficies.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_9.svg', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-2.mb-md-0
            h4 Conjunto de superficies 
            p Los conjuntos de superficies son geometrías que no tienen espesor y se conectan entre sí a través de la herramienta #[em Knit Surface], en el caso de la herramienta #[em Solidworks], formando así una sola pieza que luego se puede convertir en un sólido.
            p Un conjunto de superficies significa la unión de varias de ellas para moldear diversas formas:
            ul.lista-ul(style="color:#FF9500")
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Un solo lado.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Multifase. 
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Superficies cosidas.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Superficie redonda.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Superficies recortadas y extendidas.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Superficies importadas.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Superficies planas y medianas.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small Superficies extruidas, rotadas, recubiertas o creadas por cualquier otro tipo de operación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_10.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-2.mb-md-0
            p El modelado a través de superficies se reduce a operaciones muy básicas que pueden dominarse lo suficiente para obtener resultados. Algunas consideraciones a la hora de trabajar con modelado superficial:
            ul.lista-ul(style="color:#FF9500")
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small #[b Pegado de superficies:] al unir superficies pueden surgir ciertas complicaciones, especialmente a la hora de mantener su continuidad para que no exista separación ni diferencia entre ellas. El manejo se complica cuando se trata de unir un conjunto de más de 2 superficies.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small #[b Métodos de tratamiento de superficies:] existen dos métodos básicos de tratamiento de superficies, utilizando secciones verticales, mediante 2 o 3 vistas o croquis del objeto, o a través de una serie de secciones paralelas. Decidir sobre una opción u otra hace que el trabajo sea más fácil o difícil.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small #[b Objetos cóncavos/huecos:] estos son objetos atípicos que generalmente solo están disponibles con tratamientos superficiales, por lo que a veces su geometría puede ser compleja y acarrean ciertos problemas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_11.svg', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-2.mb-md-0
            ul.lista-ul(style="color:#FF9500")
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small #[b Relieves y muescas:] las protuberancias y muescas se utilizan a menudo como elementos decorativos. Insertarlos en superficies lisas puede aportar un valor añadido a nuestros objetos, pero al mismo tiempo aumenta la carga de trabajo y puede complicarse.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small #[b Asas:] cada vez existen más productos en el mercado con asas cada vez más ergonómicas y de formas más complejas.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small #[b Decisión de usar sólidos o superficies:] siempre que sea posible, es más fácil usar sólidos, la elección es muy sencilla.
              li
                i.fas.fa-solid.fa-stop
                p.mb-0.text-small #[b Trabajar superficies y sólidos al mismo tiempo:] es la situación ideal, ya que siempre habrá partes de un objeto que se pueden trabajar con una técnica u otra, por lo que hay que aprender a combinarlas para lograr un buen producto.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img3_12.svg', alt='')
    
    separador

    .row.justify-content-center.align-items-center.mb-5
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 3.2	 Visualización o renderizado
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-down") La representación 3D involucra el proceso de creación de una imagen bidimensional a partir de un modelo 3D. Estas imágenes se generan a partir de conjuntos de datos que indican qué color, textura y material tiene un objeto en la imagen.  Los orígenes del renderizado se remontan a 1960, cuando William Fetter creó una representación de un piloto para calcular el espacio que necesitaba en la cabina. Más tarde, en 1963, mientras estaba en el MIT, Ivan Sutherland creó el primer programa de modelado 3D #[em Sketchpad], un trabajo seminal al que llamó "el padre de los gráficos por computadora".  
        .cajon.color-acento-botones.p-4(data-aos="fade-down")          
          p En pocas palabras, el renderizado es el proceso de generar una imagen o video a partir de un modelo 3D. Para ello se necesita un programa de modelado 3D y un motor de renderizado que haga los cálculos necesarios para ajustar las imágenes. 
        
      .col-lg-5        
        figure
          img(src='@/assets/curso/temas/tema3/img3_13.svg', alt='')
    
    
    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/img3_14.svg", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-2.color-acento-contenido(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="En principio")
              .col-10
                p.mb-0 En principio, el renderizado 3D es similar a la fotografía. Por ejemplo, un programa de renderizado 3D compone una imagen apuntando la cámara a un objeto, por lo que la iluminación digital adquiere vital importancia en la creación de representaciones detalladas y realistas.  A lo largo del tiempo se han desarrollado varias técnicas de renderizado, sin embargo, el objetivo de este proceso en 3D es capturar una imagen basada en cómo la luz golpea un objeto, como en la vida real.
            .row.justify-content-center.mb-4(titulo="Uno de los primeros métodos")
              .col-10
                p.mb-0 Uno de los primeros métodos de renderizado fue la rasterización, que trataba un modelo como una malla poligonal. Estos polígonos se componen de vértices que contienen información como la posición, la textura y el color, los cuales luego de ser proyectados en un plano perpendicular a la perspectiva (es decir, la cámara), actúan como límites, por lo que todos los demás píxeles se rellenan con el color apropiado. Imagine dibujar una imagen creando primero un contorno para cada color, de eso se trata la representación de trama.
            .row.justify-content-center.mb-4(titulo="La rasterización")
              .col-10
                p.mb-0 La rasterización es una forma rápida de renderizar. Esta técnica todavía se usa ampliamente, especialmente para la representación 3D en tiempo real (por ejemplo, en juegos de computador, simulaciones e interfaces gráficas interactivas). Más recientemente, el proceso de renderizado se ha mejorado con una mayor resolución y #[em antialiasing], que permite suavizar y difuminar los bordes de los objetos junto con los píxeles circundantes.
    
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-7
        p(data-aos="fade-down") #[b #[em Software] de renderizado 3D:] la representación perfecta no existe, siempre es necesario encontrar un equilibrio entre variables como el fotorrealismo, la calidad, la velocidad, el tamaño de los datos o la resolución. Aunque es complejo, se pueden utilizar estos fundamentos para lograr un renderizado fotorrealista, para ello el modelo debe ajustarse a la escala adecuada, lo más cercana a la real. No es necesario que las medidas sean exactas, ya que los detalles se pueden volver a escalar si no se ajustan al renderizado.
        p(data-aos="fade-down") La renderización 3D requiere algunos programas informáticos especializados para realizar los cálculos y cambios algorítmicos en la imagen entre ellos encontramos (Monsuton, n.d.):
      .col-lg-5        
        figure
          img(src='@/assets/curso/temas/tema3/img3_15.svg', alt='')  
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="<em>Autodesk 3D Studio Max o 3DMax</em>")
        .row        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3_16.svg', alt='')              
          .col-md-8.mb-4.mb-md-0
            p Es un programa de diseño de imágenes y gráficos desarrollado por #[em Autodesk Corporation]. Se basa en el desarrollo de #[em plugins] que permiten modificar imágenes y desarrollar objetos tridimensionales a partir de imágenes en dos planos.  Ideal para diseñadores, arquitectos, publicistas y decoradores de interiores. Además de convertir objetos e imágenes en tres dimensiones, el programa cuenta con funciones que permiten agregar volúmenes y texturas a los objetos. También permite configurar el fondo y alrededor de los objetos.
      .py-3.py-md-4(titulo="<em>Lumion</em>")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img3_17.svg', alt='')              
          .col-md-8
            p Es un potente programa de renderizado 3D. Su premisa es dejar atrás un proceso de renderizado lento y tedioso. No se limita a la creación de tablas 3D, también permite la elaboración de videos tridimensionales, así como el diseño de todo el proyecto, con pocos o ningún requisito de aprendizaje. El programa es muy intuitivo, por lo que no se requiere un tutorial intensivo para su uso, además ofrece acceso a una biblioteca de imágenes que se pueden modificar libremente para el diseño de objetos.

      .py-3.py-md-4(titulo="<em>SketchUp</em>")
        .row
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/img3_18.svg', alt='') 
          .col-md-8
            p Es un programa para el diseño 3D. Incluye tutoriales que muestran al usuario cómo utilizar el #[em software], además, permite modelar imágenes que van desde vehículos hasta edificios, animales y casi cualquier cosa. Una de las grandes premisas del programa es su facilidad de uso. 
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-1
        figura
          img(src="@/assets/curso/temas/tema3/img3_19.svg")
      .col-lg-10.col-sm-11
        .row.justify-content-center.align-items-center.md-5(data-aos="zoom-in-left")
          .col-xl-12
            ul.lista-ul--color.lista-ul
              li
                i.fas.fa-solid.fa-circle(style="color:#FF9500")
                h3 #[em Hardware]  requerido para renderizar
        p(data-aos="fade-down") La calidad del renderizado 3D ha ido mejorando, pero el proceso sigue siendo lento, por eso grandes empresas están invirtiendo en "granjas de renderizado". Sin embargo, los diseñadores y artistas deben usar #[em hardware] avanzado.  El #[em software] de representación 3D requiere una unidad de procesamiento de gráficos (GPU) y una unidad de procesamiento central (CPU) para crear representaciones. Además, las aplicaciones de renderizado 3D son programas que consumen muchos recursos informáticos. Para lograr renderizados rápidos, a menudo es necesario actualizar el equipo. La velocidad del procesador, la integración y compatibilidad con las tarjetas gráficas, la compatibilidad con el controlador o la memoria RAM son algunos de los muchos aspectos que pueden acelerar la creación de renders de alta calidad.  
    
    .row.justify-content-center.align-items-center.md-5(data-aos="zoom-in-left")
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500")
            h3 Tipos de renderizado
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down")  Existen dos tipos principales de representación, la diferencia es la velocidad a la que se calcula y finaliza la imagen dependiendo de la aplicación donde se usará. 

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img3_20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Representación 3D en tiempo real
            p.mb-0 Esta opción se prefiere en juegos y gráficos interactivos debido a la necesidad de calcular muy rápido imágenes a partir de datos 3D. Por lo tanto, habrá un #[em hardware] de gráficos para garantizar un procesamiento rápido de imágenes.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img3_21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Representación sin conexión
            p.mb-0 Utilizado cuando no se necesitan velocidades de renderizado altas. El efecto es adecuado para lugares donde la complejidad visual y el foto realismo son muy altos. A diferencia del tiempo real, no hay imprevisibilidad.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-down") A continuación, se presentan técnicas de visualización en el renderizado 3D


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img3_22.svg', alt='')

          div(x="37.7%" y="30.8%" tooltip="Búfer Z: (BibLus, 2019)" numero="")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema3/img3_23.svg', alt='')
            
            p (BibLus, 2019) es uno de los algoritmos más simples para determinar superficies visibles. Utiliza dos estructuras de datos, un z-buffer (área de memoria que contiene la coordenada z más cercana al espectador para cada píxel) y un #[em framebuffer] (que contiene datos de color relacionados con los píxeles contenidos en el z-buffer). 
            p Para cada píxel, se memoriza el valor Z máximo (suponiendo que el eje z va desde la pantalla hasta los ojos del espectador), y en cada paso, solo si la coordenada Z del punto de control es mayor que el valor del búfer z actual. La técnica se aplica un polígono a la vez, al escanear un polígono, la información sobre otros no está disponible.
            p Búfer Z: (BibLus, 2019) #[em Z-buffers] y #[em framebuffers] se utilizan para calcular las superficies visibles de la manera más básica. Los #[em z-buffers] almacenan la coordenada Z más cercana a un #[em píxel] dado, mientras que los #[em framebuffers] almacenan información de color para cada píxel contenido en el z-buffer.
            p El valor actual de la variable Z se compara con la referencia en esa coordenada Z del punto de control, cuando se calcula el valor del siguiente paso, se asigna el valor de Z más cercano. La técnica aplica un polígono a la vez, si se escanea un polígono, la información sobre otros no queda disponible.


          div(x="42.2%" y="39.5%" tooltip="Línea de escaneo" numero="")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema3/img3_24.svg', alt='')
            p Es uno de los métodos más antiguos. Fusiona algoritmos para determinar superficies visibles con aquellos que determinan sombras informadas. Estos algoritmos tienen precisión de imagen, es decir que, para cada línea de escaneo, determinan el lapso (intervalo) de píxeles visibles, a diferencia del búfer z utiliza una línea de exploración a la vez.

          div(x="43.8%" y="50%" tooltip="Emisión de rayos" numero="")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema3/img3_25.svg', alt='')
            p (BibLus, 2019) es un mecanismo de precisión de imagen que detecta superficies visibles. Todo el proceso se refiere a un centro de proyección y una pantalla colocada arbitrariamente, considerada una cuadrícula regular. Estos elementos corresponden a las dimensiones en píxeles de la resolución deseada. 
            p Se traza un rayo imaginario por celda de la misma ventana desde el centro de visualización hasta los objetos presentes en la escena.  La idea básica del #[em raycasting] es dividir los rayos del ojo, uno por #[em píxel], para encontrar el objeto más cercano que obstruye el camino (es necesario pensar en una imagen de cuadrícula donde cada cuadrado corresponde a un #[em píxel]) en comparación con el antiguo algoritmo de línea de exploración. 
            p Una ventaja del #[em raycasting] es su manejo simple de superficies sólidas o no planas como conos y esferas. Si la luz golpea una superficie, el #[em raycasting] puede diseñarla. También se pueden crear objetos complejos utilizando técnicas de modelado de sólidos.



          div(x="42.3%" y="60.4%" tooltip="Trazado de rayos" numero="")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema3/img3_26.svg', alt='')
            p (BibLus, 2019) Esta técnica proviene de la emisión de rayos, pero aplica un modelo de iluminación especial que tiene en cuenta la reflexión y la refracción de la luz, lo que permite efectos fotorrealistas sorprendentes. 
            p Se basa en la premisa de que de todos los rayos que salen del resorte, solo aquellos que llegan al observador después de tocar el objeto tendrán un efecto en la imagen. La luz puede llegar al espectador directamente o mediante la interacción con otras superficies. 
            p Naturalmente, es imposible simplemente seguir el camino de cualquier luz, sin embargo, si invertimos la trayectoria del rayo y solo consideramos los rayos que parten de la posición del observador, podemos determinar qué rayos contribuyen a la imagen. Esta es la idea básica del trazado de rayos, que simula el viaje completo de la radiación de luz hasta el observador.  
            p La popularidad del trazado de rayos se basa en la simulación realista de la luz en comparación con otros modelos de renderizado, como el de líneas de exploración o el #[em raycasting]. Los efectos como los reflejos y las sombras son difíciles de simular con otros métodos y son una consecuencia natural de los algoritmos. Una implementación relativamente simple puede generar resultados impresionantes, a menudo, el trazado de rayos representa un punto de entrada para la investigación de programación de gráficos.

          div(x="37.7%" y="69.4%" tooltip="Resplandor" numero="")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema3/img3_27.svg', alt='')
            p Este método de precisión de imagen proporciona mayores ventajas para la calidad realista de la misma, ya que tiene en cuenta la física de interreflexión entre objetos. De hecho, cuando una superficie tiene un componente de luz reflejada, no solo aparece en nuestra imagen, sino que también ilumina las superficies cercanas, (BibLus, 2019). 
            p La luz radiante transporta datos sobre el objeto que la generó, especialmente el color. Como resultado, las sombras son menos oscuras y pueden percibir el color de los objetos cercanos bien iluminados, un fenómeno comúnmente conocido como ‘corrección de color’. 
            p El algoritmo de radiosidad, separa y descompone la superficie en componentes más pequeños y luego distribuye la energía de la luz directa; luego de esto, calcula la difusión, transmisión y reflexión bajo el supuesto de que la superficie refleja la luz de la misma manera que la energía. Asimismo, calcula la superficie que más energía refleja y la redistribuye.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4(data-aos="fade-down")
          p #[b ¡Felicitaciones!]
          p Ha finalizado este componente formativo sobre gemelos digitales, aplicaciones de realidad virtual e ingeniería inversa. Ahora lo invitamos a revisar la síntesis, donde podrá recordar de forma general los saberes adquiridos; a realizar la actividad de aprendizaje para poner a prueba lo aprendido; a consultar el material complementario que le servirá como refuerzo y profundización; y finalmente a estudiar el glosario.  

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
