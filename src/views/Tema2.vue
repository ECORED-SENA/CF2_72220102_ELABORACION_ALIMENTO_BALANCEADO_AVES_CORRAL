<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Equipos, herramientas y áreas de trabajo
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La elaboración de alimento balanceado para aves de corral requiere equipos, herramientas y áreas de trabajo que permitan desarrollar cada etapa del proceso con precisión, eficiencia, higiene y seguridad. Desde la recepción de las materias primas hasta el almacenamiento y suministro del alimento, estos recursos facilitan las operaciones, contribuyen a la calidad del producto y favorecen el cumplimiento de las buenas prácticas avícolas. 
      p.mb-5(data-aos="fade-left") Los principales equipos, herramientas y áreas de trabajo utilizados durante la elaboración de alimento balanceado, organizados según la función que desempeñan dentro del proceso productivo, son los siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Equipos de medición y pesaje
                p Incluyen balanzas electrónicas, básculas de plataforma y recipientes graduados. Se utilizan para determinar con precisión la cantidad de materias primas, aditivos y alimento terminado, garantizando el cumplimiento de la formulación nutricional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Equipos de preparación y transformación
                p Comprenden molinos, mezcladoras, dosificadores y tolvas. Permiten triturar, homogeneizar, mezclar y acondicionar los ingredientes hasta obtener una mezcla uniforme.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Equipos de transporte y movilización
                p Integran carretillas, bandas transportadoras, elevadores, recipientes y otros sistemas utilizados para desplazar materias primas y alimento entre las diferentes áreas de trabajo, facilitando el flujo del proceso y reduciendo el esfuerzo físico.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Equipos de almacenamiento
                p Incluyen silos, canecas, estibas, estanterías y contenedores destinados a conservar materias primas y alimento terminado en condiciones que protejan su calidad e inocuidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Equipos de limpieza y bioseguridad
                p Comprenden hidrolavadoras, bombas de aspersión, recipientes para desinfectantes y otros equipos utilizados para realizar procesos de limpieza, desinfección y control sanitario en las instalaciones y los equipos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Herramientas de manipulación
                p Corresponden a palas, cucharones, embudos y recipientes empleados para tomar, trasladar, dosificar y distribuir ingredientes durante las diferentes etapas del proceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Herramientas de mantenimiento y ajuste
                p Incluyen llaves, destornilladores, pinzas, lubricadores y otros implementos destinados al ajuste, revisión y mantenimiento básico de los equipos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Herramientas de limpieza
                p Comprenden escobas, cepillos, rasquetas, traperos y paños utilizados para retirar residuos, polvo y restos de alimento, contribuyendo a mantener condiciones adecuadas de higiene y bioseguridad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Áreas de trabajo
                p Corresponden a los espacios destinados para la recepción de materias primas, pesaje, molienda, mezcla, almacenamiento, empaque, limpieza y despacho del alimento. Deben mantenerse organizadas, señalizadas y diseñadas para facilitar el flujo de materiales, el control sanitario y la seguridad del personal.
      //- Fin Slideshow
      p(data-aos="fade-left") La organización adecuada de estos recursos permite desarrollar cada actividad de forma ordenada, reducir el riesgo de contaminación cruzada, optimizar el uso de las materias primas y fortalecer el control de los procesos. Asimismo, la correcta distribución de las áreas de trabajo facilita la circulación del personal y de los materiales, favoreciendo la eficiencia operativa y el cumplimiento de los procedimientos establecidos para la elaboración de alimento balanceado.      
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Características y criterios de selección de equipos y herramientas
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 La selección de equipos y herramientas influye directamente en la eficiencia de la elaboración de alimento balanceado, la calidad del producto y la seguridad de las operaciones. Por esta razón, antes de adquirir o utilizar cualquier recurso, es necesario evaluar diferentes criterios técnicos que permitan determinar si responde a las necesidades del sistema de producción y a las condiciones de trabajo de la granja. Los principales criterios para seleccionar equipos y herramientas destinados a la elaboración de alimento balanceado para aves de corral son los siguientes:
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Capacidad")
                  p.mb-4 Corresponde a la cantidad de material que el equipo puede contener, procesar o transportar durante una operación. Debe ajustarse al volumen de producción para evitar sobrecargas, interrupciones o tiempos improductivos.
              .row(titulo="Precisión")
                  p.mb-4 Indica el nivel de exactitud con el que el equipo realiza mediciones, pesajes o dosificaciones. Es un criterio fundamental para garantizar el cumplimiento de la formulación nutricional, especialmente durante el manejo de microingredientes.
              .row(titulo="Material de fabricación")
                  p.mb-4 Los equipos y herramientas deben elaborarse con materiales resistentes, durables, higiénicos y compatibles con el contacto directo con alimentos. Estas características reducen el riesgo de contaminación y favorecen una mayor vida útil.
              .row(titulo="Facilidad de limpieza")
                  p.mb-4 El diseño debe permitir el lavado, la desinfección y el secado completos, evitando la acumulación de residuos que puedan afectar la inocuidad del alimento o favorecer la contaminación cruzada.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9.order-sm-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Seguridad de uso")
                  p.mb-4 Deben contar con condiciones que reduzcan el riesgo de accidentes durante la operación, como estabilidad, sistemas de protección y facilidad de manejo para el personal.
              .row(titulo="Mantenimiento y disponibilidad de repuestos")
                  p.mb-4 Es importante que permitan realizar mantenimiento preventivo y correctivo, así como disponer de repuestos para garantizar la continuidad del proceso y prolongar la vida útil del equipo.
              .row(titulo="Adaptación al sistema productivo")
                  p.mb-4 Los equipos deben responder al nivel de tecnificación, al flujo de trabajo y a las características de la granja, permitiendo desarrollar las actividades con eficiencia y sin generar limitaciones operativas.
              .row(titulo="Relación costo-beneficio")
                  p.mb-4 La inversión debe evaluarse considerando el rendimiento, la durabilidad, los costos de operación y mantenimiento, así como los beneficios que aporta al proceso productivo durante su vida útil.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img3.png", alt="").img400.m-auto
      //- Fin Accordion
      p(data-aos="fade-left") La selección de equipos y herramientas debe realizarse de manera planificada, considerando las necesidades reales de producción y las condiciones de operación de la granja. Una elección adecuada favorece la continuidad de los procesos, optimiza el aprovechamiento de los recursos y contribuye al cumplimiento de las condiciones de calidad, bioseguridad y seguridad requeridas para la elaboración de alimento balanceado.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Técnicas de manejo seguro de equipos y herramientas
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 El manejo seguro de equipos y herramientas es un componente fundamental de la elaboración de alimento balanceado para aves de corral. Su aplicación permite prevenir accidentes, proteger la salud del personal, conservar los equipos en buenas condiciones y asegurar que las operaciones se desarrollen conforme a los principios de bioseguridad, inocuidad y calidad del proceso. Las principales prácticas de manejo seguro aplicadas durante la utilización de equipos y herramientas en la elaboración de alimento balanceado son las siguientes:        
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conocer el procedimiento de uso
                p Antes de utilizar balanzas, molinos, mezcladoras, bombas de aspersión u otros equipos, el operario debe conocer las instrucciones de operación, limpieza y apagado. Esta práctica reduce errores durante el manejo y disminuye el riesgo de accidentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Verificar el estado del equipo
                p Antes de iniciar la operación, se revisan cables, tornillos, estabilidad, limpieza, calibración, guardas de seguridad y posibles daños visibles. Esta inspección permite detectar anomalías antes de que afecten el proceso o la seguridad del trabajador.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Utilizar los elementos de protección personal (EPP)
                p Los guantes, tapabocas, botas, gafas, delantales o protectores auditivos se emplean según la actividad desarrollada y el riesgo asociado. Su uso disminuye la exposición a polvos, sustancias químicas, ruido y otros factores presentes durante la elaboración del alimento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Utilizar cada equipo para su función específica
                p Los equipos y herramientas deben emplearse únicamente para las actividades para las cuales fueron diseñados, respetando su capacidad de trabajo y evitando sobrecargas, modificaciones o usos improvisados que puedan ocasionar daños o accidentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aplicar técnicas adecuadas de manipulación
                p El levantamiento de sacos, el transporte de materias primas y la manipulación manual de materiales deben realizarse con posturas correctas y técnicas que reduzcan el esfuerzo físico y prevengan lesiones musculoesqueléticas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Apagar, limpiar y almacenar correctamente
                p Al finalizar la actividad, los equipos se desconectan cuando corresponde, se eliminan los residuos y se almacenan las herramientas en el lugar asignado. Estas acciones favorecen la bioseguridad y prolongan la vida útil de los recursos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reportar fallas o anomalías
                p Cualquier daño, desgaste o funcionamiento irregular debe informarse de inmediato al responsable del proceso para programar la revisión, el mantenimiento o la reparación correspondiente, evitando interrupciones y riesgos durante la operación.
      //- Fin Slideshow
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img4.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La aplicación constante de estas prácticas fortalece la cultura de prevención dentro de la granja y contribuye a que las actividades se desarrollen de forma segura, organizada y eficiente. Además, favorece el cumplimiento de las buenas prácticas avícolas y de las normas de seguridad y salud en el trabajo, reduciendo la probabilidad de accidentes y asegurando la continuidad de los procesos relacionados con la elaboración de alimento balanceado.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Concepto y características de las áreas de trabajo
      p(data-aos="fade-left") Las áreas de trabajo corresponden a los espacios físicos donde se realizan las actividades relacionadas con la recepción, preparación, elaboración, almacenamiento y control del alimento balanceado. Su diseño y organización deben facilitar el desarrollo continuo del proceso, favorecer las condiciones de higiene y bioseguridad y permitir que las operaciones se ejecuten de forma segura y eficiente. Las áreas de trabajo destinadas a la elaboración de alimento balanceado para aves de corral deben reunir las siguientes características:
      //- Inicio Tarjetas
      .row(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta03_1.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Orden funcional
              p.mb-0 La distribución de las zonas de pesaje, mezcla, almacenamiento, limpieza y circulación debe responder a la secuencia lógica del proceso, facilitando el flujo de trabajo y reduciendo interferencias entre actividades.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta03_2.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Higiene y facilidad de limpieza
              p.mb-0 Las superficies deben ser lavables, resistentes y permitir la eliminación de residuos con facilidad, favoreciendo la bioseguridad, la inocuidad del alimento y el control sanitario.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta03_3.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Ventilación e iluminación
              p.mb-0 El área debe contar con condiciones ambientales que proporcionen suficiente iluminación y ventilación para desarrollar las actividades con seguridad, comodidad y adecuada visibilidad.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta03_4.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Protección de los insumos
              p.mb-0 Las materias primas y el alimento terminado deben mantenerse protegidos frente a la humedad, el polvo, las plagas, la radiación solar directa y cualquier otra fuente de contaminación que pueda afectar su calidad.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta03_5.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Seguridad operativa
              p.mb-0 Los espacios deben facilitar el desplazamiento del personal mediante pasillos libres, señalización visible y condiciones que reduzcan el riesgo de accidentes durante la operación de los equipos.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t2/tarjeta03_6.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Separación de zonas críticas
              p.mb-0 Debe existir una diferenciación clara entre las áreas de elaboración, almacenamiento, limpieza, manejo de residuos y otras actividades que puedan representar riesgo de contaminación cruzada.
      //- Fin Tarjetas
      p(data-aos="fade-right") Una adecuada organización de las áreas de trabajo favorece la continuidad de las operaciones, facilita la supervisión de los procesos y contribuye al cumplimiento de las buenas prácticas avícolas. Asimismo, permite optimizar el uso del espacio disponible, mejorar la eficiencia operativa y conservar las condiciones necesarias para producir alimento balanceado de manera segura y con estándares de calidad.
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Técnicas de adecuación de áreas para el proceso alimenticio y productivo
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 La adecuación de las áreas de trabajo comprende el conjunto de acciones orientadas a organizar el espacio físico de acuerdo con las necesidades técnicas, sanitarias y operativas de la elaboración de alimento balanceado. Estas actividades buscan garantizar un ambiente seguro, funcional y compatible con los requisitos de bioseguridad, facilitando el desarrollo ordenado de cada etapa del proceso. A continuación, se presentan las principales técnicas empleadas para adecuar las áreas destinadas a la elaboración de alimento balanceado:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sectorización del proceso
                p Consiste en separar físicamente las zonas de recepción, pesaje, mezcla, almacenamiento, limpieza y despacho del alimento. Esta organización facilita el control del proceso y disminuye el riesgo de contaminación cruzada.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Señalización y rotulación
                p Incluye la identificación de áreas, equipos, rutas de circulación, recipientes, insumos y zonas de almacenamiento mediante avisos y demarcaciones que facilitan el cumplimiento de los procedimientos establecidos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Acondicionamiento de pisos y superficies
                p Comprende la utilización de pisos firmes, antideslizantes y fáciles de limpiar, así como superficies resistentes que favorezcan la higiene y la seguridad durante el trabajo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control de las condiciones ambientales
                p Incluye la ventilación, la iluminación y las medidas destinadas a controlar humedad, temperatura, polvo y plagas, preservando la calidad de las materias primas y del alimento elaborado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ubicación estratégica de equipos y mobiliario
                p La disposición de balanzas, mesas, estanterías, recipientes y demás equipos debe facilitar la secuencia del proceso, reducir desplazamientos innecesarios y mejorar la eficiencia operativa.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta04_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Implementación de medidas de bioseguridad
                p Comprende el establecimiento de puntos de limpieza, control de ingreso, manejo de residuos, almacenamiento de desinfectantes y otras acciones destinadas a proteger el alimento, el personal y las instalaciones frente a riesgos sanitarios.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación integrada de estas técnicas favorece una distribución funcional del área de trabajo, optimiza el flujo de materiales y facilita el desarrollo de las actividades con mayor eficiencia. Además, fortalece los programas de bioseguridad, contribuye al mantenimiento de la inocuidad del alimento balanceado y proporciona condiciones adecuadas para el desarrollo seguro de las operaciones productivas.      
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Métodos de organización y manejo del área de trabajo
      p(data-aos="fade-left") La organización del área de trabajo permite desarrollar las actividades relacionadas con la elaboración de alimento balanceado de manera ordenada, eficiente y segura. La aplicación de métodos de organización facilita el control de los insumos, optimiza el flujo de las operaciones y contribuye al cumplimiento de las buenas prácticas avícolas y de bioseguridad durante todas las etapas del proceso. Los métodos más utilizados para organizar y gestionar las áreas de trabajo en la producción de alimento balanceado son los siguientes:      
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img5.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Organización por zonas funcionales")
                  p.mb-4 Consiste en distribuir el área según las diferentes etapas del proceso, como recepción de materias primas, almacenamiento, pesaje, mezcla, empaque, limpieza y manejo de residuos. Esta organización favorece el flujo de trabajo y disminuye el riesgo de contaminación cruzada.
              .row(titulo="Rotulación e identificación")
                  p.mb-4 Incluye la identificación de equipos, herramientas, recipientes, materias primas y áreas mediante etiquetas o rótulos con información como nombre, lote, fecha de ingreso o condición del producto. Facilita la trazabilidad y reduce errores durante la operación.
              .row(titulo="Almacenamiento ordenado")
                  p.mb-4 Los insumos se ubican sobre estibas, estanterías o recipientes adecuados, respetando criterios de organización y conservación. Este método protege las materias primas, facilita su localización y mejora el aprovechamiento del espacio disponible.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Inspección periódica del área")
                  p.mb-4 Consiste en verificar de forma rutinaria las condiciones de orden, limpieza, funcionamiento de los equipos, presencia de derrames, humedad, plagas o cualquier situación que pueda afectar el proceso. Permite detectar y corregir oportunamente posibles desviaciones.
              .row(titulo="Eliminación de elementos innecesarios")
                  p.mb-4 Comprende el retiro de materiales obsoletos, herramientas dañadas, empaques vacíos u objetos que no participan en el proceso. Esta práctica reduce riesgos, libera espacio y facilita las actividades de limpieza.
              .row(titulo="Control de rutas de circulación")
                  p.mb-4 Consiste en mantener pasillos despejados y definir recorridos para el desplazamiento del personal, materias primas y producto terminado. Favorece la seguridad, evita interferencias y mejora la eficiencia de las operaciones.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img6.png", alt="").img400.m-auto
      //- Fin Accordion
      p(data-aos="fade-left") La aplicación permanente de estos métodos fortalece la organización del proceso productivo y facilita el desarrollo de las actividades bajo condiciones de seguridad, higiene y eficiencia. Además, permite optimizar el uso del espacio disponible, reducir pérdidas de tiempo y mantener un ambiente de trabajo que favorezca la calidad del alimento balanceado.          
      Separador
      //- Inicio Tema2.6
      .row
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Limpieza, orden y mantenimiento de equipos, herramientas y áreas
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 La limpieza, el orden y el mantenimiento constituyen actividades permanentes que contribuyen a conservar las condiciones operativas de los equipos, proteger la inocuidad del alimento y mantener ambientes de trabajo seguros. Estas acciones forman parte de las buenas prácticas avícolas y favorecen la continuidad de los procesos relacionados con la elaboración de alimento balanceado. A continuación, se presentan las principales acciones asociadas con la limpieza, el orden y el mantenimiento de los equipos, herramientas y áreas de trabajo:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta05_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza de equipos
                p Consiste en retirar polvo, residuos, grasa y restos de alimento después de cada uso o cuando se cambia de formulación. Esta práctica evita la contaminación cruzada, conserva la precisión de los equipos y prolonga su vida útil.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza del área de trabajo
                p Incluye barrer, lavar, secar y, cuando corresponda, desinfectar pisos, superficies y zonas de producción. Favorece la bioseguridad, mejora las condiciones sanitarias y reduce riesgos durante la operación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Orden de herramientas e insumos
                p Consiste en almacenar cada elemento en el lugar asignado y mantener una identificación visible. Esto facilita el acceso, reduce pérdidas y mejora el control de los recursos utilizados durante la producción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mantenimiento preventivo
                p Comprende actividades como lubricación, ajuste de piezas, revisión de conexiones, calibración de equipos y reemplazo de componentes desgastados. Su aplicación disminuye la probabilidad de fallas inesperadas y garantiza la continuidad del proceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro de mantenimiento
                p Incluye la documentación de las revisiones realizadas, las fechas de intervención, las reparaciones efectuadas y las observaciones técnicas. Esta información facilita la programación de futuras actividades de mantenimiento y fortalece la trazabilidad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control de daños o deterioro
                p Consiste en identificar oportunamente equipos o herramientas que presenten desgaste o fallas, retirarlos temporalmente de servicio cuando sea necesario y gestionar su reparación o reemplazo para evitar accidentes y afectaciones al proceso.
      //- Fin Slideshow
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img7.png', alt='', style="object-fit: cover;")      
        .col-lg-7.bg-color-2.d-flex.align-items-center.p-4
          p.mb-0 La integración de estas actividades dentro de la rutina de trabajo favorece el funcionamiento continuo de los equipos, mejora las condiciones de bioseguridad y contribuye al cumplimiento de los programas de aseguramiento de la calidad. Asimismo, permite reducir interrupciones en la producción, optimizar el uso de los recursos y conservar las condiciones necesarias para elaborar alimento balanceado seguro y de calidad.
        
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
