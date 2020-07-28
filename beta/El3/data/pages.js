import servicesData from './services'

export const tech = {
  rows: [
    {
      image: 'CISEM-interior-electro-3.jpg',
      paragraphs: [
        'Somos responsables de mantenimiento de la red del CENTRO INTEGRAL DE SEGURIDAD Y EMERGENCIAS (CISEM) de la Secretaría de Seguridad del Gobierno de San Juan.',
        'La red de Cámaras de Seguridad del Gobierno de San Juan, que están bajo la órbita de la Secretaría de Seguridad, es la red de Fibra Óptica interna mas grande de la provincia, cuenta en la actualidad con casi 400 cámaras de alta tecnología en funcionamiento, las cuales se encuentran interconectadas con mas de 700 kilómetros de fibra óptica activa.'
      ]
    },
    {
      image: 'colocacion-camaras-ok-san-juan.jpg',
      paragraphs: [
        'La red CISEM debe encontrarse operativa durante las 24hs del día los 365 días del año, por lo que el personal de mantenimiento y control se encuentra en permanente guardia para poder responder ante cualquier eventualidad.',
        'No solo el mantenimiento se realiza a las cámaras de seguridad, sino también a los sistemas de racks, transformadores, generadores, sistemas de comunicación y oficinas internas y mucho más'
      ]
    },
    {
      image: 'software-electro-3.jpg',
      paragraphs: [
        'Contamos dentro de nuestra área de Redes y Tecnología con un Departamento abocado a la creación de Software y Desarrollo de Aplicaciones y nuevos programas para el mejor manejo de redes, acceso a la información y muchas aplicaciones más.'
      ]
    }
  ]
}

export const compaction = {
  rows: [
    {
      image: 'compactacion-electro-3.jpg',
      paragraphs: [
        'Conscientes de la situación actual mundial, en Electro3 nos propusimos direccionar nuestro esfuerzo a aportar nuestro granito de arena a mejorar el Medio Ambiente.',
        'Con procesos de compactación de rápido funcionamiento, manipulamos cientos de toneladas de chatarra ferrosa, colaborando con la eliminación de elementos altamente contaminantes.'
      ]
    },
    {
      image: 'compactacion-y-reciclado-electro-3.jpg',
      paragraphs: [
        'Durante el año 2019 compactamos, movilizamos y reciclamos mas de 600 mil kilos de chatarra en las provincias de San Juan y Mendoza, logrando recuperar espacios en playas de remoción, espacios privados y muchos lugares mas.',
        'Tenemos capacidad operativa en todo el país, siendo una de las pocas empresas que cuentan con la posibilidad de traslado para el trabajo en el lugar o el traslado de materia prima.',
        'De esta manera, seguimos apostando al reciclaje y la recuperación de materiales'
      ]
    }
  ]
}

export const autoparts = {
  rows: [
    {
      image: 'electro-3-autopartes-electricas.jpg',
      paragraphs: [
        'Líderes en el mercado local con mas de 20 años de experiencia en la Provincia de San Juan.',
        'Contamos con 3 sucursales  en la provincia de San Juan que nos convierten en el comercio líder en el rubro de autopartes eléctricas, con stock para cubrir con la necesidad de casi todo el parque automotor.'
      ]
    },
    {
      image: 'autopartes-electricas-nosso-marelli-electro-3.jpg',
      paragraphs: [
        'Con un catálogo de mas de 200 mil productos, contamos con la mayoría de las autopartes eléctricas en existencia, pudiendo suplir no solo a clientes particulares sino también a comercios y otras entidades.',
        'Vendemos repuestos exclusivos y directo de fabrica, con atención especial a talleres mecánico y personal del medio y ventas al por menos y por mayor.'
      ]
    }
  ]
}

export const bateries = {
  rows: [
    {
      image: 'recambio-bateria-electro-3.jpg',
      paragraphs: [
        'Desde hace más de 20 años somos importadores de las principales marcas de baterías lideres a nivel mundial.',
        'Con un servicio especializado de análisis y control de equipos, contamos con el personal para la revisión de baterías, control y colocación de nuevas unidades.',
        'Creamos un sistema de recuperación de baterías viejas y en desuso para sacarlas de circulación y colaborar con el cuidado del medio ambiente mediante una eficaz manipulación de las mismas.'
      ]
    },
    {
      image: 'baterias-electro-3.jpg',
      paragraphs: [
        'Contamos con stock permanente de una amplia variedad de marcas y modelos de baterías y realizamos importaciones y pedidos a granel directo de fábrica a pedido para grandes clientes.'
      ]
    }
  ]
}

export const services = {
  rows: servicesData.map(service => {
    return {
      ...service,
      style: {marginBottom: '40px', marginTop: '20px'},
      imageStyle: {width: '100px'},
      paragraphs: [service.desc]
    }
  })
}