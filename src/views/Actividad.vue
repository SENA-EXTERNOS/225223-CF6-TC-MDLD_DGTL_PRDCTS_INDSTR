<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar-soltar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Gemelos digitales, aplicaciones VR e ingeniería inversa
        p Apreciado aprendiz, el objetivo de esta actividad es asociar conceptos relacionados con gemelos digitales y realidad virtual junto con su definición correspondiente, los cuales fueron vistos en este componente.
        p Arrastre la palabra que considere correcta como respuesta a la descripción dada, de esta forma puede repasar los temas que se deben tener en cuenta para la aplicación de realidad virtual y lo relacionado a gemelos digitales.
        p.mb-4 #[b ¡Adelante!]

        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
