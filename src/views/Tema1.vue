<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Control y gestión de dispositivo háptico, alcances
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Al hacer modelaciones de forma libre, las herramientas que nos ofrecen los #[i software] CAD se quedan cortas, ya que las geometrías en algunas áreas como escultura y arte, medicina, prótesis, y muchas otras, requieren ajustes y formas difíciles de lograr. Los dispositivos hápticos son instrumentos que permiten simular respuestas táctiles en un espacio 3D, permitiendo, por ejemplo, que se sientan los bordes y la geometría del objeto que se está diseñando. De esta manera, procesos como esculpir un objeto 3D se realizan de forma rápida y fácil. 
    
    .row.justify-content-center.align-items-center.md-5(data-aos="zoom-in-left")
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500")
            h3 Primer dispositivo háptico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-down") La háptica es la ciencia que se encarga del estudio del sentido del tacto. Mediante el uso de dispositivos hápticos se puede percibir la presencia de objetos tridimensionales en un ambiente virtual.  Asimismo, estos mecanismos crean una retroalimentación de fuerzas que genera sensaciones en los músculos y tendones del usuario como respuesta a la interacción con el sistema informático, (Redacción Futuro Electrónico, n.d.).
        p(data-aos="fade-down") Para entender cómo funciona la tecnología háptica, es crucial comprender cómo funciona el tacto. El cuerpo humano tiene piel y receptores cinestésicos asociados con esta sensación. Para desarrollar esta tecnología, se deben estimular los receptores de la piel, los cuales se especializan en recibir tres tipos diferentes de percepción: presión, dolor y temperatura. Los científicos se han centrado en estimular uno u otro, de esta forma, el dispositivo háptico activa mecanorreceptores que detectan la presión: corpúsculos de Messiner, corpúsculos de Pacini, discos de Markel y terminales de Ruffini, (NANOVA, n.d).

        .cajon.color-acento-botones.p-4(data-aos="fade-down")          
          p El chaleco ‘Aura Interactor’ es un dispositivo de retroalimentación de fuerza desarrollado en 1994 que monitorea las señales de audio y las convierte en ondas de sonido de baja vibración que pueden indicar movimientos como puñetazos o patadas.
        
      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span La tecnología h+aptica, el futuro de la robótica  
              
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='Foto de mujer con gafas de realidad virtual')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen vectorizada de una persona con con gafas de realidad virtual interactuando')
      .col-lg-6
        p(data-aos="fade-down") En 1984, Nintendo presentó el ‘#[i Power Glove]’, un controlador auxiliar diseñado para reproducir los movimientos de las manos en una pantalla de TV o computadora. Sin embargo, este dispositivo ha sido ampliamente criticado por su inexactitud. Años más tarde, en 1997, con el lanzamiento del ‘#[em Rumble Pack]’, marcó un hito en el mundo de los videojuegos, este dispositivo hacía vibrar el control de Nintendo 64 y se convirtió en estándar para todos los controles de juegos.

    .row.justify-content-center.align-items-center.md-5(data-aos="zoom-in-left")
      .col-xl-12
        ul.lista-ul--color.lista-ul
          li
            i.fas.fa-solid.fa-circle(style="color:#FF9500")
            h3 Tecnología háptica en otros campos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-down") La medicina, la investigación y la ingeniería pueden beneficiarse y, por ejemplo, los científicos del Instituto Tecnológico de Massachusetts (MIT), crearon un guante que puede informar la presencia de sustancias químicas a las que se está expuesto, (Futuro Electronico, n.d.) Como resultado, se puede evitar el contacto de las manos con objetos contaminados con bacterias, lo cual es útil en tareas de limpieza en quirófanos o derrames químicos.  Por su parte, el Stanford Medical Collaborative Haptics and Robotics Laboratory está desarrollando un nuevo dispositivo táctil que además de sintetizar la textura y la forma de los objetos, reacciona a las acciones del usuario, proporcionando una sensación de peso o deformación. Las aplicaciones de este mecanismo se centrarán en la cirugía robótica y se espera que se extienda a otras industrias en el futuro.
        .cajon.color-acento-botones.p-4(data-aos="fade-down")          
          p Existen varios tipos de dispositivos hápticos, entre los que encontramos lápices, guantes e incluso trajes completos, cada uno con diferentes usos.
        
      .col-lg-5        
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', alt='Foto de un doctor, revisando una imagen en olograma de los pulmones')

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            p Los dispositivos hápticos producen cambios y estímulos en el sentido del tacto. Para crear este sentimiento, se pueden utilizar diferentes sistemas que incluyen pines mecánicos activados por solenoides, cristales piezoeléctricos, vibraciones generadas magnéticamente, interferencias electrostáticas, ondas ultrasónicas, presión de sistemas neumáticos, etc. En general, se puede distinguir entre retroalimentación háptica y retroalimentación de fuerza, según el dispositivo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='imagen brazo robotico ayudando a una una persona en silla de ruedas, esta dandole de beber')


        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h3 Interfaz táctil 
            p Está diseñada para estimular los mecanorreceptores de la piel, activando así el tacto pasivo. De esta forma, el usuario podrá recibir información sobre el objeto y sus propiedades. Este sistema se enfoca en las yemas de los dedos, manos y otras áreas localizadas; y se encuentra en cinco tipos: vibratorio, neumático, mecánico, #[em electroskin] y térmico.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='imagen de una exploracion del cerebro')


        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h3 Interfaz de retroalimentación de fuerza
            p Se utiliza en aplicaciones de realidad virtual. Intenta crear una sensación más realista al tocar objetos en el mundo virtual, que al ser apretados o manipulados, crean la sensación real de la existencia de un objeto en un espacio determinado. También permite simular propiedades como la elasticidad, la viscosidad y la adhesión.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imagen de personas con gafas de realiadad virtual')
        
        .row.justify-content-center.align-items-center.mb-5(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h3 Punto de interacción 
            p Impiden que el usuario toque el objeto directamente a través de la generación de un medio físico intermedio que actúa como filtro. Por lo tanto, transmiten una cinestésica más transparente, sin embargo, reducen la háptica. Su uso está relacionado con equipos de formación quirúrgica.            
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='imagen de un examen mediante un dispositivo tipo traje')
        
       
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
