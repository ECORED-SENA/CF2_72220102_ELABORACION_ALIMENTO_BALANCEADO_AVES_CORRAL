<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Insumos: recepción, selección, manipulación y conservación

      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Técnicas de recepción e inspección de insumos

      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Técnicas de selección y clasificación de insumos

      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Métodos de acopio y almacenamiento de insumos

      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Técnicas de manipulación y uso de insumos

      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Métodos de conservación de insumos

      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Métodos de disposición de insumos no aptos o sobrantes

      Separador
      //- Inicio Tema3.7
      .row
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Control de calidad de insumos en el proceso productivo

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
