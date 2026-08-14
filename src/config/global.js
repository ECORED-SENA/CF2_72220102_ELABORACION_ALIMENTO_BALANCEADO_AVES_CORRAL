export default {
  global: {
    Name: 'Elaboración de alimento balanceado para aves de corral',
    Description:
      'El componente formativo presenta los fundamentos técnicos para la elaboración de alimento balanceado para aves de corral. Aborda el uso de unidades de medida, equipos, insumos, procedimientos de limpieza y bioseguridad, seguridad y salud en el trabajo, almacenamiento, manejo del alimento y gestión de residuos. Su aplicación fortalece la calidad del proceso, la inocuidad del alimento, el bienestar animal y la eficiencia productiva.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Unidades de medida, medición y pesaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto e importancia de las unidades de medida en la producción animal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características de las unidades de medida',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de medida: peso, volumen, presión y caudal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instrumentos y equipos para medición y pesaje',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Técnicas de medición y pesaje aplicadas al proceso productivo',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Registro e interpretación de medidas en la producción',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Control de errores en medición y pesaje',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Equipos, herramientas y áreas de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Características y criterios de selección de equipos y herramientas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de manejo seguro de equipos y herramientas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Concepto y características de las áreas de trabajo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Técnicas de adecuación de áreas para el proceso alimenticio y productivo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Métodos de organización y manejo del área de trabajo',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Limpieza, orden y mantenimiento de equipos, herramientas y áreas',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Insumos: recepción, selección, manipulación y conservación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de recepción e inspección de insumos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de selección y clasificación de insumos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métodos de acopio y almacenamiento de insumos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de manipulación y uso de insumos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Métodos de conservación de insumos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Métodos de disposición de insumos no aptos o sobrantes',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Control de calidad de insumos en el proceso productivo',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Limpieza, higiene y desinfección en el área de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Tipos de limpieza y desinfección aplicados al proceso productivo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimientos de limpieza y desinfección',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Insumos utilizados en limpieza y desinfección',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Indicaciones de uso, concentraciones y diluciones',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Periodicidad de los procesos de limpieza y desinfección',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Verificación de la efectividad de los procedimientos sanitarios',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Normativa de seguridad y salud en el trabajo aplicada al proceso alimenticio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Riesgos asociados a la elaboración de alimento balanceado',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Protocolos de bioseguridad en el área de producción y alimentación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Elementos de protección personal y su uso correcto',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Técnicas de ergonomía aplicadas al manejo de insumos, equipos y cargas',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Prevención de accidentes y manejo seguro del área de trabajo',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo:
              'Relación entre SST, bioseguridad, bienestar animal y normatividad vigente',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Empacado, rotulado, almacenamiento y manejo de la ración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Materiales y técnicas de empacado del alimento balanceado',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Información básica del rotulado y trazabilidad del producto',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Almacenamiento del alimento elaborado y condiciones del ambiente',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Manejo de plagas en áreas de almacenamiento',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Conservación de la ración y prevención del deterioro',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo:
              'Control del despacho, suministro y uso del alimento en granja',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Agente patógeno',
      significado:
        'Microorganismo capaz de causar enfermedades en las aves o contaminar el alimento.',
    },
    {
      termino: 'Apelmazamiento',
      significado:
        'Compactación del alimento o de un insumo causada principalmente por la humedad o el almacenamiento inadecuado.',
    },
    {
      termino: 'Calibración',
      significado:
        'Procedimiento mediante el cual se verifica y ajusta un instrumento de medición para garantizar resultados precisos.',
    },
    {
      termino: 'Caudal',
      significado:
        'Cantidad de líquido que circula por un punto determinado durante un tiempo específico.',
    },
    {
      termino: 'Concentración',
      significado:
        'Proporción de un producto activo presente en una solución de limpieza o desinfección.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de agentes físicos, químicos o biológicos desde un material, superficie o equipo hacia otro.',
    },
    {
      termino: 'Dosificación',
      significado:
        'Determinación y aplicación de la cantidad exacta de un ingrediente o producto según una formulación o procedimiento técnico.',
    },
    {
      termino: 'Enranciamiento',
      significado:
        'Alteración de grasas y aceites que provoca cambios en el olor, sabor y calidad del alimento.',
    },
    {
      termino: 'Enzimas',
      significado:
        'Proteínas utilizadas como aditivos para mejorar la digestibilidad y el aprovechamiento de los nutrientes.',
    },
    {
      termino: 'Estandarización',
      significado:
        'Aplicación de criterios uniformes que permiten desarrollar un proceso de manera repetible y controlada.',
    },
    {
      termino: 'Granulometría',
      significado:
        'Tamaño y distribución de las partículas que conforman un ingrediente o alimento.',
    },
    {
      termino: 'Homogeneidad',
      significado:
        'Uniformidad en la distribución de los ingredientes dentro de una mezcla.',
    },
    {
      termino: 'Higroscópico',
      significado: 'Material con capacidad para absorber humedad del ambiente.',
    },
    {
      termino: 'Hipoclorito',
      significado:
        'Desinfectante utilizado para reducir la carga microbiana en superficies y equipos, siguiendo las concentraciones recomendadas.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Condición que garantiza que un alimento no representa riesgos para la salud cuando se utiliza conforme a su finalidad.',
    },
    {
      termino: 'Micotoxinas',
      significado:
        'Sustancias tóxicas producidas por algunos hongos que pueden contaminar las materias primas y el alimento.',
    },
    {
      termino: 'Normatividad',
      significado:
        'Conjunto de normas y disposiciones que regulan el desarrollo de una actividad.',
    },
    {
      termino: 'Núcleo vitamínico-mineral',
      significado:
        'Mezcla concentrada de vitaminas, minerales y otros componentes utilizada para complementar la formulación del alimento.',
    },
    {
      termino: 'Palatabilidad',
      significado:
        'Grado de aceptación del alimento por parte de las aves, determinado por características como sabor, olor y textura.',
    },
    {
      termino: 'Pascal (Pa)',
      significado:
        'Unidad del Sistema Internacional utilizada para medir la presión.',
    },
    {
      termino: 'PEPS (Primero en Entrar, Primero en Salir)',
      significado:
        'Método de rotación de inventarios que consiste en utilizar primero los productos que ingresaron inicialmente al almacenamiento.',
    },
    {
      termino: 'Pigmentante',
      significado:
        'Aditivo utilizado para modificar o intensificar la coloración de productos avícolas, especialmente la yema del huevo.',
    },
    {
      termino: 'Rotulado',
      significado:
        'Identificación del producto mediante información que facilita su reconocimiento, control y trazabilidad.',
    },
    {
      termino: 'Secuestrante de micotoxinas',
      significado:
        'Aditivo utilizado para reducir la absorción de micotoxinas presentes en las materias primas o en el alimento.',
    },
    {
      termino: 'Sistema Internacional de Unidades (SI)',
      significado:
        'Sistema de medición adoptado internacionalmente como referencia para expresar magnitudes físicas.',
    },
    {
      termino: 'Tara',
      significado:
        'Peso del recipiente vacío utilizado para descontarlo durante el proceso de pesaje.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para identificar y seguir el recorrido de un producto desde la recepción de los insumos hasta su utilización final.',
    },
    {
      termino: 'Vida útil',
      significado:
        'Periodo durante el cual un alimento o insumo conserva sus características de calidad y puede utilizarse de forma segura.',
    },
    {
      termino: 'Yodóforos',
      significado:
        'Desinfectantes formulados a base de yodo y agentes estabilizantes, utilizados para reducir microorganismos en equipos, utensilios y superficies limpias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Codex Alimentarius Commission. (2004). Code of practice on good animal feeding (CXC 54-2004).',
      link: 'https://www.fao.org/fao-who-codexalimentarius',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2013). Poultry development review.',
      link: '',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2021). Good practices for the feed sector: Implementing the Codex Alimentarius Code of Practice on Good Animal Feeding.',
      link: '',
    },
    {
      referencia:
        'International Labour Organization. (2011). Seguridad y salud en la agricultura: Repertorio de recomendaciones prácticas.',
      link: 'https://www.ilo.org/es/publications/seguridad-y-salud-en-la-agricultura-repertorio-de-recomendaciones-practicas',
    },
    {
      referencia:
        'Leeson, S., & Summers, J. D. (2009). Commercial poultry nutrition (3.ª ed.). Nottingham University Press.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (2024). Terrestrial Animal Health Code.',
      link: '',
    },
    {
      referencia:
        'Zuluaga, J. J., & Gómez, C. A. (Eds.). (2019). Producción avícola: Fundamentos técnicos para sistemas de alimentación, bioseguridad y manejo. Ecoe Ediciones.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
