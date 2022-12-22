<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") Bienvenido a este módulo de aprendizaje sobre gemelos virtuales, diseñado para reflejar con precisión un objeto físico.  En el siguiente video se describen las generalidades de los gemelos digitales y las tecnologías de escaneo usadas para crear los procesos de implementación y gestión de acuerdo al diseño, aplicando criterios propios de desempeño en diferentes sectores como el académico, productivo e investigativo.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/img0.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-left") ¡Éxitos en este proceso de aprendizaje!
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
