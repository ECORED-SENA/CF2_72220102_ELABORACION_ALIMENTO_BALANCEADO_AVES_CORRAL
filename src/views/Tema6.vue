<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1  Empacado, rotulado, almacenamiento y manejo de la ración
      Separador
      //- Inicio Tema6.1
      .row
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Materiales y técnicas de empacado del alimento balanceado

      Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Información básica del rotulado y trazabilidad del producto

      Separador
      //- Inicio Tema6.3
      .row
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Almacenamiento del alimento elaborado y condiciones del ambiente

      Separador
      //- Inicio Tema6.4
      .row
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.4 Manejo de plagas en áreas de almacenamiento

      Separador
      //- Inicio Tema6.5
      .row
        #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.5 Conservación de la ración y prevención del deterioro

      Separador
      //- Inicio Tema6.6
      .row
        #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.6 Control del despacho, suministro y uso del alimento en granja



</template>

<script>
export default {
  name: 'Tema6',
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
