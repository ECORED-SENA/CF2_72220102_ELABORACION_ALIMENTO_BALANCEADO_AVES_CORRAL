<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.mb-5        
        .col-lg-7
          .row.align-items-start.mb-3(data-aos="fade-left")
            .col-lg
              p.mb-0.p-3.bg-color-2 La elaboración de alimento balanceado para aves de corral es un proceso técnico que integra actividades de planificación, medición, manejo de insumos, operación de equipos, control sanitario, almacenamiento y suministro, orientadas a garantizar una alimentación segura y de calidad. Cada una de estas etapas influye directamente en la eficiencia del proceso productivo, en la conservación de las características nutricionales del alimento y en el bienestar de las aves, por lo que requiere la aplicación de procedimientos estandarizados y el cumplimiento de criterios técnicos, sanitarios y de bioseguridad.
          .row.align-items-center.mb-10(data-aos="fade-left")
            .col-lg
              p(data-aos="fade-left") El desarrollo de este proceso demanda el uso adecuado de unidades de medida, instrumentos de pesaje, equipos, herramientas y áreas de trabajo, así como la correcta recepción, selección, manipulación y conservación de los insumos empleados en la formulación de las raciones. De igual manera, exige la implementación de programas de limpieza, desinfección, seguridad y salud en el trabajo, manejo de residuos y control de las condiciones de almacenamiento, con el fin de prevenir riesgos, mantener la inocuidad del alimento y asegurar la continuidad de la producción.
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/temas/intro/img1.png", data-aos="zoom-in" style="max-width: 458px")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Este componente formativo presenta los fundamentos técnicos relacionados con la elaboración de alimento balanceado para aves de corral, abordando los procedimientos que permiten desarrollar cada etapa del proceso de manera organizada, eficiente y conforme con las buenas prácticas avícolas. Su aplicación contribuye al fortalecimiento de la bioseguridad, la trazabilidad, la protección del ambiente y la obtención de alimentos que respondan a los requerimientos nutricionales de las diferentes etapas productivas.



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
