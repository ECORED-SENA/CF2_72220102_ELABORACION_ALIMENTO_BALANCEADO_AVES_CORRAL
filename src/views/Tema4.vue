<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Limpieza, higiene y desinfección en el área de producción
      p(data-aos="fade-left") La limpieza, la higiene y la desinfección constituyen actividades esenciales para garantizar la inocuidad del alimento balanceado, proteger la salud de las aves y mantener condiciones adecuadas de bioseguridad durante el proceso productivo. Su aplicación sistemática permite controlar los riesgos de contaminación, conservar la calidad de los insumos y asegurar que las áreas, equipos y herramientas permanezcan en condiciones apropiadas para su utilización. A continuación, se presentan los conceptos fundamentales relacionados con la limpieza, la higiene y la desinfección, así como su aplicación dentro de la elaboración de alimento balanceado para aves de corral:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Limpieza")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Limpieza
                  p Consiste en la remoción de suciedad, polvo, restos de alimento, grasa, materia orgánica y otros residuos presentes en equipos, herramientas, recipientes, superficies y áreas de trabajo. Se aplica en balanzas, mezcladoras, tolvas, mesas, pisos, estanterías y zonas de almacenamiento, preparando las superficies para su uso o para los procesos de desinfección.
            .py-3.py-md-4(titulo="Higiene")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
                .col-md-6
                  h4 Higiene
                  p Comprende el conjunto de prácticas y condiciones destinadas a conservar un ambiente de trabajo limpio y sanitario. Incluye el orden del área, el lavado de manos, el uso de ropa limpia y elementos de protección personal, el manejo adecuado de residuos y la prevención de la contaminación durante la manipulación del alimento. Su finalidad es mantener condiciones seguras durante todo el proceso productivo.
            .py-3.py-md-4(titulo="Desinfección")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t4/tarjeta01_3.png')
                .col-md-6
                  h4 Desinfección
                  p Corresponde a la aplicación de agentes físicos o químicos sobre superficies previamente limpias para reducir o eliminar microorganismos. Se realiza en equipos, herramientas, recipientes, áreas de trabajo y puntos de acceso, contribuyendo al fortalecimiento de la bioseguridad y al control de la contaminación microbiológica.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La integración de estos tres componentes dentro de un programa sanitario permite mantener condiciones apropiadas para la elaboración del alimento balanceado, fortalecer el aseguramiento de la calidad y reducir los riesgos asociados con la contaminación de los insumos y del producto terminado.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Tipos de limpieza y desinfección aplicados al proceso productivo
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 Las actividades de limpieza y desinfección deben adaptarse a las características de cada área, equipo o procedimiento desarrollado durante la elaboración del alimento balanceado. Por esta razón, es necesario aplicar diferentes tipos de limpieza y desinfección según el nivel de riesgo, la frecuencia de uso y las condiciones sanitarias del proceso. El proceso de limpieza y desinfección en la producción avícola comprende los siguientes tipos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t4/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza rutinaria o diaria
                p Se realiza durante la jornada o al finalizar las actividades para retirar polvo, restos de alimento, derrames y suciedad acumulada en equipos, recipientes, mesas, pisos y demás superficies de uso frecuente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza profunda o periódica
                p Comprende actividades programadas que incluyen el lavado detallado de bodegas, estanterías, paredes, rincones y el desmontaje parcial de equipos para eliminar residuos de difícil acceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza correctiva o extraordinaria
                p Se aplica cuando ocurren derrames, contaminación de materiales, presencia de plagas o cualquier situación que requiera un saneamiento adicional para restablecer las condiciones del área.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza seca
                p Consiste en retirar polvo y residuos mediante cepillado, raspado o aspiración, sin utilizar agua. Se emplea principalmente en áreas donde la humedad puede afectar las materias primas o favorecer el deterioro del alimento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza húmeda
                p Utiliza agua, detergentes o soluciones de lavado para eliminar suciedad adherida en pisos, recipientes, utensilios y otras superficies que requieren una limpieza más profunda.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Desinfección rutinaria
                p Se realiza de forma programada sobre equipos, herramientas, superficies y puntos de acceso utilizando desinfectantes autorizados, como parte de las actividades habituales de bioseguridad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Desinfección terminal
                p Se ejecuta al finalizar un ciclo de trabajo, antes de reiniciar actividades o después del vaciado de un área, con el propósito de reducir la carga microbiológica antes de un nuevo proceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Desinfección de contingencia
                p Se implementa como respuesta a eventos sanitarios, hallazgos de contaminación o fallas de bioseguridad que requieren intervenciones adicionales para controlar el riesgo microbiológico.
      //- Fin Slideshow
      p(data-aos="fade-left") La selección del procedimiento más apropiado depende de las condiciones del área intervenida, del tipo de residuo presente y del objetivo sanitario que se pretende alcanzar. La aplicación planificada de estas actividades fortalece los programas de bioseguridad, favorece la inocuidad del alimento balanceado y contribuye al mantenimiento de ambientes de trabajo seguros y técnicamente controlados.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Procedimientos de limpieza y desinfección
      p(data-aos="fade-left") Los procedimientos de limpieza y desinfección deben ejecutarse de forma planificada y siguiendo una secuencia que garantice la eliminación de residuos y el control de los microorganismos presentes en las áreas, equipos y herramientas utilizadas durante la elaboración de alimento balanceado. Su correcta aplicación permite mantener condiciones adecuadas de bioseguridad, preservar la inocuidad del alimento y reducir los riesgos de contaminación durante el proceso productivo. El procedimiento de limpieza y desinfección comprende las siguientes etapas:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Retiro de residuos
                p Consiste en eliminar sacos vacíos, restos de alimento, polvo, derrames y otros materiales visibles que puedan interferir con las etapas posteriores del proceso.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_2.png').img125
              .col-12.col-lg.text-start
                h4 Limpieza física
                p Comprende el barrido, raspado, cepillado o aspirado de las superficies para retirar la suciedad adherida y disminuir la carga de materia orgánica.
            .row.align-items-center
              .col-12.col-lg
                h4 Lavado con agua y detergente
                p Cuando las características del equipo o de la superficie lo permiten, se aplica agua y detergente para remover residuos finos, grasa y suciedad persistente, siguiendo las recomendaciones del fabricante del producto.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_4.png').img125
              .col-12.col-lg.text-start
                h4 Enjuague o secado previo
                p Se eliminan los residuos de detergente o se seca completamente la superficie, según corresponda, para favorecer la acción del desinfectante y evitar su inactivación.
            .row.align-items-center
              .col-12.col-lg
                h5 Aplicación del desinfectante
                p El producto se prepara en la concentración indicada y se aplica mediante el método establecido, como aspersión, inmersión o fricción, de acuerdo con el tipo de superficie y el protocolo definido.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_6.png').img125
              .col-12.col-lg.text-start
                h4 Tiempo de contacto
                p Se respeta el tiempo recomendado para que el desinfectante actúe eficazmente sobre los microorganismos presentes en la superficie tratada.
            .row.align-items-center
              .col-12.col-lg
                h4 Habilitación del área o del equipo
                p Una vez finalizado el procedimiento, se realiza el enjuague cuando sea necesario o se permite el secado completo antes de reiniciar las actividades, garantizando condiciones seguras para la elaboración del alimento.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_7.png').img125
      //- Linea de tiempo
      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10
          .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-4.p-4
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/icono.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start              
              p.mb-0 La estandarización de estos procedimientos facilita el cumplimiento de los programas de limpieza y bioseguridad, mejora la eficiencia de las actividades de saneamiento y permite mantener registros que respalden el control de calidad y la trazabilidad de los procesos.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Insumos utilizados en limpieza y desinfección
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 Las actividades de limpieza y desinfección requieren el uso de insumos específicos que permitan remover la suciedad, controlar la contaminación microbiológica y proteger las condiciones sanitarias del área de producción. La selección de estos recursos depende del tipo de superficie, del nivel de suciedad, del procedimiento que se va a realizar y de las recomendaciones establecidas para cada producto. A continuación, se presentan los principales insumos utilizados durante las actividades de limpieza y desinfección en la elaboración de alimento balanceado: 
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Insumos de limpieza")
                p.mb-4 Incluyen agua, detergentes, jabones, cepillos, escobas, paños, esponjas y rasquetas. Su función es retirar suciedad, polvo, grasa y residuos de alimento presentes en equipos, herramientas y superficies.
              .row(titulo="Equipos de apoyo para la limpieza")
                p.mb-4 Comprenden baldes, mangueras, hidrolavadoras, recipientes de lavado y otros implementos que facilitan la aplicación de agua y detergentes, así como la remoción de residuos.
              .row(titulo="Insumos de desinfección")
                p.mb-4 Corresponden a productos autorizados como hipocloritos, amonios cuaternarios, yodóforos, peróxidos u otros desinfectantes aprobados para uso pecuario. Se aplican sobre superficies previamente limpias para reducir la presencia de microorganismos.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Elementos para medición y preparación")
                p.mb-4 Incluyen recipientes graduados, balanzas, cucharas medidoras y otros instrumentos utilizados para preparar las soluciones de limpieza y desinfección en las concentraciones establecidas.
              .row(titulo="Elementos de protección personal")
                p.mb-4 Comprenden guantes, botas, tapabocas, gafas y delantales utilizados para proteger al trabajador durante la manipulación de detergentes, desinfectantes y residuos generados durante las labores de saneamiento.
              .row(titulo="Material para control y señalización")
                p.mb-4 Incluye etiquetas, avisos, marcadores y formatos de registro empleados para identificar los productos utilizados, documentar las actividades realizadas y facilitar el seguimiento de los procedimientos de limpieza y desinfección.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img2.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") La utilización adecuada de estos insumos favorece la eficacia de los programas de saneamiento, contribuye a la conservación de las condiciones higiénicas del área de producción y fortalece las medidas de bioseguridad implementadas durante la elaboración de alimento balanceado para aves de corral.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Indicaciones de uso, concentraciones y diluciones
      p(data-aos="fade-left") La eficacia de los productos utilizados en los procesos de limpieza y desinfección depende de su correcta preparación y aplicación. Para obtener los resultados esperados, es indispensable seguir las indicaciones establecidas por el fabricante y los procedimientos definidos por la granja, respetando las concentraciones, las diluciones y los tiempos de contacto recomendados para cada producto. La preparación y el uso de detergentes y desinfectantes requiere considerar los siguientes aspectos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                 img(src='@/assets/curso/temas/t4/tarjeta04_1.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Lectura de las indicaciones del producto
                p Antes de utilizar un detergente o desinfectante, se deben revisar las instrucciones relacionadas con el tipo de superficie, el método de aplicación, el tiempo de contacto, las incompatibilidades y las medidas de seguridad, garantizando un uso adecuado del producto.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_2.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Preparación de la dilución
                p La cantidad de producto y de agua debe medirse con precisión utilizando recipientes graduados u otros instrumentos apropiados, obteniendo la concentración recomendada para asegurar la eficacia del procedimiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_3.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Uso de recipientes e instrumentos adecuados
                p Las soluciones deben prepararse en recipientes limpios, correctamente identificados y destinados exclusivamente para esta actividad, evitando errores durante su utilización y reduciendo el riesgo de contaminación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_4.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Respeto del tiempo de contacto
                p El desinfectante debe permanecer sobre la superficie el tiempo establecido por el fabricante para permitir la acción efectiva sobre los microorganismos presentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_5.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 Utilización de elementos de protección personal
                p Durante la preparación y aplicación de los productos deben utilizarse los elementos de protección requeridos, como guantes, gafas, botas o delantal, disminuyendo la exposición del trabajador a sustancias químicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-1
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta04_6.png')
              .col-lg-7.order-2.mb-3.mb-lg-0
                h4 No mezclar productos sin autorización
                p Los detergentes y desinfectantes solo deben combinarse cuando el fabricante lo indique expresamente. Las mezclas improvisadas pueden generar reacciones peligrosas, disminuir la eficacia del tratamiento o producir sustancias nocivas.
      //- Fin Slideshow
      p(data-aos="fade-left") El cumplimiento de estas recomendaciones garantiza un uso seguro y eficiente de los productos empleados durante las actividades de saneamiento, favorece la protección del personal y contribuye al mantenimiento de condiciones adecuadas de higiene y bioseguridad en el área de producción.
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Periodicidad de los procesos de limpieza y desinfección
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-12
          .d-flex.flex-column.flex-lg-row.align-items-center
            .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
              img(src='@/assets/curso/temas/bg/lineas.svg', style="width: 80px")
            .flex-grow-1.text-center.text-lg-start
              p.mb-0 La periodicidad corresponde a la frecuencia con la que deben ejecutarse las actividades de limpieza y desinfección de acuerdo con el nivel de riesgo, el uso de los equipos y las características de cada área de trabajo. Establecer un cronograma de actividades permite mantener condiciones sanitarias constantes, optimizar los recursos y prevenir la acumulación de suciedad o contaminantes. Un plan de limpieza y desinfección incluye las siguientes actividades y su frecuencia habitual de ejecución:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mesas de pesaje, recipientes y utensilios de uso continuo
                p Realizar limpieza y, cuando corresponda, desinfección al finalizar cada jornada o después de concluir las actividades de producción.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pisos del área de elaboración
                p Retirar derrames, barrer y efectuar el lavado cuando sea necesario como parte de las actividades diarias de higiene.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Balanzas y equipos de uso frecuente
                p Limpiar las superficies de contacto y verificar la ausencia de residuos al finalizar cada jornada o después de cada uso cuando el procedimiento lo requiera.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Estanterías y áreas de almacenamiento
                p Retirar polvo, revisar el orden de los materiales y realizar limpieza periódica, generalmente con frecuencia semanal.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bodega de insumos
                p Ejecutar limpieza profunda, inspeccionar condiciones de humedad y verificar el control de plagas de acuerdo con el cronograma establecido y el nivel de riesgo de la instalación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mezcladoras, tolvas y equipos de mayor capacidad
                p Realizar limpieza profunda conforme a la frecuencia de uso, al cambio de formulación o al programa de mantenimiento sanitario definido por la granja.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta05_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Puntos de bioseguridad y accesos
                p Limpiar y renovar las soluciones sanitarias según el tránsito de personal y las condiciones establecidas en el programa de bioseguridad.
      //- Fin Slideshow
      p(data-aos="fade-left") La frecuencia de estas actividades debe ajustarse cuando se presenten cambios en el proceso, incremento de la producción, eventos sanitarios o condiciones ambientales que aumenten el riesgo de contaminación, manteniendo siempre un programa documentado y sujeto a seguimiento.      
      Separador
      //- Inicio Tema4.6
      .row
        #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.6 Verificación de la efectividad de los procedimientos sanitarios
      p(data-aos="fade-left") La verificación permite comprobar que las actividades de limpieza y desinfección se realizaron correctamente y que las condiciones higiénicas alcanzadas son adecuadas para continuar con la elaboración del alimento balanceado. Este proceso hace parte del aseguramiento de la calidad y facilita la identificación oportuna de desviaciones que requieran acciones correctivas. La verificación de la efectividad de los procedimientos sanitarios puede realizarse mediante los siguientes métodos:
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
                              img(src='@/assets/curso/temas/t4/tarjeta06_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Inspección visual
                            p.text-start Permite comprobar que las superficies, equipos y áreas se encuentren libres de suciedad, polvo, residuos, derrames o humedad, constituyendo el primer nivel de verificación del procedimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta06_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Lista de chequeo
                            p.text-start Registra el cumplimiento de cada etapa del proceso, los productos utilizados, el responsable de la actividad y las observaciones identificadas, facilitando el seguimiento y la trazabilidad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta06_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Revisión de diluciones y registros
                            p.text-start Verifica que las soluciones de limpieza y desinfección hayan sido preparadas correctamente y que los procedimientos se ejecutaran conforme a los protocolos establecidos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta06_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Seguimiento de hallazgos sanitarios
                            p.text-start Evalúa la presencia de plagas, malos olores, contaminación recurrente o cualquier condición que indique deficiencias en el programa de higiene, permitiendo implementar acciones correctivas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta06_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Muestreos o pruebas específicas
                            p.text-start Cuando el nivel de control lo requiere, pueden realizarse evaluaciones microbiológicas u otras pruebas técnicas para confirmar la efectividad de los procedimientos de limpieza y desinfección.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t4/img3.png', style="width: 300px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") La verificación sistemática fortalece los programas de higiene y bioseguridad, proporciona información para la mejora continua y permite confirmar que las áreas, equipos y herramientas reúnen las condiciones necesarias para elaborar alimento balanceado de forma segura y conforme a los estándares de calidad establecidos.
</template>

<script>
export default {
  name: 'Tema4',
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
