<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Normativa de seguridad y salud en el trabajo aplicada al proceso alimenticio
      p(data-aos="fade-left") La seguridad y salud en el trabajo (SST) constituye un componente fundamental de la elaboración de alimento balanceado para aves de corral, ya que establece las medidas necesarias para prevenir accidentes, enfermedades laborales y condiciones que puedan afectar tanto al personal como al proceso productivo. Su aplicación favorece ambientes de trabajo seguros, fortalece la bioseguridad y contribuye a mantener la calidad e inocuidad del alimento elaborado. A continuación, se presentan los principales aspectos de la seguridad y salud en el trabajo aplicados al proceso alimenticio avícola:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Prevención de accidentes laborales")
                p.mb-4 Comprende la implementación de procedimientos seguros para desarrollar actividades como la recepción de insumos, el pesaje, la mezcla, el almacenamiento, la limpieza y el suministro del alimento, disminuyendo la probabilidad de incidentes durante la operación.
              .row(titulo="Control de riesgos laborales")
                p.mb-4 Incluye la identificación y el control de los riesgos físicos, mecánicos, químicos, biológicos, locativos y ergonómicos presentes durante la elaboración del alimento balanceado, permitiendo establecer medidas preventivas acordes con cada actividad.
              .row(titulo="Uso de elementos de protección personal (EPP)")
                p.mb-4 Consiste en utilizar guantes, botas, tapabocas, gafas, protectores auditivos u otros elementos requeridos según el riesgo asociado a cada tarea, reduciendo la exposición del trabajador a agentes peligrosos.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Organización y seguridad del área de trabajo")
                p.mb-4 Comprende el mantenimiento del orden, la limpieza, la señalización, la adecuada circulación y el almacenamiento seguro de materiales, favoreciendo condiciones apropiadas para desarrollar las actividades productivas.
              .row(titulo="Capacitación y cumplimiento de procedimientos")
                p.mb-4 Incluye la formación del personal sobre riesgos, prácticas seguras, protocolos de trabajo y respuesta ante situaciones de emergencia, fortaleciendo la prevención y el desempeño operativo.
              .row(titulo="Relación con la bioseguridad y la inocuidad")
                p.mb-4 Las acciones de seguridad y salud en el trabajo complementan las medidas de bioseguridad, contribuyendo a prevenir la contaminación del alimento y a proteger la salud de las aves y del personal.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img2.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La aplicación permanente de estos componentes favorece ambientes laborales más seguros, mejora la eficiencia de las actividades y contribuye al cumplimiento de las buenas prácticas avícolas y de los programas de aseguramiento de la calidad implementados en la producción de alimento balanceado.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Riesgos asociados a la elaboración de alimento balanceado
      p(data-aos="fade-left") A continuación, se presenta una explicación sobre los principales riesgos laborales que pueden presentarse durante la elaboración de alimento balanceado, sus posibles efectos en la salud y la importancia de implementar medidas preventivas que contribuyan a la seguridad del personal y al desarrollo adecuado del proceso productivo.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Riesgos laborales en la elaboración de alimento balanceado
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t5/img3.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Protocolos de bioseguridad en el área de producción y alimentación
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 Los protocolos de bioseguridad reúnen las medidas orientadas a prevenir el ingreso, la permanencia y la propagación de agentes contaminantes dentro del área destinada a la elaboración del alimento balanceado. Su aplicación protege los insumos, los equipos, las instalaciones y las aves, fortaleciendo la inocuidad del alimento y la sanidad de la producción. A continuación, se presentan las principales medidas de bioseguridad aplicadas al área de producción y alimentación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                 img(src='@/assets/curso/temas/t5/tarjeta01_1.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Control de ingreso del personal
                p Regular el acceso de trabajadores y visitantes mediante procedimientos establecidos, reduciendo el riesgo de introducir agentes contaminantes al área de producción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_2.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Limpieza y desinfección de instalaciones y equipos
                p Mantener las áreas, herramientas y equipos en condiciones higiénicas mediante programas periódicos de limpieza y desinfección que reduzcan la carga microbiológica.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_3.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Control de plagas y animales
                p Implementar medidas preventivas para impedir el ingreso de roedores, insectos, aves silvestres y otros animales que puedan contaminar los insumos o el alimento elaborado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_4.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Inspección de insumos
                p Verificar el estado sanitario, la identificación y las condiciones de las materias primas antes de incorporarlas al almacenamiento o al proceso de producción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_5.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Separación de áreas y control de circulación
                p Mantener diferenciadas las zonas limpias, las áreas de almacenamiento y los espacios destinados al manejo de residuos, estableciendo rutas de circulación que reduzcan la contaminación cruzada.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_6.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Higiene del personal
                p Aplicar prácticas como el lavado de manos, el uso de ropa de trabajo limpia, el empleo de elementos de protección personal y la desinfección del calzado cuando los procedimientos lo requieran.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_7.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Manejo de residuos y materiales no aptos
                p Retirar oportunamente los residuos y gestionar adecuadamente los materiales rechazados o deteriorados para evitar focos de contaminación dentro de la granja.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación sistemática de estos protocolos fortalece los programas de bioseguridad, favorece la inocuidad del alimento balanceado y contribuye al mantenimiento de condiciones sanitarias que protejan la salud de las aves y del personal encargado del proceso productivo.
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Elementos de protección personal y su uso correcto
      p(data-aos="fade-left") Los elementos de protección personal (EPP) constituyen una medida de control destinada a reducir la exposición del trabajador a los riesgos presentes durante la elaboración de alimento balanceado para aves de corral. Su utilización debe responder a las características de cada actividad y complementarse con procedimientos seguros de trabajo, buenas prácticas de higiene y medidas de bioseguridad. Los elementos de protección personal utilizados durante el proceso y la función que cumplen son los siguientes:
      //- Inicio Tarjetas
      .row(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta02_1.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Guantes
              p.mb-0 Protegen las manos durante la manipulación de insumos, detergentes, desinfectantes y otros materiales que puedan causar irritación o contaminación. Deben mantenerse limpios y reemplazarse cuando presenten deterioro.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta02_2.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Botas de seguridad
              p.mb-0 Protegen los pies frente a superficies húmedas, objetos pesados y riesgos de resbalones. Además, contribuyen a mantener las condiciones de bioseguridad cuando se utilizan exclusivamente dentro del área de producción.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta02_3.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Tapabocas o protección respiratoria
              p.mb-0 Reduce la inhalación de polvo generado durante el pesaje y la manipulación de materias primas pulverulentas, así como la exposición a partículas presentes en el ambiente de trabajo.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta02_4.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Gafas de seguridad
              p.mb-0 Protegen los ojos frente a salpicaduras de productos de limpieza, partículas suspendidas o materiales que puedan ocasionar lesiones durante las actividades de producción y saneamiento.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta02_5.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Delantal o bata de trabajo
              p.mb-0 Evita el contacto directo de la ropa con los insumos y contribuye a mantener condiciones adecuadas de higiene durante la elaboración del alimento.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta02_6.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Protectores auditivos
              p.mb-0 Se utilizan cuando el nivel de ruido generado por molinos, mezcladoras u otros equipos supera los límites recomendados, disminuyendo el riesgo de afectaciones auditivas.
      //- Fin Tarjetas
      p(data-aos="fade-left") El uso de los elementos de protección personal debe acompañarse de inspecciones periódicas para verificar su estado, limpieza y funcionamiento. Asimismo, cada trabajador debe conocer la forma correcta de colocarlos, utilizarlos, retirarlos y almacenarlos, garantizando que mantengan su capacidad de protección durante toda la jornada laboral.
      Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Técnicas de ergonomía aplicadas al manejo de insumos, equipos y cargas
      p(data-aos="fade-left") La ergonomía reúne las prácticas orientadas a adaptar las actividades laborales a las capacidades del trabajador, reduciendo el esfuerzo físico y previniendo lesiones asociadas con la manipulación de cargas, los movimientos repetitivos y las posturas inadecuadas. Su aplicación durante la elaboración de alimento balanceado mejora las condiciones de trabajo y favorece la continuidad de las operaciones. A continuación, se presentan algunas prácticas ergonómicas recomendadas para las actividades más frecuentes del proceso:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t5/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Levantamiento de bultos
                p Flexionar las rodillas, mantener la espalda recta y acercar la carga al cuerpo para disminuir el esfuerzo sobre la columna y reducir el riesgo de lesiones lumbares.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Transporte de recipientes o sacos
                p Distribuir el peso de manera equilibrada y evitar movimientos bruscos o giros del tronco durante el desplazamiento, disminuyendo la fatiga y el riesgo de lesiones musculares.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pesaje y dosificación
                p Ubicar las superficies de trabajo a una altura adecuada para mantener una postura cómoda y facilitar la precisión durante las operaciones de medición.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Organización del almacenamiento
                p Colocar los insumos de mayor peso o de uso frecuente en zonas de fácil acceso para reducir esfuerzos innecesarios durante su manipulación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta03_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Trabajo repetitivo
                p Alternar actividades y realizar pausas cuando las condiciones de operación lo permitan, favoreciendo la recuperación muscular y disminuyendo el cansancio acumulado.
      //- Fin Slideshow
      p(data-aos="fade-left") La incorporación de estas prácticas contribuye a mejorar el bienestar del trabajador, optimiza el desempeño de las actividades y reduce la incidencia de lesiones asociadas con la manipulación de materiales durante el proceso productivo.
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Prevención de accidentes y manejo seguro del área de trabajo
      //- Inicio Tarjetas
      p.mb-5(data-aos="fade-left") La prevención de accidentes comprende el conjunto de acciones destinadas a identificar, controlar y reducir los riesgos presentes en el área de elaboración de alimento balanceado. Un ambiente de trabajo organizado y seguro favorece el desarrollo eficiente de las actividades y disminuye la probabilidad de incidentes que puedan afectar al personal, los equipos o la calidad del alimento. La prevención de accidentes durante el proceso productivo requiere la aplicación de las siguientes medidas:
      .row(data-aos="fade-left")
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta04_1.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Mantener el orden y la limpieza
              p.mb-0 Retirar derrames, residuos y materiales innecesarios, manteniendo las áreas despejadas para facilitar la circulación y reducir el riesgo de caídas o contaminación.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta04_2.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Organizar adecuadamente los materiales
              p.mb-0 Ubicar insumos, herramientas y equipos en los lugares destinados para cada uno, evitando obstáculos y facilitando el desarrollo de las actividades.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta04_3.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Inspeccionar equipos e instalaciones
              p.mb-0 Revisar periódicamente el estado de balanzas, mezcladoras, herramientas y demás equipos para detectar oportunamente daños o condiciones inseguras.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta04_4.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Señalizar las zonas de riesgo
              p.mb-0 Identificar áreas con peligro potencial mediante avisos y demarcaciones que orienten al personal y favorezcan el cumplimiento de las medidas preventivas.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta04_5.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Aplicar procedimientos seguros de trabajo
              p.mb-0 Ejecutar las actividades siguiendo los protocolos establecidos para cada operación, utilizando correctamente los equipos y respetando las normas de seguridad.
        .col-12.col-sm-6.col-lg-4.mb-4
          .tarjeta--boton.color-primario.rounded-0.overflow-hidden.h-100.d-flex.flex-column
            figure.mb-0
              img.w-100(src='@/assets/curso/temas/t5/tarjeta04_6.png' alt="")
            .p-3.p-md-4.flex-grow-1
              h4.text-center Reportar condiciones inseguras
              p.mb-0 Informar oportunamente cualquier anomalía, daño o situación que represente un riesgo, facilitando la implementación de acciones correctivas antes de que ocurra un accidente.
      //- Fin Tarjetas
      p(data-aos="fade-left") La prevención de accidentes requiere la participación permanente del personal y el cumplimiento de las medidas de seguridad establecidas para cada actividad. Estas acciones fortalecen la protección del trabajador y contribuyen al desarrollo continuo y seguro del proceso productivo.
      Separador
      //- Inicio Tema5.6
      .row
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.6 Relación entre SST, bioseguridad, bienestar animal y normatividad vigente
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 La seguridad y salud en el trabajo mantiene una relación directa con la bioseguridad, el bienestar animal y el cumplimiento de la normatividad aplicable a la producción avícola. La integración de estos componentes permite desarrollar procesos organizados, seguros y orientados a garantizar la calidad del alimento balanceado y la protección de las personas involucradas en su elaboración. A continuación, se presenta la contribución de cada uno de estos componentes al proceso alimenticio avícola:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t5/tarjeta05_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Seguridad y salud en el trabajo
                p Establece medidas para prevenir accidentes y enfermedades laborales, favoreciendo la continuidad de las operaciones, la protección del personal y el desarrollo seguro de las actividades.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bioseguridad
                p Implementa acciones destinadas a prevenir la contaminación de los insumos, del alimento y de las instalaciones, fortaleciendo la sanidad de la granja y la inocuidad del proceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bienestar animal
                p Contribuye a que las aves reciban alimento elaborado en condiciones adecuadas de higiene y calidad, favoreciendo su salud, desarrollo y desempeño productivo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta05_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Normatividad vigente
                p Proporciona el marco técnico y legal que orienta la organización de los procesos, el cumplimiento de las condiciones sanitarias y la aplicación de las medidas de seguridad requeridas para la producción avícola.
      //- Fin Slideshow
      p(data-aos="fade-left") La integración de estos componentes fortalece la gestión del proceso alimenticio, promueve el cumplimiento de las buenas prácticas avícolas y favorece una producción responsable, segura y orientada a la mejora continua. Además, contribuye a proteger la salud de los trabajadores, preservar la calidad del alimento balanceado y mantener condiciones adecuadas para el bienestar de las aves.

</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/Podcast.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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
