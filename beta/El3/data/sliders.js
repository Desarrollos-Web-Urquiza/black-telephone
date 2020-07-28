
export const home = {
  title: 'SOMOS INNOVACIÓN',
  paragraph: 'Con más de 20 años de trayectoria, Electro3 ha crecido día a día para convertirse en una empresa multi propósito, líder en cada sector que explora. Estamos comprometidos con el crecimiento regional y con el cuidado del Medio Ambiente. En cada rubro maximizamos la optimización de recursos y el recupero y/o reciclado de elementos.',
  slides: [
    {
      image: 'electro-3-camaras-redes-y-tecnologia.jpg',
      overlayOpacity: 0.2
    },
    {
      image: 'electro-3-compactacion-y-prensado.jpg'
    },
    {
      image: 'electro-3-redes-y-tecnologia.jpg',
      overlayOpacity: 0.2
    },
    {
      image: 'electro-3-redes-y-tecnologia-san-juan.jpg',
      overlayOpacity: 0.2 
    },  
    {
      image: 'electro-3-autopartes-electricas.jpg',
      overlayOpacity: 0.5
    }
  ]
}

export const tech = {
  title: 'REDES Y TECNOLOGÍA',
  short: true,
  slides: [home.slides[0]]
}

export const compaction = {
  title: 'COMPACTACIÓN Y RECICLADO',
  short: true,
  slides: [home.slides[1]]
}

export const autoparts = {
  title: 'AUTOPARTES ELÉCTRICAS',
  short: true,
  slides: [home.slides[4]]
}

export const bateries = {
  title: 'BATERÍAS',
  short: true,
  slides: [home.slides[3]]
}

export const contact = {
  title: 'CONTACTO',
  short: true,
  slides: [home.slides[4]]
}

export const workWithUs = {
  title: 'TRABAJÁ CON NOSOTROS',
  short: true,
  slides: [home.slides[4]]
}

export const services = {
  title: 'SERVICIOS',
  short: true,
  slides: [home.slides[0]]
}