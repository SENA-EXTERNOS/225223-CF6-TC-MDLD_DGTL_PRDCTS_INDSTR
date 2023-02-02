<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Vinculación a la VR
    
    p Los progresos relacionados con la tecnología 3D han permitido tener un gran avance en el desarrollo de la realidad virtual y en la manera en cómo percibimos algunos objetos, piezas y productos. La realización del mundo en el ámbito de la realidad virtual está generando un desarrollo que, tanto a nivel de mercado e industria, está revolucionando la creación de los objetos y las experiencias en torno a ellos. Observe en el siguiente video una introducción al ámbito de la realidad virtual.
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/QF5MjP0DrOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Tema2',
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
