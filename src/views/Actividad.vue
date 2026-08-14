<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Unidades de medida, medición y pesaje en la elaboración de alimento balanceado para aves de corral',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con las unidades de medida, la medición, el pesaje, los instrumentos, el registro de información y el control de errores durante la elaboración de alimento balanceado para aves de corral.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal finalidad de las unidades de medida en la elaboración de alimento balanceado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la precisión en la dosificación de los ingredientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuir el tamaño de las instalaciones productivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el número de trabajadores disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar el comportamiento natural de las aves.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué aplicación permite verificar las cantidades entregadas por los proveedores?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preparación de mezclas con ingredientes diversos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recepción de insumos para controlar cantidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Control sanitario de las instalaciones avícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manejo de residuos durante la producción diaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica de las unidades de medida permite obtener resultados uniformes en diferentes procesos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento del volumen de producción diaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción del número de materias primas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estandarización de las mediciones realizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminución del consumo de alimento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué propiedad permite comprobar la validez de las mediciones mediante instrumentos calibrados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comparabilidad entre diferentes procesos productivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trazabilidad de todos los registros técnicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilidad operativa para planificar actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificabilidad de las mediciones obtenidas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Pregunta 5	¿Cuál es la unidad más utilizada para expresar el peso de materias primas?	',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Opción a)	Litros y mililitros para líquidos.	',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pascal y bar para presión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gramos, kilogramos y toneladas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Litros por minuto y metros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de medida determina el espacio ocupado por una sustancia?	',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Peso utilizado en las formulaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Volumen empleado para líquidos diversos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Caudal presente en tuberías hidráulicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presión aplicada sobre superficies.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué instrumento se utiliza para medir pequeños volúmenes de líquidos con mayor exactitud?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cinta métrica para espacios físicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Báscula destinada a grandes cargas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Jarra utilizada para líquidos comunes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Probeta o cilindro graduado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la función principal del caudalímetro?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar el peso del alimento elaborado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar la temperatura del almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir la presión del sistema hidráulico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el caudal de agua en las tuberías.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué debe verificarse antes de iniciar el proceso de pesaje?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La edad de las aves del lote.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de residuos existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La calibración y el nivel del equipo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La humedad del ambiente externo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué acción se realiza antes de adicionar el ingrediente al recipiente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Retirar el lote del almacenamiento general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar la tara del recipiente vacío.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el tiempo de mezclado total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar la formulación establecida previamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué información fortalece la trazabilidad del proceso de producción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La temperatura ambiental diaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La velocidad del viento exterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El registro de la fecha y la hora.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La ubicación geográfica de la granja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué dato permite comparar el valor esperado con el realmente obtenido?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nombre completo del proveedor registrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad programada y cantidad real medida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ubicación física del almacenamiento interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de trabajadores del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una consecuencia de utilizar una balanza sin calibrar?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor duración del almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento del espacio disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sobredosificación o subdosificación de ingredientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminución automática del consumo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Pregunta 14	¿Qué error ocurre cuando no se realiza la tara del recipiente?	',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se incrementa la humedad del alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El peso del recipiente se suma al ingrediente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se reduce el tiempo de mezcla establecido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El agua pierde presión durante el suministro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué puede ocasionar la confusión entre gramos y kilogramos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor eficiencia del proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminución del desgaste de equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Errores importantes en la formulación nutricional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incremento de la ventilación del área.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué práctica previene la confusión entre materias primas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la frecuencia del mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la velocidad del pesaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar continuamente los recipientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar correctamente los insumos antes del pesaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué actividad corresponde al paso final del proceso de medición y pesaje?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificar nuevamente la formulación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar la cantidad programada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limpiar los equipos y dejarlos preparados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clasificar nuevamente las materias primas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué unidad se utiliza normalmente para expresar el caudal?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Kilogramos por tonelada producida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Litros por minuto (L/min).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mililitros por kilogramo mezclado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pascal por segundo trabajado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué finalidad tiene el registro de observaciones durante la medición?	',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tamaño de las bodegas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el control documental existente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aportar información útil para el análisis técnico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar la velocidad del mezclado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el principal beneficio del control de errores en medición y pesaje?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la cantidad de registros técnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el número de equipos utilizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el tiempo de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar la calidad del alimento y la trazabilidad del proceso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
