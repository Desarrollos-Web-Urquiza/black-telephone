import React, { useEffect } from 'react';

import { motion } from "framer-motion";

import Card from '@material-ui/core/Card';
import { green, purple, grey, amber } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import TopBar from '../topBar'

const CardSelect = withStyles((theme) => ({
  root: {

    backgroundColor: grey[100],
    width: 500,

    '&:hover': {
      backgroundColor: grey[100],
    },
  },
}))(Card);

const CardSelectTerritory = withStyles((theme) => ({
  root: {

    backgroundColor: '#d8ae74',
    width: 675,

    '&:hover': {
      backgroundColor: '#d8ae74',
    },
  },
}))(Card);

const Help = props => {
  
  const [handleDrawerOpen, setHandleDrawerOpen] = React.useState(false);

  const handleDrawerOpenFunction =  (esto) => {

    console.log(handleDrawerOpen)

    setHandleDrawerOpen(true)

  }

  const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.76]
  };

  const backVariants = {
    initial: {x: 0, opacity: 0, transition},
    exit: { x: 0, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition }
  };

  return (

    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={backVariants}>

        <div align= "center" style={{marginTop: 100}}>

          <TopBar
            
            page={"home"} 

            onOpenDrawer={ () => handleDrawerOpenFunction(this)}
          
            history={props.history}
          
          />

          <h1>CÓMO USAR EL SISTEMA DE LLAMADAS DE BLACK TELEPHONE</h1>
          
          <h2 style={{marginTop: 50}}>Propósito del sistema</h2>

          <p style={{marginLeft: 20}}>
            
            Debido a la pandemia del Covid-19 hemos creado este sistema para que cada empleado de Black Telephone pueda trabajar en la modalidad "home office". 
            
            <br />
            <br />

            De esta forma cada empleado puede colaborar con sus compañeros llamando de forma cooperativa desde su casa y realizando los registros pertinentes.
                      
          </p>

          <h2 style={{marginTop: 50}}>Qué es un territorio</h2>

          <p style={{marginLeft: 20}}>
            En Black Telephone le llamamos "territorio" a un conjunto de números telefónicos de personas que son potenciales clientes a los cuales nuestros empleados se encargarán de llamar.
          
            <br />
            <br />
            
            Estos territorios se ordenan numéricamente y se almacenan en archivos de hojas de cálculo en los que figurarán cuatro columnas: "Nombre", "Direccion", "Telefono", "Territorio". 

          </p>

          <h2 tyle={{marginLeft: 50}}>Cómo importar un territorio al sistema</h2>
          
          <p style={{marginLeft: 20}}>
            Descargue un territorio  <a href="https://drive.google.com/uc?id=1Gcp5_1JF-JRC0SHY3X7SMI83KJGdiZ5S&export=download&authuser=0" >aquí</a>.
            
            <br />
            <br />

            Luego importe la hoja de cálculo en la página anterior y verá el resultado.

          </p>

        </div>
      </motion.div>
		</motion.div>
  )

}

export default  Help  ;