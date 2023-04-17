export default {
  global: {
    componenteFormativo:
      'Gemelos digitales, aplicaciones VR e ingeniería inversa',
    descripcionCurso:
      'Los gemelos digitales son copias virtuales de un objeto o un proceso creadas con el fin de analizar su rendimiento a través de la simulación de su comportamiento, gracias a lo cual es posible mejorar los procesos de diseño y predecir posibles fallos o mantenimientos. Este concepto va acompañado del modelado 3D, que es la base fundamental de los gemelos digitales y de algunas aplicaciones como las de realidad aumentada, donde el usuario puede interactuar con un modelo 3D en diferentes grados de inmersión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Control y gestión de dispositivo háptico, alcances',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Vinculación a la VR',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Software</em> para modelo libre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Modelado basado en superficies',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Visualización o renderizado',
            hash: 't_3_2',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Artículo Gemelos digitales',
      referencia:
        'Aquino Robles. J.A. (2019), <em>Los gemelos digitales, la última frontera de la Ingeniería Mecatrónica</em>. Academia.edu. ',
      tipo: 'Artículo',
      link:
        'https://www.academia.edu/45001652/Los_gemelos_digitales_la_%C3%BAltima_frontera_de_la_Ingenier%C3%ADa_Mecatr%C3%B3nica',
    },
    {
      tema: 'Manual uso <em>Solid Works</em>',
      referencia: 'Dasault Systems, (2022), <em>Introducing solidworks</em>',
      tipo: 'Manual',
      link: 'https://files.solidworks.com/pdf/introsw.pdf ',
    },
    {
      tema: 'Manual de uso UNITY para VR',
      referencia:
        'UNITY. (2021). <em>Manual: Getting started with VR development in Unity</em>. Unity',
      tipo: 'Manual',
      link: 'https://docs.unity3d.com/Manual/VROverview.html',
    },
    {
      tema: 'Manual <em>Geomagic Free Form</em> ',
      referencia:
        '3D Systems. (2021). <em>Download Geomagic Freeform Software Documents</em>. 3D Systems.',
      tipo: 'Manual',
      link: 'https://www.3dsystems.com/software/geomagic-freeform/documents ',
    },
  ],
  glosario: [
    {
      termino: 'Brillo',
      significado:
        'propiedad de un aspecto visual que determina la intensidad de este después de elegir el matiz.',
    },
    {
      termino: 'Caja de colores',
      significado:
        'funcionalidad que permite definir los colores a lo largo de dos ejes basándose en unos valores de color rojo, verde y azul.',
    },
    {
      termino: 'Calidad de fotorrealismo',
      significado:
        'opción de representación que controla la calidad de fotorrealismo en una superficie en un modelo.',
    },
    {
      termino: 'Efecto cáustico',
      significado:
        'patrones de iluminación creados mediante la reflexión o la refracción de la luz cuando esta toca una superficie. Un efecto cáustico se puede ver cuando la luz se refleja o se refracta a través de algún material para crear una luz más fuerte y enfocada en la ubicación final.',
    },
    {
      termino: 'Foco',
      significado: 'nitidez de un haz de rayos de un proyector.',
    },
    {
      termino: 'Fondo',
      significado:
        'el entorno, aparte de la habitación, en la que se crea la representación fotorrealista del modelo.',
    },
    {
      termino: 'Forma',
      significado:
        'un objeto de una función de estilo libre que se crea o se importa en la función. Una primitiva simple se considera una forma cuando se añade a la función. Una función de estilo libre puede tener varias formas.',
    },
    {
      termino: 'Fotorrealismo de la ventana',
      significado: 'genera una imagen fotorrealista del modelo.',
    },
    {
      termino: 'Punto de arrastre',
      significado:
        'herramienta gráfica que permite manipular elementos de malla en la malla de control y aplicarles una escala. El resultado de los cambios en la geometría se muestra de forma dinámica en la ventana gráfica. Los ejes del punto de arrastre se denominan puntos de control. El punto de arrastre soporta traslaciones lineales, planas y libres, y los movimientos angulares para la manipulación de la malla de control. Proporciona la traslación, la rotación y los puntos de arrastre de orientación para un movimiento o rotación fácil. El punto de arrastre también soporta las escalas lineales, planas y 3D.',
    },
    {
      termino: 'RA (realidad aumentada)',
      significado:
        'el concepto de realidad aumentada o RA se refiere a la generación de elementos de audio o visuales mediante un ordenador y a su proyección en el mundo real.',
    },
    {
      termino: 'Superficie curva',
      significado: 'superficie o pared plegada.',
    },
    {
      termino: 'Tecnología háptica',
      significado:
        'la tecnología háptica proporciona sugerencias a los usuarios a través de sensaciones táctiles, de movimiento o de vibración.',
    },
    {
      termino: 'Transformación',
      significado:
        'proceso o resultado de la modificación de una apariencia, estado o fase a otro.',
    },
    {
      termino: 'Variación',
      significado: 'uno que es ligeramente diferente del resto del mismo tipo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrés, J. (2022, February 1). <em>Programas para crear realidad virtual</em>. I AM VR. Retrieved September 6, 2022, from ',
      link: 'https://i-amvr.com/programas-para-crear-realidad-virtual/',
    },
    {
      referencia:
        'Autodesk. (2020, February 3). <em>Introducción al modelado de piezas | Inventor LT 2019</em>. <em>Autodesk Knowledge Network. Retrieved September</em> 5, 2022, from ',
      link:
        'https://knowledge.autodesk.com/es/support/inventor-lt/learn-explore/caas/CloudHelp/cloudhelp/2019/ESP/InventorLT-Help/files/GUID-AC215159-EC2E-4B4D-BE91-BCACE4CCACA0-htm.html',
    },
    {
      referencia:
        'BibLus. (2019, November 13). <em>Renderización: definición, tipos y técnicas de visualización</em>. BibLus. Retrieved September 15, 2022, from',
      link:
        'https://biblus.accasoftware.com/es/renderizacion-definicion-tipos-y-tecnicas-de-visualizacion/',
    },
    {
      referencia:
        'Dasault Systems. (n.d.). <em>Introducing solidworks. Solindworks</em>. Retrieved September 16, 2022, from',
      link: 'https://files.solidworks.com/pdf/introsw.pdf ',
    },
    {
      referencia:
        'Futuro Electronico. (n.d.). <em>Tecnología háptica | Qué es, cómo funciona, ejemplos y su futuro</em>. Futuro Eléctrico. Retrieved September 16, 2022, from ',
      link: 'https://futuroelectrico.com/tecnologia-haptica/ ',
    },
    {
      referencia:
        'González, C. (2022, May 22). ¿<em>Qué son los Digital Twins o Gemelos Digitales</em>? ComputerHoy.com. Retrieved September 5, 2022, from',
      link:
        'https://computerhoy.com/reportajes/tecnologia/son-digital-twins-gemelos-digitales-1053559',
    },
    {
      referencia:
        'IAMVR. (n.d.). <em>10 herramientas para crear arte en realidad virtual.</em> I AM VR. Retrieved September 6, 2022, from',
      link:
        'https://i-amvr.com/10-herramientas-para-crear-arte-en-realidad-virtual/',
    },
    {
      referencia:
        'Monsuton. (n.d.). <em>Renderizado 3D ¿qué es el render? Programas para hacerlo</em>). Monsuton. Retrieved September 14, 2022, from',
      link: 'https://www.monsuton.com/renderizado-3d/',
    },
    {
      referencia:
        'PTC CREO. (n.d.). <em>Centro de ayuda de PTC. PTC Support</em>. Retrieved September 16, 2022, from',
      link:
        'https://support.ptc.com/help/creo/creo_pma/r9.0/spanish/index.html#page/part_modeling/part_modeling/Glossary_for_Part.html#',
    },
    {
      referencia:
        'Quasar Dynamics. (n.d.). <em>Dispositivos hápticos en la Realidad Virtual</em>. Quasar Dynamics. Retrieved September 6, 2022, from',
      link:
        'https://quasardynamics.com/dispositivos-hapticos-la-realidad-virtual/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
