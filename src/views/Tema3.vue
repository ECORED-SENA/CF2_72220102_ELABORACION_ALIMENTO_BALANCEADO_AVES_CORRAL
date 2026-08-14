<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Insumos: recepción, selección, manipulación y conservación
      p(data-aos="fade-left") Los insumos constituyen la base de la elaboración de alimento balanceado para aves de corral, ya que aportan los nutrientes y demás componentes necesarios para formular raciones acordes con los requerimientos de cada etapa productiva. La calidad, el estado sanitario y el manejo de estos materiales influyen directamente en la inocuidad del alimento, el bienestar de las aves y la eficiencia del sistema de producción, por lo que su utilización debe ajustarse a criterios técnicos y a las buenas prácticas avícolas. Los principales tipos de insumos utilizados en la elaboración de alimento balanceado y la función que cumplen dentro del proceso productivo son los siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumos energéticos
                p Incluyen materias primas como maíz, sorgo, yuca seca y arroz partido. Constituyen la principal fuente de energía de la dieta y aportan los carbohidratos necesarios para el mantenimiento, el crecimiento y la producción de las aves.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumos proteicos
                p Comprenden harina de soya, tortas vegetales y otras fuentes autorizadas de proteína. Su función es suministrar aminoácidos esenciales para la formación de tejidos, el desarrollo muscular y la producción de huevos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumos minerales
                p Incluyen carbonato de calcio, fosfatos y sales minerales. Participan en la formación del sistema óseo, el equilibrio electrolítico, la calidad de la cáscara del huevo y múltiples procesos metabólicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumos vitamínicos
                p Corresponden a premezclas vitamínicas y núcleos que complementan la dieta con vitaminas indispensables para el metabolismo, la respuesta inmunitaria, el crecimiento y la reproducción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aditivos y complementarios
                p Comprenden enzimas, probióticos, pigmentantes, acidificantes, conservantes y secuestrantes de micotoxinas, entre otros. Se incorporan para mejorar la digestibilidad, la estabilidad, la inocuidad y el desempeño productivo del alimento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumos líquidos
                p Incluyen aceites, melaza y agua utilizada en determinadas operaciones. Aportan energía, favorecen algunas características físicas del alimento o participan en procesos específicos de preparación y limpieza.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumos para limpieza y bioseguridad
                p Comprenden detergentes, desinfectantes y otros productos destinados al saneamiento de equipos, herramientas y áreas de trabajo. Su utilización contribuye a mantener condiciones higiénicas durante la elaboración del alimento balanceado.
      //- Fin Slideshow
      .row.mb-5
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t3/img1.png", data-aos="zoom-in" style="max-width: 600px")
        .col-lg-7
          .row.align-items-start.mb-3(data-aos="fade-left")
            .col-lg
              p.mb-0.p-4.bg-color-4 Cada grupo de insumos presenta características particulares relacionadas con su composición, presentación física, estabilidad y condiciones de almacenamiento. Estas diferencias hacen necesario aplicar procedimientos específicos para su recepción, manipulación y conservación, con el fin de preservar su calidad y evitar alteraciones que puedan afectar el alimento elaborado.
          .row.align-items-center.mb-10(data-aos="fade-left")
            .col-lg
              p(data-aos="fade-left") El manejo adecuado de los insumos también fortalece la trazabilidad del proceso, facilita el control de inventarios y contribuye al cumplimiento de los programas de bioseguridad y aseguramiento de la calidad implementados en la producción avícola.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Técnicas de recepción e inspección de insumos
      p(data-aos="fade-left") A continuación, se presenta el proceso de recepción e inspección de insumos, una etapa fundamental para verificar el cumplimiento de las especificaciones técnicas, sanitarias y documentales que garantizan la calidad, la inocuidad y la trazabilidad en la elaboración de alimento balanceado para aves de corral.
      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vhNbtH4RHNs?si=cIp3lOfuz9b7ksBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Técnicas de selección y clasificación de insumos
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 Después de la recepción, los insumos deben seleccionarse y clasificarse para garantizar que únicamente los materiales aptos ingresen al proceso productivo. Esta actividad facilita la organización del almacenamiento, optimiza el manejo del inventario y contribuye a mantener la calidad e inocuidad del alimento balanceado. A continuación, se presentan los principales criterios utilizados para la selección y clasificación de los insumos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Estado físico y sanitario")
                p.mb-4 Permite determinar si el insumo cumple las condiciones requeridas para su utilización o si debe mantenerse en observación, acondicionarse o rechazarse por presentar alteraciones o contaminación.
              .row(titulo="Fecha de ingreso y vencimiento")
                p.mb-4 Facilita la aplicación del sistema PEPS (primero en entrar, primero en salir), favoreciendo la rotación del inventario y evitando el uso de materiales vencidos o con pérdida de calidad.
              .row(titulo="Tipo de insumo")
                p.mb-4 Organiza los materiales según su función, como energéticos, proteicos, minerales, vitamínicos, aditivos o líquidos, facilitando su almacenamiento y utilización durante la formulación.s
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Frecuencia de uso")
                p.mb-4 Permite ubicar los insumos de mayor utilización en lugares de fácil acceso y organizar los de uso ocasional en áreas específicas, optimizando el desarrollo de las actividades.
              .row(titulo="Nivel de riesgo o sensibilidad")
                p.mb-4 Identifica materiales que requieren condiciones especiales de conservación, como productos higroscópicos, aditivos, medicamentos o microingredientes que demandan un manejo más controlado.
              .row(titulo="Compatibilidad con la formulación")
                p.mb-4 Verifica que cada insumo corresponda a la formulación nutricional vigente, evitando sustituciones inadecuadas y errores durante la preparación del alimento balanceado
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img3.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La aplicación de estos criterios facilita el control de las materias primas desde su ingreso hasta su utilización, favorece la conservación de sus características y reduce la probabilidad de errores durante la formulación y la mezcla. Además, contribuye a mantener la organización del almacén, fortalecer la trazabilidad y garantizar que el alimento elaborado cumpla las especificaciones técnicas definidas para la producción avícola.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Métodos de acopio y almacenamiento de insumos
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 El acopio y almacenamiento de insumos comprende las actividades destinadas a conservar las materias primas y los productos auxiliares en condiciones que preserven su calidad, estabilidad e inocuidad hasta el momento de su utilización. Un almacenamiento adecuado evita el deterioro de los insumos y contribuye a mantener las características nutricionales y sanitarias requeridas para la elaboración del alimento balanceado. El acopio y almacenamiento de insumos utilizados en la producción avícola debe realizarse teniendo en cuenta las siguientes recomendaciones:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ubicación de los insumos
                p Almacenar los materiales sobre estibas o plataformas, separados del piso y de las paredes, favoreciendo la circulación del aire y evitando el contacto con la humedad y posibles fuentes de contaminación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Orden y rotulación
                p Identificar cada insumo con su nombre, número de lote, fecha de ingreso y fecha de vencimiento. Esta información facilita la trazabilidad y el control del inventario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rotación del material
                p Aplicar el sistema PEPS (primero en entrar, primero en salir) para utilizar primero los insumos con mayor tiempo de almacenamiento y reducir pérdidas por vencimiento o deterioro.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Condiciones ambientales
                p Mantener las bodegas limpias, secas, ventiladas y protegidas de la lluvia, la radiación solar directa, el polvo y otros factores que puedan afectar la estabilidad de los insumos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Separación por categorías
                p Almacenar las materias primas, aditivos, productos químicos y materiales de limpieza en áreas independientes para evitar contaminación cruzada y facilitar su control.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control de plagas
                p Realizar inspecciones periódicas y aplicar medidas preventivas para evitar la presencia de insectos, roedores y aves silvestres sin comprometer la inocuidad de los insumos.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación de estas prácticas favorece la conservación de las materias primas, mejora la gestión del inventario y reduce las pérdidas ocasionadas por deterioro o contaminación. Asimismo, fortalece la trazabilidad y garantiza que los insumos mantengan las condiciones requeridas para su incorporación al proceso de elaboración del alimento balanceado.      
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Técnicas de manipulación y uso de insumos
      p(data-aos="fade-left") La manipulación de insumos comprende las actividades realizadas desde su retiro del almacenamiento hasta su incorporación al proceso de elaboración del alimento balanceado. Estas operaciones deben desarrollarse siguiendo procedimientos que preserven la calidad de los materiales, reduzcan el riesgo de contaminación y garanticen la correcta dosificación de cada ingrediente. La manipulación y el uso seguro de los insumos durante el proceso productivo requiere la aplicación de las siguientes prácticas:      
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img4.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Utilizar utensilios limpios y exclusivos")
                p.mb-4 Emplear palas, cucharones, recipientes y embudos destinados a funciones específicas, evitando el intercambio entre materiales incompatibles y reduciendo la contaminación cruzada.
              .row(titulo="Abrir y cerrar correctamente los empaques")
                p.mb-4 Manipular los envases con cuidado para evitar derrames, ingreso de humedad o exposición prolongada al ambiente, preservando la calidad del insumo.
              .row(titulo="Manipular los insumos en áreas limpias y ordenadas")
                p.mb-4 Realizar las actividades de pesaje, dosificación y preparación sobre superficies higiénicas y libres de residuos, favoreciendo la inocuidad del alimento.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Respetar la secuencia de formulación")
                p.mb-4 Incorporar los ingredientes siguiendo el orden establecido en la formulación para garantizar una mezcla uniforme y una adecuada distribución de los nutrientes.
              .row(titulo="Aplicar medidas de higiene y utilizar elementos de protección personal")
                p.mb-4 Utilizar los elementos de protección requeridos y mantener prácticas adecuadas de higiene durante la manipulación de los insumos, protegiendo tanto al trabajador como al alimento.
              .row(titulo="Evitar la exposición innecesaria de los insumos")
                p.mb-4 Mantener cerrados los recipientes y devolver los materiales sobrantes al lugar de almacenamiento una vez finalizada la actividad, evitando contaminación, humedad o infestaciones.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img5.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La aplicación de estas prácticas contribuye a mantener la calidad de las materias primas durante su utilización, optimiza el aprovechamiento de los insumos y favorece el cumplimiento de los procedimientos establecidos para la elaboración de alimento balanceado.
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Métodos de conservación de insumos
      p(data-aos="fade-left") La conservación de los insumos comprende las medidas destinadas a preservar sus propiedades físicas, químicas, nutricionales y sanitarias desde su recepción hasta su utilización. La aplicación de métodos de conservación adecuados permite reducir el deterioro de los materiales y mantener las condiciones necesarias para elaborar alimento balanceado seguro y de calidad. A continuación, se presentan los principales métodos de conservación según el tipo de insumo:
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
                              img(src='@/assets/curso/temas/t3/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Granos y harinas
                            p.text-start Almacenar en áreas secas, ventiladas, sobre estibas y protegidas del ingreso de plagas y humedad, evitando la proliferación de hongos, la formación de micotoxinas y la pérdida de calidad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Núcleos y premezclas
                            p.text-start Conservar en sus envases originales, bien cerrados, en lugares frescos y secos, respetando las fechas de vencimiento para preservar su estabilidad y eficacia nutricional.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Aceites y otros líquidos
                            p.text-start Mantener en recipientes cerrados y protegidos de la luz y del calor excesivo para disminuir el riesgo de oxidación, enranciamiento o pérdidas por derrames.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Aditivos sensibles
                            p.text-start Almacenar en condiciones controladas, limitando su manipulación y aplicando una rotación adecuada para conservar sus propiedades funcionales y evitar su contaminación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta03_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Insumos de limpieza
                            p.text-start Conservar en áreas independientes del alimento, dentro de sus envases originales y correctamente identificados, previniendo riesgos de contaminación química.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img6.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img7.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La conservación adecuada de los insumos favorece la estabilidad de las materias primas durante el almacenamiento, reduce pérdidas económicas y contribuye al mantenimiento de la inocuidad del alimento balanceado. Además, fortalece los programas de bioseguridad y asegura la disponibilidad de materiales en condiciones apropiadas para su utilización en el proceso productivo.
      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Métodos de disposición de insumos no aptos o sobrantes
      p(data-aos="fade-left") Durante las actividades de recepción, almacenamiento, manipulación y uso de los insumos pueden identificarse materiales que no cumplen las condiciones requeridas para incorporarse al proceso productivo o sobrantes que deben manejarse de forma controlada. La disposición adecuada de estos materiales evita riesgos para la inocuidad del alimento, protege la bioseguridad de la granja y contribuye al cumplimiento de la normatividad sanitaria y ambiental. La disposición de insumos no aptos o sobrantes requiere la aplicación de las siguientes acciones de manejo:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumo vencido o contaminado
                p Separarlo del resto de los materiales, identificarlo claramente, registrar la novedad y retirarlo del proceso para evitar su utilización y prevenir la contaminación del alimento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Material con humedad, mohos o infestación
                p Aislar el insumo y definir su disposición conforme a los procedimientos establecidos por la granja, evitando que afecte otros materiales almacenados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sobrantes aprovechables en buen estado
                p Reintegrarlos al almacenamiento únicamente cuando conserven sus condiciones de calidad, mantengan su identificación y sea posible garantizar su trazabilidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Empaques vacíos o residuos de productos
                p Gestionarlos de acuerdo con los procedimientos para el manejo de residuos, evitando la contaminación del área de trabajo y del ambiente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Insumo rechazado durante la recepción
                p Registrar la no conformidad y gestionar su devolución al proveedor o su disposición final conforme a los procedimientos establecidos por la organización.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación de estos métodos permite mantener el control sobre los materiales descartados, prevenir su incorporación accidental al proceso y fortalecer la gestión de inventarios. Asimismo, facilita la evaluación de las causas que originan rechazos o pérdidas, aportando información útil para mejorar las actividades de compra, almacenamiento y manejo de los insumos.
      Separador
      //- Inicio Tema3.7
      .row
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Control de calidad de insumos en el proceso productivo
      p(data-aos="fade-left") El control de calidad de los insumos comprende las actividades de seguimiento y verificación que se realizan desde su recepción hasta su utilización en la elaboración del alimento balanceado. Su finalidad es asegurar que cada material conserve las características requeridas para cumplir su función dentro de la formulación y mantener la calidad del producto final. El control de calidad aplicado a los insumos durante el proceso productivo comprende los siguientes componentes:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img8.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Verificación de ingreso")
                p.mb-4 Se revisan la identidad del insumo, la cantidad recibida, el estado físico, el número de lote y las fechas correspondientes para confirmar que el material cumple las especificaciones antes de ingresar al almacenamiento.
              .row(titulo="Inspección del almacenamiento")
                p.mb-4 Se controlan las condiciones de humedad, limpieza, ventilación, presencia de plagas, rotulación y fechas de vencimiento para preservar la calidad de los insumos durante su conservación.
              .row(titulo="Seguimiento al uso")
                p.mb-4 Se verifica la cantidad utilizada, el lote incorporado y la correspondencia con la formulación establecida, garantizando la trazabilidad y el control del proceso.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center 
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Registro de no conformidades")
                p.mb-4 Se documentan los insumos rechazados, deteriorados o que presentan desviaciones, facilitando la implementación de acciones correctivas y el mejoramiento continuo.
              .row(titulo="Evaluación del alimento elaborado")
                p.mb-4 Se revisan características como homogeneidad, olor, apariencia y aceptación por parte de las aves, con el fin de identificar posibles alteraciones asociadas a los insumos utilizados.
              .row(titulo="Evaluación de proveedores")
                p.mb-4 Se realiza seguimiento al cumplimiento de las especificaciones de calidad, oportunidad de entrega y confiabilidad del suministro, fortaleciendo la gestión de abastecimiento de la granja.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img9.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") El control permanente de estos aspectos permite detectar oportunamente desviaciones, respaldar la trazabilidad de los procesos y mantener la calidad de las materias primas durante todo el ciclo de producción. De esta manera, se favorece la elaboración de alimento balanceado seguro, se optimiza el desempeño productivo y se fortalecen los programas de aseguramiento de la calidad implementados en la producción avícola.
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
