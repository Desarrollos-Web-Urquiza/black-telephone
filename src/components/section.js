import React from 'react';
import  './utils.css'


export default ({children, title, bg, bgMirror, style = {}, className = ''}) => {
  // let bgClassNames = bg ? utilStyles.sectionBg : ``
  // if(bgMirror) bgClassNames += ` ${sectionBgMirror}`

  return (
    <div 
      style={style}
      className="sectionBg"

    >
     {title && <h2 className="headingLg">{title}</h2>}

    
     
     <img  src="/images/cabel.svg"  className="poste" />
      <h1 align="center" style={{marginTop: -320}}>Telemarketing</h1>
        <hr />
        <h1 align="center">Servicios</h1>
        <hr />
        <h1 align="center">Publicidad</h1>
        <hr />
        <h1 align="center">Atención al cliente</h1>
     <img  src="/images/cabel2.svg"  className="poste2" />
     {/*{children}*/}


    </div>
  )
}
 