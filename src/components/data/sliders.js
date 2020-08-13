
export const home = {
  title: 'BLACK TELEPHONE',
  paragraph: 'Con más de 20 años de trayectoria, Black Telephone ha crecido día a día para convertirse en un call center de prestigio. Vendemos planes, diversos servicios y otros productos de telemarketing. Empleamos gente jóven e integramos a todo tipo de personas.',
  slides: [
    {
      image: 'callcenter1.jpg',
      overlayOpacity: 0.2
    },
    {
      image: 'callcenter2.jpg'
    },
    {
      image: 'callcenter3.jpg',
      overlayOpacity: 0.2
    },
    {
      image: 'callcenter4.jpg',
      overlayOpacity: 0.2 
    },  
    {
      image: 'callcenter5.jpg',
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