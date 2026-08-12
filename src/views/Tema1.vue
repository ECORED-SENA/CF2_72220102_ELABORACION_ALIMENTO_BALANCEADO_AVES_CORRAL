<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Unidades de medida, medición y pesaje


      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Concepto e importancia de las unidades de medida en la producción animal

      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Características de las unidades de medida

      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Tipos de medida: peso, volumen, presión y caudal

      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Instrumentos y equipos para medición y pesaje

      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Técnicas de medición y pesaje aplicadas al proceso productivo

      Separador
      //- Inicio Tema1.6
      .row
        #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.6 Registro e interpretación de medidas en la producción

      Separador
      //- Inicio Tema1.7
      .row
        #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.7 Control de errores en medición y pesaje



</template>

<script>
export default {
  name: 'Tema1',
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
