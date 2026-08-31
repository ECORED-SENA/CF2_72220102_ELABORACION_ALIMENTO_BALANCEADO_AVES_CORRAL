<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1  Empacado, rotulado, almacenamiento y manejo de la ración
      p(data-aos="fade-left") El empacado, el rotulado, el almacenamiento y el manejo de la ración constituyen las etapas finales de la elaboración del alimento balanceado y tienen como propósito conservar sus características físicas, nutricionales e higiénicas hasta el momento del suministro a las aves. La correcta ejecución de estas actividades protege el alimento frente a la contaminación, facilita su identificación, favorece la trazabilidad y contribuye a mantener la calidad del producto durante su distribución y utilización en la granja. El manejo de la ración durante el proceso productivo comprende los siguientes componentes:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Empacado")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t6/tarjeta01_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Empacado
                  p Consiste en colocar el alimento balanceado en sacos, bolsas o recipientes adecuados que lo protejan de la humedad, el polvo, las plagas, los derrames y otros factores que puedan afectar su calidad durante el transporte y el almacenamiento.
            .py-3.py-md-4(titulo="Rotulado")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t6/tarjeta01_2.png')
                .col-md-6
                  h4 Rotulado
                  p Permite identificar el alimento mediante información como tipo de ración, lote, fecha de elaboración, destino y demás datos necesarios para facilitar el control del inventario y la trazabilidad del producto.
            .py-3.py-md-4(titulo="Almacenamiento")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t6/tarjeta01_3.png')
                .col-md-6
                  h4 Almacenamiento
                  p Comprende la conservación del alimento en condiciones apropiadas de limpieza, ventilación, orden y protección ambiental, evitando alteraciones físicas, nutricionales o sanitarias antes de su utilización.
            .py-3.py-md-4(titulo="Manejo de la ración")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t6/tarjeta01_4.png')
                .col-md-6
                  h4 Manejo de la ración
                  p Incluye las actividades relacionadas con la movilización, distribución y suministro del alimento, procurando mantener la identificación de los lotes, evitar mezclas entre raciones y garantizar que cada grupo de aves reciba el alimento correspondiente a su etapa productiva.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La adecuada integración de estas actividades fortalece el control de calidad, facilita la organización del proceso productivo y contribuye al cumplimiento de las buenas prácticas avícolas, asegurando que el alimento conserve sus condiciones hasta el momento de ser suministrado.
      Separador
      //- Inicio Tema6.1
      .row
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Materiales y técnicas de empacado del alimento balanceado
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 La selección de los materiales y la aplicación de técnicas adecuadas de empacado permiten conservar la calidad del alimento balanceado durante su manipulación, transporte y almacenamiento. Los empaques deben ofrecer protección suficiente frente a factores ambientales y facilitar el manejo seguro del producto dentro de la granja. A continuación, se presentan las principales recomendaciones relacionadas con el empacado del alimento balanceado.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Material del empaque
                            p.text-start Utilizar sacos, bolsas o recipientes limpios, secos, resistentes y aptos para uso alimentario, capaces de proteger el alimento sin alterar sus características físicas o nutricionales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Estado del empaque
                            p.text-start Verificar que el material se encuentre íntegro, sin perforaciones, humedad, residuos ni olores extraños que puedan comprometer la inocuidad del alimento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Cierre del empaque
                            p.text-start Asegurar un cierre firme que evite derrames y reduzca el ingreso de polvo, humedad, insectos u otros agentes contaminantes durante el almacenamiento y el transporte.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de empacado
                            p.text-start Realizar esta actividad en un espacio limpio, ordenado y protegido frente a condiciones que puedan favorecer la contaminación del producto.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Manipulación del alimento
                            p.text-start Evitar el contacto directo del alimento con el piso, utilizar recipientes limpios y mantener separados los diferentes lotes durante el proceso de empacado para conservar la trazabilidad y la calidad del producto.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t6/img1.png', style="width: 300px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") La aplicación de estas recomendaciones favorece la conservación del alimento balanceado, disminuye las pérdidas por deterioro y facilita las actividades de almacenamiento, transporte y distribución dentro de la unidad de producción avícola.
      Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Información básica del rotulado y trazabilidad del producto
      p(data-aos="fade-left") El rotulado constituye un mecanismo de identificación que permite diferenciar cada lote de alimento elaborado y mantener el control durante su almacenamiento, distribución y suministro. La información consignada en el rótulo facilita la organización de la producción, reduce errores en la entrega de las raciones y fortalece la trazabilidad del proceso. El rotulado del alimento balanceado debe incluir los siguientes datos para garantizar su identificación, trazabilidad y adecuado manejo:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            .row.justify-content-center.mb-5(data-aos="fade-up")
              .col-12.col-lg-10
                .row.g-4.justify-content-center
                  .col-12.col-md-6.col-lg-4
                    .bg-white.rounded-4.shadow.h-100.overflow-hidden.d-flex.flex-column
                      .bg-color-10.p-3.text-center.text-white.fw-bold
                        p.mb-0 Nombre o tipo de alimento
                      .p-4.text-center.d-flex.align-items-center.justify-content-center.flex-grow-1
                        p.mb-0 Permite identificar la ración elaborada y diferenciarla de otros alimentos utilizados en la granja.
                  .col-12.col-md-6.col-lg-4
                    .bg-white.rounded-4.shadow.h-100.overflow-hidden.d-flex.flex-column
                      .bg-color-10.p-3.text-center.text-white.fw-bold
                        p.mb-0 Etapa productiva
                      .p-4.text-center.d-flex.align-items-center.justify-content-center.flex-grow-1
                        p.mb-0 Indica el grupo de aves al que está destinado el alimento, evitando errores durante el suministro.
                  .col-12.col-md-6.col-lg-4
                    .bg-white.rounded-4.shadow.h-100.overflow-hidden.d-flex.flex-column
                      .bg-color-10.p-3.text-center.text-white.fw-bold
                        p.mb-0 Fecha de elaboración
                      .p-4.text-center.d-flex.align-items-center.justify-content-center.flex-grow-1
                        p.mb-0 Facilita el control del tiempo de almacenamiento y la programación del uso del producto.
                  .col-12.col-md-6.col-lg-4
                    .bg-white.rounded-4.shadow.h-100.overflow-hidden.d-flex.flex-column
                      .bg-color-10.p-3.text-center.text-white.fw-bold
                        p.mb-0 Número de lote
                      .p-4.text-center.d-flex.align-items-center.justify-content-center.flex-grow-1
                        p.mb-0 Permite identificar cada producción de alimento y realizar seguimiento en caso de presentarse novedades.
                  .col-12.col-md-6.col-lg-4
                    .bg-white.rounded-4.shadow.h-100.overflow-hidden.d-flex.flex-column
                      .bg-color-10.p-3.text-center.text-white.fw-bold
                        p.mb-0 Cantidad o peso
                      .p-4.text-center.d-flex.align-items-center.justify-content-center.flex-grow-1
                        p.mb-0 Facilita el control del inventario, la distribución y el consumo de la ración.
                  .col-12.col-md-6.col-lg-4
                    .bg-white.rounded-4.shadow.h-100.overflow-hidden.d-flex.flex-column
                      .bg-color-10.p-3.text-center.text-white.fw-bold
                        p.mb-0 Observaciones de manejo
                      .p-4.text-center.d-flex.align-items-center.justify-content-center.flex-grow-1
                        p.mb-0 Incluye información adicional relacionada con el almacenamiento, el uso o cualquier condición especial requerida para conservar el alimento.
            p(data-aos="fade-left") La información registrada en el rótulo hace posible mantener la trazabilidad del alimento, ya que permite conocer su origen, identificar el lote de producción, establecer el recorrido dentro de la granja y determinar el destino final de cada ración. Esta información facilita la toma de decisiones cuando es necesario investigar una desviación en la calidad o realizar acciones correctivas.
            Separador
            //- Inicio Tema6.3
            .row
              #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 6.3 Almacenamiento del alimento elaborado y condiciones del ambiente
            p(data-aos="fade-left") El almacenamiento del alimento balanceado tiene como finalidad conservar sus propiedades físicas, nutricionales e higiénicas hasta el momento de su suministro. Para lograrlo, es necesario mantener condiciones ambientales que reduzcan el riesgo de deterioro y permitan preservar la calidad del producto durante el tiempo de permanencia en la bodega. El almacenamiento del alimento elaborado debe mantenerse bajo las siguientes condiciones:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Condiciones del ambiente
                            p.text-start Mantener el alimento en un área limpia, seca, ventilada y protegida de la lluvia, la humedad y la radiación solar directa para conservar sus características nutricionales y sanitarias.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ubicación de los empaques
                            p.text-start Colocar los sacos o recipientes sobre estibas y separados de paredes y pisos, favoreciendo la circulación del aire y facilitando las labores de limpieza e inspección.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Organización de los lotes
                            p.text-start Distribuir el alimento de manera ordenada e identificada para facilitar el control del inventario y evitar confusiones durante la distribución.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Rotación del producto
                            p.text-start Aplicar sistemas de rotación que permitan utilizar primero los alimentos elaborados con mayor anterioridad, siempre que conserven condiciones adecuadas para su uso.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Protección frente a contaminantes
                            p.text-start Mantener el alimento separado de productos químicos, combustibles, residuos u otros materiales que puedan afectar su inocuidad.
              //- Fin Carrusel
            p(data-aos="fade-left") El cumplimiento de estas condiciones favorece la conservación del alimento balanceado, reduce las pérdidas por deterioro y facilita el control del proceso de almacenamiento dentro de la unidad de producción avícola.
      Separador
      //- Inicio Tema6.4
      .row
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.4 Manejo de plagas en áreas de almacenamiento
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 El control de plagas constituye una medida preventiva destinada a proteger el alimento balanceado frente a la contaminación ocasionada por insectos, roedores y otros animales que pueden afectar su calidad e inocuidad. Su manejo debe integrarse a los programas de bioseguridad mediante acciones orientadas a prevenir la presencia de estos organismos y controlar oportunamente cualquier evidencia de infestación. A continuación, se presentan las principales prácticas para el manejo de plagas en las áreas de almacenamiento: 
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t6/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mantener la limpieza del área
                p Retirar residuos, polvo y derrames para disminuir la disponibilidad de alimento que favorece la presencia de plagas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conservar los empaques en buen estado
                p Mantener los sacos y recipientes correctamente cerrados para impedir el ingreso de insectos y roedores.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Organizar adecuadamente la bodega
                p Evitar acumulaciones innecesarias de materiales y facilitar la inspección permanente de los espacios de almacenamiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Inspeccionar periódicamente las instalaciones
                p Revisar paredes, pisos, techos, puertas y empaques para detectar oportunamente señales de infestación o deterioro.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta04_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Controlar el entorno de la bodega
                p Mantener libres de maleza, residuos y aguas estancadas las áreas cercanas al almacenamiento para disminuir la presencia de plagas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta04_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aplicar métodos de control seguros
                p Utilizar trampas, cebos u otras medidas de control sin que entren en contacto con el alimento ni representen riesgos para las aves o el personal.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación continua de estas medidas fortalece la bioseguridad de la granja, disminuye las pérdidas ocasionadas por plagas y contribuye a conservar la calidad del alimento durante su almacenamiento.
      Separador
      //- Inicio Tema6.5
      .row
        #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.5 Conservación de la ración y prevención del deterioro
      p(data-aos="fade-left") La conservación de la ración comprende las acciones destinadas a mantener las características físicas, nutricionales e higiénicas del alimento desde su elaboración hasta el momento del suministro. Estas actividades permiten reducir el riesgo de pérdidas, preservar el valor nutricional de la dieta y garantizar que las aves reciban un alimento en condiciones adecuadas. La prevención del deterioro del alimento balanceado requiere considerar los siguientes aspectos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t6/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Control de las condiciones de almacenamiento")
                p.mb-4 Mantener temperatura, humedad y ventilación adecuadas para evitar alteraciones que afecten la calidad del alimento.
              .row(titulo="Protección del alimento")
                p.mb-4 Conservar los empaques cerrados y protegidos frente a humedad, polvo, plagas y otros agentes contaminantes.
              .row(titulo="Inspección periódica del producto")
                p.mb-4 Revisar color, olor, textura, presencia de grumos, humedad o signos de infestación para detectar oportunamente cualquier alteración.
              .row(titulo="Rotación de los lotes")
                p.mb-4 Utilizar el alimento siguiendo el orden establecido de almacenamiento para reducir permanencias prolongadas y disminuir el riesgo de deterioro.
              .row(titulo="Retiro de alimento alterado")
                p.mb-4 Separar los lotes que presenten cambios físicos o sanitarios hasta definir su destino, evitando su suministro a las aves sin una evaluación previa.
      //- Fin Accordion 1
      p(data-aos="fade-left") La conservación adecuada de la ración permite mantener la calidad del alimento balanceado, fortalece la inocuidad del proceso y contribuye a proteger la salud, el bienestar y el desempeño productivo de las aves. 
      Separador
      //- Inicio Tema6.6
      .row
        #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.6 Control del despacho, suministro y uso del alimento en granja
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 El control del despacho, el suministro y el uso del alimento permite garantizar que cada lote de aves reciba la ración prevista en el programa de alimentación, en la cantidad, el momento y las condiciones establecidas para su etapa productiva. Estas actividades fortalecen la trazabilidad del proceso, facilitan el control del inventario y proporcionan información útil para evaluar el consumo y el desempeño del sistema de alimentación. A continuación, se presentan las principales actividades que hacen parte del control del alimento desde su salida de la bodega hasta su consumo por las aves:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t6/tarjeta05_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Verificación antes del despacho
                p Confirmar que el alimento corresponda al lote, la etapa productiva y la cantidad programada, verificando además el estado del empaque y la identificación del producto antes de su salida de la bodega.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro del despacho
                p Documentar la fecha, el tipo de alimento, el número de lote, la cantidad entregada y el destino dentro de la granja, facilitando el control del inventario y la trazabilidad del producto.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Transporte interno
                p Trasladar el alimento utilizando recipientes o medios de transporte limpios, protegidos y en buen estado, evitando derrames, contaminación o pérdidas durante el recorrido.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Suministro a las aves
                p Distribuir la ración correspondiente según la edad, la línea genética, el sistema de producción y el programa de alimentación establecido para cada grupo de aves.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Seguimiento al consumo
                p Registrar el consumo diario del alimento y relacionarlo con variables como crecimiento, producción, conversión alimenticia o comportamiento del lote, permitiendo detectar oportunamente posibles desviaciones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t6/tarjeta05_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control de sobrantes y novedades
                p Identificar alimentos no consumidos, sobrantes, desperdicios o cualquier situación que afecte el suministro, registrando las novedades para facilitar la toma de decisiones y la mejora del proceso.
      //- Fin Slideshow
      p(data-aos="fade-left") El seguimiento continuo de estas actividades permite optimizar el manejo del alimento dentro de la granja, fortalecer el control de calidad y verificar que la ración llegue a las aves en condiciones adecuadas para contribuir a su salud, bienestar y desempeño productivo.
      .row.justify-content-center.mb-4(data-aos="fade-left")
            .col-lg-12        
              .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-11.p-4.rounded-4
                .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
                  img(src='@/assets/curso/temas/bg/pdf.svg', style="width: 80px")
                .flex-grow-1.text-center.text-lg-start
                  h4.mb-2.text-white Manejo de residuos y disposición final.
                  p.mb-0.text-white Se invita a leer el documento <b>Manejo de residuos y disposición final</b>, donde se aborda el manejo integral de los residuos generados durante la elaboración de alimento balanceado para aves de corral. 
                .mt-3.mt-lg-0.ps-lg-4            
                  a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_01_Manejo_Residuos_Disposición_Final.pdf')" target="_blank")
                    span.fw-bold.me-2 Descargar
                    i.fas.fa-file-download
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
