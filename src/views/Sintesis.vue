<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Cálculo e interpretación de indicadores financieros
          p.mb-0 
            | Síntesis:             
            | fundamentos e indicadores para análisis financiero
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.

      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El esquema presenta una síntesis del análisis financiero a partir de los fundamentos conceptuales, normativos y metodológicos necesarios para interpretar la información contable. Organiza los principales métodos de análisis vertical y horizontal, los indicadores de liquidez, actividad, endeudamiento y rentabilidad, y el uso de hoja electrónica para calcular, validar y presentar resultados que apoyen la toma de decisiones financieras.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
